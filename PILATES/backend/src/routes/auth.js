import express from 'express';
import {
  requestPhoneVerification,
  verifyPhoneCode,
  refreshAccessToken
} from '../controllers/authController.js';

const router = express.Router();

/**
 * POST /api/auth/request-code
 * Request phone verification code
 * Body: { phone: string }
 * Response: { message, phone, code (dev only), expiresIn }
 */
router.post('/request-code', requestPhoneVerification);

/**
 * POST /api/auth/verify-code
 * Verify phone code and get JWT tokens
 * Body: { phone: string, code: string }
 * Response: { message, user, token, refreshToken }
 */
router.post('/verify-code', verifyPhoneCode);

/**
 * POST /api/auth/refresh
 * Refresh access token
 * Body: { refreshToken: string }
 * Response: { message, token }
 */
router.post('/refresh', refreshAccessToken);

export default router;
