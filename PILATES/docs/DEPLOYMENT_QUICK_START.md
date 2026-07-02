# PILATES Deployment - Quick Start

**TL;DR - Get your app live in 15 minutes**

---

## 5-Step Deployment Process

### Step 1: Database (Turso) - 3 minutes

```bash
# Install & login to Turso CLI
brew install turso-cli
turso auth login

# Create database
turso db create pilates-db

# Get credentials
turso db show pilates-db --http-only  # Copy this URL
turso db tokens create pilates-db      # Copy this token

# Deploy schema
turso db shell pilates-db
# Paste the SQL from: backend/src/db/turso-migration.js
# Then press Ctrl+D
```

**Save these values:**
```
DATABASE_URL = libsql://YOUR_ACCOUNT.turso.io/pilates-db?authToken=YOUR_TOKEN
```

### Step 2: Backend (Railway) - 5 minutes

1. Go to https://railway.app/dashboard
2. Click "New Project" → "Deploy from GitHub"
3. Select your GitHub repository
4. Configure:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Click "Deploy"
6. Add environment variables (Railway dashboard):
   ```
   NODE_ENV=production
   PORT=5000
   DATABASE_URL=[FROM STEP 1]
   JWT_SECRET=[GENERATE: openssl rand -base64 32]
   JWT_EXPIRE=7d
   PHONE_VERIFICATION_ENABLED=false
   ```
7. Wait for deployment (green checkmark)
8. Copy public URL (e.g., `https://pilates-backend.railway.app`)

### Step 3: Frontend (Vercel) - 5 minutes

1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Select your GitHub repository
4. Configure:
   - Framework: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Add environment variables:
   ```
   VITE_API_URL=[RAILWAY_URL_FROM_STEP_2]/api
   VITE_APP_NAME=PILATES
   VITE_PUBLIC_URL=[VERCEL_DOMAIN]
   ```
6. Click "Deploy"
7. Wait for build complete

### Step 4: Update Backend CORS (if needed)

If you get CORS errors, the Vercel domain is already in the allowed list. If not:

```javascript
// backend/src/server.js - Update this line:
'https://your-vercel-domain.vercel.app'
```

Then push to GitHub. Railway auto-deploys.

### Step 5: Test

```bash
# Test backend health
curl https://pilates-backend.railway.app/api/health

# Open frontend in browser
# https://pilates-app.vercel.app
# Check DevTools → Network tab for API calls
```

---

## Environment Variable Reference

| Variable | Where | Example |
|----------|-------|---------|
| `DATABASE_URL` | Railway | `libsql://abc.turso.io/pilates-db?authToken=xyz` |
| `JWT_SECRET` | Railway | `abc123xyz...` (min 32 chars) |
| `VITE_API_URL` | Vercel | `https://pilates-backend.railway.app/api` |
| `VITE_PUBLIC_URL` | Vercel | `https://pilates-app.vercel.app` |

---

## Generate JWT_SECRET

```bash
# Option 1: OpenSSL
openssl rand -base64 32

# Option 2: Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Option 3: Python
python3 -c "import secrets; print(secrets.token_hex(32))"
```

---

## Verification Checklist

- [ ] Turso database created and schema deployed
- [ ] Railway backend deployed (green checkmark)
- [ ] Backend health endpoint responds (`/api/health`)
- [ ] Vercel frontend deployed (green checkmark)
- [ ] Frontend loads in browser
- [ ] DevTools Network tab shows successful API calls
- [ ] No CORS errors in Console tab
- [ ] Login form appears (even if not fully working yet)

---

## Common Issues

### CORS Error?
Update `allowedOrigins` in `backend/src/server.js` with your Vercel domain, then redeploy.

### Database Connection Error?
- Check `DATABASE_URL` is exact copy from Turso
- Verify Turso token hasn't expired: `turso db tokens create pilates-db`
- Check Railway has the updated variable

### Blank Frontend?
- Check browser console (F12) for errors
- Verify `VITE_API_URL` in Vercel environment
- Clear cache: Ctrl+Shift+Delete

### Backend Won't Start?
- Check Railway logs for errors
- Verify all required env vars are set
- Ensure `npm start` script exists in package.json

---

## Next Steps

1. ✅ App is live!
2. Test all features manually
3. Monitor logs in Railway/Vercel dashboards
4. Read [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed information
5. Set up monitoring/alerts (optional)

---

## Support Resources

- Railway Docs: https://docs.railway.app
- Vercel Docs: https://vercel.com/docs
- Turso Docs: https://docs.turso.tech

---

**Deployed at**: [Date/Time]  
**Status**: Live ✅
