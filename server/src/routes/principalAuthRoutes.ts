import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prisma';

const router = express.Router();

// Principal login endpoint
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check for fixed principal account
    const principal = await prisma.user.findFirst({
      where: { 
        email: process.env.PRINCIPAL_EMAIL || 'principal@school.com',
        role: 'principal'
      }
    });

    if (!principal) {
      // Create principal account if it doesn't exist
      const hashedPassword = await bcrypt.hash(
        process.env.PRINCIPAL_PASSWORD || 'principal123',
        10
      );
      
      const newPrincipal = await prisma.user.create({
        data: {
          email: process.env.PRINCIPAL_EMAIL || 'principal@school.com',
          name: 'School Principal',
          password: hashedPassword,
          role: 'principal'
        }
      });

      const token = jwt.sign(
        { userId: newPrincipal.id, role: newPrincipal.role },
        process.env.JWT_SECRET || 'secret',
        { expiresIn: '1h' }
      );

      return res.json({
        token,
        user: {
          id: newPrincipal.id,
          name: newPrincipal.name,
          email: newPrincipal.email,
          role: newPrincipal.role
        }
      });
    }

    const isPasswordValid = await bcrypt.compare(password, principal.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign(
      { userId: principal.id, role: principal.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1h' }
    );

    res.json({
      token,
      user: {
        id: principal.id,
        name: principal.name,
        email: principal.email,
        role: principal.role
      }
    });
  } catch (error: any) {
    console.error('Principal login error:', error);
    res.status(500).json({ error: 'Login failed', details: error.message });
  }
});

export default router; 