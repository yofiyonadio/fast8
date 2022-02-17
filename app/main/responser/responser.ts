import { Response } from 'express'

class Responser {

  good(datas: any, res: Response, code: number = 200) {

    const data = {
      'status': code,
      'code': code + '',
      'message': 'Success',
      'data': datas,
    }

    res.status(code)
    res.json(data)
    res.end()

  }

  bad(datas: any, res: Response, errorCode: number = 400) {
    const data = {
      'status': errorCode,
      'code': errorCode + '',
      'message': 'Failed',
      'datas': datas,
    }

    res.status(errorCode)
    res.json(data)
    res.end()
  }

}

export default new Responser()