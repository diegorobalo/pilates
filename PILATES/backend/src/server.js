import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';

dotenv.config();

// Validate required environment variables
const requiredEnvVars = ['JWT_SECRET'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ FATAL: Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
  // Prevent using insecure default value
  if (process.env[envVar] === 'your-secure-secret-key-here' || process.env[envVar] === 'your-secret-key-change-in-production') {
    console.error(`❌ FATAL: JWT_SECRET is using insecure placeholder value. Set a real secret in .env`);
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

// Middleware
app.use(cors());
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

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`📋 NODE_ENV: ${process.env.NODE_ENV || 'development'}`);
});
