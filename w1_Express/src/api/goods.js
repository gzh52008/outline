
const express = require('express');

// 得到一个路由中间件
const router = express.Router();


// 当请求地址为：/api/goods/list，才能匹配这个路由
router.get('/list',function(req,res){
    const {page,size,category} = req.query;
    const result = {
        page,size,category
    }
    res.send(result)
});

// 添加商品
router.post('/',function(req,res){
    // req.get('Content-Type');
    // post请求：req.body
    res.send(req.body);
})

// 当请求地址为：/api/goods/12，才能匹配这个路由
router.get('/:id',function(req,res){
    // 根据id查询数据库，得到的商品信息: select * from goods where id=id

    res.send('goods')
});


router.put('/:id',function(req,res){
    //  根据传入的参数修改对应的商品信息: update goods set price=998 where id=id
    res.send('goods')
});

// /api/goods/12
router.delete('/:id',function(req,res){
    // 根据id删除对应数据库中的商品：delete from goods where id=id
})

module.exports = router;