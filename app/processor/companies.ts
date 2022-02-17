import { Repositories as Repo, Models } from '../registry'

type _interface = Models.Companies.CompaniesInterface

class CompaniesProcessor {

    async insert(data: _interface) {
        return await Repo.CompaniesRepository.insert(data)
    }

    async get(data: _interface) {
        return await Repo.CompaniesRepository.get(data)
    }

    async update(id: number) {
        return await Repo.CompaniesRepository.update(id)
    }

}

export default new CompaniesProcessor()
