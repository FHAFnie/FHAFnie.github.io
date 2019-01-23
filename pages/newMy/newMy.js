// pages/newMy/newMy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPic:"",
    nickName:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    if (wx.getStorageSync('username') && wx.getStorageSync('loginFlag')) {
      this.setData({
        userPic: wx.getStorageSync('userPic'),
        nickName: wx.getStorageSync('username')
      })
    }
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

  },
  getUserInfo(){
    var that=this;
    console.log("获取用户信息");
      wx.login({
        success(res) {
          // console.log(4444);
          wx.getUserInfo({
            success(res) {
              const userInfo = res.userInfo
              const nickName = userInfo.nickName
              const avatarUrl = userInfo.avatarUrl
              const gender = userInfo.gender // 性别 0：未知、1：男、2：女
              const province = userInfo.province
              const city = userInfo.city
              const country = userInfo.country;
              // console.log(res);
              that.setData({
                userPic: avatarUrl,
                nickName,
              })
              wx.setStorageSync('username', nickName);
              wx.setStorageSync('loginFlag', true);
              wx.setStorageSync('userPic', avatarUrl);
              // wx.request({
              //   url: '',
              // })
            }
          })
        }
      })
    },
  addTel(){
      // console.log(e);
      wx.navigateTo({
        url: '../addtel/addtel',
      })
  }
})