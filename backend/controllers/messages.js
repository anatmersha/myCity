import dotenv from 'dotenv';
import mongodb from 'mongodb';
import validateMssg from '../validation/validateMssg.js';
dotenv.config();
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const url = process.env.MONGO_URI;
const client = MongoClient.connect(url);
const DB = 'mycity';
const messagesCollection = 'messages';

function findMessagesById(req, res) {
 const params = req.params.id;
 const messgId = { _id: ObjectId(params) };
 client
  .then((data) => {
   const database = data.db(DB);
   database
    .collection(messagesCollection)
    .findOne(messgId)
    .then((docs) => {
     res.send(docs);
    });
  })
  .catch((err) => {
   res.status(404).send({ error: { message: 'Not  Found' } });
   throw err;
  });
}

function findMessagesByConvo(req, res) {
 const params = req.params.id;
 const messgId = { convo: ObjectId(params) };
 client
  .then((data) => {
   const database = data.db(DB);
   database
    .collection(messagesCollection)
    .findOne(messgId)
    .then((docs) => {
     res.send(docs);
    });
  })
  .catch((err) => {
   res.status(404).send({ error: { message: 'Not  Found' } });
   throw err;
  });
}
function addMssg(req, res) {
 const mssg = validateMssg(req.body);
 if (!mssg.status) res.send({ error: { message: mssg.data } }).sendStatus(400);
 client
  .then((data) => {
   const database = data.db(DB);
   database
    .collection(usersCollection)
    .insertOne(mssg)
    .then((docs) => {
     res.send(docs);
    });
  })
  .catch((err) => {
   res.status(400).send({ error: { message: 'Bad Request' } });
   throw err;
  });
}
module.exports = {
 findMessagesByConvo,
 findMessagesById,
 addMssg,
};
