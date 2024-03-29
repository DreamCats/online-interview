// index.js
// 获取应用实例
const app = getApp()
const tabDatas = require('../../datas/tag')
Page({
  data: {
    tags: [],
  },

  onLoad() {
    // this.getTags()
    this.setData({
      tags: tabDatas.datas
    });
  },

    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 下拉
   */
  onPullDownRefresh: function() {
    this.getTags()
    wx.stopPullDownRefresh({
      success: (res) => {},
    })
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
