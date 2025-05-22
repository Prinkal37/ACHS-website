import express from 'express';
import prisma from '../prisma';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

// Apply for admission
router.post('/apply', authenticateToken, async (req, res) => {
  const userId = req.user.userId;
  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    address,
    phoneNumber,
    previousSchool,
    grade,
    parentName,
    parentPhone,
    parentEmail
  } = req.body;

  try {
    // Check if admission is open
    const admissionStatus = await prisma.admissionStatus.findFirst({
      where: { isOpen: true }
    });

    if (!admissionStatus) {
      return res.status(403).json({ error: 'Admission is currently closed' });
    }

    // Create admission application
    const application = await prisma.admissionApplication.create({
      data: {
        userId,
        firstName,
        lastName,
        dateOfBirth: new Date(dateOfBirth),
        gender,
        address,
        phoneNumber,
        previousSchool,
        grade,
        parentName,
        parentPhone,
        parentEmail,
        status: 'PENDING'
      }
    });

    res.status(201).json({ 
      message: 'Application submitted successfully',
      applicationId: application.id
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Get admission status
router.get('/status/:applicationId', authenticateToken, async (req, res) => {
  const { applicationId } = req.params;
  const userId = req.user.userId;

  try {
    const application = await prisma.admissionApplication.findFirst({
      where: {
        id: applicationId,
        userId
      }
    });

    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    res.json({
      status: application.status,
      registrationNumber: application.registrationNumber,
      rollNumber: application.rollNumber
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch application status' });
  }
});

// Admin route to approve admission and generate registration/roll numbers
router.post('/approve/:applicationId', authenticateToken, async (req, res) => {
  const { applicationId } = req.params;
  
  // Check if user is admin
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  try {
    // Generate unique registration and roll numbers
    const registrationNumber = `REG${Date.now()}`;
    const rollNumber = `ROLL${Date.now()}`;

    // Update application status and numbers
    const application = await prisma.admissionApplication.update({
      where: { id: applicationId },
      data: {
        status: 'APPROVED',
        registrationNumber,
        rollNumber
      }
    });

    // Update user role to student
    await prisma.user.update({
      where: { id: application.userId },
      data: { role: 'student' }
    });

    res.json({
      message: 'Application approved successfully',
      registrationNumber,
      rollNumber
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to approve application' });
  }
});

export default router; 