
// home
const HOME = "/"
const JOIN = "/join"
const LOGIN = "/login"
const LOGOUT = "/logout"
const SEARCH = "/search"

//user 
const USERS = "/users"
const USERS_DETAIL = "/:id"
const EDIT_PROFILE = "/edit-profile"
const CHANGE_PASSWORD = "/change-password"

//videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id"
const DELETE_VIDEO = "/:id/delete";
const EDIT_VIDEO = "/:id/edit";

const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    users : USERS,
    userDetail : USERS_DETAIL,
    editProfile : EDIT_PROFILE,
    changePassword : CHANGE_PASSWORD,
    videos : VIDEOS,
    upload : UPLOAD,
    videoDetail : VIDEO_DETAIL,
    deleteVideo : DELETE_VIDEO,
    editVideo : EDIT_VIDEO
};

export default routes;
