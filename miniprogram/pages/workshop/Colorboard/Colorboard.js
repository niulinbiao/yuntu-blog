// pages/friends/friends.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    skin: app.globalData.skin,
    loading: true,
    // 动画时间
    animationTime: 1,
    list: ['☀点击即可复制RGB颜色值', '🎉敬请期待'],

    LinksList: [
      { 
        RGB:'#696969',
      },
      {
        RGB:'#54FF9F',
      },
      { 
        RGB:'#1E90FF',
      },
      { 
        RGB:'#FF6A6A',
      },
      { 
        RGB:'#8B4726',
      },
      { 
        RGB:'#FF4500',
      },
      { 
        RGB:'#EE0000',
      },
      { 
        RGB:'#EE1289',
      },
      { 
        RGB:'#CDC9A5',
      },
      { 
        RGB:'#00008B',
      },
      { 
        RGB:'#363636',
      },
      { 
        RGB:'#CD00CD',
      },
      { 
        RGB:'#228B22',
      },
      { 
        RGB:'#ADFF2F',
      },
      { 
        RGB:'#FFFF00',
      },
      { 
        RGB:'#20B2AA',
      },
      { 
        RGB:'#5F9EA0',
      },
      { 
        RGB:'#00BFFF',
      },
      { 
        RGB:'#FFA500',
      },
      { 
        RGB:'#8B0000',
      },
      { 
        RGB:'#1C1C1C',
      },
      { 
        RGB:'#D1EEEE',
      },
      { 
        RGB:'#5D478B',
      },
      { 
        RGB:'#7D26CD',
      },
      { 
        RGB:'#009ACD',
      },
      { 
        RGB:'#FF34B3',
      },
      { 
        RGB:'#CD0000',
      },
      { 
        RGB:'#8B5A00',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 开启/关闭炫图模式
    // console.log("开启/关闭炫图模式skin：",app.globalData.skin)
    this.setData({
      skin: app.globalData.skin
    });

  },

  // 点击复制链接到剪切板
  prevent(event) {
    // wx.setClipboardData 设置系统剪贴板的内容
    // console.log("设置系统剪贴板的内容:",event);
    wx.setClipboardData({
        data: event.currentTarget.dataset.rgb,
    });
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