import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";

const app = express();

const port = 4000;

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("hi server is running here");
});

app.listen(port, () => {
  console.log("your app is listing at port pe number --->", port);
});
