import db from '../db.js'
import { v4 as uuid } from 'uuid'
import bcrypt from 'bcrypt';

const signIn = async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) return res.sendStatus(401)
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

const signUp = async (req, res) => {
  const user = req.body
  try {
    const passwordHash = bcrypt.hashSync(user.password, 10);
    await db.collection('users').insertOne({...user, password: passwordHash})
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500)
  }
}

export {
  signIn,
  signUp
}