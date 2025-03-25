import express from 'express'
import { getPins,getPin } from '../Controller/pin.controller.js';

const router = express.Router();

router.get('/', getPins);
router.get('/:id', getPin);

export default router;