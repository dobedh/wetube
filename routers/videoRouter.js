import express from "express";
import { deleteVideo, getEditVideo, postEditVideo, getUpload, postUpload, upload, videoDetail, videos } from "../controllers/videoController";
import { uploadVideo } from "../localMiddleware";
import routes from "../routes";

const videoRouter = express.Router();

// Uload Video
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo)

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;

