import { Response, Request, Express } from 'express'
import { Responser as Respon, Route, Controllers } from '../registry'
class HomeController {
    route(app: Express) {
        app.route('/').get(this.welcome)
        app.route('/').post(this.welcome)
        app.route('/').put(this.welcome)
        app.route('/').delete(this.welcome)
        Route.router('/').get(this.welcome)
        Route.router('/').post(this.welcome)
        Route.router('/').put(this.welcome)
        Route.router('/').delete(this.welcome)
    }

    async welcome(req: Request, res: Response) {
        Respon.good('Fast8 Technical Test Server is Running, Enjoy :)', res)
    }

}

export default new HomeController()
