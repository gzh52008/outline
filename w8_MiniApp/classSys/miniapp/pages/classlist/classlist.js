// pages/classlist/classlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 一、数据库操作
    // 获取数据库实例
    const db = wx.cloud.database();

    // 获取集合
    const col = db.collection('city')

    // const res = await col.where({is_current:true}).skip(2).get();
    const res = await col.doc('f11f525b5efab0120009432f30f3c045').get()
    console.log('res=',res);

    // 二、存储文件操作
    const fileList = await wx.cloud.getTempFileURL({
      fileList:['cloud://qf-52690b.7166-qf-52690b-1257864894/icons/home.png','cloud://qf-52690b.7166-qf-52690b-1257864894/icons/home_active.png']
    })
    console.log('fileList=',fileList)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //在页面展示后，获取tabbar实例，并设置Tabbar组件的current值
    const tabBar = this.getTabBar();console.log('tabbar=',tabBar)
    tabBar.setCurrent(1);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  uploadPic(){
    wx.chooseImage({
      success(res){
        console.log('res=',res);

        wx.cloud.uploadFile({
          cloudPath: 'jj.png', // 文件名称
          filePath: res.tempFilePaths[0], // 文件路径
        }).then(res=>{
          console.log(res.fileID)
        })
      }
    })
   
  }
})