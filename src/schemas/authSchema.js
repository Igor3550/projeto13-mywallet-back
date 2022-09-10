import joi from 'joi';

const userInputSchema = joi.object({
  name:joi.string().required(),
  email:joi.string().email().required(),
  password:joi.string().required()
})

export default userInputSchema;