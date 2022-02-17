import { config } from 'dotenv'
import { Dialect } from 'sequelize'

config()

export const DB_USER = process.env.DB_USER as string
export const DB_HOST = process.env.DB_HOST
export const DB_NAME = process.env.DB_NAME as string
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_PORT = process.env.DB_PORT
export const DB_DIALECT = process.env.DB_DIALECT as Dialect
export const DB_MIGRATE = process.env.DB_MIGRATE
export const DB_MIGRATE_CLEAN = process.env.DB_MIGRATE_CLEAN === 'true' ? true : false
export const APP_PORT = process.env.APP_PORT
export const APP_API_URL = process.env.APP_API_URL
export const APP_ORIGIN = process.env.APP_ORIGIN
export const COUNTRIES_URL = process.env.COUNTRIES_URL as string
