import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class Attendance {
  /**
   * Mark student as present for a class
   * @param {Object} data - Attendance data
   * @param {string} data.alumna_id - Student user ID
   * @param {string} data.horario_id - Schedule ID
   * @param {string} data.registrada_por - User ID who registered the attendance
   * @returns {Promise<Object>} Created attendance record
   */
  static async markPresent(data) {
    const {
      alumna_id,
      horario_id,
      registrada_por
    } = data;

    return await Attendance._recordAttendance({
      alumna_id,
      horario_id,
      presente: true,
      registrada_por
    });
  }

  /**
   * Mark student as absent for a class
   * @param {Object} data - Attendance data
   * @param {string} data.alumna_id - Student user ID
   * @param {string} data.horario_id - Schedule ID
   * @param {string} data.registrada_por - User ID who registered the attendance
   * @returns {Promise<Object>} Created attendance record
   */
  static async markAbsent(data) {
    const {
      alumna_id,
      horario_id,
      registrada_por
    } = data;

    return await Attendance._recordAttendance({
      alumna_id,
      horario_id,
      presente: false,
      registrada_por
    });
  }

  /**
   * Internal method to record attendance (present or absent)
   * @private
   * @param {Object} data - Attendance data
   * @returns {Promise<Object>} Created or updated attendance record
   */
  static async _recordAttendance(data) {
    const id = uuidv4();
    const {
      alumna_id,
      horario_id,
      presente,
      registrada_por
    } = data;

    try {
      // Check if attendance already exists for this alumna/horario combination
      const existing = await getAsync(
        'SELECT * FROM asistencia WHERE alumna_id = ? AND horario_id = ?',
        [alumna_id, horario_id]
      );

      if (existing) {
        // Update existing record
        await runAsync(
          'UPDATE asistencia SET presente = ?, registrada_por = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
          [presente ? 1 : 0, registrada_por, existing.id]
        );
        return await Attendance.findById(existing.id);
      } else {
        // Create new record
        await runAsync(
          `INSERT INTO asistencia (
            id, alumna_id, horario_id, presente, registrada_por
          ) VALUES (?, ?, ?, ?, ?)`,
          [id, alumna_id, horario_id, presente ? 1 : 0, registrada_por]
        );
        return await Attendance.findById(id);
      }
    } catch (error) {
      throw new Error(`Error recording attendance: ${error.message}`);
    }
  }

  /**
   * Find attendance record by ID
   * @param {string} id - Attendance record ID
   * @returns {Promise<Object|null>} Attendance object or null if not found
   */
  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM asistencia WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding attendance by ID: ${error.message}`);
    }
  }

  /**
   * Find all attendance records for a student
   * @param {string} alumnaId - Student user ID
   * @returns {Promise<Array>} Array of attendance records for that student
   */
  static async findByAlumna(alumnaId) {
    try {
      return await allAsync(
        'SELECT * FROM asistencia WHERE alumna_id = ? ORDER BY fecha_registro DESC',
        [alumnaId]
      );
    } catch (error) {
      throw new Error(`Error finding attendance by alumna: ${error.message}`);
    }
  }

  /**
   * Find all attendance records for a schedule
   * @param {string} horarioId - Schedule ID
   * @returns {Promise<Array>} Array of attendance records for that schedule
   */
  static async findBySchedule(horarioId) {
    try {
      return await allAsync(
        'SELECT * FROM asistencia WHERE horario_id = ? ORDER BY fecha_registro DESC',
        [horarioId]
      );
    } catch (error) {
      throw new Error(`Error finding attendance by schedule: ${error.message}`);
    }
  }

  /**
   * Count how many classes a student attended in a date range
   * @param {string} alumnaId - Student user ID
   * @param {string} monthStart - Start date (YYYY-MM-DD format)
   * @param {string} monthEnd - End date (YYYY-MM-DD format)
   * @returns {Promise<number>} Count of attended classes
   */
  static async countPresent(alumnaId, monthStart, monthEnd) {
    try {
      const result = await getAsync(
        `SELECT COUNT(*) as count FROM asistencia
         WHERE alumna_id = ? AND presente = 1
         AND fecha_registro BETWEEN ? AND ?`,
        [alumnaId, monthStart, monthEnd]
      );

      return result ? result.count : 0;
    } catch (error) {
      throw new Error(`Error counting present attendance: ${error.message}`);
    }
  }
}

export default Attendance;
