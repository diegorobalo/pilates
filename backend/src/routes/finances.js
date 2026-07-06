import express from 'express';
import {
  createStudentPayment,
  getStudentPayments,
  getAllStudentPayments,
  updateStudentPayment,
  deleteStudentPayment,
  createTeacherPayment,
  getTeacherPayments,
  getAllTeacherPayments,
  createExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
  getFinancialSummary,
  getStudentDebtReport
} from '../controllers/financeController.js';
import { authMiddleware, requireRole } from '../middleware/auth.js';

const router = express.Router();

// Only DUEÑA and ADMIN can manage finances
const STAFF = ['DUEÑA'];

// ==================== STUDENT PAYMENTS ====================
router.post(
  '/payments/student',
  authMiddleware,
  requireRole(STAFF),
  createStudentPayment
);

router.get(
  '/payments/student/:alumna_id',
  authMiddleware,
  requireRole(STAFF),
  getStudentPayments
);

router.get(
  '/payments/student',
  authMiddleware,
  requireRole(STAFF),
  getAllStudentPayments
);

router.put(
  '/payments/student/:id',
  authMiddleware,
  requireRole(STAFF),
  updateStudentPayment
);

router.delete(
  '/payments/student/:id',
  authMiddleware,
  requireRole(STAFF),
  deleteStudentPayment
);

// ==================== TEACHER PAYMENTS ====================
router.post(
  '/payments/teacher',
  authMiddleware,
  requireRole(STAFF),
  createTeacherPayment
);

router.get(
  '/payments/teacher/:profesora_id',
  authMiddleware,
  requireRole(STAFF),
  getTeacherPayments
);

router.get(
  '/payments/teacher',
  authMiddleware,
  requireRole(STAFF),
  getAllTeacherPayments
);

// ==================== EXPENSES ====================
router.post(
  '/expenses',
  authMiddleware,
  requireRole(STAFF),
  createExpense
);

router.get(
  '/expenses',
  authMiddleware,
  requireRole(STAFF),
  getExpenses
);

router.put(
  '/expenses/:id',
  authMiddleware,
  requireRole(STAFF),
  updateExpense
);

router.delete(
  '/expenses/:id',
  authMiddleware,
  requireRole(STAFF),
  deleteExpense
);

// ==================== REPORTS ====================
router.get(
  '/summary',
  authMiddleware,
  requireRole(STAFF),
  getFinancialSummary
);

router.get(
  '/debt-report',
  authMiddleware,
  requireRole(STAFF),
  getStudentDebtReport
);

export default router;
