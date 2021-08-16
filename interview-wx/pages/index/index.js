// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    companies: [],
    current: '0',
    count: 0,
    finish: false,
    mdContent: "",
    isLoading: true,
  },

  
  // 事件处理函数
  // bindViewTap() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // tab栏
  handleChange ({ detail }) {
    this.setData({
        current: detail.key,
        companies: [],
        count: 0,
        finish: false,
        mdContent: "",
        isLoading: true
    });
    this.getCompanies()
  },
  getCompanies() {
    // wx.cloud.database().collection("company")
    // .skip(this.data.count)
    // .get()
    // .then(res => {
    //   console.log(res)
    //   this.setData({
    //     companies: this.data.companies.concat(res.data),
    //     count: this.data.count + res.data.length
    //   })
    //   if (res.data.length === 0) {
    //     wx.showToast({
    //       title: '数据全部加载完毕...',
    //     })
    //   }
    // })
    wx.cloud.callFunction({
      name: "getCompanyDB",
      data: {
        status: this.data.current,
        count: this.data.count
      },
    }).then(res => {
      console.log(res.result.data);
      if (res.result.data.length === 0) {
        this.setData({
          finish: true
        })
      }
      this.setData({
        isLoading: false
      })
      // 写入数据
      this.setData({
        companies: this.data.companies.concat(res.result.data),
        count: this.data.count + res.result.data.length
      })
      
    }).catch(err => {
      console.log(res);
    })
  },
  // 加载用户

  onLoad() {

  },

    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 加载用户信息
    // 加载大厂面经列表

    this.setData({
      finish: false
    })
    this.getCompanies()
  
    // let userInfo = wx.getStorageSync('userInfo')
    // console.log(userInfo.nickName);
    // if (userInfo.nickName !== undefined) {
    //   this.setData({
    //     finish: false
    //   })
    //   this.getCompanies()
    // } else {
    //   wx.showToast({
    //     title: '点击用户授权...',
    //   })
    //   wx.switchTab({
    //     url: '../my/index'
    //   })
    // }
    
  },

    /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉")
    this.getCompanies()
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
      title: this.data.current === '0' ? '前端面经页面' : '后端面经页面',
      path: '/pages/index/index'
    }
  },
  onShareTimeline: function(res) {
    // 来自页面内转发按钮
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: this.data.current === '0' ? '前端面经页面' : '后端面经页面',
      // query:{
      //   id: this.data.cId
      // }
      // path: `/pages/detail/index?id=${this.data.id}&type=${this.data.type}`
    }
  }
})
