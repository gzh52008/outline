const express = require('express');
const router = express.Router();
const {formatData} = require('../utils')
const {mongo,mysql} = require('../db');

// post /api/goods
// router.post('/',async (req,res)=>{console.log(666)
//     let sql = `insert into goods(name,imgurl,price,kucun) values`
//     for(var i=0;i<50;i++){
//         let price = (Math.random()*1000).toFixed(2);
//         let kucun = Math.ceil(Math.random()*100);
//         sql += `('goods${i+1}','img/g${i+1}.png','${price}',${kucun}),`
//     }
//     sql = sql.slice(0,-1);
//     try{
//         const result = await mysql.query(sql);console.log(result);
//         res.send(formatData());
//     }catch(err){
//         res.send(formatData({code:400,data:err}))
//     }
// })

// router.get('/',async(req,res)=>{
//     // 接收get参数
//     let {page=1,size=10,sort='addtime'} = req.query;
//     let idx = (page-1)*size;
//     size *=1;
//     sort = sort.split('-');
//     let sql = `select * from goods order by`;
//     if(sort[0] == 'price'){
//        sql +=` ${sort[0]}*1`
//     }else {
//         sql +=` ${sort[0]}`
//     }
//     if(sort[1]){
//         sql += ` ${sort[1]}`
//     }
//     sql += ` limit ${idx},${size}`;console.log('sql',sql);
//     try{
//         const result = await mysql.query(sql);
//         res.send(formatData({data:result}));
//     }catch(err){
//         res.send(formatData({code:400,data:err}))
//     }
// });

// router.get('/:id',async (req,res)=>{
//     let {id} = req.params;
//     let sql = `select * from goods where id=${id}`;
//     try{
//         const result = await mysql.query(sql);
//         res.send(formatData({data:result[0]}));
//     }catch(err){
//         res.send(formatData({code:400,data:err}))
//     }
// })

const colName = 'goods';

// 增加
router.post('/',async (req,res)=>{
    let data = req.body;

    let result;
    try{
        result = await mongo.create(colName,data);
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }

    res.send(result);

})

router.get('/',async (req,res)=>{
    let {page=1,size=10,sort="add_time"} = req.query;
    let limit = size*1;
    let skip = (page-1)*size;
    let result;
    try{
        result = await mongo.find(colName,{},{skip,limit,sort})
        result = formatData({data:result})
    }catch(err){
        console.log(err);
        result = formatData({status:400,msg:err})
    }
    res.send(result);
})


// 获取商品信息
router.route('/:id')

.get(async (req,res)=>{
    let {id} = req.params;console.log('id=',id)
    
    let result;
    try{
        result = await mongo.find(colName,{_id:id})
        result = formatData({data:result[0]})
    }catch(err){
        result = formatData({status:400,msg:err})
    }
    res.send(result);
})

.delete(async (req,res)=>{
    let {id} = req.params;
    
    let result;
    try{
        result = await mongo.delete(colName,{_id:id})
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }
    res.send(result);
})

// 修改商品
.put(async (req,res)=>{//req.body=>{price,size,nmae}

    let {id} = req.params;

    let data = {};

    // 遍历修改属性，并写入查询
    for(let key in req.body){
        data[key] = req.body[key];
    }
    
    let result;
    try{
        result = await mongo.update(colName,{_id:id},data);
        result = formatData({data:result})
    }catch(err){
        result = formatData({status:400,msg:err})
    }
    res.send(result);
})


module.exports = router;