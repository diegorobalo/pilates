import express from 'express';
import { authMiddleware, requireRole } from '../middleware/auth.js';
import {
  // Transacciones
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
  // Reportes
  getMonthlySummary,
  getExpensesByCategory,
  getStudentPaymentStatus,
  getInstructorPaymentStatus,
  // Categorias
  createCategory,
  getCategories,
  deleteCategory
} from '../controllers/financeController.js';

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);
router.use(requireRole(['DUEÑA', 'ADMIN']));

/**
 * TRANSACCIONES ENDPOINTS
 */

/**
 * POST /api/finances/transacciones
 * Create a new transaction
 * Body: { concepto: string, cantidad: number, categoria_id: number, fecha: string, descripcion?: string, tipo: 'ingreso' | 'egreso' }
 * Response: { message, transaccion }
 */
router.post('/transacciones', createTransaction);

/**
 * GET /api/finances/transacciones
 * Get all transactions with optional filters
 * Query: { mes_referencia?: string, categoria_id?: number, tipo?: 'ingreso' | 'egreso', page?: number, limit?: number }
 * Response: { transacciones: [], total: number, page: number, limit: number }
 */
router.get('/transacciones', getTransactions);

/**
 * PUT /api/finances/transacciones/:id
 * Update a transaction
 * Params: { id: number }
 * Body: { concepto?: string, cantidad?: number, categoria_id?: number, fecha?: string, descripcion?: string, tipo?: 'ingreso' | 'egreso' }
 * Response: { message, transaccion }
 */
router.put('/transacciones/:id', updateTransaction);

/**
 * DELETE /api/finances/transacciones/:id
 * Delete a transaction
 * Params: { id: number }
 * Response: { message }
 */
router.delete('/transacciones/:id', deleteTransaction);

/**
 * REPORTES ENDPOINTS
 */

/**
 * GET /api/finances/resumen
 * Get monthly summary report
 * Query: { mes_referencia: string (YYYY-MM) }
 * Response: { mes: string, resumen: { ingresos_totales: number, egresos_totales: number, saldo: number, detalles: {} } }
 */
router.get('/resumen', getMonthlySummary);

/**
 * GET /api/finances/gastos-por-categoria
 * Get expenses breakdown by category
 * Query: { mes_referencia: string (YYYY-MM) }
 * Response: { mes: string, categorias: [{ categoria_id: number, nombre: string, total: number, porcentaje: number }] }
 */
router.get('/gastos-por-categoria', getExpensesByCategory);

/**
 * GET /api/finances/pagos-alumnos
 * Get student payment status report
 * Query: { mes_referencia: string (YYYY-MM) }
 * Response: { mes: string, estudiantes: [{ usuario_id: number, nombre: string, estado_pago: 'pagado' | 'pendiente' | 'vencido', monto: number }] }
 */
router.get('/pagos-alumnos', getStudentPaymentStatus);

/**
 * GET /api/finances/pagos-instructores
 * Get instructor payment status report
 * Query: { mes_referencia: string (YYYY-MM) }
 * Response: { mes: string, instructores: [{ usuario_id: number, nombre: string, estado_pago: 'pagado' | 'pendiente', monto: number }] }
 */
router.get('/pagos-instructores', getInstructorPaymentStatus);

/**
 * CATEGORIAS ENDPOINTS
 */

/**
 * POST /api/finances/categorias
 * Create a new expense category
 * Body: { nombre: string, descripcion?: string, color?: string }
 * Response: { message, categoria }
 */
router.post('/categorias', createCategory);

/**
 * GET /api/finances/categorias
 * Get all expense categories
 * Response: { categorias: [{ id: number, nombre: string, descripcion?: string, color?: string }] }
 */
router.get('/categorias', getCategories);

/**
 * DELETE /api/finances/categorias/:id
 * Delete an expense category
 * Params: { id: number }
 * Response: { message }
 */
router.delete('/categorias/:id', deleteCategory);

export default router;
