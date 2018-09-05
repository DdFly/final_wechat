const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrls:[
'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      circle_swiper:true,
      interval: 3000,
      duration: 1000,
      yiyuan:"交大二附院耳鼻喉科",
      
  },

    btn1:function(){
        wx.navigateTo({
            url: '../questionnaire/questionnaire',
        })
        
    },

    btn2:function(){
        wx.navigateTo({
            url: '../result/result',
        })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
        url: 'http://localhost:8000/select_user_by_openid',
        data:{
            id: app.globalData.openid
        },
        method:'GET',
        success:function(res){
            // console.log(res.data.name)
            app.globalData.user_id = res.data.id
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
    
  }
})