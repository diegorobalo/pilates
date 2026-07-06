import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class Schedule {
  /**
   * Create a new class schedule
   * @param {Object} data - Schedule data
   * @param {string} data.fecha - Date (YYYY-MM-DD format)
   * @param {string} data.hora - Time (HH:MM format)
   * @param {number} [data.capacidad] - Capacity (default: 6)
   * @param {string} [data.estado] - Status: ABIERTA, CERRADA, CANCELADA (default: ABIERTA)
   * @param {string} data.creada_por - User ID who created this schedule
   * @returns {Promise<Object>} Created schedule object with id
   */
  static async create(data) {
    const id = uuidv4();
    const {
      fecha,
      hora,
      capacidad = 6,
      estado = 'ABIERTA',
      creada_por
    } = data;

    // Validate date format (YYYY-MM-DD)
    if (!fecha || !/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
      throw new Error('Invalid fecha format: must be YYYY-MM-DD');
    }

    // Validate time format (HH:MM)
    if (!hora || !/^\d{2}:\d{2}$/.test(hora)) {
      throw new Error('Invalid hora format: must be HH:MM');
    }

    try {
      await runAsync(
        `INSERT INTO horarios_clases (
          id, fecha, hora, capacidad, estado, creada_por
        ) VALUES (?, ?, ?, ?, ?, ?)`,
        [id, fecha, hora, capacidad, estado, creada_por]
      );

      return await Schedule.findById(id);
    } catch (error) {
      if (error.message.includes('Invalid fecha format') || error.message.includes('Invalid hora format')) {
        throw error;
      }
      throw new Error(`Error creating schedule: ${error.message}`);
    }
  }

  /**
   * Find schedule by ID
   * @param {string} id - Schedule ID
   * @returns {Promise<Object|null>} Schedule object or null if not found
   */
  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM horarios_clases WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding schedule by ID: ${error.message}`);
    }
  }

  /**
   * Find all schedules for a specific date
   * @param {string} fecha - Date (YYYY-MM-DD format)
   * @returns {Promise<Array>} Array of schedule objects for that date
   */
  static async findByDate(fecha) {
    try {
      return await allAsync(
        'SELECT * FROM horarios_clases WHERE fecha = ? ORDER BY hora ASC',
        [fecha]
      );
    } catch (error) {
      throw new Error(`Error finding schedules by date: ${error.message}`);
    }
  }


  /**
   * Find all schedules
   * @returns {Promise<Array>} Array of all schedule objects
   */
  static async findAll() {
    try {
      return await allAsync(
        'SELECT * FROM horarios_clases ORDER BY fecha ASC, hora ASC',
        []
      );
    } catch (error) {
      throw new Error(`Error finding all schedules: ${error.message}`);
    }
  }

  /**
   * Update a schedule
   * @param {string} id - Schedule ID
   * @param {Object} data - Data to update
   * @returns {Promise<Object>} Updated schedule object
   */
  static async update(id, data) {
    try {
      const schedule = await Schedule.findById(id);
      if (!schedule) {
        throw new Error('Schedule not found');
      }

      const {
        fecha = schedule.fecha,
        hora = schedule.hora,
        capacidad = schedule.capacidad,
        estado = schedule.estado
      } = data;

      await runAsync(
        `UPDATE horarios_clases SET
          fecha = ?, hora = ?, capacidad = ?, estado = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?`,
        [fecha, hora, capacidad, estado, id]
      );

      return await Schedule.findById(id);
    } catch (error) {
      if (error.message === 'Schedule not found') {
        throw error;
      }
      throw new Error(`Error updating schedule: ${error.message}`);
    }
  }

  /**
   * Get available bed numbers for a specific schedule
   * Returns array of available bed numbers (1-6) that haven't been reserved yet
   * @param {string} horarioId - Schedule ID
   * @returns {Promise<Array>} Array of available bed numbers
   */
  static async getAvailableBeds(horarioId) {
    try {
      const schedule = await Schedule.findById(horarioId);
      if (!schedule) {
        throw new Error('Schedule not found');
      }

      // Get all reserved bed numbers for this schedule
      const reservedBeds = await allAsync(
        `SELECT cama_numero FROM reservas
         WHERE horario_id = ? AND estado IN ('PENDIENTE', 'CONFIRMADA')`,
        [horarioId]
      );

      const reservedNumbers = reservedBeds.map(r => r.cama_numero);

      // All available beds are those not in the reserved list
      const allBeds = Array.from({ length: schedule.capacidad }, (_, i) => i + 1);
      const availableBeds = allBeds.filter(bed => !reservedNumbers.includes(bed));

      return availableBeds;
    } catch (error) {
      throw new Error(`Error getting available beds: ${error.message}`);
    }
  }

  /**
   * Delete a schedule
   * @param {string} id - Schedule ID
   * @returns {Promise<boolean>} True if deletion was successful
   */
  static async delete(id) {
    try {
      const schedule = await Schedule.findById(id);
      if (!schedule) {
        throw new Error('Schedule not found');
      }

      const result = await runAsync('DELETE FROM horarios_clases WHERE id = ?', [id]);
      return result.changes > 0;
    } catch (error) {
      throw new Error(`Error deleting schedule: ${error.message}`);
    }
  }

  /**
   * Find schedules by date range
   * @param {string} fecha_desde - Start date (YYYY-MM-DD)
   * @param {string} fecha_hasta - End date (YYYY-MM-DD)
   * @returns {Promise<Array>} Array of schedule objects
   */
  static async findByDateRange(fecha_desde, fecha_hasta) {
    try {
      return await allAsync(
        `SELECT h.*,
                u.nombre as profesora_nombre,
                u.apellido as profesora_apellido
         FROM horarios_clases h
         LEFT JOIN users u ON h.profesora_asignada = u.id
         WHERE h.fecha BETWEEN ? AND ?
         ORDER BY h.fecha ASC, h.hora ASC`,
        [fecha_desde, fecha_hasta]
      );
    } catch (error) {
      throw new Error(`Error finding schedules by date range: ${error.message}`);
    }
  }

  /**
   * Find schedule by date and time
   * @param {string} fecha - Date (YYYY-MM-DD)
   * @param {string} hora - Time (HH:MM)
   * @returns {Promise<Object|null>} Schedule object or null
   */
  static async findByDateAndTime(fecha, hora) {
    try {
      return await getAsync(
        `SELECT * FROM horarios_clases WHERE fecha = ? AND hora = ?`,
        [fecha, hora]
      );
    } catch (error) {
      throw new Error(`Error finding schedule: ${error.message}`);
    }
  }

  /**
   * Update schedule (including profesora_asignada and titulo)
   * @param {string} id - Schedule ID
   * @param {Object} data - Data to update
   * @returns {Promise<Object>} Updated schedule object
   */
  static async update(id, data) {
    try {
      const schedule = await Schedule.findById(id);
      if (!schedule) {
        throw new Error('Schedule not found');
      }

      const {
        estado = schedule.estado,
        profesora_asignada = schedule.profesora_asignada,
        titulo = schedule.titulo
      } = data;

      await runAsync(
        `UPDATE horarios_clases SET
          estado = ?, profesora_asignada = ?, titulo = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?`,
        [estado, profesora_asignada, titulo, id]
      );

      return await Schedule.findById(id);
    } catch (error) {
      throw new Error(`Error updating schedule: ${error.message}`);
    }
  }
}

export default Schedule;
