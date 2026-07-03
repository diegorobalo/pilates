-- PILATES App Database Schema
-- SQLite database for class reservation and management system

-- Users table
-- Stores information about all system users (students, owners, admins)
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL,
  apellido TEXT,
  telefono TEXT UNIQUE NOT NULL,
  dni TEXT UNIQUE,
  tipo TEXT NOT NULL CHECK (tipo IN ('ALUMNA', 'PROFESORA', 'DUEÑA', 'ADMIN')),
  estado TEXT NOT NULL DEFAULT 'ACTIVA' CHECK (estado IN ('ACTIVA', 'INACTIVA', 'PENDIENTE', 'SUSPENDIDA')),
  fecha_nacimiento DATE,
  direccion TEXT,
  ciudad TEXT,
  pin_ingreso TEXT,
  datos_emergencia_nombre TEXT,
  datos_emergencia_telefono TEXT,
  datos_emergencia_relacion TEXT,
  alergias TEXT,
  restricciones_medicas TEXT,
  datos_completados BOOLEAN DEFAULT 0,
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
-- Stores payment records for students (in ARS)
CREATE TABLE IF NOT EXISTS pagos (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  monto DECIMAL(10, 2) NOT NULL CHECK (monto > 0 AND monto <= 999999.99),
  moneda TEXT NOT NULL DEFAULT 'ARS' CHECK (moneda IN ('ARS')),
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

-- Pagos Profesores (Teacher Payments) table
-- Stores payment records for teachers/instructors (in ARS)
CREATE TABLE IF NOT EXISTS pagos_profesores (
  id TEXT PRIMARY KEY,
  profesora_id TEXT NOT NULL,
  monto DECIMAL(10, 2) NOT NULL CHECK (monto > 0 AND monto <= 999999.99),
  moneda TEXT NOT NULL DEFAULT 'ARS' CHECK (moneda IN ('ARS')),
  fecha_pago DATE NOT NULL,
  mes_referencia TEXT NOT NULL,
  metodo TEXT NOT NULL CHECK (metodo IN ('EFECTIVO', 'TRANSFERENCIA', 'OTRO')),
  registrada_por TEXT NOT NULL,
  notas TEXT,
  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (profesora_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (registrada_por) REFERENCES users(id) ON DELETE RESTRICT
);

-- Gastos (Expenses) table
-- Stores various business expenses (in ARS)
CREATE TABLE IF NOT EXISTS gastos (
  id TEXT PRIMARY KEY,
  descripcion TEXT NOT NULL,
  monto DECIMAL(10, 2) NOT NULL CHECK (monto > 0 AND monto <= 999999.99),
  moneda TEXT NOT NULL DEFAULT 'ARS' CHECK (moneda IN ('ARS')),
  categoria TEXT NOT NULL CHECK (categoria IN ('MANTENIMIENTO', 'SUPPLIES', 'SERVICIOS', 'OTRO')),
  fecha_gasto DATE NOT NULL,
  registrada_por TEXT NOT NULL,
  notas TEXT,
  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (registrada_por) REFERENCES users(id) ON DELETE RESTRICT
);

-- Admin master credentials (single row, id = 1). Default seeded as admin/admin.
CREATE TABLE IF NOT EXISTS admin_config (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  username TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  email TEXT,
  reset_token TEXT,
  reset_expires DATETIME,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
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

-- Calendar Exceptions (Feriados, Days Off, Special Days)
CREATE TABLE IF NOT EXISTS calendar_excepciones (
  id TEXT PRIMARY KEY,
  fecha DATE NOT NULL UNIQUE,
  tipo TEXT NOT NULL CHECK (tipo IN ('FERIADO', 'CERRADO', 'ESPECIAL')),
  descripcion TEXT NOT NULL,
  afecta_suscripciones BOOLEAN DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Subscriptions (recurring enrollment: "every Monday 10am")
CREATE TABLE IF NOT EXISTS suscripciones_alumnos (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  dia_semana INTEGER NOT NULL CHECK (dia_semana >= 0 AND dia_semana <= 6),
  hora TEXT NOT NULL,
  activa BOOLEAN DEFAULT 1,
  cama_preferida INTEGER CHECK (cama_preferida IS NULL OR (cama_preferida >= 1 AND cama_preferida <= 6)),
  fecha_inicio DATE DEFAULT CURRENT_DATE,
  fecha_fin DATE,
  notas TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (alumna_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE (alumna_id, dia_semana, hora)
);

-- Auto-generated Reservations Metadata (track which suscripcion generated which reservation)
CREATE TABLE IF NOT EXISTS reserva_suscripcion (
  reserva_id TEXT PRIMARY KEY,
  suscripcion_id TEXT NOT NULL,
  FOREIGN KEY (reserva_id) REFERENCES reservas(id) ON DELETE CASCADE,
  FOREIGN KEY (suscripcion_id) REFERENCES suscripciones_alumnos(id) ON DELETE CASCADE
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

CREATE INDEX IF NOT EXISTS idx_pagos_profesores_profesora_id ON pagos_profesores(profesora_id);
CREATE INDEX IF NOT EXISTS idx_pagos_profesores_fecha_pago ON pagos_profesores(fecha_pago);
CREATE INDEX IF NOT EXISTS idx_pagos_profesores_mes_referencia ON pagos_profesores(mes_referencia);

CREATE INDEX IF NOT EXISTS idx_gastos_categoria ON gastos(categoria);
CREATE INDEX IF NOT EXISTS idx_gastos_fecha_gasto ON gastos(fecha_gasto);

CREATE INDEX IF NOT EXISTS idx_calendar_excepciones_fecha ON calendar_excepciones(fecha);
CREATE INDEX IF NOT EXISTS idx_calendar_excepciones_tipo ON calendar_excepciones(tipo);

CREATE INDEX IF NOT EXISTS idx_suscripciones_alumna_id ON suscripciones_alumnos(alumna_id);
CREATE INDEX IF NOT EXISTS idx_suscripciones_activa ON suscripciones_alumnos(activa);
CREATE INDEX IF NOT EXISTS idx_suscripciones_dia_semana ON suscripciones_alumnos(dia_semana);

CREATE INDEX IF NOT EXISTS idx_reserva_suscripcion_suscripcion_id ON reserva_suscripcion(suscripcion_id);
