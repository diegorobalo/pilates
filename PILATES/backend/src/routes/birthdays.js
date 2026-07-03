import express from 'express';
import { getMonthBirthdays } from '../controllers/birthdayController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, getMonthBirthdays);

export default router;
