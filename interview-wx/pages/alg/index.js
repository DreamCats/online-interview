// pages/knows/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    algsList: [],
    count: 0,
    finish: false,
    isLoading: true
  },


  // 加载algs
  getAlgs() {
    wx.cloud.callFunction({
      name: "getAlgsDB",
      data: {
        count: this.data.count
      }
    }).then(res => {
      console.log(res);
      if (res.result.data.length === 0) {
        this.setData({
          finish: true
        })
      }
      this.setData({
        algsList: this.data.algsList.concat(res.result.data),
        count: this.data.count + res.result.data.length,
        isLoading: false
      })
      
    }).catch(err => {

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
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

    this.setData({
      finish: false
    })
    this.getAlgs()

    // let userInfo = wx.getStorageSync('userInfo')

    // if(userInfo.nickName !== undefined) {
    //   this.setData({
    //     finish: false
    //   })
    //   this.getAlgs()
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
    this.getAlgs()
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
      title: '算法页面',
      path: '/pages/alg/index'
    }
  },
  onShareTimeline: function(res) {
    // 来自页面内转发按钮
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '算法页面',
      // query:{
      //   id: this.data.cId
      // }
      // path: `/pages/detail/index?id=${this.data.id}&type=${this.data.type}`
    }
  }
})