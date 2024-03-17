import axios from 'axios'

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const defaultUrl = "http://localhost:8000"

const instance = axios.create({
    baseURL: defaultUrl,
        headers: {
            common: {}
        }
})

export default instance;