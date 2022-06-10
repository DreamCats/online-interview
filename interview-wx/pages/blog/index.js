// pages/blog.js
import Toast from '@vant/weapp/toast/toast';
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    docsList: [],
    finish: false,
    isLoading: false,
    count: 9,
    page: 1,
  },

  // 加载docs
  getList() {
    this.setData({
      isLoading: true
    })
    let that = this
    wx.request({
      url: `${app.globalData.baseUrl}items/blog/list`,
      data: {
        count: this.data.count,
        page: this.data.page
      },
      success(res) {
        console.log('list:res:', res.data.data)
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
        } else {
          that.setData({
            isLoading: false
          })
          Toast("小小提示->作者还没有添加数据哦...")
        }
      },
    })
  },

  onViewItem(options) {
    console.log(options)
    var uuid = options.target.id
    wx.navigateTo({
      url: `/pages/detail/index?uuid=${uuid}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载
    this.getList()
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
    this.setData({
      docsList: []
    })
    wx.stopPullDownRefresh({
      success: (res) => {},
    })
    this.getList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      page: this.data.page + 1
    })
    if (!this.data.finish) {
      this.getList()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: `博客页面`,
      path: `/pages/list/index?uuid=${this.data.uuid}`
    }
  },

  onShareTimeline: function(res) {
    // 来自页面内转发按钮
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: `博客页面`,
      query:{
        id: this.data.uuid
      }
      // path: `/pages/detail/index?id=${this.data.id}&type=${this.data.type}`
    }
  }
})