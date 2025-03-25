import express from 'express'
import {getUser,registerUser,loginUser,logoutUser} from '../Controller/user.controller.js';

const router = express.Router();

router.get("/:username", getUser);
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.post("/auth/logout", logoutUser);

export default router;