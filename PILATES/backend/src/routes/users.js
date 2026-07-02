import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deactivateUser,
  createOrUpdatePlan,
  getPlansByAlumnaId,
  deletePlan
} from '../controllers/userController.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

/**
 * POST /api/users
 * Create a new user
 * Only DUEÑA can create users
 * Body: { nombre, telefono, tipo, [dni, estado, datos_emergencia_*, alergias, restricciones_medicas] }
 */
router.post('/', authMiddleware, requireRole(['DUEÑA', 'ADMIN']), createUser);

/**
 * GET /api/users
 * Get all users, optionally filtered by tipo
 * Query params: ?tipo=ALUMNA
 * DUEÑA and ADMIN can list all users
 */
router.get('/', authMiddleware, requireRole(['DUEÑA', 'ADMIN']), getAllUsers);

/**
 * GET /api/users/:id
 * Get a single user by ID
 * DUEÑA and ADMIN can view any user
 */
router.get('/:id', authMiddleware, requireRole(['DUEÑA', 'ADMIN']), getUserById);

/**
 * PUT /api/users/:id
 * Update a user
 * Body: { [nombre, telefono, tipo, dni, estado, datos_emergencia_*, alergias, restricciones_medicas] }
 * DUEÑA and ADMIN can update users
 */
router.put('/:id', authMiddleware, requireRole(['DUEÑA', 'ADMIN']), updateUser);

/**
 * DELETE /api/users/:id
 * Deactivate a user (soft delete)
 * DUEÑA and ADMIN can deactivate users
 */
router.delete('/:id', authMiddleware, requireRole(['DUEÑA', 'ADMIN']), deactivateUser);

/**
 * POST /api/users/:id/plans
 * Create or update a weekly plan for an alumna
 * Body: { dia_semana, hora, [activo, plan_id] }
 * - If plan_id is provided: update existing plan
 * - Otherwise: create new plan
 * DUEÑA and ADMIN can manage plans
 */
router.post('/:id/plans', authMiddleware, requireRole(['DUEÑA', 'ADMIN']), createOrUpdatePlan);

/**
 * GET /api/users/:id/plans
 * Get all weekly plans for an alumna
 * DUEÑA and ADMIN can view plans
 */
router.get('/:id/plans', authMiddleware, requireRole(['DUEÑA', 'ADMIN']), getPlansByAlumnaId);

/**
 * DELETE /api/users/:id/plans/:planId
 * Delete a weekly plan
 * DUEÑA and ADMIN can delete plans
 */
router.delete('/:id/plans/:planId', authMiddleware, requireRole(['DUEÑA', 'ADMIN']), deletePlan);

export default router;
