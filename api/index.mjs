import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Try to load routes, but continue if they fail
try {
  const authRoutes = await import('../backend/src/routes/auth.js');
  app.use('/api/auth', authRoutes.default);
} catch (e) { console.error('auth failed:', e.message); }

try {
  const usersRoutes = await import('../backend/src/routes/users.js');
  app.use('/api/users', usersRoutes.default);
} catch (e) { console.error('users failed:', e.message); }

try {
  const schedulesRoutes = await import('../backend/src/routes/schedules.js');
  app.use('/api/schedules', schedulesRoutes.default);
} catch (e) { console.error('schedules failed:', e.message); }

try {
  const reservationsRoutes = await import('../backend/src/routes/reservations.js');
  app.use('/api/reservations', reservationsRoutes.default);
} catch (e) { console.error('reservations failed:', e.message); }

try {
  const attendanceRoutes = await import('../backend/src/routes/attendance.js');
  app.use('/api/attendance', attendanceRoutes.default);
} catch (e) { console.error('attendance failed:', e.message); }

try {
  const paymentsRoutes = await import('../backend/src/routes/payments.js');
  app.use('/api/payments', paymentsRoutes.default);
} catch (e) { console.error('payments failed:', e.message); }

try {
  const adminRoutes = await import('../backend/src/routes/admin.js');
  app.use('/api/admin', adminRoutes.default);
} catch (e) { console.error('admin failed:', e.message); }

try {
  const onboardingRoutes = await import('../backend/src/routes/onboarding.js');
  app.use('/api/onboarding', onboardingRoutes.default);
} catch (e) { console.error('onboarding failed:', e.message); }

try {
  const financesRoutes = await import('../backend/src/routes/finances.js');
  app.use('/api/finances', financesRoutes.default);
} catch (e) { console.error('finances failed:', e.message); }

try {
  const birthdaysRoutes = await import('../backend/src/routes/birthdays.js');
  app.use('/api/birthdays', birthdaysRoutes.default);
} catch (e) { console.error('birthdays failed:', e.message); }

try {
  const calendarRoutes = await import('../backend/src/routes/calendar.js');
  app.use('/api/calendar', calendarRoutes.default);
} catch (e) { console.error('calendar failed:', e.message); }

try {
  const subscriptionsRoutes = await import('../backend/src/routes/subscriptions.js');
  app.use('/api/subscriptions', subscriptionsRoutes.default);
} catch (e) { console.error('subscriptions failed:', e.message); }

try {
  const scheduleStatsRoutes = await import('../backend/src/routes/scheduleStats.js');
  app.use('/api/schedule-stats', scheduleStatsRoutes.default);
} catch (e) { console.error('scheduleStats failed:', e.message); }

try {
  const legajoRoutes = await import('../backend/src/routes/legajo.js');
  app.use('/api/legajo', legajoRoutes.default);
} catch (e) { console.error('legajo failed:', e.message); }

try {
  const configRoutes = await import('../backend/src/routes/config.js');
  app.use('/api/config', configRoutes.default);
} catch (e) { console.error('config failed:', e.message); }

export default app;
