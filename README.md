# 在线面试助手

> 想了很久，打算开源...
> 有点晚了，改天写一下 README
> 再说一点，我现在有了新的想法，正在慢慢同步，白天上班，不敢偷摸做的...

## 背景

<div align='center'><img src='https://imgs.heiye.site/blog/online-interview-qr.jpg' alt='小程序二维码'/> </div>

买老师是 2021 年的秋招应届生，关于我秋招的经历，在这里就不再介绍，有兴趣的同学可以关注我的 wx 公众号或者联系我。

秋招其实也不是特别的难，主要是分三块：

1. 知识体系
2. 刷题
3. 项目

第一点、毕竟是应届生，提升技术的能力，大部分属于个人苦苦钻研和实习被 push 的阶段。往往被其他的因素所干扰，比如课程、社团等，但作为学生，所学的课程，比如计算机网络、操作系统等，这些都是必须掌握透彻，一环扣一环，并且需要自己的一套知识体系，且不说有多完整，但接下来的日子，才是苦心经营和完善自我体系最重要的环节。

第二点、作为程序员，虽然平时项目里用的不是特别多，但刷题站在我们的角度上思考，首先能锻炼自己的思维、其次可以巩固对应语言的语法、最后在面试和笔试中如鱼得水；站在公司的角度上思考，那自然是筛选候选人的必备良药...

第三点、项目不在多，而在于对整个项目中的遇到的场景和问题有所思考，并且要有对应的方案进行对比，得到最适合该场景的方案，并且还可以进行对其扩展延伸，这些都是面试官想听到的点。

我呢，由此写了一款小程序，目前是 1.0 版本，ps：wx 小程序云开发数据交互不稳定且慢。于是，在 2.0 版本中将后端迁移到自己的服务器，且增加了一些新的功能。

## 思维导图

![online-inteview-功能图-24KXz8](https://imgs.heiye.site/uPic/online-inteview-功能图-24KXz8.png)

从图中得知，比 1.0 版本多了个人中心板块，其中多了一个定时推送功能。以上不再具体描述，看动图即可。

## 功能图

功能列表：

- 面经
- 知识点
- 刷题
- 定时推送
- 详情内容长按复制
- 点击图片预览，可放大和缩小
- 文章计数

### 面经

![online-interview-面经演示-Zn3lk4](http://imgs.heiye.site/uPic/online-interview-面经演示-Zn3lk4.gif)

从以上动图，可以看出所体现的功能包括各大厂的**面经列表和面经详情**，同时和 1.0 版本相比，**请求响应和渲染速度有明显的提升**，并且额外增加了**定时获取最新面经**的功能。

### 知识点

![online-interview-知识展示-wEogm3](http://imgs.heiye.site/uPic/online-interview-知识展示-wEogm3.gif)

从以上动图，包含了我个人总结的前后端的知识点，并打算依次为基准，为下一个功能做铺垫。

### 刷题

![online-interview-刷题展示-GlpNZq](http://imgs.heiye.site/uPic/online-interview-刷题展示-GlpNZq.gif)

刷题部分，暂时没有答案，我想的初衷是由大家去官方自行练习，而小程序仅仅是给用户一个问题，让用户尝试思考是否由解决答案。

### 定时推送

![online-interview-定时推送展示-EDCGIm](http://imgs.heiye.site/uPic/online-interview-定时推送展示-EDCGIm.gif)

使用定时推送功能的前提：

1. 用户需要登录
2. 用户需要设置 token：点击绑定按钮，根据提示完成操作
3. 绑定成功后，点击测试按钮，查看微信是否有消息。

如果前提设置完毕，则可以在点击定时推送按照上图所示。

### 推送列表

毫无疑问，推送列表展示用户添加的推送记录，在这里有三个功能：

1. 可以展示用户添加的推送记录
2. 可以删除推送记录
3. 可以修改推送记录（todo）

演示推送列表页面：

![online-interview-推送列表-6ZJfNN](https://imgs.heiye.site/uPic/online-interview-推送列表-6ZJfNN.png)

演示删除推送记录页面：

![online-interview-左滑删除-izSqua](https://imgs.heiye.site/uPic/online-interview-左滑删除-izSqua.png)

**修改推送记录暂时未做，抽空完善。**

## todo

- [ ] 1.优化 bug
- [ ] 2.修改 css
- [ ] 3.提高系统的稳定性
- [ ] 4.增加**问题社区功能**

## V2

### 主页

![](https://imgs.heiye.site/byte/1644979793216.png)

![](https://imgs.heiye.site/byte/1644979858216.png)

![](https://imgs.heiye.site/byte/1644979883388.png)

### 知识页面

![](https://imgs.heiye.site/byte/1644979824216.png)

### 面经页面

![](https://imgs.heiye.site/byte/1644979841099.png)

## 联系

如果有什么 bug 或者建议，可以联系我。

## TODO
