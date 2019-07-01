import * as axios from 'axios';
import store from '@/store/store';
import qs from 'qs';
// 这里可根据具体使用的UI组件库进行替换
// import { Toast } from 'vant';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

 /* baseURL 按实际项目来定义 */
const baseURL = process.env.VUE_APP_URL;

 /* 创建axios实例 */
const service = axios.default.create({
    baseURL,
    timeout: 0, // 请求超时时间
    maxContentLength: 4000,
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
}, (error: any) => {
    Promise.reject(error);
});

service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status !== 200) {
            alert('请求错误！');
            // Toast.fail('请求错误！');
        } else {
            return response.data;
        }
    },
    (error: any) => {
        return Promise.reject(error);
    });
export default service;


// const axiosConfig: AxiosRequestConfig = {
//     baseURL: '/',  // 请求后的数据处理
//     transformResponse: [function (data: AxiosResponse) {
//         return data;
//     }],
//     // 查询对象序列化函数
//     paramsSerializer: function(params: any) {
//         return qs.stringify(params);
//     },
//     // 超时设置s
//     timeout: 30000,
//     // 跨域是否带Token
//     withCredentials: true,
//     responseType: 'json',  // xsrf 设置
//     xsrfCookieName: 'XSRF-TOKEN',
//     xsrfHeaderName: 'X-XSRF-TOKEN',
//     // 最多转发数，用于node.js
//     maxRedirects: 5,  // 最大响应数据大小
//     maxContentLength: 2000,  // 自定义错误状态码范围
//     validateStatus: function(status: number) {
//         return status >= 200 && status < 300;
//     },
//     // 用于node.js
//     httpAgent: new http.Agent({ keepAlive: true }),  httpsAgent: new https.Agent({ keepAlive: true }),
// }

// export default axiosConfig
