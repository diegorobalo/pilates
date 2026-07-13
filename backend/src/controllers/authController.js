import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import User from '../models/User.js';
import db from '../db/connection.js';
import { getAsync, runAsync } from '../db/connection.js';

const JWT_SECRET = process.env.JWT_SECRET_KEY;
const JWT_EXPIRE = process.env.JWT_EXPIRE || '7d';
const verificationCodeTTL = 10 * 60; // 10 minutes in seconds

/**
 * Generate a random 6-digit verification code
 * @returns {string} Verification code
 */
function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * Save verification code to database
 */
async function saveVerificationCode(phone, code) {
  const id = uuid();
  const expiresAt = new Date(Date.now() + verificationCodeTTL * 1000);

  // Ensure only one active code per phone: remove any previous ones first.
  await new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM verification_codes WHERE telefono = ?`,
      [phone],
      (err) => (err ? reject(err) : resolve())
    );
  });

  await new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO verification_codes (id, telefono, code, attempts, expires_at, created_at)
       VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
      [id, phone, code, 0, expiresAt.toISOString()],
      (err) => (err ? reject(err) : resolve())
    );
  });

  return { id, expiresAt };
}

/**
 * Get verification code from database
 */
async function getVerificationCode(phone) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM verification_codes WHERE telefono = ? AND expires_at > CURRENT_TIMESTAMP ORDER BY created_at DESC LIMIT 1`,
      [phone],
      (err, row) => {
        if (err) reject(err);
        else resolve(row);
      }
    );
  });
}

/**
 * Increment verification attempts
 */
async function incrementVerificationAttempts(phone) {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE verification_codes SET attempts = attempts + 1 WHERE telefono = ?`,
      [phone],
      function(err) {
        if (err) reject(err);
        else resolve(this.changes);
      }
    );
  });
}

/**
 * Delete verification code
 */
async function deleteVerificationCode(phone) {
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM verification_codes WHERE telefono = ?`,
      [phone],
      function(err) {
        if (err) reject(err);
        else resolve(this.changes);
      }
    );
  });
}

/**
 * Request access to the system by phone number.
 * - Existing ACTIVA user  -> { status: 'active' }   (frontend shows the code step)
 * - Existing PENDIENTE     -> { status: 'pending' }
 * - Existing INACTIVA      -> { status: 'inactive' }
 * - New number             -> creates a PENDIENTE request, { status: 'pending_created' }
 * The verification code is NEVER generated or shown here; staff send it via WhatsApp.
 */
export const requestAccess = async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone || !/^[\d\s\-\+\(\)]+$/.test(phone)) {
      return res.status(400).json({ error: 'Invalid phone', message: 'Número de teléfono inválido' });
    }

    const user = await User.findByPhone(phone);
    if (user) {
      if (user.estado === 'ACTIVA') {
        // Greet returning users by the name the studio assigned (if any).
        const nombre = user.nombre && user.nombre !== user.telefono ? user.nombre : null;
        return res.json({ status: 'active', nombre });
      }
      if (user.estado === 'PENDIENTE') return res.json({ status: 'pending' });
      // Previously removed user asking for access again: reopen as a pending
      // request so staff can re-approve and re-send the code.
      await User.reactivate(user.id);
      return res.json({ status: 'pending_created' });
    }

    await User.create({ nombre: phone, telefono: phone, tipo: 'ALUMNA', estado: 'PENDIENTE' });
    return res.json({ status: 'pending_created' });
  } catch (error) {
    console.error('requestAccess error:', error);
    res.status(500).json({ error: 'Request failed', message: error.message });
  }
};

