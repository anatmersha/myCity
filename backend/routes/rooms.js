import { Router } from "express";
import roomsDB from "../controllers/roomsDB.js";
const router = Router()

router.get('/', (req, res) => {
    roomsDB.roomsData(req, res);
})
router.get('/room/:id', (req, res) => {
    roomsDB.findRoom(req, res);
})
router.post('/room', (req, res) => {
    roomsDB.addRoom(req, res);6
});
router.patch('/room/:id', (req, res) => {
    roomsDB.updateRoom(req, res);
})
router.patch('/room/update/:id', (req, res) => {
    roomsDB.updateRoomPush(req, res);
})
router.delete('/room/:id', (req, res) => {
    roomsDB.deleteRoom(req, res);
})

export { router}