import axios from 'axios';

console.log('env',process.env.NODE_ENV)
// 创建一个axios实例
export const request = axios.create({
    baseURL: process.env.NODE_ENV=== 'development' ? 
            'http://localhost:2008/api' :
            'http://126.36.11.23'
})

export default request;