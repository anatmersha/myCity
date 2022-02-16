import { Router } from 'express';
import usersDB from '../controllers/usersDB.js';
const router = Router();

router.get('/', (req, res) => {
 usersDB.usersData(req, res);
});
router.get('/user/:id', (req, res) => {
 usersDB.findUser(req, res);
});
router.post('/user', (req, res) => {
 usersDB.addUser(req, res);
});
router.patch('/user', (req, res) => {
 usersDB.updateUser(req, res);
});
router.delete('/user/:id', (req, res) => {
 usersDB.deleteUser(req, res);
});

export { router };
