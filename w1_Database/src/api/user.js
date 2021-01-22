const express = require('express');
const mysql = require('../db/mysql');
const mongo = require('../db/mongodb');
const router = express.Router();
const { formatData } = require('../utils')
const crypto = require('crypto');

const token = require('../utils/token');

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
router.post('/reg', async (req, res) => {
    const { username, password } = req.body;

    // 指定加密算法：md5,sha1,sha128,sha256,sha512
    const hash = crypto.createHash('sha256');
    hash.update(password);
    const newPassword = hash.digest('base64');

    let userData = {
        username,
        password: newPassword,
        regtime: new Date()
    }
    const result = await mongo.create(colName, userData);
    if (result) {
        res.send(formatData())
    } else {
        res.send(formatData({ code: 400 }))
    }
});

/**
 * 检测用户名是否存在
 */
router.get('/check', async (req, res) => {
    let { username } = req.query;
    // 查询用户是否存在
    const result = await mongo.find(colName, { username }); console.log('result=', result);
    if (result.length > 0) {
        res.send(formatData({ code: 400 }));
    } else {
        res.send(formatData())
    }
})

/**
 * 用户登录
 */
router.get('/login', async (req, res) => {
    const { username, password } = req.query;

    const hash = crypto.createHash('sha256');
    hash.update(password);
    const newPassword = hash.digest('base64');

    // 创建token
    const Authorization = token.create({username, password:newPassword})

    const result = await mongo.find('user', { username, password: newPassword }, { projection: { password: 0 } });
    if (result.length > 0) {
        res.set({
            Authorization
        })
        res.send(formatData({
            data: {
                ...result[0],
                Authorization
            }
        }))
    } else {
        res.send(formatData({ code: 400 }))
    }
});

/**
 * 删除用户
 * delete /api/user/:id
 */
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const result = await mongo.remove(colName, { _id: id });
    if (result) {
        res.send(formatData())
    } else {
        res.send(formatData({ code: 400 }))
    }
});

router.get('/verify',async (req,res)=>{
    let Authorization = req.get('Authorization');console.log('Authorization',Authorization)
    const expires = await token.verify(Authorization);
    console.log('expires',expires)
    res.send(formatData({
        code: expires ? 200 : 400
    }))
})

module.exports = router;