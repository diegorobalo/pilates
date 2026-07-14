# Deployment Verification Guide

**Commands and steps to verify your PILATES deployment is working correctly.**

---

## Quick Verification (5 minutes)

Run these commands immediately after deployment:

```bash
# 1. Test backend health
curl https://pilates-backend.railway.app/api/health

# Expected: {"status":"ok","timestamp":"2024-01-15T..."}

# 2. Test frontend loads
curl -I https://pilates-app.vercel.app

# Expected: HTTP/1.1 200 OK

# 3. Check backend logs
# Go to Railway Dashboard → Your Project → Backend → Logs
# Look for: "✅ Server running on port 5000"
# Verify no ERROR messages

# 4. Check frontend build
# Go to Vercel Dashboard → Your Project → Deployments
# Latest deployment should have green checkmark
```

---

## Comprehensive Verification

### 1. Backend Verification

#### Health Check
```bash
curl -v https://pilates-backend.railway.app/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:45.123Z"
}
```

Status code: `200 OK`

#### Test CORS Headers
```bash
curl -i -X OPTIONS https://pilates-backend.railway.app/api/auth/register \
  -H "Origin: https://pilates-app.vercel.app" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type"
```

Expected headers in response:
- `Access-Control-Allow-Origin: https://pilates-app.vercel.app`
- `Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type, Authorization`

#### Test API Endpoint
```bash
# Create a test user (example - adjust for your API)
curl -X POST https://pilates-backend.railway.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Test User",
    "telefono": "1234567890",
    "email": "test@example.com",
    "password": "TestPassword123!"
  }'
```

Expected: `201 Created` or similar, with user data in response

#### Test Database Connection
```bash
# Check Railway logs for database connection success
# In Railway Dashboard → Logs, search for:
# "Database connected" or similar messages
# Verify no "connection refused" errors
```

#### Check Environment Variables
```bash
# These should be set in Railway Dashboard (but not visible via API)
# NODE_ENV=production
# PORT=5000
# DATABASE_URL=[correct Turso URL]
# JWT_SECRET=[set and not empty]
```

### 2. Frontend Verification

#### Page Load Test
```bash
# Test that page loads and returns HTML
curl -I https://pilates-app.vercel.app

# Expected:
# HTTP/1.1 200 OK
# Content-Type: text/html
```

#### JavaScript Bundle Test
```bash
# Check main bundle is available
curl -I https://pilates-app.vercel.app/assets/index-[hash].js

# Expected: 200 OK
# Content should be JavaScript code
```

#### Build Verification
```bash
# Verify Vercel deployment was successful
# In Vercel Dashboard → Deployments
# Latest deployment should show:
# "✓ Deployment succeeded"
# Deployment time < 5 minutes (typical)
```

### 3. Browser Testing

Open `https://pilates-app.vercel.app` in a browser and:

#### Inspect Network Tab
1. Open DevTools: `F12`
2. Go to "Network" tab
3. Reload page: `F5`
4. Check requests:
   - [ ] All requests to API return status 200-299 or expected error codes
   - [ ] No CORS errors (Red X in Network tab)
   - [ ] No 404 errors
   - [ ] No 500 errors

#### Check Console Tab
1. Go to "Console" tab
2. Verify:
   - [ ] No error messages (red text)
   - [ ] No CORS error messages
   - [ ] No undefined reference errors
   - [ ] Application logs (if any) appear normal

#### Visual Verification
- [ ] Page displays content (not blank)
- [ ] CSS is styled (not plain HTML)
- [ ] Images load (if any)
- [ ] Layout is responsive on different screen sizes
  - Mobile: `DevTools → Toggle device toolbar → iPhone SE`
  - Tablet: `DevTools → Toggle device toolbar → iPad`
  - Desktop: Normal browser window

### 4. Database Verification

