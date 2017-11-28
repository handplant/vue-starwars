import axios from 'axios'

export default {
    get(url) {
        return axios
            .get(url)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error))
    },
    getId(url) {
        const url_array = url.split('/')
        return url_array[5]
    },
    getType(url) {
        const url_array = url.split('/')
        return url_array[4]
    }
}
