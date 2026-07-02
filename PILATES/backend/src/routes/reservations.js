import express from 'express';
import {
  requestReservation,
  listReservations,
  getReservationById,
  confirmReservation,
  rejectReservation,
  cancelReservation,
  getPendingReservations
} from '../controllers/reservationController.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

/**
 * POST /api/reservations
 * Request a new reservation
 * ALUMNA submits a reservation for a class
 * Body: { horario_id, cama_numero }
 * - horario_id: ID of the schedule
 * - cama_numero: Bed number (1-6)
 */
router.post('/', authMiddleware, requireRole('ALUMNA'), requestReservation);

/**
 * GET /api/reservations
 * Get all reservations (for DUEÑA)
 * Optional query params: ?estado=PENDIENTE&horario_id=xxx&alumna_id=xxx
 * - estado: Filter by status (PENDIENTE, CONFIRMADA, RECHAZADA, CANCELADA)
 * - horario_id: Filter by schedule ID
 * - alumna_id: Filter by student ID
 */
router.get('/', authMiddleware, requireRole('DUEÑA'), listReservations);

/**
 * GET /api/reservations/pending
 * Get all pending reservations
 * Only DUEÑA can view this
 * Must come before /:id route to avoid conflict
 */
router.get('/pending', authMiddleware, requireRole('DUEÑA'), getPendingReservations);

/**
 * GET /api/reservations/:id
 * Get a specific reservation by ID
 */
router.get('/:id', authMiddleware, getReservationById);

/**
 * POST /api/reservations/:id/confirm
 * Confirm a pending reservation
 * Only DUEÑA can confirm
 */
router.post('/:id/confirm', authMiddleware, requireRole('DUEÑA'), confirmReservation);

/**
 * POST /api/reservations/:id/reject
 * Reject a pending reservation
 * Only DUEÑA can reject
 * Body: { [razonRechazo] } - optional reason for rejection
 */
router.post('/:id/reject', authMiddleware, requireRole('DUEÑA'), rejectReservation);

/**
 * POST /api/reservations/:id/cancel
 * Cancel a reservation
 * ALUMNA can cancel their own, DUEÑA can cancel any
 */
router.post('/:id/cancel', authMiddleware, cancelReservation);

export default router;
