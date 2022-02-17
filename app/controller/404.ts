import { Response, Request, Express } from 'express'
import { Responser, Route } from '../registry'

class NotFoundContoller {

    route() {
        Route.router('*').get(this.default)
        Route.router('*').post(this.default)
        Route.router('*').put(this.default)
        Route.router('*').delete(this.default)
    }

    default(req: Request, res: Response) {
        Responser.bad('Page not found', res, 404)
    }

}

export default new NotFoundContoller()
