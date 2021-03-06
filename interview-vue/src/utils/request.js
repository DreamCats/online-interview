import axios from "axios";
// create an axios instance
// const DEV_BASE_API = 'http://127.0.0.1:5000/online/api/2.0/';
const DEV_BASE_API = 'https://heiye.site/online/api/2.0/'
const service = axios.create({
    baseURL: DEV_BASE_API, // api 的 base_url
    timeout: 50000, // request timeout
    withCredentials: true
})
// request interceptor
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error) // 异常捕获
    }
)
// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        // 根据自己的后台键值和状态码来确定。
        if (res.errno === 501) {
            // 可借用element-ui的message组件进行和用户交互
            return Promise.reject('error')
        } else if(res.errno == 502) {
            // 以此类推
            return Promise.reject('error')
        }
        return response
    }
)
export default service;
