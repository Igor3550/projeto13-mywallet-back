import userInputSchema from '../schemas/authSchema.js';
import db from '../db.js'

async function validateUserInput (req, res, next) {
  const user = req.body
  const validation = userInputSchema.validate(user);
  if(validation.error){
    const error = validation.error.details[0].message
    return res.status(422).send({message: error});
  }
  const existentUser = await db.collection('users').findOne({email:user.email})
  if(existentUser){
    return res.status(409).send({message: 'E-mail já existente'})
  }
  next();
}

export default validateUserInput;
