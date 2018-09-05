// pages/doctor_pages/Q_list/Q_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      order_list:[
          
      ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this
    wx.request({
        url: 'http://localhost:8000/select_answer_list/',
        method:'GET',
        header: {
            'content-type': 'application/json'
        },
        success:function(res){
            console.log(typeof(res.data))
            that.setData({
                order_list:res.data
            })
        },
        fail:function(res){
            console.log('获取问卷列表失败')
        }
    })
  },

    carebtn:function(e){
        // var iscare = e.currentTarget.dataset.care;      
        // console.log(iscare);
        // e.currentTarget.dataset.item = !iscare;
        
    },

    itemclick(e){
        var id = e.currentTarget.dataset.id;
        console.log(id);
        wx.navigateTo({
            url: '../check_question/check_question?id='+id,
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