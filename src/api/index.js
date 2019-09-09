import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pixay-emotion-classifier.herokuapp.com'
})

export default api