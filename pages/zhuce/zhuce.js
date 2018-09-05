//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name: '',
    sex:'无',
    age: '',
    phone:'',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

    onLoad:function(){
        console.log("加载时触发")
        var that = this       
    },

    sexSelect:function(){
        var that=this
        wx.showActionSheet( {
            itemList:['男','女'], 
            success:function(res){
                console.log(res.tapIndex)
            } ,
            complete:function(res){
                if (res.tapIndex==0){
                    that.setData({
                        sex: '男'
                    })
                }else if(res.tapIndex==1){
                    that.setData({
                        sex: '女'
                    })
                }else{
                    that.setData({
                        sex:'无'
                    })
                }
                console.log(res.tapIndex)
                
            }   
        })
    },
    nameinput: function (res) {
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
  submit:function(){
      var that = this;     
      wx.request({
          data:{
            json:{
                "name":that.data.name,
                "sex":that.data.sex,
                "age":that.data.age,
                "phone":that.data.phone,
                "wechat_openid":app.globalData.openid,
            }
          },
          method: 'POST',
          header:{
              "Content-Type": "application/json"
          },
          url: 'http://localhost:8000/create_user/', //仅为示例，并非真实的接口地址
          success: function (res) {

              if(res.data!=null){
                  wx.setStorage({
                      key: 'openid',
                      data: that.data.wechat_openid,
                  })
                //   app.globalData.openid = res.data['name']
                  app.globalData.user_id = res.data['id']
                  console.log(res)
                  console.log(res.data)
                  wx.showToast({
                      title: 'chenggong',
                      success: function () {
                          console.log("完成")
                      },
                      fail: function () {
                          console.log("失败")
                      },
                      complete: function () {
                            wx.switchTab({
                                url: '../tab1/index/index',
                            })
                      }

                  })
              }
              
              // console.log(that.data.question)
          },

          fail: function (res) {
              console.log("失败le")
          }
      })
      
    
    

    }
})
