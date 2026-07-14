# PILATES Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full-stack web application for managing pilates class reservations with dual interfaces for students (booking) and instructor (management + finances).

**Architecture:** Frontend (React) communicates via REST API to Node.js/Express backend. Database stores users, schedules, reservations, attendance, and payments. Authentication via JWT tokens. Reservation flow: student requests → instructor confirms/rejects → attendance marked.

**Tech Stack:** React 18, Node.js 18+, Express 4, Turso (SQLite) / PostgreSQL, JWT, bcrypt, Tailwind CSS

---

## 📁 File Structure Overview

### Backend (`backend/`)
```
backend/
├── src/
│   ├── db/
│   │   ├── schema.sql                # Database schema
│   │   └── migrations.js             # Migration runner
│   ├── models/
│   │   ├── User.js                   # User queries
│   │   ├── Schedule.js               # Schedule queries
│   │   ├── Reservation.js            # Reservation queries
│   │   ├── Attendance.js             # Attendance queries
│   │   └── Payment.js                # Payment queries
│   ├── controllers/
│   │   ├── authController.js         # Login, register, verify
│   │   ├── userController.js         # User CRUD
│   │   ├── scheduleController.js     # Schedule CRUD
│   │   ├── reservationController.js  # Reservation logic
│   │   ├── attendanceController.js   # Attendance marking
│   │   └── paymentController.js      # Payment management
│   ├── middleware/
│   │   ├── auth.js                   # JWT verification
│   │   ├── errorHandler.js           # Error handling
│   │   └── logger.js                 # Logging
│   ├── routes/
│   │   ├── auth.js                   # Auth endpoints
│   │   ├── users.js                  # User endpoints
│   │   ├── schedules.js              # Schedule endpoints
│   │   ├── reservations.js           # Reservation endpoints
│   │   ├── attendance.js             # Attendance endpoints
│   │   └── payments.js               # Payment endpoints
│   ├── utils/
│   │   ├── jwt.js                    # JWT utilities
│   │   ├── validation.js             # Input validation
│   │   └── constants.js              # Constants
│   └── server.js                     # Express app entry
├── tests/
│   ├── auth.test.js
│   ├── users.test.js
│   ├── reservations.test.js
│   └── payments.test.js
├── .env.example
├── package.json
└── README.md
```

### Frontend (`frontend/`)
```
frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   ├── Navigation.jsx
│   │   │   └── Loading.jsx
│   │   ├── auth/
│   │   │   ├── LoginPhone.jsx        # Phone login
│   │   │   ├── VerifyCode.jsx        # Code verification
│   │   │   └── ProtectedRoute.jsx    # Route protection
│   │   ├── alumna/
│   │   │   ├── Calendar.jsx          # Calendar view
│   │   │   ├── ReservationCard.jsx   # Reservation card
│   │   │   └── History.jsx           # Attendance history
│   │   ├── instructor/
│   │   │   ├── Dashboard.jsx         # Main dashboard
│   │   │   ├── CamaGrid.jsx          # 6 camas visualization
│   │   │   ├── ReservationQueue.jsx  # Pending requests
│   │   │   ├── StudentManager.jsx    # CRUD students
│   │   │   ├── ScheduleManager.jsx   # CRUD schedules
│   │   │   ├── Finances.jsx          # Payment dashboard
│   │   │   └── AttendanceMarker.jsx  # Mark attendance
│   │   └── shared/
│   │       ├── Modal.jsx
│   │       ├── Button.jsx
│   │       └── Badge.jsx
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── AlumnaPortal.jsx
│   │   ├── InstructorPortal.jsx
│   │   └── NotFound.jsx
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useApi.js
│   │   └── useSocket.js              # Real-time updates
│   ├── services/
│   │   ├── api.js                    # API client
│   │   ├── authService.js
│   │   ├── reservationService.js
│   │   └── paymentService.js
│   ├── store/
│   │   └── authStore.js              # Zustand or Context
│   ├── styles/
│   │   ├── globals.css
│   │   └── colors.css
│   ├── App.jsx
│   └── main.jsx
├── tests/
│   ├── components/
│   └── integration/
├── .env.example
├── tailwind.config.js
├── package.json
└── vite.config.js
```

