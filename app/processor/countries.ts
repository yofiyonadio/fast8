import { Axios, ENV } from '../registry'

class CountriesProcessor {

    async getCountries() {
        return await Axios.get(ENV.COUNTRIES_URL).then((countries: []) => {
            return countries.map((country: any) => {
                return {
                    name: country.name,
                    region: country.region,
                    timezones: country.timezones
                }
            })
        })
    }

}

export default new CountriesProcessor()
