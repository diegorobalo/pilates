# PILATES Deployment Guide - Vercel + Turso

Complete step-by-step guide to deploy PILATES backend on Vercel with Turso database.

## Prerequisites

1. **GitHub Account** - Code hosting
2. **Vercel Account** - Serverless deployment (free tier available)
3. **Turso Account** - SQLite database hosting (free tier: 9GB)

## Part 1: GitHub Setup

### Step 1a: Create GitHub Repository
```bash
cd C:\Users\diego.robalo\Documents\CLAUDIA\PILATES

# Initialize git (if not already)
git init
git remote add origin https://github.com/YOUR_USERNAME/pilates-app.git

# Push to GitHub
git add .
git commit -m "chore: PILATES app initial commit"
git branch -M main
git push -u origin main
```

### Step 1b: Verify Repository Structure
GitHub repo should have:
```
pilates-app/
├── frontend/
│   ├── vite.config.js
│   ├── src/
│   └── package.json
├── backend/
│   ├── api/
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── schedules.js
│   │   ├── reservations.js
│   │   ├── attendance.js
│   │   ├── payments.js
│   │   └── health.js
│   ├── vercel.json
│   └── package.json
├── .gitignore
└── README.md
```

## Part 2: Turso Database Setup

### Step 2a: Create Turso Database
```bash
# 1. Sign up at https://turso.tech
# 2. Create organization (if new)
# 3. In Turso dashboard, click "Create a new database"
# 4. Name it: "pilates-prod"
# 5. Select region (e.g., us-east, eu-west)
```

### Step 2b: Initialize Database Schema
```bash
# Install Turso CLI
npm install -g @turso/cli

# Login to Turso
turso auth login

# Open DB shell
turso db shell pilates-prod

# Copy and paste schema from backend/api/db/schema.sql
# The schema includes all tables:
# - users
# - schedules
# - reservations
# - attendance
# - payments
# - weekly_plans
```

### Step 2c: Get Connection Credentials
```bash
# In Turso dashboard:
# 1. Select pilates-prod database
# 2. Click "Copy Database URL" (something like: libsql://pilates-prod-xxx.turso.tech)
# 3. Click "Generate Token" → Copy the token

# You'll need:
# DATABASE_URL=libsql://pilates-prod-xxx.turso.tech?authToken=<token>
```

## Part 3: Vercel Deployment Setup

### Step 3a: Connect GitHub to Vercel
```
1. Go to https://vercel.com
2. Click "New Project"
3. Select "Import Git Repository"
4. Authorize GitHub and select pilates-app repo
5. Click Import
```

### Step 3b: Configure Vercel Project

**Project Settings:**
```
Framework: Other (Node.js)
Root Directory: backend/
Build Command: npm install
Output Directory: (leave empty)
```

### Step 3c: Add Environment Variables
In Vercel project settings → Environment Variables:

| Variable | Value | Notes |
|----------|-------|-------|
| `NODE_ENV` | `production` | Required |
| `JWT_SECRET` | (Generate: `openssl rand -base64 32`) | Keep secret! |
| `DATABASE_URL` | `libsql://pilates-prod-xxx.turso.tech?authToken=<token>` | From Turso |
| `JWT_EXPIRE` | `7d` | Token expiration |

**Important**: Mark all sensitive variables as encrypted.

### Step 3d: Deploy Backend
```bash
# Vercel auto-deploys on git push
git push origin main

# Or manually deploy:
npm install -g vercel
vercel

# Follow prompts:
# - Confirm project root: backend/
# - Use existing project: Yes
# - Overwrite settings: No
```

After deployment, Vercel will show:
```
✅ Deployment Complete!
Your API is live at: https://pilates-app.vercel.app/api
```

### Step 3e: Test API Endpoints
```bash
# Test health check
curl https://pilates-app.vercel.app/api/health

# Expected response:
# { "status": "ok", "timestamp": "2026-07-02T..." }
```

## Part 4: Frontend Deployment (Vercel)

### Step 4a: Update Frontend .env
```bash
# frontend/.env.production
VITE_API_URL=https://pilates-app.vercel.app/api
VITE_API_TIMEOUT=30000
```

### Step 4b: Deploy Frontend
```
1. In Vercel, create new project
2. Select pilates-app repo
3. Configure:
   - Framework: Vite
   - Root Directory: frontend/
   - Build Command: npm run build
   - Output Directory: dist/
4. Click Deploy
```

**Frontend URL**: https://pilates-frontend.vercel.app