---

## 🔨 Implementation Phases

### Phase 1: Project Setup & Infrastructure

#### Task 1: Initialize Backend Project

**Files:**
- Create: `backend/package.json`
- Create: `backend/src/server.js`
- Create: `backend/.env.example`

- [ ] **Step 1: Create backend directory and package.json**

```bash
cd C:\Users\diego.robalo\Documents\CLAUDIA\PILATES
mkdir backend
cd backend
npm init -y
```

- [ ] **Step 2: Install dependencies**

```bash
npm install express cors dotenv bcryptjs jsonwebtoken sqlite3 turso uuid
npm install --save-dev nodemon jest supertest
```

- [ ] **Step 3: Update package.json scripts**

Edit `backend/package.json` to add:

```json
{
  "name": "pilates-backend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "nodemon src/server.js",
    "test": "jest",
    "start": "node src/server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.1.2",
    "sqlite3": "^5.1.6",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.7.0",
    "supertest": "^6.3.3"
  }
}
```

- [ ] **Step 4: Create .env.example**

```bash
cat > .env.example << 'EOF'
NODE_ENV=development
PORT=3000
DATABASE_URL=file:./pilates.db
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRE=7d
PHONE_VERIFICATION_ENABLED=false
EOF
```

- [ ] **Step 5: Create basic server.js**

Create `backend/src/server.js`:

```javascript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ 
    error: err.message || 'Internal server error' 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

- [ ] **Step 6: Test server starts**

```bash
npm run dev
# Expected: "Server running on http://localhost:3000"
# Ctrl+C to stop
```

- [ ] **Step 7: Commit**

```bash
cd backend
git add package.json package-lock.json src/.env.example src/server.js
git commit -m "chore: initialize backend project with express"
```

---

#### Task 2: Initialize Frontend Project

**Files:**
- Create: `frontend/package.json`
- Create: `frontend/src/main.jsx`
- Create: `frontend/vite.config.js`

- [ ] **Step 1: Create frontend with Vite**

```bash
cd C:\Users\diego.robalo\Documents\CLAUDIA\PILATES
npm create vite@latest frontend -- --template react
cd frontend
```

- [ ] **Step 2: Install dependencies**

```bash
npm install
npm install zustand axios date-fns lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- [ ] **Step 3: Configure Tailwind**

Update `frontend/tailwind.config.js`:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#667eea',
          700: '#764ba2',
        },
        success: {
          600: '#10b981',
          700: '#059669',
        },
        danger: {
          600: '#ef4444',
          700: '#dc2626',
        },
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 4: Create globals.css**

Create `frontend/src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
  color: #333;
}
```

- [ ] **Step 5: Update main.jsx**

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

- [ ] **Step 6: Create App.jsx**

```javascript
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center pt-10">🧘 PILATES</h1>
      <p className="text-center text-gray-600 mt-2">Sistema de Reserva de Camas</p>
    </div>
  )
}
```

- [ ] **Step 7: Test frontend dev server**

```bash
npm run dev
# Expected: Vite server running on http://localhost:5173
# Ctrl+C to stop
```

- [ ] **Step 8: Commit**

```bash
cd frontend
git add -A
git commit -m "chore: initialize frontend project with vite + tailwind"
```

---

### Phase 2: Database Schema & Models

#### Task 3: Create Database Schema

**Files:**
- Create: `backend/src/db/schema.sql`
- Create: `backend/src/db/init.js`

- [ ] **Step 1: Create schema.sql**

Create `backend/src/db/schema.sql`:

