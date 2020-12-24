const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const goodsRouter = require('./goods');

// 格式化请求体中的数据
router.use(express.json(),express.urlencoded());

router.use('/goods',goodsRouter);
router.use('/user',userRouter);


module.exports = router;