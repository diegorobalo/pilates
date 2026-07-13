import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class Transaction {
  /**
   * Create a new transaction record
   * @param {Object} data - Transaction data
   * @param {string} data.tipo - Transaction type: INGRESO_ALUMNA, GASTO, PAGO_INSTRUCTOR, INGRESO_OTRO
   * @param {string} data.categoria - Category name
   * @param {string} [data.subcategoria] - Optional subcategory
   * @param {number} data.monto - Transaction amount
   * @param {string} data.fecha - Transaction date (ISO format)
   * @param {string} data.mes_referencia - Reference month (e.g., "2024-01")
   * @param {string} [data.alumna_id] - Optional student user ID
   * @param {string} [data.instructor_id] - Optional instructor user ID
   * @param {string} [data.descripcion] - Optional description
   * @param {string} data.registrada_por - User ID who registered the transaction
   * @param {string} [data.comprobante] - Optional receipt/proof
   * @returns {Promise<Object>} Created transaction object with id
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
      descripcion = null,
      registrada_por,
      comprobante = null
    } = data;

    // Validate required fields
    if (!tipo || !categoria || !monto || !fecha || !mes_referencia || !registrada_por) {
      throw new Error('Missing required fields: tipo, categoria, monto, fecha, mes_referencia, registrada_por');
    }

    // Validate monto is greater than 0
    if (monto <= 0) {
      throw new Error('Invalid monto: must be greater than 0');
    }

    try {
      await runAsync(
        `INSERT INTO transacciones (
          id, tipo, categoria, subcategoria, monto, fecha, mes_referencia,
          alumna_id, instructor_id, descripcion, registrada_por, comprobante
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          id, tipo, categoria, subcategoria, monto, fecha, mes_referencia,
          alumna_id, instructor_id, descripcion, registrada_por, comprobante
        ]
      );

      return await Transaction.findById(id);
    } catch (error) {
      if (error.message.includes('Missing required fields') || error.message.includes('Invalid monto')) {
        throw error;
      }
      throw new Error(`Error creating transaction: ${error.message}`);
    }
  }

  /**
   * Find transaction by ID
   * @param {string} id - Transaction ID
   * @returns {Promise<Object|null>} Transaction object or null if not found
   */
  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM transacciones WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding transaction by ID: ${error.message}`);
    }
  }

  /**
   * Find all transactions with optional filters
   * @param {Object} filters - Filter options
   * @param {string} [filters.mes_referencia] - Filter by reference month
   * @param {string} [filters.tipo] - Filter by transaction type
   * @param {string} [filters.categoria] - Filter by category
   * @param {string} [filters.alumna_id] - Filter by student ID
   * @param {string} [filters.instructor_id] - Filter by instructor ID
   * @param {string} [filters.fecha_desde] - Filter from date (ISO format)
   * @param {string} [filters.fecha_hasta] - Filter until date (ISO format)
   * @returns {Promise<Array>} Array of transaction objects
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

      if (filters.fecha_desde) {
        query += ' AND fecha >= ?';
        params.push(filters.fecha_desde);
      }

      if (filters.fecha_hasta) {
        query += ' AND fecha <= ?';
        params.push(filters.fecha_hasta);
      }

      query += ' ORDER BY fecha DESC, created_at DESC';

      return await allAsync(query, params);
    } catch (error) {
      throw new Error(`Error finding transactions: ${error.message}`);
    }
  }

  /**
   * Update a transaction
   * @param {string} id - Transaction ID
   * @param {Object} data - Fields to update
   * @returns {Promise<Object>} Updated transaction object
   */
  static async update(id, data) {
    try {
      const transaction = await Transaction.findById(id);
      if (!transaction) {
        throw new Error('Transaction not found');
      }

      // Validate monto if provided
      if (data.monto !== undefined && data.monto <= 0) {
        throw new Error('Invalid monto: must be greater than 0');
      }

      const updateFields = [];
      const updateParams = [];

      for (const [key, value] of Object.entries(data)) {
        if (key !== 'id' && key !== 'created_at') {
          updateFields.push(`${key} = ?`);
          updateParams.push(value);
        }
      }

      if (updateFields.length === 0) {
        return transaction;
      }

      updateFields.push('updated_at = CURRENT_TIMESTAMP');
      updateParams.push(id);

      const query = `UPDATE transacciones SET ${updateFields.join(', ')} WHERE id = ?`;
      await runAsync(query, updateParams);

      return await Transaction.findById(id);
    } catch (error) {
      if (error.message === 'Transaction not found' || error.message.includes('Invalid monto')) {
        throw error;
      }
      throw new Error(`Error updating transaction: ${error.message}`);
    }
  }

  /**
   * Soft delete a transaction (mark as CANCELADA)
   * @param {string} id - Transaction ID
   * @returns {Promise<boolean>} True if deletion was successful
   */
  static async delete(id) {
    try {
      const transaction = await Transaction.findById(id);
      if (!transaction) {
        throw new Error('Transaction not found');
      }

      await runAsync(
        'UPDATE transacciones SET estado = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        ['CANCELADA', id]
      );
      return true;
    } catch (error) {
      if (error.message === 'Transaction not found') {
        throw error;
      }
      throw new Error(`Error deleting transaction: ${error.message}`);
    }
  }

  /**
   * Get monthly summary for a specific month
   * Returns object with total income, expenses, instructor payments, and balance
   * @param {string} mes_referencia - Reference month (e.g., "2024-01")
   * @returns {Promise<Object>} Monthly summary with: mes, ingresos_total, gastos_total, pagos_instructores, balance
   */
  static async getMonthlySummary(mes_referencia) {
    try {
      // Get ingresos_alumna total
      const ingresosAlumna = await getAsync(
        `SELECT SUM(monto) as total FROM transacciones
         WHERE mes_referencia = ? AND tipo = 'INGRESO_ALUMNA' AND estado != 'CANCELADA'`,
        [mes_referencia]
      );

      // Get ingreso_otro total
      const ingresosOtro = await getAsync(
        `SELECT SUM(monto) as total FROM transacciones
         WHERE mes_referencia = ? AND tipo = 'INGRESO_OTRO' AND estado != 'CANCELADA'`,
        [mes_referencia]
      );

      // Get gastos total
      const gastos = await getAsync(
        `SELECT SUM(monto) as total FROM transacciones
         WHERE mes_referencia = ? AND tipo = 'GASTO' AND estado != 'CANCELADA'`,
        [mes_referencia]
      );

      // Get pago_instructores total
      const pagosInstructores = await getAsync(
        `SELECT SUM(monto) as total FROM transacciones
         WHERE mes_referencia = ? AND tipo = 'PAGO_INSTRUCTOR' AND estado != 'CANCELADA'`,
        [mes_referencia]
      );

      const ingresosTotal = (ingresosAlumna?.total || 0) + (ingresosOtro?.total || 0);
      const gastosTotal = (gastos?.total || 0) + (pagosInstructores?.total || 0);
      const balance = ingresosTotal - gastosTotal;

      return {
        mes: mes_referencia,
        ingresos_total: parseFloat(ingresosTotal) || 0,
        gastos_total: parseFloat(gastosTotal) || 0,
        pagos_instructores: parseFloat(pagosInstructores?.total) || 0,
        balance: parseFloat(balance) || 0
      };
    } catch (error) {
      throw new Error(`Error getting monthly summary: ${error.message}`);
    }
  }

  /**
   * Get expenses grouped by category for a specific month
   * Only includes transactions with tipo='GASTO'
   * @param {string} mes_referencia - Reference month (e.g., "2024-01")
   * @returns {Promise<Array>} Array of objects with: categoria, monto, cantidad
   */
  static async getExpensesByCategory(mes_referencia) {
    try {
      const results = await allAsync(
        `SELECT
          categoria,
          SUM(monto) as monto,
          COUNT(*) as cantidad
         FROM transacciones
         WHERE mes_referencia = ? AND tipo = 'GASTO' AND estado != 'CANCELADA'
         GROUP BY categoria
         ORDER BY monto DESC`,
        [mes_referencia]
      );

      return results.map(row => ({
        categoria: row.categoria,
        monto: parseFloat(row.monto) || 0,
        cantidad: row.cantidad || 0
      }));
    } catch (error) {
      throw new Error(`Error getting expenses by category: ${error.message}`);
    }
  }
}

export default Transaction;
