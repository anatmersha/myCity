import { Router } from "express";
import reportsDB from "../controllers/reportsDB.js";
const router = Router()

router.get('/', (req, res) => {
    reportsDB.reportsData(req, res);
})
router.get('/report/:id', (req, res) => {
    reportsDB.findReport(req, res);
})
router.post('/report', (req, res) => {
    reportsDB.addReport(req, res);
});
router.patch('/report/:id', (req, res) => {
    reportsDB.updateReport(req, res);
})
router.delete('/report/:id', (req, res) => {
    reportsDB.deleteReport(req, res);
})

export { router}