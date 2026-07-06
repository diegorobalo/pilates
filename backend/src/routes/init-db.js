import express from 'express';
import { runAsync } from '../db/connection-lazy.js';

const router = express.Router();

router.post('/init-tables', async (req, res) => {
  try {
    // Create admin_config table if not exists
    await runAsync(`
      CREATE TABLE IF NOT EXISTS admin_config (
        id INTEGER PRIMARY KEY,
        username TEXT NOT NULL,
        password_hash TEXT NOT NULL,
        email TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create default admin if not exists
    const result = await runAsync(
      'INSERT OR IGNORE INTO admin_config (id, username, password_hash) VALUES (?, ?, ?)',
      [1, 'admin', '$2a$10$C9nSTt3FeKL4H9.u1zk9ZOOVlQqLYI0Rf5aKhw0cFP6q8jPR0NYQ6']
    );

    res.json({
      success: true,
      message: 'Database initialized',
      adminCreated: result.changes > 0
    });
  } catch (err) {
    console.error('Init error:', err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
