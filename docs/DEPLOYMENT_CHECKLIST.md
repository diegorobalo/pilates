# PILATES Deployment Checklist

**Complete all items before deploying to production.**

---

## Pre-Deployment Phase

### Code Quality
- [ ] All tests passing: `npm test` (both frontend and backend)
- [ ] Code linted without errors: `npm run lint`
- [ ] No console.log() or debug statements in production code
- [ ] No hardcoded API URLs (use environment variables)
- [ ] No hardcoded secrets, tokens, or API keys
- [ ] TypeScript/JavaScript types are strict (if using TS)
- [ ] Error handling implemented for all API calls

### Security Review
- [ ] No sensitive data in Git history
- [ ] .gitignore properly excludes .env files
- [ ] CORS configured for specific domains only
- [ ] JWT_SECRET is strong (minimum 32 characters)
- [ ] No SQL injection vulnerabilities
- [ ] Input validation implemented on backend
- [ ] Output encoding implemented to prevent XSS
- [ ] HTTPS enforced for all API calls
- [ ] Authentication required for protected endpoints

### Code Review
- [ ] Code reviewed by team member
- [ ] Feedback addressed and committed
- [ ] Merged to `main` branch
- [ ] No merge conflicts
- [ ] Commit messages are clear and descriptive

### Documentation
- [ ] API endpoints documented
- [ ] Environment variables documented
- [ ] Database schema finalized
- [ ] Error codes documented
- [ ] Setup instructions complete
- [ ] Troubleshooting guide written

---

## Database Setup Phase

### Turso Database
- [ ] Turso CLI installed: `turso --version`
- [ ] Logged in to Turso: `turso auth login`
- [ ] Database created: `turso db create pilates-db`
- [ ] Database URL obtained: `turso db show pilates-db --http-only`
- [ ] Authentication token generated: `turso db tokens create pilates-db`
- [ ] Schema deployed: SQL from `turso-migration.js`
- [ ] All tables created and verified:
  - [ ] `users`
  - [ ] `horarios`
  - [ ] `planes_semanales`
  - [ ] `reservas`
  - [ ] `asistencia`
  - [ ] `pagos`
- [ ] Indexes created for performance
- [ ] Test data inserted (optional)
- [ ] Database backup created: `turso db dump pilates-db > backup.sql`

### Database Verification
```bash
turso db shell pilates-db
.tables  # Should show all tables
SELECT COUNT(*) FROM sqlite_master WHERE type='table';  # Should show 6
```

- [ ] Database is accessible
- [ ] Tables have correct schema
- [ ] Indexes created
- [ ] Backup confirmed

---

## Backend Deployment Phase

### Railway Setup
- [ ] Railway account created
- [ ] New project created in Railway
- [ ] GitHub repository connected to Railway
- [ ] Backend directory selected as root: `backend`

### Railway Configuration
- [ ] Build command set: `npm install`
- [ ] Start command set: `npm start`
- [ ] Node.js version selected: 18.x or newer

### Environment Variables (Railway)
- [ ] `NODE_ENV=production`
- [ ] `PORT=5000` (or appropriate port)
- [ ] `DATABASE_URL=[TURSO_URL]` (verified for accuracy)
- [ ] `JWT_SECRET=[STRONG_RANDOM_STRING]` (min 32 chars)
- [ ] `JWT_EXPIRE=7d`
- [ ] `PHONE_VERIFICATION_ENABLED=false` (or appropriate value)

### Backend Deployment
- [ ] Code pushed to `main` branch
- [ ] Railway detected changes and started build
- [ ] Build completed successfully (green checkmark)
- [ ] No build errors in logs
- [ ] Deployment completed successfully
- [ ] Container is running

### Backend Verification
```bash
# Test health endpoint
curl https://pilates-backend.railway.app/api/health

# Expected response:
# {"status":"ok","timestamp":"..."}

# Check logs for errors
# In Railway Dashboard → Logs tab
```

- [ ] Health endpoint responds with 200
- [ ] Server logs show "Server running on port 5000"
- [ ] No ERROR messages in logs
- [ ] Database connection successful
- [ ] Backend URL obtained: `https://pilates-backend.railway.app`

### Backend Endpoints Testing
- [ ] `/api/health` returns status
- [ ] `/api/auth/*` endpoints accessible
- [ ] `/api/users/*` endpoints accessible
- [ ] `/api/schedules/*` endpoints accessible
- [ ] `/api/reservations/*` endpoints accessible
- [ ] `/api/attendance/*` endpoints accessible
- [ ] `/api/payments/*` endpoints accessible

