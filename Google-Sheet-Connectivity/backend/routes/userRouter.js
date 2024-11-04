import express from "express";

import { getDataFromTable } from "../controllers/userControllers.js";

const userRouter = express.Router();

userRouter.get("/getData", getDataFromTable);

export default userRouter;
