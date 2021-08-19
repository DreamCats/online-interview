// pages/docs/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    docsList: [],
    cId: "",
    count: 11,
    page: 1,
    finish: false,
    isLoading: true,
    name:""
  },
  // item触发跳转
  onBt (evnet) {
    console.log(evnet.currentTarget.dataset.item)
    wx.navigateTo({
      url: '/pages/detail/index',
      success: function(res) {
        res.eventChannel.emit('fromMj', {data: evnet.currentTarget.dataset.item})
      }
    })
  },
  // 加载docs
  getDocs() {
    this.setData({
      isLoading: true
    })
    let that = this
    wx.request({
      url: `${app.globalData.baseUrl}mj/list`,
      data: {
        c_id: this.data.cId,
        count: this.data.count,
        page: this.data.page
      },
      success (res) {
        console.log(res.data.data)
        if (res.data.re_code === '0') {
          that.setData({
            docsList: that.data.docsList.concat(res.data.data.data),
            isLoading: false
          })
          if (!res.data.data.has_next) {
            that.setData({
              finish: true
            })
          }
        } 
      }
    })
  },
  
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      cId: options.id,
      name: options.name
    })
    // 加载
    this.getDocs()
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
    console.log("下拉");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      page: this.data.page + 1
    })
    if (!this.data.finish) {
      this.getDocs()
    }
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
      title: `面经列表页面: ${this.data.name}`,
      path: `/pages/mj/index?id=${this.data.cId}`
    }
  },
  onShareTimeline: function(res) {
    // 来自页面内转发按钮
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: `面经列表页面: ${this.data.name}`,
      query:{
        id: this.data.cId
      }
      // path: `/pages/detail/index?id=${this.data.id}&type=${this.data.type}`
    }
  }
})