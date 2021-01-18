import axios from 'axios';

console.log('env',process.env.NODE_ENV)
export const baseUrl = process.env.NODE_ENV=== 'development' ? 
'http://localhost:2008/api' :
'http://126.36.11.23';

// 创建一个axios实例
export const request = axios.create({
    baseURL
})


export default request;