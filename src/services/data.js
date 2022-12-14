import axios from 'axios'
const baseUrl = '/api/data'

const getData = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { getData }