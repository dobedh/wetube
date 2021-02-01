import express from "express";
import { deleteVideo, editVideo, getUpload, postUpload, upload, videoDetail, videos } from "../controllers/videoController";
import { uploadVideo } from "../localMiddleware";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;

