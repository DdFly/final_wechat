// pages/tab1/result/result.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      result1:'',
      result2:'',
      did:'',
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(app.globalData.openid)
      var that = this
    wx.request({
        url: 'http://localhost:8000/select_answer/',
        method: 'GET',
        data:{
            id: app.globalData.openid,
        },
        header: {
            "Content-Type": "application/json"
        },
        success: function(res){
            console.log(res)
            console.log(res.data)
            that.setData({
                did:res.data.predict_id,
                result2:res.data.doctor_advice
            })
            wx.request({
                url: 'http://localhost:8000/select_disease_by_id/',
                data:{
                    id: that.data.did
                },
                success:function(res){
                    console.log("查找成功")
                    console.log(res.data.name)
                    that.setData({
                        result1:res.data.name
                    })
                }
            })

        },
        fail: function(res){
            console.log('获取结果失败')
        },

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