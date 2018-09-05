// pages/doctor_pages/D_index/D_index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
        userInfo: {},
        doctor_name:'医生姓名',
        date:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this
      wx.getUserInfo({
          success: function (res) {
            //   console.log("index get userinfo:"+res);
              that.setData({
                  userInfo: res.userInfo,
              })
          }
      })
      wx.request({
          url: 'http://localhost:8000/select_doctor/',
          method: 'GET',
          header: {
              "Content-Type": "application/json"
          },
          data:{
              openid:app.globalData.openid
          },
          success:function(res){
              console.log(res.data)
            that.setData({
                doctor_name:res.data.name
            })
          }
      })
      var date = new Date();
      var thisdate = date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日'
      this.setData({
            date:thisdate,
      })
  },

  btn1:function(){
    wx.navigateTo({
        url: '../Q_list/Q_list',
    })
  },
    btn2:function(){
        wx.navigateTo({
            url: '../disease_manage/disease_manage',
        })
    },
    btn3:function(){
        wx.navigateTo({
            url: '../patient_list/patient_list',
        })
    },
    btn4:function(){
        wx.navigateTo({
            url: '../question_manager/question_manager',
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