import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class Category {
  /**
   * Create a new category
   * @param {Object} data - Category data
   * @param {string} data.nombre - Category name (required, must be unique)
   * @param {string} [data.tipo] - Category type: INGRESO_ALUMNA, GASTO, PAGO_INSTRUCTOR, INGRESO_OTRO
   * @param {string} [data.creada_por] - User ID of who created the category
   * @returns {Promise<Object>} Created category object with id
   */
  static async create(data) {
    const id = uuidv4();
    const {
      nombre,
      tipo = 'GASTO',
      creada_por = null
    } = data;

    // Validate nombre is not empty
    if (!nombre || nombre.trim() === '') {
      throw new Error('Category nombre cannot be empty');
    }

    try {
      await runAsync(
        `INSERT INTO categorias (
          id, nombre, tipo, es_predefinida, creada_por, created_at
        ) VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
        [id, nombre.trim(), tipo, 0, creada_por]
      );

      return await Category.findById(id);
    } catch (error) {
      if (error.message.includes('UNIQUE constraint failed')) {
        throw new Error(`Category '${nombre}' already exists`);
      }
      throw new Error(`Error creating category: ${error.message}`);
    }
  }

  /**
   * Find category by ID
   * @param {string} id - Category ID
   * @returns {Promise<Object|null>} Category object or null if not found
   */
  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM categorias WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding category by ID: ${error.message}`);
    }
  }

  /**
   * Find all categories grouped by predefined and custom
   * @returns {Promise<Object>} Object with predefinidas and custom arrays
   */
  static async findAll() {
    try {
      const predefinidas = await allAsync(
        'SELECT * FROM categorias WHERE es_predefinida = 1 ORDER BY nombre ASC',
        []
      );
      const custom = await allAsync(
        'SELECT * FROM categorias WHERE es_predefinida = 0 ORDER BY nombre ASC',
        []
      );

      return {
        predefinidas,
        custom
      };
    } catch (error) {
      throw new Error(`Error finding all categories: ${error.message}`);
    }
  }

  /**
   * Find all categories as flat array (both predefined and custom)
   * Ordered by: es_predefinida DESC (predefined first), then nombre
   * @returns {Promise<Array>} Array of all categories
   */
  static async findAllFlat() {
    try {
      return await allAsync(
        'SELECT * FROM categorias ORDER BY es_predefinida DESC, nombre ASC',
        []
      );
    } catch (error) {
      throw new Error(`Error finding all categories (flat): ${error.message}`);
    }
  }

  /**
   * Delete a category - only if it's not predefined
   * @param {string} id - Category ID
   * @returns {Promise<boolean>} True if deletion was successful
   */
  static async delete(id) {
    try {
      const category = await Category.findById(id);
      if (!category) {
        throw new Error('Category not found');
      }

      if (category.es_predefinida === 1) {
        throw new Error('Cannot delete predefined categories');
      }

      const result = await runAsync('DELETE FROM categorias WHERE id = ?', [id]);
      return result.changes > 0;
    } catch (error) {
      if (error.message === 'Category not found' || error.message === 'Cannot delete predefined categories') {
        throw error;
      }
      throw new Error(`Error deleting category: ${error.message}`);
    }
  }
}

export default Category;
