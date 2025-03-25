import express from 'express'
import { getPostComments , addComment} from '../Controller/comment.controller.js';
import { verifyToken } from '../Middlewares/verifyToken.js';

const router = express.Router();

router.get("/:postId", getPostComments);
router.post("/",verifyToken, addComment);

export default router;