import express from 'express';
import {
  markPresent,
  markAbsent,
  getAttendanceByAlumna,
  getMyAttendance,
  getAttendanceBySchedule,
  getAttendanceRecord,
  getAttendanceStatistics
} from '../controllers/attendanceController.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

/**
 * POST /api/attendance/:reservationId/present
 * Mark attendance as present for a reservation
 * Only DUEÑA can mark attendance
 * Body: empty (uses reservationId from URL)
 */
router.post('/:reservationId/present', authMiddleware, requireRole('DUEÑA'), markPresent);

/**
 * POST /api/attendance/:reservationId/absent
 * Mark attendance as absent for a reservation
 * Only DUEÑA can mark attendance
 * Body: empty (uses reservationId from URL)
 */
router.post('/:reservationId/absent', authMiddleware, requireRole('DUEÑA'), markAbsent);

/**
 * GET /api/attendance/alumna/mine
 * Get attendance records for the logged-in student
 * Only ALUMNA can view their own records
 * Must come BEFORE /:alumnaId route
 */
router.get('/alumna/mine', authMiddleware, getMyAttendance);

/**
 * GET /api/attendance/alumna/:alumnaId
 * Get all attendance records for a specific student
 * DUEÑA can view all, ALUMNA can view own
 */
router.get('/alumna/:alumnaId', authMiddleware, getAttendanceByAlumna);

/**
 * GET /api/attendance/schedule/:scheduleId
 * Get all attendance records for a specific schedule
 * Only DUEÑA can view
 */
router.get('/schedule/:scheduleId', authMiddleware, requireRole('DUEÑA'), getAttendanceBySchedule);

/**
 * GET /api/attendance/stats/:alumnaId
 * Get attendance statistics for a student
 * Returns: total classes, present, absent, percentage
 * DUEÑA can view all, ALUMNA can view own
 */
router.get('/stats/:alumnaId', authMiddleware, getAttendanceStatistics);

/**
 * GET /api/attendance/:id
 * Get a specific attendance record by ID
 * Only DUEÑA can view
 * Must come after other routes to avoid conflicts
 */
router.get('/:id', authMiddleware, requireRole('DUEÑA'), getAttendanceRecord);

export default router;
