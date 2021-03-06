import express from "express";
import dotenv from "dotenv"
import {router as usersRoute} from './routes/users.js'
import {router as reportsRoute} from './routes/reports.js'
import {router as messagesRoute} from './routes/messages.js'
import {router as roomsRoute} from './routes/rooms.js'

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use('/users',usersRoute)
app.use('/reports',reportsRoute)
app.use('/messages',messagesRoute)
app.use('/rooms',roomsRoute)


app.get("*", (req, res) => {
  res.send('hello')
})




app.listen(PORT);