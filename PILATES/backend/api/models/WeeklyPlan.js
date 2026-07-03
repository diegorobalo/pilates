import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class WeeklyPlan {
  /**
   * Create a new weekly plan for an alumna
   * @param {Object} data - Plan data
   * @param {string} data.alumna_id - ID of the student (alumna)
   * @param {number} data.dia_semana - Day of week (0=Sunday, 1=Monday, ..., 6=Saturday)
   * @param {string} data.hora - Time in HH:MM format
   * @param {boolean} [data.activo] - Whether the plan is active (default: true)
   * @returns {Promise<Object>} Created plan object with id
   */
  static async create(data) {
    const id = uuidv4();
    const {
      alumna_id,
      dia_semana,
      hora,
      activo = true
    } = data;

    // Validate dia_semana (0-6)
    if (dia_semana == null || dia_semana < 0 || dia_semana > 6) {
      throw new Error('Invalid dia_semana: must be 0-6 (0=Sunday, 6=Saturday)');
    }

    // Validate hora format (HH:MM)
    if (!hora || !/^\d{2}:\d{2}$/.test(hora)) {
      throw new Error('Invalid hora format: must be HH:MM');
    }

    try {
      await runAsync(
        `INSERT INTO planes_semanales (
          id, alumna_id, dia_semana, hora, activo
        ) VALUES (?, ?, ?, ?, ?)`,
        [id, alumna_id, dia_semana, hora, activo ? 1 : 0]
      );

      return await WeeklyPlan.findById(id);
    } catch (error) {
      if (error.message.includes('Invalid dia_semana') || error.message.includes('Invalid hora format')) {
        throw error;
      }
      if (error.message.includes('UNIQUE constraint failed')) {
        throw new Error('A plan already exists for this alumna on this day and time');
      }
      throw new Error(`Error creating weekly plan: ${error.message}`);
    }
  }

  /**
   * Find plan by ID
   * @param {string} id - Plan ID
   * @returns {Promise<Object|null>} Plan object or null if not found
   */
  static async findById(id) {
    try {
      const result = await getAsync('SELECT * FROM planes_semanales WHERE id = ?', [id]);
      if (result) {
        result.activo = Boolean(result.activo);
      }
      return result;
    } catch (error) {
      throw new Error(`Error finding plan by ID: ${error.message}`);
    }
  }

  /**
   * Find all plans for a specific alumna
   * @param {string} alumna_id - Student's ID
   * @returns {Promise<Array>} Array of plan objects for that student
   */
  static async findByAlumnaId(alumna_id) {
    try {
      const results = await allAsync(
        'SELECT * FROM planes_semanales WHERE alumna_id = ? ORDER BY dia_semana ASC, hora ASC',
        [alumna_id]
      );
      return results.map(p => ({
        ...p,
        activo: Boolean(p.activo)
      }));
    } catch (error) {
      throw new Error(`Error finding plans by alumna ID: ${error.message}`);
    }
  }

  /**
   * Find all plans for a specific day of week
   * @param {number} dia_semana - Day of week (0-6)
   * @returns {Promise<Array>} Array of plan objects for that day
   */
  static async findByDayOfWeek(dia_semana) {
    try {
      const results = await allAsync(
        'SELECT * FROM planes_semanales WHERE dia_semana = ? ORDER BY hora ASC',
        [dia_semana]
      );
      return results.map(p => ({
        ...p,
        activo: Boolean(p.activo)
      }));
    } catch (error) {
      throw new Error(`Error finding plans by day of week: ${error.message}`);
    }
  }

  /**
   * Update a weekly plan
   * @param {string} id - Plan ID
   * @param {Object} data - Data to update
   * @returns {Promise<Object>} Updated plan object
   */
  static async update(id, data) {
    try {
      const plan = await WeeklyPlan.findById(id);
      if (!plan) {
        throw new Error('Plan not found');
      }

      const {
        dia_semana = plan.dia_semana,
        hora = plan.hora,
        activo = plan.activo
      } = data;

      await runAsync(
        `UPDATE planes_semanales SET
          dia_semana = ?, hora = ?, activo = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?`,
        [dia_semana, hora, activo ? 1 : 0, id]
      );

      return await WeeklyPlan.findById(id);
    } catch (error) {
      if (error.message === 'Plan not found') {
        throw error;
      }
      if (error.message.includes('UNIQUE constraint failed')) {
        throw new Error('A plan already exists for this alumna on this day and time');
      }
      throw new Error(`Error updating plan: ${error.message}`);
    }
  }

  /**
   * Deactivate a weekly plan
   * @param {string} id - Plan ID
   * @returns {Promise<Object>} Updated plan object
   */
  static async deactivate(id) {
    try {
      const plan = await WeeklyPlan.findById(id);
      if (!plan) {
        throw new Error('Plan not found');
      }

      await runAsync(
        'UPDATE planes_semanales SET activo = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        [0, id]
      );

      return await WeeklyPlan.findById(id);
    } catch (error) {
      if (error.message === 'Plan not found') {
        throw error;
      }
      throw new Error(`Error deactivating plan: ${error.message}`);
    }
  }

  /**
   * Delete a weekly plan
   * @param {string} id - Plan ID
   * @returns {Promise<boolean>} True if deletion was successful
   */
  static async delete(id) {
    try {
      const plan = await WeeklyPlan.findById(id);
      if (!plan) {
        throw new Error('Plan not found');
      }

      const result = await runAsync('DELETE FROM planes_semanales WHERE id = ?', [id]);
      return result.changes > 0;
    } catch (error) {
      throw new Error(`Error deleting plan: ${error.message}`);
    }
  }
}

export default WeeklyPlan;
