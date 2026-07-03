-- Migration: Add extended user fields and payment tables
-- Date: 2026-07-03

-- Add new columns to users table
ALTER TABLE users ADD COLUMN apellido TEXT;
ALTER TABLE users ADD COLUMN fecha_nacimiento DATE;
ALTER TABLE users ADD COLUMN direccion TEXT;
ALTER TABLE users ADD COLUMN ciudad TEXT;
ALTER TABLE users ADD COLUMN pin_ingreso TEXT;
ALTER TABLE users ADD COLUMN datos_completados BOOLEAN DEFAULT 0;

-- Update estado CHECK constraint (add SUSPENDIDA)
-- Note: SQLite doesn't support direct constraint changes, will be handled in schema

-- Add moneda column to pagos
ALTER TABLE pagos ADD COLUMN moneda TEXT DEFAULT 'ARS';

-- Create pagos_profesores table
CREATE TABLE IF NOT EXISTS pagos_profesores (
  id TEXT PRIMARY KEY,
  profesora_id TEXT NOT NULL,
  monto DECIMAL(10, 2) NOT NULL CHECK (monto > 0 AND monto <= 999999.99),
  moneda TEXT NOT NULL DEFAULT 'ARS',
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

-- Create gastos table
CREATE TABLE IF NOT EXISTS gastos (
  id TEXT PRIMARY KEY,
  descripcion TEXT NOT NULL,
  monto DECIMAL(10, 2) NOT NULL CHECK (monto > 0 AND monto <= 999999.99),
  moneda TEXT NOT NULL DEFAULT 'ARS',
  categoria TEXT NOT NULL CHECK (categoria IN ('MANTENIMIENTO', 'SUPPLIES', 'SERVICIOS', 'OTRO')),
  fecha_gasto DATE NOT NULL,
  registrada_por TEXT NOT NULL,
  notas TEXT,
  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (registrada_por) REFERENCES users(id) ON DELETE RESTRICT
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_pagos_profesores_profesora_id ON pagos_profesores(profesora_id);
CREATE INDEX IF NOT EXISTS idx_pagos_profesores_fecha_pago ON pagos_profesores(fecha_pago);
CREATE INDEX IF NOT EXISTS idx_pagos_profesores_mes_referencia ON pagos_profesores(mes_referencia);
CREATE INDEX IF NOT EXISTS idx_gastos_categoria ON gastos(categoria);
CREATE INDEX IF NOT EXISTS idx_gastos_fecha_gasto ON gastos(fecha_gasto);