### Step 4c: Update CORS Settings
If frontend and backend have different domains, update backend `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Access-Control-Allow-Origin", "value": "https://pilates-frontend.vercel.app" },
        { "key": "Access-Control-Allow-Methods", "value": "GET,POST,PUT,DELETE,OPTIONS" },
        { "key": "Access-Control-Allow-Headers", "value": "Content-Type, Authorization" }
      ]
    }
  ]
}
```

## Part 5: Post-Deployment Verification

### Step 5a: Test Authentication Flow
```bash
# Request verification code
curl -X POST https://pilates-app.vercel.app/api/auth/request-code \
  -H "Content-Type: application/json" \
  -d '{"phone": "+54911234567"}'

# Response should include code (dev mode) and message
```

### Step 5b: Test Protected Endpoints
```bash
# Get token first, then:
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://pilates-app.vercel.app/api/users
```

### Step 5c: Check Database Connection
```bash
# Look at Vercel logs:
vercel logs --follow

# Should see connection successful messages
```

## Part 6: CI/CD Pipeline (GitHub Actions - Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@v31
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        with:
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Part 7: Database Backups & Monitoring

### Step 7a: Enable Turso Backups
```bash
# Turso free plan includes daily backups
# In Turso dashboard: Settings → Backups
# Configure retention (7-30 days)
```

### Step 7b: Monitor API Performance
```bash
# Vercel Dashboard → Monitoring
# - Check response times
# - Monitor error rates
# - View function duration

# Expected metrics:
# - Response time: <200ms
# - Error rate: <1%
# - Cold start: <1s
```

### Step 7c: Set Up Alerts
In Vercel → Project Settings → Alerts:
```
- Error rate > 5% → Email notification
- Build failure → Email notification
- Response time > 1s → Email notification
```

## Part 8: Troubleshooting

### Issue: "Cannot connect to database"
```bash
# Check DATABASE_URL in Vercel env vars
# Ensure token is valid (Turso tokens expire)

# Regenerate token:
turso auth tokens create
```

### Issue: "Middleware auth fails"
```bash
# Verify JWT_SECRET is set correctly
# Check Authorization header format: "Bearer <token>"
```

### Issue: "CORS errors on frontend"
```bash
# Update vercel.json with correct frontend domain
# Clear browser cache and hard refresh (Ctrl+Shift+R)
```

### Issue: "Requests timeout"
```bash
# Check Vercel logs for database queries taking >30s
# Optimize slow endpoints in controllers
# Consider connection pooling for high traffic
```

## Part 9: Going Further - Production Checklist

Before going to production with real users:

- [ ] Enable HTTPS (Vercel auto-enables)
- [ ] Set strong JWT_SECRET (32+ chars, random)
- [ ] Configure database backups in Turso
- [ ] Set up error logging (e.g., Sentry)
- [ ] Enable rate limiting on auth endpoints
- [ ] Test phone verification with real numbers
- [ ] Set up monitoring alerts
- [ ] Document API for users
- [ ] Create admin dashboard
- [ ] Plan capacity (Turso/Vercel scaling)

## Part 10: Local Development

### Option A: Use Vercel Dev Environment
```bash
npm install -g vercel
cd backend
vercel dev
# Runs on http://localhost:3000
```

### Option B: Use Local SQLite (Dev Only)
```bash
# Change DATABASE_URL to local sqlite:pilates.db
npm run dev
```

### Option C: Connect to Turso Locally
```bash
# Set DATABASE_URL in .env.local
DATABASE_URL=libsql://pilates-prod-xxx.turso.tech?authToken=<token>
npm run dev
```

## Useful Commands

```bash
# View deployment logs
vercel logs --follow

# Rollback to previous version
vercel rollback

# View environment variables
vercel env ls

# Update environment variable
vercel env add DATABASE_URL <new_url>

# Connect to Turso shell
turso db shell pilates-prod

# Check database size
turso db show pilates-prod
```

## Cost Estimation

| Service | Free Tier | Cost (Prod) |
|---------|-----------|------------|
| Vercel | 100 GB/month | $0-20/month |
| Turso | 9 GB storage, 1M reads/month | $0-29/month |
| GitHub | Unlimited | Free |
| Total | | ~$29-49/month |

## Next Steps

1. Follow Parts 1-3 for backend deployment
2. Verify API works with `/api/health` test
3. Deploy frontend (Part 4)
4. Run full integration tests
5. Monitor performance (Part 7b)
6. Set up alerts and backups (Part 7)

---

**Questions?** Check Vercel docs: https://vercel.com/docs/serverless-functions/nodejs