#### Verify Turso Database Exists
```bash
turso db list

# Should show:
# DATABASE        URL                           SIZE
# pilates-db     libsql://YOUR_ACCOUNT.tu...   XX MB
```

#### Verify Tables Exist
```bash
turso db shell pilates-db

# In the shell, run:
.tables

# Should show all tables:
# asistencia  horarios    pagos       planes_semanales  reservas  users
```

#### Verify Schema
```bash
turso db shell pilates-db

# In the shell, run:
.schema users

# Should show the users table structure with all columns
```

#### Count Tables
```bash
turso db shell pilates-db

# In the shell, run:
SELECT COUNT(*) as table_count FROM sqlite_master WHERE type='table';

# Should return: 6 (six tables)
```

### 5. Environment Variables Verification

#### Backend Environment (Railway)
Go to Railway Dashboard → Your Project → Settings → Variables

Verify these are set:
- [ ] `NODE_ENV` = `production`
- [ ] `PORT` = `5000` (or your port)
- [ ] `DATABASE_URL` = `libsql://...` (starts with libsql)
- [ ] `JWT_SECRET` = (should be hidden/masked, minimum 32 characters)
- [ ] `JWT_EXPIRE` = `7d`
- [ ] `PHONE_VERIFICATION_ENABLED` = `false` or `true`

#### Frontend Environment (Vercel)
Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Verify these are set:
- [ ] `VITE_API_URL` = `https://pilates-backend.railway.app/api`
- [ ] `VITE_APP_NAME` = `PILATES`
- [ ] `VITE_PUBLIC_URL` = `https://pilates-app.vercel.app` (or your domain)

### 6. Log Verification

#### Railway Logs
```bash
# Using Railway CLI
railway logs -n 100  # Get last 100 log lines

# Or in Dashboard:
# Go to Logs tab and check for:
# ✅ Server running on port 5000
# ✅ Database connection successful
# ❌ Any ERROR lines (should have none)
```

#### Vercel Logs
In Vercel Dashboard → Your Project → Logs:
- [ ] Build log shows: "✓ Deploy successful"
- [ ] Runtime logs show no errors (if any logs appear)

#### Expected Log Patterns

Backend (Railway):
```
✅ Server running on http://localhost:5000
📋 NODE_ENV: production
[Log messages from Express and middleware]
```

Frontend (Vercel):
```
Ready in [X]ms
Listening on [PORT]
```

---

## Connectivity Verification

### Test Backend → Database Connection

```bash
# Check if backend can access database
# Monitor Railway logs for connection messages
# Should see something like:
# "Connected to database"
# "Database ready"

# Or test with curl to see database query results:
curl -X GET https://pilates-backend.railway.app/api/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# If it returns user data, database is connected
```

### Test Frontend → Backend Connection

1. Open `https://pilates-app.vercel.app` in browser
2. Open DevTools Network tab
3. Trigger an API call (e.g., click login button)
4. In Network tab, verify:
   - [ ] Request URL: `https://pilates-backend.railway.app/api/...`
   - [ ] Status: 2xx or expected error code (not CORS error)
   - [ ] Response shows data or error message

### Test DNS Resolution

```bash
# Verify frontend domain resolves
nslookup pilates-app.vercel.app

# Should return Vercel IP addresses

# Verify backend domain resolves
nslookup pilates-backend.railway.app

# Should return Railway IP addresses
```

---

## SSL/HTTPS Verification

### Check Certificate Validity
```bash
# Frontend
curl -vI https://pilates-app.vercel.app | grep -E "subject|issuer|CN="

# Backend
curl -vI https://pilates-backend.railway.app | grep -E "subject|issuer|CN="

# Both should show:
# ✓ subject=CN=your-domain.com
# ✓ issuer=C=US, O=Let's Encrypt, CN=R3
# ✓ Certificate is valid for at least 30 days
```

### Check Mixed Content
```bash
# No HTTP resources should be loaded on HTTPS pages
# Open frontend: https://pilates-app.vercel.app
# DevTools Console - should show NO warnings about mixed content
```

