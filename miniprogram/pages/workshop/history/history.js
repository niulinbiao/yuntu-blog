// pages/workshop/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [],
    yueRi: '',
    colourList: [
      {colour: 'text-red'}, 
      {colour: 'text-orange'}, 
      {colour: 'text-yellow'}, 
      {colour: 'text-olive'}, 
      {colour: 'text-green'}, 
      {colour: 'text-cyan'}, 
      {colour: 'text-blue'}, 
      {colour: 'text-purple'}, 
      {colour: 'text-mauve'}, 
      {colour: 'text-pink'}, 
      {colour: 'text-lightBlue'}
    ],
    // 动画时间
    animationTime: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let month = this.getMonth()
    let monthDay = this.getTime()
    let yueRi = this.getFullTime()
    let that = this
    wx.request({
      url: `https://baike.baidu.com/cms/home/eventsOnHistory/${month}.json`,
      success(res) {
        // console.log("请求成功", res.data[month][monthDay])
        that.setData({
          dataList: res.data[month][monthDay],
          yueRi
        })
      },
      fail(res) {
        // console.log("请求失败", res)
      }
    })

    this.randomNum()
  },

  //获取随机数
  randomNum: function () {
    var num = Math.floor(Math.random() * 10);
    this.setData({
        randomNum: num
    });
  },

  //获取月日
  getTime() {
    let date = new Date()
    let month = date.getMonth() + 1
    if (month < 10) {
      month = '0' + month
    }
    let day = date.getDate()
    if (day < 10) {
      day = '0' + day
    }
    let monthDay = '' + month + day
    console.log(monthDay)
    return monthDay
  },
  //获取月份呢
  getMonth() {
    let date = new Date()
    let month = date.getMonth() + 1
    if (month < 10) {
      month = '0' + month
    }
    return month
  },
  //获取标准的月日
  getFullTime() {
    let date = new Date()
    let month = date.getMonth() + 1
    if (month < 10) {
      month = '0' + month
    }
    let day = date.getDate()
    if (day < 10) {
      day = '0' + day
    }
    let monthDay = month + '月' + day + '日'
    console.log(monthDay)
    return monthDay
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