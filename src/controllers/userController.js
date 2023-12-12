const { response, responseError } = require("../helpers/response");
const { getUsers, findEmail, createUser, loginUser } = require("../models/userModel")
const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await getUsers()
            response(res, users.rows, 200, "get data successful")
        } catch (error) {
            responseError(res, 400, "User not found")
        }
    },

    register: async (req, res) => {
        try {
            const { email, username, password, confirmPassword, phone_number } = req.body
            let {rowCount} = await findEmail(email)
            if (rowCount) {
                return responseError(res, 400, "email already used")
            } 

            if (password !== confirmPassword) {
                return responseError(res, 401, "password invalid")
            }
            const userData = {
                username,
                email, 
                password, 
                phone_number
            }
            const user = await createUser(userData)
            return response(res, user, 201, "create successful")
        } catch (error) {
            return responseError(res, 500, error.message)
        }
    },

    login: async (req, res) => {
        try {
            const {email, password} = req.body
            const loginForm = {
                email,
                password
            }
            const user = await loginUser(loginForm)
            return response(res, 200, user, "login successful")
        } catch (error) {
            return responseError(res, 500, error.message)
        }
    }

}

module.exports = userController;