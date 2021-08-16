// pages/know/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showKnows:[],
    current: '0',
    isLoading: false,
    count: 0,
    finish: false,
    isLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  handleChange ({ detail }) {
    this.setData({
        current: detail.key,
        showKnows: [],
        count: 0,
        isLoading: true,
        finish: false,
    });
    this.getKnows()
  },
  getKnows() {
    wx.cloud.callFunction({
      name: "getKnTag",
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
        showKnows: this.data.showKnows.concat(res.result.data),
        count: this.data.count + res.result.data.length
      })
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
      title: this.data.current === '0' ? '前端知识页面' : '后端知识页面',
      path: '/pages/know/index'
    }
  },
  onShareTimeline: function(res) {
    // 来自页面内转发按钮
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: this.data.current === '0' ? '前端知识页面' : '后端知识页面',
      // query:{
      //   id: this.data.cId
      // }
      // path: `/pages/detail/index?id=${this.data.id}&type=${this.data.type}`
    }
  }
})