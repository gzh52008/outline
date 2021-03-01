// pages/mine/mine.js
const app = getApp();
console.log('app=',app);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentClass:'GZ-H5-2008',
    userInfo:{
      age:18
    },
    // classList:['2001','2002','2008','2009'],
    classList:[{id:1,name:'2001',student:['laoxie','jingjing','zeze']},{id:2,name:'2002',student:['laoxie2','jingjing2','zeze2']},{id:3,name:'2008',student:['laoxie8','jingjing8','zeze8']}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('Mine.onLoad')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('Mine.onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('Mine.onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('Mine.onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('Mine.onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('Mine.onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('Mine.onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('Mine.onShareAppMessage')
  },

  // 自定义事件处理函数
  changeClass(e){
    // console.log(e)
    this.setData({
      currentClass:e.detail.value
    })
  },
  handleClick(e){
    console.log('click=',e)
  }
})