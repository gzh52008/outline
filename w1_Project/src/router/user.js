const express = require('express');

const router = express.Router();

const {formatData} = require('../utils');

// /api/user/reg
router.post('/reg',(req,res)=>{
    res.send(formatData());
});
router.get('/login',(req,res)=>{
    res.send(formatData());
});

// 获取所有用户
router.get('/list',(req,res)=>{
    res.send(formatData());
});
// 获取指定用户
router.get('/:id',(req,res)=>{
    res.send(formatData());
});
router.delete('/:id',(req,res)=>{
    res.send(formatData());
});
router.put('/:id',(req,res)=>{
    res.send(formatData());
});



module.exports = router;