// pages/pushlist/index.js
import Toast from '@vant/weapp/toast/toast';
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    docsList: [],
    uuid: "",
    count: 18,
    page: 1,
    finish: false,
    isLoading: true,
    name:"",
  },
    // 加载docs
    getList() {
      this.setData({
        isLoading: true
      })
      let that = this
      wx.request({
        url: `${app.globalData.baseUrl}items/like`,
        data: {
          user_uuid: this.data.uuid,
          count: this.data.count,
          page: this.data.page
        },
        success (res) {
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
            Toast("还没有收藏..")
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
    onCancleLike(e) {
      var item_uuid = e.target.id
      // 发
      var that = this
      wx.request({
        url: `${app.globalData.baseUrl}items/likecount/remove`,
        data: {
          item_uuid: item_uuid,
          user_uuid: this.data.uuid
        },
        success(res) {
          if (res.data.re_code !== "0") {
            Toast.fail("删除失败")
          } else {
            Toast.success("移除成功")
          }
        }
      })
      this.setData({
        docsList: []
      })
      this.getList()
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      uuid: options.uuid
    })
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
    this.setData({
      docsList: []
    })
    this.getList()
    wx.stopPullDownRefresh({
      success: (res) => {},
    })
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

  }
})