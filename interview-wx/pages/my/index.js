// pages/my/index.js
import Toast from '@vant/weapp/toast/toast';
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    showHintText: "Hi，有问题可以反馈给我哦~",
    qrCodeChatShow: false,
    qrCodeWxShow: false,
    qrCodeZanShow: false,
    activeCodeShow: false,
    activeCode: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载提示
    // this.loadHint()
    let userInfo = this.getUserInfoCache();
    if (userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: userInfo
      }),
      app.globalData.userInfo = userInfo;
    }
  },

  handleContact(e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  },

  onChat() {
    this.setData({
      qrCodeChatShow: true
    })
  },
  onZan() {
    this.setData({
      qrCodeZanShow: true
    })
  },
  onShare() {
    this.setData({
      qrCodeWxShow: true
    })
  },
  onClose() {
    this.setData({
      qrCodeChatShow: false,
      qrCodeWxShow: false,
      activeCodeShow: false,
      qrCodeZanShow: false
    })
  },
  // onLike() {
  //   // 1. 判断是否登录
  //   if (!this.data.hasUserInfo) {
  //     // 没登录，请登录
  //     Toast.fail('请登录授权');
  //     return
  //   }
  //   // 登录，是否激活？
  //   if (this.data.userInfo.active == 0) {
  //     // 未激活
  //     this.setData({
  //       activeCodeShow: true
  //     })
  //     return
  //   }
  //   // 已激活，跳转
  //   wx.navigateTo({
  //     url: `/pages/like/index?uuid=${this.data.userInfo.uuid}`,
  //   })
  // },
  // onActive() {
  //   var that = this
  //   wx.request({
  //     url: `${app.globalData.baseUrl}user/active`,
  //     data: {
  //       code: this.data.activeCode,
  //       uuid: this.data.userInfo.uuid,
  //     },
  //     success: (res) => {
  //       console.log('active:', res.data)
  //       if (res.data.re_code !== "0") {
  //         Toast.fail('激活码不正确');
  //       } else {
  //         Toast.success('激活成功');
  //         // 获取信息
  //         wx.login({
  //           success(res) {
  //             if (res.code) {
  //               wx.request({
  //                 url: `${app.globalData.baseUrl}user/info`,
  //                 data: {
  //                   code: res.code,
  //                 },
  //                 success(res) {
  //                   console.log(res.data.data)
  //                   that.setData({
  //                     userInfo: res.data.data
  //                   })
  //                   app.globalData.userInfo = res.data.data
  //                   // 已激活，跳转
  //                   wx.navigateTo({
  //                     url: `/pages/like/index?uuid=${res.data.data.uuid}`,
  //                   })
  //                 }
  //               })
  //             }
  //           }
  //         })
  //       }
  //     }
  //   })
  // },
  // 获取用户信息
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    let that = this
    wx.getUserProfile({
      desc: '用于使用高级功能',
      success: (res) => {
        console.log('getUserProfile:res:', res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        app.globalData.userInfo = res.userInfo;
        this.setUserInfoCache(res.userInfo);
        // wx.login({
        //   success(res) {
        //     if (res.code) {
        //       console.log('code:', res.code)
        //       //发起网络请求
        //       wx.request({
        //         url: `${app.globalData.baseUrl}user/add`,
        //         method: 'POST',
        //         data: {
        //           code: res.code,
        //           userInfo: that.data.userInfo,
        //         },
        //         success(res) {
        //           console.log('userinfo:res:', res.data)
        //           if (res.data.re_code === '0') {
        //             that.setData({
        //               userInfo: res.data.data,
        //             })
        //             app.globalData.userInfo = res.data.data
        //             // try {
        //             //   wx.setStorageSync('uuid', res.data.data.uuid)
        //             // } catch (e) { }
        //             Toast('登录成功')
        //           }
        //         }
        //       })
        //     } else {
        //       console.log('登录失败！' + res.errMsg)
        //     }
        //   }
        // })
      },
    })
  },
  // 加载提示功能
  loadHint() {
    let that = this
    wx.request({
      url: `${app.globalData.baseUrl}msg?status=1`,
      success(res) {
        if (res.data.re_code === '0') {
          console.log('loadHint:res:', res.data.data.content);
          that.setData({
            showHintText: res.data.data.content
          })
        }
      }
    })
  },
  // 写入用户信息缓存
  setUserInfoCache(userInfo) {
    wx.setStorage({
      key: 'user',
      data: userInfo,
      success: () => {
        console.log('user::cache', userInfo)
      },
    });
  },
  // 读取用户信息缓存
  getUserInfoCache() {
    let userInfo = {}
    try {
      userInfo = wx.getStorageSync('user'); 
    } catch (error) {
      console.log('user:cache:get', error)
    }
    return userInfo
  },
  // 更新
  onUpdate() {
    this.getUserProfile()
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
    console.log('my/index::app.globalData.userInfo::', app.globalData.userInfo);
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
  onShareAppMessage: function () {

  }
})