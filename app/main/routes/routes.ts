import { Express } from 'express'
import { Controllers, ENV } from '../../registry'

let App: Express

class Routes {

    router(path: string) {
        let base_url = ENV.APP_API_URL
        if (!base_url?.split('/')[1]?.length) {
            base_url = ''
        }
        return App.route(base_url + path)
    }

    routing(app: Express) {
        App = app

        Controllers.HomeController.route(app)
        Controllers.CompaniesController.route()
        Controllers.EmployeesController.route()
        Controllers.FibonacciController.route()
        Controllers.CombinationController.route()
        Controllers.CountriesController.route()

        Controllers.NotFoundContoller.route()
    }

}

export default Routes
