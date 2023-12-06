import originAxios from 'axios';

const axios = originAxios.create({
    // baseURL: "https://localhost:7128/api/", // change this
});
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.timeout = 5000;

axios.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    return config;
});

export default axios;

export interface IErrorResponse {
    errorMessages: string[]
}