/**
 * Request phone verification - sends a code to the user's phone
 * In development mode, returns the code directly for testing
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
export const requestPhoneVerification = async (req, res) => {
  try {
    const { phone } = req.body;

    // Validate phone format
    if (!phone || !/^[\d\s\-\+\(\)]+$/.test(phone)) {
      return res.status(400).json({
        error: 'Invalid phone format',
        message: 'Phone must contain only numbers, spaces, dashes, plus, or parentheses'
      });
    }

    // Check if user exists with this phone
    const user = await User.findByPhone(phone);
    if (!user) {
      return res.status(404).json({
        error: 'User not found',
        message: 'No user registered with this phone number'
      });
    }

    // Generate verification code
    const code = generateVerificationCode();

    // Store code in database
    const { id: codeId, expiresAt } = await saveVerificationCode(phone, code);

    // The code is never returned to the client. Staff deliver it via WhatsApp
    // (see POST /api/users/:id/send-code). This endpoint just (re)generates it.
    res.json({
      message: 'Verification code generated',
      phone,
      codeId,
      expiresAt,
      expiresIn: '10 minutes'
    });
  } catch (error) {
    console.error('Error requesting phone verification:', error);
    res.status(500).json({
      error: 'Verification request failed',
      message: error.message
    });
  }
};

/**
 * Verify phone code and return JWT tokens
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
export const verifyPhoneCode = async (req, res) => {
  try {
    const { phone, code } = req.body;

    // Validate inputs
    if (!phone || !code) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Phone and code are required'
      });
    }

    // Check if verification code exists and is not expired
    const stored = await getVerificationCode(phone);
    if (!stored) {
      return res.status(401).json({
        error: 'Invalid or expired code',
        message: 'Verification code not found or has expired'
      });
    }

    // Check for too many attempts
    if (stored.attempts >= 3) {
      await deleteVerificationCode(phone);
      return res.status(429).json({
        error: 'Too many attempts',
        message: 'Maximum verification attempts exceeded. Please request a new code'
      });
    }

    // Verify code
    if (stored.code !== code) {
      await incrementVerificationAttempts(phone);
      const updatedCode = await getVerificationCode(phone);
      const attemptsRemaining = 3 - (updatedCode?.attempts || 0);
      return res.status(401).json({
        error: 'Invalid code',
        message: `Wrong verification code. ${attemptsRemaining} attempts remaining`
      });
    }

    // Code is valid - get user
    const user = await User.findByPhone(phone);
    if (!user) {
      return res.status(404).json({
        error: 'User not found',
        message: 'User was deleted or does not exist'
      });
    }

    // Only approved (active) users can obtain tokens.
    if (user.estado !== 'ACTIVA') {
      return res.status(403).json({
        error: 'Access not active',
        message: 'Tu acceso todavía no está habilitado. La profe debe aprobarte.'
      });
    }

    // Generate JWT tokens
    const payload = {
      userId: user.id,
      tipo: user.tipo,
      telefono: user.telefono
    };

    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRE,
      issuer: 'pilates-api'
    });

    const refreshToken = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '30d',
      issuer: 'pilates-api'
    });

    // Clear verification code
    await deleteVerificationCode(phone);

    // Return user data (without sensitive info) and tokens
    res.json({
      message: 'Authentication successful',
      user: {
        id: user.id,
        nombre: user.nombre,
        telefono: user.telefono,
        tipo: user.tipo
      },
      accessToken: token,
      refreshToken
    });
  } catch (error) {
    console.error('Error verifying phone code:', error);
    res.status(500).json({
      error: 'Verification failed',
      message: error.message
    });
  }
};

/**
 * Refresh access token using refresh token
 * @param {Object} req - Express request
 * @param {Object} res - Express response
 */
export const refreshAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    // Validate input
    if (!refreshToken) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Refresh token is required'
      });
    }

    // Verify refresh token
    let decoded;
    try {
      decoded = jwt.verify(refreshToken, JWT_SECRET);
    } catch (error) {
      return res.status(401).json({
        error: 'Invalid refresh token',
        message: error.message
      });
    }

    // Get user to ensure they still exist
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({
        error: 'User not found',
        message: 'User associated with token was deleted'
      });
    }

    // Generate new access token
    const payload = {
      userId: user.id,
      tipo: user.tipo,
      telefono: user.telefono
    };

    const newToken = jwt.sign(payload, JWT_SECRET, {
      expiresIn: JWT_EXPIRE,
      issuer: 'pilates-api'
    });

    res.json({
      message: 'Token refreshed successfully',
      token: newToken
    });
  } catch (error) {
    console.error('Error refreshing token:', error);
    res.status(500).json({
      error: 'Token refresh failed',
      message: error.message
    });
  }
};

/**
 * Get or create DUEÑA config (single row)
 */
async function getDueñaConfig() {
  try {
    let row = await getAsync('SELECT * FROM dueña_config WHERE id = 1');
    if (!row) {
      // Initialize with default credentials on first use
      const hash = await bcrypt.hash('dueña123', 10);
      await runAsync(
        'INSERT INTO dueña_config (id, username, password_hash, email) VALUES (1, ?, ?, NULL)',
        ['dueña', hash]
      );
      row = await getAsync('SELECT * FROM dueña_config WHERE id = 1');
    }
    return row;
  } catch (error) {
    throw new Error(`Error getting DUEÑA config: ${error.message}`);
  }
}

function signDueñaTokens(cfg) {
  const payload = { userId: cfg.id, tipo: 'DUEÑA', username: cfg.username };
  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE, issuer: 'pilates-api' });
  const refreshToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '30d', issuer: 'pilates-api' });
  return { accessToken, refreshToken };
}

/**
 * POST /api/auth/login-owner  { username, password }
 * Login as DUEÑA using username and password
 */
export const dueñaLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        error: 'Invalid request',
        message: 'Usuario y contraseña son requeridos'
      });
    }

    const cfg = await getDueñaConfig();
    const ok = username === cfg.username && (await bcrypt.compare(password, cfg.password_hash));
    if (!ok) {
      return res.status(401).json({
        error: 'Invalid credentials',
        message: 'Usuario o contraseña incorrectos'
      });
    }

    const { accessToken, refreshToken } = signDueñaTokens(cfg);
    res.json({
      message: 'DUEÑA authenticated',
      user: { id: cfg.id, nombre: 'Propietaria', tipo: 'DUEÑA', username: cfg.username },
      accessToken,
      refreshToken
    });
  } catch (error) {
    console.error('DUEÑA login error:', error);
    res.status(500).json({
      error: 'Login failed',
      message: error.message
    });
  }
};
