// pages/pushlist/index.js
import Dialog from '@vant/weapp/dialog/dialog';
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 1,
    count: 10,
    pushList: [],
    openMap:{'0':'关闭','1':'开启'},
    finish: false
  },
  
  onPushSelect(e) {
    const { position, name } = e.detail;
    console.log('onPushSelect:', position, name)
    console.log('onPushSelect:', e)
    let that = this
    switch (position) {
      case 'left':
        console.log('left');
        break;
      case 'right':
        console.log('right');
        Dialog.confirm({
          message: '确定要删除吗？',
        }).then(() => {
          // on close
          wx.request({
            url: `${app.globalData.baseUrl}pushconfig/delete`,
            data: {
              id: name
            },
            success (res) {
              if (res.data.re_code === '0') {
                that.setData({
                  pushList: []
                })
                that.pushList()
              }
            }
          })
        }).catch(() => {
          // on cancel
        });

        break;
    }
  },

  pushList() {
    let that = this
    wx.request({
      url: `${app.globalData.baseUrl}pushconfig/get`,
      data: {
        wx_id: app.globalData.userInfo.wx_id,
        page: this.data.page,
        count: this.data.count
      },
      success (res) {
        console.log('onPushList:res:', res.data);
        if (res.data.re_code === '0') {
          that.setData({
            pushList: that.data.pushList.concat(res.data.data.data),
          })
          if (!res.data.data.has_next) {
            that.setData({
              finish: true
            })
          }
        }
        console.log('onPushList:res:', that.data.pushList);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pushList()
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
    console.log('下拉：')
    this.setData({
      page: this.data.page + 1
    })
    if (!this.data.finish) {
      this.pushList()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})