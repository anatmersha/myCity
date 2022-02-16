import { Router } from "express";
import reportsDB from "../controllers/reportsDB.js";
const reportsRoute = Router()

reportsRoute.get('/', (req, res) => {
    reportsDB.reportsData(req, res);
})
reportsRoute.get('/user/:id', (req, res) => {
    reportsDB.findReport(req, res);
})
reportsRoute.post('/user', (req, res) => {
    reportsDB.addReport(req, res);
});
reportsRoute.patch('/user', (req, res) => {
    reportsDB.updateReport(req, res);
})
reportsRoute.delete('/user/:id', (req, res) => {
    reportsDB.deleteReport(req, res);
})

export default reportsRoute