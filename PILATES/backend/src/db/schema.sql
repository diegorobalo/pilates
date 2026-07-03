-- PILATES App Database Schema
-- SQLite database for class reservation and management system

-- Users table
-- Stores information about all system users (students, owners, admins)
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL,
  telefono TEXT UNIQUE NOT NULL,
  dni TEXT UNIQUE,
  tipo TEXT NOT NULL CHECK (tipo IN ('ALUMNA', 'DUEÑA', 'ADMIN')),
  estado TEXT NOT NULL DEFAULT 'ACTIVA' CHECK (estado IN ('ACTIVA', 'INACTIVA')),
  datos_emergencia_nombre TEXT,
  datos_emergencia_telefono TEXT,
  datos_emergencia_relacion TEXT,
  alergias TEXT,
  restricciones_medicas TEXT,
  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Planes Semanales (Weekly Plans) table
-- Stores recurring weekly class plans for each student
CREATE TABLE IF NOT EXISTS planes_semanales (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  dia_semana INTEGER NOT NULL CHECK (dia_semana >= 0 AND dia_semana <= 6),
  hora TEXT NOT NULL,
  activo BOOLEAN DEFAULT 1,
  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (alumna_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE (alumna_id, dia_semana, hora)
);

-- Horarios Clases (Class Schedule) table
-- Stores specific class sessions with date, time, capacity, and status
CREATE TABLE IF NOT EXISTS horarios_clases (
  id TEXT PRIMARY KEY,
  fecha DATE NOT NULL,
  hora TEXT NOT NULL,
  capacidad INTEGER NOT NULL DEFAULT 6 CHECK (capacidad = 6),
  estado TEXT NOT NULL DEFAULT 'ABIERTA' CHECK (estado IN ('ABIERTA', 'CERRADA', 'CANCELADA')),
  creada_por TEXT NOT NULL,
  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (creada_por) REFERENCES users(id) ON DELETE RESTRICT,
  UNIQUE (fecha, hora)
);

-- Reservas (Reservations) table
-- Stores class reservations for students with status tracking
CREATE TABLE IF NOT EXISTS reservas (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  horario_id TEXT NOT NULL,
  cama_numero INTEGER NOT NULL CHECK (cama_numero >= 1 AND cama_numero <= 6),
  estado TEXT NOT NULL DEFAULT 'PENDIENTE' CHECK (estado IN ('PENDIENTE', 'CONFIRMADA', 'RECHAZADA', 'CANCELADA')),
  fecha_solicitud DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_confirmacion DATETIME,
  confirmada_por TEXT,
  razon_rechazo TEXT,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (alumna_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (horario_id) REFERENCES horarios_clases(id) ON DELETE CASCADE,
  FOREIGN KEY (confirmada_por) REFERENCES users(id) ON DELETE RESTRICT,
  UNIQUE (horario_id, cama_numero)
);

-- Asistencia (Attendance) table
-- Tracks attendance for each student in each class
CREATE TABLE IF NOT EXISTS asistencia (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  horario_id TEXT NOT NULL,
  presente BOOLEAN NOT NULL DEFAULT 0,
  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  registrada_por TEXT NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (alumna_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (horario_id) REFERENCES horarios_clases(id) ON DELETE CASCADE,
  FOREIGN KEY (registrada_por) REFERENCES users(id) ON DELETE RESTRICT,
  UNIQUE (alumna_id, horario_id)
);

-- Pagos (Payments) table
-- Stores payment records for students
CREATE TABLE IF NOT EXISTS pagos (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  monto DECIMAL(10, 2) NOT NULL CHECK (monto > 0 AND monto <= 999999.99),
  fecha_pago DATE NOT NULL,
  mes_referencia TEXT NOT NULL,
  metodo TEXT NOT NULL CHECK (metodo IN ('EFECTIVO', 'TRANSFERENCIA', 'OTRO')),
  registrada_por TEXT NOT NULL,
  notas TEXT,
  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (alumna_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (registrada_por) REFERENCES users(id) ON DELETE RESTRICT
);

-- Verification Codes table (for phone verification)
CREATE TABLE IF NOT EXISTS verification_codes (
  id TEXT PRIMARY KEY,
  telefono TEXT NOT NULL,
  code TEXT NOT NULL,
  attempts INTEGER NOT NULL DEFAULT 3,
  expires_at DATETIME NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance optimization
CREATE INDEX IF NOT EXISTS idx_users_tipo ON users(tipo);
CREATE INDEX IF NOT EXISTS idx_users_estado ON users(estado);
CREATE INDEX IF NOT EXISTS idx_users_telefono ON users(telefono);

CREATE INDEX IF NOT EXISTS idx_verification_codes_telefono ON verification_codes(telefono);
CREATE INDEX IF NOT EXISTS idx_verification_codes_expires_at ON verification_codes(expires_at);

CREATE INDEX IF NOT EXISTS idx_planes_semanales_alumna_id ON planes_semanales(alumna_id);
CREATE INDEX IF NOT EXISTS idx_planes_semanales_dia_semana ON planes_semanales(dia_semana);

CREATE INDEX IF NOT EXISTS idx_horarios_clases_fecha ON horarios_clases(fecha);
CREATE INDEX IF NOT EXISTS idx_horarios_clases_hora ON horarios_clases(hora);
CREATE INDEX IF NOT EXISTS idx_horarios_clases_estado ON horarios_clases(estado);
CREATE INDEX IF NOT EXISTS idx_horarios_clases_creada_por ON horarios_clases(creada_por);

CREATE INDEX IF NOT EXISTS idx_reservas_alumna_id ON reservas(alumna_id);
CREATE INDEX IF NOT EXISTS idx_reservas_horario_id ON reservas(horario_id);
CREATE INDEX IF NOT EXISTS idx_reservas_estado ON reservas(estado);
CREATE INDEX IF NOT EXISTS idx_reservas_fecha_solicitud ON reservas(fecha_solicitud);

CREATE INDEX IF NOT EXISTS idx_asistencia_alumna_id ON asistencia(alumna_id);
CREATE INDEX IF NOT EXISTS idx_asistencia_horario_id ON asistencia(horario_id);
CREATE INDEX IF NOT EXISTS idx_asistencia_fecha_registro ON asistencia(fecha_registro);

CREATE INDEX IF NOT EXISTS idx_pagos_alumna_id ON pagos(alumna_id);
CREATE INDEX IF NOT EXISTS idx_pagos_fecha_pago ON pagos(fecha_pago);
CREATE INDEX IF NOT EXISTS idx_pagos_mes_referencia ON pagos(mes_referencia);
