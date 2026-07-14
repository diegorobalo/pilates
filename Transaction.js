import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class Transaction {
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
      comprobante = null,
      estado = 'REGISTRADA'
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
          alumna_id, instructor_id, descripcion, registrada_por, comprobante, estado, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
        [
          id, tipo, categoria, subcategoria, monto, fecha, mes_referencia,
          alumna_id, instructor_id, descripcion, registrada_por, comprobante, estado
        ]
      );

      return await Transaction.findById(id);
    } catch (error) {
      throw new Error(`Error creating transaction: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM transacciones WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding transaction by ID: ${error.message}`);
    }
  }

  static async findAll(filters = {}) {
    try {
      let query = 'SELECT * FROM transacciones WHERE 1=1';
      const params = [];

      if (filters.tipo) {
        query += ' AND tipo = ?';
        params.push(filters.tipo);
      }
      if (filters.categoria) {
        query += ' AND categoria = ?';
        params.push(filters.categoria);
      }
      if (filters.mes_referencia) {
        query += ' AND mes_referencia = ?';
        params.push(filters.mes_referencia);
      }
      if (filters.alumna_id) {
        query += ' AND alumna_id = ?';
        params.push(filters.alumna_id);
      }
      if (filters.instructor_id) {
        query += ' AND instructor_id = ?';
        params.push(filters.instructor_id);
      }
      if (filters.estado) {
        query += ' AND estado = ?';
        params.push(filters.estado);
      }
      if (filters.fecha_desde) {
        query += ' AND fecha >= ?';
        params.push(filters.fecha_desde);
      }
      if (filters.fecha_hasta) {
        query += ' AND fecha <= ?';
        params.push(filters.fecha_hasta);
      }

      query += ' ORDER BY fecha DESC';
      return await allAsync(query, params);
    } catch (error) {
      throw new Error(`Error finding transactions: ${error.message}`);
    }
  }

  static async getMonthlySummary(mes_referencia) {
    try {
      const transactions = await allAsync(
        `SELECT tipo, SUM(monto) as total FROM transacciones
         WHERE mes_referencia = ? GROUP BY tipo`,
        [mes_referencia]
      );

      const summary = {
        mes: mes_referencia,
        por_tipo: {}
      };

      transactions.forEach(t => {
        summary.por_tipo[t.tipo] = parseFloat(t.total) || 0;
      });

      return summary;
    } catch (error) {
      throw new Error(`Error getting monthly summary: ${error.message}`);
    }
  }

  static async getExpensesByCategory(mes_referencia) {
    try {
      return await allAsync(
        `SELECT categoria, SUM(monto) as total FROM transacciones
         WHERE mes_referencia = ? AND tipo = 'GASTO'
         GROUP BY categoria ORDER BY total DESC`,
        [mes_referencia]
      );
    } catch (error) {
      throw new Error(`Error getting expenses by category: ${error.message}`);
    }
  }

  static async update(id, data) {
    try {
      const transaction = await Transaction.findById(id);
      if (!transaction) {
        throw new Error('Transaction not found');
      }

      const {
        tipo = transaction.tipo,
        categoria = transaction.categoria,
        subcategoria = transaction.subcategoria,
        monto = transaction.monto,
        fecha = transaction.fecha,
        mes_referencia = transaction.mes_referencia,
        alumna_id = transaction.alumna_id,
        instructor_id = transaction.instructor_id,
        descripcion = transaction.descripcion,
        comprobante = transaction.comprobante,
        estado = transaction.estado
      } = data;

      if (monto <= 0) {
        throw new Error('Monto must be greater than 0');
      }

      await runAsync(
        `UPDATE transacciones SET
          tipo = ?, categoria = ?, subcategoria = ?, monto = ?, fecha = ?,
          mes_referencia = ?, alumna_id = ?, instructor_id = ?, descripcion = ?,
          comprobante = ?, estado = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?`,
        [
          tipo, categoria, subcategoria, monto, fecha,
          mes_referencia, alumna_id, instructor_id, descripcion,
          comprobante, estado, id
        ]
      );

      return await Transaction.findById(id);
    } catch (error) {
      throw new Error(`Error updating transaction: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await runAsync('DELETE FROM transacciones WHERE id = ?', [id]);
      return result.changes > 0;
    } catch (error) {
      throw new Error(`Error deleting transaction: ${error.message}`);
    }
  }
}

export default Transaction;
