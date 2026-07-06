# PILATES Deployment Guide

**Production Deployment Configuration for Vercel (Frontend), Railway (Backend), and Turso (Database)**

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Architecture Overview](#architecture-overview)
3. [Database Setup (Turso)](#database-setup-turso)
4. [Backend Deployment (Railway)](#backend-deployment-railway)
5. [Frontend Deployment (Vercel)](#frontend-deployment-vercel)
6. [Environment Variables Configuration](#environment-variables-configuration)
7. [Verification & Testing](#verification--testing)
8. [Monitoring & Logs](#monitoring--logs)
9. [Troubleshooting](#troubleshooting)
10. [Rollback Procedures](#rollback-procedures)
11. [Maintenance & Updates](#maintenance--updates)

---

## Prerequisites

### Required Accounts
- **Turso Account**: https://turso.tech (for database)
- **Railway Account**: https://railway.app (for backend)
- **Vercel Account**: https://vercel.com (for frontend)
- **GitHub Account**: For code repository integration (required by all three platforms)

### Required Tools
- **Turso CLI**: `npm install -g turso-cli` or `brew install turso-cli`
- **Node.js 18+**: For building and testing
- **Git**: For version control and deployments

### Pre-Deployment Checklist
- [ ] All tests passing locally
- [ ] Code merged to `main` branch
- [ ] No hardcoded secrets in codebase
- [ ] Environment variables documented
- [ ] API endpoints documented
- [ ] Database schema finalized
- [ ] CORS configuration complete

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    PILATES Application                  │
└─────────────────────────────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ▼                  ▼                  ▼
    ┌────────┐        ┌────────┐       ┌──────────┐
    │ Vercel │        │ Railway│       │  Turso   │
    │Frontend│◄─────►│Backend │◄─────►│ Database │
    │  Dist  │ HTTPS │ API    │  SQL   │  SQLite  │
    └────────┘        └────────┘       └──────────┘
       Port           Port 5000         libsql://
      443              443
```

### Technology Stack
| Layer | Technology | Provider |
|-------|-----------|----------|
| **Frontend** | React 19 + Vite | Vercel |
| **Backend** | Node.js 18 + Express 5 | Railway |
| **Database** | SQLite with Turso | Turso |
| **Auth** | JWT + bcryptjs | Built-in |
| **DNS/CDN** | Vercel Edge | Vercel |

---

## Database Setup (Turso)

### Step 1: Create Turso Account
1. Go to https://turso.tech and sign up
2. Verify your email
3. Create an organization (optional, but recommended)

### Step 2: Install Turso CLI
```bash
# macOS
brew install turso-cli

# Linux (Ubuntu/Debian)
curl -sSfL https://get.turso.io/turso/install/linux.sh.gz | bash

# Windows (PowerShell)
# Download from https://github.com/chiselstrike/turso-cli/releases

# Verify installation
turso --version
```

### Step 3: Authenticate with Turso
```bash
# Login to your Turso account
turso auth login

# This will open a browser for authentication
# Verify in terminal when complete
```

### Step 4: Create Database
```bash
# Create a new database for PILATES
turso db create pilates-db

# Verify database was created
turso db list

# Expected output:
# DATABASE          URL                              SIZE
# pilates-db       libsql://abc123.turso.io/pi...   0 B
```

### Step 5: Get Connection Credentials
```bash
# Get database URL
turso db show pilates-db --http-only

# Create an authentication token
turso db tokens create pilates-db

# Save both outputs - you'll need them for environment variables
# Example:
# URL: libsql://abc123.turso.io/pilates-db
# Token: eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 6: Deploy Database Schema
```bash
# Save the schema from backend/src/db/turso-migration.js
# Option A: Using turso-cli shell

turso db shell pilates-db

# This opens an interactive SQL shell
# Paste the schema SQL from turso-migration.js
# Press Ctrl+D to execute

# Option B: From file (if saved as schema.sql)
turso db shell pilates-db < schema.sql
```

### Step 7: Verify Schema
```bash
turso db shell pilates-db

# Inside the shell, list all tables:
.tables

# Expected output:
# users  horarios  planes_semanales  reservas  asistencia  pagos
```

### Step 8: Create Backups
```bash
# Create a manual backup
turso db dump pilates-db > pilates-backup-$(date +%Y%m%d).sql

# Store this backup securely (Git-ignored location or cloud storage)
# Turso also creates automatic daily backups
```

---

## Backend Deployment (Railway)

### Step 1: Create Railway Account
1. Go to https://railway.app
2. Sign up (can use GitHub account for easier setup)
3. Create a new project

### Step 2: Create Project
```bash
# Option A: Using Railway Web Dashboard
# 1. Go to https://railway.app/dashboard
# 2. Click "New Project"
# 3. Click "Deploy from GitHub"

# Option B: Using Railway CLI
npm install -g @railway/cli
railway login
railway init
```

### Step 3: Configure Environment Variables in Railway
1. In Railway Dashboard, go to your project
2. Click "Settings" or "Environment"
3. Add the following variables:

```plaintext
NODE_ENV=production
PORT=5000
DATABASE_URL=libsql://YOUR_ACCOUNT.turso.io/pilates-db?authToken=YOUR_TOKEN
JWT_SECRET=your_very_strong_random_secret_here_min_32_chars
JWT_EXPIRE=7d
PHONE_VERIFICATION_ENABLED=false
```

**IMPORTANT**: Use the actual values from your Turso credentials. Never share these publicly.

### Step 4: Connect GitHub Repository
1. Grant Railway access to your GitHub account
2. Select the repository containing the PILATES project
3. Configure the deployment:
   - **Root Directory**: `backend` (important - tells Railway where the backend is)
   - **Build Command**: `npm install` (already configured in package.json)
   - **Start Command**: `npm start` (already configured in package.json)

### Step 5: Deploy Backend
```bash
# Via Railway CLI
railway up

# Or use GitHub integration:
# 1. Push code to GitHub main branch
# 2. Railway automatically detects changes and deploys
# 3. Monitor deployment in Railway Dashboard
```

### Step 6: Get Backend URL
1. In Railway Dashboard, find your backend service
2. Look for the "Public URL" or "Domain" section
3. Example: `https://pilates-backend.railway.app`
4. Save this URL - you'll need it for the frontend configuration

### Step 7: Verify Backend is Running
```bash
# Test the health endpoint
curl https://pilates-backend.railway.app/api/health

# Expected response:
# {"status":"ok","timestamp":"2024-01-15T10:30:45.123Z"}
```

### Step 8: Check Logs
```bash
# View logs in Railway Dashboard
# Or via CLI:
railway logs

# Look for:
# ✅ Server running on port 5000
# ✅ Node_ENV: production
# ❌ Any ERROR messages (if present, debug and redeploy)
```

---

## Frontend Deployment (Vercel)

### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Sign up (recommended: use GitHub account)
3. Authorize Vercel to access your GitHub repositories

### Step 2: Import Project
1. In Vercel Dashboard, click "Add New" → "Project"
2. Select your GitHub repository
3. Select "Import"

### Step 3: Configure Project
**Build & Output Settings**:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Root Directory**: `frontend` (important - tells Vercel where frontend is)

### Step 4: Set Environment Variables
In Vercel Project Settings, add:

```plaintext
VITE_API_URL=https://pilates-backend.railway.app/api
VITE_APP_NAME=PILATES
VITE_PUBLIC_URL=https://YOUR_VERCEL_DOMAIN.vercel.app
```

Replace `YOUR_VERCEL_DOMAIN` with your actual Vercel domain.

### Step 5: Deploy Frontend
1. Click "Deploy"
2. Wait for build to complete (typically 2-5 minutes)
3. Vercel will show: "Congratulations! Your project has been successfully deployed"

### Step 6: Get Frontend URL
After successful deployment, Vercel shows your public URL:
- **Default**: `https://pilates-[random-id].vercel.app`
- **Custom Domain**: Configure in Project Settings → Domains

### Step 7: Configure Custom Domain (Optional)
1. In Vercel Project Settings, go to "Domains"
2. Add your custom domain (e.g., `pilates.com`)
3. Point your domain's DNS records to Vercel
4. Wait for DNS propagation (usually 24 hours)

### Step 8: Verify Frontend
1. Visit your Vercel URL in browser
2. Check that:
   - [ ] Page loads without errors
   - [ ] Styling is correct
   - [ ] Network tab shows API calls to Railway backend
   - [ ] No CORS errors in console

---

## Environment Variables Configuration

### Backend Variables (.env.production)

**Location**: `backend/.env.production`

```plaintext
# Node Environment
NODE_ENV=production

# Server Configuration
PORT=5000

# Database Connection (Turso)
DATABASE_URL=libsql://YOUR_ACCOUNT.turso.io/pilates-db?authToken=YOUR_TOKEN

# Authentication
JWT_SECRET=generate_strong_random_string_min_32_chars
JWT_EXPIRE=7d

# Feature Flags
PHONE_VERIFICATION_ENABLED=false
```

**How to generate JWT_SECRET**:
```bash
# Using OpenSSL
openssl rand -base64 32

# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Using Python
python3 -c "import secrets; print(secrets.token_hex(32))"
```

### Frontend Variables (.env.production)

**Location**: `frontend/.env.production`

```plaintext
VITE_API_URL=https://pilates-backend.railway.app/api
VITE_APP_NAME=PILATES
VITE_PUBLIC_URL=https://pilates-app.vercel.app
```

### Variable Reference

| Variable | Backend | Frontend | Purpose | Example |
|----------|---------|----------|---------|---------|
| `NODE_ENV` | ✓ | - | Environment mode | `production` |
| `PORT` | ✓ | - | Server port | `5000` |
| `DATABASE_URL` | ✓ | - | Turso connection | `libsql://...` |
| `JWT_SECRET` | ✓ | - | Token signing key | `abc123...xyz` |
| `JWT_EXPIRE` | ✓ | - | Token expiration | `7d` |
| `PHONE_VERIFICATION_ENABLED` | ✓ | - | SMS feature flag | `false` |
| `VITE_API_URL` | - | ✓ | Backend API base URL | `https://...` |
| `VITE_APP_NAME` | - | ✓ | App name | `PILATES` |
| `VITE_PUBLIC_URL` | - | ✓ | Frontend public URL | `https://...` |

---

## Verification & Testing

### Post-Deployment Checklist

#### Backend Verification
```bash
# 1. Health check
curl https://pilates-backend.railway.app/api/health

# 2. Check logs for errors
railway logs | grep ERROR

# 3. Test database connection
# Monitor Railway logs - should see no database errors

# 4. Test authentication endpoint
curl -X POST https://pilates-backend.railway.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","phone":"1234567890","password":"Test123!"}'
```

#### Frontend Verification
```bash
# 1. Visit the frontend URL
# https://pilates-app.vercel.app

# 2. Open browser DevTools (F12) and check:
# - No CORS errors in Console tab
# - Network requests to backend are successful
# - Status 200 for API calls

# 3. Test a complete user flow:
# - [x] Login page loads
# - [x] Can attempt to login (or see validation errors)
# - [x] API requests appear in Network tab
# - [x] No JavaScript errors in Console
```

#### End-to-End Testing
```bash
# 1. Create a test user account via frontend
# 2. Login with test account
# 3. Navigate to main dashboard
# 4. Check that data loads from backend
# 5. Test create/edit/delete operations
# 6. Monitor network requests in DevTools
```

### Performance Testing
```bash
# Test frontend performance
# Use Vercel Analytics (automatically enabled)
# Check PageSpeed Insights: https://pagespeed.web.dev

# Test backend performance
# Monitor Railway metrics in Dashboard
# Check response times in logs
```

---

## Monitoring & Logs

### Railway Backend Monitoring

1. **View Logs**
   - Dashboard → Your Project → Logs tab
   - Filter by service: `backend`
   - Search for errors, warnings

2. **Monitor Metrics**
   - Memory usage
   - CPU usage
   - Network I/O
   - Request count

3. **Set Up Alerts**
   - Go to Settings → Alerts
   - Configure thresholds for errors, memory, CPU

### Vercel Frontend Monitoring

1. **View Deployments**
   - Dashboard → Deployments
   - Click deployment to see build logs
   - Check for build errors or warnings

2. **Monitor Performance**
   - Analytics tab shows real user metrics
   - Check Core Web Vitals
   - Monitor request latency

3. **View Function Logs**
   - Go to Logs tab
   - See all API requests and responses

### Turso Database Monitoring

1. **Access Dashboard**
   - https://turso.tech/app → Select Database
   - View database size and statistics

2. **Monitor Queries**
   - Enable query logging (if available)
   - Check for slow queries

3. **Backup Status**
   - View automatic backups
   - Create manual backups before major updates

### Log Aggregation (Optional)

For better monitoring across all services:
```bash
# Using Railway CLI to aggregate logs
railway logs -f  # Follow mode (real-time logs)

# Export logs for analysis
railway logs > deployment-logs.txt
```

---

## Troubleshooting

### Common Issues & Solutions

#### Issue: CORS Error on Frontend
**Error**: `Access to XMLHttpRequest at 'https://...' from origin 'https://...' has been blocked by CORS policy`

**Solution**:
1. Check that backend CORS is configured correctly
2. Verify `VITE_API_URL` matches your backend URL
3. Ensure allowed origins include your Vercel domain:
   ```javascript
   // In backend/src/server.js
   const allowedOrigins = [
     'https://pilates-app.vercel.app',
     // ... other origins
   ];
   ```
4. Redeploy backend after changes

#### Issue: "Cannot connect to database"
**Error**: `Error: SQLITE_CANTOPEN`

**Solution**:
1. Verify `DATABASE_URL` is correct in Railway environment
2. Check Turso database exists: `turso db list`
3. Test connection: `turso db shell pilates-db "SELECT 1"`
4. Regenerate token if expired: `turso db tokens create pilates-db`
5. Update environment variable with new token

#### Issue: 502 Bad Gateway
**Error**: `Error 502: Bad Gateway` from Vercel/Railway

**Solution**:
1. Check Railway logs: `railway logs | grep ERROR`
2. Verify server is running: `curl https://backend-url/api/health`
3. Check environment variables are set
4. Restart service in Railway Dashboard
5. Redeploy if needed: `railway up`

#### Issue: Frontend Shows Blank Page
**Error**: Blank page instead of app content

**Solution**:
1. Check browser console (F12) for JavaScript errors
2. Verify Vite build completed: Check Vercel Deployments tab
3. Clear browser cache: `Ctrl+Shift+Delete`
4. Test on different browser
5. Check that `/api` proxy is configured correctly

#### Issue: Authentication Fails
**Error**: Login unsuccessful, "Invalid credentials"

**Solution**:
1. Verify database schema includes users table
2. Check that JWT_SECRET is set correctly in Railway
3. Ensure bcrypt is installed in backend: `npm ls bcryptjs`
4. Test user creation endpoint directly
5. Check database has valid user records: `turso db shell pilates-db "SELECT * FROM users LIMIT 1"`

#### Issue: Slow Application
**Error**: App responds slowly to user actions

**Solution**:
1. Check Railway metrics for memory/CPU usage
2. Monitor Vercel Analytics for slow pages
3. Optimize database queries - add indexes if needed
4. Check for N+1 queries in API code
5. Enable compression: `app.use(compression());`
6. Consider upgrading Railway plan for more resources

---

## Rollback Procedures

### Quick Rollback

#### Rollback Frontend (Vercel)
1. Go to Vercel Dashboard
2. Select your project
3. Click "Deployments"
4. Find previous successful deployment
5. Click the three dots "..." → "Promote to Production"
6. Confirm rollback

#### Rollback Backend (Railway)
1. Go to Railway Dashboard
2. Select your project
3. Click on backend service
4. View deployment history
5. Select previous stable deployment
6. Click "Redeploy" button
7. Confirm and wait for deployment

### Database Rollback

```bash
# View available backups
turso db list backups pilates-db

# Download backup
turso db dump pilates-db > rollback.sql

# If you need to restore (contact Turso support for guidance)
# They can restore from automatic backups
```

---

## Maintenance & Updates

### Regular Maintenance Tasks

#### Weekly
- [ ] Check application logs for errors
- [ ] Monitor database size: `turso db show pilates-db`
- [ ] Review Vercel Analytics for performance issues

#### Monthly
- [ ] Update dependencies: `npm update`
- [ ] Run tests locally
- [ ] Create manual database backup
- [ ] Review security logs

#### Quarterly
- [ ] Update major dependencies with testing
- [ ] Security audit of code
- [ ] Performance optimization review
- [ ] Capacity planning

### Dependency Updates

```bash
# Check for outdated packages
npm outdated

# Update minor/patch versions
npm update

# Update specific package
npm install package-name@latest

# Test locally
npm test
npm run dev

# Commit and push to main
git add .
git commit -m "chore: update dependencies"
git push origin main

# Railway will auto-deploy on push to main
```

### Security Updates

```bash
# Check for security vulnerabilities
npm audit

# Fix automatically (where possible)
npm audit fix

# Or manually review and fix high-severity issues
npm audit fix --force  # Use with caution

# Always test before deploying
npm test
```

### Database Migrations

For schema changes:

1. Test locally first
2. Create a database backup
3. Apply migration to Turso:
   ```bash
   turso db shell pilates-db < migration.sql
   ```
4. Deploy backend code
5. Verify in production

---

## Deployment Checklist

### Pre-Deployment
- [ ] All tests passing: `npm test`
- [ ] Code linted: `npm run lint`
- [ ] No hardcoded secrets in code
- [ ] Code reviewed and approved
- [ ] Merged to `main` branch
- [ ] Database schema finalized
- [ ] Environment variables documented

### Frontend Deployment
- [ ] Build succeeds locally: `npm run build`
- [ ] Environment variables set in Vercel
- [ ] Vercel deployment completes successfully
- [ ] Page loads without errors
- [ ] Styles render correctly
- [ ] Network requests work (check DevTools)

### Backend Deployment
- [ ] Dependencies resolve: `npm install`
- [ ] Server starts locally: `npm start`
- [ ] Health endpoint responds: `/api/health`
- [ ] Database connection works
- [ ] Environment variables set in Railway
- [ ] Railway deployment completes
- [ ] Health check passes in production
- [ ] No errors in logs

### Database Deployment
- [ ] Backup created before changes
- [ ] Schema applies without errors
- [ ] All tables created
- [ ] Indexes created
- [ ] Data verified (if migrating)

### Post-Deployment
- [ ] Frontend loads in browser
- [ ] Frontend connects to backend API
- [ ] User can login (or see appropriate errors)
- [ ] CORS errors resolved
- [ ] Performance acceptable
- [ ] No error logs in backend
- [ ] Analytics working (optional)

---

## Support & Documentation

### Useful Links
- **Railway**: https://docs.railway.app
- **Vercel**: https://vercel.com/docs
- **Turso**: https://docs.turso.tech
- **Express.js**: https://expressjs.com
- **React/Vite**: https://vitejs.dev

### Getting Help
1. Check the relevant platform's documentation
2. Review application logs
3. Test endpoints with curl or Postman
4. Check environment variables are set correctly
5. Review code for recent changes

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024-01-15 | Initial deployment guide |

---

**Last Updated**: 2024-01-15  
**Maintained By**: Diego Robalo  
**Status**: Complete
