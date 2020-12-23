const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const goodsRouter = require('./goods');

router.use('/goods',goodsRouter);
router.use('/user',userRouter);


module.exports = router;