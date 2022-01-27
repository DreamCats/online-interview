// pages/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    docsList: [],
    count: 13,
    finish: false,
    isLoading: true,
    tag_type: '0'
  },

  // 加载docs
  getList() {
    this.setData({
      isLoading: true
    })
    let that = this
    wx.request({
      url: `${app.globalData.baseUrl}items/rand`,
      data: {
        count: this.data.count,
        tag_type: this.data.tag_type
      },
      success(res) {
        console.log('list:res:', res.data.data)
        if (res.data.re_code === '0') {
          that.setData({
            docsList: that.data.docsList.concat(res.data.data),
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
  onSwitch(event) {
    console.log(event.detail.name)
    this.setData({
      tag_type: event.detail.name,
      docsList:[]
    })
    this.getList()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
    wx.login({
      success(res) {
        if (res.code) {
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
    this.setData({
      docsList: []
    })
    this.getList()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '买老师互联网面试题'
    }
  }
})