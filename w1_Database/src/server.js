const express = require('express');
const rootRouter = require('./api');
const app = express();
const PORT = 2008;

// 静态资源服务器
app.use(express.static('../public'));

// 接口
app.use('/api',rootRouter);


app.listen(PORT,()=>{
    console.log(`server is runing on port ${PORT}`);
})