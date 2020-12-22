# NodeJS

## day1-1

### 复习
* 模块化
    * 为什么要模块化
        * 维护迭代
        * 分工
    * 分类
        * 内置模块
            * fs
            * http
            * url
            * path
        * 自定义模块
            * 定义模块
                * module.exports
                * exports
            * 引用模块
                * require
        * 第三方模块
            * express
    * 规范
        * commonJS        NodeJS
        * AMD             require.js
        * CMD             sea.js
        * ES Module       ES6

* 开启http服务器


* 安装第三方模块
    > npm install

### 知识点
* 开启http服务器
    * http
    * fs
    * url
    * path
* mime类型

* 全局变量
    * __dirname: 当前文件所在目录
        > D:\class\gzh2008\w1_NodeJS\img
    * __filename: 当前文件的绝对路径
        > D:\class\gzh2008\w1_NodeJS\img\jj.png
* express


## day1-2

### 复习
* http静态服务器
    > html,css,js,图片,媒体文件等文件
    * 原生node
        * http,fs,url,path
        * mime（默认纯文本：text/plain）
    * express
* 模块化开发
    * 分类
        * 内置
        * 自定义模块
        * 第三方模块
            * 安装：npm install xxx
    * 规范
        * commonJS      nodeJS          同步
        * AMD           require.js      异步
        * CMD           sea.js          异步
        * ES Module      ES6            同步
    * 使用
        * 导出（定义）
            * module.exports
            * exports
        * 引入
            * require()
* 环境变量
    * 用户变量
    * 系统变量
* 安装第三方模块
    > npm install module
    * 参数
        * --save        -S  （在npm4后默认为--save）
            > 把安装信息记录在package.json中的`dependencies`
        * --save-dev    -D
            > 把安装信息记录在package.json中的`devDependencies`
        

### 知识点
* express中间件
    > 中间件是一个封装了某些处理数据功能的**函数**
    * 使用
        > 格式：`app.use([path],...middlewares)`
    * 分类
        * 内置中间件
            * express.static()
* 接口(路由)
    * RESTful规范
        * 利用不同的请求类型实现不同的接口
        * 利用不同的访问路径实现不同的接口
    * 模块化 + 中间件
        * express.Router()
    * 请求类型
        * get               查
        * post              增
        * put/patch         改
        * delete            删
* 传参
    * 动态路由： /goods/:id
        > 获取：req.params.id
    * url查询参数：/goods/list?page=1&size10&category=phone
        > 一般用于get请求，获取：req.query.page
    * 请求体：利用express中间express.urlencoded(),express.json()
        > 获取：req.body
    * 请求头
        > req.get(name)