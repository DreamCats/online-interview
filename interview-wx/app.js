// app.js
App({
  globalData: {
    userInfo: null,
    themeMode: 'light',
    baseUrl: 'https://heiye.site/online/api/2.0/'
    // baseUrl: 'https://jamesforlife.top/online/api/2.0/'
    // baseUrl: 'http://127.0.0.1:5000/online/api/2.0/'
  },
  onLaunch() {
    // 初始化云开发的id
    wx.cloud.init({
      env: "dreamcat-5gm5rd96a145ba7a"
    })
    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log(res.code)
    //   }
    // })

    wx.getSystemInfo({
      success: (result) => {
        console.log('app.js::system::', result)
        this.globalData.themeMode = result.theme
      },
    })

    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log('app.js::检查是否有新版本', res.hasUpdate)
      if (res.hasUpdate) {
        updateManager.onUpdateReady(function () {
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success(res) {
              console.log('更新版本...')
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
              }
            }
          })
        })

        updateManager.onUpdateFailed(function () {
          // 新版本下载失败
        })
      }
    })


  },

  towxml: require('/towxml/index'),
  //声明一个数据请求方法
  getText: (url, callback) => {
    wx.request({
      url: url,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        if (typeof callback === 'function') {
          callback(res);
        };
      }
    });
  }
})