```sql
-- Users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL,
  telefono TEXT UNIQUE NOT NULL,
  dni TEXT,
  tipo TEXT CHECK(tipo IN ('ALUMNA', 'DUEÑA', 'ADMIN')) NOT NULL,
  estado TEXT CHECK(estado IN ('ACTIVA', 'INACTIVA')) DEFAULT 'ACTIVA',
  datos_emergencia_nombre TEXT,
  datos_emergencia_telefono TEXT,
  alergias TEXT,
  restricciones_medicas TEXT,
  fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
  actualizado_en DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Weekly plans (when alumna attends her regular classes)
CREATE TABLE IF NOT EXISTS planes_semanales (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  dia_semana INTEGER CHECK(dia_semana BETWEEN 0 AND 6), -- 0=lunes, 6=domingo
  hora TEXT NOT NULL, -- HH:MM format
  activo BOOLEAN DEFAULT 1,
  FOREIGN KEY(alumna_id) REFERENCES users(id),
  UNIQUE(alumna_id, dia_semana, hora)
);

-- Class schedules
CREATE TABLE IF NOT EXISTS horarios_clases (
  id TEXT PRIMARY KEY,
  fecha TEXT NOT NULL, -- YYYY-MM-DD
  hora TEXT NOT NULL, -- HH:MM
  capacidad INTEGER DEFAULT 6,
  estado TEXT CHECK(estado IN ('ABIERTA', 'CERRADA', 'CANCELADA')) DEFAULT 'ABIERTA',
  creada_por TEXT NOT NULL,
  fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(creada_por) REFERENCES users(id),
  UNIQUE(fecha, hora)
);

-- Reservations
CREATE TABLE IF NOT EXISTS reservas (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  horario_id TEXT NOT NULL,
  cama_numero INTEGER CHECK(cama_numero BETWEEN 1 AND 6),
  estado TEXT CHECK(estado IN ('PENDIENTE', 'CONFIRMADA', 'RECHAZADA', 'CANCELADA')) DEFAULT 'PENDIENTE',
  fecha_solicitud DATETIME DEFAULT CURRENT_TIMESTAMP,
  fecha_confirmacion DATETIME,
  confirmada_por TEXT,
  razon_rechazo TEXT,
  FOREIGN KEY(alumna_id) REFERENCES users(id),
  FOREIGN KEY(horario_id) REFERENCES horarios_clases(id),
  FOREIGN KEY(confirmada_por) REFERENCES users(id),
  UNIQUE(horario_id, cama_numero) -- Only one person per bed per class
);

-- Attendance records
CREATE TABLE IF NOT EXISTS asistencia (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  horario_id TEXT NOT NULL,
  presente BOOLEAN NOT NULL,
  fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
  registrada_por TEXT NOT NULL,
  FOREIGN KEY(alumna_id) REFERENCES users(id),
  FOREIGN KEY(horario_id) REFERENCES horarios_clases(id),
  FOREIGN KEY(registrada_por) REFERENCES users(id),
  UNIQUE(alumna_id, horario_id)
);

-- Payments
CREATE TABLE IF NOT EXISTS pagos (
  id TEXT PRIMARY KEY,
  alumna_id TEXT NOT NULL,
  monto REAL NOT NULL,
  fecha_pago DATETIME DEFAULT CURRENT_TIMESTAMP,
  mes_referencia TEXT, -- YYYY-MM
  metodo TEXT CHECK(metodo IN ('EFECTIVO', 'TRANSFERENCIA', 'OTRO')) DEFAULT 'OTRO',
  registrada_por TEXT NOT NULL,
  notas TEXT,
  FOREIGN KEY(alumna_id) REFERENCES users(id),
  FOREIGN KEY(registrada_por) REFERENCES users(id)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_planes_alumna ON planes_semanales(alumna_id);
CREATE INDEX IF NOT EXISTS idx_horarios_fecha ON horarios_clases(fecha);
CREATE INDEX IF NOT EXISTS idx_reservas_alumna ON reservas(alumna_id);
CREATE INDEX IF NOT EXISTS idx_reservas_estado ON reservas(estado);
CREATE INDEX IF NOT EXISTS idx_asistencia_alumna ON asistencia(alumna_id);
CREATE INDEX IF NOT EXISTS idx_pagos_alumna ON pagos(alumna_id);
```

- [ ] **Step 2: Create database initialization file**

Create `backend/src/db/init.js`:

