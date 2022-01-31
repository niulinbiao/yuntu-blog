# 简介须知

此微信小程序是基于开源博客Halo提供的API开发，使用的前提是自己已经部署有自己的Halo博客网站。
- 文档地址：[http://mbhdoc.wangsrbus.cn](http://mbhdoc.wangsrbus.cn/#/)
- 微信小程序使用api必须是https，因此需要自己的博客网站配置ssl证书。
- 下载后直接微信小程序开发工具打开即可。
- 在app.js配置acess_key以及线上api地址
-  联系方式（bug或者新功能添加请在仓库issue中提出）
![](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1-sucfufufu620119-brightgreen)
![](https://img.shields.io/badge/%E5%85%AC%E4%BC%97%E5%8F%B7-%E8%8B%8F%E5%85%8B%E5%88%86%E4%BA%AB-yellowgreen)

## 小程序体验

![技术源share](https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/img-article/wechat-q-code.jpg)

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
      baseUrl: 'https://xxxxxx.cn/api', //api
      api_access_key:"ssssss", //token
      index_bg_image_url:"https://cdn.jsdelivr.net/gh/wangsrGit119/wangsr-image-bucket/img-article/photo-1507738978512-35798112892c.jfif",//首页背景
      title:"",//自定义首页title
    }
```
   - baseUrl：基础的API（halo博客的）
   - api_access_key ：博客后台开启api后设置的token
   - index_bg_image_url：首页bar背景图片
   - title ： 首页展示的标题


- 云函数环境配置（**重要，不配置则小程序无法评论**）（因为用到了云函数所以需要在开发控制台开通云开发，并在app.js配置云环境ID）

```
 wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'ssssssssssssssssss',
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
- 海报生成的二维码配置

> `项目下路径` > `images` > `wechat-q-code.jpg`替换成自己的二维码  

## 鸣谢
 - Halo 高颜值轻便开源个人博客
 - lin-ui 简洁美观的小程序UI组件
 - mp-html 富文本和markdown渲染组件
 - vant 众多人喜欢的小程序渲染组件
 
## License
 MIT
