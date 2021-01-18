const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const goodsRouter = require('./goods');
const uploadRouter = require('./upload');
const cors = require('../filter/cors')

router.use(cors);

// 格式化请求体中的数据
router.use(express.json(),express.urlencoded({extended:true}));

router.use('/goods',goodsRouter);
router.use('/user',userRouter);
router.use('/upload',uploadRouter);

module.exports = router;