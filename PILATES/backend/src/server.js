import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import schedulesRoutes from './routes/schedules.js';
import reservationsRoutes from './routes/reservations.js';
import attendanceRoutes from './routes/attendance.js';
import paymentsRoutes from './routes/payments.js';
import adminRoutes from './routes/admin.js';
import onboardingRoutes from './routes/onboarding.js';
import financesRoutes from './routes/finances.js';
import birthdaysRoutes from './routes/birthdays.js';
import calendarRoutes from './routes/calendar.js';
import subscriptionsRoutes from './routes/subscriptions.js';
import scheduleStatsRoutes from './routes/scheduleStats.js';
import { initSubscriptionCronJobs } from './cron/subscriptionCron.js';

dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['JWT_SECRET_KEY'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ FATAL: Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
  // Prevent using insecure default value
  if (process.env[envVar] === 'your-secure-secret-key-here' || process.env[envVar] === 'your-secret-key-change-in-production') {
    console.error(`❌ FATAL: JWT_SECRET_KEY is using insecure placeholder value. Set a real secret in .env`);
    process.exit(1);
  }
}

// Validate PORT
const portString = process.env.PORT || '3000';
const PORT = parseInt(portString, 10);
if (isNaN(PORT) || PORT < 1 || PORT > 65535) {
  console.error(`❌ FATAL: Invalid PORT value. Must be 1-65535, got: ${portString}`);
  process.exit(1);
}

const app = express();

// CORS configuration
// Allow local dev, any *.vercel.app frontend, and an optional explicit FRONTEND_URL.
const explicitOrigin = process.env.FRONTEND_URL;

const corsOptions = {
  origin: (origin, callback) => {
    if (
      !origin ||
      origin === explicitOrigin ||
      origin.endsWith('.vercel.app') ||
      origin.startsWith('http://localhost:') ||
      origin.startsWith('http://127.0.0.1:')
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('combined')); // Request logging

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Authentication routes
app.use('/api/auth', authRoutes);

// User management routes
app.use('/api/users', usersRoutes);

// Schedule management routes
app.use('/api/schedules', schedulesRoutes);

// Reservation management routes
app.use('/api/reservations', reservationsRoutes);

// Attendance management routes
app.use('/api/attendance', attendanceRoutes);

// Payment management routes
app.use('/api/payments', paymentsRoutes);

// Onboarding routes (user profile completion)
app.use('/api/onboarding', onboardingRoutes);

// Finance management routes (payments, expenses, reports)
app.use('/api/finances', financesRoutes);

// Birthday calendar routes
app.use('/api/birthdays', birthdaysRoutes);

// Calendar exceptions (holidays, closures) routes
app.use('/api/calendar', calendarRoutes);

// Subscriptions (recurring class enrollment) routes
app.use('/api/subscriptions', subscriptionsRoutes);

// Schedule stats (instructor capacity, assignments) routes
app.use('/api/schedule-stats', scheduleStatsRoutes);

// Admin (master access) routes
app.use('/api/admin', adminRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
});

// Process error handlers
process.on('uncaughtException', (err) => {
  console.error('❌ UNCAUGHT EXCEPTION:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ UNHANDLED REJECTION at:', promise, 'reason:', reason);
  process.exit(1);
});

// Initialize cron jobs
initSubscriptionCronJobs();

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📋 NODE_ENV: ${process.env.NODE_ENV || 'development'}`);
});
