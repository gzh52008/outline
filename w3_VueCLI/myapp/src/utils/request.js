// 模块对象：
// 这个文件就是一个模块对象，export就是给模块对象添加属性

export let baseUrl = 'http://localhost:2008/api';

export function request(){

}

// 批量给模块对象添加属性
export {
    request as req,
    baseUrl as url
}

// 给模块对象添加default属性，值为request
export default request;