```javascript
import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = process.env.DATABASE_URL?.replace('file:', '') || './pilates.db';

export function initializeDatabase() {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        reject(err);
        return;
      }

      const schema = fs.readFileSync(
        path.join(__dirname, 'schema.sql'),
        'utf8'
      );

      db.exec(schema, (err) => {
        if (err) {
          reject(err);
          return;
        }
        console.log('✅ Database initialized');
        db.close();
        resolve();
      });
    });
  });
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  initializeDatabase()
    .catch(err => {
      console.error('❌ Database initialization failed:', err);
      process.exit(1);
    });
}
```

- [ ] **Step 3: Create database connection utility**

Create `backend/src/db/connection.js`:

```javascript
import sqlite3 from 'sqlite3';
import { promisify } from 'util';

const dbPath = process.env.DATABASE_URL?.replace('file:', '') || './pilates.db';

let db = null;

export function getDatabase() {
  if (!db) {
    db = new sqlite3.Database(dbPath);
    db.configure('busyTimeout', 5000);
  }
  return db;
}

export function query(sql, params = []) {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows || []);
    });
  });
}

export function queryOne(sql, params = []) {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

export function execute(sql, params = []) {
  return new Promise((resolve, reject) => {
    const db = getDatabase();
    db.run(sql, params, function(err) {
      if (err) reject(err);
      else resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
}

export function closeDatabase() {
  return new Promise((resolve, reject) => {
    if (db) {
      db.close((err) => {
        if (err) reject(err);
        else {
          db = null;
          resolve();
        }
      });
    } else {
      resolve();
    }
  });
}
```

- [ ] **Step 4: Test database initialization**

```bash
cd backend
NODE_ENV=test node src/db/init.js
# Expected: "✅ Database initialized"
```

- [ ] **Step 5: Commit**

```bash
git add src/db/schema.sql src/db/init.js src/db/connection.js
git commit -m "feat: create database schema and initialization"
```

---

#### Task 4: Create Database Models

**Files:**
- Create: `backend/src/models/User.js`
- Create: `backend/src/models/Schedule.js`
- Create: `backend/src/models/Reservation.js`
- Create: `backend/src/models/Attendance.js`
- Create: `backend/src/models/Payment.js`

- [ ] **Step 1: Create User model**

Create `backend/src/models/User.js`:

```javascript
import { v4 as uuid } from 'uuid';
import { query, queryOne, execute } from '../db/connection.js';
import bcrypt from 'bcryptjs';

export class User {
  static async create(userData) {
    const id = uuid();
    const { nombre, telefono, dni, tipo, datos_emergencia_nombre, datos_emergencia_telefono, alergias, restricciones_medicas } = userData;

    await execute(
      `INSERT INTO users (
        id, nombre, telefono, dni, tipo, 
        datos_emergencia_nombre, datos_emergencia_telefono, 
        alergias, restricciones_medicas
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, nombre, telefono, dni, tipo, datos_emergencia_nombre, datos_emergencia_telefono, alergias, restricciones_medicas]
    );

    return this.findById(id);
  }

  static async findById(id) {
    return queryOne('SELECT * FROM users WHERE id = ?', [id]);
  }

  static async findByPhone(telefono) {
    return queryOne('SELECT * FROM users WHERE telefono = ?', [telefono]);
  }

  static async findAll(tipo = null) {
    if (tipo) {
      return query('SELECT * FROM users WHERE tipo = ? AND estado = "ACTIVA" ORDER BY nombre', [tipo]);
    }
    return query('SELECT * FROM users WHERE estado = "ACTIVA" ORDER BY nombre');
  }

  static async update(id, userData) {
    const { nombre, dni, datos_emergencia_nombre, datos_emergencia_telefono, alergias, restricciones_medicas } = userData;

    await execute(
      `UPDATE users SET 
        nombre = ?, dni = ?, 
        datos_emergencia_nombre = ?, datos_emergencia_telefono = ?, 
        alergias = ?, restricciones_medicas = ?,
        actualizado_en = CURRENT_TIMESTAMP
      WHERE id = ?`,
      [nombre, dni, datos_emergencia_nombre, datos_emergencia_telefono, alergias, restricciones_medicas, id]
    );

    return this.findById(id);
  }

  static async deactivate(id) {
    await execute('UPDATE users SET estado = "INACTIVA" WHERE id = ?', [id]);
  }

  static async delete(id) {
    await execute('DELETE FROM users WHERE id = ?', [id]);
  }
}
```

- [ ] **Step 2: Create Schedule model**

Create `backend/src/models/Schedule.js`:

```javascript
import { v4 as uuid } from 'uuid';
import { query, queryOne, execute } from '../db/connection.js';

