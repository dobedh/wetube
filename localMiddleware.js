import { join, login } from "./controllers/userController"
import routes from "./routes";

export const localMiddelware = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes
    res.locals.user = {
        isAuthenticated : true,
        id : 1
    }
    next()
}