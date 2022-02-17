import { Response, Request, NextFunction } from 'express'

import { ENV } from '../../registry'

class Middleware {

    async default(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.split(' ')[1] as string

        req.originalUrl = trimSlash(req.originalUrl)

        const whiteList = [
            '',
            '/auth',
        ]

        const protect = !whiteList.includes(req.originalUrl.split(ENV.APP_API_URL as any)[1])

        if (protect) {
            next()
        } else { next() }

    }

}

const trimSlash: any = (originalUrl: string) => {
    if (originalUrl[originalUrl.length - 1] === '/') {
        originalUrl = originalUrl.slice(0, -1)
        return trimSlash(originalUrl)
    } else {
        return originalUrl
    }
}

export default new Middleware()
