import express from 'express';
import {
  requestAccess,
  requestPhoneVerification,
  verifyPhoneCode,
  refreshAccessToken
} from '../controllers/authController.js';

const router = express.Router();

/**
 * POST /api/auth/access
 * Request access by phone. Returns { status: active | pending | pending_created | inactive }.
 * Never generates or returns a verification code.
 */
router.post('/access', requestAccess);

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