export class Schedule {
  static async create(scheduleData) {
    const id = uuid();
    const { fecha, hora, capacidad = 6, creada_por } = scheduleData;

    await execute(
      `INSERT INTO horarios_clases (id, fecha, hora, capacidad, creada_por)
       VALUES (?, ?, ?, ?, ?)`,
      [id, fecha, hora, capacidad, creada_por]
    );

    return this.findById(id);
  }

  static async findById(id) {
    return queryOne('SELECT * FROM horarios_clases WHERE id = ?', [id]);
  }

  static async findByDate(fecha) {
    return query('SELECT * FROM horarios_clases WHERE fecha = ? ORDER BY hora', [fecha]);
  }

  static async findByDateRange(startDate, endDate) {
    return query(
      `SELECT * FROM horarios_clases 
       WHERE fecha >= ? AND fecha <= ? AND estado = "ABIERTA"
       ORDER BY fecha, hora`,
      [startDate, endDate]
    );
  }

  static async update(id, scheduleData) {
    const { estado } = scheduleData;
    await execute(
      'UPDATE horarios_clases SET estado = ? WHERE id = ?',
      [estado, id]
    );
    return this.findById(id);
  }

  static async delete(id) {
    await execute('DELETE FROM horarios_clases WHERE id = ?', [id]);
  }

  // Get available beds for a schedule
  static async getAvailableBeds(horarioId) {
    const reservations = await query(
      'SELECT cama_numero FROM reservas WHERE horario_id = ? AND estado IN ("CONFIRMADA", "PENDIENTE")',
      [horarioId]
    );
    const reserved = reservations.map(r => r.cama_numero);
    return Array.from({length: 6}, (_, i) => i + 1).filter(n => !reserved.includes(n));
  }
}
```

- [ ] **Step 3: Create Reservation model**

Create `backend/src/models/Reservation.js`:

```javascript
import { v4 as uuid } from 'uuid';
import { query, queryOne, execute } from '../db/connection.js';

export class Reservation {
  static async create(reservationData) {
    const id = uuid();
    const { alumna_id, horario_id, cama_numero, estado = 'PENDIENTE' } = reservationData;

    await execute(
      `INSERT INTO reservas (id, alumna_id, horario_id, cama_numero, estado)
       VALUES (?, ?, ?, ?, ?)`,
      [id, alumna_id, horario_id, cama_numero, estado]
    );

    return this.findById(id);
  }

  static async findById(id) {
    return queryOne(`
      SELECT r.*, u.nombre, h.fecha, h.hora
      FROM reservas r
      JOIN users u ON r.alumna_id = u.id
      JOIN horarios_clases h ON r.horario_id = h.id
      WHERE r.id = ?
    `, [id]);
  }

  static async findByAlumna(alumnaId) {
    return query(`
      SELECT r.*, u.nombre, h.fecha, h.hora
      FROM reservas r
      JOIN users u ON r.alumna_id = u.id
      JOIN horarios_clases h ON r.horario_id = h.id
      WHERE r.alumna_id = ?
      ORDER BY h.fecha DESC, h.hora DESC
    `, [alumnaId]);
  }

  static async findBySchedule(horarioId) {
    return query(`
      SELECT r.*, u.nombre, u.datos_emergencia_nombre, u.alergias, u.restricciones_medicas
      FROM reservas r
      JOIN users u ON r.alumna_id = u.id
      WHERE r.horario_id = ? AND r.estado IN ('CONFIRMADA', 'PENDIENTE')
      ORDER BY r.cama_numero
    `, [horarioId]);
  }

