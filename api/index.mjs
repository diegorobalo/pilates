import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || origin.endsWith('.vercel.app') || origin.startsWith('http://localhost:')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Import and register routes
try {
  const { default: authRoutes } = await import('../backend/src/routes/auth.js');
  const { default: usersRoutes } = await import('../backend/src/routes/users.js');
  const { default: schedulesRoutes } = await import('../backend/src/routes/schedules.js');
  const { default: reservationsRoutes } = await import('../backend/src/routes/reservations.js');
  const { default: attendanceRoutes } = await import('../backend/src/routes/attendance.js');
  const { default: paymentsRoutes } = await import('../backend/src/routes/payments.js');
  const { default: onboardingRoutes } = await import('../backend/src/routes/onboarding.js');
  const { default: financesRoutes } = await import('../backend/src/routes/finances.js');
  const { default: birthdaysRoutes } = await import('../backend/src/routes/birthdays.js');
  const { default: calendarRoutes } = await import('../backend/src/routes/calendar.js');
  const { default: subscriptionsRoutes } = await import('../backend/src/routes/subscriptions.js');
  const { default: scheduleStatsRoutes } = await import('../backend/src/routes/scheduleStats.js');
  const { default: legajoRoutes } = await import('../backend/src/routes/legajo.js');
  const { default: configRoutes } = await import('../backend/src/routes/config.js');

  app.use('/api/auth', authRoutes);
  app.use('/api/users', usersRoutes);
  app.use('/api/schedules', schedulesRoutes);
  app.use('/api/reservations', reservationsRoutes);
  app.use('/api/attendance', attendanceRoutes);
  app.use('/api/payments', paymentsRoutes);
  app.use('/api/onboarding', onboardingRoutes);
  app.use('/api/finances', financesRoutes);
  app.use('/api/birthdays', birthdaysRoutes);
  app.use('/api/calendar', calendarRoutes);
  app.use('/api/subscriptions', subscriptionsRoutes);
  app.use('/api/schedule-stats', scheduleStatsRoutes);
  app.use('/api/legajo', legajoRoutes);
  app.use('/api/config', configRoutes);

  console.log('✅ All routes loaded successfully');
} catch (error) {
  console.error('❌ Error loading routes:', error.message);
}

export default app;
