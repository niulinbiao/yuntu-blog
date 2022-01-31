const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    friendUrls:[]
  },

  // 获取友情链接列表
  getFriendsUrls(){
    db.collection('friend-links').get()
    .then(res=>{
      console.log(res)
      this.setData({
        friendUrls:res.data
      })
    })
  },
  // 跳转到友情页面
  toFriends(event){
    console.log("友情页面APPID："+event.currentTarget.dataset.appid)
    wx.navigateToMiniProgram({
      appId: event.currentTarget.dataset.appid,
      path: event.currentTarget.dataset.path,
      extraData: {
        foo: 'bar'
      },
      success(res) {
        console.info(res);
        // 打开成功
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getFriendsUrls()
    console.log("友情链接："+this.data.friendUrls)
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