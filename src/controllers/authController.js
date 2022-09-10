import db from '../db.js'
import { v4 as uuid } from 'uuid'
import bcrypt from 'bcrypt';

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.collection('users').findOne({email});
    if(user && bcrypt.compareSync(password, user.password)){
      const token = uuid()
      await db.collection('sessions').insertOne({token, userId: user._id})
      res.send(token);
    }else{
      return res.sendStatus(401)
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

const signUp = (req, res) => {
  res.send('Hello World!');
}

export {
  signIn,
  signUp
}