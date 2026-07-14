import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import * as dbModule from '../backend/src/db/connection-lazy.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { setJWTSecret } from '../backend/src/middleware/auth.js';

// Set JWT secret before any route imports
if (process.env.JWT_SECRET_KEY) {
  setJWTSecret(process.env.JWT_SECRET_KEY);
} else {
  console.warn('⚠️ WARNING: JWT_SECRET_KEY not set in environment');
}

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

// Columns that older Turso databases may be missing. Each is safe to add via
// ALTER TABLE ADD COLUMN (nullable, or constant default — no UNIQUE/PK/non-const).
const MIGRATIONS = {
  users: {
    apellido: 'TEXT',
    fecha_nacimiento: 'DATE',
    direccion: 'TEXT',
    ciudad: 'TEXT',
    pin_ingreso: 'TEXT',
    datos_completados: 'BOOLEAN DEFAULT 0',
  },
  horarios_clases: {
    profesora_asignada: 'TEXT',
    titulo: 'TEXT',
  },
  pagos: {
    moneda: "TEXT DEFAULT 'ARS'",
  },
};

async function runMigrations() {
  for (const [table, columns] of Object.entries(MIGRATIONS)) {
    let existing;
    try {
      const info = await dbModule.allAsync(`PRAGMA table_info(${table})`);
      existing = new Set(info.map((r) => r.name));
    } catch (err) {
      // Table doesn't exist yet — schema step will create it with all columns.
      continue;
    }
    for (const [col, def] of Object.entries(columns)) {
      if (!existing.has(col)) {
        try {
          await dbModule.runAsync(`ALTER TABLE ${table} ADD COLUMN ${col} ${def}`);
          console.log(`✅ Migrated: added ${table}.${col}`);
        } catch (err) {
          if (!err.message.includes('duplicate column')) {
            console.warn(`⚠️ Migration ${table}.${col}:`, err.message);
          }
        }
      }
    }
  }
}

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

  // Reconcile older databases missing newer columns
  try {
    await runMigrations();
  } catch (err) {
    console.warn('⚠️ Migration step:', err.message);
  }

  // Seed a system user row for the master admin so FK-bound actions
  // (creada_por / registrada_por -> users.id) work when operating as admin.
  try {
    await dbModule.runAsync(
      `INSERT OR IGNORE INTO users (id, nombre, telefono, tipo, estado)
       VALUES ('admin', 'Administrador', 'admin-system', 'ADMIN', 'ACTIVA')`
    );
    console.log('✅ Admin system user ensured');
  } catch (err) {
    console.warn('⚠️ Admin user seed:', err.message);
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
