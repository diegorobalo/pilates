import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Basic endpoints that don't require backend imports
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/auth/access', (req, res) => {
  res.json({ error: 'Not implemented', status: 501 });
});

app.post('/api/admin/login', (req, res) => {
  res.json({ error: 'Not implemented', status: 501 });
});

// Try loading real routes
(async () => {
  try {
    const authRoutes = await import('../backend/src/routes/auth.js');
    app.use('/api/auth', authRoutes.default);
    console.log('✅ auth loaded');
  } catch (e) {
    console.error('❌ auth failed:', e.message);
  }

  try {
    const adminRoutes = await import('../backend/src/routes/admin.js');
    app.use('/api/admin', adminRoutes.default);
    console.log('✅ admin loaded');
  } catch (e) {
    console.error('❌ admin failed:', e.message);
  }

  try {
    const usersRoutes = await import('../backend/src/routes/users.js');
    app.use('/api/users', usersRoutes.default);
    console.log('✅ users loaded');
  } catch (e) {
    console.error('❌ users failed:', e.message);
  }

  try {
    const schedulesRoutes = await import('../backend/src/routes/schedules.js');
    app.use('/api/schedules', schedulesRoutes.default);
    console.log('✅ schedules loaded');
  } catch (e) {
    console.error('❌ schedules failed:', e.message);
  }

  try {
    const attendanceRoutes = await import('../backend/src/routes/attendance.js');
    app.use('/api/attendance', attendanceRoutes.default);
    console.log('✅ attendance loaded');
  } catch (e) {
    console.error('❌ attendance failed:', e.message);
  }

  try {
    const paymentsRoutes = await import('../backend/src/routes/payments.js');
    app.use('/api/payments', paymentsRoutes.default);
    console.log('✅ payments loaded');
  } catch (e) {
    console.error('❌ payments failed:', e.message);
  }

  try {
    const financesRoutes = await import('../backend/src/routes/finances.js');
    app.use('/api/finances', financesRoutes.default);
    console.log('✅ finances loaded');
  } catch (e) {
    console.error('❌ finances failed:', e.message);
  }
})();

export default app;
