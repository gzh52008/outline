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
      "pagePath":"pages/index/index",
      "text":"首页",
      "iconPath":"img/home.png",
      "selectedIconPath":"img/home_active.png"
    },
    {
      "pagePath":"pages/mine/mine",
      "text":"我的",
      "iconPath":"img/mine.png",
      "selectedIconPath":"img/mine_active.png"
    }
  ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeTab(e){
      const {url} = e.currentTarget.dataset;
      console.log(e,url)
      wx.switchTab({
        url:'/'+url,
      })
    }
  }
})
