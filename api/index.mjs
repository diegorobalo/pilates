import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Temporary: Return mock responses for testing
app.post('/api/auth/access', (req, res) => {
  res.json({ success: false, message: 'Admin auth not yet implemented' });
});

export default app;
