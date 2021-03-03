// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "list":[{
        "pagePath":"/pages/index/index",
        "text":"首页",
        iconPath:'/icon/home.png',
        selectedIconPath:'/icon/home_active.png'
      },
      {
        "pagePath":"/pages/classlist/classlist",
        "text":"班级",
        iconPath:'/miniapp/icon/list.png',
        selectedIconPath:'/miniapp/icon/list_active.png'
      },
      {
        "pagePath":"/pages/mine/mine",
        "text":"我的",
        dot:true,
        iconPath:'/miniapp/icon/mine.png',
        selectedIconPath:'/miniapp/icon/mine_active.png'
      }
    ]
},


  /**
   * 组件的方法列表
   */
  methods: {
    tabChange(e) {
      console.log(e)
      wx.switchTab({
        url: e.detail.item.pagePath,
      })
  }
  }
})
