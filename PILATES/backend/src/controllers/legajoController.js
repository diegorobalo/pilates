import { v4 as uuidv4 } from 'uuid';
import User from '../models/User.js';
import AlumnaSubscription from '../models/AlumnaSubscription.js';
import { getAsync, runAsync } from '../db/connection.js';

/**
 * Get complete student profile/legajo
 * GET /api/legajo/:alumna_id
 * Returns: personal info, subscriptions, payment status, medical info
 */
export const getStudentLegajo = async (req, res, next) => {
  try {
    const { alumna_id } = req.params;

    // Get user info
    const user = await User.findById(alumna_id);
    if (!user) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }

    // Get active subscriptions
    const subscriptions = await AlumnaSubscription.findByAlumna(alumna_id, true);
    const classesPerWeek = subscriptions ? subscriptions.length : 0;

    // Get payment status for current month
    const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM
    const payment = await getAsync(
      `SELECT * FROM pagos WHERE alumna_id = ? AND mes_referencia = ?`,
      [alumna_id, currentMonth]
    );

    // Get last payment
    const lastPayment = await getAsync(
      `SELECT * FROM pagos WHERE alumna_id = ? ORDER BY fecha_pago DESC LIMIT 1`,
      [alumna_id]
    );

    // Build legajo response
    const legajo = {
      id: user.id,
      // Personal info
      nombre: user.nombre,
      apellido: user.apellido,
      telefono: user.telefono,
      dni: user.dni,
      fecha_nacimiento: user.fecha_nacimiento,
      direccion: user.direccion,
      ciudad: user.ciudad,
      estado: user.estado,

      // Subscription info
      clases_semanales: classesPerWeek,
      subscripciones: subscriptions || [],

      // Payment info
      pagado_este_mes: !!payment,
      pago_este_mes: payment || null,
      ultimo_pago: lastPayment || null,
      mes_referencia: currentMonth,

      // Medical/Emergency info
      alergias: user.alergias,
      restricciones_medicas: user.restricciones_medicas,
      datos_emergencia_nombre: user.datos_emergencia_nombre,
      datos_emergencia_telefono: user.datos_emergencia_telefono,
      datos_emergencia_relacion: user.datos_emergencia_relacion,

      // Registration info
      fecha_registro: user.fecha_registro,
      datos_completados: user.datos_completados
    };

    res.json({ legajo });
  } catch (error) {
    next(error);
  }
};

/**
 * Update student payment status for current month
 * POST /api/legajo/:alumna_id/pagar
 * Body: { monto, metodo, notas? }
 * Only DUEÑA can record payments
 */
export const recordPayment = async (req, res, next) => {
  try {
    const { alumna_id } = req.params;
    const { monto, metodo, notas } = req.body;

    if (!monto || !metodo) {
      return res.status(400).json({
        error: 'Missing required fields: monto, metodo'
      });
    }

    const validMethods = ['EFECTIVO', 'TRANSFERENCIA', 'OTRO'];
    if (!validMethods.includes(metodo)) {
      return res.status(400).json({
        error: `Invalid metodo. Must be one of: ${validMethods.join(', ')}`
      });
    }

    // Check if student exists
    const user = await User.findById(alumna_id);
    if (!user) {
      return res.status(404).json({ error: 'Estudiante no encontrado' });
    }

    // Record payment
    const id = uuidv4();
    const currentMonth = new Date().toISOString().slice(0, 7);
    const today = new Date().toISOString().split('T')[0];

    await runAsync(
      `INSERT INTO pagos (id, alumna_id, monto, moneda, fecha_pago, mes_referencia, metodo, registrada_por, notas)
       VALUES (?, ?, ?, 'ARS', ?, ?, ?, ?, ?)`,
      [id, alumna_id, monto, today, currentMonth, metodo, req.user.userId, notas || null]
    );

    res.status(201).json({
      message: 'Pago registrado exitosamente',
      payment: {
        id,
        alumna_id,
        monto,
        metodo,
        fecha_pago: today,
        mes_referencia: currentMonth
      }
    });
  } catch (error) {
    next(error);
  }
};
