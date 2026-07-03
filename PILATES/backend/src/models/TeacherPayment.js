import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class TeacherPayment {
  static async create(data) {
    const id = uuidv4();
    const {
      profesora_id,
      monto,
      moneda = 'ARS',
      fecha_pago,
      mes_referencia,
      metodo,
      registrada_por,
      notas = null
    } = data;

    if (!profesora_id || !monto || !fecha_pago || !mes_referencia || !metodo || !registrada_por) {
      throw new Error('Missing required fields');
    }

    try {
      await runAsync(
        `INSERT INTO pagos_profesores (
          id, profesora_id, monto, moneda, fecha_pago, mes_referencia, metodo, registrada_por, notas
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [id, profesora_id, monto, moneda, fecha_pago, mes_referencia, metodo, registrada_por, notas]
      );

      return await TeacherPayment.findById(id);
    } catch (error) {
      throw new Error(`Error creating teacher payment: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM pagos_profesores WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding teacher payment: ${error.message}`);
    }
  }

  static async findByTeacher(profesora_id, filters = {}) {
    try {
      let query = 'SELECT * FROM pagos_profesores WHERE profesora_id = ?';
      const params = [profesora_id];

      if (filters.mes_referencia) {
        query += ' AND mes_referencia = ?';
        params.push(filters.mes_referencia);
      }
      if (filters.fecha_desde) {
        query += ' AND fecha_pago >= ?';
        params.push(filters.fecha_desde);
      }
      if (filters.fecha_hasta) {
        query += ' AND fecha_pago <= ?';
        params.push(filters.fecha_hasta);
      }

      query += ' ORDER BY fecha_pago DESC';
      return await allAsync(query, params);
    } catch (error) {
      throw new Error(`Error finding teacher payments: ${error.message}`);
    }
  }

  static async findAll(filters = {}) {
    try {
      let query = 'SELECT * FROM pagos_profesores WHERE 1=1';
      const params = [];

      if (filters.mes_referencia) {
        query += ' AND mes_referencia = ?';
        params.push(filters.mes_referencia);
      }
      if (filters.fecha_desde) {
        query += ' AND fecha_pago >= ?';
        params.push(filters.fecha_desde);
      }
      if (filters.fecha_hasta) {
        query += ' AND fecha_pago <= ?';
        params.push(filters.fecha_hasta);
      }

      query += ' ORDER BY fecha_pago DESC';
      return await allAsync(query, params);
    } catch (error) {
      throw new Error(`Error finding all teacher payments: ${error.message}`);
    }
  }

  static async update(id, data) {
    try {
      const payment = await TeacherPayment.findById(id);
      if (!payment) throw new Error('Payment not found');

      const {
        monto = payment.monto,
        fecha_pago = payment.fecha_pago,
        metodo = payment.metodo,
        notas = payment.notas
      } = data;

      await runAsync(
        `UPDATE pagos_profesores SET
          monto = ?, fecha_pago = ?, metodo = ?, notas = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?`,
        [monto, fecha_pago, metodo, notas, id]
      );

      return await TeacherPayment.findById(id);
    } catch (error) {
      throw new Error(`Error updating teacher payment: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await runAsync('DELETE FROM pagos_profesores WHERE id = ?', [id]);
      return result.changes > 0;
    } catch (error) {
      throw new Error(`Error deleting teacher payment: ${error.message}`);
    }
  }
}

export default TeacherPayment;
