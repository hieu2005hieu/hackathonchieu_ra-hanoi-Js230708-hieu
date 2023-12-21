const express = require("express")
const app = express()
require("dotenv").config();
const cors = require("cors")
const body_parser = require("body-parser")

app.use(cors())
app.use(body_parser.json())
const { userRouter } = require("./src/router/user.routes");
const { productRouter } = require("./src/router/todo.routes");
app.use(body_parser.urlencoded({ extended: true }));

userRouter(app)
productRouter(app)

app.listen(process.env.PORT, () => {
    console.log("chay omeke server");
})