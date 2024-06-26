import axios from "axios"

export default defineNuxtPlugin( async () => {
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    
    const defaultUrl = "https://api.zgcleaning.com"
    
   // await axios.get(`${defaultUrl}/sanctum/csrf-cookie`);

    let api = axios.create({
        
        baseURL: defaultUrl,
        headers: {
            common: {}
        }
    })
    return {
        provide: {
            api: api,
            axios: axios
        },
    }
})