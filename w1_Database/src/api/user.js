const express = require('express');
const mysql = require('../db/mysql');
const mongo = require('../db/mongodb');
const router = express.Router();
const {formatData} = require('../utils')

// 查询用户名是否存在
router.get('/check',async (req,res)=>{
    let {username} = req.query;
    let sql = `select username from user where username='${username}'`
    try{
        const rows = await mysql.query(sql);
        if(rows.length > 0){
            // res.send({
            //     code:400,
            //     data:[],
            //     msg:'no'
            // });
            let result = formatData({code:400});// {code:400,data:[],msg:'fail'}
            res.send(result)
        }else{
            // res.send({
            //     code:200,
            //     data:[],
            //     msg:'ok'
            // })
            res.send(formatData())
        }
    }catch(err){
        // res.send({
        //     code:400,
        //     data:err,
        //     msg:'error'
        // });
        res.send(formatData({code:400,msg:'error'}))
    }
});

// 查询所有用户： /api/user/
router.get('/',async (req,res)=>{
    let sql = `select * from user`;

    // promise的写法
    // mysql.query(sql).then(rows=>{
    //     res.send(rows);
    // }).catch()
    try{
        const rows = await mysql.query(sql);
        // res.send({
        //     code:200,
        //     data:rows,
        //     msg:'success'
        // });
        let result = formatData({data:rows}); // {code:200,data:[{},{},{}],msg:'success'}
        res.send(result);
    }catch(err){
        res.send(formatData({code:400,msg:'error'}));
    }
})

// 注册新用户
router.post('/reg',async (req,res)=>{
    const {username,password} = req.body;

    const result = await mongo.create('user',{username,password});
    if(result){
        res.send(formatData())
    }else{
        res.send(formatData({code:400}))
    }
});

router.get('/login',async (req,res)=>{
    const {username,password} = req.query;

    const result = await mongo.find('user',{username,password});
    if(result.length>0){
        res.send(formatData())
    }else{
        res.send(formatData({code:400}))
    }
})

module.exports = router;