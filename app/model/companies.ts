import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../main/database/connection'
import Joi from 'joi'

export interface CompaniesInterface {
    id?: number
    company_name: string
    telephone_number?: string
    is_active?: boolean
    address?: string
}

export const CompaniesValidation = Joi.object().keys({
    id: Joi.number(),
    company_name: Joi.string(),
    telephone_number: Joi.string(),
    is_active: Joi.boolean(),
    address: Joi.string()
})

export class CompaniesRecord extends Model<CompaniesInterface> implements CompaniesInterface {
    public id!: number
    public company_name!: string
    public telephone_number!: string
    public is_active!: boolean
    public address!: string
}

CompaniesRecord.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    company_name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    telephone_number: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
}, {
    timestamps: false,
    sequelize: sequelizeConnection,
    tableName: 'companies'
})