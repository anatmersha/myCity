import express from "express";
import dotenv from "dotenv"
import path from 'path'
import { fileURLToPath } from 'url';
dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
console.log('123');


// app.use(express.static(path.join(__dirname, "client", "build")));
// app.get("*", (req, resp) => {
//   resp.sendFile(path.join(__dirname, "client", "build", "index.html"));
// })



app.listen(PORT);