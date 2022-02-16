import dotenv from "dotenv"
import mongodb from "mongodb";
import axios from "axios";
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



const Database = { usersData }
export default Database
