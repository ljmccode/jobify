import express from 'express';
const router = express.Router();
import authenticateUser from '../middleware/authentication.js';

import { login, register, updateUser } from '../controllers/auth.js';

router.post('/register', register);
router.post('/login', login);
router.patch('/updateuser', authenticateUser, updateUser)

export default router;
