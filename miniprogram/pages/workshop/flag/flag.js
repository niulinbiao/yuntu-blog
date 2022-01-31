// 使用 wx.createContext 获取绘图上下文 context
const ctx = wx.createCanvasContext('shareImg')
// 在页面中定义激励视频广告
let videoAd = null
Page({

  data:{
    prurl:'',
    avatarUrl:''
  },

  drawImg(avatarUrl, index) {

    this.setData({
      msg: index + "~~~" + avatarUrl
    })

    let that = this;
    wx.showLoading({
      title: '努力生成中...'
    })
    let promise1 = new Promise(function(resolve, reject) {
      wx.getImageInfo({
        src: avatarUrl,
        success: function(res) {
          console.log("promise1：", res)
          resolve(res);
        }
      })
    });
    let promise2 = new Promise(function(resolve, reject) {
      wx.getImageInfo({
        src: `../../../images/shop/head${index}.png`,
        success: function(res) {
          // console.log(res)
          resolve(res);
        }
      })
    });

    Promise.all([
      promise1, promise2
    ]).then(res => {
      //主要就是计算好各个图文的位置
      let num = 1125;
      ctx.drawImage(res[0].path, 0, 0, num, num)
      ctx.drawImage('../../../' + res[1].path, 0, 0, num, num)
      ctx.draw(false, () => {
        wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: num,
          height: num,
          destWidth: num,
          destHeight: num,
          canvasId: 'shareImg',
          success: function(res) {
            console.log(res.tempFilePath);
            that.setData({
              prurl: res.tempFilePath
            })
            wx.hideLoading()
          },
          fail: function(res) {
            wx.hideLoading()
          }
        })
      })
    })
  },

  //获取高清微信头像
  headimgHD(imageUrl) {
    console.log('原来的头像', imageUrl);
    imageUrl = imageUrl.split('/'); //把头像的路径切成数组
    //把大小数值为 46 || 64 || 96 || 132 的转换为0
    if (imageUrl[imageUrl.length - 1] && (imageUrl[imageUrl.length - 1] == 46 || imageUrl[imageUrl.length - 1] == 64 || imageUrl[imageUrl.length - 1] == 96 || imageUrl[imageUrl.length - 1] == 132)) {
      imageUrl[imageUrl.length - 1] = 0;
    }
    imageUrl = imageUrl.join('/'); //重新拼接为字符串
    console.log('高清的头像', imageUrl);
    return imageUrl;
  },
  // 获取头像
  shengcheng: function (e) {
    let index = e.currentTarget.dataset.k
    var that = this;
    wx.getUserProfile({
        desc: '用于完善用户资料',
        success: (res) => {
            if (res.errMsg == "getUserProfile:ok") {
              res.userInfo.avatarUrl.replace('thirdwx.qlogo.cn','wx.qlogo.cn');
               const  avatarUrl = that.headimgHD(res.userInfo.avatarUrl);
                that.setData({
                    avatarUrl: avatarUrl,
                })
                // 由于canvas不能使用网络图片，所以此处进行头像临时路径存储
              
                wx.downloadFile({
                  url: that.data.avatarUrl,
                  success: (res)=>{
                    var avatarUrl = res.tempFilePath
                    // console.log("res本地临时文件:",res)
                    //获取高清微信头像
                    avatarUrl = that.headimgHD(avatarUrl);
                    console.log("avatarUrl:"+avatarUrl)
                    that.drawImg(avatarUrl, index);
                  },
                  fail:(res)=>{
                    console.log(res)
                  }
                })    
            }
        } ,fail: err => {
            wx.showToast({
                title: '授权后才能体验更多功能哦',
                icon: 'none',
                duration: 3000
            })
        },
    })
},
// 看视频广告
watch_ad(){
  wx.showModal({
    title: '',
    content: '看完视频即可保存图片到本地',
    success(res) {
     if (res.confirm) {
      //  加载框
      wx.showLoading({
        title: '加载中',
      })
     
      // 用户触发广告后，显示激励视频广告
      if (videoAd) {
        wx.hideLoading()
        videoAd.show().catch(() => {
          // 失败重试
          videoAd.load()
            .then(() => videoAd.show())
            .catch(err => {
              console.log('激励视频 广告显示失败')
            })
        })
      }
     } else if (res.cancel) {
     
     }
    }
   })
  
},
//保存到相册
save: function() {
  var that = this
  wx.saveImageToPhotosAlbum({
    filePath: that.data.prurl,
    success(res) {
      wx.showModal({
        content: '图片已保存到相册，赶紧晒一下吧~',
        showCancel: false,
        confirmText: '好哒',
        confirmColor: '#72B9C3',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击确定');
          }
        }
      })
    },fail(err) {
      if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg === "saveImageToPhotosAlbum:fail authorize no response") {
           // 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用
           wx.showModal({
            title: '提示',
            content: '需要您授权保存相册',
            showCancel: false,
            success: modalSuccess => {
              wx.openSetting({
                success(settingdata) {
                  console.log("settingdata", settingdata)
                  if (settingdata.authSetting['scope.writePhotosAlbum']) {
                    wx.showModal({
                      title: '提示',
                      content: '获取权限成功,再次点击图片即可保存',
                      showCancel: false,
                    })
                  } else {
                    wx.showModal({
                      title: '提示',
                      content: '获取权限失败，将无法保存到相册哦~',
                      showCancel: false,
                    })
                  }
                },
                fail(failData) {
                  console.log("failData", failData)
                },
                complete(finishData) {
                  console.log("finishData", finishData)
                }
              })
            }
          })
      }
    }
  })
},

  //生成头像
  // shengcheng: function(e) {
  //   console.log(e)
  //   this.getUserProfile();
  //   // console.log("点击了", e.currentTarget.dataset.k)
  //   let index = e.currentTarget.dataset.k
  //   // let avatarUrl = e.detail.userInfo.avatarUrl
  //   console.log("你的头像:"+this.data.avatarUrl)
  //   let that = this
  //   // 由于canvas不能使用网络图片，所以此处进行头像临时路径存储
  
  //   wx.downloadFile({
  //     url: that.data.avatarUrl,
  //     success: (res)=>{
  //       var avatarUrl = res.tempFilePath
  //       // console.log("res本地临时文件:",res)
  //       //获取高清微信头像
  //       avatarUrl = that.headimgHD(avatarUrl);
  //       that.drawImg(avatarUrl, index);
  //     }
  //   })    
    
  // },
  onLoad: function(){
    // 在页面onLoad回调事件中创建激励视频广告实例
    if (wx.createRewardedVideoAd) {
      videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-12277e4257a1c0e1'   //替换激励视频广告位
      })
      videoAd.onLoad(() => {
        console.log("视频加载中...")
      })
      videoAd.onError((err) => {
        console.log("视频拉取失败")
        this.save()
      })
      videoAd.onClose((status) => {
        if(status && status.isEnded || status == undefined){
          console.log("你看完了视频")
          this.save()
        }else{
          console.log("你没有看完视频")
        }
      })
    }
  }

  
})