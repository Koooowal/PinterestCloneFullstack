import express from 'express';
import userRouter from './Routes/user.route.js';
import pinRouter from './Routes/pin.route.js';
import commentRouter from './Routes/comment.route.js';
import boardRouter from './Routes/board.route.js';
import connectDB from './Utilities/connectDB.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';

const app = express();
app.use(express.json());
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}));
app.use(cookieParser());
app.use(fileUpload());

app.use("/users", userRouter);
app.use("/pins", pinRouter);
app.use("/comments", commentRouter);
app.use("/boards", boardRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});


app.listen(process.env.PORT, () => {
  connectDB();
  console.log('Server is running on port 3000');
});