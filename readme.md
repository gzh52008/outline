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

### 面试题
* 事件传播
    * 冒泡：
        * 事件委托
    * 捕获：
        btn.addEventListener('click',function(){},true)
    * 事件源对象：触发事件的节点对象
        > 在事件传播过程中不会改变： event.target
    * 阻止事件传播
        > event.stopPropagation(), event.cancelBubble=true;
* ES6中的扩展运算符: `...`
    * 扩展操作
    * 剩余操作
    ```js
        var goods = {name:'goods1',price:998,qty:10};
        var good2 = {...goods,price:1998}

        function sum(a,...b){

        }
        sum(10,20,30);
        sum(10,20,30,40);

        let {name,...o} = goods;

        let arr = [10,6,98,2,3,22,44,12,6,2,44];
        Math.max(...arr);// 等效于Math.max(10,6,98,2,3,22,44,12)

        [...new Set(arr)]
    ```

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
* 在NodeJS中使用mongoDB：驱动
    * mongodb
    * mongoose


* mongoDB与mySQL对比
类型            数据库              表              数据
mysql           database            table           row
mongoDB         database            collection      document

* 在Nodejs中操作mongo
    * mongodb
* 封装增删该查
    * create()
    * remove()
    * update()
    * find()
* 统一前后端交互的数据格式
    > {code,data,msg}
    * code: 
        * 200：成功
        * 400：失败
    * data: 数据，没有数据时为空数组
    * msg：提示信息

## day1-5

### 知识点
* ObjectId： mongodb.ObjectId
    > 5fe44705b66bed4848f34799 -> ObjectId("5fe44705b66bed4848f34799")
* 搭建项目
    1. 创建目录
        * doc           文档目录
        * src           源码（后端）
        * public        静态资源服务器（前端）
        * package.json  项目配置文件
    2. 安装依赖
        > --save/-S, --save-dev/-D  -> npm install --production
        * express
        * mongodb
        * bootstrap
    3. 编写服务器
    4. 编写路由模块：接口

## day2-1

### 复习
* 全端（全栈）
    * 前端：javascript=ECMAScript+BOM+DOM
        > 客户端语言：代码在客户端执行执行
        * alert
    * 后端：NodeJS = ECMAScript+服务器概念（request+response）
        > nodejs是后端语言，在服务器执行的js
        * console
        * JSON
        * npm模块
            * fs
* 利用mongodb来编写数据接口
    * 路由模块化
    * RESTful API
    * mongodb操作封装

### 知识点
* 开发环境
    > git管理，在本地服务器中
    * 本地环境: 
        * 本地开发环境：development
            * 前后端分离
            * 自测没问题后才提交代码
        * 本地测试环境: test 
            * 业务逻辑
    * UAT环境(线上测试环境): UAT
        * 测试团对进行线上测试
    * 生产环境（正式环境）：production
        * 上线
* 跨域解决方案
    * jsonp
        > 利用script标签请求数据（js代码为全局函数的执行，并传递数据）
        * 关键点
            * 全局函数
            * script标签发起请求，并传递**函数名**
            * 后端返回js代码
        * 缺点
            * 只能get请求
            * 不是ajax请求
            * 需要编写全局函数
    * CORS：跨域资源共享（Cross Origin Resource Sharing）
        * 简单请求与复杂请求（修改了请求头的请求）
            * 复杂请求下浏览器会自动发起OPTIONS预请求
    
    > 以上两种跨域解决方案，都需要服务器的支持

    * 服务器代理
        > 利用服务器没有跨域限制的特性，在自己的服务器中向目标服务器请求数据，得到数据后，响应给前端
    * 爬虫
        > 获取html结构，筛选需要的内容
        * 分析html结构
        * 正则表达式
        * 爬取图片
* 页面渲染模式
    * 客户端渲染BSR(Browser Side Rendering)：html结构在浏览器生成
        * 前后端分离
        * 一般会有数据接口
        * 请求步骤
            1. 请求html页面，返回空的html页面
            2. 请求js文件，返回js内容
            3. 解释js代码，发起ajax请求，并返回数据
            4. 在浏览器端生成html结构并写入页面
            5. 浏览器渲染html
        * 优点
            * 用户体验更好
            * 更好分工与维护
    * 服务端渲染SSR(Server Side Rendering)：html结构在服务器生成
        * 前后端不分离
        * 请求步骤
            1. 请求html页面，返回完整html结构
            2. 浏览器渲染html
        * 优点：
            * 速度快，一般用于首页优化

## day2-2

### 复习
* 爬虫
    * request
    * cheerio   
    * 爬取图片
### 知识点
* fs模块
    * fs.readFile()
    * fs.writeFile()
    * 目录操作
        * mkdir()
    * Stream：流，一般用于大文件的读写
        * 读取流：`fs.createReadStream(path)`
        * 写入流：`fs.createWriteStream(path)`
        * 管道流：pipe()

        ```js
            gulp.src('./src/js/*.js')
            .pipe(uglify())
            .pipe()
        ```
