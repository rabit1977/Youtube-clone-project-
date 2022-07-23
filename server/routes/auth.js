import express from 'express';
import { signup } from '../controllers/auth.js';
import { signin } from '../controllers/auth.js';

const router = express.Router();

// Create a new user
router.post('/signup', signup);

// Sign in a user
router.post('/signin', signin);

// Google authentication
router.get('/google');

export default router;
