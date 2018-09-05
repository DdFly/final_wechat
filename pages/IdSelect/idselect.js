// pages/IdSelect/idselect.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

    doc:function(){
        // app.globalData.identity = 'doctor'
        // wx.setStorage({
        //     key: 'identity',
        //     data: 'doctor',
        // })
        wx.navigateTo({           
            url: '../doctor_pages/doctor_check/doctor_check',
        })
    },

    pat:function(){
        app.globalData.identity = 'patient'
        wx.setStorage({
            key: 'identity',
            data: 'patient',
        })
        wx.navigateTo({
            url: '../zhuce/zhuce',
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