import express from 'express'
import { getPins,getPin,createPin,interactionCheck,interact} from '../Controller/pin.controller.js';
import { verifyToken } from '../Middlewares/verifyToken.js';

const router = express.Router();

router.get('/', getPins);
router.get('/:id', getPin);
router.post('/',verifyToken, createPin);
router.get("/interaction-check/:id", interactionCheck);
router.post("/interact/:id",verifyToken, interact);


export default router;