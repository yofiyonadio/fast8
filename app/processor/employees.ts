import { Repositories as Repo, Models } from '../registry'

type _interface = Models.Employees.EmployeesInterface

class EmployeesProcessor {

    async insert(data: _interface) {
        return await Repo.EmployeesRepository.insert(data)
    }

    async get(data: _interface) {
        return await Repo.EmployeesRepository.get(data)
    }

    async update(data: _interface) {
        return await Repo.EmployeesRepository.update(data)
    }

    async delete(id: number) {
        return await Repo.EmployeesRepository.delete(id)
    }

}

export default new EmployeesProcessor()
