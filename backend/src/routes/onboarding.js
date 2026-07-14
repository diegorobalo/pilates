import express from 'express';
import { completeProfile, getAlumnaProfile } from '../controllers/onboardingController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.put('/:id/complete', authMiddleware, completeProfile);
router.get('/:id', authMiddleware, getAlumnaProfile);

export default router;
