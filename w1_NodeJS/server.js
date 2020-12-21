/**
     * 静态资源服务器
        * 根据不同的请求，响应相应的内容
 */

 const http = require('http');
 const url = require('url'); // 处理url参赛
 const path = require('path'); // 文件路径
 const fs = require('fs'); // 文件操作
 
 // 引入mime类型
 const mime = require('./mime');

//  const server = http.createServer(function(request,response){
//     // 每一次请求都执行这里的代码

//     // request: 请求信息
//     // response： 响应信息

//     // 设置响应头
//     response.writeHead(200,{'Content-Type':'text/html;charset=utf8'});

//     response.write('<h1>hello jingjing</h1>');
//     response.end('<p>baibai jingjing</p>');
//  });

const server = http.createServer((req,res)=>{
    // 获取请求文件路径
    const {pathname} = url.parse(req.url,true); // /img/3.png

    // 转成绝对路径
    const realPath = path.join(__dirname,pathname);

    // 提取扩展名（后缀）
    const extname = path.extname(pathname).slice(1);

    
    // fs.readFileSync()
    fs.readFile(realPath,(err,data)=>{
        // err： 报错信息，默认null
        // data: 读取文件的内容Buffer
        if(err){
            res.writeHead(404,{'content-type': 'text/plain;charset=utf8'});
            return; 
        }

        res.writeHead(200,{'Content-Type':`${mime[extname]};charset=utf8`});
        res.end(data);
    });
});

//  2^16 = 65536;
 server.listen(2008,function(){
     console.log('server is running...');
 })