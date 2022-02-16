import dotenv from "dotenv"
import mongodb from "mongodb";
dotenv.config()
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId
const url = process.env.MONGO_URI
const client = MongoClient.connect(url)
const DB = 'mycity'
const usersCollection = 'users'


function usersData(req, res) {
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(usersCollection)
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

function findUser(req, res) {
  const params = req.params.id;
  const object = { _id: ObjectId(params) };
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(usersCollection)
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
function addUser(req, res) {
  const body = req.body;
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(usersCollection)
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
function updateUser(req, res) {
  const body = req.body;
  const params = req.params.id;
  const object = { _id: ObjectId(params) };
  const update = { $set: body };
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(usersCollection)
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

function deleteUser(req, res) {
  const params = req.params.id;
  
  const object = { _id: ObjectId(params) };
  client
    .then((data) => {
      const database = data.db(DB);
      database
        .collection(usersCollection)
        .deleteOne(object)
        .then((doc) => {
          res.send(doc);
        });
    })
    .catch((err) => {
      console.error(err);
    });
}

const usersDB = { usersData, findUser, addUser, updateUser ,deleteUser}
export default usersDB