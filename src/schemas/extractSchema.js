import joi from "joi";

const extractSchema = joi.object({
  description: joi.string().required(),
  type: joi.string().valid('input', 'output').required(),
  price: joi.number().required()
})

export default extractSchema;