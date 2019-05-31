import axios from "axios";
import {
    fakeAuth
} from '../util/fakeAuth';
import {
    message as Message
} from 'antd';
import {
    timeout,
    baseURL
} from "./config.js";
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
            }
            const message = error.response.data.message ?
                error.response.data.message :
                error.response.status == 401 ?
                "登录过期，请重新登录" :
                "服务器异常";
            Message.error(message);
        }
        return Promise.reject(error);
    }
);
export const gl_ajax = params => {
    return axios({
            method: params.method.toLowerCase(),
            url: `${axios.defaults.baseURL}${params.url}`,
            data: params.method != "get" ? params.data : "",
            params: params.method == "get" ? params.data : "",
            responseType: params.file ? "blob" : ""
        })
        .then(res => {
            params.success && params.success(res);
        })
        .catch(err => {
            params.error && params.error(err);
        });
};