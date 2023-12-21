const jwt = require("jsonwebtoken");
const { getUserByEmail } = require("../reponsitory/user.reponsitory");
require("dotenv").config();


async function login(req, res) {
    console.log("chayj vao login");
    const { email, password } = req.body;
    const result = await getUserByEmail(email);
    if (!result) {
        return res.status(404).json({
            message: "Email Chưa Được Đăng Kí",
        });
    }
    if (result.password != password) {
        return res.status(400).json({
            message: "Sai Mật Khẩu",
        });
    }
    const token = jwt.sign(
        { id: result.id, role: result.role },
        process.env.JWT_SECRET
    );
    res.status(200).json({
        message: "Đăng Nhập Thành Công",
        token,
    });
}

module.exports = {
    login,
};