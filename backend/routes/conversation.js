import { Router } from 'express';
import findMssgById from '../controllers/convo.js';
import findMssgByConvo from '../controllers/convo.js';
import addMssg from '../controllers/convo.js';
const router = Router();
router.get('/bycon/:convo',(req,res)=>{
    findMssgByConvo(req, res);
})
router.get('/byid/:id', (req, res) => {
    findMssgById(req,res)
});
router.post('/', (req, res) => {
addMssg(req,res)
});