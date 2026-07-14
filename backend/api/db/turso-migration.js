/**
 * Turso Database Migration Setup
 *
 * This file contains instructions for setting up and migrating the PILATES database
 * from SQLite to Turso (SQLite Cloud).
 *
 * IMPORTANT: Do not run this file. This is a documentation file with setup instructions.
 */

/**
 * STEP 1: CREATE TURSO ACCOUNT AND DATABASE
 *
 * Prerequisites:
 * - Install Turso CLI: https://docs.turso.tech/cli/installation
 * - Create a Turso account: https://turso.tech
 *
 * Commands:
 * ```bash
 * # Login to Turso
 * turso auth login
 *
 * # Create a new database
 * turso db create pilates-db
 *
 * # Get the database connection URL
 * turso db show pilates-db --http-only
 *
 * # Create an auth token
 * turso db tokens create pilates-db
 * ```
 *
 * This will give you:
 * - DATABASE_URL: libsql://YOUR_ACCOUNT.turso.io/pilates-db?authToken=YOUR_TOKEN
 * - Store this securely in your .env.production
 */

/**
 * STEP 2: DATABASE SCHEMA
 *
 * The following SQL schema should be executed in your Turso database.
 * Copy and paste this into the Turso dashboard SQL editor or use the CLI.
 */

const SCHEMA_SQL = `
-- Users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL,
  telefono TEXT UNIQUE NOT NULL,
  dni TEXT UNIQUE NOT NULL,
  email TEXT,
  tipo TEXT CHECK (tipo IN ('ALUMNA', 'DUEÑA', 'INSTRUCTOR')) DEFAULT 'ALUMNA',
  datos_emergencia TEXT,
  alergias TEXT,
  restricciones_medicas TEXT,
  activo BOOLEAN DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Horarios (Class Schedules) table
CREATE TABLE IF NOT EXISTS horarios (
  id TEXT PRIMARY KEY,
  dia_semana TEXT NOT NULL,
  hora TEXT NOT NULL,
  duracion_minutos INTEGER DEFAULT 60,
  capacidad INTEGER DEFAULT 6,
  instructor_id TEXT,
  activo BOOLEAN DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (instructor_id) REFERENCES users(id)
);

-- Planes semanales (Weekly Plans) table
CREATE TABLE IF NOT EXISTS planes_semanales (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  dia_semana TEXT NOT NULL,
  hora TEXT NOT NULL,
  activo BOOLEAN DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (alumna_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE(alumna_id, dia_semana, hora)
);

-- Reservas (Reservations) table
CREATE TABLE IF NOT EXISTS reservas (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  horario_id TEXT NOT NULL,
  fecha DATE NOT NULL,
  estado TEXT CHECK (estado IN ('PENDIENTE', 'CONFIRMADA', 'RECHAZADA', 'CANCELADA')) DEFAULT 'PENDIENTE',
  motivo_rechazo TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (alumna_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (horario_id) REFERENCES horarios(id),
  UNIQUE(alumna_id, horario_id, fecha)
);

-- Asistencia (Attendance) table
CREATE TABLE IF NOT EXISTS asistencia (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  horario_id TEXT NOT NULL,
  fecha DATE NOT NULL,
  presente BOOLEAN NOT NULL,
  observaciones TEXT,
  marcado_por TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (alumna_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (horario_id) REFERENCES horarios(id),
  FOREIGN KEY (marcado_por) REFERENCES users(id)
);

-- Pagos (Payments) table
CREATE TABLE IF NOT EXISTS pagos (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  monto DECIMAL(10, 2) NOT NULL,
  fecha_pago DATE NOT NULL,
  mes_referencia TEXT NOT NULL,
  metodo_pago TEXT,
  comprobante_url TEXT,
  estado TEXT CHECK (estado IN ('PENDIENTE', 'PAGADO', 'RECHAZADO')) DEFAULT 'PENDIENTE',
  notas TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (alumna_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_reservas_alumna ON reservas(alumna_id);
CREATE INDEX IF NOT EXISTS idx_reservas_horario ON reservas(horario_id);
CREATE INDEX IF NOT EXISTS idx_reservas_fecha ON reservas(fecha);
CREATE INDEX IF NOT EXISTS idx_asistencia_alumna ON asistencia(alumna_id);
CREATE INDEX IF NOT EXISTS idx_asistencia_fecha ON asistencia(fecha);
CREATE INDEX IF NOT EXISTS idx_pagos_alumna ON pagos(alumna_id);
CREATE INDEX IF NOT EXISTS idx_pagos_mes ON pagos(mes_referencia);
CREATE INDEX IF NOT EXISTS idx_planes_alumna ON planes_semanales(alumna_id);
`;

