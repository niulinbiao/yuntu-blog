// components/Level-4/Level-4.js
var nF = 0;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 整个组件的高度
    prop_height: {
        type: Number, //属性类型
        value: 600  //属性的默认值，调用该组件时如设置了该属性值，则默认值被覆盖
    },
    // 整个组件的边框圆角大小
    prop_bdradius:{
        type: Number,
        value: 10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 快捷颜色组
    color: {
      bgdcolor: '#cbe9f4',
      light: '#93d5eb',
      medium: '#66bbd8',
      dark: '#4da2bb',
      bush: '#fff',
      trunk: '#c2653c',
      trunk2: '#9d5d5d',
      cloud: '#fff',
      sun: 'transparent',
      rabbit: '#fff',
  },

  // 快捷颜色数组
  lightColours: ["#93d5eb", "#add63a", "#c5d63a", "#febe42"],
  mediumColours: ["#66bbd8", "#92c938", "#acc52b", "#ff9d25"],
  darkColours: ["#4da2bb", "#2a9d5c", "#89a503", "#ff6b2f"],
  backgroundColours: ["#cbe9f4", "#daf8ff", "#feec98", "#ffdc8a"],
  bushColours: ["#ffffff", "#3ebf6d", "#99b31a", "#fd6d2e"],
  cloudColours: ["#ffffff", "#ffffff", "#ffffff", "#eaf9fe"],
  seasons: ["Winter", "Spring", "Summer", "Autumn"],

  // 当前季节
  c: 0,
  season: '',

  // 季节组件出现与消失
  display: {
      snow: 'none',
      rain: 'none',
      rabbit: false,
      rainbow: false,
      flower: false
  }
  },

  /**
   * 通过组件的生命周期函数执行代码
   */
  lifetimes: {
    attached: function () {
        // 在组件实例进入页面节点树时执行
        this.animate()
    },
    detached: function () {
        // 在组件实例被从页面节点树移除时执行
    },
    ready: function () {
        // 在组件在视图层布局完成后执行
        // var that = this
        // //文字逐个显示
        // var story = this.data.whContent;
        // var i = 0;
        // var time = setInterval(function () {
        //     var text = story.substring(0, i);
        //     i++;
        //     that.setData({
        //         whContent: text
        //     });
        //     if (text.length == story.length) {
        //         //   console.log("定时器结束！");
        //         clearInterval(time);
        //     }
        // }, 200)
    },
},

  /**
   * 组件的方法列表
   */
  methods: {
    // 自动执行动画
    animate() {
      if (nF++ % 600 === 0) {
          this.updateSeasons();
      }
      setTimeout(()=>{
          this.animate()
      },20);
  },
  
  //切换季节
  changeSeason(){
      this.updateSeasons();
  },

  // 季节动画
  updateSeasons() {
      let c = this.data.c;
      // 更改颜色
      this.setData({
          'color.bgdcolor': this.data.backgroundColours[c],
          'color.light': this.data.lightColours[c],
          'color.medium': this.data.mediumColours[c],
          'color.dark': this.data.darkColours[c],
          'color.bush': this.data.bushColours[c],
          'color.cloud': this.data.cloudColours[c],
      })
      // 快捷季节
      let season = this.data.seasons[c];
      let seasons = this.data.seasons;

      //控制落雪
      if (season === seasons[0]) {
          this.setData({
              'display.snow': 'block'
          })
      } else {
          this.setData({
              'display.snow': 'none'
          })
      }

      //控制兔子
      if (season === seasons[0] || season === seasons[2]) {
          this.setData({
              'display.rabbit': true
          })
      } else {
          this.setData({
              'display.rabbit': false
          })
      }

      //控制彩虹
      if (season === seasons[1]) {
          this.setData({
              'display.rainbow': true
          })
      } else {
          this.setData({
              'display.rainbow': false
          })
      }

      //控制兔子颜色
      if (season === seasons[1]) {
          this.setData({
              'color.rabbit': "#9E6255"
          })
      }

      //控制花
      if (season === seasons[1]) {
          this.setData({
              'display.flower': true
          })
      } else {
          this.setData({
              'display.flower': false
          })
      }

      //控制太阳和兔子
      if (season === seasons[2]) {
          this.setData({
              'color.sun': "#ffb53a",
              'color.rabbit': "#9E6255"
          })
      } else {
          this.setData({
              'color.sun': "transparent",
              'color.rabbit': "#ffffff"
          })
      }

      //控制雨
      if (season === seasons[3]) {
          this.setData({
              'display.rain': 'block'
          })
      } else {
          this.setData({
              'display.rain': 'none'
          })

      }
      this.setData({
          c: (c + 1) % seasons.length
      })
  }
  }
})
