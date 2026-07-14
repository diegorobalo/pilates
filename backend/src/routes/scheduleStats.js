import express from 'express';
import { getScheduleStats, assignProfesora, getProfesoras } from '../controllers/scheduleStatsController.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, requireRole(['DUEÑA']), getScheduleStats);
router.put('/:id/assign', authMiddleware, requireRole(['DUEÑA']), assignProfesora);
router.get('/profesoras', authMiddleware, requireRole(['DUEÑA']), getProfesoras);

export default router;
