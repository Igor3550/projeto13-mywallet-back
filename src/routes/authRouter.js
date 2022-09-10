import express from 'express'
import { signIn, signUp } from '../controllers/authController.js';
const router = express.Router();

router.post('/', signIn);
router.post('/sign-up', signUp)

export default router;