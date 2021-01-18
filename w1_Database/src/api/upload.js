const express = require('express');
const mongo = require('../db/mongodb');
const router = express.Router();
const { formatData } = require('../utils')
const multer  = require('multer')
const path = require('path')
const fs = require('fs');
const { Db } = require('mongodb');

// 创建上传中间件
// var upload = multer({
//     // 上传文件的目录（没有则创建）
//     dest: 'uploads/' 
// })
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // .uploads/avatar
        let dir = `./uploads/${file.fieldname}/`;
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir,{ recursive: true })
        }
        cb(null, dir);
    },

    // 上传文件保存目录，无则自动创建
    // destination:'./uploads/',

    // 格式化文件名
    filename: function (req, file, cb) {
        // 获取文件扩展名
        let ext = path.extname(file.originalname);
        // avatar-1234125341.jpg
        // cb(null, file.fieldname + '-' + Date.now() + ext);

        // avatar-1234125341-g1.jpg
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
})

var upload = multer({storage})

// ------------------mongodb----------------------
// 集合名称
const colName = 'user';

router.post('/avatar',upload.single('avatar'),(req,res)=>{
    // 单个文件在single中间件处理后写入req.file;
    // 其他字段写入req.body
    // 更新数据库
    

    res.send(req.file)
});
router.post('/goods',upload.array('goods'),(req,res)=>{
    // 单个文件在single中间件处理后写入req.file;
    res.send(req.file)
});


module.exports = router;