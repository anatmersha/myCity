import dotenv from 'dotenv';
import mongodb from 'mongodb';
import messagesAuth from '../validation/messagesAuth.js';
dotenv.config();
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const url = process.env.MONGO_URI;
const client = MongoClient.connect(url);
const DB = 'mycity';
const messagesCollection = 'messages';



function messagesData(req, res) {
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(messagesCollection)
        .find({})
        .toArray()
        .then((docs) => {
          res.send(docs)
        });
    })
    .catch((err) => {
      res.status(400).send({ error: { message: 'Bad Request' } });
      throw err
    });
}

function findMessage(req, res) {
 const params = req.params.id;
 const object = { _id: ObjectId(params) };
 client
  .then((data) => {
   const database = data.db(DB);
   database
    .collection(messagesCollection)
    .findOne(object)
    .then((docs) => {
     res.send(docs);
    });
  })
  .catch((err) => {
   res.status(404).send({ error: { message: 'Not  Found' } });
   throw err;
  });
}

function findByRoom(req, res) {
 const params = req.params.id;
 const object = { room: params };
 client
  .then((data) => {
   const database = data.db(DB);
   database
    .collection(messagesCollection)
    .findOne(object)
    .then((docs) => {
     res.send(docs);
    });
  })
  .catch((err) => {
   res.status(404).send({ error: { message: 'Not  Found' } });
   throw err;
  });
}
function addMessage(req, res) {
 const object = messagesAuth(req.body);
 if (!object.status) res.send({ error: { message: object.data } }).sendStatus(400);
 client
  .then((data) => {
   const database = data.db(DB);
   database
    .collection(messagesCollection)
    .insertOne(object)
    .then((docs) => {
     res.send(docs);
    });
  })
  .catch((err) => {
   res.status(400).send({ error: { message: 'Bad Request' } });
   throw err;
  });
}
function updateMessage(req, res) {
  const body = req.body;
  const params = req.params.id;
  const object = { _id: ObjectId(params) };
  const update = { $set: body };
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(messagesCollection)
        .updateOne(object, update)
        .then((docs) => {
          res.send(docs)
        });
    })
    .catch((err) => {
      res.status(404).send({ error: { message: 'Not  Found' } });
      throw err
    });
}

function deleteMessage(req, res) {
  const params = req.params.id;
  
  const object = { _id: ObjectId(params) };
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(messagesCollection)
        .deleteOne(object)
        .then((doc) => {
          res.send(doc);
        });
    })
    .catch((err) => {
      console.error(err);
    });
}
const messagesDB =  {messagesData,findMessage,findByRoom,addMessage,updateMessage,deleteMessage}
export default messagesDB