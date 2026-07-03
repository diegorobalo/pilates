import User from '../models/User.js';
import WeeklyPlan from '../models/WeeklyPlan.js';

/**
 * Create a new user (only DUEÑA can create users)
 * POST /users
 */
export const createUser = async (req, res, next) => {
  try {
    const {
      nombre,
      telefono,
      tipo,
      dni,
      estado,
      datos_emergencia_nombre,
      datos_emergencia_telefono,
      datos_emergencia_relacion,
      alergias,
      restricciones_medicas
    } = req.body;

    // Validate required fields
    if (!nombre || !telefono || !tipo) {
      return res.status(400).json({
        error: 'Missing required fields: nombre, telefono, tipo'
      });
    }

    // Validate tipo values
    if (!['ALUMNA', 'DUEÑA', 'ADMIN'].includes(tipo)) {
      return res.status(400).json({
        error: 'Invalid tipo. Must be one of: ALUMNA, DUEÑA, ADMIN'
      });
    }

    // Check if user with this phone already exists
    const existingUser = await User.findByPhone(telefono);
    if (existingUser) {
      return res.status(409).json({
        error: 'User with this phone number already exists'
      });
    }

    const user = await User.create({
      nombre,
      telefono,
      tipo,
      dni: dni || null,
      estado: estado || 'ACTIVA',
      datos_emergencia_nombre,
      datos_emergencia_telefono,
      datos_emergencia_relacion,
      alergias,
      restricciones_medicas
    });

    res.status(201).json({
      message: 'User created successfully',
      user
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all users, optionally filtered by tipo
 * GET /users?tipo=ALUMNA
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const { tipo } = req.query;

    // Validate tipo if provided
    if (tipo && !['ALUMNA', 'DUEÑA', 'ADMIN'].includes(tipo)) {
      return res.status(400).json({
        error: 'Invalid tipo filter. Must be one of: ALUMNA, DUEÑA, ADMIN'
      });
    }

    const users = await User.findAll(tipo || null);

    res.json({
      total: users.length,
      users
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a single user by ID
 * GET /users/:id
 */
export const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
};

/**
 * Update a user
 * PUT /users/:id
 */
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      telefono,
      tipo,
      dni,
      estado,
      datos_emergencia_nombre,
      datos_emergencia_telefono,
      datos_emergencia_relacion,
      alergias,
      restricciones_medicas
    } = req.body;

    // Check if user exists
    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    // Validate tipo if provided
    if (tipo && !['ALUMNA', 'DUEÑA', 'ADMIN'].includes(tipo)) {
      return res.status(400).json({
        error: 'Invalid tipo. Must be one of: ALUMNA, DUEÑA, ADMIN'
      });
    }

    // Check if new phone already exists (if changing phone)
    if (telefono && telefono !== existingUser.telefono) {
      const existingWithPhone = await User.findByPhone(telefono);
      if (existingWithPhone) {
        return res.status(409).json({
          error: 'User with this phone number already exists'
        });
      }
    }

    const user = await User.update(id, {
      nombre,
      telefono,
      tipo,
      dni,
      estado,
      datos_emergencia_nombre,
      datos_emergencia_telefono,
      datos_emergencia_relacion,
      alergias,
      restricciones_medicas
    });

    res.json({
      message: 'User updated successfully',
      user
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Deactivate a user (soft delete)
 * DELETE /users/:id
 */
export const deactivateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if user exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    const deactivatedUser = await User.deactivate(id);

    res.json({
      message: 'User deactivated successfully',
      user: deactivatedUser
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create or update a weekly plan for an alumna
 * POST /users/:id/plans
 */
export const createOrUpdatePlan = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { dia_semana, hora, activo, plan_id } = req.body;

    // Validate required fields
    if (dia_semana == null || !hora) {
      return res.status(400).json({
        error: 'Missing required fields: dia_semana, hora'
      });
    }

    // Check if user (alumna) exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    // Only ALUMNA can have plans
    if (user.tipo !== 'ALUMNA') {
      return res.status(400).json({
        error: 'Only ALUMNA users can have weekly plans'
      });
    }

    let plan;

    // If plan_id is provided, update existing plan
    if (plan_id) {
      plan = await WeeklyPlan.findById(plan_id);
      if (!plan) {
        return res.status(404).json({
          error: 'Plan not found'
        });
      }

      // Verify the plan belongs to this alumna
      if (plan.alumna_id !== id) {
        return res.status(403).json({
          error: 'This plan does not belong to this user'
        });
      }

      plan = await WeeklyPlan.update(plan_id, {
        dia_semana,
        hora,
        activo: activo !== undefined ? activo : plan.activo
      });

      res.json({
        message: 'Weekly plan updated successfully',
        plan
      });
    } else {
      // Create new plan
      plan = await WeeklyPlan.create({
        alumna_id: id,
        dia_semana,
        hora,
        activo: activo !== undefined ? activo : true
      });

      res.status(201).json({
        message: 'Weekly plan created successfully',
        plan
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Get all weekly plans for an alumna
 * GET /users/:id/plans
 */
export const getPlansByAlumnaId = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if user (alumna) exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    // Only ALUMNA can have plans
    if (user.tipo !== 'ALUMNA') {
      return res.status(400).json({
        error: 'Only ALUMNA users can have weekly plans'
      });
    }

    const plans = await WeeklyPlan.findByAlumnaId(id);

    res.json({
      alumna_id: id,
      total: plans.length,
      plans
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a weekly plan
 * DELETE /users/:id/plans/:planId
 */
export const deletePlan = async (req, res, next) => {
  try {
    const { id, planId } = req.params;

    // Check if user exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    // Check if plan exists
    const plan = await WeeklyPlan.findById(planId);
    if (!plan) {
      return res.status(404).json({
        error: 'Plan not found'
      });
    }

    // Verify the plan belongs to this alumna
    if (plan.alumna_id !== id) {
      return res.status(403).json({
        error: 'This plan does not belong to this user'
      });
    }

    const deleted = await WeeklyPlan.delete(planId);

    if (deleted) {
      res.json({
        message: 'Weekly plan deleted successfully'
      });
    } else {
      res.status(500).json({
        error: 'Failed to delete plan'
      });
    }
  } catch (error) {
    next(error);
  }
};
