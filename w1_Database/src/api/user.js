const express = require('express');
const mysql = require('../db/mysql');
const mongo = require('../db/mongodb');
const router = express.Router();
const {formatData} = require('../utils')

// --------mysql-----------
// 查询用户名是否存在
// router.get('/check',async (req,res)=>{
//     let {username} = req.query;
//     let sql = `select username from user where username='${username}'`
//     try{
//         const rows = await mysql.query(sql);
//         if(rows.length > 0){
//             // res.send({
//             //     code:400,
//             //     data:[],
//             //     msg:'no'
//             // });
//             let result = formatData({code:400});// {code:400,data:[],msg:'fail'}
//             res.send(result)
//         }else{
//             // res.send({
//             //     code:200,
//             //     data:[],
//             //     msg:'ok'
//             // })
//             res.send(formatData())
//         }
//     }catch(err){
//         // res.send({
//         //     code:400,
//         //     data:err,
//         //     msg:'error'
//         // });
//         res.send(formatData({code:400,msg:'error'}))
//     }
// });

// // 查询所有用户： /api/user/
// router.get('/',async (req,res)=>{
//     let sql = `select * from user`;

//     // promise的写法
//     // mysql.query(sql).then(rows=>{
//     //     res.send(rows);
//     // }).catch()
//     try{
//         const rows = await mysql.query(sql);
//         // res.send({
//         //     code:200,
//         //     data:rows,
//         //     msg:'success'
//         // });
//         let result = formatData({data:rows}); // {code:200,data:[{},{},{}],msg:'success'}
//         res.send(result);
//     }catch(err){
//         res.send(formatData({code:400,msg:'error'}));
//     }
// })


// ------------------mongodb----------------------
// 集合名称
const colName = 'user';

/**
 * 注册新用户
 */
router.post('/reg',async (req,res)=>{
    const {username,password} = req.body;

    const result = await mongo.create(colName,{username,password});
    if(result){
        res.send(formatData())
    }else{
        res.send(formatData({code:400}))
    }
});

/**
 * 检测用户名是否存在
 */
router.get('/check',async (req,res)=>{
    let {username} = req.query;
    // 查询用户是否存在
    const result = await mongo.find(colName,{username});console.log('result=',result);
    if(result.length>0){
        res.send(formatData({code:400}));
    }else{
        res.send(formatData())
    }
})

/**
 * 用户登录
 */
router.get('/login',async (req,res)=>{
    const {username,password} = req.query;

    const result = await mongo.find('user',{username,password});
    if(result.length>0){
        res.send(formatData())
    }else{
        res.send(formatData({code:400}))
    }
});

/**
 * 删除用户
 * delete /api/user/:id
 */
router.delete('/:id',async (req,res)=>{
    const {id} = req.params;

    const result = await mongo.remove(colName,{_id:id});
    if(result){
        res.send(formatData())
    }else{
        res.send(formatData({code:400}))
    }
});

module.exports = router;