import express from 'express';
import { authenticateToken, requireRole } from '../middleware/auth';

const router = express.Router();

router.get('/admin', authenticateToken, requireRole(['admin']), (req, res) => {
  res.json({ message: 'Admin route' });
});

router.get('/teacher', authenticateToken, requireRole(['teacher']), (req, res) => {
  res.json({ message: 'Teacher route' });
});

router.get('/student', authenticateToken, requireRole(['student']), (req, res) => {
  res.json({ message: 'Student route' });
});

export default router; 