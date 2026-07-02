import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

const app = express();

// Validate required environment variables
if (!process.env.JWT_SECRET || process.env.JWT_SECRET === 'your-secret-key-change-in-production') {
  console.error('ERROR: JWT_SECRET is not set or is using the default insecure value. Please set a secure JWT_SECRET in your .env file.');
  process.exit(1);
}

// Validate and parse PORT
const PORT_ENV = process.env.PORT || '3000';
const PORT = parseInt(PORT_ENV, 10);

if (isNaN(PORT) || PORT < 1 || PORT > 65535) {
  console.error(`ERROR: Invalid PORT value "${PORT_ENV}". PORT must be a number between 1 and 65535.`);
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('combined')); // Request logging

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
