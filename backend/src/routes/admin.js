import express from 'express';
import {
  adminLogin,
  adminMe,
  updateAdminCredentials,
  adminForgotPassword,
  adminResetPassword
} from '../controllers/adminController.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

// Public admin auth endpoints
router.post('/login', adminLogin);
router.post('/forgot-password', adminForgotPassword);
router.post('/reset-password', adminResetPassword);

// Protected admin-only endpoints
router.get('/me', authMiddleware, requireRole('ADMIN'), adminMe);
router.put('/credentials', authMiddleware, requireRole('ADMIN'), updateAdminCredentials);

export default router;
