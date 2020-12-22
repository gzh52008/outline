const express = require('express');
const router = express.Router();


const goodsRouter = require('./goods');
const userRouter = require('./user');
const cartRouter = require('./cart');

router.use(express.urlencoded(),express.json())

// /api/goods
router.use('/goods',goodsRouter);

// /api/user
router.use('/user',userRouter);

// /api/cart
router.use('/cart',cartRouter);


module.exports = router;