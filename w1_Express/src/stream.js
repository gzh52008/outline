const fs = require('fs');

/**
    * 读取流： fs.createReadStream(path)
        * 事件
            * data
            * end
            * error
        * 编码：setEncoding()
 */
const path = './spider.js';
const imgPath = '../public/img/display_614354_1.jpg'

// 读取小文件
// fs.readFile(path,(err,data)=>{
//     console.log('data=',data.toString());
// })
// const imgData = fs.readFileSync(imgPath);
// console.log('imgData=',imgData.toString('base64'));

// 读取打文件（不确定大小）
// const readStream = fs.createReadStream(imgPath);

// let data = ''

// // 读取文件操作会触发data事件
// readStream.on('data',(chunk)=>{
//     // chunk: 每次读取的数据块
//     console.log(666,chunk)
//     data += chunk.toString('base64');
// });

// // 数据读取完毕会触发end事件
// readStream.on('end',()=>{
//     console.log('大文件读取完毕');
//     console.log('data',data);
// });


/**
    * 写入流： fs.createWriteStream(path)
        * 方法:
            * write()：写入内容方法
            * end()：标记写入结束
        * 事件
            * finish 写入完成后触发
 */

//  目录不存在时，自动创建
let dataPath = './data';
// if(!fs.existsSync(dataPath)){
//     fs.mkdirSync(dataPath)
//     console.log(dataPath + '目录创建成功');
// }

// const writerStream = fs.createWriteStream(dataPath+'/test.txt');

// // 写入内容
// // writerStream.write('hello');
// // writerStream.write('jingjing');
// for(let i=0;i<520;i++){
//     writerStream.write('jingjing I love you! \n');
// }
// writerStream.end();


/**
     * 管道流
     * pipe()
 */

//  复制文件
fs.createReadStream('./server.js').pipe(fs.createWriteStream(dataPath+'/server.js'));
