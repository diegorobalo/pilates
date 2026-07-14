# Sistema Financiero Pilates - Plan de Implementación

> **Para ejecución agentica:** Usa `superpowers:subagent-driven-development` (recomendado) para ejecutar tarea por tarea con revisiones entre pasos.

**Objetivo:** Implementar un sistema financiero centralizado con transacciones, reportes y dashboard funcional.

**Arquitectura:** Una tabla central `transacciones` agrupa ingresos, gastos y pagos. Backend expone endpoints CRUD y reportes. Frontend muestra 4 vistas principales (Dashboard, Pagos Alumnos, Gastos, Registro).

**Tech Stack:** Node.js/Express (backend), React/Tailwind (frontend), SQLite (BD), API REST

---

## Estructura de Archivos

### Backend - Nuevos Archivos
```
backend/src/
├── models/
│   ├── Transaction.js        (CRUD transacciones)
│   └── Category.js           (CRUD categorías)
├── controllers/
│   └── financeController.js  (Lógica reportes y transacciones)
├── routes/
│   └── finances.js           (Endpoints /api/finances/*)
```

### Frontend - Nuevos Archivos
```
frontend/src/
├── components/Finance/
│   ├── FinanceDashboard.jsx       (Layout principal)
│   ├── SummaryCard.jsx            (KPIs - Ingresos/Gastos/Balance)
│   ├── PaymentStatusTable.jsx     (Estado de pagos alumnos)
│   ├── ExpenseBreakdown.jsx       (Desglose gastos + gráfico)
│   └── TransactionModal.jsx       (Formulario registrar transacción)
├── pages/
│   └── FinancePage.jsx            (Página contenedora)
```

---

## Task 1: Crear tabla `transacciones` en BD

**Files:**
- Modify: `backend/src/db/schema.sql`

- [ ] **Step 1: Abrir schema.sql**

Ubicación: `C:\Users\diego.robalo\Documents\CLAUDIA\PILATES\backend\src\db\schema.sql`

- [ ] **Step 2: Agregar tabla transacciones al final del archivo**

Añade esto antes de cualquier otro schema:

```sql
-- Tabla central de transacciones financieras
CREATE TABLE IF NOT EXISTS transacciones (
  id TEXT PRIMARY KEY,
  tipo TEXT NOT NULL CHECK(tipo IN ('INGRESO_ALUMNA', 'GASTO', 'PAGO_INSTRUCTOR', 'INGRESO_OTRO')),
  categoria TEXT NOT NULL,
  subcategoria TEXT,
  monto DECIMAL(10, 2) NOT NULL CHECK(monto > 0),
  fecha TEXT NOT NULL,
  mes_referencia TEXT NOT NULL,
  alumna_id TEXT,
  instructor_id TEXT,
  descripcion TEXT,
  registrada_por TEXT NOT NULL,
  comprobante TEXT,
  estado TEXT DEFAULT 'REGISTRADA' CHECK(estado IN ('REGISTRADA', 'PENDIENTE', 'CANCELADA')),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  
  FOREIGN KEY(alumna_id) REFERENCES users(id),
  FOREIGN KEY(instructor_id) REFERENCES users(id),
  FOREIGN KEY(registrada_por) REFERENCES users(id)
);

CREATE INDEX IF NOT EXISTS idx_transacciones_mes ON transacciones(mes_referencia);
CREATE INDEX IF NOT EXISTS idx_transacciones_tipo ON transacciones(tipo);
CREATE INDEX IF NOT EXISTS idx_transacciones_categoria ON transacciones(categoria);
CREATE INDEX IF NOT EXISTS idx_transacciones_alumna ON transacciones(alumna_id);
CREATE INDEX IF NOT EXISTS idx_transacciones_instructor ON transacciones(instructor_id);

-- Tabla de categorías (estándar + custom)
CREATE TABLE IF NOT EXISTS categorias (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL UNIQUE,
  tipo TEXT,
  es_predefinida BOOLEAN DEFAULT 0,
  creada_por TEXT,
  created_at TEXT NOT NULL,
  
  FOREIGN KEY(creada_por) REFERENCES users(id)
);

-- Insertar categorías estándar
INSERT OR IGNORE INTO categorias (id, nombre, es_predefinida, created_at) VALUES
('cat-empleados', 'Empleados/Sueldos', 1, datetime('now')),
('cat-servicios', 'Servicios', 1, datetime('now')),
('cat-mantenimiento', 'Mantenimiento', 1, datetime('now')),
('cat-materiales', 'Materiales', 1, datetime('now')),
('cat-otros', 'Otros', 1, datetime('now'));
```

- [ ] **Step 3: Verificar que el schema es válido**

Las tablas se crearán automáticamente cuando el servidor inicie (schema.sql se ejecuta en `initDb()` de `backend/src/db/connection.js`). No necesitas hacer nada manual.

