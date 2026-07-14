import express from 'express';
import {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateScheduleStatus,
  deleteSchedule,
  getAvailableBeds
} from '../controllers/scheduleController.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

/**
 * POST /api/schedules
 * Create a new class schedule
 * Only DUEÑA can create schedules
 * Body: { fecha, hora, [capacidad] }
 * - fecha: YYYY-MM-DD format
 * - hora: HH:MM format
 * - capacidad: optional, default is 6
 */
router.post('/', authMiddleware, requireRole('DUEÑA'), createSchedule);

/**
 * GET /api/schedules
 * Get all schedules with optional date range filter
 * Query params: ?fechaInicio=YYYY-MM-DD&fechaFin=YYYY-MM-DD
 * - If both fechaInicio and fechaFin are provided: returns schedules within that range
 * - Otherwise: returns all schedules
 */
router.get('/', authMiddleware, getAllSchedules);

/**
 * GET /api/schedules/:id
 * Get a single schedule by ID
 */
router.get('/:id', authMiddleware, getScheduleById);

/**
 * PUT /api/schedules/:id
 * Update schedule status or other fields
 * Only DUEÑA can update schedules
 * Body: { [estado, fecha, hora, capacidad] }
 * - estado: ABIERTA, CERRADA, or CANCELADA
 * - fecha: YYYY-MM-DD format
 * - hora: HH:MM format
 * - capacidad: positive number
 */
router.put('/:id', authMiddleware, requireRole('DUEÑA'), updateScheduleStatus);

/**
 * DELETE /api/schedules/:id
 * Delete a schedule
 * Only DUEÑA can delete schedules
 */
router.delete('/:id', authMiddleware, requireRole('DUEÑA'), deleteSchedule);

/**
 * GET /api/schedules/:id/available-beds
 * Get available bed numbers for a schedule
 * Returns array of available bed numbers (1 to capacidad) that haven't been reserved
 */
router.get('/:id/available-beds', authMiddleware, getAvailableBeds);

export default router;
