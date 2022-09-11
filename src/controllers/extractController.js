import dayjs from 'dayjs';
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
  const extract = req.body;
  const user = res.locals.user;

  try {
    const sendExtract = {
      ...extract,
      userId: user._id,
      createdAt:dayjs()
    }
    await db.collection('extracts').insertOne(sendExtract)
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500)
  }
}

export {
  getExtract,
  createExtract
};