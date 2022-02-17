import { Dialect, Sequelize } from 'sequelize'
import mysql from 'mysql2/promise'
import { config } from 'dotenv'
import { ENV } from '../../registry'

config()

const sequelizeConnection = new Sequelize(
    ENV.DB_NAME,
    ENV.DB_USER,
    ENV.DB_PASSWORD, {
    host: ENV.DB_HOST,
    dialect: ENV.DB_DIALECT
})

const mysqlConnection = () => {
    return mysql.createConnection({
        host: ENV.DB_HOST,
        port: 3306,
        user: ENV.DB_USER,
        password: ENV.DB_PASSWORD,
    })
}

export { mysqlConnection }
export default sequelizeConnection