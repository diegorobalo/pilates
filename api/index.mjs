import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from '../backend/src/routes/auth.js';
import usersRoutes from '../backend/src/routes/users.js';
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
  console.log('✅ Health check - API responding');
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

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

export default app;
