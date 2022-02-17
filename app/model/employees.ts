import Sequelize, { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../main/database/connection'
import { Enums } from '../registry'
import Joi from 'joi'

export interface EmployeesInterface {
    id?: number
    name: string
    email: string
    phone_number?: boolean
    jobtitle: Enums.JobTitle
    company_id: number
}

export const EmployeesValidation = Joi.object().keys({
    id: Joi.number(),
    name: Joi.string(),
    email: Joi.string().email(),
    phone_number: Joi.string(),
    jobtitle: Joi.string().valid(...Object.values(Enums.JobTitle)),
    company_id: Joi.number()
})

export class EmployeesRecord extends Model<EmployeesInterface> implements EmployeesInterface {
    public id!: number
    public name!: string
    public email!: string
    public phone_number!: boolean
    public jobtitle!: Enums.JobTitle
    public company_id!: number
}

EmployeesRecord.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    jobtitle: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: Object.values(Enums.JobTitle),
        defaultValue: Enums.JobTitle.staff
    },
    company_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'employees'
})