import Transaction from '../models/Transaction.js';
import Category from '../models/Category.js';
import User from '../models/User.js';

// ==================== TRANSACCIONES ====================

export const createTransaction = async (req, res, next) => {
  try {
    const { tipo, categoria, monto, fecha, mes_referencia } = req.body;
    const registrada_por = req.user.userId;

    if (!tipo || !categoria || !monto || !fecha || !mes_referencia) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const transaction = await Transaction.create({
      ...req.body,
      registrada_por
    });

    res.status(201).json({
      message: 'Transaction created successfully',
      transaction
    });
  } catch (error) {
    next(error);
  }
};

export const getTransactions = async (req, res, next) => {
  try {
    const { skip = 0, limit = 50, ...filters } = req.query;
    const skipNum = parseInt(skip, 10);
    const limitNum = parseInt(limit, 10);

    const allTransactions = await Transaction.findAll(filters);
    const total = allTransactions.length;
    const paginated = allTransactions.slice(skipNum, skipNum + limitNum);

    res.json({
      total,
      skip: skipNum,
      limit: limitNum,
      transactions: paginated
    });
  } catch (error) {
    next(error);
  }
};

export const updateTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;

    const transaction = await Transaction.update(id, req.body);

    res.json({
      message: 'Transaction updated successfully',
      transaction
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await Transaction.delete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Transaction not found' });
    }

    res.json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// ==================== REPORTES ====================

export const getMonthlySummary = async (req, res, next) => {
  try {
    const { mes_referencia } = req.query;

    if (!mes_referencia) {
      return res.status(400).json({ error: 'mes_referencia query parameter is required' });
    }

    const summary = await Transaction.getMonthlySummary(mes_referencia);

    res.json(summary);
  } catch (error) {
    next(error);
  }
};

export const getExpensesByCategory = async (req, res, next) => {
  try {
    const { mes_referencia } = req.query;

    if (!mes_referencia) {
      return res.status(400).json({ error: 'mes_referencia query parameter is required' });
    }

    const expenses = await Transaction.getExpensesByCategory(mes_referencia);

    const total = expenses.reduce((sum, e) => sum + parseFloat(e.monto), 0);
    const categorias = expenses.map(e => ({
      categoria: e.categoria,
      monto: parseFloat(e.monto),
      porcentaje: total > 0 ? ((parseFloat(e.monto) / total) * 100).toFixed(2) : 0
    }));

    res.json({
      mes: mes_referencia,
      total,
      categorias
    });
  } catch (error) {
    next(error);
  }
};

export const getStudentPaymentStatus = async (req, res, next) => {
  try {
    const { mes_referencia } = req.query;

    if (!mes_referencia) {
      return res.status(400).json({ error: 'mes_referencia query parameter is required' });
    }

    const alumnos = await User.findAll('ALUMNA', false);
    const MONTO_POR_MES = 5000;

    const estudiantes = await Promise.all(
      alumnos.map(async (alumna) => {
        const transactions = await Transaction.findAll({
          alumna_id: alumna.id,
          tipo: 'INGRESO_ALUMNA',
          mes_referencia
        });

        const pagado = transactions.reduce((sum, t) => sum + parseFloat(t.monto), 0);

        return {
          alumna_id: alumna.id,
          nombre: `${alumna.nombre} ${alumna.apellido || ''}`.trim(),
          telefono: alumna.telefono,
          debe: MONTO_POR_MES,
          pagado,
          saldo: MONTO_POR_MES - pagado
        };
      })
    );

    const sorted = estudiantes.sort((a, b) => b.debe - a.debe);

    res.json({
      mes: mes_referencia,
      estudiantes: sorted
    });
  } catch (error) {
    next(error);
  }
};

export const getInstructorPaymentStatus = async (req, res, next) => {
  try {
    const { mes_referencia } = req.query;

    if (!mes_referencia) {
      return res.status(400).json({ error: 'mes_referencia query parameter is required' });
    }

    const instructores = await User.findAll('PROFESORA', false);

    const instructoresStatus = await Promise.all(
      instructores.map(async (instructor) => {
        const transactions = await Transaction.findAll({
          instructor_id: instructor.id,
          tipo: 'PAGO_INSTRUCTOR',
          mes_referencia
        });

        const pagado = transactions.reduce((sum, t) => sum + parseFloat(t.monto), 0);

        return {
          instructor_id: instructor.id,
          nombre: `${instructor.nombre} ${instructor.apellido || ''}`.trim(),
          telefono: instructor.telefono,
          pagado
        };
      })
    );

    const sorted = instructoresStatus.sort((a, b) => b.pagado - a.pagado);

    res.json({
      mes: mes_referencia,
      instructores: sorted
    });
  } catch (error) {
    next(error);
  }
};

// ==================== CATEGORIAS ====================

export const createCategory = async (req, res, next) => {
  try {
    const { nombre } = req.body;
    const creada_por = req.user.userId;

    if (!nombre || nombre.trim() === '') {
      return res.status(400).json({ error: 'Category nombre is required' });
    }

    const category = await Category.create({
      nombre,
      creada_por,
      ...req.body
    });

    res.status(201).json({
      message: 'Category created successfully',
      category
    });
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();

    res.json({
      predefinidas: categories.predefinidas,
      custom: categories.custom
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await Category.delete(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    next(error);
  }
};
