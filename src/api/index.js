import axios from "axios"; 
import {fakeAuth} from '../util/fakeAuth';
import {message as Message} from 'antd';
import {timeout,baseURL} from "./config.js";
import history from './history';
axios.defaults.timeout = timeout;
axios.defaults.baseURL = baseURL;
axios.interceptors.request.use(
    config => {
        if (fakeAuth.authenticate()) {
            config.headers.Authorization = `Bearer ${sessionStorage.getItem('loginToken')}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    fakeAuth.signout();
                    history.push('/login');
                    break;
                default:
            }
            const message = error.response.data.message ?error.response.data.message :"服务器异常";
            Message.error(message);
        }
        return Promise.reject(error);
    }
);
const gl_ajax = params => {
    return axios({
            method: params.method.toLowerCase(),
            url: `${axios.defaults.baseURL}${params.url}`,
            data: params.method !== "get" ? params.data : "",
            params: params.method === "get" ? params.data : "",
            responseType: params.file ? "blob" : ""
        })
        .then(res => {
            params.success && params.success(res);
        })
        .catch(err => {
            params.error && params.error(err);
        });
};
export default gl_ajax;