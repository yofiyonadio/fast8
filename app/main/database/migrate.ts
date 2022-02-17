import { mysqlConnection } from './connection'
import { CompaniesRecord } from '../../model/companies'
import { Models, ENV, Color } from '../../registry'


class Migrate {
    async sync() {
        if (ENV.DB_MIGRATE) {
            await mysqlConnection().then(async connection => {
                if (ENV.DB_MIGRATE_CLEAN) {
                    await connection.query(`DROP DATABASE IF EXISTS ${ENV.DB_NAME}`)
                }
                await connection.query(`CREATE DATABASE IF NOT EXISTS ${ENV.DB_NAME};`).then(() => {
                    Logger('Database Created!', this, Color.blue)
                })
            })
            await Models.Companies.CompaniesRecord.sync()
            await Models.Employees.EmployeesRecord.sync()
            Logger('Database Migration Success!', this, Color.blue)
        }
    }
}



export default new Migrate()