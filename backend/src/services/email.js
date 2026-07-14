import nodemailer from 'nodemailer';

/**
 * Lazily create a Gmail transporter from env vars.
 * Requires GMAIL_USER and GMAIL_APP_PASSWORD (a Gmail "app password").
 * Returns null when not configured, so callers can degrade gracefully.
 */
let transporter = null;
function getTransporter() {
  if (transporter) return transporter;
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });
  return transporter;
}

/**
 * Send an email. If no provider is configured, logs and returns { skipped: true }
 * so flows keep working in development / before Gmail is set up.
 */
export async function sendEmail({ to, subject, text, html }) {
  const t = getTransporter();
  if (!t) {
    console.log(`[email] Not configured (GMAIL_USER/GMAIL_APP_PASSWORD). Would send to ${to} | subject: ${subject}`);
    if (text) console.log(`[email] body: ${text}`);
    return { skipped: true };
  }
  const from = process.env.GMAIL_USER;
  return t.sendMail({ from: `PILATES <${from}>`, to, subject, text, html });
}

export function isEmailConfigured() {
  return Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
}
