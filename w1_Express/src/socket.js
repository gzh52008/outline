const ws = require('ws');

const SocketServer = ws.Server;

// 创建Sokect服务端
const wss = new SocketServer({
    port:1001
});

let users = [];

// connection连接事件：只要有用户连接进来就会触发
wss.on('connection',(client)=>{
    // client: 连接的客户端对象
    console.log('conect');

    client.on('close',()=>{
        console.log('xxx 已断开')
    });

    client.on('message',(data)=>{
        console.log(data)
        let idx = users.indexOf(data);
        if(idx>=0){
            wss.clients[idx].close();
            users.splice(idx,1);
        }
        users.push(data);

        // 广播
        wss.clients.forEach(client=>{
            client.send(data)
            
        })
    })

    // 主动给客户端发消息
    client.send('欢迎来到jingjing后花园')
})