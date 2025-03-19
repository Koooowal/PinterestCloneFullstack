import mongoose,{Schema} from "mongoose";

const commentSchema = new Schema({
  description:{
    type:String,
    required:true,
  },
  pin:{
    type:Schema.Types.ObjectId,
    ref:"Board",
    required:true,
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true,
  },
},{timestamps:true});

export default mongoose.model("Comment",commentSchema);