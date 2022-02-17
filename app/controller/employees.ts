import { Response, Request, Express } from 'express'
import { Processors as Process, Route, Responser as Respon, Models, Utils } from '../registry'

class EmployeesController {
    route() {
        Route.router('/employees/:id').get(this.getEmployeeById)
        Route.router('/employees/:id').delete(this.deleteEmployee)
        Route.router('/companies/:id/employees').get(this.getEmployeeByCompany)
        Route.router('/companies/:company_id/employees').post(this.insertEmployee)
        Route.router('/companies/:company_id/employees/:employee_id').put(this.updateEmployee)

    }

    async insertEmployee(req: Request, res: Response) {
        try {
            const data = {
                name: req.body.name,
                email: req.body.email,
                phone_number: req.body.phone_number,
                jobtitle: req.body.jobtitle,
                company_id: req.params.company_id
            } as any

            const _isNotValid = Models.Employees.EmployeesValidation.validate(data).error

            if (_isNotValid) {
                throw _isNotValid
            }

            return await Process.EmployeesProcessor.insert(data)
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

    async getEmployeeById(req: Request, res: Response) {
        try {
            const data = Utils.cleanObject({
                id: req.params.id,
                name: req.query.name,
                email: req.query.email,
                phone_number: req.query.phone_number,
                jobtitle: req.query.jobtitle,
                company_id: req.query.company_id,
            })

            const _isNotValid = Models.Employees.EmployeesValidation.validate(data).error

            if (_isNotValid) {
                throw _isNotValid
            }

            return await Process.EmployeesProcessor.get(data)
                .then(result => {
                    return Respon.good(result[0], res)
                })
                .catch(error => {
                    throw error
                })
        } catch (e) {
            return Respon.bad(e, res)
        }
    }

    async getEmployeeByCompany(req: Request, res: Response) {
        try {
            const data = Utils.cleanObject({
                id: req.query.id,
                name: req.query.name,
                email: req.query.email,
                phone_number: req.query.phone_number,
                jobtitle: req.query.jobtitle,
                company_id: req.params.company_id,
            })

            const _isNotValid = Models.Employees.EmployeesValidation.validate(data).error

            if (_isNotValid) {
                throw _isNotValid
            }

            return await Process.EmployeesProcessor.get(data)
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

    async updateEmployee(req: Request, res: Response) {
        try {
            const data = Utils.cleanObject({
                id: req.params.employee_id,
                name: req.body.name,
                email: req.body.email,
                phone_number: req.body.phone_number,
                jobtitle: req.body.jobtitle,
                company_id: req.params.company_id,
            })

            const _isNotValid = Models.Employees.EmployeesValidation.validate(data).error

            if (_isNotValid) {
                throw _isNotValid
            }

            return await Process.EmployeesProcessor.update(data)
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

    async deleteEmployee(req: Request, res: Response) {
        try {
            const id = req.params.id as any

            const _isNotValid = Models.Employees.EmployeesValidation.validate({ id }).error

            if (_isNotValid) {
                throw _isNotValid
            }

            return await Process.EmployeesProcessor.delete(id)
                .then(result => {
                    return Respon.good(result, res, 204)
                })
                .catch(error => {
                    throw error
                })
        } catch (e) {
            return Respon.bad(e, res)
        }
    }

}

export default new EmployeesController()
