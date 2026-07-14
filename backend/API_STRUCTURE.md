# PILATES Backend API Structure

## Overview

This is a Vercel serverless backend for the PILATES class reservation system. All API logic is organized into Vercel handler functions in the `api/` directory.

## Directory Structure

```
backend/
├── api/
│   ├── db/                          # Database utilities
│   │   ├── connection.js            # Database connection (Turso/SQLite)
│   │   ├── init.js                  # Database initialization
│   │   ├── verify.js                # Database verification
│   │   └── schema.sql               # Database schema
│   ├── models/                      # Data models (no changes needed)
│   │   ├── User.js
│   │   ├── Schedule.js
│   │   ├── Reservation.js
│   │   ├── Attendance.js
│   │   ├── Payment.js
│   │   └── WeeklyPlan.js
│   ├── controllers/                 # Business logic (no changes needed)
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── scheduleController.js
│   │   ├── reservationController.js
│   │   ├── attendanceController.js
│   │   └── paymentController.js
│   ├── middleware/                  # Authentication & authorization (no changes needed)
│   │   └── auth.js
│   ├── health.js                    # Health check endpoint
│   ├── auth.js                      # Authentication endpoints
│   ├── users.js                     # User management endpoints
│   ├── schedules.js                 # Schedule endpoints
│   ├── reservations.js              # Reservation endpoints
│   ├── attendance.js                # Attendance endpoints
│   └── payments.js                  # Payment endpoints
├── vercel.json                      # Vercel configuration
├── package.json                     # Dependencies
├── .env.example                     # Example environment variables
└── README.md                        # This file
```

## API Endpoints

### Health Check
```
GET /api/health
```
No authentication required. Returns status and timestamp.

### Authentication
```
POST /api/auth/request-code
POST /api/auth/verify-code
POST /api/auth/refresh
```
Handles phone-based authentication and JWT token management.

### Users (Management)
```
POST /api/users                     # Create user (DUEÑA/ADMIN)
GET /api/users                      # List users (DUEÑA/ADMIN)
GET /api/users/:id                  # Get user by ID (DUEÑA/ADMIN)
PUT /api/users/:id                  # Update user (DUEÑA/ADMIN)
DELETE /api/users/:id               # Deactivate user (DUEÑA/ADMIN)
POST /api/users/:id/plans           # Create/update plan (DUEÑA/ADMIN)
GET /api/users/:id/plans            # Get plans (DUEÑA/ADMIN)
DELETE /api/users/:id/plans/:planId # Delete plan (DUEÑA/ADMIN)
```

### Schedules
```
POST /api/schedules                 # Create schedule (DUEÑA)
GET /api/schedules                  # List schedules (authenticated)
GET /api/schedules/:id              # Get schedule (authenticated)
PUT /api/schedules/:id              # Update schedule (DUEÑA)
DELETE /api/schedules/:id           # Delete schedule (DUEÑA)
GET /api/schedules/:id/available-beds # Get available beds (authenticated)
```

### Reservations
```
POST /api/reservations              # Request reservation (ALUMNA)
GET /api/reservations               # List all (DUEÑA)
GET /api/reservations/:id           # Get by ID (authenticated)
GET /api/reservations/pending       # Get pending (DUEÑA)
POST /api/reservations/:id/confirm  # Confirm (DUEÑA)
POST /api/reservations/:id/reject   # Reject (DUEÑA)
POST /api/reservations/:id/cancel   # Cancel (ALUMNA or DUEÑA)
```

### Attendance
```
POST /api/attendance/:reservationId/present    # Mark present (DUEÑA)
POST /api/attendance/:reservationId/absent     # Mark absent (DUEÑA)
GET /api/attendance/alumna/:alumnaId           # Get by student (authenticated)
GET /api/attendance/schedule/:scheduleId       # Get by schedule (DUEÑA)
GET /api/attendance/stats/:alumnaId            # Get statistics (authenticated)
GET /api/attendance/:id                        # Get record (DUEÑA)
```

### Payments
```
POST /api/payments                  # Create payment (DUEÑA)
GET /api/payments                   # List all (DUEÑA)
GET /api/payments/stats             # Get statistics (DUEÑA)
GET /api/payments/:id               # Get by ID (DUEÑA)
GET /api/payments/alumna/:alumnaId  # Get by student (DUEÑA or self)
GET /api/payments/month/:monthYear  # Get by month (DUEÑA)
GET /api/payments/status/:alumnaId  # Get status (DUEÑA or self)
PUT /api/payments/:id               # Update (DUEÑA)
DELETE /api/payments/:id            # Delete (DUEÑA)
```

## Handler Functions

Each `.js` file in the `api/` directory is a Vercel handler function that:

1. **Accepts `(req, res)` parameters** - Standard Node.js HTTP request/response
2. **Sets CORS headers** - Allows cross-origin requests from frontend
3. **Routes requests** - Parses URL and method, calls appropriate controller
4. **Applies middleware** - Checks authentication and authorization inline
5. **Returns JSON** - All responses are JSON formatted

### Example Handler Structure

