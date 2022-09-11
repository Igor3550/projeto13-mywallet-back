import express from 'express'
import {getExtract} from '../controllers/extractController.js';
import tokenVerify from '../middlewares/tokenMiddleware.js';

const router = express.Router();

router.get('/extract', tokenVerify, getExtract)

export default router;