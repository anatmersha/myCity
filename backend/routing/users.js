import { Router } from "express";
import database from "../utils.js";
const userRoute=Router()
userRoute.get('/', (req, res) => {
 database.usersData(req, res);
});userRoute.patch('/', (req, res) => {
 res.send('hello');
});userRoute.delete('/', (req, res) => {
 res.send('hello');
});userRoute.post('/', (req, res) => {
 res.send('hello');
});
export default userRoute

