# Vercel Deployment Checklist

Use this checklist to ensure everything is ready for deployment to Vercel.

## Pre-Deployment (Local)

- [ ] Clone/pull latest code
- [ ] Run `npm install` in backend/
- [ ] Run `npm run dev` and test endpoints
- [ ] Verify all API endpoints return expected responses
- [ ] Test authentication flow (request code → verify code → get token)
- [ ] Test protected endpoints with token
- [ ] Check database connection works locally

## GitHub Setup

- [ ] Repository created on GitHub
- [ ] All code committed and pushed to main/master branch
- [ ] `.gitignore` includes `node_modules/`, `.env`, `.env.local`
- [ ] Git history clean (no sensitive data in commits)

## Vercel Project Setup

- [ ] Create Vercel account at https://vercel.com
- [ ] Create new project and import from GitHub
- [ ] Select repository: `pilates-app` (or your repo name)
- [ ] Configure build settings:
  - Root Directory: `backend/`
  - Framework: Other (Node.js)
  - Build Command: `npm install`
- [ ] Click "Deploy"

## Environment Variables (Vercel)

Add in Project Settings → Environment Variables:

- [ ] `JWT_SECRET` - Generated random 32+ character string
  - Generate: `openssl rand -base64 32`
  - Mark as "Sensitive"
  
- [ ] `DATABASE_URL` - Turso database URL with token
  - Format: `libsql://pilates-prod-xxx.turso.tech?authToken=<token>`
  - Mark as "Sensitive"
  
- [ ] `JWT_EXPIRE` - Token expiration time
  - Value: `7d`
  
- [ ] `NODE_ENV` - Environment
  - Value: `production`

All variables should be added to "Production" environment.

## Turso Database Setup

- [ ] Create Turso account at https://turso.tech
- [ ] Create organization (if new user)
- [ ] Create database named `pilates-prod`
- [ ] Select region (e.g., us-east, eu-west)
- [ ] Copy database URL
- [ ] Generate auth token
- [ ] Run schema from `backend/api/db/schema.sql`
  ```bash
  turso db shell pilates-prod
  # Paste contents of api/db/schema.sql
  ```
- [ ] Verify all tables created: users, schedules, reservations, etc.

## Test Deployment

- [ ] Deployment completes without errors (check Vercel dashboard)
- [ ] Check deployment URL (e.g., https://pilates-app.vercel.app)
- [ ] Test `/api/health` endpoint:
  ```bash
  curl https://pilates-app.vercel.app/api/health
  ```
- [ ] Should return: `{ "status": "ok", "timestamp": "...", "environment": "production" }`
- [ ] Check function logs in Vercel dashboard for errors

## API Testing (Production)

- [ ] Test auth endpoints:
  ```bash
  curl -X POST https://pilates-app.vercel.app/api/auth/request-code \
    -H "Content-Type: application/json" \
    -d '{"phone": "+5491123456789"}'
  ```
  
- [ ] Verify response includes code (dev) or success message
- [ ] Test verify-code endpoint with returned code
- [ ] Verify response includes `token` and `refreshToken`
- [ ] Test protected endpoint with token:
  ```bash
  curl -H "Authorization: Bearer <token>" \
    https://pilates-app.vercel.app/api/users
  ```
- [ ] Verify 401 without token, 403 without proper role
- [ ] Test all 6 main endpoints (health, auth, users, schedules, reservations, payments)

## Database Testing

- [ ] Database connection works from Vercel functions
- [ ] Can create users via POST /api/users
- [ ] Can query users via GET /api/users
- [ ] Can create schedules via POST /api/schedules
- [ ] Check Turso dashboard for data appearing in tables

## Monitoring & Alerts

- [ ] Set up Vercel monitoring:
  - [ ] Error rate alerts (trigger: >5% errors)
  - [ ] Response time alerts (trigger: >1000ms)
  - [ ] Build failure alerts
  
- [ ] Enable automatic deployments on git push
- [ ] Check that deployments are working (push test commit)

## Frontend Integration

- [ ] Update frontend `.env.production`:
  ```
  VITE_API_URL=https://pilates-app.vercel.app/api
  ```
- [ ] Build frontend: `npm run build`
- [ ] Test API calls in frontend (login, view schedules, etc.)
- [ ] Verify CORS headers are correct
- [ ] Check browser console for any errors

## Documentation

- [ ] Add deployment URL to README
- [ ] Document environment variables needed
- [ ] Document how to set up Turso database
- [ ] Document rollback procedure (if needed)
- [ ] Share API documentation with team

## Go-Live Checklist

- [ ] All tests pass locally and on deployed version
- [ ] No console errors in browser
- [ ] No errors in Vercel function logs
- [ ] Database has test data for verification
- [ ] Monitoring and alerts are configured
- [ ] Team knows deployment URL and credentials
- [ ] Backup/rollback plan documented
- [ ] Ready for production traffic

## Post-Deployment (First Week)

- [ ] Monitor error rates in Vercel dashboard
- [ ] Check response times are acceptable (<500ms)
- [ ] Verify database performance
- [ ] Check Turso metrics (query count, storage usage)
- [ ] Get user feedback on stability
- [ ] Be ready to rollback if critical issues found

## Post-Deployment (Ongoing)

- [ ] Review logs weekly
- [ ] Monitor billing (Vercel + Turso)
- [ ] Plan database backups
- [ ] Plan security updates
- [ ] Plan feature deployments
- [ ] Keep dependencies updated

---

## Quick Command Reference

```bash
# Local development
cd backend/
npm run dev

# Deploy to Vercel
git push origin main
# Auto-deploys via GitHub integration

# View logs
vercel logs --follow

# Set environment variable
vercel env add DATABASE_URL <value>

# Rollback deployment
vercel rollback

# Connect to Turso database
turso db shell pilates-prod
turso db show pilates-prod
```

## Support URLs

- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Docs: https://vercel.com/docs
- Turso Dashboard: https://app.turso.tech
- Turso Docs: https://turso.tech/docs
- DEPLOYMENT_VERCEL_ONLY.md - Detailed deployment guide

---

**Last Updated:** 2026-07-02  
**Status:** Ready for deployment