---

## Frontend Deployment Phase

### Vercel Setup
- [ ] Vercel account created
- [ ] New project created in Vercel
- [ ] GitHub repository connected
- [ ] Frontend directory selected as root: `frontend`

### Vercel Configuration
- [ ] Framework: Vite
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Install command: `npm install`

### Environment Variables (Vercel)
- [ ] `VITE_API_URL=[RAILWAY_BACKEND_URL]/api` (e.g., `https://pilates-backend.railway.app/api`)
- [ ] `VITE_APP_NAME=PILATES`
- [ ] `VITE_PUBLIC_URL=[VERCEL_DOMAIN]` (e.g., `https://pilates-app.vercel.app`)

### Frontend Deployment
- [ ] Code pushed to `main` branch
- [ ] Vercel detected changes and started build
- [ ] Build completed successfully (green checkmark)
- [ ] No build errors or warnings (or reviewed as acceptable)
- [ ] Deployment completed successfully
- [ ] Site is live

### Frontend Verification
```bash
# Visit the frontend URL in browser
# https://pilates-app.vercel.app (or your domain)
```

- [ ] Page loads without errors (no blank page)
- [ ] CSS/styling renders correctly
- [ ] No JavaScript errors in console (F12)
- [ ] HTML structure looks correct
- [ ] Responsive on mobile (viewport <768px)
- [ ] Responsive on tablet (viewport 768-1024px)
- [ ] Responsive on desktop (viewport >1024px)

---

## CORS & Cross-Domain Phase

### CORS Configuration
- [ ] Backend CORS allows frontend domain
- [ ] Backend CORS allows localhost for development (if needed)
- [ ] CORS configuration includes all HTTP methods: GET, POST, PUT, DELETE, PATCH
- [ ] CORS configuration includes required headers

Check in `backend/src/server.js`:
```javascript
const allowedOrigins = [
  'https://pilates-app.vercel.app',
  // ... other domains
];
```

- [ ] Frontend domain is in allowedOrigins list

### CORS Testing
1. Open frontend in browser: `https://pilates-app.vercel.app`
2. Open DevTools (F12) → Network tab
3. Make a request (e.g., try to login)
4. Check Network tab:
   - [ ] Request appears with status 200 (or expected status)
   - [ ] No CORS errors in Console tab
   - [ ] Response headers include `Access-Control-Allow-Origin`

---

## Integration Testing Phase

### User Flow Testing
- [ ] Can load login page
- [ ] Can attempt to login
- [ ] API request appears in DevTools Network tab
- [ ] Backend receives request (check Railway logs)
- [ ] API response returns with correct data
- [ ] Frontend displays response appropriately

