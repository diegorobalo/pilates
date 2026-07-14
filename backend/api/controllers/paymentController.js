import Payment from '../models/Payment.js';

/**
 * Create a new payment record
 * POST /api/payments
 */
export const createPayment = async (req, res) => {
  try {
    const { alumnaId, monto, fecha_pago, mes_referencia, metodo, notas } = req.body;
    const registrada_por = req.user.id;

    // Validate required fields
    if (!alumnaId || !monto || !fecha_pago || !mes_referencia || !metodo) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'alumnaId, monto, fecha_pago, mes_referencia, and metodo are required'
      });
    }

    // Validate metodo
    const validMethods = ['EFECTIVO', 'TRANSFERENCIA', 'OTRO'];
    if (!validMethods.includes(metodo)) {
      return res.status(400).json({
        error: 'Invalid payment method',
        message: `metodo must be one of: ${validMethods.join(', ')}`
      });
    }

    const payment = await Payment.create({
      alumna_id: alumnaId,
      monto: parseFloat(monto),
      fecha_pago,
      mes_referencia,
      metodo,
      registrada_por,
      notas: notas || null
    });

    res.status(201).json({
      success: true,
      message: 'Payment created successfully',
      payment
    });
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({
      error: 'Failed to create payment',
      message: error.message
    });
  }
};

/**
 * Get payment by ID
 * GET /api/payments/:id
 */
export const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;

    const payment = await Payment.findById(id);
    if (!payment) {
      return res.status(404).json({
        error: 'Payment not found',
        message: `No payment found with ID: ${id}`
      });
    }

    res.json({
      success: true,
      payment
    });
  } catch (error) {
    console.error('Error fetching payment:', error);
    res.status(500).json({
      error: 'Failed to fetch payment',
      message: error.message
    });
  }
};

/**
 * Get all payments for a specific student
 * GET /api/payments/alumna/:alumnaId
 */
export const getPaymentsByAlumna = async (req, res) => {
  try {
    const { alumnaId } = req.params;

    const payments = await Payment.findByAlumna(alumnaId);

    res.json({
      success: true,
      count: payments.length,
      payments
    });
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({
      error: 'Failed to fetch payments',
      message: error.message
    });
  }
};

/**
 * Get all payments for a specific month
 * GET /api/payments/month/:monthYear
 * monthYear format: YYYY-MM (e.g., 2026-07)
 */
export const getPaymentsByMonth = async (req, res) => {
  try {
    const { monthYear } = req.params;

    // Validate monthYear format
    if (!/^\d{4}-\d{2}$/.test(monthYear)) {
      return res.status(400).json({
        error: 'Invalid month format',
        message: 'monthYear must be in YYYY-MM format (e.g., 2026-07)'
      });
    }

    const payments = await Payment.findByMonth(monthYear);

    res.json({
      success: true,
      month: monthYear,
      count: payments.length,
      payments
    });
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({
      error: 'Failed to fetch payments',
      message: error.message
    });
  }
};

/**
 * Update a payment record
 * PUT /api/payments/:id
 */
export const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { monto, fecha_pago, mes_referencia, metodo, notas } = req.body;

    // Check if payment exists
    const existingPayment = await Payment.findById(id);
    if (!existingPayment) {
      return res.status(404).json({
        error: 'Payment not found',
        message: `No payment found with ID: ${id}`
      });
    }

    // Validate metodo if provided
    if (metodo) {
      const validMethods = ['EFECTIVO', 'TRANSFERENCIA', 'OTRO'];
      if (!validMethods.includes(metodo)) {
        return res.status(400).json({
          error: 'Invalid payment method',
          message: `metodo must be one of: ${validMethods.join(', ')}`
        });
      }
    }

    // Update fields (only provided ones)
    const updateData = {};
    if (monto !== undefined) updateData.monto = parseFloat(monto);
    if (fecha_pago !== undefined) updateData.fecha_pago = fecha_pago;
    if (mes_referencia !== undefined) updateData.mes_referencia = mes_referencia;
    if (metodo !== undefined) updateData.metodo = metodo;
    if (notas !== undefined) updateData.notas = notas;

    // Build UPDATE query dynamically
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        error: 'No fields to update',
        message: 'Provide at least one field to update'
      });
    }

    const fields = Object.keys(updateData)
      .map(key => `${key} = ?`)
      .join(', ');
    const values = Object.values(updateData);

    const { runAsync } = await import('../db/connection.js');
    await runAsync(
      `UPDATE pagos SET ${fields} WHERE id = ?`,
      [...values, id]
    );

    const updatedPayment = await Payment.findById(id);

    res.json({
      success: true,
      message: 'Payment updated successfully',
      payment: updatedPayment
    });
  } catch (error) {
    console.error('Error updating payment:', error);
    res.status(500).json({
      error: 'Failed to update payment',
      message: error.message
    });
  }
};

