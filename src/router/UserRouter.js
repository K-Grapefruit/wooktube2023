import express from "express";
import {
  edit,
  remove,
  join,
  login,
  loggout,
  see,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", loggout);
userRouter.get("/edit", edit);
userRouter.get("/delete", remove);
userRouter.get("/:id", see);

export default userRouter;
