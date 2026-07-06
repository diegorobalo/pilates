import express from 'express';
import {
  createSubscription,
  getMySubscriptions,
  getSubscriptions,
  updateSubscription,
  cancelSubscription,
  deleteSubscription,
  generateReservationsFromSubscriptions
} from '../controllers/subscriptionController.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

// Alumna: get/create/manage own subscriptions
router.post('/', authMiddleware, requireRole('ALUMNA'), createSubscription);
router.get('/mine', authMiddleware, requireRole('ALUMNA'), getMySubscriptions);
router.put('/:id', authMiddleware, requireRole('ALUMNA'), updateSubscription);
router.post('/:id/cancel', authMiddleware, requireRole('ALUMNA'), cancelSubscription);
router.delete('/:id', authMiddleware, requireRole('ALUMNA'), deleteSubscription);

// Staff: view all subscriptions
router.get('/', authMiddleware, requireRole(['DUEÑA']), getSubscriptions);

// Admin: generate reservations (usually called by cron)
router.post('/generate-reservations', authMiddleware, requireRole('ADMIN'), generateReservationsFromSubscriptions);

export default router;
