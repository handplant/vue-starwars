import axios from 'axios'

export default {
    get(url) {
        return axios
            .get(url)
            .then(response => Promise.resolve(response.data))
            .catch(error => Promise.reject(error))
    },
    getId(url) {
        if (url.length) {
            const url_array = url.split('/')
            return url_array[5]
        }
        return false;
    },
    getType(url) {
        if (url.length) {
          const url_array = url.split('/')
          return url_array[4]
        }
        return false;
    }
}
