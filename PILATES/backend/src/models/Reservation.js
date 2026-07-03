import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class Reservation {
  /**
   * Create a new reservation
   * @param {Object} data - Reservation data
   * @param {string} data.alumna_id - Student user ID
   * @param {string} data.horario_id - Schedule ID
   * @param {number} data.cama_numero - Bed number (1-6)
   * @param {string} [data.estado] - Status: PENDIENTE, CONFIRMADA, RECHAZADA, CANCELADA (default: PENDIENTE)
   * @returns {Promise<Object>} Created reservation object with id
   */
  static async create(data) {
    const id = uuidv4();
    const {
      alumna_id,
      horario_id,
      cama_numero,
      estado = 'PENDIENTE'
    } = data;

    // Validate cama_numero is between 1 and 6
    if (!cama_numero || cama_numero < 1 || cama_numero > 6) {
      throw new Error('Invalid cama_numero: must be between 1 and 6');
    }

    try {
      await runAsync(
        `INSERT INTO reservas (
          id, alumna_id, horario_id, cama_numero, estado
        ) VALUES (?, ?, ?, ?, ?)`,
        [id, alumna_id, horario_id, cama_numero, estado]
      );

      return await Reservation.findById(id);
    } catch (error) {
      if (error.message.includes('Invalid cama_numero')) {
        throw error;
      }
      throw new Error(`Error creating reservation: ${error.message}`);
    }
  }

  /**
   * Find reservation by ID
   * @param {string} id - Reservation ID
   * @returns {Promise<Object|null>} Reservation object or null if not found
   */
  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM reservas WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding reservation by ID: ${error.message}`);
    }
  }

  /**
   * Find all reservations for a student
   * @param {string} alumnaId - Student user ID
   * @returns {Promise<Array>} Array of reservation objects for that student
   */
  static async findByAlumna(alumnaId) {
    try {
      return await allAsync(
        'SELECT * FROM reservas WHERE alumna_id = ? ORDER BY fecha_solicitud DESC',
        [alumnaId]
      );
    } catch (error) {
      throw new Error(`Error finding reservations by alumna: ${error.message}`);
    }
  }

  /**
   * Find all reservations for a schedule
   * @param {string} horarioId - Schedule ID
   * @returns {Promise<Array>} Array of reservation objects for that schedule
   */
  static async findBySchedule(horarioId) {
    try {
      return await allAsync(
        'SELECT * FROM reservas WHERE horario_id = ? ORDER BY cama_numero ASC',
        [horarioId]
      );
    } catch (error) {
      throw new Error(`Error finding reservations by schedule: ${error.message}`);
    }
  }

  /**
   * Find all pending reservations
   * @returns {Promise<Array>} Array of pending reservation objects
   */
  static async findPending() {
    try {
      return await allAsync(
        'SELECT * FROM reservas WHERE estado = ? ORDER BY fecha_solicitud ASC',
        ['PENDIENTE']
      );
    } catch (error) {
      throw new Error(`Error finding pending reservations: ${error.message}`);
    }
  }

  /**
   * Find all reservations
   * @returns {Promise<Array>} Array of all reservation objects
   */
  static async findAll() {
    try {
      return await allAsync(
        'SELECT * FROM reservas ORDER BY fecha_solicitud DESC'
      );
    } catch (error) {
      throw new Error(`Error finding all reservations: ${error.message}`);
    }
  }

  /**
   * Confirm a reservation
   * @param {string} id - Reservation ID
   * @param {string} duenaId - Owner/Admin user ID confirming the reservation
   * @returns {Promise<Object>} Updated reservation object
   */
  static async confirm(id, duenaId) {
    try {
      const reservation = await Reservation.findById(id);
      if (!reservation) {
        throw new Error('Reservation not found');
      }

      await runAsync(
        `UPDATE reservas SET
          estado = ?, confirmada_por = ?, fecha_confirmacion = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?`,
        ['CONFIRMADA', duenaId, id]
      );

      return await Reservation.findById(id);
    } catch (error) {
      if (error.message === 'Reservation not found') {
        throw error;
      }
      throw new Error(`Error confirming reservation: ${error.message}`);
    }
  }

  /**
   * Reject a reservation
   * @param {string} id - Reservation ID
   * @param {string} duenaId - Owner/Admin user ID rejecting the reservation
   * @param {string} razonRechazo - Reason for rejection
   * @returns {Promise<Object>} Updated reservation object
   */
  static async reject(id, duenaId, razonRechazo) {
    try {
      const reservation = await Reservation.findById(id);
      if (!reservation) {
        throw new Error('Reservation not found');
      }

      await runAsync(
        `UPDATE reservas SET
          estado = ?, confirmada_por = ?, razon_rechazo = ?, fecha_confirmacion = CURRENT_TIMESTAMP, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?`,
        ['RECHAZADA', duenaId, razonRechazo, id]
      );

      return await Reservation.findById(id);
    } catch (error) {
      if (error.message === 'Reservation not found') {
        throw error;
      }
      throw new Error(`Error rejecting reservation: ${error.message}`);
    }
  }

  /**
   * Cancel a reservation
   * @param {string} id - Reservation ID
   * @returns {Promise<Object>} Updated reservation object
   */
  static async cancel(id) {
    try {
      const reservation = await Reservation.findById(id);
      if (!reservation) {
        throw new Error('Reservation not found');
      }

      await runAsync(
        'UPDATE reservas SET estado = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        ['CANCELADA', id]
      );

      return await Reservation.findById(id);
    } catch (error) {
      throw new Error(`Error canceling reservation: ${error.message}`);
    }
  }

  /**
   * Delete a reservation
   * @param {string} id - Reservation ID
   * @returns {Promise<boolean>} True if deletion was successful
   */
  static async delete(id) {
    try {
      const reservation = await Reservation.findById(id);
      if (!reservation) {
        throw new Error('Reservation not found');
      }

      const result = await runAsync('DELETE FROM reservas WHERE id = ?', [id]);
      return result.changes > 0;
    } catch (error) {
      throw new Error(`Error deleting reservation: ${error.message}`);
    }
  }

  /**
   * Find one reservation by custom filter
   * @param {Object} filters - Filter object (e.g., { alumna_id, horario_id })
   * @returns {Promise<Object|null>} Reservation object or null
   */
  static async findOne(filters) {
    try {
      let query = 'SELECT * FROM reservas WHERE 1=1';
      const params = [];

      if (filters.alumna_id) {
        query += ' AND alumna_id = ?';
        params.push(filters.alumna_id);
      }
      if (filters.horario_id) {
        query += ' AND horario_id = ?';
        params.push(filters.horario_id);
      }
      if (filters.cama_numero) {
        query += ' AND cama_numero = ?';
        params.push(filters.cama_numero);
      }

      return await getAsync(query, params);
    } catch (error) {
      throw new Error(`Error finding reservation: ${error.message}`);
    }
  }

  /**
   * Link a reservation to a subscription
   * @param {string} reserva_id - Reservation ID
   * @param {string} suscripcion_id - Subscription ID
   * @returns {Promise<void>}
   */
  static async linkToSubscription(reserva_id, suscripcion_id) {
    try {
      await runAsync(
        `INSERT INTO reserva_suscripcion (reserva_id, suscripcion_id) VALUES (?, ?)`,
        [reserva_id, suscripcion_id]
      );
    } catch (error) {
      throw new Error(`Error linking reservation to subscription: ${error.message}`);
    }
  }

  /**
   * Find reservations by schedule
   * @param {string} horario_id - Schedule ID
   * @returns {Promise<Array>} Array of reservations for that schedule
   */
  static async findBySchedule(horario_id) {
    try {
      return await allAsync(
        `SELECT * FROM reservas WHERE horario_id = ? AND estado IN ('PENDIENTE', 'CONFIRMADA')`,
        [horario_id]
      );
    } catch (error) {
      throw new Error(`Error finding reservations by schedule: ${error.message}`);
    }
  }
}

export default Reservation;
