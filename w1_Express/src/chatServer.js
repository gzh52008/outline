const express = require('express');
const ws = require('ws');
let http = require('http');

// express web服务器
const app = express();
// 静态资源服务器
app.use(express.static('../public'));

// 利用http连接express服务器与socket服务器
const server = http.Server(app);

// Socket服务器
const wss = new ws.Server({
    server,
    // port:1001
});

wss.on('connection',(client)=>{
    client.on('close',()=>{

    });
    client.on('message',(data)=>{
        // 服务端只做一件事情：把用户发来的消息广播给其他用户
        wss.clients.forEach(client=>{
            client.send(data);
        })
    })
})


server.listen(2008,()=>{
    console.log('server is runing on port 2008')
})