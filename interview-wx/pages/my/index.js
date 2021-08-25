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
    qrCodeShow: false,
    tokenQRCodeShow: false,
    qrCodeUrl: '',
    qrCodeSign: '',
    isBindCode: false,
    showHintText: ''
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
    // 加载提示
    this.loadHint()
  },

  // 加载提示功能
  loadHint() {
    let that = this
    wx.request({
      url: `${app.globalData.baseUrl}msg?status=1`,
      success (res) {
        if (res.data.re_code === '0') {
          console.log('loadHint:res:', res.data.data.content);
          that.setData({
            showHintText: res.data.data.content
          })
        }
      }
    })
  },

  // 消息盒子按钮
  onChat() {
    this.setData({
      qrCodeShow: true
    })
  },
  // 添加推送记录
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
  // 推送设置中的类型选择
  onTagSelect(e) {
    console.log('onTagSelect',e)
    this.setData({
      'pushConfig.tag_id': e.detail
    })
  },
  // 获取全部类型
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
  // 推送设置中的关闭和开启
  onPushRadio(event) {
    console.log('test:', event)
    this.setData({
      'pushConfig.push_status': event.detail
    });
    console.log('test:', this.data.pushConfig.push_status)
  },
  // 推送按钮时间
  onPushConfig() {
    console.log('onPushConfig:', this.data.pushConfigShow)
    this.setData({
      pushConfigShow: true
    })
  },
  // 推送列表按钮时间
  onPushList() {
    // 跳转
    wx.navigateTo({
      url: '/pages/pushlist/index',
    })
  },
  // 关闭所有的弹窗
  onClose() {
    console.log('onClose:')
    this.setData({
      pushConfigShow: false,
      qrCodeShow: false,
      tokenQRCodeShow: false
    })
  },
 // 绑定按钮
  onPushBind() {
    console.log('onPushBind:')
    // 打开窗口
    this.setData({
      tokenQRCodeShow: true,
      isBindCode: false
    })
    // 请求二维码
    let that = this
    wx.request({
        url: `${app.globalData.baseUrl}user/qrcode`,
        success (res) {
          console.log('onPushBind:qrcode:res:', res.data)
          if (res.data.re_code === '0') {
            that.setData({
              qrCodeUrl: res.data.data.qrCodeUrl,
              qrCodeSign: res.data.data.qrCode
            })
            Toast('长按保存图片，wx扫码二维码关注')
            // 重头戏， 定时器轮训
            let times = 0
            let timeTokenRequest = setInterval(function() {
              times++
              if (times >= 18) {
                if (that.data.qrCodeShow) {
                  Toast('已过期，重新绑定')
                }
                // 关闭弹窗，让用户重新点击绑定
                that.setData({
                  tokenQRCodeShow: false
                })
                // 清除定时器
                clearInterval(timeTokenRequest)
              } else {
                console.log('lunxu:count:', times)
                // 轮训查看是否已经绑定
                wx.request({
                  url: `${app.globalData.baseUrl}user/detectcode`,
                  data: {
                    wx_id: that.data.userInfo.wx_id,
                    qrcode: that.data.qrCodeSign
                  },
                  success (res) {
                    console.log('lunxun:res:', res.data)
                    if (res.data.re_code === '0') {
                      // 已经扫码，得到服务端的绑定结果
                      Toast('绑定成功，可以点击测试按钮发送消息...')
                      that.setData({
                        push_token: res.data.data,
                        isBindCode: true,
                        tokenQRCodeShow: false
                      })
                      // 并且清除定时器？ 由于获取不到上一步的定时器变量，害
                    }
                  }
                })
                if (that.data.isBindCode) {
                  // 关闭定时器
                  console.log('关闭定时器...')
                  clearInterval(timeTokenRequest)
                }
              }
            }, 2000)
          }
        }
    })
  },
  // 测试按钮时间
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
  // 获取用户信息
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