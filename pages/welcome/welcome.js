//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false, 
  },

  onLoad: function () {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // wx.clearStorage();

    wx.getStorage({
        key: 'identity',
        success: function (res) {
            console.log(res.data)
            // app.globalData.openid = res.data
            app.globalData.identity = res.data
            
        },
        fail: function () {
            console.log("身份id获取不到")
        }
    })
    // wx.getStorage({
    //     key: 'openid',
    //     success: function (res) {
    //         app.globalData.openid = res.data
    //      },
    // })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,

    })
  },

  login:function(){
    //   console.log(app.globalData.openid)
      if (app.globalData.identity!=null){ 
        if (app.globalData.identity =='patient')         
            wx.switchTab({             
                url: '../tab1/index/index'
            })
        else
            wx.redirectTo({
                url: '../doctor_pages/D_index/D_index',
            })
      }else{
          wx.redirectTo({
              url: '../IdSelect/idselect',
          })
      }
      
  }
})
