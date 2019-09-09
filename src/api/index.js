import axios from  'axios'

export default axios.create({
    baseURL: 'https://pixay-emotion-classifier.herokuapp.com'
})