import express from 'express'
import {getExtract, createExtract} from '../controllers/extractController.js';
import tokenVerify from '../middlewares/tokenMiddleware.js';
import verifyExtractInput from '../middlewares/extractInputMiddleware.js';

const router = express.Router();

router.get('/extract', tokenVerify, getExtract);
router.post('/extract', tokenVerify, verifyExtractInput, createExtract);

export default router;