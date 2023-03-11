import axios from 'axios';
import {apiUrl, todosApi} from "./config";

const axiosApi = axios.create({
    baseURL: apiUrl
});

const axiosTodos = axios.create({
    todosUrl: todosApi
})

export default axiosApi;