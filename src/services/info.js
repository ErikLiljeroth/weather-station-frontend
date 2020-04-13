import axios from 'axios'
const baseUrl = '/info'

const getInfo = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { getInfo }