import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE = process.env.JWT_EXPIRE || '7d';

// In-memory storage for verification codes (dev only)
// In production, use Redis or database with expiration
const verificationCodes = new Map();
const verificationCodeTTL = 10 * 60 * 1000; // 10 minutes

/**
 * Generate a random 6-digit verification code
 * @returns {string} Verification code
 */
function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
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

    // Store code with timestamp for expiration
    verificationCodes.set(phone, {
      code,
      createdAt: Date.now(),
      attempts: 0
    });

    // Clean up expired codes after TTL
    setTimeout(() => {
      verificationCodes.delete(phone);
    }, verificationCodeTTL);

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

    // Check if verification code exists
    const stored = verificationCodes.get(phone);
    if (!stored) {
      return res.status(401).json({
        error: 'Invalid or expired code',
        message: 'Verification code not found or has expired'
      });
    }

    // Check if code has expired
    if (Date.now() - stored.createdAt > verificationCodeTTL) {
      verificationCodes.delete(phone);
      return res.status(401).json({
        error: 'Code expired',
        message: 'Verification code has expired. Please request a new one'
      });
    }

    // Check for too many attempts
    if (stored.attempts >= 3) {
      verificationCodes.delete(phone);
      return res.status(429).json({
        error: 'Too many attempts',
        message: 'Maximum verification attempts exceeded. Please request a new code'
      });
    }

    // Verify code
    if (stored.code !== code) {
      stored.attempts++;
      return res.status(401).json({
        error: 'Invalid code',
        message: `Wrong verification code. ${3 - stored.attempts} attempts remaining`
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
    verificationCodes.delete(phone);

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
