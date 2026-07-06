import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { ensureInitialized } from '../backend/src/db/connection-lazy.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Initialize DB and load routes on startup
(async () => {
  try {
    await ensureInitialized();
    console.log('✅ Database initialized');

    const routes = [
      { path: '/api/auth', file: '../backend/src/routes/auth.js' },
      { path: '/api/users', file: '../backend/src/routes/users.js' },
      { path: '/api/admin', file: '../backend/src/routes/admin.js' },
      { path: '/api/schedules', file: '../backend/src/routes/schedules.js' },
      { path: '/api/reservations', file: '../backend/src/routes/reservations.js' },
      { path: '/api/attendance', file: '../backend/src/routes/attendance.js' },
      { path: '/api/payments', file: '../backend/src/routes/payments.js' },
      { path: '/api/onboarding', file: '../backend/src/routes/onboarding.js' },
      { path: '/api/finances', file: '../backend/src/routes/finances.js' },
      { path: '/api/birthdays', file: '../backend/src/routes/birthdays.js' },
      { path: '/api/calendar', file: '../backend/src/routes/calendar.js' },
      { path: '/api/subscriptions', file: '../backend/src/routes/subscriptions.js' },
      { path: '/api/schedule-stats', file: '../backend/src/routes/scheduleStats.js' },
      { path: '/api/legajo', file: '../backend/src/routes/legajo.js' },
      { path: '/api/config', file: '../backend/src/routes/config.js' },
    ];

    for (const route of routes) {
      try {
        const module = await import(route.file);
        app.use(route.path, module.default);
        console.log(`✅ ${route.path} loaded`);
      } catch (err) {
        console.error(`❌ ${route.path}:`, err.message);
        app.use(route.path, (req, res) => {
          res.status(503).json({ error: 'Service unavailable' });
        });
      }
    }
  } catch (err) {
    console.error('Failed to initialize API:', err.message);
  }
})();

export default app;
