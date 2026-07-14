import express from 'express';
import { getStudentLegajo, recordPayment } from '../controllers/legajoController.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

/**
 * GET /api/legajo/:alumna_id
 * Get complete student profile/legajo with payment status
 * Accessible to: DUEÑA, ADMIN
 */
router.get('/:alumna_id', authMiddleware, requireRole('DUEÑA', 'ADMIN'), getStudentLegajo);

/**
 * POST /api/legajo/:alumna_id/pagar
 * Record a payment for a student
 * Body: { monto, metodo, notas? }
 * Only DUEÑA can record payments
 */
router.post('/:alumna_id/pagar', authMiddleware, requireRole('DUEÑA'), recordPayment);

export default router;
