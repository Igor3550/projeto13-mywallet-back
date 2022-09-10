import express from 'express'
import { signIn, signUp } from '../controllers/authController.js';
import validateUserInput from '../middlewares/authMiddleware.js'
const router = express.Router();

router.post('/', signIn);
router.use(validateUserInput)
router.post('/sign-up', signUp)

export default router;