* 编码
    * 图片base64：`data:image/png;base64,编码`

* 协议
    * http(s)：
        * 短连接
        * 无状态
        * 只能客户端主动，服务器被动
    * socket
        * 长连接
        * 有状态
        * 服务器可以主动

* websocket
    * 服务端
        > 使用第三方模块`ws`
    * 客户端
        > 需要支持websocket的浏览器

## day2-3

### 复习
* 协议
    * ip协议
        * IPv4：255.255.255.255
        * IPv6:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF
    * 通讯协议(共同语言，共同遵守的规则)
        * TCP
            * 三次握手
            * 四次挥手
        * http/https
            > s: SSL
            * 短连接
            * 客户端主动，服务端被动
            * 无状态
        * ws/wss
            * 长连接
            * 客户端和服务器都能主动
            * 有状态
        * UDP
            > 不保证对方能收到信息
* WebSocket
    * 客户端
    * 服务端
* 应用
    * 多人聊天室
        * 服务端：广播
        * 客户端：
            * 定义发送消息格式
    * 数据可视化
        * echarts: canvas
        * higchart: svg

### 知识点
* 前端三大框架
    * AngularJS->Angular(ng): 2009
        * MVC
        * 依赖注入
    * React: 2013
        * VirtualDOM 虚拟DOM
    * Vue: 2014
        > 结合了angular与react的优点，并做了优化
        * 特点：上手简单，易用
* 开发习惯的改变
    * 以前：节点操作、
        > 节点频繁操作会影响页面性能（节点操作不可避免，但可以减少）
    * 现在：数据驱动（修改数据后，框架会帮我们自动更新相应节点）

* 架构模式
    * MVC：最经典的分层
        * M（Model）: 数据层
        * V（View）：视图层
        * C（Controller）：控制层
    * MVP
        * M（Model）: 数据层
        * V（View）：视图层
        * P（Presenter）：理解为松散的控制器
    * MVVM
        * M（Model）: 数据层
        * V（View）：视图层
        * VM（ViewModel）: 类似于Presenter的控制器，在vue框架中，框架就是扮演VM的角色

* 模块化开发规范
    * CommonJS      Node
    * AMD
    * CMD
    * ESModule

    * UMD：AMD+CMD+script全局引入 

* Vue的使用
    * 数据绑定
        * 单向绑定：
            * {{}}：绑定在内容上
            * v-text
            * v-html
            * v-bind：绑定在属性上
                > 格式：v-bind:attr="data"
        * 双向绑定: v-model
            > 单向绑定+事件， v-model的原理：v-bind:value + v-on:input
            1. 数据层->视图层
            2. 视图层->数据层
    * 数据驱动
        > 逻辑思维的转变：从节点操作改成数据操作
    * 指令：html的自定义属性
        * v-bind    单项数据绑定（属性）
        * v-model   双向数据绑定
        * v-on      绑定事件
        * v-for     遍历数据
        * v-show    是否显示（显示与隐藏，如有频繁的显示隐藏操作，建议使用v-show，否则建议使用v-if）
        * v-if      实现显示（创建与删除，）
* 响应式属性
    > 数据的改变会更新视图

    * 属性特性
        * 存储器属性
            * configurable  可配置性（Boolean）
            * enumerable    可枚举性（Boolean）
            * getter        监听属性的读取
            * setter        监听属性的修改
        * 值属性
            * configurable  可配置性（Boolean）
            * enumerable    可枚举性（Boolean）
            * writable      可写性
            * value         值
    > 传统方式**添加**的属性，默认属性特性为true；通过Object.defineProperty()**添加**的属性，默认属性特性为false
* 数据绑定
    > v-on
    * 事件传参

## day2-4

### 复习
* 架构模式
    * MVC
    * MVP
    * MVVM
    * 分层
        * Model         数据层
        * View          视图层
        * Controller    控制器
        * Presenter     松耦合的控制器
        * ViewModel
* 响应式属性
    > 实例化Vue时，会遍历data中所有属性，把它们转成存储器属性（getter&setter），并写入Vue的实例

* 数据绑定
    * 单向
        * {{}}
        * v-text
        * v-html
        ```js
            <div v-text="username">用户名：</div>
            <div>用户名：{{username}}</div>
        ```
        * v-bind
    * 双向数据绑定：v-model
        * 视图->数据：事件（input,change...）
        * 数据->视图：getter&setter
* 指令：vue定义的html属性
    * v-text
    * v-html
    * v-bind: :
    * v-model
    * v-on: @
    * v-for
    * v-show
    * v-if/v-else-if/v-else
    ```js
        show = 10;
        <div v-if="show===1">1</div>
        <div v-else-if="show===2">2</div>
        <div v-else>3</div>
    ```
*  数据驱动
    > 逻辑思维的转变：从节点操作改成数据操作

### 知识点
* todolist
    * 查：遍历显示
    * 增：添加
    * 删：删除数据
    * 改

* 特殊属性
    * ref
        > 给原生添加ref属性后，可以通过`this.$refs`获取所有的ref