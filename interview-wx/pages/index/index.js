// pages/index.js
const app = getApp();
const tagDatas = require('../../datas/tag');
const itemDatas = require('../../datas/items');
const tag = require('../../datas/tag');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    docsList: [],
    count: 13,
    finish: false,
    isLoading: false,
    tag_type: '0'
  },

  // 加载docs
  getList() {
    // this.setData({
    //   isLoading: true
    // })

    // let that = this
    // wx.request({
    //   url: `${app.globalData.baseUrl}items/rand`,
    //   data: {
    //     count: this.data.count,
    //     tag_type: this.data.tag_type
    //   },
    //   success(res) {
    //     console.log('list:res:', res.data.data)
    //     if (res.data.re_code === '0') {
    //       that.setData({
    //         docsList: that.data.docsList.concat(res.data.data),
    //         isLoading: false
    //       })
    //       if (!res.data.data.has_next) {
    //         that.setData({
    //           finish: true
    //         })
    //       }
    //     } else {
    //       that.setData({
    //         isLoading: false
    //       })
    //       Toast("小小提示->作者还没有添加数据哦...")
    //     }
    //   },
    // })
  },
  onViewItem(options) {
    console.log(options)
    var id = options.target.id
    wx.navigateTo({
      url: `/pages/detail/index?id=${id}`,
    })
  },
  onSwitch(event) {
    console.log(event.detail.name)
    this.setData({
      tag_type: event.detail.name,
      docsList:[]
    })
    // this.getList();
    this.getRandItems();
  },

  // 随机获取对应的items
  getRandItems() {
    let tag_type = Number(this.data.tag_type);
    console.log('index/index.js::getRandItems::tag_type', tag_type);
    let datas = itemDatas.datas;
    if (tag_type != 0) {
      datas = datas.filter( data => (data.tag_type == tag_type || data.tag_type == 3));
    }
    console.log('index/index.js::getRandItems:',datas);
    // 随机选取20个
    let items = datas.sort(() => Math.random() - 0.5).slice(0, 20);
    let tags = tagDatas.datas;
    items.forEach( item => {
      tags.forEach(tag => {
          if (item.tag_id == tag.tag_id) {
            item['tag'] = tag.tag_name;
            item['img_url'] = tag.tag_avatar;
          }
        })
    })
    this.setData({
      docsList: items
    })
    console.log('index/index.js::getRandItems::docList',items);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getList()
    this.getRandItems();
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
    // this.getList();
    this.getRandItems();
    wx.stopPullDownRefresh()
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
    return {
      title: '买老师互联网面试题'
    }
  }
})