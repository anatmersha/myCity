import { Router } from "express";
import usersDB from "../controllers/usersDB.js";
const userRoute = Router()

userRoute.get('/', (req, res) => {
    usersDB.usersData(req, res);
})
userRoute.get('/user/:id', (req, res) => {
    usersDB.findUser(req, res);
})
userRoute.post('/user', (req, res) => {
    usersDB.addUser(req, res);
});
userRoute.patch('/user', (req, res) => {
    usersDB.updateUser(req, res);
})
userRoute.delete('/user/:id', (req, res) => {
    usersDB.deleteUser(req, res);
})

export default userRoute

