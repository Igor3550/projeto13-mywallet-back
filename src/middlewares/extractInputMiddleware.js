import extractSchema from '../schemas/extractSchema.js'

function verifyExtractInput (req, res, next) {
  const extract = req.body;
  const validation = extractSchema.validate(extract);

  try {
    if(validation.error) {
      const error = validation.error.details[0].message
      return res.status(422).send(error);
    }
    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export default verifyExtractInput;