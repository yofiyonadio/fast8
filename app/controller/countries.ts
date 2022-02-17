import { Response, Request, Express } from 'express'
import { Processors as Process, Route, Responser as Respon, Utils } from '../registry'

class CountriesController {
    route() {
        Route.router('/countries').get(this.getCountries)
    }

    async getCountries(req: Request, res: Response) {
        try {
            const _countries = await Process.CountriesProcessor.getCountries()
            return Respon.good(_countries, res)
        } catch (e) {
            return Respon.bad(e, res)
        }
    }

}

export default new CountriesController()