- [ ] **Step 4: Commit**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES"
git add backend/src/db/schema.sql
git commit -m "feat: add transacciones and categorias tables to schema"
```

---

## Task 2: Crear modelo Transaction

**Files:**
- Create: `backend/src/models/Transaction.js`

- [ ] **Step 1: Crear archivo Transaction.js**

```javascript
import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class Transaction {
  /**
   * Create a new transaction
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  static async create(data) {
    const id = uuidv4();
    const {
      tipo,
      categoria,
      subcategoria = null,
      monto,
      fecha,
      mes_referencia,
      alumna_id = null,
      instructor_id = null,
      descripcion = '',
      registrada_por,
      comprobante = null
    } = data;

    if (!tipo || !categoria || !monto || !fecha || !mes_referencia || !registrada_por) {
      throw new Error('Missing required fields: tipo, categoria, monto, fecha, mes_referencia, registrada_por');
    }

    if (monto <= 0) {
      throw new Error('Monto must be greater than 0');
    }

    try {
      await runAsync(
        `INSERT INTO transacciones (
          id, tipo, categoria, subcategoria, monto, fecha, mes_referencia,
          alumna_id, instructor_id, descripcion, registrada_por, comprobante,
          estado, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          id, tipo, categoria, subcategoria, monto, fecha, mes_referencia,
          alumna_id, instructor_id, descripcion, registrada_por, comprobante,
          'REGISTRADA', new Date().toISOString(), new Date().toISOString()
        ]
      );

      return await Transaction.findById(id);
    } catch (error) {
      throw new Error(`Error creating transaction: ${error.message}`);
    }
  }

  /**
   * Find transaction by ID
   */
  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM transacciones WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding transaction: ${error.message}`);
    }
  }

  /**
   * Find all transactions with filters
   */
  static async findAll(filters = {}) {
    try {
      let query = 'SELECT * FROM transacciones WHERE 1=1';
      const params = [];

      if (filters.mes_referencia) {
        query += ' AND mes_referencia = ?';
        params.push(filters.mes_referencia);
      }

      if (filters.tipo) {
        query += ' AND tipo = ?';
        params.push(filters.tipo);
      }

      if (filters.categoria) {
        query += ' AND categoria = ?';
        params.push(filters.categoria);
      }

      if (filters.alumna_id) {
        query += ' AND alumna_id = ?';
        params.push(filters.alumna_id);
      }

      if (filters.instructor_id) {
        query += ' AND instructor_id = ?';
        params.push(filters.instructor_id);
      }

      if (filters.fecha_desde && filters.fecha_hasta) {
        query += ' AND fecha BETWEEN ? AND ?';
        params.push(filters.fecha_desde, filters.fecha_hasta);
      }

      query += ' ORDER BY fecha DESC, created_at DESC';

      return await allAsync(query, params);
    } catch (error) {
      throw new Error(`Error finding transactions: ${error.message}`);
    }
  }

  /**
   * Update transaction
   */
  static async update(id, data) {
    try {
      const { categoria, subcategoria, monto, fecha, descripcion, comprobante } = data;

      const updates = [];
      const params = [];

      if (categoria !== undefined) {
        updates.push('categoria = ?');
        params.push(categoria);
      }
      if (subcategoria !== undefined) {
        updates.push('subcategoria = ?');
        params.push(subcategoria);
      }
      if (monto !== undefined) {
        if (monto <= 0) throw new Error('Monto must be greater than 0');
        updates.push('monto = ?');
        params.push(monto);
      }
      if (fecha !== undefined) {
        updates.push('fecha = ?');
        params.push(fecha);
      }
      if (descripcion !== undefined) {
        updates.push('descripcion = ?');
        params.push(descripcion);
      }
      if (comprobante !== undefined) {
        updates.push('comprobante = ?');
        params.push(comprobante);
      }

      if (updates.length === 0) return await Transaction.findById(id);

      updates.push('updated_at = ?');
      params.push(new Date().toISOString());
      params.push(id);

      await runAsync(
        `UPDATE transacciones SET ${updates.join(', ')} WHERE id = ?`,
        params
      );

      return await Transaction.findById(id);
    } catch (error) {
      throw new Error(`Error updating transaction: ${error.message}`);
    }
  }

  /**
   * Delete (soft delete - mark as CANCELADA)
   */
  static async delete(id) {
    try {
      await runAsync(
        'UPDATE transacciones SET estado = ?, updated_at = ? WHERE id = ?',
        ['CANCELADA', new Date().toISOString(), id]
      );
      return true;
    } catch (error) {
      throw new Error(`Error deleting transaction: ${error.message}`);
    }
  }

  /**
   * Get summary for a month
   */
  static async getMonthlySummary(mes_referencia) {
    try {
      const ingresos = await getAsync(
        `SELECT 
          SUM(monto) as total,
          tipo
         FROM transacciones 
         WHERE mes_referencia = ? AND tipo LIKE 'INGRESO%' AND estado = 'REGISTRADA'
         GROUP BY tipo`,
        [mes_referencia]
      );

      const gastos = await getAsync(
        `SELECT SUM(monto) as total
         FROM transacciones 
         WHERE mes_referencia = ? AND tipo = 'GASTO' AND estado = 'REGISTRADA'`,
        [mes_referencia]
      );

      const pagoInstructores = await getAsync(
        `SELECT SUM(monto) as total
         FROM transacciones 
         WHERE mes_referencia = ? AND tipo = 'PAGO_INSTRUCTOR' AND estado = 'REGISTRADA'`,
        [mes_referencia]
      );

      return {
        mes: mes_referencia,
        ingresos_total: (ingresos?.total || 0),
        gastos_total: (gastos?.total || 0),
        pagos_instructores: (pagoInstructores?.total || 0),
        balance: (ingresos?.total || 0) - (gastos?.total || 0) - (pagoInstructores?.total || 0)
      };
    } catch (error) {
      throw new Error(`Error getting monthly summary: ${error.message}`);
    }
  }

  /**
   * Get expenses by category
   */
  static async getExpensesByCategory(mes_referencia) {
    try {
      return await allAsync(
        `SELECT 
          categoria,
          SUM(monto) as monto,
          COUNT(*) as cantidad
         FROM transacciones 
         WHERE mes_referencia = ? AND tipo = 'GASTO' AND estado = 'REGISTRADA'
         GROUP BY categoria
         ORDER BY monto DESC`,
        [mes_referencia]
      );
    } catch (error) {
      throw new Error(`Error getting expenses by category: ${error.message}`);
    }
  }
}

export default Transaction;
```

- [ ] **Step 2: Commit**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES"
git add backend/src/models/Transaction.js
git commit -m "feat: create Transaction model with CRUD operations"
```

---

## Task 3: Crear modelo Category

**Files:**
- Create: `backend/src/models/Category.js`

- [ ] **Step 1: Crear archivo Category.js**

```javascript
import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class Category {
  /**
   * Create a new category
   */
  static async create(data) {
    const id = uuidv4();
    const { nombre, tipo = null, creada_por = null } = data;

    if (!nombre) {
      throw new Error('Nombre is required');
    }

    try {
      await runAsync(
        `INSERT INTO categorias (id, nombre, tipo, es_predefinida, creada_por, created_at)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [id, nombre, tipo, 0, creada_por, new Date().toISOString()]
      );

      return await Category.findById(id);
    } catch (error) {
      if (error.message.includes('UNIQUE')) {
        throw new Error(`Category "${nombre}" already exists`);
      }
      throw new Error(`Error creating category: ${error.message}`);
    }
  }

  /**
   * Find category by ID
   */
  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM categorias WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding category: ${error.message}`);
    }
  }

  /**
   * Get all categories (predefined + custom)
   */
  static async findAll() {
    try {
      const predefinidas = await allAsync(
        'SELECT * FROM categorias WHERE es_predefinida = 1 ORDER BY nombre',
        []
      );

      const custom = await allAsync(
        'SELECT * FROM categorias WHERE es_predefinida = 0 ORDER BY nombre',
        []
      );

      return { predefinidas, custom };
    } catch (error) {
      throw new Error(`Error fetching categories: ${error.message}`);
    }
  }

  /**
   * Get all categories as flat list
   */
  static async findAllFlat() {
    try {
      return await allAsync(
        'SELECT * FROM categorias ORDER BY es_predefinida DESC, nombre',
        []
      );
    } catch (error) {
      throw new Error(`Error fetching categories: ${error.message}`);
    }
  }

  /**
   * Delete category (soft - only custom categories)
   */
  static async delete(id) {
    try {
      const cat = await Category.findById(id);
      if (!cat) throw new Error('Category not found');
      if (cat.es_predefinida) {
        throw new Error('Cannot delete predefined categories');
      }

      await runAsync('DELETE FROM categorias WHERE id = ?', [id]);
      return true;
    } catch (error) {
      throw new Error(`Error deleting category: ${error.message}`);
    }
  }
}

export default Category;
```

- [ ] **Step 2: Commit**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES"
git add backend/src/models/Category.js
git commit -m "feat: create Category model"
```

---

## Task 4: Crear endpoints API - Transacciones

**Files:**
- Create: `backend/src/routes/finances.js` (si no existe, reemplazar si existe)

- [ ] **Step 1: Crear archivo finances.js con endpoints**

```javascript
import express from 'express';
import { authMiddleware, requireRole } from '../middleware/auth.js';
import * as financeController from '../controllers/financeController.js';

const router = express.Router();

// Todos los endpoints requieren autenticación DUEÑA o ADMIN
router.use(authMiddleware);
router.use(requireRole(['DUEÑA', 'ADMIN']));

// ============ TRANSACCIONES ============

/**
 * POST /api/finances/transacciones
 * Crear nueva transacción
 */
router.post('/transacciones', financeController.createTransaction);

/**
 * GET /api/finances/transacciones
 * Listar transacciones con filtros
 * Query: ?mes=YYYY-MM&tipo=GASTO&categoria=Servicios&skip=0&limit=50
 */
router.get('/transacciones', financeController.getTransactions);

/**
 * PUT /api/finances/transacciones/:id
 * Editar transacción
 */
router.put('/transacciones/:id', financeController.updateTransaction);

/**
 * DELETE /api/finances/transacciones/:id
 * Eliminar (marcar como CANCELADA)
 */
router.delete('/transacciones/:id', financeController.deleteTransaction);

// ============ REPORTES ============

/**
 * GET /api/finances/resumen?mes=YYYY-MM
 * Retorna: ingresos, gastos, balance
 */
router.get('/resumen', financeController.getMonthlySummary);

/**
 * GET /api/finances/gastos-por-categoria?mes=YYYY-MM
 * Desglose de gastos por categoría
 */
router.get('/gastos-por-categoria', financeController.getExpensesByCategory);

/**
 * GET /api/finances/pagos-alumnos?mes=YYYY-MM
 * Estado de pagos de cada alumna
 */
router.get('/pagos-alumnos', financeController.getStudentPaymentStatus);

/**
 * GET /api/finances/pagos-instructores?mes=YYYY-MM
 * Estado de pagos a instructores
 */
router.get('/pagos-instructores', financeController.getInstructorPaymentStatus);

// ============ CATEGORIAS ============

/**
 * POST /api/finances/categorias
 * Crear categoría custom
 */
router.post('/categorias', financeController.createCategory);

/**
 * GET /api/finances/categorias
 * Listar todas las categorías
 */
router.get('/categorias', financeController.getCategories);

/**
 * DELETE /api/finances/categorias/:id
 * Eliminar categoría custom
 */
router.delete('/categorias/:id', financeController.deleteCategory);

export default router;
```

- [ ] **Step 2: Commit**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES"
git add backend/src/routes/finances.js
git commit -m "feat: create finances API routes"
```

---

## Task 5: Crear controlador de finanzas

**Files:**
- Create: `backend/src/controllers/financeController.js` (reemplazar si existe)

- [ ] **Step 1: Crear controlador**

```javascript
import Transaction from '../models/Transaction.js';
import Category from '../models/Category.js';
import User from '../models/User.js';

// ============ TRANSACCIONES ============

export const createTransaction = async (req, res, next) => {
  try {
    const { tipo, categoria, subcategoria, monto, fecha, mes_referencia, alumna_id, instructor_id, descripcion, comprobante } = req.body;
    const registrada_por = req.user.userId;

    if (!tipo || !categoria || !monto || !fecha || !mes_referencia) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const transaction = await Transaction.create({
      tipo,
      categoria,
      subcategoria,
      monto,
      fecha,
      mes_referencia,
      alumna_id,
      instructor_id,
      descripcion,
      registrada_por,
      comprobante
    });

    res.status(201).json({
      message: 'Transaction created successfully',
      transaction
    });
  } catch (error) {
    next(error);
  }
};

export const getTransactions = async (req, res, next) => {
  try {
    const { mes_referencia, tipo, categoria, alumna_id, instructor_id, fecha_desde, fecha_hasta, skip = 0, limit = 50 } = req.query;

    const filters = {};
    if (mes_referencia) filters.mes_referencia = mes_referencia;
    if (tipo) filters.tipo = tipo;
    if (categoria) filters.categoria = categoria;
    if (alumna_id) filters.alumna_id = alumna_id;
    if (instructor_id) filters.instructor_id = instructor_id;
    if (fecha_desde && fecha_hasta) {
      filters.fecha_desde = fecha_desde;
      filters.fecha_hasta = fecha_hasta;
    }

    const transactions = await Transaction.findAll(filters);

    // Paginar
    const paginated = transactions.slice(parseInt(skip), parseInt(skip) + parseInt(limit));

    res.json({
      total: transactions.length,
      skip: parseInt(skip),
      limit: parseInt(limit),
      transactions: paginated
    });
  } catch (error) {
    next(error);
  }
};

export const updateTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.update(id, req.body);

    res.json({
      message: 'Transaction updated successfully',
      transaction
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Transaction.delete(id);

    res.json({
      message: 'Transaction deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// ============ REPORTES ============

export const getMonthlySummary = async (req, res, next) => {
  try {
    const { mes_referencia } = req.query;

    if (!mes_referencia) {
      return res.status(400).json({ error: 'mes_referencia is required' });
    }

    const summary = await Transaction.getMonthlySummary(mes_referencia);

    res.json(summary);
  } catch (error) {
    next(error);
  }
};

export const getExpensesByCategory = async (req, res, next) => {
  try {
    const { mes_referencia } = req.query;

    if (!mes_referencia) {
      return res.status(400).json({ error: 'mes_referencia is required' });
    }

    const expenses = await Transaction.getExpensesByCategory(mes_referencia);
    const total = expenses.reduce((sum, e) => sum + e.monto, 0);

    const withPercentage = expenses.map(e => ({
      ...e,
      porcentaje: total > 0 ? ((e.monto / total) * 100).toFixed(1) : 0
    }));

    res.json({
      mes: mes_referencia,
      total,
      categorias: withPercentage
    });
  } catch (error) {
    next(error);
  }
};

export const getStudentPaymentStatus = async (req, res, next) => {
  try {
    const { mes_referencia } = req.query;

    if (!mes_referencia) {
      return res.status(400).json({ error: 'mes_referencia is required' });
    }

    // Obtener todas las alumnas activas
    const alumnasRaw = await User.findAll({ tipo: 'ALUMNA', estado: 'ACTIVA' });

    const status = await Promise.all(
      alumnasRaw.map(async (alumna) => {
        // Obtener pagos de esta alumna en el mes
        const transactions = await Transaction.findAll({
          mes_referencia,
          alumna_id: alumna.id,
          tipo: 'INGRESO_ALUMNA'
        });

        const pagado = transactions.reduce((sum, t) => sum + t.monto, 0);
        
        // Aquí podrías calcular cuánto debería pagar (por ahora asumimos $5000/mes)
        const debe_pagar = 5000;
        const debe = Math.max(0, debe_pagar - pagado);
        const estado = debe === 0 ? 'AL_DIA' : (debe > 0 ? 'DEBE' : 'EXCESO');

        return {
          id: alumna.id,
          nombre: `${alumna.nombre} ${alumna.apellido || ''}`.trim(),
          debe_pagar,
          pagado,
          debe,
          estado,
          transacciones_count: transactions.length
        };
      })
    );

    res.json({
      mes: mes_referencia,
      alumnos: status.sort((a, b) => (b.debe - a.debe))
    });
  } catch (error) {
    next(error);
  }
};

export const getInstructorPaymentStatus = async (req, res, next) => {
  try {
    const { mes_referencia } = req.query;

    if (!mes_referencia) {
      return res.status(400).json({ error: 'mes_referencia is required' });
    }

    // Obtener todos los instructores
    const instructoresRaw = await User.findAll({ tipo: 'PROFESORA', estado: 'ACTIVA' });

    const status = await Promise.all(
      instructoresRaw.map(async (instructor) => {
        // Obtener pagos a este instructor en el mes
        const transactions = await Transaction.findAll({
          mes_referencia,
          instructor_id: instructor.id,
          tipo: 'PAGO_INSTRUCTOR'
        });

        const pagado = transactions.reduce((sum, t) => sum + t.monto, 0);

        return {
          id: instructor.id,
          nombre: `${instructor.nombre} ${instructor.apellido || ''}`.trim(),
          pagado,
          transacciones_count: transactions.length
        };
      })
    );

    res.json({
      mes: mes_referencia,
      instructores: status.sort((a, b) => (b.pagado - a.pagado))
    });
  } catch (error) {
    next(error);
  }
};

// ============ CATEGORIAS ============

export const createCategory = async (req, res, next) => {
  try {
    const { nombre } = req.body;
    const creada_por = req.user.userId;

    if (!nombre) {
      return res.status(400).json({ error: 'Nombre is required' });
    }

    const category = await Category.create({
      nombre,
      creada_por
    });

    res.status(201).json({
      message: 'Category created successfully',
      category
    });
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();

    res.json(categories);
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Category.delete(id);

    res.json({
      message: 'Category deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
```

- [ ] **Step 2: Registrar rutas en server.js**

Abre `backend/src/server.js` y busca donde se importan las rutas. Añade esta línea después de las otras importaciones:

```javascript
import financesRoutes from './routes/finances.js';
```

Luego busca donde se registran las rutas (cerca de `app.use('/api/auth', authRoutes)`):

```javascript
app.use('/api/finances', financesRoutes);
```

- [ ] **Step 3: Commit**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES"
git add backend/src/controllers/financeController.js backend/src/server.js
git commit -m "feat: add finance controller and register routes"
```

---

## Task 6: Crear componente SummaryCard (KPIs)

**Files:**
- Create: `frontend/src/components/Finance/SummaryCard.jsx`

- [ ] **Step 1: Crear componente**

```javascript
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

export default function SummaryCard({ mes, ingresos, gastos, balance }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(value || 0);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Ingresos */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-600 uppercase">Ingresos</h3>
          <TrendingUp className="w-5 h-5 text-green-600" />
        </div>
        <p className="text-3xl font-bold text-green-700">{formatCurrency(ingresos)}</p>
        <p className="text-xs text-gray-500 mt-2">Mes: {mes}</p>
      </div>

      {/* Gastos */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-600 uppercase">Gastos</h3>
          <TrendingDown className="w-5 h-5 text-red-600" />
        </div>
        <p className="text-3xl font-bold text-red-700">{formatCurrency(gastos)}</p>
        <p className="text-xs text-gray-500 mt-2">Operacional</p>
      </div>

      {/* Balance */}
      <div className={`border rounded-lg p-6 ${balance >= 0 ? 'bg-blue-50 border-blue-200' : 'bg-orange-50 border-orange-200'}`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-gray-600 uppercase">Balance</h3>
          <DollarSign className={`w-5 h-5 ${balance >= 0 ? 'text-blue-600' : 'text-orange-600'}`} />
        </div>
        <p className={`text-3xl font-bold ${balance >= 0 ? 'text-blue-700' : 'text-orange-700'}`}>
          {formatCurrency(balance)}
        </p>
        <p className="text-xs text-gray-500 mt-2">{balance >= 0 ? 'Superávit' : 'Déficit'}</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES"
git add frontend/src/components/Finance/SummaryCard.jsx
git commit -m "feat: create SummaryCard component for KPIs"
```

---

## Task 7: Crear componente PaymentStatusTable

**Files:**
- Create: `frontend/src/components/Finance/PaymentStatusTable.jsx`

- [ ] **Step 1: Crear componente**

```javascript
import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Plus } from 'lucide-react';

export default function PaymentStatusTable({ mes, onAddPayment }) {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPaymentStatus();
  }, [mes]);

  const fetchPaymentStatus = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`/api/finances/pagos-alumnos?mes_referencia=${mes}`, {
        headers: token ? { 'Authorization': `Bearer ${token}` } : {}
      });

      if (response.ok) {
        const data = await response.json();
        setAlumnos(data.alumnos || []);
      } else {
        setError('Error al cargar estado de pagos');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(value || 0);
  };

  const getStatusBadge = (estado) => {
    switch (estado) {
      case 'AL_DIA':
        return <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-medium"><CheckCircle className="w-4 h-4" /> Al día</span>;
      case 'DEBE':
        return <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded text-xs font-medium"><AlertCircle className="w-4 h-4" /> Debe</span>;
      case 'EXCESO':
        return <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">Pagó en exceso</span>;
      default:
        return null;
    }
  };

  if (loading) return <div className="text-center py-12">Cargando...</div>;
  if (error) return <div className="bg-red-50 p-4 rounded text-red-700 text-sm">{error}</div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Estado de Pagos de Alumnas</h3>
        <button
          onClick={() => onAddPayment('INGRESO_ALUMNA')}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded text-sm font-medium hover:bg-primary-dark"
        >
          <Plus className="w-4 h-4" /> Registrar Pago
        </button>
      </div>

      <div className="bg-white rounded border overflow-hidden">
        {alumnos.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No hay alumnas registradas</div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Nombre</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase">Debe Pagar</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase">Pagó</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase">Falta</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {alumnos.map((alumna) => (
                <tr key={alumna.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{alumna.nombre}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-right">{formatCurrency(alumna.debe_pagar)}</td>
                  <td className="px-6 py-4 text-sm font-medium text-green-700 text-right">{formatCurrency(alumna.pagado)}</td>
                  <td className="px-6 py-4 text-sm font-medium text-red-700 text-right">{formatCurrency(alumna.debe)}</td>
                  <td className="px-6 py-4 text-sm">{getStatusBadge(alumna.estado)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES"
git add frontend/src/components/Finance/PaymentStatusTable.jsx
git commit -m "feat: create PaymentStatusTable component"
```

---

## Task 8: Crear componente ExpenseBreakdown

**Files:**
- Create: `frontend/src/components/Finance/ExpenseBreakdown.jsx`

- [ ] **Step 1: Crear componente**

```javascript
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ExpenseBreakdown({ mes }) {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [categoryDetails, setCategoryDetails] = useState({});

  useEffect(() => {
    fetchExpenses();
  }, [mes]);

  const fetchExpenses = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`/api/finances/gastos-por-categoria?mes_referencia=${mes}`, {
        headers: token ? { 'Authorization': `Bearer ${token}` } : {}
      });

      if (response.ok) {
        const data = await response.json();
        setExpenses(data.categorias || []);
      } else {
        setError('Error al cargar gastos');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(value || 0);
  };

  const toggleExpand = async (categoria) => {
    if (expandedCategory === categoria) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoria);
      // Fetch details for this category if not already cached
      if (!categoryDetails[categoria]) {
        await fetchCategoryDetails(categoria);
      }
    }
  };

  const fetchCategoryDetails = async (categoria) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`/api/finances/transacciones?mes_referencia=${mes}&categoria=${categoria}&tipo=GASTO`, {
        headers: token ? { 'Authorization': `Bearer ${token}` } : {}
      });

      if (response.ok) {
        const data = await response.json();
        setCategoryDetails(prev => ({
          ...prev,
          [categoria]: data.transactions || []
        }));
      }
    } catch (err) {
      console.error('Error fetching category details:', err);
    }
  };

  if (loading) return <div className="text-center py-12">Cargando gastos...</div>;
  if (error) return <div className="bg-red-50 p-4 rounded text-red-700 text-sm">{error}</div>;

  const total = expenses.reduce((sum, e) => sum + e.monto, 0);
  const colors = ['bg-blue-100', 'bg-purple-100', 'bg-pink-100', 'bg-yellow-100', 'bg-green-100', 'bg-red-100'];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Desglose de Gastos por Categoría</h3>

        {/* Gráfico de barras */}
        <div className="space-y-3 mb-6">
          {expenses.length === 0 ? (
            <div className="text-center py-8 text-gray-500">Sin gastos registrados</div>
          ) : (
            expenses.map((expense, idx) => (
              <div key={expense.categoria}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{expense.categoria}</span>
                  <span className="text-sm font-semibold text-gray-900">{formatCurrency(expense.monto)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${colors[idx % colors.length]}`}
                    style={{ width: `${(expense.monto / total) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">{expense.porcentaje}%</div>
              </div>
            ))
          )}
        </div>

        {/* Tabla de categorías */}
        <div className="bg-white rounded border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Categoría</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase">Monto</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase">%</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {expenses.map((expense) => (
                <tr
                  key={expense.categoria}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => toggleExpand(expense.categoria)}
                >
                  <td className="px-6 py-4 text-sm text-gray-900">{expense.categoria}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 text-right">{formatCurrency(expense.monto)}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-right">{expense.porcentaje}%</td>
                </tr>
              ))}
              <tr className="bg-gray-50 font-semibold border-t-2">
                <td className="px-6 py-4 text-sm text-gray-900">TOTAL</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right">{formatCurrency(total)}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES"
git add frontend/src/components/Finance/ExpenseBreakdown.jsx
git commit -m "feat: create ExpenseBreakdown component with chart"
```

---

## Task 9: Crear componente TransactionModal

**Files:**
- Create: `frontend/src/components/Finance/TransactionModal.jsx`

- [ ] **Step 1: Crear componente**

```javascript
import { useState, useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';

export default function TransactionModal({ isOpen, onClose, onSuccess, tipo = null }) {
  const [formData, setFormData] = useState({
    tipo: tipo || 'GASTO',
    categoria: '',
    subcategoria: '',
    monto: '',
    fecha: new Date().toISOString().split('T')[0],
    descripcion: '',
    alumna_id: '',
    instructor_id: '',
    comprobante: ''
  });

  const [categories, setCategories] = useState({ predefinidas: [], custom: [] });
  const [alumnos, setAlumnos] = useState([]);
  const [instructores, setInstructores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    if (isOpen) {
      fetchCategories();
      if (formData.tipo === 'INGRESO_ALUMNA') fetchAlumnos();
      if (formData.tipo === 'PAGO_INSTRUCTOR') fetchInstructores();
    }
  }, [isOpen, formData.tipo]);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch('/api/finances/categorias', {
        headers: token ? { 'Authorization': `Bearer ${token}` } : {}
      });

      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const fetchAlumnos = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch('/api/users?tipo=ALUMNA&estado=ACTIVA', {
        headers: token ? { 'Authorization': `Bearer ${token}` } : {}
      });

      if (response.ok) {
        const data = await response.json();
        setAlumnos(data.users || []);
      }
    } catch (err) {
      console.error('Error fetching alumnos:', err);
    }
  };

  const fetchInstructores = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch('/api/users?tipo=PROFESORA&estado=ACTIVA', {
        headers: token ? { 'Authorization': `Bearer ${token}` } : {}
      });

      if (response.ok) {
        const data = await response.json();
        setInstructores(data.users || []);
      }
    } catch (err) {
      console.error('Error fetching instructores:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const token = localStorage.getItem('accessToken');

      // Obtener mes_referencia del mes actual
      const now = new Date(formData.fecha);
      const mes_referencia = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

      const payload = {
        ...formData,
        monto: parseFloat(formData.monto),
        mes_referencia,
        alumna_id: formData.alumna_id || null,
        instructor_id: formData.instructor_id || null
      };

      const response = await fetch('/api/finances/transacciones', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        onSuccess();
        onClose();
        setFormData({
          tipo: 'GASTO',
          categoria: '',
          subcategoria: '',
          monto: '',
          fecha: new Date().toISOString().split('T')[0],
          descripcion: '',
          alumna_id: '',
          instructor_id: '',
          comprobante: ''
        });
      } else {
        const data = await response.json();
        setError(data.error || 'Error al crear transacción');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCategory = async () => {
    if (!newCategory.trim()) return;

    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch('/api/finances/categorias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ nombre: newCategory })
      });

      if (response.ok) {
        setNewCategory('');
        fetchCategories();
        setFormData({ ...formData, categoria: newCategory });
      }
    } catch (err) {
      setError('Error al crear categoría');
    }
  };

  if (!isOpen) return null;

  const allCategories = [...categories.predefinidas, ...categories.custom];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white">
          <h2 className="text-lg font-bold">Registrar Transacción</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="flex gap-3 bg-red-50 border border-red-200 rounded p-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Tipo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
            <select
              value={formData.tipo}
              onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg bg-white text-sm"
            >
              <option value="GASTO">Gasto</option>
              <option value="INGRESO_ALUMNA">Ingreso (Alumna)</option>
              <option value="PAGO_INSTRUCTOR">Pago (Instructor)</option>
              <option value="INGRESO_OTRO">Otro Ingreso</option>
            </select>
          </div>

          {/* Alumna (si es INGRESO_ALUMNA) */}
          {formData.tipo === 'INGRESO_ALUMNA' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Alumna</label>
              <select
                value={formData.alumna_id}
                onChange={(e) => setFormData({ ...formData, alumna_id: e.target.value })}
                required
                className="w-full px-3 py-2 border rounded-lg bg-white text-sm"
              >
                <option value="">Selecciona una alumna</option>
                {alumnos.map((a) => (
                  <option key={a.id} value={a.id}>{a.nombre}</option>
                ))}
              </select>
            </div>
          )}

          {/* Instructor (si es PAGO_INSTRUCTOR) */}
          {formData.tipo === 'PAGO_INSTRUCTOR' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Instructor</label>
              <select
                value={formData.instructor_id}
                onChange={(e) => setFormData({ ...formData, instructor_id: e.target.value })}
                required
                className="w-full px-3 py-2 border rounded-lg bg-white text-sm"
              >
                <option value="">Selecciona un instructor</option>
                {instructores.map((i) => (
                  <option key={i.id} value={i.id}>{i.nombre}</option>
                ))}
              </select>
            </div>
          )}

          {/* Categoría */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
            <select
              value={formData.categoria}
              onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
              required
              className="w-full px-3 py-2 border rounded-lg bg-white text-sm"
            >
              <option value="">Selecciona una categoría</option>
              {allCategories.map((c) => (
                <option key={c.id} value={c.nombre}>{c.nombre}</option>
              ))}
            </select>
          </div>

          {/* O crear nueva categoría */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Nueva categoría"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-lg text-sm"
            />
            <button
              type="button"
              onClick={handleCreateCategory}
              className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-medium"
            >
              +
            </button>
          </div>

          {/* Monto */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Monto ($)</label>
            <input
              type="number"
              value={formData.monto}
              onChange={(e) => setFormData({ ...formData, monto: e.target.value })}
              required
              step="0.01"
              min="0"
              className="w-full px-3 py-2 border rounded-lg text-sm"
              placeholder="0.00"
            />
          </div>

          {/* Fecha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
            <input
              type="date"
              value={formData.fecha}
              onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
              required
              className="w-full px-3 py-2 border rounded-lg text-sm"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea
              value={formData.descripcion}
              onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
              rows="3"
              className="w-full px-3 py-2 border rounded-lg text-sm"
              placeholder="Notas adicionales..."
            />
          </div>

          {/* Botones */}
          <div className="flex gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark disabled:opacity-50"
            >
              {loading ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES"
git add frontend/src/components/Finance/TransactionModal.jsx
git commit -m "feat: create TransactionModal component with form"
```

---

## Task 10: Crear página FinancePage

**Files:**
- Create: `frontend/src/pages/FinancePage.jsx`

- [ ] **Step 1: Crear componente página**

```javascript
import { useState, useEffect } from 'react';
import { CalendarIcon } from 'lucide-react';
import SummaryCard from '../components/Finance/SummaryCard';
import PaymentStatusTable from '../components/Finance/PaymentStatusTable';
import ExpenseBreakdown from '../components/Finance/ExpenseBreakdown';
import TransactionModal from '../components/Finance/TransactionModal';

export default function FinancePage() {
  const [mes, setMes] = useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
  });

  const [summary, setSummary] = useState({ ingresos: 0, gastos: 0, balance: 0 });
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  useEffect(() => {
    fetchSummary();
  }, [mes]);

  const fetchSummary = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`/api/finances/resumen?mes_referencia=${mes}`, {
        headers: token ? { 'Authorization': `Bearer ${token}` } : {}
      });

      if (response.ok) {
        const data = await response.json();
        setSummary({
          ingresos: data.ingresos_total || 0,
          gastos: data.gastos_total || 0,
          balance: data.balance || 0
        });
      }
    } catch (err) {
      console.error('Error fetching summary:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleMonthChange = (direction) => {
    const [year, month] = mes.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    date.setMonth(date.getMonth() + direction);

    const newMes = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    setMes(newMes);
  };

  const openModal = (tipo) => {
    setModalType(tipo);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Gestión Financiera</h1>
          <p className="text-gray-600 mt-1">Seguimiento de ingresos, gastos y pagos</p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Selector de mes */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleMonthChange(-1)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
            >
              ← Anterior
            </button>

            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg">
              <CalendarIcon className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-900">
                {new Date(`${mes}-01`).toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}
              </span>
            </div>

            <button
              onClick={() => handleMonthChange(1)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
            >
              Siguiente →
            </button>
          </div>

          <button
            onClick={() => openModal(null)}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark"
          >
            + Registrar Transacción
          </button>
        </div>

        {/* KPI Cards */}
        <SummaryCard
          mes={mes}
          ingresos={summary.ingresos}
          gastos={summary.gastos}
          balance={summary.balance}
        />

        {/* Dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Pagos de alumnos */}
          <div className="bg-white rounded-lg shadow p-6">
            <PaymentStatusTable mes={mes} onAddPayment={openModal} />
          </div>

          {/* Gastos por categoría */}
          <div className="bg-white rounded-lg shadow p-6">
            <ExpenseBreakdown mes={mes} />
          </div>
        </div>
      </div>

      {/* Modal */}
      <TransactionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={fetchSummary}
        tipo={modalType}
      />
    </div>
  );
}
```

- [ ] **Step 2: Registrar ruta en App.jsx o router**

Abre `frontend/src/App.jsx` o el archivo de rutas y añade:

```javascript
import FinancePage from './pages/FinancePage';

// En las rutas, añade:
<Route path="/admin/finances" element={<FinancePage />} />
```

También añade un enlace en el menú principal para que sea accesible.

- [ ] **Step 3: Commit**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES"
git add frontend/src/pages/FinancePage.jsx
git commit -m "feat: create FinancePage with dashboard layout"
```

---

## Task 11: Registrar rutas en server.js y menú

**Files:**
- Modify: `frontend/src/pages/AdminPortal.jsx` o menú principal

- [ ] **Step 1: Añadir enlace en el navegador/menú**

En el componente que tenga el menú de admin/DUEÑA, añade:

```javascript
<Link to="/admin/finances" className="...">
  💰 Gestión Financiera
</Link>
```

- [ ] **Step 2: Verify routes in server.js**

Verifica que en `backend/src/server.js` esté registrada la ruta de finances:

```javascript
app.use('/api/finances', financesRoutes);
```

Ya debería estar registrado de Task 5.

- [ ] **Step 3: Commit**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES"
git add frontend/src/pages/AdminPortal.jsx
git commit -m "feat: add finance dashboard link to admin menu"
```

---

## Task 12: Testing Manual

**Verify:**

- [ ] **Step 1: Iniciar servidor backend**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES\backend"
npm start
```

- [ ] **Step 2: Iniciar frontend**

En otra terminal:

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES\frontend"
npm run dev
```

- [ ] **Step 3: Navegar a /admin/finances en el navegador**

- [ ] **Step 4: Probar flujos**

1. Ver dashboard (KPIs deben ser 0)
2. Click "Registrar Transacción"
3. Crear gasto: Tipo=GASTO, Categoría=Servicios, Monto=500
4. Verify que el gasto aparezca en el desglose
5. Verify que balance se actualice
6. Crear ingreso de alumna
7. Verify estado de pagos se actualiza
8. Editar transacción
9. Verify cambios reflejados

- [ ] **Step 5: Commit**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES"
git add -A
git commit -m "test: verify finance system works end-to-end"
```

---

## Task 13: Deploy a Vercel

**Files:**
- No se modifica código, solo deploy

- [ ] **Step 1: Hacer push a GitHub**

```bash
cd "C:\Users\diego.robalo\Documents\CLAUDIA\PILATES"
git push origin main
```

- [ ] **Step 2: Verificar en Vercel**

- [ ] **Step 3: Una vez deployado, probar en producción**

Ir a https://pilates-app-vercel-url/admin/finances

---

# Resumen de Commits

```
✅ feat: add transacciones and categorias tables to schema
✅ feat: create Transaction model with CRUD operations
✅ feat: create Category model
✅ feat: create finances API routes
✅ feat: add finance controller and register routes
✅ feat: create SummaryCard component for KPIs
✅ feat: create PaymentStatusTable component
✅ feat: create ExpenseBreakdown component with chart
✅ feat: create TransactionModal component with form
✅ feat: create FinancePage with dashboard layout
✅ feat: add finance dashboard link to admin menu
✅ test: verify finance system works end-to-end
```
