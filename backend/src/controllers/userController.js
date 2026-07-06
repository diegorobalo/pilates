import { v4 as uuid } from 'uuid';
import User from '../models/User.js';
import WeeklyPlan from '../models/WeeklyPlan.js';
import { runAsync } from '../db/connection.js';

const ASSIGNABLE_ROLES = ['ALUMNA', 'PROFESORA', 'DUEÑA', 'ADMIN'];

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
    if (!ASSIGNABLE_ROLES.includes(tipo)) {
      return res.status(400).json({
        error: `Invalid tipo. Must be one of: ${ASSIGNABLE_ROLES.join(', ')}`
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
    const { tipo, includeInactive } = req.query;

    // Validate tipo if provided
    if (tipo && !ASSIGNABLE_ROLES.includes(tipo)) {
      return res.status(400).json({
        error: `Invalid tipo filter. Must be one of: ${ASSIGNABLE_ROLES.join(', ')}`
      });
    }

    const showInactive = includeInactive === 'true';
    const users = await User.findAll(tipo || null, showInactive);

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
    if (tipo && !ASSIGNABLE_ROLES.includes(tipo)) {
      return res.status(400).json({
        error: `Invalid tipo. Must be one of: ${ASSIGNABLE_ROLES.join(', ')}`
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

/**
 * List pending access requests (users awaiting approval)
 * GET /users/pending
 */
export const getPendingUsers = async (req, res, next) => {
  try {
    const users = await User.findByEstado('PENDIENTE');
    res.json({ total: users.length, users });
  } catch (error) {
    next(error);
  }
};

/**
 * Approve a pending user and assign a role
 * POST /users/:id/approve  { tipo, nombre? }
 */
export const approveUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { tipo, nombre } = req.body;

    if (!['ALUMNA', 'PROFESORA'].includes(tipo)) {
      return res.status(400).json({ error: 'tipo debe ser ALUMNA o PROFESORA' });
    }

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const updated = await User.update(id, {
      tipo,
      estado: 'ACTIVA',
      nombre: (nombre && nombre.trim()) || user.nombre
    });

    res.json({ message: 'Usuario aprobado', user: updated });
  } catch (error) {
    next(error);
  }
};

/**
 * Reject a pending user (removes the request)
 * POST /users/:id/reject
 */
export const rejectUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    await User.delete(id);
    res.json({ message: 'Solicitud rechazada' });
  } catch (error) {
    next(error);
  }
};

/**
 * Generate an access code for a user and return a WhatsApp "click to send" link.
 * The code is only returned to the authenticated staff member (never shown publicly).
 * POST /users/:id/send-code
 */
export const sendAccessCode = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    if (user.estado !== 'ACTIVA') {
      return res.status(400).json({ error: 'El usuario debe estar aprobado (activo) antes de enviarle un código' });
    }

    // Generate a 6-digit code and store it (one active code per phone, 24h TTL).
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    await runAsync('DELETE FROM verification_codes WHERE telefono = ?', [user.telefono]);
    await runAsync(
      'INSERT INTO verification_codes (id, telefono, code, attempts, expires_at, created_at) VALUES (?, ?, ?, 0, ?, CURRENT_TIMESTAMP)',
      [uuid(), user.telefono, code, expiresAt]
    );

    // Build a wa.me click-to-send link. Optionally prefix a country code.
    const cc = (process.env.WHATSAPP_COUNTRY_CODE || '').replace(/\D/g, '');
    let digits = String(user.telefono).replace(/\D/g, '');
    if (cc && !digits.startsWith(cc)) digits = cc + digits;

    const appUrl = process.env.APP_URL || '';
    const message =
      `Hola${user.nombre && user.nombre !== user.telefono ? ' ' + user.nombre : ''}! ` +
      `Tu código de acceso a PILATES es: ${code}` +
      (appUrl ? `\n\nIngresá en ${appUrl} con tu número y este código.` : '') +
      `\n\nEl código vence en 24 horas.`;
    const waLink = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;

    res.json({
      message: 'Código generado',
      code,               // shown to the staff member so they can also copy it
      phone: user.telefono,
      waLink
    });
  } catch (error) {
    next(error);
  }
};
