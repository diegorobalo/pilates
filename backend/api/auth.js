/**
 * Vercel handler for /api/auth/*
 * POST /api/auth/request-code
 * POST /api/auth/verify-code
 * POST /api/auth/refresh
 */
import {
  requestPhoneVerification,
  verifyPhoneCode,
  refreshAccessToken
} from './controllers/authController.js';

// CORS and common middleware wrapper
function applyCors(res, req) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

export default async function handler(req, res) {
  applyCors(res, req);

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // POST /api/auth/request-code
    if (req.url === '/api/auth/request-code' && req.method === 'POST') {
      return await requestPhoneVerification(req, res);
    }

    // POST /api/auth/verify-code
    if (req.url === '/api/auth/verify-code' && req.method === 'POST') {
      return await verifyPhoneCode(req, res);
    }

    // POST /api/auth/refresh
    if (req.url === '/api/auth/refresh' && req.method === 'POST') {
      return await refreshAccessToken(req, res);
    }

    // Not found
    res.status(404).json({ error: 'Auth endpoint not found' });
  } catch (error) {
    console.error('Auth handler error:', error);
    res.status(500).json({ error: error.message });
  }
}
