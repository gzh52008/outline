const express = require('express');
const rootRouter = require('./router');
const app = express();
const PORT = 2008;

// 静态资源服务器
app.use(express.static('../public'));

// 编写接口
app.use('/api',rootRouter);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});