// pages/doctor_pages/True_que_textstion/True_que_textstion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      disable:true,
      question:[],
      answers: {},
      answer_id:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //   正文
      var that = this;
      wx.request({
          url: 'http://localhost:8000/select_question?version_id=1',
          method:'GET',
          header: {
              'content-type': 'application/json'
          },
          success:function(res){
                that.setData({question: res.data})
          },
          fail:function(res){

          },
          complete:function(res){
            //   console.log("lallal"+that.options.id)
              wx.request({
                  url: 'http://localhost:8000/select_answer_by_id?id=' + that.options.id,
                  header: {
                      'content-type': 'application/json'
                  },
                  method: 'GET',
                  success: function (res) {
                    //   console.log(res.data)
                      that.setData({ answers: res.data.answer_text })
                  },
                  fail: function (res) {
                      console.log("失败")
                  },
                  complete:function(res){
                      for (var i=0;i< that.data.question.length;i++) {
                          var que = that.data.question[i]
                          var ans = that.data.answers[i+1]
                          if(ans!=null){
                              var list  = []
                              if (typeof (ans) != 'string') {
                                  list = ans
                              }
                              else {
                                  var list = ans.split('')
                              }
                              
                              for (var k in que.options_text) {
                                
                                  if (list.indexOf(que.options_text[k].name) != -1) {
                                      
                                      that.data.question[i].options_text[k]['checked'] = true,
                                          that.setData({
                                              question: that.data.question
                                          })
                                  }
                              }
                          }
                         
                      }
                  }
              })
              
          }
      })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      var that = this
      
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