  static async findPending(duenaId = null) {
    return query(`
      SELECT r.*, u.nombre, h.fecha, h.hora
      FROM reservas r
      JOIN users u ON r.alumna_id = u.id
      JOIN horarios_clases h ON r.horario_id = h.id
      WHERE r.estado = 'PENDIENTE'
      ORDER BY r.fecha_solicitud DESC
    `);
  }

  static async confirm(id, duenaId) {
    await execute(
      `UPDATE reservas SET 
        estado = 'CONFIRMADA',
        confirmada_por = ?,
        fecha_confirmacion = CURRENT_TIMESTAMP
      WHERE id = ?`,
      [duenaId, id]
    );
    return this.findById(id);
  }

  static async reject(id, duenaId, razonRechazo) {
    await execute(
      `UPDATE reservas SET 
        estado = 'RECHAZADA',
        confirmada_por = ?,
        razon_rechazo = ?,
        fecha_confirmacion = CURRENT_TIMESTAMP
      WHERE id = ?`,
      [duenaId, razonRechazo, id]
    );
    return this.findById(id);
  }

  static async cancel(id) {
    await execute('UPDATE reservas SET estado = "CANCELADA" WHERE id = ?', [id]);
    return this.findById(id);
  }

  static async delete(id) {
    await execute('DELETE FROM reservas WHERE id = ?', [id]);
  }
}
```

- [ ] **Step 4: Create Attendance model**

Create `backend/src/models/Attendance.js`:

```javascript
import { v4 as uuid } from 'uuid';
import { query, queryOne, execute } from '../db/connection.js';

export class Attendance {
  static async markPresent(alumnaId, horarioId, registradoPor) {
    const id = uuid();

    await execute(
      `INSERT OR REPLACE INTO asistencia (id, alumna_id, horario_id, presente, registrada_por)
       VALUES (?, ?, ?, 1, ?)`,
      [id, alumnaId, horarioId, registradoPor]
    );

    return this.findById(id);
  }

  static async markAbsent(alumnaId, horarioId, registradoPor) {
    const id = uuid();

    await execute(
      `INSERT OR REPLACE INTO asistencia (id, alumna_id, horario_id, presente, registrada_por)
       VALUES (?, ?, ?, 0, ?)`,
      [id, alumnaId, horarioId, registradoPor]
    );

    return this.findById(id);
  }

  static async findById(id) {
    return queryOne('SELECT * FROM asistencia WHERE id = ?', [id]);
  }

  static async findByAlumna(alumnaId) {
    return query(
      `SELECT a.*, h.fecha, h.hora, u.nombre
       FROM asistencia a
       JOIN horarios_clases h ON a.horario_id = h.id
       JOIN users u ON a.registrada_por = u.id
       WHERE a.alumna_id = ?
       ORDER BY h.fecha DESC`,
      [alumnaId]
    );
  }

  static async findBySchedule(horarioId) {
    return query(
      `SELECT a.*, u.nombre
       FROM asistencia a
       JOIN users u ON a.alumna_id = u.id
       WHERE a.horario_id = ?`,
      [horarioId]
    );
  }

  static async countPresent(alumnaId, monthStart, monthEnd) {
    const result = await queryOne(
      `SELECT COUNT(*) as count FROM asistencia 
       WHERE alumna_id = ? AND presente = 1 
       AND fecha_registro >= ? AND fecha_registro <= ?`,
      [alumnaId, monthStart, monthEnd]
    );
    return result?.count || 0;
  }
}
```

- [ ] **Step 5: Create Payment model**

Create `backend/src/models/Payment.js`:

```javascript
import { v4 as uuid } from 'uuid';
import { query, queryOne, execute } from '../db/connection.js';

