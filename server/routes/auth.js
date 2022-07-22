import express from 'express';
import { signup } from '../controllers/auth.js';

const router = express.Router();

// Create a new user
router.post('/signup', signup);

// Sign in a user
router.post('/signin');

// Google authentication
router.get('/google');

export default router;
