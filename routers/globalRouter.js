import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from "../controllers/userController";

const globalRouter = express.Router();

// join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

//login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

//search
globalRouter.get(routes.search, search);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);

export default globalRouter;
