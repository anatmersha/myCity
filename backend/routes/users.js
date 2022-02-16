import { Router } from "express";
import usersDB from "../controllers/usersDB.js";
const usersRoute = Router()

usersRoute.get('/', (req, res) => {
    usersDB.usersData(req, res);
})
usersRoute.get('/user/:id', (req, res) => {
    usersDB.findUser(req, res);
})
usersRoute.post('/user', (req, res) => {
    usersDB.addUser(req, res);
});
usersRoute.patch('/user', (req, res) => {
    usersDB.updateUser(req, res);
})
usersRoute.delete('/user/:id', (req, res) => {
    usersDB.deleteUser(req, res);
})

export default usersRoute

