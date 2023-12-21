
const { login } = require("../controller/user.controller")

const userRouter = (app)=> {
    app.post("/login", login)
}

module.exports = {
    userRouter
}