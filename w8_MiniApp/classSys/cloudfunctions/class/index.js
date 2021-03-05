// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database();

const col = db.collection('class');



// 云函数入口函数
exports.main = async (event, context) => {
  const {
    type,
    id,
    query,
    data,
    options,
  } = event;

  switch (type) {
    case 'insert':
      return await insert(data);
    case 'delete':
      return await remove(id);
    case 'update':
      return await update(id, data);
    case 'find':
      return await find(query, options);
  }
}

async function insert(data) {
  const defaults = {
    is_current: false,
    city: '广州',
    category: 'html5'
  }
  return col.add({
    data: {
      ...defaults,
      ...data,
      addtime: new Date()
    }
  })
}

async function remove(id) {
  return col.doc(id).remove();
}

async function update(id, data) {
  return col.doc(id).update({
    data
  })
}

async function find(query = {}, options = {}) {
  const defaults = {
    page: 1,
    size: 10,
    orderBy: 'regtime',
    total: true
  }
  const opt = {
    ...defaults,
    ...options
  };
  const skip = (opt.page - 1) * opt.size;
  let orderField, order;
  if (Array.isArray(opt.orderBy)) {
    orderField = opt.orderBy[0]
    order = opt.orderBy[1]
  } else {
    orderField = opt.orderBy
    order = 'desc'
  }
  let collection = col.where(query);
  const total = await collection.count();

  collection = collection
    .skip(skip)
    .limit(opt.size)
    .orderBy(orderField, order);

  if (opt.field) {
    collection = collection.field(opt.field)
  }

  const result = await collection.get();

  return opt.total ? {
    total: total.total,
    result: result.data,
    page: opt.page,
    size: opt.size
  } : result.data;
}