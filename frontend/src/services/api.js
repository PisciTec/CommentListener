import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const api = axios.create({
    baseURL: 'http://localhost:4000/',
})


export default api;