import express from "express";
import passport from "passport";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  getLogin,
  githubLogin,
  logout,
  postGithubLogin,
  postJoin,
  postLogin,
} from "../controllers/userController";
import { onlyPrivate, onlyPublic } from "../localMiddleware";

const globalRouter = express.Router();

// join
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);

//login
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

//GITHUB
globalRouter.get(routes.gitHub, githubLogin);
globalRouter.get(
  routes.gitHubCallback,
  passport.authenticate("github", { failureRedirect: routes.login }),
  postGithubLogin
);

//search
globalRouter.get(routes.search, search);

globalRouter.get(routes.home, home);

globalRouter.get(routes.logout, onlyPrivate, logout);

export default globalRouter;
