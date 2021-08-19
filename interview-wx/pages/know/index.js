// pages/know/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showKnows:[],
    active: '0',
    isLoading: false,
    count: 0,
    finish: false,
    isLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onChange (event) {
    this.setData({
        active: event.detail.name,
        showKnows: [],
        count: 0,
        isLoading: true,
    });
    this.getKnows()
  },
  getKnows() {
    this.setData({
      isLoading: true
    })
    let that = this
    wx.request({
      url: `${app.globalData.baseUrl}kwtype/list?type=${this.data.active}`,
      success (res) {
        console.log(res.data.data)
        if (res.data.re_code === '0') {
          that.setData({
            showKnows: res.data.data,
            isLoading: false
          })
        } 
      }
    })
},
  onLoad: function (options) {

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
    this.getKnows()
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.active === '0' ? '前端知识页面' : '后端知识页面',
      path: '/pages/know/index'
    }
  },
  onShareTimeline: function(res) {
    // 来自页面内转发按钮
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: this.data.active === '0' ? '前端知识页面' : '后端知识页面',
      // query:{
      //   id: this.data.cId
      // }
      // path: `/pages/detail/index?id=${this.data.id}&type=${this.data.type}`
    }
  }
})