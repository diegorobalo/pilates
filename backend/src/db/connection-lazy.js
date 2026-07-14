/**
 * Lazy-loaded database connection for Vercel serverless
 * Initializes on first use, not on import
 */

let runAsync, getAsync, allAsync, db;
let initialized = false;

async function initialize() {
  if (initialized) return;
  initialized = true;

  const DATABASE_URL = process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || '';
  const isRemote = DATABASE_URL.startsWith('libsql://') || DATABASE_URL.startsWith('http://') || DATABASE_URL.startsWith('https://');

  if (!isRemote) {
    throw new Error('Only Turso/remote is supported');
  }

  try {
    const { createClient } = await import('@libsql/client');
    let url = DATABASE_URL;
    let authToken = process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN;
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
      return { id: res.lastInsertRowid != null ? Number(res.lastInsertRowid) : undefined, changes: res.rowsAffected };
    };

    getAsync = async (sql, params = []) => {
      const res = await execute(sql, params);
      return res.rows[0];
    };

    allAsync = async (sql, params = []) => {
      const res = await execute(sql, params);
      return res.rows;
    };

    db = {
      run(sql, params, cb) {
        if (typeof params === 'function') { cb = params; params = []; }
        execute(sql, params).then((res) => {
          if (cb) cb.call({ lastID: res.lastInsertRowid, changes: res.rowsAffected }, null);
        }).catch((err) => {
          if (cb) cb.call({}, err);
        });
      },
      get(sql, params, cb) {
        if (typeof params === 'function') { cb = params; params = []; }
        execute(sql, params).then((res) => {
          if (cb) cb.call({}, null, res.rows[0]);
        }).catch((err) => {
          if (cb) cb.call({}, err);
        });
      },
      all(sql, params, cb) {
        if (typeof params === 'function') { cb = params; params = []; }
        execute(sql, params).then((res) => {
          if (cb) cb.call({}, null, res.rows);
        }).catch((err) => {
          if (cb) cb.call({}, err);
        });
      }
    };

    console.log('✅ Database initialized');
  } catch (err) {
    console.error('❌ Database init failed:', err.message);
    throw err;
  }
}

export async function ensureInitialized() {
  await initialize();
}

export { runAsync, getAsync, allAsync, db };
