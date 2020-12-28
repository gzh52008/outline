const express = require('express');

const router = express.Router();

const mongo = require('../db/mongo');
const {formatData} = require('../utils');

const colName = 'interviewQuestion';

// 获取所有面试题
router.get('/list',async (req,res)=>{
    let {page=1,size=5,sort="addtime"} = req.query; // sort='hot,1'
    let skip = (page-1)*size;
    size *=1;

    const result = await mongo.find(colName,{},{skip,size,sort});
    res.send(formatData({data:result}))
})

// 添加面试题
router.post('/',async (req,res)=>{
    let {question,category,difficulty,hot=1,userid} = req.body; // sort='hot,1'
    
    let data = {
        question,
        category,
        difficulty,
        hot,
        userid,
        addtime:new Date()
    }
    try{
        const result = await mongo.create(colName,data);
        res.send(formatData())

    }catch(err){
        res.send(formatData({code:400}));
    }
});

// 删除面试题
router.delete('/:id',async (req,res)=>{
    let {id} = req.params; 

    try{
        const result = await mongo.remove(colName,{_id:id});
        res.send(formatData())

    }catch(err){
        res.send(formatData({code:400}));
    }
});

//修改面试题
router.put('/:id',async (req,res)=>{
    let {id} = req.params; 
    let {question,category,difficulty,hot} = req.body;

    let newData = {question,category,difficulty,hot}
    for(let key in newData){
        if(newData[key] === undefined){
            delete newData[key];
        }
    }
    console.log(newData);

    try{
        const result = await mongo.update(colName,{_id:id},{$set:newData});
        res.send(formatData())

    }catch(err){
        res.send(formatData({code:400}));
    }
});


module.exports = router;