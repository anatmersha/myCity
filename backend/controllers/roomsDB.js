import dotenv from "dotenv"
import mongodb from "mongodb";
dotenv.config()
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId
const url = process.env.MONGO_URI
const client = MongoClient.connect(url)
const DB = 'mycity'
const roomsCollection = 'rooms'


function roomsData(req, res) {
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(roomsCollection)
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

function findRoom(req, res) {
  const params = req.params.id;
  const object = { _id: ObjectId(params) };
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(roomsCollection)
        .findOne(object)
        .then((docs) => {
          res.send(docs)
        });
    })
    .catch((err) => {
      res.status(404).send({ error: { message: 'Not  Found' } });
      throw err
    });
}
function addRoom(req, res) {
  const body = req.body;
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(roomsCollection)
        .insertOne(body)
        .then((docs) => {
          res.send(docs)
        });
    })
    .catch((err) => {
      res.status(400).send({ error: { message: 'Bad Request' } });
      throw err
    });
}
function updateRoom(req, res) {
  const body = req.body;
  const params = req.params.id;
  const object = { _id: ObjectId(params) };
  const update = { $set: body };
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(roomsCollection)
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

function deleteRoom(req, res) {
  const params = req.params.id;
  
  const object = { _id: ObjectId(params) };
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(roomsCollection)
        .deleteOne(object)
        .then((doc) => {
          res.send(doc);
        });
    })
    .catch((err) => {
      console.error(err);
    });
}

const RoomsDB = { roomsData, findRoom, addRoom, updateRoom ,deleteRoom}
export default RoomsDB