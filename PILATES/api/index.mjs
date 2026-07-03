import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import authRoutes from '../backend/src/routes/auth.js';
import usersRoutes from '../backend/src/routes/users.js';
import schedulesRoutes from '../backend/src/routes/schedules.js';
import reservationsRoutes from '../backend/src/routes/reservations.js';
import attendanceRoutes from '../backend/src/routes/attendance.js';
import paymentsRoutes from '../backend/src/routes/payments.js';
import adminRoutes from '../backend/src/routes/admin.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes (single serverless function handles all of /api/*)
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/schedules', schedulesRoutes);
app.use('/api/reservations', reservationsRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/admin', adminRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal server error' });
});

export default app;
