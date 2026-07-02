import { v4 as uuidv4 } from 'uuid';
import { runAsync, getAsync, allAsync } from '../db/connection.js';

class Payment {
  /**
   * Create a new payment record
   * @param {Object} data - Payment data
   * @param {string} data.alumna_id - Student user ID
   * @param {number} data.monto - Payment amount
   * @param {string} data.fecha_pago - Payment date (YYYY-MM-DD format)
   * @param {string} data.mes_referencia - Reference month (e.g., "2024-01")
   * @param {string} data.metodo - Payment method: EFECTIVO, TRANSFERENCIA, OTRO
   * @param {string} data.registrada_por - User ID who registered the payment
   * @param {string} [data.notas] - Optional payment notes
   * @returns {Promise<Object>} Created payment object with id
   */
  static async create(data) {
    const id = uuidv4();
    const {
      alumna_id,
      monto,
      fecha_pago,
      mes_referencia,
      metodo,
      registrada_por,
      notas = null
    } = data;

    try {
      await runAsync(
        `INSERT INTO pagos (
          id, alumna_id, monto, fecha_pago, mes_referencia, metodo, registrada_por, notas
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [id, alumna_id, monto, fecha_pago, mes_referencia, metodo, registrada_por, notas]
      );

      return await Payment.findById(id);
    } catch (error) {
      throw new Error(`Error creating payment: ${error.message}`);
    }
  }

  /**
   * Find payment by ID
   * @param {string} id - Payment ID
   * @returns {Promise<Object|null>} Payment object or null if not found
   */
  static async findById(id) {
    try {
      return await getAsync('SELECT * FROM pagos WHERE id = ?', [id]);
    } catch (error) {
      throw new Error(`Error finding payment by ID: ${error.message}`);
    }
  }

  /**
   * Find all payments for a student
   * @param {string} alumnaId - Student user ID
   * @returns {Promise<Array>} Array of payment objects for that student
   */
  static async findByAlumna(alumnaId) {
    try {
      return await allAsync(
        'SELECT * FROM pagos WHERE alumna_id = ? ORDER BY fecha_pago DESC',
        [alumnaId]
      );
    } catch (error) {
      throw new Error(`Error finding payments by alumna: ${error.message}`);
    }
  }

  /**
   * Find all payments for a specific month
   * @param {string} mesReferencia - Reference month (e.g., "2024-01")
   * @returns {Promise<Array>} Array of payment objects for that month
   */
  static async findByMonth(mesReferencia) {
    try {
      return await allAsync(
        'SELECT * FROM pagos WHERE mes_referencia = ? ORDER BY fecha_pago DESC',
        [mesReferencia]
      );
    } catch (error) {
      throw new Error(`Error finding payments by month: ${error.message}`);
    }
  }

  /**
   * Get total amount collected in a specific month
   * @param {string} mes - Reference month (e.g., "2024-01")
   * @returns {Promise<number>} Total amount collected
   */
  static async getTotalByMonth(mes) {
    try {
      const result = await getAsync(
        'SELECT SUM(monto) as total FROM pagos WHERE mes_referencia = ?',
        [mes]
      );

      return result && result.total ? parseFloat(result.total) : 0;
    } catch (error) {
      throw new Error(`Error getting total by month: ${error.message}`);
    }
  }

  /**
   * Get payment status for a student
   * Returns object with:
   * - paid: boolean indicating if any payment was made
   * - lastPaymentDate: date of the most recent payment (or null)
   * - totalThisMonth: total paid in the current month
   * @param {string} alumnaId - Student user ID
   * @param {string} [currentMonth] - Current month (default: today's month in YYYY-MM format)
   * @returns {Promise<Object>} Payment status object
   */
  static async getPaymentStatus(alumnaId, currentMonth = null) {
    try {
      // Default to current month if not provided
      if (!currentMonth) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        currentMonth = `${year}-${month}`;
      }

      // Get last payment date
      const lastPayment = await getAsync(
        'SELECT fecha_pago FROM pagos WHERE alumna_id = ? ORDER BY fecha_pago DESC LIMIT 1',
        [alumnaId]
      );

      // Get total paid this month
      const monthTotal = await getAsync(
        'SELECT SUM(monto) as total FROM pagos WHERE alumna_id = ? AND mes_referencia = ?',
        [alumnaId, currentMonth]
      );

      return {
        paid: !!lastPayment,
        lastPaymentDate: lastPayment ? lastPayment.fecha_pago : null,
        totalThisMonth: monthTotal && monthTotal.total ? parseFloat(monthTotal.total) : 0
      };
    } catch (error) {
      throw new Error(`Error getting payment status: ${error.message}`);
    }
  }

  /**
   * Delete a payment record
   * @param {string} id - Payment ID
   * @returns {Promise<boolean>} True if deletion was successful
   */
  static async delete(id) {
    try {
      const payment = await Payment.findById(id);
      if (!payment) {
        throw new Error('Payment not found');
      }

      const result = await runAsync('DELETE FROM pagos WHERE id = ?', [id]);
      return result.changes > 0;
    } catch (error) {
      throw new Error(`Error deleting payment: ${error.message}`);
    }
  }
}

export default Payment;
