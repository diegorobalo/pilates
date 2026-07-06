/**
 * Vercel handler for /api/attendance/*
 * POST /api/attendance/:reservationId/present - Mark present
 * POST /api/attendance/:reservationId/absent - Mark absent
 * GET /api/attendance/alumna/:alumnaId - Get by student
 * GET /api/attendance/schedule/:scheduleId - Get by schedule
 * GET /api/attendance/stats/:alumnaId - Get statistics
 * GET /api/attendance/:id - Get record by ID
 */
import {
  markPresent,
  markAbsent,
  getAttendanceByAlumna,
  getAttendanceBySchedule,
  getAttendanceRecord,
  getAttendanceStatistics
} from './controllers/attendanceController.js';
import { authMiddleware, requireRole } from './middleware/auth.js';

function applyCors(res, req) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function withAuth(handler, allowedRoles = null) {
  return async (req, res) => {
    return new Promise((resolve) => {
      authMiddleware(req, res, () => {
        if (allowedRoles) {
          requireRole(allowedRoles)(req, res, async () => {
            resolve(await handler(req, res));
          });
        } else {
          resolve(handler(req, res));
        }
      });
    });
  };
}

export default async function handler(req, res) {
  applyCors(res, req);

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
    const segments = pathname.split('/').filter(Boolean);

    // POST /api/attendance/:reservationId/present - Mark present
    if (segments.length === 4 && segments[1].match(/^[a-zA-Z0-9-]+$/) && segments[2] === 'present' && req.method === 'POST') {
      req.params = { reservationId: segments[1] };
      return await withAuth(markPresent, 'DUEÑA')(req, res);
    }

    // POST /api/attendance/:reservationId/absent - Mark absent
    if (segments.length === 4 && segments[1].match(/^[a-zA-Z0-9-]+$/) && segments[2] === 'absent' && req.method === 'POST') {
      req.params = { reservationId: segments[1] };
      return await withAuth(markAbsent, 'DUEÑA')(req, res);
    }

    // GET /api/attendance/alumna/:alumnaId - Get by student
    if (segments.length === 4 && segments[2] === 'alumna' && segments[3].match(/^[a-zA-Z0-9-]+$/) && req.method === 'GET') {
      req.params = { alumnaId: segments[3] };
      return await withAuth(getAttendanceByAlumna)(req, res);
    }

    // GET /api/attendance/schedule/:scheduleId - Get by schedule
    if (segments.length === 4 && segments[2] === 'schedule' && segments[3].match(/^[a-zA-Z0-9-]+$/) && req.method === 'GET') {
      req.params = { scheduleId: segments[3] };
      return await withAuth(getAttendanceBySchedule, 'DUEÑA')(req, res);
    }

    // GET /api/attendance/stats/:alumnaId - Get statistics
    if (segments.length === 4 && segments[2] === 'stats' && segments[3].match(/^[a-zA-Z0-9-]+$/) && req.method === 'GET') {
      req.params = { alumnaId: segments[3] };
      return await withAuth(getAttendanceStatistics)(req, res);
    }

    // GET /api/attendance/:id - Get record by ID (must come last)
    if (segments.length === 3 && segments[1].match(/^[a-zA-Z0-9-]+$/) && req.method === 'GET') {
      req.params = { id: segments[1] };
      return await withAuth(getAttendanceRecord, 'DUEÑA')(req, res);
    }

    res.status(404).json({ error: 'Attendance endpoint not found' });
  } catch (error) {
    console.error('Attendance handler error:', error);
    res.status(500).json({ error: error.message });
  }
}
