import express from 'express'
import { signIn, signUp } from '../controllers/authController.js';
import validateUserInput from '../middlewares/authMiddleware.js'
const router = express.Router();

router.post('/login', signIn);
router.post('/sign-up', validateUserInput, signUp);

export default router;