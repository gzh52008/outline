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


## day1-3

### 复习
* express
    * 中间件middleware
        * 是一个函数
        * 分类
            * 内置中间件
                * express.static()
                * express.Router()
                * express.urlencoded()
                * express.json()
            * 自定义中间件
            * 第三方中间件
        * 使用： app.use([path],中间件1,中间件2...中间件n)
    * 路由router（接口）
        ```js
            app.use(function(req,res,next){
                // 任何请求都会进入这里
            });

            app.use('/goodslist',function(req,res,next){
                // 请求路由为/goodslist时，执行这里的代码
            })

            app.get('/goodslist',function(req,res,next){
                // 请求路由为/goodslist且为get请求时，执行这里的代码
            })

            app.post('/goodslist',function(req,res,next){
                // 请求路由为/goodslist且为post请求时，执行这里的代码
            })

            // 获取商品信息
            app.get('/goods/:id',function(req,res,next){
                // 请求路由为/goodslist且为get请求时，执行这里的代码
            })
            // 删除商品信息
            app.delete('/goods/:id',function(req,res,next){
                // 请求路由为/goodslist且为get请求时，执行这里的代码
            })
        ```
            * 动态路由
* 请求类型
    * get           查
    * post          增
    * put/patch     该
    * delete        删
    * ...
* RESTfull规范
    > 遵循RESTfull规范的接口称为RESTfull api
    * 根据不同的**请求类型**实现不同的接口
    * 根据不同的**请求地址**实现不同的接口
* 路由模块化
    > 利用commonJS模块化思想+中间件实现路由模块化
    ```js
        // user.js
        const express = require('express');
        const router = express.Router();

        // get /api/user/login
        router.get('/login',function(req,res){

        })

        // post /user/reg
        router.post('/reg',function(req,res){

        })
        module.exports = router;


        // index.js
        const express = require('express');
        const router = express.Router();

        const userRouter = require('./user');

        // /api/user
        router.use('/user',userRouter)
        router.use('/goods',goodsRouter)
        router.use('/cart',cartRouter)

        module.exports = router;


        // server.js
        const express = require('experss');

        const app = express();
        const rootRouter = require('./api');

        app.user('/api',rootRouter)

        app.listener(2008,function(){
            console.log('服务器启动成功...')
        })
    ```
* 传参
    * 传参方式
        * url
            * 动态路由: /goods/:id
            * 查询参数：?username=laoxie&password=123
        * 请求头
        * 请求体
    * 接收方式
        * 动态路由：req.params
        * 查询参数（get请求）：req.query
        * 请求头：req.get('User-Agent')
        * 请求体（post/put/patch）：后端如何接收请求体的数据，取决于前端通过什么类型传递参赛
            * content-type
                * formData: application/x-www-form-urlencode        express.urlencoded()
                * json:     application/json                        express.json()
                * multipart/form-data                               multer
            * req.body: 只有使用了相应中间件处理后在req.body中才能得到数据
            ```html
                <form action="http://localhost:2008/api/user/login" method="post">
                    <input type="text" name="username" />
                    <input type="password" name="password" />
                    <select name="gender">
                        <option value="male">男</option>
                        <option value="female">女</option>
                    </select>
                    <button>登录</button>
                </form>

            ```
### 知识点
* mysql
    * 增：`insert into user(username,password,age) values('laoxie','123654',18)`;
    * 删：`delete from user where username='jingjing'`
        * 删除名字中有`jing`: delete from user where username like "%jing%"
    * 改：`update user set age=38 where username='jingjing'`
    * 查：
        * `select * from user`
        * `select * from user where age>30 and gender='女'`
    * 条件
        * where
        * order by 
            * asc   升序（默认）
            * desc  降序
        * limit index,qty
            * 年龄前5名用户：`select * from user order by age*1 litmit 0,5`
* 在nodejs中使用mysql
    1. 安装：npm i mysql
    2. 引入：require('mysql')
* 统一前后端交互数据格式
    > {code,data,msg}

## day1-4

### 复习
* mysql
    * 增删该查（CRUD）
        * C: insert into 表(field1,field2....) values()
        * D: delete from 表 where条件
        * U: update 表 set field=value where条件
        * R: select * from 表
    * 在Node中使用mysql
        > 第三方模块：mysql
        * 连接数据库
            * 连接对象
            * 连接池
### 知识点
* mongoDB