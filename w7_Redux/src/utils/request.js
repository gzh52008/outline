import axios from 'axios';

// export const baseURL = process.env.NODE_ENV=== 'development' ? 
// 'http://localhost:21212/api' :   // 开发环境
// 'http://120.76.247.5:21212/api'; // 生产环境，测试环境（本地测试环境，UAT测试环境...）
export const baseURL = 'http://120.76.247.5:2001'

// 创建一个axios实例
export const request = axios.create({
    baseURL:baseURL + '/api'
})

request.get = function(url,data,config={}){
    return request({
        url,
        ...config,
        params:data
    })
}


export const myapi = axios.create({
    baseURL:(process.env.NODE_ENV=== 'development' ?'http://localhost:2008' : baseURL) + '/api'
})

myapi.get = function(url,data,config={}){
    return myapi({
        url,
        ...config,
        params:data
    })
}


export default request;