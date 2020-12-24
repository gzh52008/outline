const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

// 数据库配置
const config = {
    dbUrl: "mongodb://localhost:27017",
    dbName: 'h52008',
}

// 封装一个连接数据库函数
async function connect(){
    const client = await MongoClient.connect(config.dbUrl);
    let db = client.db(config.dbName);

    // 查询数据库CRUD

    return {
        client,
        db
    }
}

// connect(); // Promise对象

async function create(colName,data){
    let {client,db} = await connect();
    
    const col = db.collection(colName);

    if(!Array.isArray(data)){
        data = [data];
    }

    let result;

    try{
        await col.insertMany(data);
        result = true;
    }catch(err){
        result = false;
    }

    client.close();
    return result;
}
// create('user',{username:'jingjing',password:'123',role:'vip',email:'jj@laoxie.com'})

function remove(){

}

function update(){

}

/**
 * 查询数据
 * @param {String} colName  集合名称
 * @param {Object} query    查询条件
 */
async function find(colName,query={}){
    let {client,db} = await connect();
    const col = db.collection(colName);

    const result = await col.find(query).toArray();

    return result;
}

module.exports = {
    create,
    remove,
    update,
    find
}

