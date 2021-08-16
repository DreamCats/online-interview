// pages/kw/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    docsList: [],
    cId: "",
    count: 0,
    finish: false,
    isLoading: true,
    tag:""
  },

  onTest(event){
    console.log(event)
  },

    // 加载docs
    getDocs() {
      wx.cloud.callFunction({
        name: "getKnowsDB",
        data: {
          cId: this.data.cId,
          count: this.data.count
        }
      }).then(res => {
        console.log(res);
        this.setData({
          docsList: this.data.docsList.concat(res.result.data),
          count: this.data.count + res.result.data.length,
          isLoading: false
        })
        if (res.result.data.length === 0) {
          this.setData({
            finish: true
          })
        }
      }).catch(err => {
  
      })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      cId: options.id,
      tag: options.tag
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getDocs()
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
      title: `知识列表页面: ${this.data.tag}`,
      path: `/pages/kw/index?id=${this.data.cId}`
    }
  },
  onShareTimeline: function(res) {
    // 来自页面内转发按钮
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: `知识列表页面: ${this.data.tag}`,
      query:{
        id: this.data.cId
      }
      // path: `/pages/detail/index?id=${this.data.id}&type=${this.data.type}`
    }
  }
})