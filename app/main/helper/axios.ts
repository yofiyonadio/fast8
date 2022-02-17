
import axios, { AxiosResponse, } from 'axios'

class Axios {

    config(urls: string, datas: any, methods: any, headers?: object, auth?: {
        username: string,
        password: any
    }) {
        return new Promise((resolve, reject) => {
            axios({
                method: methods,
                url: urls,
                timeout: 900000,
                data: datas,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    ...headers
                },
                auth
            })
                .then((response: AxiosResponse) => {
                    if ([200, 201, 204].includes(response.status)) {
                        resolve(response.data)
                    } else {
                        reject(response.data)
                    }
                })
                .catch((error: any) => reject(error))
        })
    }

    get(url: string, data?: any, headers?: object, auth?: {
        username: string,
        password: any
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            this.config(url, data, 'GET', headers, auth)
                .then(result => {
                    resolve(result)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    post(url: string, data?: any, headers?: object, auth?: {
        username: string,
        password: any
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            this.config(url, data, 'POST', headers, auth)
                .then(result => {
                    resolve(result)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    method(method: 'POST' | 'GET' | 'PUT' | 'DELETE', url: string, data?: any, headers?: object, auth?: {
        username: string,
        password: any
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            this.config(url, data, method, headers, auth)
                .then(result => {
                    resolve(result)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

}

export default new Axios()