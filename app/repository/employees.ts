import { Models } from '../registry'


const _record = Models.Employees.EmployeesRecord
type _interface = Models.Employees.EmployeesInterface

class EmployeesRepository {

    async insert(data: _interface) {
        return await _record.create(data)
    }

    async get(data: _interface) {
        return await _record.findAll({
            where: {
                ...data
            }
        })
    }

    async update(data: _interface) {
        return await _record.update(data, {
            where: {
                id: data.id
            }
        })
    }

    async delete(id: number) {
        return await _record.destroy({
            where: {
                id
            }
        })
    }

}

export default new EmployeesRepository()
