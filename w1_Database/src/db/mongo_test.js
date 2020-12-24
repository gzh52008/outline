const mongodb = require('mongodb');

// 获取mongo客户端对象
const MongoClient = mongodb.MongoClient;

const mongoUrl = "mongodb://localhost:27017";
const dbName = 'h52008';

//连接mongoDB
MongoClient.connect(mongoUrl, async function(err, client) {
    // err: 连接数据库失败时的错误信息，默认为null
    // client: 连接成功后的客户端，可以利用它进行数据库操作
    if(err) throw err;

      // 连接数据库，无则自动创建(类似于命令行中的`use`命令)
      let db = client.db(dbName);

      // 获取集合
      const col = db.collection('user')
    

      const result = col.find();

    //   console.log('result=',result);

      // 获取集合中的数据
    // 1.回调函数的写法
    //   result.toArray(function(err,rows){
    //     console.log('rows=',rows);
    //   })

    // 2.Promise的写法
    // result.toArray().then(rows=>console.log('rows=',rows));

    // 3.asyn&await写法
    const rows = await result.toArray();
    console.log('rows=',rows);

    // 关闭数据库
    client.close();
});