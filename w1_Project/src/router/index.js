const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const iqRouter = require('./iq');

router.use(express.json(),express.urlencoded({extended:true}));

// /api/user
router.use('/user',userRouter);
// /api/iq
router.use('/iq',iqRouter);


module.exports = router;