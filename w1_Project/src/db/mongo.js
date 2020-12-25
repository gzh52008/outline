const {ObjectId,MongoClient} = require('mongodb');


// 数据库配置
const config = {
    dbUrl: "mongodb://localhost:27017",
    dbName: 'mst',
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

// var a = await connect(); // Promise对象

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

    // 关闭连接，释放资源暂用
    client.close();
    return result;
}
// create('user',{username:'jingjing',password:'123',role:'vip',email:'jj@laoxie.com'})
// create('user',[{username:'jingjing',password:'123',role:'vip',email:'jj@laoxie.com'},{}.{}])

/**
 * 删除数据
 * @param {String} colName  集合名称
 * @param {Object} query    查询条件
 */
async function remove(colName,query){
    let {client,db} = await connect();
    const col = db.collection(colName);

    if(query._id){// {_id:5fe44705b66bed4848f34799} -> {_id:ObjectId("5fe44705b66bed4848f34799")}
        query._id = ObjectId(query._id);//5fe44705b66bed4848f34799 -> ObjectId("5fe44705b66bed4848f34799")
    }

    let result;
    try{
        await col.deleteMany(query)
        result = true;
    }catch(err){
        result = false;
    }

    client.close();
    return result;
}

async function update(colName,query,data){
    let {client,db} = await connect();
    const col = db.collection(colName);

    if(query._id){
        query._id = ObjectId(query._id);
    }

    let result;
    try{
        await col.updateMany(query,data);
        result = true;
    }catch(err){
        result = false;
    }

    client.close();
    return result;
}

// update('user',{_id:'5fe3f8b15fdf57d03ed2d2d2'},{$set:{email:'laoxie@laoxie.com.cn'}})

/**
 * 查询数据
 * @param {String} colName  集合名称
 * @param {Object} query    查询条件
 */
async function find(colName,query={},{skip,size,sort}={}){
    let {client,db} = await connect();
    const col = db.collection(colName);

    if(query._id){
        query._id = ObjectId(query._id);
    }

    // 获取所有数据
    let result = col.find(query);

    // 排序
    sort = sort.split(','); //sort='addtime'->['addtime'] | sort='hot,1' -> ['hot','1']
    if(sort.length==1){
        sort[1] = -1;
    }
    result = result.sort({
        [sort[0]]:sort[1]*1
    });
    

    // 筛选需要的数据
    result = result.skip(skip).limit(size);

    result = await result.toArray();

    client.close();
    return result;
}

module.exports = {
    create,
    remove,
    update,
    find
}

