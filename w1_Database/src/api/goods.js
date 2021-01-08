const express = require('express');
const mysql = require('../db/mysql');
const router = express.Router();
const {formatData} = require('../utils')

// post /api/goods
router.post('/',async (req,res)=>{console.log(666)
    let sql = `insert into goods(name,imgurl,price,kucun) values`
    for(var i=0;i<50;i++){
        let price = (Math.random()*1000).toFixed(2);
        let kucun = Math.ceil(Math.random()*100);
        sql += `('goods${i+1}','img/g${i+1}.png','${price}',${kucun}),`
    }
    sql = sql.slice(0,-1);
    try{
        const result = await mysql.query(sql);console.log(result);
        res.send(formatData());
    }catch(err){
        res.send(formatData({code:400,data:err}))
    }
})

router.get('/',async(req,res)=>{
    // 接收get参数
    let {page=1,size=10,sort='addtime'} = req.query;
    let idx = (page-1)*size;
    size *=1;
    sort = sort.split('-');
    let sql = `select * from goods order by`;
    if(sort[0] == 'price'){
       sql +=` ${sort[0]}*1`
    }else {
        sql +=` ${sort[0]}`
    }
    if(sort[1]){
        sql += ` ${sort[1]}`
    }
    sql += ` limit ${idx},${size}`;console.log('sql',sql);
    try{
        const result = await mysql.query(sql);
        res.send(formatData({data:result}));
    }catch(err){
        res.send(formatData({code:400,data:err}))
    }
});

router.get('/:id',async (req,res)=>{
    let {id} = req.params;
    let sql = `select * from goods where id=${id}`;
    try{
        const result = await mysql.query(sql);
        res.send(formatData({data:result[0]}));
    }catch(err){
        res.send(formatData({code:400,data:err}))
    }
})


module.exports = router;