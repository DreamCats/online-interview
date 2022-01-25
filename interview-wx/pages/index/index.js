// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    tags: [],
    isLoading: false,
    finish: false,
  },

  getTags() {
    this.setData({
      isLoading: true
    })
    let that = this
    wx.request({
      url: `${app.globalData.baseUrl}tag/list/all`,
      success (res) {
        console.log('getTags:res', res.data.data)
        if (res.data.re_code === '0') {
          that.setData({
            tags: res.data.data,
            isLoading: false
          })
           
        } 
        that.setData({
          isLoading: false
        })
      }
    })
    // 排序
  },

  onLoad() {
    
    wx.login({
      success(res) {
        if(res.code) {
          wx.request({
            url: `${app.globalData.baseUrl}user/info`,
            data: {
              code: res.code,
            },
            success(res) {
              console.log(res.data.data)
              app.globalData.userInfo = res.data.data
            }
          })
        }
      }
    })
  },

    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 加载
    this.getTags()
  },

    /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉")
    this.setData({
      finish: true
    })
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
      title: '买老师互联网面试题',
      path: '/pages/index/index'
    }
  },
  onShareTimeline: function(res) {
    // 来自页面内转发按钮
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '买老师互联网面试题',
      // query:{
      //   id: this.data.cId
      // }
      // path: `/pages/detail/index?id=${this.data.id}&type=${this.data.type}`
    }
  }
})
