import express from "express";
import dotenv from "dotenv"
import userRoute from './routes/users.js'
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use('/users',userRoute)


  
app.get("*", (req, res) => {
  res.send('hello')
})




app.listen(PORT);