import express from 'express'
import authRouter from './routes/authRouter.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.json());

app.use(authRouter);

app.listen(5000, () => console.log('Listen on port 5000'))