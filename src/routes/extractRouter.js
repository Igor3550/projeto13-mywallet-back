import express from 'express'
import {getExtract, createExtract, deleteExtract} from '../controllers/extractController.js';
import tokenVerify from '../middlewares/tokenMiddleware.js';
import verifyExtractInput from '../middlewares/extractInputMiddleware.js';

const router = express.Router();

router.get('/extract', tokenVerify, getExtract);
router.post('/extract', tokenVerify, verifyExtractInput, createExtract);
router.delete('/extract/:extractId', tokenVerify, deleteExtract);

export default router;