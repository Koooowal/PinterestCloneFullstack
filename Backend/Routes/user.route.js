import express from 'express'
import { test } from '../Controller/user.controller.js';
import User from '../Models/user.model.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.post("/create",async (req,res)=>{
    const userInformation = req.body;
    console.log(userInformation);
    res.json("User created successfully");

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await User.create({
      displayName: req.body.displayName,
      email: req.body.email,
      userName: req.body.userName,
      hashedPassword: hashedPassword,

    });
});

router.get('/fetch', async (req,res)=>{
    const users = await User.find();
    res.json(users);
});

router.get('/test', test);

export default router;