import { Models } from '../registry'


const _record = Models.Companies.CompaniesRecord
type _interface = Models.Companies.CompaniesInterface

class CompaniesRepository {

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

    async update(id: number) {
        return await _record.update({
            is_active: true,
        }, {
            where: {
                id
            }
        })
    }

}

export default new CompaniesRepository()
