// pages/doctor_pages/doctor_check/doctor_check.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    sexid:0,
    sex:'',
    name:'',
    age:'',
    password:'',
    phone:'',
    wechat_openid:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this
      if (app.globalData.userInfo) {
          this.setData({
              userInfo: app.globalData.userInfo,
              sexid: app.globalData.userInfo.gender,
          })
      }else{
          wx.getUserInfo({
              success: function (res) {
                  console.log(res);
                  that.setData({
                      userInfo: res.userInfo,
                      sexid: res.userInfo.gender,
                  })
              }
          })
      }
    if(this.data.userInfo.gender==1){
        this.setData({
            sex:'男'
        })
    } else if (this.data.userInfo.gender == 2){
        this.setData({
            sex: '女'
        })
    }else{
        this.setData({
            sex:'未知'
        })
    }
    if(app.globalData.openid!=''){
        this.setData({
            wechat_openid:app.globalData.openid
        })
    }
    console.log(this.data.sex)
    console.log(app.globalData.userInfo.gender)
  },
  nameinput:function(res){
      this.setData({
          name: res.detail.value
      })
  },
  ageinput:function(res){
      this.setData({
          age: res.detail.value
      })
  },
  phoneinput:function(res){
      this.setData({
          phone: res.detail.value
      })
  },
  passinput:function(res){
      this.setData({
          password: res.detail.value
      })
  },
    commit:function(){
        var that = this
        if(this.data.password=='vdail'){
            wx.request({
                url: 'http://localhost:8000/create_doctor/',
                data:{
                    "name": that.data.name,
                    "sex": that.data.sex,
                    "age": that.data.age,
                    "phone": that.data.phone,
                    "wechat_openid":that.data.wechat_openid,
                },
                method:'POST',
                header: {
                    "Content-Type": "application/json"
                },
                success:function(res){
                    if(res.data=='True'){
                        app.globalData.identity = 'doctor'
                        wx.setStorage({
                            key: 'identity',
                            data: 'doctor',
                        })
                        wx.redirectTo({
                            url: '../D_index/D_index',
                        })
                        
                        }
                    else {
                        console.log("提交失败")
                    }                    
                },
                fail:function(res){
                    console.log("提交失败")
                }
            })
        }
        
        // console.log(this.data)
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