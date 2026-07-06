import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class AlumnaSubscription {
  static async create(data) {
    const id = uuidv4();
    const {
      alumna_id,
      dia_semana,
      hora,
      cama_preferida = null,
      fecha_inicio = new Date().toISOString().split('T')[0],
      fecha_fin = null,
      notas = null
    } = data;

    if (!alumna_id || dia_semana === undefined || !hora) {
      throw new Error('Missing required fields: alumna_id, dia_semana, hora');
    }

    try {
      await runAsync(
        `INSERT INTO suscripciones_alumnos (
          id, alumna_id, dia_semana, hora, cama_preferida, fecha_inicio, fecha_fin, notas
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [id, alumna_id, dia_semana, hora, cama_preferida, fecha_inicio, fecha_fin, notas]
      );
      return await AlumnaSubscription.findById(id);
    } catch (error) {
      throw new Error(`Error creating subscription: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM suscripciones_alumnos WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding subscription: ${error.message}`);
    }
  }

  static async findByAlumna(alumna_id, active_only = false) {
    try {
      let query = 'SELECT * FROM suscripciones_alumnos WHERE alumna_id = ?';
      const params = [alumna_id];

      if (active_only) {
        query += ' AND activa = 1 AND (fecha_fin IS NULL OR fecha_fin >= date("now"))';
      }

      query += ' ORDER BY dia_semana ASC, hora ASC';
      return await allAsync(query, params);
    } catch (error) {
      throw new Error(`Error finding subscriptions: ${error.message}`);
    }
  }

  static async findActive() {
    try {
      return await allAsync(
        `SELECT * FROM suscripciones_alumnos
         WHERE activa = 1 AND (fecha_fin IS NULL OR fecha_fin >= date("now"))
         ORDER BY dia_semana ASC, hora ASC`
      );
    } catch (error) {
      throw new Error(`Error finding active subscriptions: ${error.message}`);
    }
  }

  static async update(id, data) {
    try {
      const subscription = await AlumnaSubscription.findById(id);
      if (!subscription) throw new Error('Subscription not found');

      const {
        hora = subscription.hora,
        cama_preferida = subscription.cama_preferida,
        activa = subscription.activa,
        fecha_fin = subscription.fecha_fin,
        notas = subscription.notas
      } = data;

      await runAsync(
        `UPDATE suscripciones_alumnos SET
          hora = ?, cama_preferida = ?, activa = ?, fecha_fin = ?, notas = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?`,
        [hora, cama_preferida, activa, fecha_fin, notas, id]
      );

      return await AlumnaSubscription.findById(id);
    } catch (error) {
      throw new Error(`Error updating subscription: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const result = await runAsync('DELETE FROM suscripciones_alumnos WHERE id = ?', [id]);
      return result.changes > 0;
    } catch (error) {
      throw new Error(`Error deleting subscription: ${error.message}`);
    }
  }
}

export default AlumnaSubscription;
