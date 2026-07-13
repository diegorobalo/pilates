import express from 'express';
import {
  createPayment,
  getPaymentById,
  getPaymentsByAlumna,
  getMyPayments,
  getPaymentsByMonth,
  updatePayment,
  deletePayment,
  getFinanceStats,
  getPaymentStatus
} from '../controllers/paymentController.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

/**
 * POST /api/payments
 * Create a new payment record
 * Only DUEÑA can create payments
 * Body: { alumnaId, monto, fecha_pago, mes_referencia, metodo, [notas] }
 */
router.post('/', authMiddleware, requireRole('DUEÑA'), createPayment);

/**
 * GET /api/payments/stats
 * Get financial statistics (total collected, by method, by month, status summary)
 * Only DUEÑA can view stats
 * Note: This must be placed BEFORE /:id to avoid conflict
 */
router.get('/stats', authMiddleware, requireRole('DUEÑA'), getFinanceStats);

/**
 * GET /api/payments/:id
 * Get a single payment by ID
 * Only DUEÑA can view
 */
router.get('/:id', authMiddleware, requireRole('DUEÑA'), getPaymentById);

/**
 * GET /api/payments/alumna/me
 * Get payments for the logged-in student
 * Only ALUMNA can view their own payments
 * Must come BEFORE /alumna/:alumnaId route
 */
router.get('/alumna/me', authMiddleware, getMyPayments);

/**
 * GET /api/payments/alumna/:alumnaId
 * Get all payments for a specific student
 * DUEÑA can view, or student can view their own
 * Note: This must be placed BEFORE /month/:monthYear pattern
 */
router.get('/alumna/:alumnaId', authMiddleware, (req, res, next) => {
  // Staff can view anyone; a student can view only their own
  const staff = ['DUEÑA', 'ADMIN', 'PROFESORA'];
  if (staff.includes(req.user.tipo) || req.user.userId === req.params.alumnaId) {
    return next();
  }
  return res.status(403).json({
    error: 'Insufficient permissions',
    message: 'You can only view your own payments'
  });
}, getPaymentsByAlumna);

/**
 * GET /api/payments/month/:monthYear
 * Get all payments for a specific month (YYYY-MM format)
 * Only DUEÑA can view
 */
router.get('/month/:monthYear', authMiddleware, requireRole('DUEÑA'), getPaymentsByMonth);

/**
 * GET /api/payments/status/:alumnaId
 * Get payment status for a student (AL_DIA, VENCIDA, PENDIENTE)
 * DUEÑA can view, or student can view their own
 */
router.get('/status/:alumnaId', authMiddleware, (req, res, next) => {
  const staff = ['DUEÑA', 'ADMIN', 'PROFESORA'];
  if (staff.includes(req.user.tipo) || req.user.userId === req.params.alumnaId) {
    return next();
  }
  return res.status(403).json({
    error: 'Insufficient permissions',
    message: 'You can only view your own payment status'
  });
}, getPaymentStatus);

/**
 * PUT /api/payments/:id
 * Update a payment record
 * Only DUEÑA can update
 * Body: { [monto, fecha_pago, mes_referencia, metodo, notas] }
 */
router.put('/:id', authMiddleware, requireRole('DUEÑA'), updatePayment);

/**
 * DELETE /api/payments/:id
 * Delete a payment record
 * Only DUEÑA can delete
 */
router.delete('/:id', authMiddleware, requireRole('DUEÑA'), deletePayment);

export default router;
