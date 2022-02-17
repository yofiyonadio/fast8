import { Response, Request, Express } from 'express'
import { Processors as Process, Route, Responser as Respon, Utils } from '../registry'

class FibonacciController {
    route() {
        Route.router('/fibonacci').post(this.fibonacci)
    }

    async fibonacci(req: Request, res: Response) {
        try {
            const n = Utils.toNumber(req.body.n)

            if (!Utils.isNumber(n)) {
                throw '"n" must be a number'
            }

            const _fibonacci = await Process.FibonacciProcessor.fibonacci(n)

            return Respon.good(_fibonacci, res, 201)
        } catch (e) {
            return Respon.bad(e, res)
        }
    }

}

export default new FibonacciController()
