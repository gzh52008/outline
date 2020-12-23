const mysql = require('mysql');

// 1. 使用连接对象方式

// //创建连接对象，并配置参数
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'h52008'
// });

// // 连接数据库
// connection.connect();

// let sql = 'select * from user';

// // 执行sql语句
// connection.query(sql, function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
// });

// // 关闭连接,释放资源
// connection.end();

// 2. 使用连接池方式（推荐）
//创建连接池
var pool  = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '',
    // port: 3306,
    // connectionLimit:20,
    database: 'h52008',
    multipleStatements: true
});
// let sql = 'select * from user';

module.exports = {
    query:function(sql){
        return new Promise((resolve,reject)=>{
            pool.query(sql, function(error, rows){
                if(error){
                    reject(error);
                }
                resolve(rows);
            });

        })
    }
}