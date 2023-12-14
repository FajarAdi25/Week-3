const db = require("../configs/db")

const getUsers = async () => {
    const queryUser = await db.query (
        `SELECT * FROM users`
    )
    return queryUser
}

const findEmail = async (email) => {
    const queryUser = await db.query (
        `SELECT * FROM users WHERE users.email = '${email}'`
    )
    return queryUser
}

const findId = async (id) => {
    const queryUser = await db.query (
        `SELECT * FROM users WHERE users.users_id=${id}`
    )
    return queryUser
}

const createUser = async (body) => {
    const queryUser = await db.query (
        `INSERT INTO users (username, email, password, phone_number) VALUES ('${body.username}','${body.email}','${body.password}','${body.phone_number}')`
    )
    return queryUser
}

const loginUser = async (email, password) => {
    const queryUser = await db.query (
        `SELECT * FROM users WHERE users.email = '${email}' AND users.password = '${password}'`
    )
    return queryUser
} 

const updateUser = async (body, id) => {
    const queryUser = await db.query (
        `UPDATE users SET username='${body.username}', email='${body.email}', phone_number='${body.phone_number}', password='${body.password}', image='${body.image}' WHERE users.users_id = ${id}`
    )
    return queryUser
}

const deleteUser = async (id) => {
    const queryUser = await db.query (
        `DELETE FROM users WHERE users.users_id=${id}`
    )
    return queryUser
}

module.exports = {
    getUsers,
    findEmail,
    findId,
    createUser,
    loginUser,
    updateUser,
    deleteUser,
}