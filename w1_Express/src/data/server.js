const express = require('express');
const allRouter = require('./api')

// 启动一个服务器
const app = express();

// 启动静态资源服务器
// static()中间的处理逻辑：如果找到静态资源，则不会执行后面的中间件，如果找不到静态资源内部会自动next()
const middleware = express.static('../public');
app.use(middleware);

// 自定中间件
// const myMiddleware = function(req,res,next){
//     // next: 是一个方法，调用后才会执行下一个中间件
//     console.log('myMiddleware');

//     next();
// }
// app.use(myMiddleware);
// app.use(function(req,res,next){
//     console.log('666')

//     // res.write();
//     // res.end();
//     res.send({a:10,b:20})
// })

let goodslist = [];
for(let i=0;i<20;i++){
    let goods = {
        id:i+1,
        name:'goods'+i,
        imgurl:'img/goods'+i + '.jpg',
        price:(Math.random()*10000).toFixed(2)
    }
    goodslist.push(goods);
}

// 路由
app.use('/goodslist',function(req,res,next){
    // 只有访问路径为/goodslist时才会进入这个中间件
    res.send(goodslist);
})

// 动态路由
// app.get('/goods/:id',function(req,res,next){
//     // 获取动态路由参数
//     const {id} = req.params;
//     // const result = goodslist.filter(item=>item.id==id);
//     const result = goodslist.find(item=>item.id==id)
//     res.send(result);
// })

// 数据接口
app.use('/api',allRouter);

// 商品列表：利用SSR渲染方式（服务器生成html结构）
app.get('/goodses.html',(req,res)=>{
    // 生成html结构
    let html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>商品列表</title>
            <style>
                #goodslist ul{overflow:hidden;list-style:none;padding:0;margin:0;}
                #goodslist li{float:left;margin:10px;padding:15px;border:1px solid #ddd;}
            </style>
        </head>
        <body>
            <div class="goodslist">
                <ul>
            
    `
    for(let i=0;i<20;i++){
        html += `<li>
            <h4>goods${i+1}</h4>
            <p class="price"><span>${parseInt(Math.random()*901)+100}</span></p>
            <button>购买</button>
        </li>`
    }
    html += `</ul></div></body></html>`;
    res.send(html);
})

// 监听端口
app.listen(2008,()=>{
    console.log('server is runing on port 2008')
})