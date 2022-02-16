import { Router } from 'express';
import messagesDB from '../controllers/messagesDB.js';
const router = Router();

router.get('/', (req, res) => {
    messagesDB.messagesData(req, res);
});
router.get('/message/:id', (req, res) => {
    messagesDB.findMessage(req, res);
});
router.get('/room/:id', (req, res) => {
    messagesDB.findByRoom(req, res);
});
router.post('/message', (req, res) => {
    messagesDB.addMessage(req, res);
});
router.patch('/message/:id', (req, res) => {
    messagesDB.updateMessage(req, res);
});
router.delete('/message/:id', (req, res) => {
    messagesDB.deleteUser(req, res);
});

export { router };