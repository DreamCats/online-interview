// app.js
App({
  globalData: {
    userInfo: null,
    baseUrl: 'https://dreamcat.ink/online/api/1.0/'
    // baseUrl: 'http://127.0.0.1:5000/online/api/1.0/'
  },
  onLaunch() {
    // 初始化云开发的id
    wx.cloud.init({
      env:"dreamcat-5gm5rd96a145ba7a"
    })
    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log(res.code)
    //   }
    // })
    
  },

  towxml:require('/towxml/index'),
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
