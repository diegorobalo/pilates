import Attendance from '../models/Attendance.js';
import Reservation from '../models/Reservation.js';

/**
 * Mark a reservation as present
 * POST /api/attendance/:reservationId/present
 * DUEÑA marks a student as present for a class
 */
export const markPresent = async (req, res, next) => {
  try {
    const { reservationId } = req.params;

    if (!reservationId) {
      return res.status(400).json({
        error: 'Missing required parameter: reservationId'
      });
    }

    // Get the reservation to extract alumna_id and horario_id
    const reservation = await Reservation.findById(reservationId);
    if (!reservation) {
      return res.status(404).json({
        error: 'Reservation not found'
      });
    }

    // Mark as present
    const attendance = await Attendance.markPresent({
      alumna_id: reservation.alumna_id,
      horario_id: reservation.horario_id,
      registrada_por: req.user.userId
    });

    res.status(201).json({
      message: 'Attendance marked as present',
      attendance
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Mark a reservation as absent
 * POST /api/attendance/:reservationId/absent
 * DUEÑA marks a student as absent for a class
 */
export const markAbsent = async (req, res, next) => {
  try {
    const { reservationId } = req.params;

    if (!reservationId) {
      return res.status(400).json({
        error: 'Missing required parameter: reservationId'
      });
    }

    // Get the reservation to extract alumna_id and horario_id
    const reservation = await Reservation.findById(reservationId);
    if (!reservation) {
      return res.status(404).json({
        error: 'Reservation not found'
      });
    }

    // Mark as absent
    const attendance = await Attendance.markAbsent({
      alumna_id: reservation.alumna_id,
      horario_id: reservation.horario_id,
      registrada_por: req.user.userId
    });

    res.status(201).json({
      message: 'Attendance marked as absent',
      attendance
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all attendance records for a specific student
 * GET /api/attendance/alumna/:alumnaId
 * DUEÑA or the student themselves can view
 */
export const getAttendanceByAlumna = async (req, res, next) => {
  try {
    const { alumnaId } = req.params;

    if (!alumnaId) {
      return res.status(400).json({
        error: 'Missing required parameter: alumnaId'
      });
    }

    // Authorization: DUEÑA can view all, ALUMNA can only view own
    if (req.user.tipo === 'ALUMNA' && req.user.userId !== alumnaId) {
      return res.status(403).json({
        error: 'Insufficient permissions',
        message: 'You can only view your own attendance records'
      });
    }

    const attendanceRecords = await Attendance.findByAlumna(alumnaId);

    res.json({
      total: attendanceRecords.length,
      attendanceRecords
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get attendance records for the logged-in student
 * GET /api/attendance/alumna/mine
 * Only ALUMNA can view their own records
 */
export const getMyAttendance = async (req, res, next) => {
  try {
    if (req.user.tipo !== 'ALUMNA') {
      return res.status(403).json({
        error: 'Insufficient permissions',
        message: 'Only students can access their own attendance'
      });
    }

    const attendanceRecords = await Attendance.findByAlumna(req.user.userId);

    res.json({
      attendance: attendanceRecords
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all attendance records for a specific schedule
 * GET /api/attendance/schedule/:scheduleId
 * DUEÑA can view attendance for any schedule
 */
export const getAttendanceBySchedule = async (req, res, next) => {
  try {
    const { scheduleId } = req.params;

    if (!scheduleId) {
      return res.status(400).json({
        error: 'Missing required parameter: scheduleId'
      });
    }

    const attendanceRecords = await Attendance.findBySchedule(scheduleId);

    res.json({
      total: attendanceRecords.length,
      attendanceRecords
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a specific attendance record by ID
 * GET /api/attendance/:id
 * DUEÑA can view any record
 */
export const getAttendanceRecord = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        error: 'Missing required parameter: id'
      });
    }

    const attendance = await Attendance.findById(id);
    if (!attendance) {
      return res.status(404).json({
        error: 'Attendance record not found'
      });
    }

    res.json(attendance);
  } catch (error) {
    next(error);
  }
};

/**
 * Get attendance statistics for a student
 * GET /api/attendance/stats/:alumnaId
 * Returns: total classes, present, absent, percentage
 * DUEÑA or the student themselves can view
 */
export const getAttendanceStatistics = async (req, res, next) => {
  try {
    const { alumnaId } = req.params;

    if (!alumnaId) {
      return res.status(400).json({
        error: 'Missing required parameter: alumnaId'
      });
    }

    // Authorization: DUEÑA can view all, ALUMNA can only view own
    if (req.user.tipo === 'ALUMNA' && req.user.userId !== alumnaId) {
      return res.status(403).json({
        error: 'Insufficient permissions',
        message: 'You can only view your own attendance statistics'
      });
    }

    // Get all attendance records for the student
    const attendanceRecords = await Attendance.findByAlumna(alumnaId);

    if (!attendanceRecords || attendanceRecords.length === 0) {
      return res.json({
        alumnaId,
        totalClasses: 0,
        present: 0,
        absent: 0,
        percentage: 0
      });
    }

    // Calculate statistics
    const totalClasses = attendanceRecords.length;
    const present = attendanceRecords.filter(a => a.presente === 1).length;
    const absent = totalClasses - present;
    const percentage = totalClasses > 0 ? Math.round((present / totalClasses) * 100) : 0;

    res.json({
      alumnaId,
      totalClasses,
      present,
      absent,
      percentage
    });
  } catch (error) {
    next(error);
  }
};
