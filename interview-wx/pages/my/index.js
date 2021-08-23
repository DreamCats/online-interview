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
    push_token: '',
    pushConfigShow: false,
    time: '',
    number: '',
    pushConfig: {
      wx_id: '',
      push_token: '',
      push_time: '',
      push_number: '',
      push_status: '0',
      tag_id: 1,
      tag_name: '',
    },
    tags: [],
    qrCodeShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } 
    // 获取全部tabs
    this.getTags()
    
  },

  // 消息盒子按钮
  onChat() {
    this.setData({
      qrCodeShow: true
    })
  },
  
  onPushConfigAdd() {
    // 构造数据
    this.setData({
      'pushConfig.wx_id': this.data.userInfo.wx_id,
      'pushConfig.push_token': this.data.push_token,
      'pushConfig.tag_name': this.data.tags[this.data.pushConfig.tag_id - 1].text,
      'pushConfig.push_time': this.data.time,
      'pushConfig.push_number': this.data.number
    })
    console.log('pushconfig:', this.data.pushConfig);
    wx.request({
      url: `${app.globalData.baseUrl}pushconfig/add`,
      method: 'POST',
      data: this.data.pushConfig,
      success (res) {
        console.log('onPushConfigAdd:res', res.data)
        if (res.data.re_code === '0') {
          Toast('添加成功...')
        }
      }
    })
  
  },
  onTagSelect(e) {
    console.log('onTagSelect',e)
    this.setData({
      'pushConfig.tag_id': e.detail
    })
  },
  getTags() {
    let that = this
    wx.request({
      url: `${app.globalData.baseUrl}tag/list/all`,
      success (res) {
        console.log('getTabs:res:', res.data)
        if (res.data.re_code === '0') { 
          // 换算
          let tags = []
          for (let tag of res.data.data) {
            tags.push({text:tag.tag_name, value: tag.id})
          }
          that.setData({
            tags: tags
          })
          console.log('tags:res', that.data.tags)
        }
      }
    })
    
  },
  onPushRadio(event) {
    console.log('test:', event)
    this.setData({
      'pushConfig.push_status': event.detail
    });
    console.log('test:', this.data.pushConfig.push_status)
  },
  onPushConfig() {
    console.log('onPushConfig:', this.data.pushConfigShow)
    this.setData({
      pushConfigShow: true
    })
  },
  onPushList() {
    // 跳转
    wx.navigateTo({
      url: '/pages/pushlist/index',
    })
  },
  onClose() {
    console.log('onClose:')
    this.setData({
      pushConfigShow: false,
      qrCodeShow: false
    })
  },
  onHint() {
    console.log('onHint:')
    // 跳转
    wx.navigateTo({
      url: '/pages/detail/index?id=1000&tag=5&title=如何获取pushtoken教程',
    })
  },
  onPushBind() {
    console.log('onPushBind:')
    let that = this
    wx.request({
        url: `${app.globalData.baseUrl}user/push_token`,
        method: 'POST',
        data: {
          wx_id: this.data.userInfo.wx_id,
          push_token: this.data.push_token,
        },
        success (res) {
          console.log('onPushBind:res:', res.data)
          if (res.data.re_code === '0') {
            that.setData({
              push_token: res.data.push_token
            })
            Toast('绑定成功...')
          }
        }
    })
  },
  onPushTest() {
    wx.request({
      url: `${app.globalData.baseUrl}user/test_token`,
      data: {
        push_token: this.data.push_token
      },
      success (res) {
        if (res.data.re_code === '0') {
          Toast('发送成功，请查收...')
        }
      }
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    let that = this
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log('getUserProfile:res:', res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        // 获取用户openid和push_token
        wx.login({
          success (res) {
            if (res.code) {
              console.log('code:', res.code)
              //发起网络请求
              wx.request({
                url: `${app.globalData.baseUrl}user/add`,
                method: 'POST',
                data: {
                  code: res.code,
                  userInfo: that.data.userInfo,
                },
                success (res) {
                  console.log('userinfo:res:', res.data)
                  if (res.data.re_code === '0') {
                    that.setData({
                      userInfo: res.data.data,
                      push_token: res.data.data.push_token
                    })
                    app.globalData.userInfo = res.data.data
                    Toast('登录成功')
                  }
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
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