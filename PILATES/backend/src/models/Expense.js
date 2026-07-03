import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class Expense {
  static async create(data) {
    const id = uuidv4();
    const {
      descripcion,
      monto,
      moneda = 'ARS',
      categoria,
      fecha_gasto,
      registrada_por,
      notas = null
    } = data;

    if (!descripcion || !monto || !categoria || !fecha_gasto || !registrada_por) {
      throw new Error('Missing required fields: descripcion, monto, categoria, fecha_gasto, registrada_por');
    }

    try {
      await runAsync(
        `INSERT INTO gastos (
          id, descripcion, monto, moneda, categoria, fecha_gasto, registrada_por, notas
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [id, descripcion, monto, moneda, categoria, fecha_gasto, registrada_por, notas]
      );

      return await Expense.findById(id);
    } catch (error) {
      throw new Error(`Error creating expense: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM gastos WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding expense by ID: ${error.message}`);
    }
  }

  static async findAll(filters = {}) {
    try {
      let query = 'SELECT * FROM gastos WHERE 1=1';
      const params = [];

      if (filters.categoria) {
        query += ' AND categoria = ?';
        params.push(filters.categoria);
      }
      if (filters.fecha_desde) {
        query += ' AND fecha_gasto >= ?';
        params.push(filters.fecha_desde);
      }
      if (filters.fecha_hasta) {
        query += ' AND fecha_gasto <= ?';
        params.push(filters.fecha_hasta);
      }

      query += ' ORDER BY fecha_gasto DESC';
      return await allAsync(query, params);
    } catch (error) {
      throw new Error(`Error finding expenses: ${error.message}`);
    }
  }

  static async update(id, data) {
    try {
      const expense = await Expense.findById(id);
      if (!expense) throw new Error('Expense not found');

      const {
        descripcion = expense.descripcion,
        monto = expense.monto,
        categoria = expense.categoria,
        fecha_gasto = expense.fecha_gasto,
        notas = expense.notas
      } = data;

      await runAsync(
        `UPDATE gastos SET
          descripcion = ?, monto = ?, categoria = ?, fecha_gasto = ?, notas = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?`,
        [descripcion, monto, categoria, fecha_gasto, notas, id]
      );

      return await Expense.findById(id);
    } catch (error) {
      throw new Error(`Error updating expense: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await runAsync('DELETE FROM gastos WHERE id = ?', [id]);
      return result.changes > 0;
    } catch (error) {
      throw new Error(`Error deleting expense: ${error.message}`);
    }
  }
}

export default Expense;
