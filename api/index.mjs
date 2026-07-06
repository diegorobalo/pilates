import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import * as dbModule from '../backend/src/db/connection-lazy.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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
    await dbModule.ensureInitialized();
    console.log('✅ Database connected');

    // Execute schema to ensure tables exist
    try {
      const schemaPath = path.join(__dirname, '../backend/src/db/schema.sql');
      const schema = fs.readFileSync(schemaPath, 'utf-8');
      const statements = schema
        .split('\n')
        .filter(line => !line.trim().startsWith('--'))
        .join('\n')
        .split(';')
        .map(stmt => stmt.trim())
        .filter(stmt => stmt.length > 0);

      for (const statement of statements) {
        try {
          await dbModule.runAsync(statement);
        } catch (err) {
          // Table might already exist, continue
          if (!err.message.includes('already exists')) {
            console.warn('Schema statement failed:', err.message);
          }
        }
      }
      console.log('✅ Database schema initialized');
    } catch (err) {
      console.warn('⚠️ Schema initialization:', err.message);
    }

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