/**
 * STEP 3: EXECUTE SCHEMA IN TURSO
 *
 * Option A: Using Turso CLI
 * ```bash
 * # Save the schema to a file
 * cat > schema.sql << 'EOF'
 * [PASTE THE SQL ABOVE]
 * EOF
 *
 * # Execute the schema
 * turso db shell pilates-db < schema.sql
 * ```
 *
 * Option B: Using Turso Web Dashboard
 * 1. Go to https://turso.tech/app
 * 2. Select your pilates-db database
 * 3. Click "SQL Editor"
 * 4. Paste the schema above and execute
 */

/**
 * STEP 4: MIGRATE DATA FROM LOCAL SQLite (IF NEEDED)
 *
 * If you have existing data in a local SQLite database:
 *
 * ```bash
 * # Export from local SQLite
 * sqlite3 pilates.db ".dump" > dump.sql
 *
 * # Import to Turso (this is complex; recommend using a migration tool)
 * # Or use a Node.js migration script to read local data and insert to Turso
 * ```
 */

/**
 * STEP 5: UPDATE CONNECTION STRING IN PRODUCTION
 *
 * Update your .env.production with the Turso connection:
 *
 * DATABASE_URL=libsql://YOUR_ACCOUNT.turso.io/pilates-db?authToken=YOUR_TOKEN
 *
 * The format is:
 * - libsql://       : Turso protocol
 * - YOUR_ACCOUNT    : Your Turso account slug (from CLI output)
 * - pilates-db      : Database name
 * - authToken=...   : Your authentication token
 */

/**
 * STEP 6: VERIFY CONNECTION
 *
 * Test the connection using curl:
 *
 * ```bash
 * curl -X POST https://YOUR_ACCOUNT.turso.io/v1/query \
 *   -H "Authorization: Bearer YOUR_TOKEN" \
 *   -H "Content-Type: application/json" \
 *   -d '{"statements": ["SELECT name FROM sqlite_master WHERE type='\''table'\'';"]}'
 * ```
 */

/**
 * STEP 7: BACKUP STRATEGY
 *
 * Turso provides automatic daily backups. For additional safety:
 *
 * ```bash
 * # List backups
 * turso db list backups pilates-db
 *
 * # Create a manual backup
 * turso db dump pilates-db > pilates-backup.sql
 *
 * # Restore from backup
 * # Contact Turso support for restoration
 * ```
 */

/**
 * STEP 8: PERFORMANCE TUNING
 *
 * - Ensure indexes are created for frequently queried columns
 * - Use connection pooling if accessing from multiple servers
 * - Monitor query performance in Turso dashboard
 * - Consider read replicas for high-traffic scenarios
 */

/**
 * TROUBLESHOOTING
 *
 * Connection Timeout:
 * - Check your Turso auth token is valid
 * - Verify network connectivity
 * - Check that your IP is not blocked
 *
 * Authentication Failed:
 * - Regenerate auth token: turso db tokens create pilates-db
 * - Verify token is correct in .env.production
 *
 * Schema Not Found:
 * - Run the schema SQL again
 * - Verify you're executing against the correct database
 */

export const TURSO_SETUP_GUIDE = {
  step1: 'Create Turso account and database',
  step2: 'Execute schema SQL',
  step3: 'Set DATABASE_URL in .env.production',
  step4: 'Test connection',
  step5: 'Configure backups'
};
