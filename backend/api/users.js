/**
 * Vercel handler for /api/users/*
 * POST /api/users - Create user
 * GET /api/users - List users
 * GET /api/users/:id - Get user by ID
 * PUT /api/users/:id - Update user
 * DELETE /api/users/:id - Deactivate user
 * POST /api/users/:id/plans - Create/update plan
 * GET /api/users/:id/plans - Get plans
 * DELETE /api/users/:id/plans/:planId - Delete plan
 */
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deactivateUser,
  createOrUpdatePlan,
  getPlansByAlumnaId,
  deletePlan
} from './controllers/userController.js';
import { authMiddleware, requireRole } from './middleware/auth.js';

// Helper to apply CORS and middleware
function applyCors(res, req) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

// Middleware wrapper for auth checks
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
    // Extract route and ID from URL
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
    const segments = pathname.split('/').filter(Boolean);

    // POST /api/users - Create user
    if (pathname === '/api/users' && req.method === 'POST') {
      return await withAuth(createUser, ['DUEÑA', 'ADMIN'])(req, res);
    }

    // GET /api/users - List users
    if (pathname === '/api/users' && req.method === 'GET') {
      return await withAuth(getAllUsers, ['DUEÑA', 'ADMIN'])(req, res);
    }

    // GET /api/users/:id/plans - Get plans for user
    if (segments.length === 4 && segments[1].match(/^[a-zA-Z0-9-]+$/) && segments[2] === 'plans' && req.method === 'GET') {
      req.params = { id: segments[1] };
      return await withAuth(getPlansByAlumnaId, ['DUEÑA', 'ADMIN'])(req, res);
    }

    // POST /api/users/:id/plans - Create/update plan
    if (segments.length === 4 && segments[1].match(/^[a-zA-Z0-9-]+$/) && segments[2] === 'plans' && req.method === 'POST') {
      req.params = { id: segments[1] };
      return await withAuth(createOrUpdatePlan, ['DUEÑA', 'ADMIN'])(req, res);
    }

    // DELETE /api/users/:id/plans/:planId - Delete plan
    if (segments.length === 5 && segments[1].match(/^[a-zA-Z0-9-]+$/) && segments[2] === 'plans' && segments[3].match(/^[a-zA-Z0-9-]+$/) && req.method === 'DELETE') {
      req.params = { id: segments[1], planId: segments[3] };
      return await withAuth(deletePlan, ['DUEÑA', 'ADMIN'])(req, res);
    }

    // GET /api/users/:id - Get user by ID
    if (segments.length === 3 && segments[1].match(/^[a-zA-Z0-9-]+$/) && req.method === 'GET') {
      req.params = { id: segments[1] };
      return await withAuth(getUserById, ['DUEÑA', 'ADMIN'])(req, res);
    }

    // PUT /api/users/:id - Update user
    if (segments.length === 3 && segments[1].match(/^[a-zA-Z0-9-]+$/) && req.method === 'PUT') {
      req.params = { id: segments[1] };
      return await withAuth(updateUser, ['DUEÑA', 'ADMIN'])(req, res);
    }

    // DELETE /api/users/:id - Deactivate user
    if (segments.length === 3 && segments[1].match(/^[a-zA-Z0-9-]+$/) && req.method === 'DELETE') {
      req.params = { id: segments[1] };
      return await withAuth(deactivateUser, ['DUEÑA', 'ADMIN'])(req, res);
    }

    res.status(404).json({ error: 'Users endpoint not found' });
  } catch (error) {
    console.error('Users handler error:', error);
    res.status(500).json({ error: error.message });
  }
}
