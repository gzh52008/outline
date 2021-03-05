// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:cloud.DYNAMIC_CURRENT_ENV
})

// const db = cloud.database()

// const col = db.collection('class');


// 云函数入口函数
// 操作班级class数据库
exports.main = async (event, context) => {
  // const data = await col.get()

  // console.log('data=',data);
  // console.log('event=',event);

  const data = await cloud.callFunction({
    name:'class',
    data:{
      type:'find'
    }
  })
  return data;
}