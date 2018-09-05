Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:null,
    sessionkey:null
  },

    tap:function(){
        var that = this;
        wx.login({
            success:function(res){
                wx.request({
                    url: 'https://api.weixin.qq.com/sns/jscode2session',
                    data: {
                        appid: APP_ID,
                        secret: APP_SECRET,
                        js_code: res.code,
                        grant_type: 'authorization_code'
                    }, 
                })
            }
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