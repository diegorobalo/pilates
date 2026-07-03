import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import User from '../models/User.js';
import db from '../db/connection.js';

const JWT_SECRET = process.env.JWT_SECRET;
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

  return new Promise((resolve, reject) => {
    db.run(
      `INSERT OR REPLACE INTO verification_codes (id, telefono, code, attempts, expires_at, created_at)
       VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
      [id, phone, code, 0, expiresAt.toISOString()],
      (err) => {
        if (err) reject(err);
        else resolve({ id, expiresAt });
      }
    );
  });
}

/**
 * Get verification code from database
 */
async function getVerificationCode(phone) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM verification_codes WHERE telefono = ? AND expires_at > CURRENT_TIMESTAMP`,
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
    await saveVerificationCode(phone, code);

    // In development mode, return the code (for testing)
    if (process.env.NODE_ENV === 'development') {
      return res.json({
        message: 'Verification code sent',
        phone,
        code, // Development mode only
        expiresIn: '10 minutes'
      });
    }

    // In production, would send via SMS service
    res.json({
      message: 'Verification code sent to your phone',
      phone,
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
      token,
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