### API Testing
```bash
# Test authentication
curl -X POST https://pilates-backend.railway.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","phone":"1234567890","password":"Test123!"}'

# Test data endpoints
curl https://pilates-backend.railway.app/api/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

- [ ] Create user endpoint works
- [ ] Get users endpoint works
- [ ] Authenticated endpoints return 401 if no token
- [ ] Authenticated endpoints return 200 with valid token
- [ ] Invalid data returns appropriate error codes
- [ ] Database changes persist

### Frontend-Backend Communication
- [ ] Frontend can fetch data from backend
- [ ] Frontend can create data via backend
- [ ] Frontend can update data via backend
- [ ] Frontend can delete data via backend
- [ ] Frontend displays errors appropriately
- [ ] Frontend displays success messages appropriately

---

## Performance Phase

### Backend Performance
- [ ] Response time < 200ms for simple queries
- [ ] No memory leaks (monitor Railway dashboard)
- [ ] CPU usage normal (not consistently >80%)
- [ ] Database queries optimized (indexes in place)

### Frontend Performance
```bash
# Run locally to check build size
npm run build
# Check dist/ folder size - should be reasonable (< 500KB gzipped)
```

- [ ] Build completes without warnings
- [ ] JavaScript bundle size reasonable
- [ ] CSS bundle size reasonable
- [ ] Images optimized
- [ ] No unused dependencies

### Browser Performance
- [ ] Page load time < 3 seconds
- [ ] Time to Interactive < 5 seconds
- [ ] Core Web Vitals acceptable:
  - [ ] Largest Contentful Paint (LCP) < 2.5s
  - [ ] First Input Delay (FID) < 100ms
  - [ ] Cumulative Layout Shift (CLS) < 0.1

---

## Monitoring & Logging Phase

### Railway Monitoring
- [ ] Railway Dashboard accessible
- [ ] Logs accessible and readable
- [ ] No critical errors in logs
- [ ] Memory usage stable
- [ ] CPU usage stable
- [ ] Network I/O normal

### Vercel Monitoring
- [ ] Vercel Dashboard accessible
- [ ] Deployment successful (green checkmark)
- [ ] Web Analytics enabled (optional but recommended)
- [ ] Function logs accessible (if using serverless functions)

### Turso Monitoring
- [ ] Database accessible via Turso dashboard
- [ ] Database size reasonable
- [ ] Backup schedule configured
- [ ] Can restore from backup (test if possible)

### Application Logging
- [ ] Backend logs errors with context
- [ ] Frontend logs errors without PII
- [ ] Error tracking configured (optional - Sentry, etc.)
- [ ] Access logs recorded

---

## Security Verification Phase

### HTTPS/TLS
- [ ] Frontend served over HTTPS
- [ ] Backend served over HTTPS
- [ ] All API requests use HTTPS
- [ ] Redirect HTTP → HTTPS (if applicable)

### Secrets Management
- [ ] No secrets in Git repository
- [ ] No secrets in environment files
- [ ] Secrets stored only in platform dashboards (Railway, Vercel)
- [ ] JWT_SECRET is strong and unique

### Authentication
- [ ] JWT tokens generated correctly
- [ ] Tokens expire appropriately
- [ ] Expired tokens are rejected
- [ ] Token validation implemented on all protected endpoints

### Input Validation
- [ ] All user inputs validated on backend
- [ ] XSS prevention implemented
- [ ] SQL injection prevention implemented
- [ ] Rate limiting considered (optional but recommended)

---

## Deployment Verification Phase

### Live Environment Check
- [ ] Backend responding: `curl https://pilates-backend.railway.app/api/health`
- [ ] Frontend loading: Open in browser
- [ ] No JavaScript errors in DevTools Console
- [ ] API requests successful (check Network tab)
- [ ] Database queries returning results
- [ ] User can complete full user flow (if test user exists)

### Error Handling
- [ ] 404 errors handled gracefully
- [ ] 500 errors handled gracefully
- [ ] Network errors handled gracefully
- [ ] Timeout errors handled gracefully
- [ ] User sees helpful error messages

### Database Integrity
- [ ] Can read from database
- [ ] Can write to database
- [ ] Transactions work correctly
- [ ] Data persists after application restart
- [ ] Backup exists and is recoverable

---

## Post-Deployment Phase

### Documentation Updates
- [ ] Update deployment documentation with actual URLs
- [ ] Document any environment-specific configuration
- [ ] Update API documentation with live endpoint
- [ ] Update troubleshooting guide with lessons learned

### Team Communication
- [ ] Notify team that app is live
- [ ] Share production URLs
- [ ] Document how to access logs and dashboards
- [ ] Set up team access to monitoring tools

### Backup & Recovery
- [ ] Database backup created and verified
- [ ] Backup location documented
- [ ] Recovery procedure tested (if possible)
- [ ] Backup restoration process documented

### Monitoring Setup
- [ ] Set up error alerts (optional)
- [ ] Set up performance alerts (optional)
- [ ] Set up uptime monitoring (optional)
- [ ] Document escalation procedures

---

## First Week Maintenance

- [ ] Daily: Check logs for errors
- [ ] Daily: Verify application is accessible
- [ ] Every 2 days: Review user feedback
- [ ] Weekly: Check performance metrics
- [ ] Weekly: Create backup if manual backups are needed
- [ ] Weekly: Review and update documentation

---

## Sign-Off

- [ ] All items checked
- [ ] Deployment completed successfully
- [ ] Application verified working
- [ ] Team notified
- [ ] Monitoring configured
- [ ] Documentation updated

**Deployment Date**: ___________  
**Deployed By**: ___________  
**Approved By**: ___________  
**Status**: ✅ LIVE

---

## References

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide
- [DEPLOYMENT_QUICK_START.md](./DEPLOYMENT_QUICK_START.md) - Quick start guide
- [GitHub Issue Tracker]() - For reporting issues
- [Monitoring Dashboards]():
  - Railway: https://railway.app/dashboard
  - Vercel: https://vercel.com/dashboard
  - Turso: https://turso.tech/app
