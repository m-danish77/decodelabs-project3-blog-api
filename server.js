// External Mondules
import express from "express";

// Local modules
import connectDB from "./configs/mongoose.js";
import authRouter from "./routes/authRoutes.js";
import postsRouter from "./routes/postsRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);

const port = process.env.PORT || 3000;
const startSever = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running at address of http://localhost:${port}`);
  });
};

startSever();
