import User from "../Models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import followModel from "../Models/follow.model.js";

export const getUser = async (req,res)=>{
    const {username} = req.params;
    const user= await User.findOne({userName:username});

    const { hashedPassword, ...detailsWithoutPassword } = user.toObject();

    const followerCount = await followModel.countDocuments({ following: user._id });
    const followingCount = await followModel.countDocuments({ follower: user._id });
  

    const token = req.cookies.token;

  if (!token) {
    res.status(200).json({
      ...detailsWithoutPassword,
      followerCount,
      followingCount,
      isFollowing: false,
    });
  } else {
    jwt.verify(token, process.env.JWT_TOKEN, async (err, payload) => {
      if (!err) {
        const isExists = await followModel.exists({
          follower: payload.userId,
          following: user._id,
        });

        res.status(200).json({
          ...detailsWithoutPassword,
          followerCount,
          followingCount,
          isFollowing: isExists ? true : false,
        });
      }
    });
  }
    
}

export const registerUser = async (req,res)=>{
    const {username, displayName, email, password} = req.body; 
    if(!username || !displayName || !email || !password){
        return res.status(400).json({message:"Please fill all the fields"});
    }
    const newHashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        userName: username,
        displayName: displayName,
        email: email,
        hashedPassword: newHashedPassword
    });

    const token = jwt.sign({userId:user._id}, process.env.JWT_TOKEN );
    res.cookie("token", token, {
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 30*24*60*60*1000
    });

    const { hashedPassword, ...detailsWithoutPassword } = user.toObject();
    res.status(201).json(detailsWithoutPassword);


}

export const loginUser = async (req,res)=>{
    const {email, password} = req.body; 
    if(!email || !password){
        return res.status(400).json({message:"Please fill all the fields"});
    }

    const user = await User.findOne({email:email});
    const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword);
    
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Invalid password"});
    }else if(!user){
        return res.status(400).json({message:"User not found"});
    }

    const token = jwt.sign({userId:user._id}, process.env.JWT_TOKEN );
    res.cookie("token", token, {
        httpOnly:true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 30*24*60*60*1000
    });
   
    const { hashedPassword, ...detailsWithoutPassword } = user.toObject();
    res.status(200).json(detailsWithoutPassword);
    
}

export const logoutUser = async (req,res)=>{
    res.clearCookie("token");
    res.status(200).json({message:"Logged out successfully"});
}

export const followUser = async (req, res) => {
    const { userName : username } = req.params;
  
    const user = await User.findOne({ userName:username });

    const isFollowing = await followModel.exists({
        follower: req.userId,
        following: user._id,
      });
    
      if (isFollowing) {
        await followModel.deleteOne({ follower: req.userId, following: user._id });
      } else {
        await followModel.create({ follower: req.userId, following: user._id });
      }
    
      res.status(200).json({ message: "Successful" });
  };