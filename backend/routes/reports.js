import { Router } from "express";
import reportsDB from "../controllers/reportsDB.js";
const router = Router()

router.get('/', (req, res) => {
    reportsDB.reportsData(req, res);
})
router.get('/user/:id', (req, res) => {
    reportsDB.findReport(req, res);
})
router.post('/user', (req, res) => {
    reportsDB.addReport(req, res);
});
router.patch('/user', (req, res) => {
    reportsDB.updateReport(req, res);
})
router.delete('/user/:id', (req, res) => {
    reportsDB.deleteReport(req, res);
})

export { router}