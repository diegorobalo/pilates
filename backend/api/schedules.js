/**
 * Vercel handler for /api/schedules/*
 * POST /api/schedules - Create schedule
 * GET /api/schedules - List schedules
 * GET /api/schedules/:id - Get schedule by ID
 * PUT /api/schedules/:id - Update schedule
 * DELETE /api/schedules/:id - Delete schedule
 * GET /api/schedules/:id/available-beds - Get available beds
 */
import {
  createSchedule,
  getAllSchedules,
  getScheduleById,
  updateScheduleStatus,
  deleteSchedule,
  getAvailableBeds
} from './controllers/scheduleController.js';
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

    // POST /api/schedules - Create schedule
    if (pathname === '/api/schedules' && req.method === 'POST') {
      return await withAuth(createSchedule, 'DUEÑA')(req, res);
    }

    // GET /api/schedules - List schedules
    if (pathname === '/api/schedules' && req.method === 'GET') {
      return await withAuth(getAllSchedules)(req, res);
    }

    // GET /api/schedules/:id/available-beds - Get available beds
    if (segments.length === 4 && segments[1].match(/^[a-zA-Z0-9-]+$/) && segments[2] === 'available-beds' && req.method === 'GET') {
      req.params = { id: segments[1] };
      return await withAuth(getAvailableBeds)(req, res);
    }

    // GET /api/schedules/:id - Get schedule by ID
    if (segments.length === 3 && segments[1].match(/^[a-zA-Z0-9-]+$/) && req.method === 'GET') {
      req.params = { id: segments[1] };
      return await withAuth(getScheduleById)(req, res);
    }

    // PUT /api/schedules/:id - Update schedule
    if (segments.length === 3 && segments[1].match(/^[a-zA-Z0-9-]+$/) && req.method === 'PUT') {
      req.params = { id: segments[1] };
      return await withAuth(updateScheduleStatus, 'DUEÑA')(req, res);
    }

    // DELETE /api/schedules/:id - Delete schedule
    if (segments.length === 3 && segments[1].match(/^[a-zA-Z0-9-]+$/) && req.method === 'DELETE') {
      req.params = { id: segments[1] };
      return await withAuth(deleteSchedule, 'DUEÑA')(req, res);
    }

    res.status(404).json({ error: 'Schedules endpoint not found' });
  } catch (error) {
    console.error('Schedules handler error:', error);
    res.status(500).json({ error: error.message });
  }
}
