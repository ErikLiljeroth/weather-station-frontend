import axios from 'axios'
const baseUrl = '/api/tempforecast'

const getForecast = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { getForecast }