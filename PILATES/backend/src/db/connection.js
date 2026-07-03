import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Database connection layer.
 *
 * Supports two backends behind a single interface:
 *  - Turso / libSQL  (when DATABASE_URL starts with libsql:// or http(s)://)
 *  - Local SQLite     (dev fallback, uses a local pilates.db file)
 *
 * Exposes:
 *  - runAsync(sql, params) -> { id, changes }
 *  - getAsync(sql, params) -> single row | undefined
 *  - allAsync(sql, params) -> row[]
 *  - default export `db` with callback-style .run/.get/.all (used by authController)
 */

const DATABASE_URL = process.env.DATABASE_URL || '';
const isRemote =
  DATABASE_URL.startsWith('libsql://') ||
  DATABASE_URL.startsWith('http://') ||
  DATABASE_URL.startsWith('https://');

let runAsync;
let getAsync;
let allAsync;
let db;

if (isRemote) {
  // ---- Turso / libSQL ----
  const { createClient } = await import('@libsql/client');

  // Allow the auth token to travel either inside the URL (?authToken=...)
  // or as a separate env var.
  let url = DATABASE_URL;
  let authToken = process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN || undefined;
  const qIndex = DATABASE_URL.indexOf('?');
  if (qIndex !== -1) {
    url = DATABASE_URL.slice(0, qIndex);
    const sp = new URLSearchParams(DATABASE_URL.slice(qIndex + 1));
    if (sp.get('authToken')) authToken = sp.get('authToken');
  }

  const client = createClient({ url, authToken });

  const execute = (sql, params = []) => client.execute({ sql, args: params });

  runAsync = async (sql, params = []) => {
    const res = await execute(sql, params);
    return {
      id: res.lastInsertRowid != null ? Number(res.lastInsertRowid) : undefined,
      changes: res.rowsAffected
    };
  };

  getAsync = async (sql, params = []) => {
    const res = await execute(sql, params);
    return res.rows[0];
  };

  allAsync = async (sql, params = []) => {
    const res = await execute(sql, params);
    return res.rows;
  };

  // Callback-style shim so existing code (authController) keeps working.
  db = {
    run(sql, params, cb) {
      if (typeof params === 'function') { cb = params; params = []; }
      execute(sql, params)
        .then((res) => {
          if (cb) {
            cb.call(
              {
                lastID: res.lastInsertRowid != null ? Number(res.lastInsertRowid) : undefined,
                changes: res.rowsAffected
              },
              null
            );
          }
        })
        .catch((err) => { if (cb) cb(err); });
    },
    get(sql, params, cb) {
      if (typeof params === 'function') { cb = params; params = []; }
      execute(sql, params)
        .then((res) => { if (cb) cb(null, res.rows[0]); })
        .catch((err) => { if (cb) cb(err); });
    },
    all(sql, params, cb) {
      if (typeof params === 'function') { cb = params; params = []; }
      execute(sql, params)
        .then((res) => { if (cb) cb(null, res.rows); })
        .catch((err) => { if (cb) cb(err); });
    }
  };

  console.log('✅ Connected to Turso (libSQL) database');
} else {
  // ---- Local SQLite (dev fallback) ----
  const sqlite3 = (await import('sqlite3')).default;
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dbPath = path.join(__dirname, '..', '..', '..', 'pilates.db');

  db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Error opening database:', err.message);
      process.exit(1);
    }
  });

  db.run('PRAGMA foreign_keys = ON');

  runAsync = (sql, params = []) =>
    new Promise((resolve, reject) => {
      db.run(sql, params, function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, changes: this.changes });
      });
    });

  getAsync = (sql, params = []) =>
    new Promise((resolve, reject) => {
      db.get(sql, params, (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });

  allAsync = (sql, params = []) =>
    new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });

  console.log('✅ Connected to local SQLite database');
}

export { runAsync, getAsync, allAsync };
export default db;
