const express = require('express');

const app = express();

// 静态资源服务器
app.use(express.static('./'));

app.listen(20080,function(){
    console.log('server is running on port 2008');
})