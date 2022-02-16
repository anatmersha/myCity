import express from "express";
import dotenv from "dotenv"
import {router as usersRoute} from './routes/users.js'
import {router as reportsRoute} from './routes/reports.js'

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use('/users',usersRoute)
app.use('/reports',reportsRoute)


app.get("*", (req, res) => {
  res.send('hello')
})




app.listen(PORT);