import express from 'express'
import { test } from '../Controller/comment.controller.js';

const router = express.Router();

router.get('/test', test);

export default router;