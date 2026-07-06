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

// Router that holds all the loaded API routes. It's mounted immediately,
// but its child routes are attached asynchronously during initialization.
const apiRouter = express.Router();

async function initialize() {
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
    { path: '/auth', file: '../backend/src/routes/auth.js' },
    { path: '/users', file: '../backend/src/routes/users.js' },
    { path: '/admin', file: '../backend/src/routes/admin.js' },
    { path: '/schedules', file: '../backend/src/routes/schedules.js' },
    { path: '/reservations', file: '../backend/src/routes/reservations.js' },
    { path: '/attendance', file: '../backend/src/routes/attendance.js' },
    { path: '/payments', file: '../backend/src/routes/payments.js' },
    { path: '/onboarding', file: '../backend/src/routes/onboarding.js' },
    { path: '/finances', file: '../backend/src/routes/finances.js' },
    { path: '/birthdays', file: '../backend/src/routes/birthdays.js' },
    { path: '/calendar', file: '../backend/src/routes/calendar.js' },
    { path: '/subscriptions', file: '../backend/src/routes/subscriptions.js' },
    { path: '/schedule-stats', file: '../backend/src/routes/scheduleStats.js' },
    { path: '/legajo', file: '../backend/src/routes/legajo.js' },
    { path: '/config', file: '../backend/src/routes/config.js' },
  ];

  for (const route of routes) {
    try {
      const module = await import(route.file);
      apiRouter.use(route.path, module.default);
      console.log(`✅ /api${route.path} loaded`);
    } catch (err) {
      console.error(`❌ /api${route.path}:`, err.message);
      apiRouter.use(route.path, (req, res) => {
        res.status(503).json({ error: 'Service unavailable', route: route.path, detail: err.message });
      });
    }
  }
}

// Single initialization promise, reused across warm invocations.
let initPromise = null;
function getInit() {
  if (!initPromise) {
    initPromise = initialize().catch((err) => {
      console.error('Failed to initialize API:', err.message);
      initPromise = null; // allow retry on next request
      throw err;
    });
  }
  return initPromise;
}

// Gate: every /api request waits for initialization to finish before routing.
app.use('/api', async (req, res, next) => {
  try {
    await getInit();
    next();
  } catch (err) {
    res.status(500).json({ error: 'Initialization failed', detail: err.message });
  }
}, apiRouter);

export default app;
