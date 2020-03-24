import axios from 'axios'
const baseUrl = 'http://localhost:3001/data'

const getData = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { getData }