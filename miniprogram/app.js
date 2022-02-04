//app.js
import deviceUtil from "./lin-ui/dist/utils/device-util"

App({


  //自定义bar height
  capsuleBarHeight: deviceUtil.getNavigationBarHeight(),


  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'cloud1-0g8uvfc81af1440e',
        traceUser: true,
      })
    }

    this.globalData = {
      domain:'https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com',   //自己的域名
      baseUrl: 'https://halo-block-1gcmmxstc7b049ae-1307615934.ap-shanghai.app.tcloudbase.com/api', //自己的域名+/api
      api_access_key:"xxxxxx", //token  halo后台自己设置
      index_bg_image_url:"https://s4.ax1x.com/2022/01/24/7TtDJO.png",//首页背景
      title:"云图博客",//自定义title
      shareName:'各种资源分享',//小程序分享名称
      userInfo:undefined,//登录用户信息储存处   不用写
      admin_token: undefined,//临时 token undefined  不用写
      authorInfo:undefined,//作者信息  不用写
      myCollectArticle:'myCollectArticle',//云数据库 存放收藏文章
      openComment:true,//是否开启评论 true为开启 false为关闭
      openAd:false,//流量主开通则打开
      unitId:'自己的原生模板广告ID',//原生模板广告ID  自定义的时候子集可以选择样式  也可以在全局配置中配置
      unitId2:'自己的视频激励广告ID',//视频激励广告--用于文章设置观看视频阅读更多功能
      config:{},//全局配置  
    }
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        // console.log("系统状态栏信息：",e)
        //状态栏的高度，单位px
        this.globalData.StatusBar = e.statusBarHeight;
        // 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
   
  },
    /**
     * promise类型
     */
    getmyConfig() {
      var that = this
      return new Promise((resolve, reject) => {
      const db = wx.cloud.database();
      db.collection('my-config').get({
        success: (res) => {
          that.globalData.config = res.data[0]
          that.globalData.unitId = res.data[0].yuansheng_unitId
          that.globalData.unitId2 = res.data[0].jili_unitId
          // console.log("Config:"+JSON.stringify(res.data[0]))
          //成功直接返回
            resolve(res)
          },
          fail: () => {
            
          }
      })
      })
    }
})
