// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    companies: [],
    active: '0', // type
    count: 0,
    mdContent: "",
    isLoading: false,
  },

  
  // 事件处理函数
  // bindViewTap() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // tab栏
  onChange (event) {
    this.setData({
        active: event.detail.name,
        companies: [],
        count: 0,
        finish: false,
        mdContent: "",
        isLoading: true
    });
    this.getCompanies()
  },
  getCompanies() {
    this.setData({
      isLoading: true
    })
    let that = this
    wx.request({
      url: `${app.globalData.baseUrl}company/list?type=${this.data.active}`,
      success (res) {
        console.log(res.data.data)
        if (res.data.re_code === '0') {
          that.setData({
            companies: res.data.data,
            isLoading: false
          })
        } 
      }
    })
  },

  onLoad() {

  },

    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 加载大厂面经列表
    this.getCompanies()
  },

    /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉")
    // this.getCompanies()
  },
   /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.active === '0' ? '前端面经页面' : '后端面经页面',
      path: '/pages/index/index'
    }
  },
  onShareTimeline: function(res) {
    // 来自页面内转发按钮
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: this.data.active === '0' ? '前端面经页面' : '后端面经页面',
      // query:{
      //   id: this.data.cId
      // }
      // path: `/pages/detail/index?id=${this.data.id}&type=${this.data.type}`
    }
  }
})
