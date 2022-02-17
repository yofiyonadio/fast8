import { Response, Request, Express } from 'express'
import { Processors as Process, Route, Responser as Respon, Models, Utils } from '../registry'

class CompaniesController {
    route() {
        Route.router('/companies').get(this.getCompany)
        Route.router('/companies').post(this.insertCompany)
        Route.router('/companies/:id/set_active').put(this.updateCompany)
    }

    async insertCompany(req: Request, res: Response) {
        try {
            const data = {
                company_name: req.body.company_name,
                telephone_number: req.body.telephone_number,
                address: req.body.address
            }

            const _isNotValid = Models.Companies.CompaniesValidation.validate(data).error

            if (_isNotValid) {
                throw _isNotValid
            }

            return await Process.CompaniesProcessor.insert(data)
                .then(result => {
                    return Respon.good(result, res, 201)
                })
                .catch(error => {
                    throw error
                })
        } catch (e) {
            return Respon.bad(e, res)
        }
    }

    async getCompany(req: Request, res: Response) {
        try {
            const data = Utils.cleanObject({
                id: req.query.id,
                company_name: req.query.company_name,
                telephone_number: req.query.telephone_number,
                is_active: req.query.is_active,
                address: req.query.address
            })

            const _isNotValid = Models.Companies.CompaniesValidation.validate(data).error

            if (_isNotValid) {
                throw _isNotValid
            }

            return await Process.CompaniesProcessor.get(data)
                .then(result => {
                    return Respon.good(result, res)
                })
                .catch(error => {
                    throw error
                })
        } catch (e) {
            return Respon.bad(e, res)
        }
    }

    async updateCompany(req: Request, res: Response) {
        try {
            const id = Utils.toNumber(req.params.id)

            const _isNotValid = Models.Companies.CompaniesValidation.validate({ id }).error

            if (_isNotValid) {
                throw _isNotValid
            }

            return await Process.CompaniesProcessor.update(id)
                .then(result => {
                    return Respon.good(result, res, 201)
                })
                .catch(error => {
                    throw error
                })
        } catch (e) {
            return Respon.bad(e, res)
        }
    }

}

export default new CompaniesController()
