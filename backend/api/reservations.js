/**
 * Vercel handler for /api/reservations/*
 * POST /api/reservations - Request reservation
 * GET /api/reservations - List reservations
 * GET /api/reservations/:id - Get reservation by ID
 * GET /api/reservations/pending - Get pending reservations
 * POST /api/reservations/:id/confirm - Confirm reservation
 * POST /api/reservations/:id/reject - Reject reservation
 * POST /api/reservations/:id/cancel - Cancel reservation
 */
import {
  requestReservation,
  listReservations,
  getReservationById,
  confirmReservation,
  rejectReservation,
  cancelReservation,
  getPendingReservations
} from './controllers/reservationController.js';
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

    // POST /api/reservations - Request reservation
    if (pathname === '/api/reservations' && req.method === 'POST') {
      return await withAuth(requestReservation, 'ALUMNA')(req, res);
    }

    // GET /api/reservations/pending - Get pending reservations (must come before /:id)
    if (pathname === '/api/reservations/pending' && req.method === 'GET') {
      return await withAuth(getPendingReservations, 'DUEÑA')(req, res);
    }

    // GET /api/reservations - List reservations
    if (pathname === '/api/reservations' && req.method === 'GET') {
      return await withAuth(listReservations, 'DUEÑA')(req, res);
    }

    // POST /api/reservations/:id/confirm - Confirm reservation
    if (segments.length === 4 && segments[1].match(/^[a-zA-Z0-9-]+$/) && segments[2] === 'confirm' && req.method === 'POST') {
      req.params = { id: segments[1] };
      return await withAuth(confirmReservation, 'DUEÑA')(req, res);
    }

    // POST /api/reservations/:id/reject - Reject reservation
    if (segments.length === 4 && segments[1].match(/^[a-zA-Z0-9-]+$/) && segments[2] === 'reject' && req.method === 'POST') {
      req.params = { id: segments[1] };
      return await withAuth(rejectReservation, 'DUEÑA')(req, res);
    }

    // POST /api/reservations/:id/cancel - Cancel reservation
    if (segments.length === 4 && segments[1].match(/^[a-zA-Z0-9-]+$/) && segments[2] === 'cancel' && req.method === 'POST') {
      req.params = { id: segments[1] };
      return await withAuth(cancelReservation)(req, res);
    }

    // GET /api/reservations/:id - Get reservation by ID
    if (segments.length === 3 && segments[1].match(/^[a-zA-Z0-9-]+$/) && req.method === 'GET') {
      req.params = { id: segments[1] };
      return await withAuth(getReservationById)(req, res);
    }

    res.status(404).json({ error: 'Reservations endpoint not found' });
  } catch (error) {
    console.error('Reservations handler error:', error);
    res.status(500).json({ error: error.message });
  }
}
