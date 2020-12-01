// components/21/21.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000, 
    duration: 800,
    circular: true,
    // 轮播图
    imgUrls: [],
  },
  /**
   * 组件的生命周期
   */
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function() {
      let that = this;
      wx.cloud.callFunction({
        config: { env: 'szuea-prod-rs90e' },
        name: "getswiper",
      }).then(res => {
        let length = res.result.data.length;
        let data = res.result.data;
        // console.log(res.result.data)
        // console.log(res.result.data.length)
        while(length > 0){
          data[length - 1].url = "cloud://szuea-prod-rs90e.737a-szuea-prod-rs90e-1300866734/swiper/" + data[length - 1].url;
          delete data[length-1]._id;
          // console.log(data[length-1])
          length--;
        }
        this.setData({
          imgUrls:data
        })
      })
    },
    moved: function () { },
    detached: function () { },
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function () { },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
  },


  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})