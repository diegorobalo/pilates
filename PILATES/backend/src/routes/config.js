import express from 'express';
import {
  getConfig,
  getConfigValue,
  updateConfigValue,
  initializeConfig
} from '../controllers/configController.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

/**
 * GET /api/config
 * Get all configuration values
 * Public route (no auth required) - read-only
 */
router.get('/', getConfig);

/**
 * GET /api/config/:clave
 * Get specific configuration value
 * Public route (no auth required) - read-only
 */
router.get('/:clave', getConfigValue);

/**
 * PUT /api/config/:clave
 * Update configuration value
 * Only ADMIN can update
 */
router.put('/:clave', authMiddleware, requireRole('ADMIN'), updateConfigValue);

/**
 * POST /api/config/init
 * Initialize default configuration
 * Only ADMIN can initialize
 */
router.post('/init', authMiddleware, requireRole('ADMIN'), initializeConfig);

export default router;
