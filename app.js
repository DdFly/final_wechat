//app.js
App({
    
  onLaunch: function () {
    // 展示本地存储能力
    var that = this
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        var code = res.code;
        console.log(code);
        var id = this.globalData.appid;
        var sec = this.globalData.secret;
        console.log('appid'+id)
        wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data:{
                appid: 'wxada03a1f2d39f292',
                secret: 'c7202f5d7236e3ac5d1e76843d1b848e',
                js_code:code,
                grant_type:'authorization_code'
            },
            method:'GET',
            header:{
                'content-type':'application/json'
            },
            success:function(res){
                console.log(res)
                var openid = res.data.openid;
                console.log('openid:'+openid);
                that.globalData.openid = res.data.openid;
            },
            fail:function(res){
                // console.log(res)
            }
        })
      }
    })
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              
              this.globalData.userInfo = res.userInfo
            //   console.log(this.globalData.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },  
  globalData: {
    userInfo: null,
    openid: null,
    identity:null,
    user_id:null,
    appid: 'wxada03a1f2d39f292',
    secret: 'c7202f5d7236e3ac5d1e76843d1b848e',
  }
})