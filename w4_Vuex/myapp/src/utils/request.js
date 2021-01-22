import axios from 'axios';

console.log('env',process.env.NODE_ENV)
export const baseURL = process.env.NODE_ENV=== 'development' ? 
'http://localhost:2008/api' :   // 开发环境
'http://120.76.247.5:2008/api'; // 生产环境，测试环境（本地测试环境，UAT测试环境...）

// 创建一个axios实例
export const request = axios.create({
    baseURL
})


export default request;