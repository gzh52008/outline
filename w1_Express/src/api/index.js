const express = require('express');
const router = express.Router();


const goodsRouter = require('./goods');
const userRouter = require('./user');
const cartRouter = require('./cart');

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

router.use(function(req, res, next){
    
    res.header("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST,PUT,PATCH");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    // 处理预请求，预请求不需要响应内容，只需要响应200状态码
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
})

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
})


module.exports = router;