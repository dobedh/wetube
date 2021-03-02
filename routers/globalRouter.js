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
  getMe,
  facebookLogin,
  postFacebookLogin,
  kakaoLogin,
  postKakaoLogin,
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
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

//Facebook Login
globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);

// Kakao Login
globalRouter.get(routes.kakao, kakaoLogin);
globalRouter.get(
  routes.kakaoCallback,
  passport.authenticate("kakao", { failureRedirect: "/login" }),
  postKakaoLogin
);

//search
globalRouter.get(routes.search, search);

globalRouter.get(routes.home, home);

globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.me, getMe);

export default globalRouter;
