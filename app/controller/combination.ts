import { Response, Request, Express } from 'express'
import { Processors as Process, Route, Responser as Respon, Utils } from '../registry'

class CombinationController {
    route() {
        Route.router('/combination').post(this.combination)
    }

    async combination(req: Request, res: Response) {
        try {
            const n = Utils.toNumber(req.body.n)
            const r = Utils.toNumber(req.body.r)

            if (!Utils.isNumber(n)) {
                throw '"n" must be a number'
            }

            if (!Utils.isNumber(r)) {
                throw '"r" must be a number'
            }

            const _combination = await Process.CombinationProcessor.combination(n, r)

            return Respon.good(_combination, res, 201)
        } catch (e) {
            return Respon.bad(e, res)
        }
    }

}

export default new CombinationController()
