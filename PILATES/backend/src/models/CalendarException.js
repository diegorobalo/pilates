import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class CalendarException {
  static async create(data) {
    const id = uuidv4();
    const { fecha, tipo, descripcion, afecta_suscripciones = 1 } = data;

    if (!fecha || !tipo || !descripcion) {
      throw new Error('Missing required fields: fecha, tipo, descripcion');
    }

    try {
      await runAsync(
        `INSERT INTO calendar_excepciones (id, fecha, tipo, descripcion, afecta_suscripciones)
        VALUES (?, ?, ?, ?, ?)`,
        [id, fecha, tipo, descripcion, afecta_suscripciones]
      );
      return await CalendarException.findById(id);
    } catch (error) {
      throw new Error(`Error creating calendar exception: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM calendar_excepciones WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding calendar exception: ${error.message}`);
    }
  }

  static async findByDate(fecha) {
    try {
      return await getAsync('SELECT * FROM calendar_excepciones WHERE fecha = ?', [fecha]);
    } catch (error) {
      throw new Error(`Error finding calendar exception by date: ${error.message}`);
    }
  }

  static async findAll(filters = {}) {
    try {
      let query = 'SELECT * FROM calendar_excepciones WHERE 1=1';
      const params = [];

      if (filters.tipo) {
        query += ' AND tipo = ?';
        params.push(filters.tipo);
      }
      if (filters.fecha_desde) {
        query += ' AND fecha >= ?';
        params.push(filters.fecha_desde);
      }
      if (filters.fecha_hasta) {
        query += ' AND fecha <= ?';
        params.push(filters.fecha_hasta);
      }

      query += ' ORDER BY fecha ASC';
      return await allAsync(query, params);
    } catch (error) {
      throw new Error(`Error finding calendar exceptions: ${error.message}`);
    }
  }

  static async update(id, data) {
    try {
      const exception = await CalendarException.findById(id);
      if (!exception) throw new Error('Calendar exception not found');

      const { tipo = exception.tipo, descripcion = exception.descripcion, afecta_suscripciones = exception.afecta_suscripciones } = data;

      await runAsync(
        `UPDATE calendar_excepciones SET tipo = ?, descripcion = ?, afecta_suscripciones = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
        [tipo, descripcion, afecta_suscripciones, id]
      );

      return await CalendarException.findById(id);
    } catch (error) {
      throw new Error(`Error updating calendar exception: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await runAsync('DELETE FROM calendar_excepciones WHERE id = ?', [id]);
      return result.changes > 0;
    } catch (error) {
      throw new Error(`Error deleting calendar exception: ${error.message}`);
    }
  }

  static async isClosed(fecha) {
    try {
      const exception = await CalendarException.findByDate(fecha);
      return exception && (exception.tipo === 'CERRADO' || exception.tipo === 'FERIADO');
    } catch (error) {
      return false;
    }
  }
}

export default CalendarException;
