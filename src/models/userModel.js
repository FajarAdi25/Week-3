const db = require("../configs/db");

const getUsers = async () => {
    const users = await db.query (
        `SELECT * FROM users`
    )
    return users
}

const findEmail = async (email) => {
    const userEmail = await db.query (
        `SELECT * FROM users WHERE users.email = '${email}'`
    )
    return userEmail
}

const createUser = async (data) => {
    const {username, email, password, phone_number} = data;
    const user = await db.query (
        `INSERT INTO users (username, email, password, phone_number) VALUES ('${username}','${email}','${password}','${phone_number}')`
    )
    return user
}

const loginUser = async (email) => {
    const user = await db.query (
        `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`
    )
    return user
} 

module.exports = {
    getUsers,
    findEmail,
    createUser,
    loginUser
}