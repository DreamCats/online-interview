// pages/detail/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    type: "",
    mdContent: "",
    isLoading: true,
    title:"",
  },

  getMd() {
    wx.cloud.callFunction({
      name: "getDetail",
      data: {
        id: this.data.id,
        type: this.data.type
      }
    }).then(res => {
      console.log(res);
      let obj = app.towxml(res.result.data[0].content,'markdown',{});
      this.setData({
        mdContent: obj,
        isLoading: false
      });
    }).catch(err => {
      console.log(err);
    })
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面加载：", options);
    this.setData({
      id: options.id,
      type: options.type,
      title: options.title
    })
    this.getMd();
    // wx.cloud.callFunction({
    //   name: "max"
    // }).then(res => {
    //   console.log(res)
    // })
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
      title: this.data.title,
      path: `/pages/detail/index?id=${this.data.id}&type=${this.data.type}`
    }
  },
  onShareTimeline: function(res) {
    // 来自页面内转发按钮
    if (res.from === 'button') {
      console.log(res.target)
    }

    return {
      title: this.data.title,
      query:{
        id: this.data.id,
        type: this.data.type
      }
      // path: `/pages/detail/index?id=${this.data.id}&type=${this.data.type}`
    }
  }
})