---

## Performance Verification

### Load Time Test

```bash
# Frontend load time (using curl timing)
time curl -o /dev/null -s https://pilates-app.vercel.app

# Expected: < 2 seconds total time

# Backend response time
time curl -o /dev/null -s https://pilates-backend.railway.app/api/health

# Expected: < 500ms total time
```

### Bundle Size Check

```bash
# Frontend JavaScript bundle should be reasonable
# Check in browser DevTools → Network tab → JS files
# Main bundle: Typically 50-200KB (gzipped)

# Or check Vercel Analytics:
# Vercel Dashboard → Analytics tab
```

### Monitor CPU/Memory

Go to Railway Dashboard:
- [ ] Memory usage < 256MB
- [ ] CPU usage < 50% (if idle) to 100% (if processing requests)
- [ ] No memory leaks (should return to baseline after traffic spike)

---

## Rollback Verification

If something goes wrong, verify rollback was successful:

```bash
# Check current deployment in Vercel
# Vercel Dashboard → Deployments → Check "Current" flag

# Check current deployment in Railway
# Railway Dashboard → Deployments → Check status

# Verify endpoints still work
curl https://pilates-app.vercel.app
curl https://pilates-backend.railway.app/api/health
```

---

## Post-Verification Checklist

After running all verification steps, confirm:

- [ ] Backend health endpoint responds
- [ ] Frontend page loads
- [ ] No CORS errors in console
- [ ] No JavaScript errors in console
- [ ] Database tables exist and are accessible
- [ ] Environment variables are set correctly
- [ ] HTTPS certificates are valid
- [ ] No alarming errors in logs
- [ ] Performance is acceptable
- [ ] Team members can access the application

---

## Troubleshooting Quick Links

If verification fails:

1. **CORS Error**: See [DEPLOYMENT.md - Troubleshooting - CORS Error](./DEPLOYMENT.md#issue-cors-error-on-frontend)
2. **Database Connection Error**: See [DEPLOYMENT.md - Troubleshooting - Cannot connect to database](./DEPLOYMENT.md#issue-cannot-connect-to-database)
3. **502 Bad Gateway**: See [DEPLOYMENT.md - Troubleshooting - 502 Bad Gateway](./DEPLOYMENT.md#issue-502-bad-gateway)
4. **Blank Frontend**: See [DEPLOYMENT.md - Troubleshooting - Frontend Shows Blank Page](./DEPLOYMENT.md#issue-frontend-shows-blank-page)
5. **Authentication Fails**: See [DEPLOYMENT.md - Troubleshooting - Authentication Fails](./DEPLOYMENT.md#issue-authentication-fails)

---

## Continuous Monitoring

Set up regular verification:

- **Daily**: Check that both endpoints are accessible
- **Weekly**: Review logs for errors
- **Monthly**: Run full verification suite

---

## Automation (Optional)

Create a simple health check script:

```bash
#!/bin/bash
# check-health.sh

BACKEND_URL="https://pilates-backend.railway.app/api/health"
FRONTEND_URL="https://pilates-app.vercel.app"

echo "Checking backend..."
BACKEND_STATUS=$(curl -s -o /dev/null -w "%{http_code}" $BACKEND_URL)
[ "$BACKEND_STATUS" = "200" ] && echo "✅ Backend OK" || echo "❌ Backend ERROR ($BACKEND_STATUS)"

echo "Checking frontend..."
FRONTEND_STATUS=$(curl -s -o /dev/null -w "%{http_code}" $FRONTEND_URL)
[ "$FRONTEND_STATUS" = "200" ] && echo "✅ Frontend OK" || echo "❌ Frontend ERROR ($FRONTEND_STATUS)"
```

Run this script daily:
```bash
chmod +x check-health.sh
./check-health.sh
```

---

**Last Updated**: 2024-01-15
