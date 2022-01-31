weappLogin() {
  return new Promise((resolve, reject) => {
    wx.checkSession({
      success: (res) => {
      //成功直接返回
        resolve(res)
      },
      //失败调用wx.login
      fail: () => {
        wx.login({
          success: (res) => {
            wxRequest(this.data.baseUrl, {
              key: this.data.baseKey,
              type: "UserLogin",
              data: {
                wx_code: res.code,
              }
            }, "POST").then(res => {
              if (res.data.status == 1) {
                var user = res.data.data.userinfo
                //存储你后台接口的参数
                wx.setStorageSync('sign', user.sign)
                resolve(res)
              }
            })
          }
        })
      },
    })
  })
},
