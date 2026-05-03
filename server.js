// External Mondules
import express from "express";

// Local modules
import connectDB from "./configs/mongoose.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
  res.send("1st response");
});

const port = process.env.PORT || 3000;
const startSever = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running at address of http://localhost:${port}`);
  });
};

startSever();
