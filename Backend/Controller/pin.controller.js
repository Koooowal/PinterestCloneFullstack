import Pin from '../Models/pin.model.js';
import User from "../Models/user.model.js";

export const getPins = async (req,res)=>{
  const pageNumber=Number(req.query.cursor) || 0;
  const LIMIT = 21;
  const search =req.query.search;
  const userId = req.query.userId;
  const boardId = req.query.boardId;
  const pins = await Pin.find(search ? {
    $or:[
      {title:{$regex:search,$options:'i'}},
      {tags:{$in:[search]}}
    ]
  }: userId ? {user:userId} : 
  boardId ? {board:boardId} : 
  {}
)
  .limit(LIMIT)
  .skip(pageNumber * LIMIT);

  const hasNextPage = pins.length === LIMIT;
  res.status(200).json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null });
}

export const getPin = async (req,res)=>{
  const {id} = req.params;
  const pin = await Pin.findById(id).populate(
    "user",
    "userName img displayName"
  );
  res.status(200).json(pin);
}