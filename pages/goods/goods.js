// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodstype: [],
    allgoods: [],
    current:0,
    activeId: 0,
    show: false
  },
  changeActiveId(e) {
    this.setData({
      activeId: e.target.dataset.index,
      current: e.target.dataset.index
    })
  },
  swiperChange(e) {
    this.setData({
      activeId: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(11111)
    console.log(options.activeId);
    this.setData({
      activeId: options.activeId
    })
    
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: "http://47.96.178.137:3200/users/getallgoods",
      success: (res) => {
        this.setData({
          allgoods: res.data,
          show: true
        })
        wx.hideLoading();
        wx.showToast({
          title: '加载成功!',
          duration: 1000
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // wx.requestPayment({
    //   timeStamp: '',
    //   nonceStr: '',
    //   package: '',
    //   signType: '',
    //   paySign: '',
    // })
    var that = this;
    wx.request({
      url: 'http://47.96.178.137:3200/users/getgoodstype',
      success(res) {
        that.setData({
          goodstype: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})