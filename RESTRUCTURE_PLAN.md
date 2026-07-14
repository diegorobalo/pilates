# PILATES Backend Restructure Plan for Vercel Serverless

## Overview
Restructure PILATES backend from Express server to Vercel serverless functions, maintaining the same API contracts and internal architecture. This enables deployment on Vercel without a traditional Node.js server process.

## Current Structure
```
backend/
├── src/
│   ├── server.js (Express app)
│   ├── routes/
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── schedules.js
│   │   ├── reservations.js
│   │   ├── attendance.js
│   │   └── payments.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── scheduleController.js
│   │   ├── reservationController.js
│   │   ├── attendanceController.js
│   │   └── paymentController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Schedule.js
│   │   ├── Reservation.js
│   │   ├── Attendance.js
│   │   ├── Payment.js
│   │   └── WeeklyPlan.js
│   ├── middleware/
│   │   └── auth.js
│   └── db/
│       ├── connection.js
│       ├── init.js
│       └── verify.js
├── package.json
├── vercel.json
└── .env.example
```

## Target Structure (Vercel Serverless)
```
backend/
├── api/
│   ├── db/
│   │   ├── schema.sql
│   │   ├── connection.js
│   │   ├── init.js
│   │   └── verify.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Schedule.js
│   │   ├── Reservation.js
│   │   ├── Attendance.js
│   │   ├── Payment.js
│   │   └── WeeklyPlan.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── scheduleController.js
│   │   ├── reservationController.js
│   │   ├── attendanceController.js
│   │   └── paymentController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── auth.js (POST /api/auth/*)
│   ├── users.js (POST|GET|PUT|DELETE /api/users/*)
│   ├── schedules.js (POST|GET|PUT|DELETE /api/schedules/*)
│   ├── reservations.js (POST|GET|PUT|DELETE /api/reservations/*)
│   ├── attendance.js (POST|GET|PUT|DELETE /api/attendance/*)
│   ├── payments.js (POST|GET|PUT|DELETE /api/payments/*)
│   └── health.js (GET /api/health)
├── vercel.json
├── package.json
└── .env.example
```

## Key Changes

### 1. File Structure
- **Before**: `src/server.js` + `src/routes/*.js` + Express routing
- **After**: `api/*.js` files as Vercel handler functions
- **Unchanged**: `controllers/`, `models/`, `middleware/` stay exactly the same
- **Unchanged**: Database files (`db/`) stay exactly the same

### 2. Route Conversion Pattern

#### Express (Old)
```javascript
// src/routes/auth.js
import express from 'express';
const router = express.Router();
router.post('/request-code', requestPhoneVerification);
router.post('/verify-code', verifyPhoneCode);
router.post('/refresh', refreshAccessToken);
export default router;

// src/server.js
app.use('/api/auth', authRoutes);
```

#### Vercel (New)
```javascript
// api/auth.js
import { requestPhoneVerification, verifyPhoneCode, refreshAccessToken } from './controllers/authController.js';
import authMiddleware from './middleware/auth.js';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.url === '/api/auth/request-code' && req.method === 'POST') {
      return await requestPhoneVerification(req, res);
    }
    if (req.url === '/api/auth/verify-code' && req.method === 'POST') {
      return await verifyPhoneCode(req, res);
    }
    if (req.url === '/api/auth/refresh' && req.method === 'POST') {
      return await refreshAccessToken(req, res);
    }
    res.status(404).json({ error: 'Not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

### 3. Controller Changes
Controllers **do not change** - they already accept `(req, res)` signature. Vercel functions can call them directly.

### 4. Middleware Changes
Middleware **does not change** - the `authMiddleware` and `requireRole` already work with raw `(req, res, next)` signature.

For Vercel, we integrate middleware inline in handler functions:
```javascript
// In api/*.js handlers
if (req.url.includes('/protected-endpoint')) {
  // Apply authMiddleware inline or as a wrapper
  await authMiddleware(req, res, async () => {
    // Route logic
  });
}
```

### 5. Environment Variables
**vercel.json** configuration:
```json
{
  "buildCommand": "npm install",
  "env": {
    "NODE_ENV": "production",
    "JWT_SECRET": "@JWT_SECRET",
    "DATABASE_URL": "@DATABASE_URL",
    "JWT_EXPIRE": "7d"
  }
}
```

The `@` prefix references environment variables from Vercel project settings.

### 6. Package.json Updates
- Remove `"start": "node src/server.js"` script
- Keep all dependencies
- No changes needed for npm install

```json
{
  "scripts": {
    "dev": "vercel dev",
    "test": "jest",
    "build": "echo 'Vercel builds automatically'"
  }
}
```

### 7. Frontend .env Update
```env
VITE_API_URL=https://YOUR_VERCEL_DOMAIN/api
```

For local development:
```env
VITE_API_URL=http://localhost:3000/api
```

## Implementation Steps

1. ✅ Create `backend/api/` directory
2. ✅ Move `db/`, `models/`, `controllers/`, `middleware/` into `api/`
3. ✅ Create `api/auth.js` - converts auth routes to handler
4. ✅ Create `api/users.js` - converts user routes to handler
5. ✅ Create `api/schedules.js` - converts schedule routes to handler
6. ✅ Create `api/reservations.js` - converts reservation routes to handler
7. ✅ Create `api/attendance.js` - converts attendance routes to handler
8. ✅ Create `api/payments.js` - converts payment routes to handler
9. ✅ Create `api/health.js` - health check endpoint
10. ✅ Update `vercel.json` with correct configuration
11. ✅ Update `package.json` with Vercel scripts
12. ✅ Create `DEPLOYMENT_VERCEL_ONLY.md` with setup instructions
13. ✅ Delete `src/server.js` and `src/routes/*.js` (no longer needed)
14. ✅ Commit: "refactor: restructure backend for Vercel serverless functions deployment"

## API Endpoint Compatibility

All endpoints remain **100% compatible**:
- `POST /api/auth/request-code` → `api/auth.js`
- `POST /api/auth/verify-code` → `api/auth.js`
- `POST /api/auth/refresh` → `api/auth.js`
- `GET|POST /api/users` → `api/users.js`
- `GET|PUT|DELETE /api/users/:id` → `api/users.js`
- `POST|GET|DELETE /api/users/:id/plans` → `api/users.js`
- `GET|POST|PUT|DELETE /api/schedules` → `api/schedules.js`
- `GET|POST|PUT|DELETE /api/reservations` → `api/reservations.js`
- `GET|POST|PUT|DELETE /api/attendance` → `api/attendance.js`
- `GET|POST|PUT|DELETE /api/payments` → `api/payments.js`
- `GET /api/health` → `api/health.js`

## Benefits

1. **Zero downtime deployment** - Vercel handles scaling
2. **Cost efficient** - Pay only for execution time
3. **Same API contracts** - Frontend needs no changes
4. **Same internal architecture** - Controllers/models/middleware unchanged
5. **Easy monitoring** - Vercel provides built-in analytics
6. **Auto-scaling** - Handles traffic spikes automatically

## Testing

After restructure:
```bash
npm run dev
# Should serve API on http://localhost:3000/api
```

Then run frontend tests to verify API calls work with same contracts.

## Rollback Plan

If needed, keep `src/server.js` in git history:
```bash
git checkout HEAD~1 src/server.js
npm run dev
```

However, this restructure is **non-destructive** - all business logic stays identical.
