import express from 'express'
import authRouter from './routes/authRouter.js'
import extractRouter from './routes/extractRouter.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.json());

app.use(authRouter);
app.use(extractRouter);

app.listen(5000, () => console.log('Listen on port 5000'))