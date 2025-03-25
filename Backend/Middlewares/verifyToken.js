import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  
  if(!token) return res.status(401).json({msg:"Unauthorized"});

  jwt .verify(token, process.env.JWT_TOKEN, async (err, payload)=>{  
    
    if(err){
      res.status(403).json({msg:"Invalid Token"});
    }
    req.userId=payload.userId;
    next();
  });
}