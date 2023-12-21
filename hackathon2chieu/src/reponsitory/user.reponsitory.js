const db = require("../config/db.config")


async function getUserByEmail(email) {
    try {
        const [user] = await db.execute("select * from user where email = ?", [
            email,
        ]);
        return user[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUserByEmail,
};