```javascript
export default async function handler(req, res) {
  // 1. Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
  
  // 2. Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // 3. Parse URL and route to controller
    if (req.url === '/api/endpoint' && req.method === 'POST') {
      // 4. Apply auth middleware
      return await withAuth(controllerFunction, 'ROLE')(req, res);
    }
    
    // 5. Return 404 if no match
    res.status(404).json({ error: 'Not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

## Database Connection

The database connection is established in `api/db/connection.js` and initialized in `api/db/init.js`.

### Supported Databases
- **Production**: Turso (SQLite-compatible, serverless)
- **Development**: SQLite local file or Turso

### Environment Variables
```
DATABASE_URL=libsql://pilates-prod-xxx.turso.tech?authToken=<token>
NODE_ENV=production
JWT_SECRET=<your-secret-key>
JWT_EXPIRE=7d
```

## Development

### Local Development with Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Run local dev server
npm run dev
# Runs on http://localhost:3000

# API available at http://localhost:3000/api/health
```

### Environment Variables

Create `.env.local` in the `backend/` directory:

```
DATABASE_URL=libsql://pilates-prod-xxx.turso.tech?authToken=<token>
JWT_SECRET=your-secret-key-change-me
JWT_EXPIRE=7d
NODE_ENV=development
```

### Testing API Endpoints

```bash
# Test health check
curl http://localhost:3000/api/health

# Test auth
curl -X POST http://localhost:3000/api/auth/request-code \
  -H "Content-Type: application/json" \
  -d '{"phone": "+5491123456789"}'

# Test protected endpoint (need token)
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:3000/api/users
```

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from backend directory
cd backend/
vercel

# Follow prompts to connect GitHub repo and configure
```

### Environment Variables on Vercel

In Vercel project settings, add:
- `JWT_SECRET` - Random 32+ character string
- `DATABASE_URL` - Turso database URL with auth token
- `JWT_EXPIRE` - Default: `7d`
- `NODE_ENV` - Default: `production`

See `DEPLOYMENT_VERCEL_ONLY.md` for complete setup instructions.

## Authentication & Authorization

### JWT Flow

1. **Request Code**: User calls `POST /api/auth/request-code` with phone
2. **Verify Code**: User calls `POST /api/auth/verify-code` with phone + code
3. **Get Tokens**: API returns `token` (access) and `refreshToken`
4. **Protected Requests**: Include `Authorization: Bearer <token>` header
5. **Token Expired**: Call `POST /api/auth/refresh` with `refreshToken`

### Roles
- **DUEÑA** - Class owner, full access
- **ADMIN** - Administrator (if needed)
- **ALUMNA** - Student, limited access (own data only)

### Middleware

The `authMiddleware` in `api/middleware/auth.js`:
- Extracts JWT from `Authorization` header
- Verifies token signature using `JWT_SECRET`
- Attaches user data to `req.user`
- Returns 401 if token missing or invalid

The `requireRole` middleware:
- Checks if user has required role
- Returns 403 if user lacks permission

## Controllers

All controllers are in `api/controllers/` and handle business logic:
- No changes needed from the Express version
- Already accept `(req, res)` signature
- Can be called directly from Vercel handlers
- All database operations go through models

## Models

All models are in `api/models/` and provide data access:
- No changes needed from the Express version
- Interact with database via `api/db/connection.js`
- Used by controllers to query/update data

## Error Handling

All handlers catch errors and return:
```json
{
  "error": "Error message",
  "message": "Optional detailed message"
}
```

With appropriate HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad request
- `401` - Unauthorized (missing/invalid token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not found
- `500` - Server error

## CORS

CORS is handled in each handler function. By default:
- Allows requests from any origin
- Allows standard HTTP methods
- Allows `Content-Type` and `Authorization` headers
- Credentials enabled for authentication

Can be customized by updating CORS headers in each handler.

## Testing

Run tests with:
```bash
npm test
```

Tests should work identically to Express version since:
- Controllers unchanged
- Database access unchanged
- Only routing mechanism changed

## Troubleshooting

### "Cannot connect to database"
- Check `DATABASE_URL` environment variable
- Verify Turso token is valid (regenerate if needed)
- Ensure database exists in Turso

### "JWT_SECRET is not defined"
- Set `JWT_SECRET` environment variable
- Check `.env` or Vercel project settings

### "Middleware auth fails"
- Verify `Authorization: Bearer <token>` header format
- Check token hasn't expired
- Call `POST /api/auth/refresh` to get new token

### "CORS errors in browser"
- Check that handler sets CORS headers
- Verify `Access-Control-Allow-Origin` includes frontend domain
- Test with `curl` first to rule out CORS

## Resources

- [Vercel Node.js Runtime](https://vercel.com/docs/serverless-functions/nodejs)
- [Turso Database](https://turso.tech)
- [JWT.io](https://jwt.io)
- [DEPLOYMENT_VERCEL_ONLY.md](./DEPLOYMENT_VERCEL_ONLY.md) - Complete deployment guide

---

**Backend restructured for Vercel serverless deployment - July 2026**
