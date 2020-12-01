// miniprogram/pages/EAdemos/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    finishLoad: false,
    swiperList:[
      'https://737a-szuea-prod-rs90e-1300866734.tcb.qcloud.la/swiper/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20201012205337.png?sign=f49efadc6a342621ad061f5f034f89b2&t=1606751784','../../img/jyjj.jpg','../../img/zhgg.jpg']
  },
  imageload(e) {
    console.log(e);

    wx.showToast({
      title: '加载完成了',
      icon: "loading"
    })
    this.setData({
      finishLoad: !this.data.finishLoad
    })

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