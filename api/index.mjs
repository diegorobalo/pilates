import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import * as dbModule from '../backend/src/db/connection-lazy.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Static imports so Vercel's bundler traces and includes every route file.
import authRoutes from '../backend/src/routes/auth.js';
import usersRoutes from '../backend/src/routes/users.js';
import adminRoutes from '../backend/src/routes/admin.js';
import schedulesRoutes from '../backend/src/routes/schedules.js';
import reservationsRoutes from '../backend/src/routes/reservations.js';
import attendanceRoutes from '../backend/src/routes/attendance.js';
import paymentsRoutes from '../backend/src/routes/payments.js';
import onboardingRoutes from '../backend/src/routes/onboarding.js';
import financesRoutes from '../backend/src/routes/finances.js';
import birthdaysRoutes from '../backend/src/routes/birthdays.js';
import calendarRoutes from '../backend/src/routes/calendar.js';
import subscriptionsRoutes from '../backend/src/routes/subscriptions.js';
import scheduleStatsRoutes from '../backend/src/routes/scheduleStats.js';
import legajoRoutes from '../backend/src/routes/legajo.js';
import configRoutes from '../backend/src/routes/config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Router that holds all the loaded API routes. Mounted behind the init gate.
const apiRouter = express.Router();
apiRouter.use('/auth', authRoutes);
apiRouter.use('/users', usersRoutes);
apiRouter.use('/admin', adminRoutes);
apiRouter.use('/schedules', schedulesRoutes);
apiRouter.use('/reservations', reservationsRoutes);
apiRouter.use('/attendance', attendanceRoutes);
apiRouter.use('/payments', paymentsRoutes);
apiRouter.use('/onboarding', onboardingRoutes);
apiRouter.use('/finances', financesRoutes);
apiRouter.use('/birthdays', birthdaysRoutes);
apiRouter.use('/calendar', calendarRoutes);
apiRouter.use('/subscriptions', subscriptionsRoutes);
apiRouter.use('/schedule-stats', scheduleStatsRoutes);
apiRouter.use('/legajo', legajoRoutes);
apiRouter.use('/config', configRoutes);

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

// Gate: every /api request waits for DB/schema init before routing.
app.use('/api', async (req, res, next) => {
  try {
    await getInit();
    next();
  } catch (err) {
    res.status(500).json({ error: 'Initialization failed', detail: err.message });
  }
}, apiRouter);

export default app;
