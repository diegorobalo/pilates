require('dotenv/config');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/auth/access', (req, res) => {
  res.json({ success: false, message: 'Testing' });
});

module.exports = app;
