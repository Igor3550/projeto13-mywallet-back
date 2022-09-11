import db from '../db.js';

const getExtract = async (req, res) => {
  const user = res.locals.user
  try {
    const extract = await db.collection('extracts').find({userId:user._id}).toArray()
    res.send(extract);
  } catch (error) {
    console.log(error)
    return res.sendStatus(500);
  }
}

const createExtract = async (req, res) => {
  
}

export {
  getExtract
};