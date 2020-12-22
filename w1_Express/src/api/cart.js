const express = require('express');
const router = express.Router();

// get /api/cart
router.get('/',(req,res)=>{
    // 获取购物车所有商品
});

// delete /api/cart/12
router.delete('/:id',(req,res)=>{
    // 删除购物车商品
})

router.patch('/:id',(req,res)=>{
    // 修改商品数量
})

module.exports = router;