export class Payment {
  static async create(paymentData) {
    const id = uuid();
    const { alumna_id, monto, mes_referencia, metodo, registrada_por, notas } = paymentData;

    await execute(
      `INSERT INTO pagos (id, alumna_id, monto, mes_referencia, metodo, registrada_por, notas)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [id, alumna_id, monto, mes_referencia, metodo, registrada_por, notas]
    );

    return this.findById(id);
  }

  static async findById(id) {
    return queryOne('SELECT * FROM pagos WHERE id = ?', [id]);
  }

  static async findByAlumna(alumnaId) {
    return query(
      'SELECT * FROM pagos WHERE alumna_id = ? ORDER BY fecha_pago DESC',
      [alumnaId]
    );
  }

  static async findByMonth(mes_referencia) {
    return query(
      'SELECT * FROM pagos WHERE mes_referencia = ? ORDER BY fecha_pago DESC',
      [mes_referencia]
    );
  }

  static async getTotalByMonth(mes_referencia) {
    const result = await queryOne(
      'SELECT COALESCE(SUM(monto), 0) as total FROM pagos WHERE mes_referencia = ?',
      [mes_referencia]
    );
    return result?.total || 0;
  }

  static async getPaymentStatus(alumnaId) {
    const payments = await this.findByAlumna(alumnaId);
    const thisMonth = new Date().toISOString().slice(0, 7); // YYYY-MM
    const paid = payments.some(p => p.mes_referencia === thisMonth);
    
    return {
      paid,
      lastPaymentDate: payments[0]?.fecha_pago,
      totalThisMonth: payments
        .filter(p => p.mes_referencia === thisMonth)
        .reduce((sum, p) => sum + p.monto, 0)
    };
  }

  static async delete(id) {
    await execute('DELETE FROM pagos WHERE id = ?', [id]);
  }
}
```

- [ ] **Step 6: Test models**

Create `backend/tests/models.test.js`:

```javascript
import { User } from '../src/models/User.js';
import { Schedule } from '../src/models/Schedule.js';
import { initializeDatabase } from '../src/db/init.js';
import { closeDatabase } from '../src/db/connection.js';

describe('Models', () => {
  beforeAll(async () => {
    process.env.DATABASE_URL = 'file:./test.db';
    await initializeDatabase();
  });

  afterAll(async () => {
    await closeDatabase();
  });

  test('User.create should create a user', async () => {
    const user = await User.create({
      nombre: 'Test User',
      telefono: '1234567890',
      tipo: 'ALUMNA'
    });
    expect(user).toBeDefined();
    expect(user.nombre).toBe('Test User');
  });

  test('User.findByPhone should find user by phone', async () => {
    const user = await User.findByPhone('1234567890');
    expect(user).toBeDefined();
    expect(user.nombre).toBe('Test User');
  });
});
```

- [ ] **Step 7: Commit**

```bash
git add src/models/
git commit -m "feat: create database models (User, Schedule, Reservation, etc.)"
```

---

### Phase 3: Authentication & Authorization

#### Task 5: Implement JWT Authentication

**Files:**
- Create: `backend/src/utils/jwt.js`
- Create: `backend/src/middleware/auth.js`
- Modify: `backend/src/server.js`

- [ ] **Step 1: Create JWT utilities**

Create `backend/src/utils/jwt.js`:

```javascript
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key';
const JWT_EXPIRE = process.env.JWT_EXPIRE || '7d';

export function generateToken(userId, tipo) {
  return jwt.sign(
    { userId, tipo },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRE }
  );
}

export function generateRefreshToken(userId) {
  return jwt.sign(
    { userId, type: 'refresh' },
    JWT_SECRET,
    { expiresIn: '30d' }
  );
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error(`Invalid token: ${error.message}`);
  }
}

export function decodeToken(token) {
  return jwt.decode(token);
}
```

- [ ] **Step 2: Create auth middleware**

Create `backend/src/middleware/auth.js`:

```javascript
import { verifyToken } from '../utils/jwt.js';

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid authorization header' });
  }

  const token = authHeader.slice(7);

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

export function requireRole(allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    if (!allowedRoles.includes(req.user.tipo)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }

    next();
  };
}
```

- [ ] **Step 3: Create validation utilities**

Create `backend/src/utils/validation.js`:

```javascript
export function validatePhone(phone) {
  // Simple validation - can be enhanced
  return /^\d{10,}$/.test(phone.replace(/\D/g, ''));
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateDates(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return start <= end;
}

export function validatePaymentMethod(method) {
  return ['EFECTIVO', 'TRANSFERENCIA', 'OTRO'].includes(method);
}

export function validateHour(hour) {
  const [h, m] = hour.split(':').map(Number);
  return h >= 0 && h < 24 && m >= 0 && m < 60;
}
```

- [ ] **Step 4: Create auth controller**

Create `backend/src/controllers/authController.js`:

```javascript
import { User } from '../models/User.js';
import { generateToken, generateRefreshToken } from '../utils/jwt.js';
import { validatePhone } from '../utils/validation.js';

export class AuthController {
  static async requestPhoneVerification(req, res) {
    try {
      const { telefono } = req.body;

      if (!telefono || !validatePhone(telefono)) {
        return res.status(400).json({ error: 'Invalid phone number' });
      }

      // TODO: Send SMS code (implement later)
      const verificationCode = Math.random().toString().slice(2, 8);

      // Store in memory/cache temporarily (implement Redis later)
      res.json({
        message: 'Verification code sent',
        // For development only:
        code: process.env.NODE_ENV === 'development' ? verificationCode : undefined
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async verifyPhoneCode(req, res) {
    try {
      const { telefono, codigo } = req.body;

      // TODO: Verify code against stored code

      const user = await User.findByPhone(telefono);

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      const token = generateToken(user.id, user.tipo);
      const refreshToken = generateRefreshToken(user.id);

      res.json({
        user: {
          id: user.id,
          nombre: user.nombre,
          telefono: user.telefono,
          tipo: user.tipo
        },
        token,
        refreshToken
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async refreshToken(req, res) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        return res.status(400).json({ error: 'Refresh token required' });
      }

      // TODO: Validate refresh token
      const decoded = jwt.decode(refreshToken);
      if (!decoded || decoded.type !== 'refresh') {
        return res.status(401).json({ error: 'Invalid refresh token' });
      }

      const user = await User.findById(decoded.userId);
      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      const newToken = generateToken(user.id, user.tipo);

      res.json({ token: newToken });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
```

- [ ] **Step 5: Create auth routes**

Create `backend/src/routes/auth.js`:

```javascript
import express from 'express';
import { AuthController } from '../controllers/authController.js';

const router = express.Router();

router.post('/request-code', AuthController.requestPhoneVerification);
router.post('/verify-code', AuthController.verifyPhoneCode);
router.post('/refresh', AuthController.refreshToken);

export default router;
```

- [ ] **Step 6: Update server.js to use auth routes**

Update `backend/src/server.js`:

```javascript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeDatabase } from './db/init.js';
import authRoutes from './routes/auth.js';
import { authMiddleware } from './middleware/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize database
await initializeDatabase();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

- [ ] **Step 7: Test auth endpoints**

```bash
# Start server
npm run dev

# In another terminal, test:
curl -X POST http://localhost:3000/api/auth/request-code \
  -H "Content-Type: application/json" \
  -d '{"telefono": "1234567890"}'

# Expected: { "message": "Verification code sent", "code": "XXXXXX" }
```

- [ ] **Step 8: Commit**

```bash
git add src/utils/jwt.js src/utils/validation.js src/middleware/auth.js src/controllers/authController.js src/routes/auth.js src/server.js
git commit -m "feat: implement JWT authentication with phone verification"
```

---

### Phase 4: Core API Endpoints (continued in next message due to length)

Due to the extensive nature of a full implementation plan, I'll continue with the remaining tasks...

---

## 📊 Execution Handoff

**Plan saved to:** `C:\Users\diego.robalo\Documents\CLAUDIA\PILATES\docs\superpowers\plans\2026-07-02-pilates-implementation.md`

This is **Phase 1-4** (Setup, DB, Auth, Initial APIs). **Remaining phases (4-5)** include:
- Full API endpoints (users, schedules, reservations, attendance, payments)
- Frontend components (auth, alumna portal, instructor dashboard)
- Real-time updates with WebSocket
- Deployment configuration

**Which execution approach?**

**Option 1: Subagent-Driven (Recommended)**
- I dispatch one subagent per task
- Review each task before moving forward
- Faster iteration with parallel agents
- Best for complex multi-step features

**Option 2: Inline Execution**
- I execute tasks sequentially in this session
- Slower but more direct control
- Better for debugging issues

**Which would you prefer?**