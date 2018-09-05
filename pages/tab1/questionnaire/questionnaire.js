const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {       
        current:0,
        answers:{},
        // disable:true,
        question:[],
        dis_id:-1,
        question1: [
            {
                "id": "1", "que_text": "请选择您的眩晕属于哪种类型？", "version_id": "1", "hospital_id": "1", "department_id": '1', "is_check": "True",
                "options_text": [
                    { "name": "A", "value": "头昏昏沉沉" },
                    { "name": "B", "value": "天旋地转" },
                    { "name": "C", "value": "不稳感" },
                    { "name": "D", "value": "视物模糊/晃动" },
                    { "name": "E", "value": "眼前发黑、似要跌倒" },
                ]
            },
            {
                "id": "2", "que_text": "您是否首次出现眩晕？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "首次（第一次晕）" },
                    { "name": "B", "value": "曾经发作过（反复发作）", },
                ]
            },
            {
                "id": '3', "que_text": '首次眩晕距现在的时间？', "version_id": "1", "hospital_id": "1", "department_id": '1', "is_check": 'False',
                "options_text": [
                    { "name": 'A', "value": '数天' },
                    { "name": 'B', "value": '数月' },
                    { "name": 'C', "value": '数年' },
                ]
            },
            {
                "id": "4", "que_text": "眩晕出现频率？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "每天1~数次" },
                    { "name": "B", "value": "每周1~数次" },
                    { "name": "C", "value": "每月1~数次" },
                    { "name": "D", "value": "每年1~数次" },
                    { "name": "E", "value": "数年1次" },
                    { "name": "F", "value": "一直存在" },
                ]
            },
            {
                "id": "5", "que_text": "您每次眩晕持续的时间？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "数秒(5分钟以内)" },
                    { "name": "B", "value": "数分钟(20分钟以内)", },
                    { "name": "C", "value": "数小时（30分钟-数小时）" },
                    { "name": "D", "value": "数天" },
                    { "name": "E", "value": "数周" },
                    { "name": "F", "value": "持续存在" },
                ]
            },
            {
                "id": "6", "que_text": "您的眩晕感是否与体位有关？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": " 起床、翻身、躺下时" },
                    { "name": "B", "value": "直立时" },
                    { "name": "C", "value": "转头时" },
                    { "name": "D", "value": "与体位或头位无关" },
                    { "name": "E", "value": "转身、屈体、行车、挖耳、洗耳、擤鼻" },
                ]
            },
            {
                "id": "7", "que_text": "当您出现眩晕时／之前／之后是否伴随听力下降？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "8", "que_text": "听力下降的过程？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "缓慢下降" },
                    { "name": "B", "value": "突然下降" },
                ]
            },
            {
                "id": "9", "que_text": "听力下降的程度？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "轻度（稍微听音不清）" },
                    { "name": "B", "value": "中度（听力明显下降，别人说话容易打岔）", },
                    { "name": "C", "value": "重度（几乎听不到）" },
                ]
            },
            {
                "id": "10", "que_text": "听力下降耳的侧别？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "单耳" },
                    { "name": "B", "value": "双耳" },
                ]
            },
            {
                "id": "11", "que_text": "当您出现眩晕时是否伴随耳鸣？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "12", "que_text": "是否伴随耳朵闷堵、闷胀感？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "13", "que_text": "当您出现眩晕时是否伴随头痛？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "14", "que_text": "头痛程度？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "轻度（安静休息后可缓解）" },
                    { "name": "B", "value": "中度（可忍受，但不能正常活动工作）", },
                    { "name": "C", "value": "重度（难以忍受，如想拿头撞墙缓解，需服用止痛药控制）" },
                ]
            },
            {
                "id": "15", "que_text": "头痛类型？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "跳痛、搏动性" },
                    { "name": "B", "value": "钝痛、压榨痛、刺痛", },
                    { "name": "C", "value": "描述不清" },
                ]
            },
            {
                "id": "16", "que_text": "头痛部位？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "偏头部一侧或两侧，位置局限" },
                    { "name": "B", "value": "整个头弥漫性疼，描述不清" }
                ]
            },
            {
                "id": "17", "que_text": "当您出现眩晕时是否伴随怕强光或强声？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "18", "que_text": "当您出现眩晕时是否伴随眼前出现闪光点、亮点（红、黄、蓝、黑等）、或者视物变形？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "19", "que_text": "当您出现眩晕时是否伴随晕车？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "伴随" },
                    { "name": "B", "value": "不伴随", },
                ]
            },
            {
                "id": "20", "que_text": "您是否有家族病史或者类似表现？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "False",
                "options_text": [
                    { "name": "A", "value": "有" },
                    { "name": "B", "value": "无", }
                ]
            },
            {
                "id": "21", "que_text": "请选择您出现眩晕时／之前／之后伴随的症状？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "True",
                "options_text": [
                    { "name": "A", "value": "意识丧失、跌倒" },
                    { "name": "B", "value": "偏盲（一侧视野缺损）", },
                    { "name": "C", "value": "面部、手部发麻" },
                    { "name": "D", "value": "胳膊、腿肌力减退" },
                    { "name": "E", "value": "说话困难" },
                    { "name": "F", "value": "喝水咳呛" },
                    { "name": "G", "value": "吞咽困难" },
                    { "name": "H", "value": "恶心呕吐、出冷汗、面色苍白、心悸" },
                    { "name": "I", "value": "耳流脓" },
                    { "name": "J", "value": "耳痛" },
                    { "name": "K", "value": "耳周、口周水泡、口干／味觉丧失" },
                    { "name": "L", "value": "面瘫 " },
                    { "name": "M", "value": "面部肌肉痉挛、抽搐" },
                    { "name": "N", "value": "对较小的声音敏感（如可听到自己的心跳声或踝关节活动的声音等） " },
                    { "name": "O", "value": "无 " },
                ]
            },
            {
                "id": "22", "que_text": "请选择诱发您眩晕的因素？", "version_id": "1", "hospital_id": "1", "department_id": "1", "is_check": "True",
                "options_text": [
                    { "name": "A", "value": "受凉感冒" },
                    { "name": "B", "value": "行走或运动时加重", "Trueed": "true" },
                    { "name": "C", "value": "咳嗽、气压或声音强度变化（按压耳屏、强声刺激后）" },
                    { "name": "D", "value": "特定场合（超市、大街上）" },
                    { "name": "E", "value": "月经期加重" },
                    { "name": "F", "value": "饮酒后加重" },
                    { "name": "G", "value": "休息欠佳、劳累后" },
                    { "name": "H", "value": "情绪焦虑、生气后" },
                    { "name": "I", "value": "走夜路时" },
                    { "name": "J", "value": "无" },

                ],
            },
            {
                id: '23', que_text: '请选择您的既往病史？', "version_id": "1", "hospital_id": "1", "department_id": '1', is_check: 'True', options_text: [
                    { name: 'A', value: '手术史' },
                    { name: 'B', value: '中耳炎', Trueed: 'true' },
                    { name: 'C', value: '高血压' },
                    { name: 'D', value: '心脏病' },
                    { name: 'E', value: '甲亢' },
                    { name: 'F', value: '颈部外伤' },
                    { name: 'G', value: '脑血管意外' },
                    { name: 'H', value: '头部/耳部碰撞' },
                    { name: 'I', value: '糖尿病' },
                    { name: 'J', value: '精神疾病' },
                    { name: 'K', value: '其他' },
                    { name: 'L', value: '无' },

                ]
            },
            {
                id: '24', que_text: '请选择您的生活习惯及嗜好？', "version_id": "1", "hospital_id": "1", "department_id": '1', "is_check": 'True', options_text: [
                    { name: 'A', value: '喝茶' },
                    { name: 'B', value: '喝咖啡', Trueed: 'true' },
                    { name: 'C', value: '喝酒' },
                    { name: 'D', value: '抽烟' },
                    { name: 'E', value: '熬夜' },
                    { name: 'F', value: '饭菜口味重，吃的比较咸' },
                    { name: 'G', value: '无' }
                ]
            },
            {
                id: '25', que_text: '请选择您的服药史或正在服用的药物？', version_id: "1", "hospital_id": "1", department_id: '1', is_check: 'True', options_text: [
                    { name: 'A', value: '降压药' },
                    { name: 'B', value: '升压药' },
                    { name: 'C', value: '镇静剂' },
                    { name: 'D', value: '安眠药' },
                    { name: 'E', value: '精神稳定剂' },
                    { name: 'F', value: '抗癫痫药' },
                    { name: 'G', value: '无' },
                ]
            }
        ],
    },
    commit: function (e) {
        var that = this;
        // 先检查必选项是否为空

        //合成数据
        
        //发送数据
        wx.showModal({
            title: '确定提交？',
            content: '',
            success: function (res) {

                if (res.confirm) {
                    //提交请求
                    
                    wx.request({
                        url: 'http://localhost:8000/matching/',
                        header: {
                            "Content-Type": "application/json"
                        },
                        data: {
                            user_id: app.globalData.user_id,
                            version_id: 1,
                            hospital_id: 1,
                            department_id: 1,
                            date: '2018-08-25',
                            answer_text: that.data.answers
                        },
                        method: 'POST',
                        success:function(res){
                            that.data.dis_id = res.data                           
                            console.log('dis_id:'+that.data.dis_id)
                        },
                        complete(res){
                            wx.request({
                                url: 'http://localhost:8000/create_answer/',
                                header: {
                                    "Content-Type": "application/json"
                                },
                                data: {
                                    user_id: app.globalData.user_id,
                                    version_id: 1,
                                    hospital_id: 1,
                                    department_id: 1,
                                    date: '2018-08-25',
                                    answer_text: that.data.answers,
                                    predict_id: that.data.dis_id,
                                },
                                method: 'POST',
                                success: function (res) {
                                    console.log(res)
                                    if (res.data == "True") {
                                        console.log('成功')
                                        console.log(res)
                                        wx.showModal({
                                            title: '提交成功',
                                            content: '点击返回查看预测结果',
                                            showCancel: false,
                                            confirmText: "返回",
                                            success: function (res) {
                                                if (res.confirm) {
                                                    wx.switchTab({
                                                        url: '../index/index',
                                                    })
                                                }
                                            }

                                        })
                                    }
                                    else
                                        console.log("失败")

                                },
                                fail: function (res) {
                                    console.log(res)
                                    console.log('提交失败')
                                    wx.showToast({
                                        title: '提交失败',
                                    })
                                }

                            })
                        }
                        
                    })
                    

                }
            },


        })
      
    },
    radioChange: function (e) {
        var str = "answers."+e.currentTarget.dataset.id
        var that = this
        console.log(e.currentTarget.dataset.id)
        that.setData({[str]:e.detail.value})
        console.log('radio发生change事件，携带value值为：', e.detail.value)
        console.log(that.data.answers)
    },

    checkboxChange: function (e) {
        var str = "answers." + e.currentTarget.dataset.id
        var that = this
        console.log(e.currentTarget.dataset.id)
        that.setData({ [str]: e.detail.value })
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)
        console.log(that.data.answers)

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
        // for (i=0;i<22;i++){
        //     this.setData({
        //         'questions[i].show':shows[i]
        //     })
        // }
        // wx.request({
        //     url: 'http://localhost:8080/FirstTset/JS/jsondata.json', //仅为示例，并非真实的接口地址
           
        //     // dataType:"json",
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     success: function (res) { 
        //         console.log(res.data)
        //         // var result = JSON.parse(res.data)               
        //         that.setData({
        //             question: res.data
        //         })
        //         // console.log(res)
        //         console.log(that.data.question)
        //         // console.log(that.data.question)
        //     },

        //     fail: function (res) {
        //         console.log("失败")
        //     }
        // })
    },

    select:function(){
        console.log('点击成功了')
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