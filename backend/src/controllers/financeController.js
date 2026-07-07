import Payment from '../models/Payment.js';
import TeacherPayment from '../models/TeacherPayment.js';
import Expense from '../models/Expense.js';
import User from '../models/User.js';

// ==================== ALUMNA PAYMENTS ====================

export const createStudentPayment = async (req, res) => {
  try {
    const { alumna_id, monto, fecha_pago, mes_referencia, metodo, notas } = req.body;
    const registrada_por = req.user.userId;

    if (!alumna_id || !monto || !fecha_pago || !mes_referencia || !metodo) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const payment = await Payment.create({
      alumna_id,
      monto,
      moneda: 'ARS',
      fecha_pago,
      mes_referencia,
      metodo,
      registrada_por,
      notas
    });

    res.status(201).json({
      message: 'Payment recorded successfully',
      payment
    });
  } catch (error) {
    res.status(500).json({ error: 'Error creating payment', message: error.message });
  }
};

export const getStudentPayments = async (req, res) => {
  try {
    const { alumna_id } = req.params;
    const { mes_referencia, fecha_desde, fecha_hasta } = req.query;

    const filters = {};
    if (mes_referencia) filters.mes_referencia = mes_referencia;
    if (fecha_desde) filters.fecha_desde = fecha_desde;
    if (fecha_hasta) filters.fecha_hasta = fecha_hasta;

    const payments = await Payment.findByAlumna(alumna_id, filters);
    res.json({ payments });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching payments', message: error.message });
  }
};

export const getAllStudentPayments = async (req, res) => {
  try {
    const { mes_referencia, fecha_desde, fecha_hasta } = req.query;

    const filters = {};
    if (mes_referencia) filters.mes_referencia = mes_referencia;
    if (fecha_desde) filters.fecha_desde = fecha_desde;
    if (fecha_hasta) filters.fecha_hasta = fecha_hasta;

    const payments = await Payment.findAll(filters);
    res.json({ payments });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching payments', message: error.message });
  }
};

export const updateStudentPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { monto, fecha_pago, metodo, notas } = req.body;

    const payment = await Payment.update(id, {
      monto,
      fecha_pago,
      metodo,
      notas
    });

    res.json({ message: 'Payment updated', payment });
  } catch (error) {
    res.status(500).json({ error: 'Error updating payment', message: error.message });
  }
};

export const deleteStudentPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Payment.delete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.json({ message: 'Payment deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting payment', message: error.message });
  }
};

// ==================== TEACHER PAYMENTS ====================

export const createTeacherPayment = async (req, res) => {
  try {
    const { profesora_id, monto, fecha_pago, mes_referencia, metodo, notas } = req.body;
    const registrada_por = req.user.userId;

    if (!profesora_id || !monto || !fecha_pago || !mes_referencia || !metodo) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const payment = await TeacherPayment.create({
      profesora_id,
      monto,
      moneda: 'ARS',
      fecha_pago,
      mes_referencia,
      metodo,
      registrada_por,
      notas
    });

    res.status(201).json({
      message: 'Teacher payment recorded successfully',
      payment
    });
  } catch (error) {
    res.status(500).json({ error: 'Error creating teacher payment', message: error.message });
  }
};

export const getTeacherPayments = async (req, res) => {
  try {
    const { profesora_id } = req.params;
    const { mes_referencia, fecha_desde, fecha_hasta } = req.query;

    const filters = {};
    if (mes_referencia) filters.mes_referencia = mes_referencia;
    if (fecha_desde) filters.fecha_desde = fecha_desde;
    if (fecha_hasta) filters.fecha_hasta = fecha_hasta;

    const payments = await TeacherPayment.findByTeacher(profesora_id, filters);
    res.json({ payments });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching teacher payments', message: error.message });
  }
};

