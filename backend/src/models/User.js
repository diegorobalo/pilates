import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class User {
  /**
   * Create a new user
   * @param {Object} data - User data
   * @param {string} data.nombre - User's first name
   * @param {string} [data.apellido] - User's last name
   * @param {string} data.telefono - User's phone (unique)
   * @param {string} data.tipo - User type: ALUMNA, DUEÑA, PROFESORA, or ADMIN
   * @param {string} [data.dni] - Optional DNI
   * @param {string} [data.estado] - User status: ACTIVA, INACTIVA, PENDIENTE, SUSPENDIDA (default: ACTIVA)
   * @param {string} [data.fecha_nacimiento] - Date of birth (YYYY-MM-DD)
   * @param {string} [data.direccion] - Address
   * @param {string} [data.ciudad] - City
   * @param {string} [data.pin_ingreso] - Login PIN (for DUEÑA)
   * @param {string} [data.datos_emergencia_nombre] - Emergency contact name
   * @param {string} [data.datos_emergencia_telefono] - Emergency contact phone
   * @param {string} [data.datos_emergencia_relacion] - Emergency contact relation
   * @param {string} [data.alergias] - Allergies
   * @param {string} [data.restricciones_medicas] - Medical restrictions
   * @param {boolean} [data.datos_completados] - Whether user completed their profile
   * @returns {Promise<Object>} Created user object with id
   */
  static async create(data) {
    const id = uuidv4();
    const {
      nombre,
      apellido = null,
      telefono,
      tipo,
      dni = null,
      estado = 'ACTIVA',
      fecha_nacimiento = null,
      direccion = null,
      ciudad = null,
      pin_ingreso = null,
      datos_emergencia_nombre = null,
      datos_emergencia_telefono = null,
      datos_emergencia_relacion = null,
      alergias = null,
      restricciones_medicas = null,
      datos_completados = 0
    } = data;

    // Validate telefono format (basic validation: digits and symbols)
    if (!telefono || !/^[\d\s\-\+\(\)]+$/.test(telefono)) {
      throw new Error('Invalid telefono format: must contain only numbers, spaces, dashes, plus, or parentheses');
    }

    try {
      await runAsync(
        `INSERT INTO users (
          id, nombre, apellido, telefono, tipo, dni, estado,
          fecha_nacimiento, direccion, ciudad, pin_ingreso,
          datos_emergencia_nombre, datos_emergencia_telefono, datos_emergencia_relacion,
          alergias, restricciones_medicas, datos_completados
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          id, nombre, apellido, telefono, tipo, dni, estado,
          fecha_nacimiento, direccion, ciudad, pin_ingreso,
          datos_emergencia_nombre, datos_emergencia_telefono, datos_emergencia_relacion,
          alergias, restricciones_medicas, datos_completados
        ]
      );

      return await User.findById(id);
    } catch (error) {
      if (error.message.includes('Invalid telefono format')) {
        throw error;
      }
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  /**
   * Find user by ID
   * @param {string} id - User ID
   * @returns {Promise<Object|null>} User object or null if not found
   */
  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM users WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding user by ID: ${error.message}`);
    }
  }

  /**
   * Find user by phone number
   * @param {string} telefono - User's phone number
   * @returns {Promise<Object|null>} User object or null if not found
   */
  static async findByPhone(telefono) {
    try {
      return await getAsync('SELECT * FROM users WHERE telefono = ?', [telefono]);
    } catch (error) {
      throw new Error(`Error finding user by phone: ${error.message}`);
    }
  }

  /**
   * Get all users, optionally filtered by type
   * @param {string} [tipo] - Optional user type filter (ALUMNA, DUEÑA, ADMIN)
   * @returns {Promise<Array>} Array of user objects
   */
  static async findAll(tipo = null, includeInactive = false) {
    try {
      if (tipo) {
        if (includeInactive) {
          return await allAsync('SELECT * FROM users WHERE tipo = ? ORDER BY apellido ASC, nombre ASC', [tipo]);
        }
        return await allAsync('SELECT * FROM users WHERE tipo = ? AND estado = ? ORDER BY apellido ASC, nombre ASC', [tipo, 'ACTIVA']);
      }
      if (includeInactive) {
        return await allAsync('SELECT * FROM users ORDER BY apellido ASC, nombre ASC');
      }
      return await allAsync('SELECT * FROM users WHERE estado = ? ORDER BY apellido ASC, nombre ASC', ['ACTIVA']);
    } catch (error) {
      throw new Error(`Error finding all users: ${error.message}`);
    }
  }

  /**
   * Get all users with a given estado (e.g. 'PENDIENTE')
   * @param {string} estado - ACTIVA | INACTIVA | PENDIENTE
   * @returns {Promise<Array>} Array of user objects
   */
  static async findByEstado(estado) {
    try {
      return await allAsync(
        'SELECT * FROM users WHERE estado = ? ORDER BY fecha_registro DESC',
        [estado]
      );
    } catch (error) {
      throw new Error(`Error finding users by estado: ${error.message}`);
    }
  }

  /**
   * Update user information
   * @param {string} id - User ID
   * @param {Object} data - Data to update
   * @returns {Promise<Object>} Updated user object
   */
  static async update(id, data) {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('User not found');
      }

      const {
        nombre = user.nombre,
        apellido = user.apellido,
        telefono = user.telefono,
        tipo = user.tipo,
        dni = user.dni,
        estado = user.estado,
        fecha_nacimiento = user.fecha_nacimiento,
        direccion = user.direccion,
        ciudad = user.ciudad,
        pin_ingreso = user.pin_ingreso,
        datos_emergencia_nombre = user.datos_emergencia_nombre,
        datos_emergencia_telefono = user.datos_emergencia_telefono,
        datos_emergencia_relacion = user.datos_emergencia_relacion,
        alergias = user.alergias,
        restricciones_medicas = user.restricciones_medicas,
        datos_completados = user.datos_completados
      } = data;

      await runAsync(
        `UPDATE users SET
          nombre = ?, apellido = ?, telefono = ?, tipo = ?, dni = ?, estado = ?,
          fecha_nacimiento = ?, direccion = ?, ciudad = ?, pin_ingreso = ?,
          datos_emergencia_nombre = ?, datos_emergencia_telefono = ?, datos_emergencia_relacion = ?,
          alergias = ?, restricciones_medicas = ?, datos_completados = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?`,
        [
          nombre, apellido, telefono, tipo, dni, estado,
          fecha_nacimiento, direccion, ciudad, pin_ingreso,
          datos_emergencia_nombre, datos_emergencia_telefono, datos_emergencia_relacion,
          alergias, restricciones_medicas, datos_completados, id
        ]
      );

      return await User.findById(id);
    } catch (error) {
      if (error.message === 'User not found') {
        throw error;
      }
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  /**
   * Deactivate a user (set estado to INACTIVA)
   * @param {string} id - User ID
   * @returns {Promise<Object>} Updated user object
   */
  static async deactivate(id) {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('User not found');
      }

      await runAsync(
        'UPDATE users SET estado = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        ['INACTIVA', id]
      );

      return await User.findById(id);
    } catch (error) {
      if (error.message === 'User not found') {
        throw error;
      }
      throw new Error(`Error deactivating user: ${error.message}`);
    }
  }

  /**
   * Reactivate a user by moving them back to a PENDIENTE access request.
   * Used when a previously removed (INACTIVA) person asks for access again,
   * so staff can re-approve and re-send the code.
   * @param {string} id - User ID
   * @returns {Promise<Object>} Updated user object
   */
  static async reactivate(id) {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('User not found');
      }

      await runAsync(
        'UPDATE users SET estado = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        ['PENDIENTE', id]
      );

      return await User.findById(id);
    } catch (error) {
      if (error.message === 'User not found') {
        throw error;
      }
      throw new Error(`Error reactivating user: ${error.message}`);
    }
  }

  /**
   * Delete a user
   * @param {string} id - User ID
   * @returns {Promise<boolean>} True if deletion was successful
   */
  static async delete(id) {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error('User not found');
      }

      const result = await runAsync('DELETE FROM users WHERE id = ?', [id]);
      return result.changes > 0;
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}

export default User;
