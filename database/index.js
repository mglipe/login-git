const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config({path: 'datas/.env'})

const connection = new Sequelize(
    process.env.DB_DATABASE_SCHEMA,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
)

module.exports = connection