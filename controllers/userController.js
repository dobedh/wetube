import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("Join", { pageTitle : "Join" })
}

export const postJoin = (req, res) => {
    const {
        body : {name, email, password, password2}
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("Join", { pageTitle : "Join" })
    } else {
        res.redirect(routes.home)
    }
}

export const login = (req, res) => res.render("login", { pageTitle : "login" }) 
export const logout = (req, res) => res.render("logout", { pageTitle : "logout" })
export const users = (req, res) => res.render("users", { pageTitle : "users" })
export const userDetail = (req, res) => res.render("userDetail", { pageTitle : "User Detail" }) 
export const editProfile = (req, res) => res.render("editProfile", { pageTitle : "Edit Profile" })
export const changePassword = (req, res) => res.render("changePassword", { pageTitle : "Change Password" }) 
