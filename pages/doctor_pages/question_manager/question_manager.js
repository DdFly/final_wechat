// pages/doctor_pages/question_manager/question_manager.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      question:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      wx.request({
          url: 'http://localhost:8000/select_question?version_id=1',
          method: 'GET',
          header: {
              'content-type': 'application/json'
          },
          success: function (res) {
              // console.log('version_id',res.data)
              console.log(res.data)
              // that.data.question = JSON.res.data.version_id
              // console.log(JSON.parse(res.data))
              that.setData({ question: res.data })
          },
          fail: function (res) {

          },
      })
  },
    add_click:function(){
        
        wx.navigateTo({
            url: '../add_question/add_question',
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
      // 存储问卷
    // wx.request({
    //     url: 'http://localhost:8000/create_question/',
    //     header:{
    //         // 'content-thpe':'application/x-www-form-urlencoded',
    //         'content-thpe': 'application/json',
    //     },
    //     method: 'POST',
    //     data:{
    //         question:JSON.stringify(that.data.question),
    //         // question:that.data.question,
    //     },
    //     success:function(res){
    //         console.log(res.data)
    //     },
    //     fail:function(res){
    //         console.log("失败")
    //     },

    // })
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