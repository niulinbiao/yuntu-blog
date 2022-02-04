# 简介须知

此微信小程序是基于开源博客Halo提供的API开发，使用的前提是自己已经部署有自己的Halo博客网站。
- 文档地址：[http://mbhdoc.wangsrbus.cn](http://mbhdoc.wangsrbus.cn/#/)
- 微信小程序使用api必须是https，因此需要自己的博客网站配置ssl证书。
- 下载后直接微信小程序开发工具打开即可。
- 在app.js配置acess_key以及线上api地址
-  联系方式（bug或者新功能添加请在仓库issue中提出）
![](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1-NLB_404-brightgreen)
![](https://img.shields.io/badge/%E5%85%AC%E4%BC%97%E5%8F%B7-云图博客网-yellowgreen)

## 小程序体验
[![https://gitee.com/niusongcun/imghouse/raw/master/20220204/z6Nuj*1!Jc43.jpg](https://gitee.com/niusongcun/imghouse/raw/master/20220204/z6Nuj*1!Jc43.jpg)](https://gitee.com/niusongcun/imghouse/raw/master/20220204/z6Nuj*1!Jc43.jpg)

-----


## Halo开源博客地址

- [halo官网](https://halo.run/)
- [halo-GitHub地址](https://github.com/halo-dev/halo)

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

## 本地或者自己部署线上配置

- 基础配置（**重要**）

```
     this.globalData = {
      domain:'https://xxxx.com',   //自己的域名
      baseUrl: 'https:/xxxx.com/api', //自己的域名+/api
      api_access_key:"xxxx", //token  halo后台自己设置
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
```


- 云函数环境配置（**重要，不配置则小程序无法评论**）（因为用到了云函数所以需要在开发控制台开通云开发，并在app.js配置云环境ID）

```
 wx.cloud.init({
		 env: 'ssssssssssssssssss',  //更换为自己的云函数环境
        traceUser: true,
      })
```

-  字体配置(app.wxss)

>自定义字体显示只有一部分特定的中文字体，所有英文，数字
> 使用过程中如果有想要单独使用字体的，后续我可以添加到字体文件中，然乎发布新的字体链接版本

```
@font-face {
  font-family: 'CUSTOM_FONT_T_01';
  src: url('https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/img-article/2021032601fangzhengziji_xingkaijianti.ttf');
}

@font-face {
  font-family: 'CUSTOM_FONT_T_02';
  src: url('https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/img-article/2020032601jianghaoyingbikaishu.ttf');
}

```

## 鸣谢
 - Halo 高颜值轻便开源个人博客
 - lin-ui 简洁美观的小程序UI组件
 - mp-html 富文本和markdown渲染组件
 - vant 众多人喜欢的小程序渲染组件
 -  color-ui 色彩绚丽的UI组件库