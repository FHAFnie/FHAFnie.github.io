// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsnum:1,
    result:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var goodsId = options.goodsId;
    var that=this
    wx.request({
      url: 'http://47.96.178.137:3200/vue/detail',
      data:{
        goodsId:goodsId
      },
      success(res) {
        that.setData({
          result: res.data.result[0]
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

  },
  subNun(){
    if (this.data.goodsnum <= 1) {
      this.setData({
      goodsnum: 1
      })
    } else {
    this.setData({
      goodsnum: this.data.goodsnum-1  
    })
    }
  },
  addNum(){
    this.setData({
      goodsnum: this.data.goodsnum + 1
    })
  },
  addcar(){
    wx.request({
      url: 'http://47.96.178.137:3200/vue/addToCar',
      data: {
        goodsID: this.data.result.goodsId,
        goodsName: this.data.result.name,
        goodsPrice: this.data.result.price,
        number: this.data.goodsnum * 1,
        goodsImg: this.data.result.img,
        username: "123"
      },
      success(res) {
        console.log(res.data)
        if(res.data.code==200){
          wx.showToast({
            title: res.data.msg,
            icon: 'succes',
            duration: 1500,
            mask: true
          })
        }
      }
    })
  },
  goCar(){
    var that=this
    wx.request({
      url: 'http://47.96.178.137:3200/vue/addToCar',
      data: {
        goodsID: this.data.result.goodsId,
        goodsName: this.data.result.name,
        goodsPrice: this.data.result.price,
        number: this.data.goodsnum * 1,
        goodsImg: this.data.result.img,
        username: "123"
      },
      success(res) {
        if (res.data.code == 200) {
          wx.reLaunch({
            url: '../car/car?goodsID=' + that.data.result.goodsId
          })
        }
      }
    })
  }


})