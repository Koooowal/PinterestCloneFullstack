import express from 'express';
import userRouter from './Routes/user.route.js';
import pinRouter from './Routes/pin.route.js';
import commentRouter from './Routes/comment.route.js';
import boardRouter from './Routes/board.route.js';
import connectDB from './Utilities/connectDB.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}));
app.use(cookieParser());

app.use("/users", userRouter);
app.use("/pins", pinRouter);
app.use("/comments", commentRouter);
app.use("/boards", boardRouter);


app.listen(3000, () => {
  connectDB();
  console.log('Server is running on port 3000');
});