export const getAllTeacherPayments = async (req, res) => {
  try {
    const { mes_referencia, fecha_desde, fecha_hasta } = req.query;

    const filters = {};
    if (mes_referencia) filters.mes_referencia = mes_referencia;
    if (fecha_desde) filters.fecha_desde = fecha_desde;
    if (fecha_hasta) filters.fecha_hasta = fecha_hasta;

    const payments = await TeacherPayment.findAll(filters);
    res.json({ payments });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching teacher payments', message: error.message });
  }
};

// ==================== EXPENSES ====================

export const createExpense = async (req, res) => {
  try {
    const { descripcion, monto, categoria, fecha_gasto, notas } = req.body;
    const registrada_por = req.user.userId;

    if (!descripcion || !monto || !categoria || !fecha_gasto) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const expense = await Expense.create({
      descripcion,
      monto,
      moneda: 'ARS',
      categoria,
      fecha_gasto,
      registrada_por,
      notas
    });

    res.status(201).json({
      message: 'Expense recorded successfully',
      expense
    });
  } catch (error) {
    res.status(500).json({ error: 'Error creating expense', message: error.message });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const { categoria, fecha_desde, fecha_hasta } = req.query;

    const filters = {};
    if (categoria) filters.categoria = categoria;
    if (fecha_desde) filters.fecha_desde = fecha_desde;
    if (fecha_hasta) filters.fecha_hasta = fecha_hasta;

    const expenses = await Expense.findAll(filters);
    res.json({ expenses });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching expenses', message: error.message });
  }
};

export const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { descripcion, monto, categoria, fecha_gasto, notas } = req.body;

    const expense = await Expense.update(id, {
      descripcion,
      monto,
      categoria,
      fecha_gasto,
      notas
    });

    res.json({ message: 'Expense updated', expense });
  } catch (error) {
    res.status(500).json({ error: 'Error updating expense', message: error.message });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Expense.delete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.json({ message: 'Expense deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting expense', message: error.message });
  }
};

// ==================== REPORTS ====================

export const getFinancialSummary = async (req, res) => {
  try {
    const { mes_referencia, fecha_desde, fecha_hasta } = req.query;

    const filters = {};
    if (mes_referencia) filters.mes_referencia = mes_referencia;
    if (fecha_desde) filters.fecha_desde = fecha_desde;
    if (fecha_hasta) filters.fecha_hasta = fecha_hasta;

    const [studentPayments, teacherPayments, expenses] = await Promise.all([
      Payment.findAll(filters),
      TeacherPayment.findAll(filters),
      Expense.findAll(filters)
    ]);

    const totalIncome = studentPayments.reduce((sum, p) => sum + parseFloat(p.monto), 0);
    const totalTeacherExpense = teacherPayments.reduce((sum, p) => sum + parseFloat(p.monto), 0);
    const totalOtherExpense = expenses.reduce((sum, e) => sum + parseFloat(e.monto), 0);
    const totalExpense = totalTeacherExpense + totalOtherExpense;
    const balance = totalIncome - totalExpense;

    res.json({
      summary: {
        totalIncome,
        totalTeacherExpense,
        totalOtherExpense,
        totalExpense,
        balance
      },
      details: {
        studentPayments,
        teacherPayments,
        expenses
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Error generating summary', message: error.message });
  }
};

export const getStudentDebtReport = async (req, res) => {
  try {
    const alumnos = await User.findAll('ALUMNA');
    const payments = await Payment.findAll({});

    const debtReport = alumnos.map(alumna => {
      const alumnaPayments = payments.filter(p => p.alumna_id === alumna.id);
      const totalPaid = alumnaPayments.reduce((sum, p) => sum + parseFloat(p.monto), 0);

      return {
        alumna_id: alumna.id,
        nombre: `${alumna.nombre} ${alumna.apellido || ''}`.trim(),
        telefono: alumna.telefono,
        totalPaid,
        payments: alumnaPayments
      };
    });

    res.json({ debtReport });
  } catch (error) {
    res.status(500).json({ error: 'Error generating debt report', message: error.message });
  }
};
