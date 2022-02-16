import dotenv from "dotenv"
import mongodb from "mongodb";
import axios from "axios";
dotenv.config()
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId
const url = process.env.MONGO_URI
const client = MongoClient.connect(url)


const Database = { }
export default Database
