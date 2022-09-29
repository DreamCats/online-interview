// pages/detail/index.js
import Toast from '@vant/weapp/toast/toast';
const itemDatas = require('../../datas/items')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    content: "",
    mdContent: "",
    isLoading: false,
    title:"",
    imgsList:[''],
    mode: "light"
  },

  onMode() {
    console.log("mode")
    var m = this.data.mode == "light" ? "dark" : "light"
    var that = this
    let obj = app.towxml(this.data.content,'markdown',{
      theme: m,
      events: {
        tap:e => {
          console.log('tap:', e.currentTarget.dataset)
          // 在这里可以做图片点击预览... 
          var url = e.currentTarget.dataset.data.attrs.src
          url = url ? url : ""
          if (url != "") {
            wx.previewImage({
              current: url,
              urls: [url]
            })
          }
          // 在这里也可以长按复制
        }
      }
    });
    that.setData({
      mdContent: obj,
      mode: m
    })
  },
  onLike() {
    // 判断是否登录
    if (!app.globalData.userInfo) {
      // 未登录
      Toast.fail("请到个人中心登录")
      return
    }
    // 登录，是否激活？
    if (app.globalData.userInfo.active == 0) {
      // 未激活
      Toast.fail("请到个人中心我的收藏激活")
      return
    }
    // 已激活，发送
   wx.request({
     url: `${app.globalData.baseUrl}items/likecount/add`,
     data: {
       item_uuid: this.data.uuid,
       user_uuid: app.globalData.userInfo.uuid
     },
     success(res) {
       if (res.data.re_code !== "0") {
         Toast.fail("已收藏")
       } else {
         Toast.success("收藏成功")
       }
     }
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("页面加载：", options);
    wx.onThemeChange((result) => {
      let obj = app.towxml(this.data.content,'markdown',{
        theme: result.theme,
        events: {
          tap:e => {
            console.log('tap:', e.currentTarget.dataset)
            // 在这里可以做图片点击预览... 
            var url = e.currentTarget.dataset.data.attrs.src
            url = url ? url : ""
            if (url != "") {
              wx.previewImage({
                current: url,
                urls: [url]
              })
            }
            // 在这里也可以长按复制
          }
        }
      });
      this.setData({
        mdContent: obj,
        mode: result.theme
      })
    })

    this.setData({
      mode: app.globalData.themeMode
    })

    let datas = itemDatas.datas;
    let data = {};
    datas.forEach(item => {
      if (item.id == options.id) {
        data = item
      }
    });

    let obj = app.towxml(data.content,'markdown',{
      theme: this.data.mode,
      events: {
        tap:e => {
          console.log('tap:', e.currentTarget.dataset)
          // 在这里可以做图片点击预览... 
          var url = e.currentTarget.dataset.data.attrs.src
          url = url ? url : ""
          if (url != "") {
            wx.previewImage({
              current: url,
              urls: [url]
            })
          }
          // 在这里也可以长按复制
        }
      }
    });

    this.setData({
      mdContent: obj,
      content: data.content,
      title: data.title
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
    wx.stopPullDownRefresh({
      success: (res) => {},
    })
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
    console.log("das")
    return {
      title: this.data.title,
      path: `/pages/detail/index?uuid=${this.data.uuid}`
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
        uuid: this.data.uuid,
        type: this.data.type
      }
      // path: `/pages/detail/index?id=${this.data.id}&type=${this.data.type}`
    }
  }
})