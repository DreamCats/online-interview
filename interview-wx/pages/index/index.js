// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    tags: [],
    tag: '0',
    isLoading: false,
    finish: false,
    path: 'mj'
  },

  // tab栏
  onChange (event) {
    let idx =  event.detail.name
    if (idx === '0' || idx === '1') {
      this.setData({
        path: 'mj'
      })
    } else if (idx === '2' || idx === '3' || idx === '5') {
      this.setData({
        path: 'kw'
      })
    } else if(idx === '4') {
      this.setData({
        path: 'alg'
      })
    } 
    this.setData({
        tag: idx,
        tags: [],
        finish: false,
        isLoading: true
    });
    this.getTags()
  },
  getTags() {
    this.setData({
      isLoading: true
    })
    let that = this
    wx.request({
      url: `${app.globalData.baseUrl}tag/list?tag=${this.data.tag}`,
      success (res) {
        console.log('getTags:res', res.data.data)
        if (res.data.re_code === '0') {
          // if (that.data.tag === '2' || that.data.tag === '3') {
          //   that.setData({
          //     tags: res.data.data.sort((a, b) => a.id - b.id)
          //   })
          //   console.log('sort:', that.data.tags);
          that.setData({
            tags: res.data.data,
            isLoading: false
          })
           
        } 
        that.setData({
          isLoading: false
        })
      }
    })
    // 排序
    
  },

  onLoad() {
    
  },

    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 加载大厂面经列表
    this.getTags()
  },

    /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉")
    this.setData({
      finish: true
    })
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
      title: this.data.tag === '0' ? '前端面经页面' : '后端面经页面',
      path: '/pages/index/index'
    }
  },
  onShareTimeline: function(res) {
    // 来自页面内转发按钮
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: this.data.active === '0' ? '前端面经页面' : '后端面经页面',
      // query:{
      //   id: this.data.cId
      // }
      // path: `/pages/detail/index?id=${this.data.id}&type=${this.data.type}`
    }
  }
})
