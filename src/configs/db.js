require("dotenv").config();
const pg = require("pg")

export const db = new pg.Pool({
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DB,
    user: process.env.USER,
    password: process.env.PASSWORD,
})

db.connect((error) => {
    if (error) {
        console.log(error)
    }
})