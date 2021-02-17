import express from "express";
import {
  changePassword,
  editProfile,
  userDetail,
  users,
} from "../controllers/userController";
import { onlyPrivate } from "../localMiddleware";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), onlyPrivate, userDetail);

export default userRouter;
