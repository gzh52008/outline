// index.js
// 获取应用实例
const app = getApp();

const request = require('../../utils/request')
console.log('resquest',request);

Page({
  data: {
   classList:[],
   userList:[]
  },
  
  async onLoad() {
    this.getData();

    // 获取当前班级学生列表
    const {data} = await request.get('/user',{
      class_id:'5fb3939b1ae684fd77bc633e',
      size:100
    });
    this.setData({
      userList:data.result
    });
    console.log('user=',data)
  },
  async getData(){
    const {data} = await request.get('/class');
    console.log('data=',data);
    this.setData({
      classList:data.result
    })
  },
  gotoClass(e){
    const {id} = e.currentTarget.dataset
    wx.navigateTo({
      url:'/pages/class/class?id='+id
    })
  },
  gotoUser(e){
    const {id} = e.currentTarget.dataset
    wx.navigateTo({
      url:'/pages/user/user?id='+id
    })
  }
})
