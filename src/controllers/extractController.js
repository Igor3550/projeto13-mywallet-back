import 'dayjs/locale/pt-br.js'
import db from '../db.js';
import { ObjectId } from 'mongodb';

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
      createdAt: new Date()
    }
    await db.collection('extracts').insertOne(sendExtract)
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500)
  }
}

const deleteExtract = async (req, res) => {
  const {extractId} = req.params
  const user = res.locals.user

  if(!extractId) return res.sendStatus(422);
  try {
    const extract = await db.collection('extracts').findOne({_id:ObjectId(extractId)});
    if(!extract) return res.sendStatus(404)
    if(user._id.toString() !== extract.userId.toString()) return res.sendStatus(401);
    await db.collection('extracts').deleteOne({_id:ObjectId(extractId)});
    res.send({message:'Deleted'})
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export {
  getExtract,
  createExtract,
  deleteExtract
};