/**
 * Delete a payment record
 * DELETE /api/payments/:id
 */
export const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Payment.delete(id);
    if (!deleted) {
      return res.status(404).json({
        error: 'Payment not found',
        message: `No payment found with ID: ${id}`
      });
    }

    res.json({
      success: true,
      message: 'Payment deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting payment:', error);
    const statusCode = error.message === 'Payment not found' ? 404 : 500;
    res.status(statusCode).json({
      error: 'Failed to delete payment',
      message: error.message
    });
  }
};

/**
 * Get financial statistics
 * GET /api/payments/stats
 */
export const getFinanceStats = async (req, res) => {
  try {
    const { allAsync, getAsync } = await import('../db/connection.js');

    // Get all payments
    const allPayments = await allAsync('SELECT * FROM pagos');

    // Calculate total collected
    const totalResult = await getAsync('SELECT SUM(monto) as total FROM pagos');
    const totalCollected = totalResult && totalResult.total ? parseFloat(totalResult.total) : 0;

    // Get breakdown by method
    const byMethodResult = await allAsync(
      'SELECT metodo, SUM(monto) as total FROM pagos GROUP BY metodo'
    );
    const byMethod = {};
    byMethodResult.forEach(row => {
      byMethod[row.metodo] = parseFloat(row.total);
    });

    // Get breakdown by month
    const byMonthResult = await allAsync(
      'SELECT mes_referencia, SUM(monto) as total FROM pagos GROUP BY mes_referencia ORDER BY mes_referencia DESC'
    );
    const byMonth = {};
    byMonthResult.forEach(row => {
      byMonth[row.mes_referencia] = parseFloat(row.total);
    });

    // Get payment status summary (AL_DIA, VENCIDA, PENDIENTE)
    // AL_DIA: pagos en el mes actual
    // VENCIDA: no hay pagos del mes actual pero hay de meses anteriores
    // PENDIENTE: nunca pagó
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
    const currentMonthStr = `${currentYear}-${currentMonth}`;

    const studentPaymentStatus = await allAsync(
      `SELECT DISTINCT alumna_id FROM pagos`
    );

    let alDia = 0;
    let vencida = 0;
    let pendiente = 0;

    for (const student of studentPaymentStatus) {
      const currentMonthPayment = await getAsync(
        `SELECT COUNT(*) as count FROM pagos WHERE alumna_id = ? AND mes_referencia = ?`,
        [student.alumna_id, currentMonthStr]
      );

      if (currentMonthPayment && currentMonthPayment.count > 0) {
        alDia++;
      } else {
        vencida++;
      }
    }

    // Get all students to calculate PENDIENTE
    const { getAsync: getAsyncUsers } = await import('../db/connection.js');
    const allStudents = await allAsync(
      `SELECT id FROM usuarios WHERE tipo = 'ALUMNA'`
    );
    pendiente = Math.max(0, allStudents.length - alDia - vencida);

    res.json({
      success: true,
      stats: {
        totalCollected,
        byMethod,
        byMonth,
        statusSummary: {
          AL_DIA: alDia,
          VENCIDA: vencida,
          PENDIENTE: pendiente
        }
      }
    });
  } catch (error) {
    console.error('Error fetching finance stats:', error);
    res.status(500).json({
      error: 'Failed to fetch finance stats',
      message: error.message
    });
  }
};

/**
 * Get payment status for a student
 * GET /api/payments/status/:alumnaId
 * Returns: { paid, lastPaymentDate, totalThisMonth, status }
 */
export const getPaymentStatus = async (req, res) => {
  try {
    const { alumnaId } = req.params;

    const paymentStatus = await Payment.getPaymentStatus(alumnaId);

    // Determine overall status
    let status = 'PENDIENTE'; // Never paid

    if (paymentStatus.paid) {
      // Check if paid this month
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const currentMonth = `${year}-${month}`;

      if (paymentStatus.totalThisMonth > 0) {
        status = 'AL_DIA';
      } else {
        status = 'VENCIDA';
      }
    }

    res.json({
      success: true,
      alumnaId,
      paymentStatus: {
        ...paymentStatus,
        status
      }
    });
  } catch (error) {
    console.error('Error fetching payment status:', error);
    res.status(500).json({
      error: 'Failed to fetch payment status',
      message: error.message
    });
  }
};
