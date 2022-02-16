import express from "express";
import dotenv from "dotenv"
import database from './utils.js'
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());


app.get("/users", (req, res) => {
    database.usersData(req, res)
  })
  
app.get("*", (req, res) => {
  res.send('hello')
})




app.listen(PORT);