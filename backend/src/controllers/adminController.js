import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { runAsync, getAsync } from '../db/connection.js';
import { sendEmail } from '../services/email.js';

const JWT_SECRET = process.env.JWT_SECRET_KEY;
const JWT_EXPIRE = process.env.JWT_EXPIRE || '7d';

/**
 * Get the single admin config row, creating a default admin/admin on first use.
 */
async function getAdminConfig() {
  let row = await getAsync('SELECT * FROM admin_config WHERE id = 1');
  if (!row) {
    const hash = await bcrypt.hash('admin', 10);
    await runAsync(
      'INSERT INTO admin_config (id, username, password_hash, email) VALUES (1, ?, ?, NULL)',
      ['admin', hash]
    );
    row = await getAsync('SELECT * FROM admin_config WHERE id = 1');
  }
  return row;
}

function signAdminTokens(cfg) {
  // userId: 'admin' points to the seeded system user row in the `users` table,
  // so controllers that stamp creada_por / registrada_por (FK to users.id) work.
  const payload = { adminId: 1, userId: 'admin', tipo: 'ADMIN', username: cfg.username };
  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE, issuer: 'pilates-api' });
  const refreshToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '30d', issuer: 'pilates-api' });
  return { accessToken, refreshToken };
}

/**
 * POST /api/admin/login  { username, password }
 */
export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Invalid request', message: 'Usuario y contraseña son requeridos' });
    }
    const cfg = await getAdminConfig();
    const ok = username === cfg.username && (await bcrypt.compare(password, cfg.password_hash));
    if (!ok) {
      return res.status(401).json({ error: 'Invalid credentials', message: 'Usuario o contraseña incorrectos' });
    }
    const { accessToken, refreshToken } = signAdminTokens(cfg);
    res.json({
      message: 'Admin authenticated',
      user: { id: 'admin', nombre: 'Administrador', tipo: 'ADMIN', username: cfg.username },
      accessToken,
      refreshToken
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ error: 'Login failed', message: error.message });
  }
};

/**
 * GET /api/admin/me  (ADMIN)
 */
export const adminMe = async (req, res) => {
  try {
    const cfg = await getAdminConfig();
    res.json({ username: cfg.username, email: cfg.email || null, hasEmail: Boolean(cfg.email) });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load admin', message: error.message });
  }
};

/**
 * PUT /api/admin/credentials  (ADMIN)
 * { currentPassword, newUsername?, newPassword?, email? }
 */
export const updateAdminCredentials = async (req, res) => {
  try {
    const { currentPassword, newUsername, newPassword, email } = req.body;
    const cfg = await getAdminConfig();

    const ok = await bcrypt.compare(currentPassword || '', cfg.password_hash);
    if (!ok) {
      return res.status(401).json({ error: 'Invalid password', message: 'La contraseña actual es incorrecta' });
    }

    const username = (newUsername && newUsername.trim()) || cfg.username;
    const password_hash = newPassword ? await bcrypt.hash(newPassword, 10) : cfg.password_hash;
    const newEmail = email !== undefined ? (email ? email.trim() : null) : cfg.email;

    await runAsync(
      'UPDATE admin_config SET username = ?, password_hash = ?, email = ?, updated_at = CURRENT_TIMESTAMP WHERE id = 1',
      [username, password_hash, newEmail]
    );
    res.json({ message: 'Credenciales actualizadas', username, email: newEmail });
  } catch (error) {
    console.error('Update admin credentials error:', error);
    res.status(500).json({ error: 'Update failed', message: error.message });
  }
};

/**
 * POST /api/admin/forgot-password  { email }
 * Sends a reset code/link if the email matches the configured recovery email.
 */
export const adminForgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const cfg = await getAdminConfig();

    if (cfg.email && email && email.trim().toLowerCase() === cfg.email.toLowerCase()) {
      const rawToken = crypto.randomBytes(24).toString('hex');
      const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
      const expires = new Date(Date.now() + 30 * 60 * 1000).toISOString(); // 30 min
      await runAsync(
        'UPDATE admin_config SET reset_token = ?, reset_expires = ? WHERE id = 1',
        [tokenHash, expires]
      );
      const appUrl = process.env.APP_URL || '';
      const link = appUrl ? `${appUrl}/?adminReset=${rawToken}` : '';
      await sendEmail({
        to: cfg.email,
        subject: 'PILATES · Recuperar contraseña de administrador',
        text:
          `Recibimos un pedido para restablecer la contraseña de administrador.\n\n` +
          `Tu código de recuperación es:\n\n${rawToken}\n\n` +
          (link ? `También podés abrir este enlace: ${link}\n\n` : '') +
          `El código vence en 30 minutos. Si no fuiste vos, ignorá este mensaje.`
      }).catch((err) => console.error('Email send failed:', err.message));
    }

    // Always respond the same way (don't reveal whether the email matched).
    res.json({ message: 'Si el email coincide con el registrado, te enviamos un código de recuperación.' });
  } catch (error) {
    console.error('Admin forgot-password error:', error);
    res.status(500).json({ error: 'Request failed', message: error.message });
  }
};

/**
 * POST /api/admin/reset-password  { token, newPassword }
 */
export const adminResetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) {
      return res.status(400).json({ error: 'Invalid request', message: 'Código y nueva contraseña son requeridos' });
    }
    const cfg = await getAdminConfig();
    const tokenHash = crypto.createHash('sha256').update(token.trim()).digest('hex');

    if (!cfg.reset_token || cfg.reset_token !== tokenHash) {
      return res.status(400).json({ error: 'Invalid token', message: 'Código inválido' });
    }
    if (!cfg.reset_expires || new Date(cfg.reset_expires) < new Date()) {
      return res.status(400).json({ error: 'Expired token', message: 'El código expiró, pedí uno nuevo' });
    }

    const password_hash = await bcrypt.hash(newPassword, 10);
    await runAsync(
      'UPDATE admin_config SET password_hash = ?, reset_token = NULL, reset_expires = NULL, updated_at = CURRENT_TIMESTAMP WHERE id = 1',
      [password_hash]
    );
    res.json({ message: 'Contraseña actualizada. Ya podés ingresar.' });
  } catch (error) {
    console.error('Admin reset-password error:', error);
    res.status(500).json({ error: 'Reset failed', message: error.message });
  }
};
