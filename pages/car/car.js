// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:[],
    num:0,
    price:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var username=wx.getStorageSync("username");
    if(!username){
      wx.showToast({
        title: "您还未登录，请前往登陆页面",
        icon: 'none',
        duration: 1500,
        mask: true
      })
      setTimeout(function(){
        wx.switchTab({
          url: '../newMy/newMy',
        })
      },2000)
    }else{
      var goodsId = options.goodsId;
      var that = this
      wx.request({
        url: 'http://47.96.178.137:3200/vue/getcarinfo',
        data: {
          username: "123",
        },
        success(res) {
          var num = 0;
          var price = 0;
          console.log(res.data.list)
          res.data.list.forEach((item, index) => {
            price += item.number * item.price
            num += item.number * 1
          })
          price = price.toFixed(2)
          that.setData({
            num,
            price,
            result: res.data.list
          })

        }
      })
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    var username = wx.getStorageSync("username");
    if (!username) {
      wx.showToast({
        title: "您还未登录，请前往登陆页面",
        icon: 'none',
        duration: 1500,
        mask: true
      })
      setTimeout(function () {
        wx.switchTab({
          url: '../newMy/newMy',
        })
      }, 2000)
    } else {
    var that=this
    wx.request({
      url: 'http://47.96.178.137:3200/vue/getcarinfo',
      data: {
        username: "123",
      },
      success(res) {
        var num = 0;
        var price = 0;
        console.log(res.data.list)
        res.data.list.forEach((item, index) => {
          price += item.number * item.price
          num += item.number * 1
        })
        price = price.toFixed(2)
        that.setData({
          num,
          price,
          result: res.data.list
        })

      }
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
  del(e){
    var that=this
    console.log(e.target.dataset.goodid)
    wx.request({
      url: 'http://47.96.178.137:3200/vue/del',
      data: {
        username: "123",
        goodsID: e.target.dataset.goodid
      },
      success(res) {
        wx.request({
          url: 'http://47.96.178.137:3200/vue/getcarinfo',
          data: {
            username: "123",
          },
          success(res) {
            var num = 0;
            var price = 0
            console.log(res.data.list)
            res.data.list.forEach((item, index) => {
              num += item.number * 1,
                price += (item.number * item.price)
            })
            price = price.toFixed(2)
            that.setData({
              price,
              num,
              result: res.data.list
            })
          }
        })
      }
    })
  }
})