const express = require('express');
const router = express.Router();


const goodsRouter = require('./goods');
const userRouter = require('./user');
const cartRouter = require('./cart');
const cors = require('../filter/cors');

// router.all('*', function(req, res, next) {
//     // 设置响应头
//     res.header("Access-Control-Allow-Origin", "*");
//     // res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     // res.header("Access-Control-Allow-Methods","PUT,POST,GET,PATCH,DELETE,OPTIONS");

//     // 跨域请求CORS中的预请求
//     // if(req.method=="OPTIONS") {
//     //     res.sendStatus(200);/*让options请求快速返回*/
//     // } else{
//         next();
//     // }
// });

router.use(cors);

router.use(express.urlencoded(),express.json())

// /api/goods
router.use('/goods',goodsRouter);

// /api/user
router.use('/user',userRouter);

// /api/cart
router.use('/cart',cartRouter);

// jsonp接口：是script标签发起的请求，所以只能反回js代码
router.get('/jsonp',(req,res)=>{
    let {callback}=req.query;
    // 数据库查询，得到数据data
    let data = [{
        username:'laoxie',
        password:123456,
        role:'admin'
    },{
        username:'jingjing',
        password:123,
        role:'vip'
    }]
    res.send(`${callback}(${JSON.stringify(data)})`);
});

// CORS请求
router.post('/cors',(req,res)=>{
    let data = [{
        username:'laoxie',
        password:123456,
        role:'admin'
    },{
        username:'jingjing',
        password:123,
        role:'vip'
    }]
    res.send(data)
});

// 服务器代理: 利用http-proxy-middleware中间件实现
// 1. 引入
const { createProxyMiddleware } = require('http-proxy-middleware');

// 2. 添加代理配置
const mstProxy = createProxyMiddleware({
    // 目标服务器
    target: 'https://offer.qfh5.cn', 
    changeOrigin: true,
    pathRewrite:{
        // 目标：https://offer.qfh5.cn/api/iq?sort=hot
        // 我的数据接口：http://localhost:2008/api/mst/iq?sort=hot
        // 代理过程：
        // 1. 替换域名：https://offer.qfh5.cn/api/mst/iq?sort=hot
        // 2. 替换路径：https://offer.qfh5.cn/api/iq?sort=hot
        // 3. 发起请求并返回数据给前端
        '^/api/mst': '/api',
    }
});

router.use('/mst',mstProxy);


module.exports = router;