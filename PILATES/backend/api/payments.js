/**
 * Vercel handler for /api/payments/*
 * POST /api/payments - Create payment
 * GET /api/payments/stats - Get statistics
 * GET /api/payments/:id - Get payment by ID
 * GET /api/payments/alumna/:alumnaId - Get by student
 * GET /api/payments/month/:monthYear - Get by month
 * GET /api/payments/status/:alumnaId - Get payment status
 * PUT /api/payments/:id - Update payment
 * DELETE /api/payments/:id - Delete payment
 */
import {
  createPayment,
  getPaymentById,
  getPaymentsByAlumna,
  getPaymentsByMonth,
  updatePayment,
  deletePayment,
  getFinanceStats,
  getPaymentStatus
} from './controllers/paymentController.js';
import { authMiddleware, requireRole } from './middleware/auth.js';

function applyCors(res, req) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function withAuth(handler, allowedRoles = null, customCheck = null) {
  return async (req, res) => {
    return new Promise((resolve) => {
      authMiddleware(req, res, () => {
        if (customCheck) {
          // Custom authorization check
          customCheck(req, res, async () => {
            resolve(await handler(req, res));
          });
        } else if (allowedRoles) {
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

// Custom authorization for payment views (DUEÑA or own student)
function checkOwnPaymentAccess(req, res, next) {
  if (req.user.tipo === 'DUEÑA' || req.user.id === req.params.alumnaId) {
    next();
  } else {
    res.status(403).json({
      error: 'Insufficient permissions',
      message: 'You can only view your own payments'
    });
  }
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

    // POST /api/payments - Create payment
    if (pathname === '/api/payments' && req.method === 'POST') {
      return await withAuth(createPayment, 'DUEÑA')(req, res);
    }

    // GET /api/payments/stats - Get statistics (must come before /:id)
    if (pathname === '/api/payments/stats' && req.method === 'GET') {
      return await withAuth(getFinanceStats, 'DUEÑA')(req, res);
    }

    // GET /api/payments/alumna/:alumnaId - Get by student
    if (segments.length === 4 && segments[2] === 'alumna' && segments[3].match(/^[a-zA-Z0-9-]+$/) && req.method === 'GET') {
      req.params = { alumnaId: segments[3] };
      return await withAuth(getPaymentsByAlumna, null, checkOwnPaymentAccess)(req, res);
    }

    // GET /api/payments/month/:monthYear - Get by month
    if (segments.length === 4 && segments[2] === 'month' && segments[3].match(/^\d{4}-\d{2}$/) && req.method === 'GET') {
      req.params = { monthYear: segments[3] };
      return await withAuth(getPaymentsByMonth, 'DUEÑA')(req, res);
    }

    // GET /api/payments/status/:alumnaId - Get payment status
    if (segments.length === 4 && segments[2] === 'status' && segments[3].match(/^[a-zA-Z0-9-]+$/) && req.method === 'GET') {
      req.params = { alumnaId: segments[3] };
      return await withAuth(getPaymentStatus, null, checkOwnPaymentAccess)(req, res);
    }

    // GET /api/payments/:id - Get payment by ID (must come after other GET routes)
    if (segments.length === 3 && segments[1].match(/^[a-zA-Z0-9-]+$/) && req.method === 'GET') {
      req.params = { id: segments[1] };
      return await withAuth(getPaymentById, 'DUEÑA')(req, res);
    }

    // PUT /api/payments/:id - Update payment
    if (segments.length === 3 && segments[1].match(/^[a-zA-Z0-9-]+$/) && req.method === 'PUT') {
      req.params = { id: segments[1] };
      return await withAuth(updatePayment, 'DUEÑA')(req, res);
    }

    // DELETE /api/payments/:id - Delete payment
    if (segments.length === 3 && segments[1].match(/^[a-zA-Z0-9-]+$/) && req.method === 'DELETE') {
      req.params = { id: segments[1] };
      return await withAuth(deletePayment, 'DUEÑA')(req, res);
    }

    res.status(404).json({ error: 'Payments endpoint not found' });
  } catch (error) {
    console.error('Payments handler error:', error);
    res.status(500).json({ error: error.message });
  }
}
