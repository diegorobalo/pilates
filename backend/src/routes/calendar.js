import express from 'express';
import {
  createException,
  getExceptions,
  updateException,
  deleteException,
  seedArgentineHolidays
} from '../controllers/calendarController.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authMiddleware, requireRole(['DUEÑA']), createException);
router.get('/', authMiddleware, getExceptions);
router.put('/:id', authMiddleware, requireRole(['DUEÑA']), updateException);
router.delete('/:id', authMiddleware, requireRole(['DUEÑA']), deleteException);

router.post('/seed-holidays', authMiddleware, requireRole(['ADMIN']), seedArgentineHolidays);

export default router;
