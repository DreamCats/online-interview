module.exports = {
    datas: [
    {
        "id": 5,
        "tag_id": 11,
        "tag_type": 2,
        "title": "1.浏览器事件传播过程有哪几个阶段",
        "content": "# 浏览器事件传播过程有哪几个阶段\n\n1. 捕获阶段：事件从根节点流向目标节点，途中流经各个 DOM 节点，在各个节点上触发捕获事件，直到达到目标节点。\n2. 目标阶段：事件到达目标节点时，就到了目标阶段，事件在目标节点上被触发\n3. 冒泡阶段：事件在目标节点上触发后，不会终止，一层层向上冒，回溯到根节点。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 383,
        "like_count": 23
    },
    {
        "id": 14,
        "tag_id": 4,
        "tag_type": 3,
        "title": "1.网络模型",
        "content": "## 网络模型\n\n![分层模型-qZgTlp](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/分层模型-qZgTlp.png)\n\n### 简要概括\n\n- 物理层：底层数据传输，如网线；网卡标准。\n\n- 数据链路层：定义数据的基本格式，如何传输，如何标识；如网卡 MAC 地址。\n\n- 网络层：定义 IP 编址，定义路由功能；如不同设备的数据转发。\n\n- 传输层：端到端传输数据的基本功能；如 TCP、UDP。\n\n- 会话层：控制应用程序之间会话能力；如不同软件数据分发给不同软件。\n\n- 标识层：数据格式标识，基本压缩加密功能。\n\n- 应用层：各种应用软件，包括 Web 应用。\n\n### 流程\n\n比如，计算机 A 和 计算机 B 要进行信息交互，比如 A 上开发了一个网页，需要 B 去访问。B 发出一个请求给 A，那么请求数据从 B 的 **应用层开始向下传到表示层、再从表示层传到会话层直到物理层，通过物理层传递到 A，A 的物理层接到请求后将请求向上传递到自己的应用层，应用层再将要请求的数据向自己的物理层方向传递然后 B 接到数据传递数据到自己的应用层**。\n\n说明：\n\n- 在四层，既传输层数据被称作**段**（Segments）；\n- 三层网络层数据被称做**包**（Packages）；\n- 二层数据链路层时数据被称为**帧**（Frames）；\n- 一层物理层时数据被称为**比特流**（Bits）。\n\n## 总结\n\n- 网络七层模型是一个标准，而非实现。\n- 网络四层模型是一个实现的应用模型。\n- 网络四层模型由七层模型简化合并而来。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 125,
        "like_count": 95
    },
    {
        "id": 44,
        "tag_id": 8,
        "tag_type": 2,
        "title": "1.行块元素水平垂直居中布局",
        "content": "## 水平居中\n\n### 行内水平居中\n\n补充行内元素：文本 text、图像 img、按钮超链接等\n\n```css\n.center{\n    text-align:center;\n}\n<div class=\\\"center\\\">水平居中</div>\n```\n\n### 块水平居中\n\n方法比较多\n\n1. 定宽块级元素水平居中\n2. 不定宽块元素水平居中，方法分别是：\n   1. 设置 table\n   2. 设置 inline-block\n   3. 设置 flex 布局\n   4. position+负 margin\n   5. position+margin：auto\n   6. position+transform\n\n## 垂直居中\n\n### 单行文本垂直居中\n\n1. 设置 padding-top = padding-bottom\n2. 设置 line-height=height\n\n### 多行文本垂直居中\n\n- 设置父元素的 table，子元素 table-cell 和 vertical-align:middle\n\n### 块级元素垂直居中\n\n1. flex 布局\n2. position、top 和负 margin\n\n   - 先设置元素为 absolute/relative/fixed，接着 margin=负一半\n\n3. position、top、bottom 和 margin:auto\n4. 利用 position、top 和 transform\n\n## 水平垂直居中\n\n1. 绝对定位+margin:auto\n2. 绝对定位+负 margin\n3. 绝对定位+transform\n4. flex 布局\n5. table-cell 实现居中\n\n参考：[https://segmentfault.com/a/1190000014116655](https://segmentfault.com/a/1190000014116655)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 102,
        "like_count": 98
    },
    {
        "id": 54,
        "tag_id": 3,
        "tag_type": 1,
        "title": "1.Redis为什么快",
        "content": "# Redis 模型\n\n面试官：Redis 为什么快？\n\n我：内心：不知道为什么一直问这个问题。\n\n1. 纯内存操作\n2. 单线程操作，避免了**频繁的上下文切换**\n3. 合理高效的数据结构\n4. 采用了**非阻塞 I/O 多路复用**机制\n\n实际上 Redis 服务器是一个事件驱动程序，分为**文件事件**和**时间事件**，就主要讲一下文件事件。\n\nRedis 基于 Reactor 模式开发了自己的网络事件处理器：这个处理器被称为文件事件处理器\n\n- 文件事件处理器使用**I/O 多路复用程序来同时监听多个套接字**，并根据套接字目前执行的任务来为套接字**关联不同的事件处理器**\n- 当被监听的套接字准备好执行连接**应答、读取、写入、关闭**等操作时，与操作相对于的文件事件就会产生，这时**文件事件处理器就会调用套接字之前关联好的事件处理器来处理这些事件**。\n- 简单点：**就是一堆套接字请求，被一个叫做 I/O 多路复用程序监听，通过文件事件分派器一个一个和事件处理器绑定在一起去处理**。\n\nI/O 多路复用程序是有常见的 select、epoll 等系统调用所实现的。有个小故事，自行理解 BIO、NIO、select、poll、epoll 等\n\n故事情节为：**老李去买火车票，三天后买到一张退票。参演人员（老李，黄牛，售票员，快递员），往返车站耗费 1 小时。**\n\n**往返车站可以看成系统调用，调用一次一小时**\n\n## 1. 阻塞 I/O 模型\n\n老李去火车站买票，排队三天买到一张退票。\n\n耗费：在车站吃喝拉撒睡 3 天，其他事一件没干。\n\n## 2. 非阻塞 I/O 模型\n\n老李去火车站买票，隔 12 小时去火车站问有没有退票，三天后买到一张票。\n\n耗费：往返车站 6 次，路上 6 小时，其他时间做了好多事。\n\n2 比 1 多了个自己轮训调用\n\n## 3. I/O 复用模型\n\n1. select/poll\n\n老李去火车站买票，委托黄牛，然后每隔 6 小时电话**黄牛**询问，黄牛三天内买到票，然后老李去火车站交钱领票。\n\n耗费：往返车站 2 次，路上 2 小时，黄牛手续费 100 元，打电话 17 次\n\n实际上，就是自己不断调 select（像个船一样，装了很多描述符）询问哪些描述符可读可写，比如又一个可读了，咱就调用可读系统调用就 ok 了\n\n2. epoll\n\n老李去火车站买票，委托黄牛，**黄牛买到后即通知老李去领**，然后老李去火车站交钱领票。\n\n耗费：往返车站 2 次，路上 2 小时，黄牛手续费 100 元，无需打电话\n\n实际上，自己不用管了，当有可读的时候，直接中断你，然后你自己去读\n\n## 4. 信号驱动 I/O 模型\n\n老李去火车站买票，给售票员留下电话，有票后，售票员电话通知老李，然后老李去火车站交钱领票。\n\n耗费：往返车站 2 次，路上 2 小时，免黄牛费 100 元，无需打电话\n\n不要黄牛了，省了这个单线程，系统通知你，你收到以后自己去读\n\n## 5. 异步 I/O 模型\n\n老李去火车站，告诉售票员要买票，售票员买到票之后，打电话通知老李把票放在某某储物箱，老李根据储物箱地址自己去取票。\n\n耗费：往返车站 1 次，路上 1 小时，免黄牛费 100 元，无需打电话\n\n只需要注册一次，得到消息之后，就去另外一个地址上取走票\n\n黄牛是多路复用，他不仅可以帮你买票，还可以其他人买票，还可以买飞机票，高铁票等。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 326,
        "like_count": 58
    },
    {
        "id": 63,
        "tag_id": 10,
        "tag_type": 2,
        "title": "1.vue是什么",
        "content": "# vue 是什么\n\n> Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。\n\n## 何为渐进式？\n\n含义：主张最少\n\n每个框架都不可避免会有自己的一些特点，从而会对使用者有一定的要求，这些要求就是主张，主张有强有弱，它的强势程度会影响在业务开发中的使用方式。\n\n比如说：\n\n1. Angular：必须使用它的模块机制- 必须使用它的依赖注入- 必须使用它的特殊形式定义组件（这一点每个视图框架都有，难以避免）\n2. React：它也有一定程度的主张，它的主张主要是函数式编程的理念，比如说，你需要知道什么是副作用，什么是纯函数，如何隔离副作用。它的侵入性看似没有 Angular 那么强，主要因为它是软性侵入。\n\n那么 Vue，你不必一开始就用 Vue 所有的全家桶，根据场景，官方提供了方便的框架供你使用。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 55,
        "like_count": 4
    },
    {
        "id": 147,
        "tag_id": 1,
        "tag_type": 1,
        "title": "1.Java基础必看大纲图",
        "content": "## 见面礼\n\nJava 基础大纲图：\n\n![1.Java基础必看大纲图-MZCGoH](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/1.Java基础必看大纲图-MZCGoH.png)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 296,
        "like_count": 31
    },
    {
        "id": 171,
        "tag_id": 9,
        "tag_type": 2,
        "title": "1.DOM与BOM的区别",
        "content": "# DOM 与 BOM 的区别\n\n## BOM\n\n1. BOM 是 Browser Object Model 的缩写，即浏览器对象模型。\n2. BOM 没有相关标准。\n3. BOM 的最根本对象是 window。\n\n## DOM\n\n1. DOM 是 Document Object Model 的缩写，即文档对象模型。\n2. DOM 是 W3C 的标准。\n3. DOM 最根本对象是 document（实际上是 window.document）。\n\n参考:[https://blog.csdn.net/xiao\\\\_\\\\_gui/article/details/8315148](https://blog.csdn.net/xiao__gui/article/details/8315148)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 7,
        "like_count": 12
    },
    {
        "id": 181,
        "tag_id": 5,
        "tag_type": 1,
        "title": "1.进程与线程",
        "content": "# 线程与进程的区别\n\n面试官：说一下线程与进程的区别\n\n我：好的，如下：\n\n- 根本区别：进程是操作系统资源分配的基本单位，而线程是处理器任务调度和执行的基本单位\n\n- 资源开销：每个进程都有独立的代码和数据空间（程序上下文），程序之间的切换会有较大的开销；线程可以看做轻量级的进程，同一类线程共享代码和数据空间，每个线程都有自己独立的运行栈和程序计数器（PC），线程之间切换的开销小。\n\n- 内存分配：同一进程的线程共享本进程的地址空间和资源，而进程之间的地址空间和资源是相互独立的\n\n- 包含关系：如果一个进程内有多个线程，则执行过程不是一条线的，而是多条线（线程）共同完成的；线程是进程的一部分，所以线程也被称为轻权进程或者轻量级进程。\n\n- 与进程不同的是同类的多个线程共享进程的**堆**和**方法区**资源，但每个线程有自己的**程序计数器**、**虚拟机栈**和**本地方法栈**，所以系统在产生一个线程，或是在各个线程之间作切换工作时，负担要比进程小得多，也正因为如此，线程也被称为轻量级进程\n\n举例子：比如，main 函数启动了 JVM 进程，同时 main 就是其中的线程，并且启动了 JVM 进程，那么还有垃圾回收等线程。\n\n或者这样的例子：做个简单的比喻：进程=火车，线程=车厢\n\n- 线程在进程下行进（单纯的车厢无法运行）\n- 一个进程可以包含多个线程（一辆火车可以有多个车厢）\n- 不同进程间数据很难共享（一辆火车上的乘客很难换到另外一辆火车，比如站点换乘）\n- 同一进程下不同线程间数据很易共享（A 车厢换到 B 车厢很容易）\n- 进程要比线程消耗更多的计算机资源（采用多列火车相比多个车厢更耗资源）\n- 进程间不会相互影响，一个线程挂掉将导致整个进程挂掉（一列火车不会影响到另外一列火车，但是如果一列火车上中间的一节车厢着火了，将影响到所有车厢）\n- 进程可以拓展到多机，进程最多适合多核（不同火车可以开在多个轨道上，同一火车的车厢不能在行进的不同的轨道上）\n- 进程使用的内存地址可以上锁，即一个线程使用某些共享内存时，其他线程必须等它结束，才能使用这一块内存。（比如火车上的洗手间）－\\\"互斥锁\\\"\n- 进程使用的内存地址可以限定使用量（比如火车上的餐厅，最多只允许多少人进入，如果满了需要在门口等，等有人出来了才能进去）－“信号量”\n\n---\n\n# 协程\n\n协程：\n\n协程是一种用户态的轻量级线程, 我们的 server 的发展如下：IO 密集型应用：多进程 -> 多线程 ->事件驱动 ->协程\n\n协程拥有自己的寄存器上下文和栈. 协程调度切换时，将寄存器上下文和栈保存到其他地方，然后去做其他工作，当你的 IO 解除之后切回原来的状态，恢复先前保存的寄存器上下文和栈。\n\n优点：\n\n- 跨平台\n- 无需线程上下文切换的开销\n- 无需原子操作锁定及同步的开销\n- 方便切换控制流，简化编程模型\n- 高并发+高扩展行+低成本： 一个 CPU 支持上万的协程都不是问题，所以很适合用于高并发处理\n\n缺点：\n\n- 无法利用多核资源：协程的本质是一个单线程，它不能同时将单个 CPU 的多个核作用上，协程需要和进程配合才能运行在多 CPU 上.\n- 进行阻塞(Blocking)操作会阻塞到整个程序; 这一点和事件驱动一样，可以使用异步 IO 操作来解决.\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 91,
        "like_count": 63
    },
    {
        "id": 191,
        "tag_id": 2,
        "tag_type": 1,
        "title": "1.MySQL是如何执行一条SQL的",
        "content": "# SQL 执行顺序\n\nSQL 的执行顺序：from---where--group by---having---select---order by\n\n# MySQL 是如何执行一条 SQL 的\n\n![SQL执行的全部过程-OAPHZm](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/SQL执行的全部过程-OAPHZm.png)\n\n**MySQL 内部可以分为服务层和存储引擎层两部分：**\n\n1. **服务层包括连接器、查询缓存、分析器、优化器、执行器等**，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。\n2. **存储引擎层负责数据的存储和提取**，其架构模式是插件式的，支持 InnoDB、MyISAM、Memory 等多个存储引擎。现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5.5 版本开始成为了默认的存储引擎。\n\n**Server 层按顺序执行 sql 的步骤为**：\n客户端请求:\n\n- 连接器:（验证用户身份，给予权限）\n- 查询缓存:（存在缓存则直接返回，不存在则执行后续操作）\n- 分析器:（对 SQL 进行词法分析和语法分析操作）\n- 优化器:（主要对执行的 sql 优化选择最优的执行方案方法）\n- 执行器:（执行时会先看用户是否有执行权限，有才去使用这个引擎提供的接口）\n- 去引擎层获取数据返回:（如果开启查询缓存则会缓存查询结果）\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 349,
        "like_count": 39
    },
    {
        "id": 228,
        "tag_id": 6,
        "tag_type": 1,
        "title": "1.集群、分布式和微服务的概念",
        "content": "# 集群、分布式和微服务的概念\n\n微服务是一种架构风格，一个大型复杂软件应用由**一个或多个微服务组成**。系统中的**各个微服务可被独立部署，各个微服务之间是松耦合的**。**每个微服务仅关注于完成一件任务并很好地完成该任务**。在所有情况下，每个任务代表着一个小的业务能力。\n\n- 分布式将一个大的系统划分为多个业务模块，**业务模块分别部署到不同的机器上**，各个业务模块之间通过接口进行数据交互。区别**分布式的方式是根据不同机器不同业务**。\n- 集群模式是**不同服务器部署同一套服务对外访问，实现服务的负载均衡**。区别集群的方式是根据部署多台服务器业务是否相同。\n- 微服务的设计是为了不因为某个模块的升级和 BUG 影响现有的系统业务。微服务与分布式的细微差别是，**微服务的应用不一定是分散在多个服务器上，他也可以是同一个服务器**。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 134,
        "like_count": 44
    },
    {
        "id": 262,
        "tag_id": 7,
        "tag_type": 2,
        "title": "1.前端面试必看大纲图",
        "content": "# 看图\n\n![](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95-U3XdUd.png)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 302,
        "like_count": 39
    },
    {
        "id": 2,
        "tag_id": 11,
        "tag_type": 2,
        "title": "2.cookie和sessionstorage还有localstorage的区别",
        "content": "# cookie 和 sessionstorage 还有 localstorage 的区别\n\n相同点：都是存储数据，存储在 web 端，并且都是同源\n不同点：\n\n1. cookie 只有 4K 小 并且每一次请求都会带上 cookie 体验不好，浪费带宽\n2. session 和 local 直接存储在本地，请求不会携带，并且容量比 cookie 要大的多\n3. session 是临时会话，当窗口被关闭的时候就清除掉 ，而 local 永久存在，cookie 有过期时间\n4. cookie 和 local 都可以支持多窗口共享，而 session 不支持多窗口共享 但是都支持 a 链接跳转的新窗口\n\n参考：[https://www.jianshu.com/p/bdbae99a3871](https://www.jianshu.com/p/bdbae99a3871)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 236,
        "like_count": 2
    },
    {
        "id": 38,
        "tag_id": 4,
        "tag_type": 3,
        "title": "2.常见的端口号和协议号",
        "content": "# 上图\n\n![常见端口号-7nz7h3](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/常见端口号-7nz7h3.png)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 472,
        "like_count": 9
    },
    {
        "id": 43,
        "tag_id": 8,
        "tag_type": 2,
        "title": "2.css中盒子模型",
        "content": "# css 盒子模型\n\n## 基本概念\n\n### 标准盒子模型\n\n![js-盒子-1-P2Yvlw](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js-盒子-1-P2Yvlw.png)\n\n从上图可以看到标准 W3C 盒子模型的范围包括 margin、border、padding、content，并且 content 部分不包含其他部分。\n\n### IE 盒子模型\n\n![js-盒子-2-WZjlnD](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js-盒子-2-WZjlnD.png)\n\n从上图可以看到 IE 盒子模型的范围也包括 margin、border、padding、content，和标准 W3C 盒子模型不同的是：IE 盒子模型的 content 部分包含了 border 和 pading。\n\n## CSS 如何设置这两种模型\n\n```css\nbox-sizing: content-box;\nbox-sizing: border-box;\n```\n\n## JS 如何设置获取盒子模型对应的宽和高\n\n```js\ndom.style.width / height;\ndom.currentStyle.width / height(ie支持);\nwindow.getComputedStyle(dom).width / height;\ndom.getBoundingClientRect().width / height;\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 233,
        "like_count": 60
    },
    {
        "id": 61,
        "tag_id": 3,
        "tag_type": 1,
        "title": "2.Redis数据结构",
        "content": "## String\n\nString 数据结构是简单的 key-value 类型，value 其实不仅可以是 String，也可以是数字。 常规 key-value 缓存应用； **常规计数：微博数，粉丝数**等。\n\n## Hash\n\nHash 是一个 string 类型的 ﬁeld 和 value 的映射表，hash 特别适合用于存储对象，后续操作的时候，你可以直接仅仅修改这个对象中的某个字段的值。 比如我们可以 Hash 数据结构来**存储用户信息，商品信息**等等。\n\n简单说一下结构\n\n- 字典被广泛用于实现 Redis 的各种功能，其中包括数据库和哈希键。\n- Redis 中的字典使用哈希表作为底层结构实现，每个字典带有两个哈希表，一个平时使用，另一个仅在进行 rehash 时使用。\n- Redis 使用 MurmurHash2 算法来计算键的哈希值。\n- 哈希表使用链地址法来解决键冲突。\n\n注意：这里和 Java 的 HashMap 不同的 rehash 过程\n\n1. Redis 的 rehash 过程是扩展和收缩，而且还是渐进式的 rehash\n2. Redis 的字典有两个哈希表 ht[0]和 ht[1]\n3. 为字典的 ht[1]哈希表分配空间，如果执行的是扩展操作，那么 ht[1]的大小为第一个大于等于 ht[0].used \\\\*2 的 2^n；如果执行的是收缩操作，那么 ht[1]的大小第一个大于等于 ht[0].used 的 2^n。（举个例子，ht[0]的长度为 10，那么扩展就是 2^5 的 32，如果是压缩的话 2^4=16）\n4. 如果 ht[0]的键值非常多的话，一次性转移过去，是一个非常耗时的操作哦，因此并非一次性，采取渐进式 rehash 转移。\n\n## List\n\nlist 就是链表，Redis list 的应用场景非常多，也是 Redis 最重要的数据结构之一，比如**微博的关注列表，粉丝列表， 消息列表**等功能都可以用 Redis 的 list 结构来实现。\n\nRedis list 的实现为一个双向链表，即可以支持反向查找和遍历，更方便操作，不过带来了部分额外的内存开销。\n\n另外可以通过 lrange 命令，就是从某个元素开始读取多少个元素，可以基于 list 实现分页查询，这个很棒的一个功能，基于 redis 实现简单的高性能分页，可以做类似微博那种下拉不断分页的东西（一页一页的往下走），性能高。\n\n## Set\n\nset 对外提供的功能与 list 类似是一个列表的功能，特殊之处在于 set 是可以自动排重的。\n\n当你需要存储一个列表数据，又不希望出现重复数据时，set 是一个很好的选择，并且 set 提供了判断某个成员是否在 一个 set 集合内的重要接口，这个也是 list 所不能提供的。可以基于 set 轻易实现交集、并集、差集的操作。\n\n比如：在微博应用中，可以将一个用户所有的关注人存在一个集合中，将其所有粉丝存在一个集合。Redis 可以非常 方便的实现如**共同关注、共同粉丝、共同喜好**等功能。这个过程也就是求交集的过程，具体命令如下：`sinterstore key1 key2 key3`将交集存在 key1 内\n\n## Zset\n\n和 set 相比，sorted set 增加了一个**权重参数 score**，使得集合中的元素能够按 score 进行**有序**排列。\n\n举例： 在直播系统中，实时排行信息包含直播间在线用户列表，各种**礼物排行榜**，弹幕消息（可以理解为按消息维度的消息排行榜）等信息，适合使用 Redis 中的 SortedSet 结构进行存储。\n\n跳跃表，暂时先放一个链接[https://zhuanlan.zhihu.com/p/53975333](https://zhuanlan.zhihu.com/p/53975333)\n\n- 简单来说跳跃表是一种有序数据结构，它通过在**每个节点中维持多个指向其他节点的指针**，从而达到快速访问节点的目的。\n- 跳跃表平均 O(longN)，最坏 O(N)复杂度的节点查找\n- 跳跃表有个层的概念：层带有两个属性：**前进指针和跨度**，前进指针用于**访问位于表尾方向的其他节点**，而跨度则记录了**前进指针所指向节点和当前节点的距离**。一般情况下，层越多，查找效率越高。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 497,
        "like_count": 36
    },
    {
        "id": 66,
        "tag_id": 10,
        "tag_type": 2,
        "title": "2.Vue数据双向绑定原理",
        "content": "# Vue 数据双向绑定原理\n\n![数据绑定-1-C8vQuM](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/数据绑定-1-C8vQuM.png)\n\n**Vue 采用数据劫持&发布-订阅模式的方式**。\n\n过程：通过 ES5 提供的 `Object.defineProperty()` 方法来劫持（监控）各属性的 `getter` `、setter` ，并在数据（对象）发生变动时**通知订阅者**，触发相应的**监听回调**。并且，由于是在不同的数据上触发同步，可以精确的将变更发送给绑定的视图，而不是对所有的数据都执行一次检测。\n\n要实现 Vue 中的双向数据绑定，大致可以划分三个模块：Observer、Compile、Watcher，如图：\n\n![数据绑定-2-6YWYtq](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/数据绑定-2-6YWYtq.png)\n\n- Observer 数据监听器\n  负责对数据对象的所有属性进行监听（数据劫持），监听到数据发生变化后通知订阅者。\n- Compiler 指令解析器\n  扫描模板，并对指令进行解析，然后绑定指定事件。\n- Watcher 订阅者\n  关联 Observer 和 Compile，能够订阅并收到属性变动的通知，执行指令绑定的相应操作，更新视图。Update()是它自身的一个方法，用于执行 Compile 中绑定的回调，更新视图。\n\n## 数据劫持\n\n一般对数据的劫持都是通过 Object.defineProperty 方法进行的，Vue 中对应的函数为 defineReactive ，其普通对象的劫持的精简版代码如下：\n\n```js\nvar foo = {\n  name: \\\"vue\\\",\n  version: \\\"2.0\\\",\n};\n\nfunction observe(data) {\n  if (!data || typeof data !== \\\"object\\\") {\n    return;\n  }\n  // 使用递归劫持对象属性\n  Object.keys(data).forEach(function (key) {\n    defineReactive(data, key, data[key]);\n  });\n}\n\nfunction defineReactive(obj, key, value) {\n  // 监听子属性 比如这里data对象里的 \\'name\\' 或者 \\'version\\'\n  observe(value);\n\n  Object.defineProperty(obj, key, {\n    get: function reactiveGetter() {\n      return value;\n    },\n    set: function reactiveSetter(newVal) {\n      if (value === newVal) {\n        return;\n      } else {\n        value = newVal;\n        console.log(`监听成功：${value} --> ${newVal}`);\n      }\n    },\n  });\n}\n\nobserve(foo);\nfoo.name = \\\"angular\\\"; // “监听成功：vue --> angular”复制代码\n```\n\n上面完成了对数据对象的监听，接下来还需要在监听到变化后去通知订阅者，这需要实现一个消息订阅器 Dep ，Watcher 通过 Dep 添加订阅者，当数据改变便触发 Dep.notify() ，Watcher 调用自己的 update() 方法完成视图更新。\n\n参考：[https://segmentfault.com/a/1190000020969313](https://segmentfault.com/a/1190000020969313)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 33,
        "like_count": 54
    },
    {
        "id": 86,
        "tag_id": 1,
        "tag_type": 1,
        "title": "2.jdk、jre和jvm是什么",
        "content": "# jdk、jre 和 jvm 是什么\n\n> 学习 Java 专门语言，如果连一些基本的专有名词都不知道的话，那岂不是很尴尬嘛？狗头保命...\n\n- jdk:全称（`Java Development Kit`）是**java 开发工具包**，就是你想使用 Java 这门语言，首先不得安装这门语言需要的工具包嘛？其安装目录下面有六个文件夹，一些描述文件，一个 src 压缩文件（方便利用 Idea 工具查看源代码）。\n- jre:全称（`Java Runtime Environment`）Java 运行时环境，是**运行.class 的环境哦**，**并没有编译的功能**。换种说法，**使用 jdk 开发完成的 Java 程序，交给 JRE 去运行**。\n- jvm:全称（`Java Virtual Machine`），我们常说的 Java 虚拟机，它是整个 Java 实现**跨平台**的最核心的部分，所有的 Java 文件首先被**编译**为.class 文件，这种类文件可以在虚拟机上执行，也就是说 class 并不直接与机器的操作系统相互交互，而是**通过虚拟机间接与操作系统交互**，由虚拟机将程序解释给本地系统执行。\n\n总的来说：`jdk` 包含 `jre`，`jre` 包含 `jvm`\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 100,
        "like_count": 93
    },
    {
        "id": 173,
        "tag_id": 9,
        "tag_type": 2,
        "title": "2.html5语义化标签",
        "content": "# html5 语义化标签\n\n- header 元素：header 元素代表“网页”或“section”的页眉。\n- footer 元素：footer 元素代表“网页”或“section”的页脚，通常含有该节的一些基本信息，譬如：作者，相关文档链接，版权资料。如果 footer 元素包含了整个节，那么它们就代表附录，索引，提拔，许可协议，标签，类别等一些其他类似信息。\n- hgroup 元素：hgroup 元素代表“网页”或“section”的标题，当元素有多个层级时，该元素可以将 h1 到 h6 元素放在其内，譬如文章的主标题和副标题的组合\n- nav 元素：nav 元素代表页面的导航链接区域。用于定义页面的主要导航部分。\n- aside 元素：aside 元素被包含在 article 元素中作为主要内容的附属信息部分，其中的内容可以是与当前文章有关的相关资料、标签、名次解释等。（特殊的 section）\n- section 元素：section 元素代表文档中的“节”或“段”，“段”可以是指一篇文章里按照主题的分段；“节”可以是指一个页面里的分组。\n- article 元素：article 元素最容易跟 section 和 div 容易混淆，其实 article 代表一个在文档，页面或者网站中自成一体的内容，其目的是为了让开发者独立开发或重用。譬如论坛的帖子，博客上的文章，一篇用户的评论，一个互动的 widget 小工具。（特殊的 section）\n-\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 89,
        "like_count": 24
    },
    {
        "id": 177,
        "tag_id": 5,
        "tag_type": 1,
        "title": "2.进程之间的通信",
        "content": "# 进程间通信\n\n> 首先要知道进程之间为什么要通信。 进程是一个独立的资源分配单元，不同进程（这里所说的进程通常指的是用户进程）之间的资源是独立的，没有关联，不能在一个进程中直接访问另一个进程的资源（例如打开的文件描述符）。 但是，进程不是孤立的，不同的进程需要进行信息的交互和状态的传递等，因此需要进程之间的通信。\n\n## 进程通信的目的\n\n- 数据传输：一个进程需要将它的数据发送给另一个进程。\n- 通知事件：一个进程需要向另一个或一组进程发送消息，通知它（它们）发生了某种事件（如进程终止时要通知父进程）。\n- 资源共享：多个进程之间共享同样的资源。为了做到这一点，需要内核提供互斥和同步机制。\n- 进程控制：有些进程希望完全控制另一个进程的执行（如 Debug 进程），此时控制进程希望能够拦截另一个进程的所有陷入和异常，并能够及时知道它的状态改变。\n\n## 通信方式\n\n### 管道\n\n- 普通管道：通常有两种限制,一是单工,只能单向传输;二是只能在父子或者兄弟进程间使用.\n- 流管道：去除了第一种限制,为半双工，只能在父子或兄弟进程间使用，可以双向传输.\n- 命名管道：去除了第二种限制,可以在许多并不相关的进程之间进行通讯.\n\n### 信号量\n\n- 信号量是一个计数器，可以用来控制多个进程对共享资源的访问。\n- 它常作为一种锁机制，防止某进程正在访问共享资源时，其他进程也访问该资源。\n- 因此，主要作为进程间以及同一进程内不同线程之间的同步手段。\n\n### 消息队列\n\n消息队列是由消息的链表，存放在内核中并由消息队列标识符标识。消息队列克服了信号传递信息少、管道只能承载无格式字节流以及缓冲区大小受限等缺点。\n\n### 信号\n\n- 信号是一种比较复杂的通信方式，用于通知接收进程某个事件已经发生。\n\n### 共享内存\n\n共享内存就是映射一段能被其他进程所访问的内存，这段共享内存由一个进程创建，但多个进程都可以访问。共享内存是最快的 IPC 方式，它是针对其他进程间通信方式运行效率低而专门设计的。它往往与其他通信机制，如信号量，配合使用，来实现进程间的同步和通信。\n\n#### 共享内存的实现(mmap)\n\nmmap()系统调用使得进程之间通过映射同一个普通文件实现共享内存。普通文件被映射到进程地址空间后，进程可以向访问普通内存一样对文件进行访问，不必再调用 read()，write（）等操作。\n\n#### 系统调用 mmap 共享内存的两种方式\n\n- 使用普通文件提供的内存映射：适用于任何进程之间；\n- 使用特殊文件提供匿名内存映射：适用于具有亲缘关系的进程之间； 由于父子进程特殊的亲缘关系，在父进程中先调用 mmap()，然后调用 fork()。那么在调用 fork()之后，子进程继承父进程匿名映射后的地址空间，同样也继承 mmap()返回的地址，这样，父子进程就可以通过映射区域进行通信了。\n\n### socket\n\n这是一种更为一般得进程间通信机制，它可用于网络中不同机器之间的进程间通信，应用非常广泛。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 85,
        "like_count": 4
    },
    {
        "id": 185,
        "tag_id": 2,
        "tag_type": 1,
        "title": "2.并发事务带来的问题",
        "content": "> 对于这个问题，建议掌握流程。\n\n# 问题产生\n\n不采取任何隔离级别\n\n## 脏读\n\n第一个事务首先读取变量为 50，接着准备更新为 100 的时，并未提交，第二个事务已经读取为 100，此时第一个事务做了回滚。最终第二个事务读取的变量和数据库的不一样。​\n\n核心关键词：**回滚，未提交读**​\n\nt1:50 to100 -> rollback 50\nt2: get 100 -> commit 100\n\n## 丢弃修改\n\nT1 和 T2 两个事务都对一个数据进行修改，T1 先修改，T2 随后修改，**T2 的修改覆盖了 T1 的修改** 。例如：事务 1 读取某表中的数据 A=50，事务 2 也读取 A=50，事务 1 修改 A=A+50，事务 2 也修改 A=A+50，最终结果 A=100，事务 1 的修改被丢失。\n​\n\n核心关键词：**覆盖**\n\nt1: 50 to100 commit 100(t2)\nt2: 50 to 100 commit 100(t2)\n\n## 不可重复读\n\nT2 读取一个数据，T1 对该数据做了修改并提交。如果 T2 再次读取这个数据，此时读取的结果和第一次读取的结果不同。\n\n核心关键词：**两次读取的结果不同**\n\nt1: 50 to 100 commit 100\nt2: get 50 get 100 commit 100 (两次 get res 不一样)\n\n## 幻读\n\nT1 读取某个范围的数据，T2 在这个范围内插入新的数据，T1 再次读取这个范围的数据，此时读取的结果和第一次读取的结果不同。（和不可重复读的区别：一个是变量变化，一个是范围变化）\n\n核心关键词：**两次读取范围变化**\n\nt1: get (50) get(50,100) commit (50,100) (两次范围不一样)\nt2: (50) to (50,100) commit\n\n# 隔离级别\n\n首先，MySQL InnoDB 存储引擎的默认支持的隔离级别是 **REPEATABLE-READ（可重复读）**\n\n其次，这里需要注意的是 ：与 SQL 标准不同的地方在于 InnoDB 存储引擎在 **REPEATABLE-READ（可重复读）**事务隔离级别下使用的是**Next-Key Lock 锁算法**，因此可以**避免幻读**的产生，这与其他数据库系统(如 SQL Server)是不同的。所以说 InnoDB 存储引擎的默认支持的隔离级别是 **REPEATABLE-READ（可重读）**已经可以完全保证**事务的隔离性要求**，即达到了 SQL 标准的** SERIALIZABLE(可串行化)隔离级别**。\n​\n\n因为**隔离级别越低**，事务请求的**锁越少**，所以大部分数据库系统的隔离级别都是 **READ-COMMITTED(读取提交内容)**，但是你要知道的是 InnoDB 存储引擎默认使用 **REPEATABLE-READ（可重复读）**并不会有任何性能损失 。\n\n## 未提交读\n\n事务中发生了修改，即使没有提交，其他事务也是可见的，比如对于一个数 A 原来 50 修改为 100，但是我还没有提交修改，另一个事务看到这个修改，而这个时候原事务发生了回滚，这时候 A 还是 50，但是另一个事务看到的 A 是 100.\n​\n\n该隔离级别，**可能会导致脏读、幻读或不可重复读。**\n\n## 提交读\n\n对于一个事务从开始直到提交之前，所做的任**何修改是其他事务不可见**的，只能读取到**已经提交**的数据，举例就是对于一个数 A 原来是 50，然后提交修改成 100，这个时候另一个事务在 A 提交修改之前，读取的 A 是 50，刚读取完，A 就被修改成 100，这**个时候另一个事务再进行读取发现 A 就突然变成 100 了；（两次读取出了问题，即不可重复读）**\n\n**可以阻止脏读，但是幻读或不可重复读仍有可能发生。**\n\n## 可重复读\n\n就是对一个记录读取多次的记录是相同的，在同一个事务内的查询都是**事务开始时刻一致**的；\n\n**可以阻止脏读和不可重复读，但幻读仍有可能发生**。\n\n## 串行读\n\n在并发情况下，和串行化的读取的结果是一致的，没有什么不同，比如不会发生脏读和幻读；\n\n**该级别可以防止脏读、不可重复读以及幻读。**\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 378,
        "like_count": 4
    },
    {
        "id": 236,
        "tag_id": 6,
        "tag_type": 1,
        "title": "2.什么是RPC",
        "content": "## 什么是 RPC？\n\nRPC（RemoteProcedureCall）—远程过程调用，它是一种通过网络从远程计算机程序上请求服务，而不需要了解底层网络技术的协议。比如两个不同的服务 A、B 部署在两台不同的机器上，那么服务 A 如果想要调用服务 B 中的某个方法该怎么办呢？使用 HTTP 请求当然可以，但是可能会比较慢而且一些优化做的并不好。RPC 的出现就是为了解决这个问题。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 467,
        "like_count": 45
    },
    {
        "id": 244,
        "tag_id": 7,
        "tag_type": 2,
        "title": "2.==和===有什么区别",
        "content": "# `==`和`===`有什么区别\n\n## 概述\n\n`===`叫做**严格运算符**，`==`叫做**相等运算符**。\n\n## 严格运算符\n\n- 不同类型值：**如果两个值的类型不同，直接返回 false**。\n- 同一类型的原始类型值（树值，字符串，布尔值）：**值相同就返回 true，值不同就返回 false**。\n- 同一类的复合类型值（对象，数组，函数）：**不是比较它们的值是否相等，而是比较它们是否指向同一个对象**。\n- undefined 和 null：\n\n```javascript\nnull === null; // true\nundefined === undefined; // true\n```\n\n## 相等运算符\n\n相等运算符在比较**相同类型**的数据时，与**严格相等运算符**完全一样。\n\n在比较不同类型的数据时，相等运算符会先将数据进行类型转换，然后再用严格相等运算符比较。类型转换规则如下：\n\n- 原始类型的值：原始类型的数据会转换成数值类型再进行比较，则**字符串和布尔值都会转换成数值**\n- 对象与原始类型值比较：对象（这里指广义的对象，包括数值和函数）与原始类型的值比较时，对象转化成原始类型的值，再进行比较。\n- undefined 和 null：undefined 和 null 与其他类型的值比较时，结果都为 false，它们互相比较时结果未 true。\n\n```javascript\n\\\"\\\" == \\\"0\\\"; // false\n0 == \\\"\\\"; // true\n0 == \\\"0\\\"; // true\nfalse == \\\"false\\\"; // false\nfalse == \\\"0\\\"; // true\nfalse == undefined; // false\nfalse == null; // false\nnull == undefined; // true\n\\\" \\\\t\\\\r\\\\n \\\" == 0; // true\n```\n\n## 案例\n\n```javascript\nvar a = undefined;\nif (!a) {\n  console.log(\\\"1\\\");\n}\n// 1\nvar a = undefined;\nif (a == null) {\n  console.log(\\\"1\\\");\n}\n// 1\nvar a = undefined;\nif (a === null) {\n  console.log(\\\"1\\\");\n}\n// 无输出\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 264,
        "like_count": 90
    },
    {
        "id": 10,
        "tag_id": 11,
        "tag_type": 2,
        "title": "3.localStorage模拟cookie，如何过期",
        "content": "用时间戳对比，手动删除",
        "publish_time": "2022-09-29 23:37",
        "view_count": 208,
        "like_count": 6
    },
    {
        "id": 20,
        "tag_id": 4,
        "tag_type": 3,
        "title": "3.ping命令原理",
        "content": "ping 命令基于网络层的命令，是基于 ICMP 协议工作的。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 433,
        "like_count": 86
    },
    {
        "id": 49,
        "tag_id": 8,
        "tag_type": 2,
        "title": "3.position有哪些",
        "content": "# position\n\nCSS position 属性用于指定一个元素在文档中的定位方式。\n\n## 定位类型\n\n- static：该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。\n- relative：该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:relative 对 table-\\\\*-group, table-row, table-column, table-cell, table-caption 元素无效。\n- absolute：元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。\n- fixed：元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先。\n- sticky：元素根据正常文档流进行定位，然后相对它的最近滚动祖先（nearest scrolling ancestor）和 containing block (最近块级祖先 nearest block-level ancestor)，包括 table-related 元素，基于 top, right, bottom, 和 left 的值进行偏移。偏移值不会影响任何其他元素的位置。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 433,
        "like_count": 10
    },
    {
        "id": 58,
        "tag_id": 3,
        "tag_type": 1,
        "title": "3.Redis持久化",
        "content": "面试官：Redis 的持久化了解嘛？\n\n我：了解，Redis 的持久化分为两种：**RDB 和 AOF**\n\n## RDB\n\n**RDB**是一种**快照存储持久化**方式，具体就是将`Redis`某一时刻的内存数据保存到硬盘的文件当中，默认保存的文件名为`dump.rdb`。在`Redis`服务器启动时，会重新加载`dump.rdb`文件的数据到内存当中恢复数据。\n\n优点：\n\n1. RDB 会生成多个数据文件，**每个数据文件都代表了某一个时刻中 redis 的数据**，这种多个数据文件的方式，非常适合**做冷备**。\n2. RDB 对 redis 对外提供读写服务的时候，影像非常小，因为 redis 主进程只需要 fork 一个子进程出来，让子进程对磁盘 io 来进行 rdb 持久化\n3. **RDB 在恢复大数据集时的速度比 AOF 的恢复速度要快**。\n\n缺点：\n\n1. **如果 redis 要故障时要尽可能少的丢失数据，RDB 没有 AOF 好**，例如 1:00 进行的快照，在 1:10 又要进行快照的时候宕机了，这个时候就会丢失 10 分钟的数据。\n2. RDB 每次 fork 出子进程来执行 RDB 快照生成文件时，如果文件特别大，可能会导致客户端提供服务暂停数毫秒或者几秒\n\n![rdb-gPAvIr](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/rdb-gPAvIr.png)\n\n## AOF\n\n**AOF**：把所有的**对 Redis 的服务器进行修改的命令都存到一个文件里，命令的集合**。 使用 AOF 做持久化，每一个写命令都通过 write 函数追加到 appendonly.aof 中。aof 的默认策略是每秒钟 fsync 一次，在这种配置下，就算发生故障停机，也最多丢失一秒钟的数据。 缺点是对于相同的数据集来说，AOF 的文件体积通常要大于 RDB 文件的体积。根据所使用的 fsync 策略，AOF 的速度可能会慢于 RDB。 Redis 默认是快照 RDB 的持久化方式。对于主从同步来说，主从刚刚连接的时候，进行全量同步（RDB）；全同步结束后，进行增量同步(AOF)。\n\n优点：\n\n1. **AOF 可以更好的保护数据不丢失，一般 AOF 会以每隔 1 秒**，通过后台的一个线程去执行一次 fsync 操作，如果 redis 进程挂掉，最多丢失 1 秒的数据。\n2. **AOF 以 appen-only 的模式写入，所以没有任何磁盘寻址的开销，写入性能非常高**。\n3. AOF 日志文件的命令通过非常可读的方式进行记录，这个非常适合做灾难性的误删除紧急恢复，如果某人不小心用 flushall 命令清空了所有数据，只要这个时候还没有执行 rewrite，那么就可以将日志文件中的 flushall 删除，进行恢复。\n\n缺点：\n\n1. 对于同一份文件**AOF 文件比 RDB 数据快照要大**。\n2. AOF 开启后支持写的 QPS 会比 RDB 支持的写的 QPS 低，因为 AOF 一般会配置成每秒 fsync 操作，每秒的 fsync 操作还是很高的\n3. **数据恢复比较慢，不适合做冷备**。\n\n![aof-GYRyaG](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/aof-GYRyaG.png)\n\n**如何选择：**\n\n如何选择：\n\n综合 AOF 和 RDB 两种持久化方式，**用 AOF 来保证数据不丢失，作为恢复数据的第一选择**；**用 RDB 来做不同程度的冷备，在 AOF 文件都丢失或损坏不可用的时候，可以使用 RDB 进行快速的数据恢复**。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 280,
        "like_count": 29
    },
    {
        "id": 68,
        "tag_id": 10,
        "tag_type": 2,
        "title": "3.Vue响应式原理",
        "content": "# Vue 响应式原理\n\n作为一个前端的 MvvM 框架，Vue 的基本思路和 angular、React 并无二致，其核心就在于: 当数据变化时，自动去刷新页面 Dom，这使得我们能从繁琐的 Dom 操作中解放出来，从而专心地去处理业务逻辑。回想一下 jQuery 时代的痛点，现在的前端人真是赶上了好时代。😂 那么 Vue 是怎么做到这种自动更新的呢？\n\n官方图：\n\n![vue响应式原理-1-sM01Vt](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/vue响应式原理-1-sM01Vt.png)\n\n对这张的总结：\n\n1. 任何一个 `Vue Component` 都有一个与之对应的 `Watcher` 实例。\n2. Vue 的`data`上的属性会被添加`getter`和`setter`属性。\n3. 当 `Vue Component render` 函数被执行的时候, `data` 上会被触碰(touch), 即被读, `getter` 方法会被调用, 此时 `Vue` 会去记录此 `Vue component` 所依赖的所有 `data`。(这一过程被称为依赖收集)\n4. `data` 被改动时（主要是用户操作）, 即被写, `setter` 方法会被调用, 此时 `Vue` 会去通知所有依赖于此 `data` 的组件去调用他们的 `render` 函数进行更新。\n\n想看细节的话，请看：[https://www.njleonzhang.com/2018/09/26/vue-reactive.html](https://www.njleonzhang.com/2018/09/26/vue-reactive.html)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 371,
        "like_count": 43
    },
    {
        "id": 154,
        "tag_id": 1,
        "tag_type": 1,
        "title": "3.Java8大基本类型",
        "content": "# 8 大基本类型\n\n![Java8大基本类型-BoRHY8](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/Java8大基本类型-BoRHY8.jpg)\n\n> 特别注意 Boolean 未精确定义字节。Java 语言表达式所操作的 boolean 值，在编译之后都使用 Java 虚拟机中的 int 数据类型来代替，而 boolean 数组将会被编码成 Java 虚拟机的 byte 数组，每个元素 boolean 元素占 8 位。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 52,
        "like_count": 68
    },
    {
        "id": 172,
        "tag_id": 9,
        "tag_type": 2,
        "title": "3.html中的块级元素、行内元素分别有哪些",
        "content": "# html 中的块级元素、行内元素分别有哪些\n\n## 行内\n\n- abbr\n- br\n- img\n- input\n- font\n- code\n\n等等...\n\n## 块\n\n- address\n- blockquote\n- center\n- dir\n- form\n- h1\n- h2\n- h3\n- h4\n- h5\n- h6\n- table\n- p\n- li\n- ul\n- button\n\n等等...\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 390,
        "like_count": 77
    },
    {
        "id": 174,
        "tag_id": 5,
        "tag_type": 1,
        "title": "3.线程之间的通信",
        "content": "## 线程之间的通信\n\n1. 锁机制：包括互斥锁、条件变量、读写锁\n2. 信号量机制(Semaphore)：包括无名线程信号量和命名线程信号量\n3. 信号机制(Signal)：类似进程间的信号处理\n\n> 线程间的通信目的主要是用于线程同步，所以线程没有像进程通信中的用于数据交换的通信机制。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 288,
        "like_count": 4
    },
    {
        "id": 193,
        "tag_id": 2,
        "tag_type": 1,
        "title": "3.讲一讲ACID",
        "content": "# ACID\n\n> 这个问题经常问，但是问我的比较少，其实 MySQL 这一块，问的最多还是优化问题\n\n面试官：聊聊 ACID 是什么\n\n我：分别是：**原子性(Atomicity)**、**一致性(Consistency)**、**隔离性(Isolation)**和**持久性(Durability)**。\n\n## 原子性\n\n根据定义，原子性是指一个事务是一个不可分割的工作单位，**其中的操作要么都做，要么都不做**。即要么转账成功，要么转账失败，是不存在中间的状态！比如：如果不保证原子性，OK，就会出现数据不一致的情形，A 账户减去 50 元，而 B 账户增加 50 元操作失败。系统将无故丢失 50 元~。可能会聊 undolog\n\n## 一致性\n\n根据定义，一致性是指事务执行前后，数据处于一种合法的状态，这种状态是语义上的而不是语法上的。 那什么是合法的数据状态呢？ oK，这个状态是满足预定的约束就叫做合法的状态，再通俗一点，这状态是由你自己来定义的。**满足这个状态，数据就是一致的，不满足这个状态，数据就是不一致的！**比如：A 给 B 转 100，B 不能因为通过这个事务增加了 150 吧？或者 A 扣了 150 吧？\n\n## 隔离性\n\n根据定义，隔离性是指**多个事务并发执行的时候，事务内部的操作与其他事务是隔离的**，并发执行的各个事务之间不能互相干扰。\n\n## 持久性\n\n根据定义，**持久性是指事务一旦提交，它对数据库的改变就应该是永久性的**。接下来的其他操作或故障不应该对其有任何影响。这里可能会让你聊 redolog\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 50,
        "like_count": 51
    },
    {
        "id": 227,
        "tag_id": 6,
        "tag_type": 1,
        "title": "3.CAP和BASE是什么",
        "content": "## CAP\n\n- C(一致性):对某个指定的客户端来说，读操作能返回最新的写操作。对于数据分布在不同节点上的数据上来说，如果在某个节点更新了数据，那么在其他节点如果都能读取到这个最新的数据，那么就称为强一致，如果有某个节点没有读取到，那就是分布式不一致。\n- A(可用性)：非故障的节点在合理的时间内返回合理的响应(不是错误和超时的响应)。可用性的两个关键一个是合理的时间，一个是合理的响应。合理的时间指的是请求不能无限被阻塞，应该在合理的时间给出返回。合理的响应指的是系统应该明确返回结果并且结果是正确的，这里的正确指的是比如应该返回 50，而不是返回 40。\n- P(分区容错性):当出现网络分区后，系统能够继续工作。打个比方，集群有多台机器，有台机器网络出现了问题，但是这个集群仍然可以正常工作。\n\n- CP：对于 CP 来说，放弃可用性，追求一致性和分区容错性，我们的 zookeeper 其实就是追求的强一致。\n- AP：对于 AP 来说，放弃一致性(这里说的一致性是强一致性)，追求分区容错性和可用性，这是很多分布式系统设计时的选择，后面的 BASE 也是根据 AP 来扩展。\n\n## BASE\n\nBASE 是 BasicallyAvailable(基本可用)、Softstate(软状态)和 Eventuallyconsistent(最终一致性)三个短语的缩写。是对 CAP 中 AP 的一个扩展-基本可用:分布式系统在出现故障时，允许损失部分可用功能，保证核心功能可用。\n\n- 软状态:允许系统中存在中间状态，这个状态不影响系统可用性，这里指的是 CAP 中的不一致。\n- 最终一致:**最终一致是指经过一段时间后，所有节点数据都将会达到一致**。BASE 解决了 CAP 中理论没有网络延迟，在 BASE 中用软状态和最终一致，保证了延迟后的一致性。BASE 和 ACID 是相反的，它完全不同于 ACID 的强一致性模型，而是通过牺牲强一致性来获得可用性，并允许数据在一段时间内是不一致的，但最终达到一致状态。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 17,
        "like_count": 61
    },
    {
        "id": 255,
        "tag_id": 7,
        "tag_type": 2,
        "title": "3.浅谈var、let和const区别",
        "content": "## 浅谈 var、let 和 const 区别\n\n### 简单介绍\n\n`let`的用法类似于`var`，但是`let`只在所在的代码块有效，所有我们一般使用`let`替代`var`，而`const`用来声明变量\n\n这里有一张表，可以清晰的看到三者之间的区别：\n\n<table><thead><tr><th>声明方式</th><th>变量提升</th><th>暂时性死区</th><th>重复声明</th><th>初始值</th><th>作用域</th></tr></thead><tbody><tr><td>var</td><td>允许</td><td>不存在</td><td>允许</td><td>不需要</td><td>除块级</td></tr><tr><td>let</td><td>不允许</td><td>存在</td><td>不允许</td><td>不需要</td><td>块级</td></tr><tr><td>const</td><td>不允许</td><td>存在</td><td>不允许</td><td>需要</td><td>块级</td></tr></tbody></table>\n\n### 变量提升\n\n简单来说：**变量可在声明之前使用**\n\n我们可以看这三段代码：\n\n```javascript\nconsole.log(a); // 这一句话正常运行，并没有报错哦，结果是undefined\nvar a = 1;\n```\n\n```javascript\nconsole.log(b); //  报错，Uncaught ReferenceError： b is not defined\nlet b = 1;\n```\n\n```javascript\nconsole.log(c); // 报错，Uncaught ReferenceError： c is not defined\nconst c = 1;\n```\n\n解析：`var`命令经常会发生**变量提升**现象，按照一般的逻辑，变量应该在声明之后使用才对。为了纠正这个现象，ES6 规定`let`和`const`命令**不允许发生变量提升**，使用`let`和`const`命令声明变量之前，该变量是不可用的。主要是为了减少运行时错误，防止变量声明前就使用这个变量，从而导致意料之外的行为。\n\n### 暂时性死区\n\n简单来说：如果在代码块中存在`let`或者`const`命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡事在声明之前就使用这些变量，就会报错。我们来一个看例子：\n\n```javascript\nvar tmp = 123;\nif (true) {\n  tmp = \\\"abc\\\"; // 报错，Uncaught ReferenceError： tmp is not defined\n  let tmp;\n}\n```\n\n解析：这段代码的原意是在 if 内定义外部的`tmp`为\\'abc\\'。但实际上，存在全局变量`tmp`，但是块级作用域内`let`又声明了`tmp`变量，导致后者被绑定在这个块级作用域中，所以在`let`声明变量前，对`tmp`赋值就报错了。\n\n### 重复声明\n\n简单来说：在相同作用域内，重复声明同一个变量，而`let`和`const`命令声明的变量不允许重复声明，那么我们来看一个例子\n\n```javascript\nfunction func() {\n  let a = 10;\n  const PI = 3.1415;\n\n  var a = 1; // 报错，Uncaught SyntaxError: Identifier \\'a\\' has already been declared\n  var PI = 3; // 报错，Uncaught SyntaxError: Identifier \\'PI\\' has already been declared\n}\n// 当调用func()时报错，Uncaught SyntaxError: Identifier \\'a\\' has already been declared\nfunction func() {\n  let a = 10;\n  const PI = 3.1415;\n\n  let a = 1; // 报错，Uncaught SyntaxError: Identifier \\'a\\' has already been declared\n  const PI = 3; // 报错，Uncaught SyntaxError: Identifier \\'PI\\' has already been declared\n}\n```\n\n但是，`var`是允许重复定义的，而这会带来什么样的结果呢？\n\n```javascript\nvar i = 10;\nfor (var i = 0; i < 5; i++) {\n  console.log(i);\n}\nconsole.log(i); // 输出 5\n```\n\n但是，我们看一下 go\n\n```go\npackage main\n\nimport \\\"fmt\\\"\n\nfunc main() {\n\ti := 10\n\tfor i := 0; i < 5; i++ {\n\t\tfmt.Println(i)\n\t}\n\tfmt.Println(i) // 10\n}\n```\n\n解析：对于学习过静态（类型）语言的人知道，这段代码要是替换成 go 语言或其他静态语言，输出的结果应该是 10。然而对于 javascript 来说，这段代码的输出结果是 5。因为 `var` 命令没有块级作用域，所以 for 循环括号内的变量 `i` 会覆盖外层 `i`，而且 `var` 允许重复声明，所以这段代码中 `i` 被声明了两次,`i` 的最终结果就被 for 循环的 i 给覆盖了。\n\n### 初始值\n\n由于 `const` 声明的是只读的常量，一旦声明，就必须立即初始化，声明之后值不能改变。\n\n```javascript\nconst PI = 3.1415;\nPI = 3; // 报错，Uncaught TypeError: Assignment to constant variable.\n```\n\n### 作用域\n\n问题：在 ES5 中只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。\n\n- 第一种场景，内层变量可能会覆盖外层变量。\n\n```javascript\nvar tmp = new Date(); //处于全局作用域\n\nfunction f() {\n  console.log(tmp); //处于函数作用域\n  if (false) {\n    var tmp = \\\"hello world\\\";\n  }\n}\n\nf(); // undefined\n```\n\n上面代码的原意是，`if`代码块的外部使用外层的`tmp`变量，内部使用内层的`tmp`变量。\n\n然而现实是在这段代码中，function 内部的 2 个 `tmp` 变量处在同一函数作用域，由于变量提升，导致函数作用域中的 `tmp` 覆盖全局作用域中的 `tmp`，所以，f() 输出结果为 undefined。\n\n- 第二种场景，用来计数的循环变量泄露为全局变量（前面在重复声明中提到的）：\n\n```javascript\nvar i = 10;\nfor (var i = 0; i < 5; i++) {\n  console.log(i);\n}\nconsole.log(i); // 输出 5\n```\n\n上面代码中，变量`i`只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 486,
        "like_count": 4
    },
    {
        "id": 7,
        "tag_id": 11,
        "tag_type": 2,
        "title": "4.js处理搜索框，节流与防抖",
        "content": "# js 处理搜索框，节流与防抖\n\n## 前言\n\n在输入框输入时，要搜索某个字符串，基于性能考虑，肯定不能用户没输入一个字符就发送一次搜索请求，一种方法就是等待用户停止输入，比如过了 500ms 用户都没有再输入，那么就搜索此时的字符串，这就是防抖；节流比防抖宽松一些，比如我们希望给用户一些搜索提示，所以在用户输入过程中，每过 500ms 就查询一次相关字符串，这就是节流。\n\n## 节流\n\n节流的实现思路：每次触发事件时都取消之前的延时调用方法\n\n```js\nvar timer = null;\nfunction input1() {\n  clearTimeout(timer);\n  timer = setTimeout(function () {\n    // ajax()\n    console.log(document.getElementById(\\\"input1\\\").value);\n  }, 500);\n}\n```\n\n## 防抖\n\n防抖的实现思路：每次触发事件时都判断当前是否有等待执行的延时函数\n\n```js\nvar flg = false;\nfunction input2() {\n  if (flg) {\n    return false;\n  }\n  flg = true;\n  setTimeout(function () {\n    // ajax()\n    console.log(document.getElementById(\\\"input2\\\").value);\n    flg = false;\n  }, 500);\n}\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 199,
        "like_count": 88
    },
    {
        "id": 18,
        "tag_id": 4,
        "tag_type": 3,
        "title": "4.ARP",
        "content": "# ARP\n\nARP 是一种解决地址问题的协议。以目标 IP 地址为线索，用来定位下一个应该接收数据分包的网络设备对应的 MAC 地址。\n起初要通过广播发送一个 ARP 请求包，这个包里存放了其 MAC 地址的主机 IP 地址，由于广播的包可以被同一个链路上所有的主机或路由器接收，因此 ARP 的请求包也就会被这同一个链路上所有的主机和路由器进行解析。如果 ARP 请求包中的目标 IP 地址与自己的 IP 地址的一致，那么这个节点就将自己的 MAC 地址塞入 ARP 响应包返回给主机 A。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 388,
        "like_count": 36
    },
    {
        "id": 51,
        "tag_id": 8,
        "tag_type": 2,
        "title": "4.px、em、rem等单位之间的区别",
        "content": "# px、em、rem 等单位之间的区别\n\n1. px：px 就是 pixel（像素）的缩写，相对长度单位，相对于屏幕分辨率；\n2. em：参考物是父元素的 font-size，具有继承的特点。如果自身定义了 font-size 按自身来计算（浏览器默认字体是 16px），整个页面内 1em 不是一个固定的值。\n3. css3 新单位，相对于根元素 html（网页）的 font-size，不会像 em 那样，依赖于父元素的字体大小，而造成混乱。\n4. %：一般宽泛的讲是相对于父元素，但是并不是十分准确。\n   1. 对于普通定位元素就是我们理解的父元素\n   2. 对于 position: absolute;的元素是相对于已定位的父元素\n   3. 对于 position: fixed;的元素是相对于 ViewPort（可视窗口）\n5. vw：css3 新单位，viewpoint width 的缩写，视窗宽度，1vw 等于视窗宽度的 1%。举个例子：浏览器宽度 1200px, 1 vw = 1200px/100 = 12 px。\n6. vh：css3 新单位，viewpoint height 的缩写，视窗高度，1vh 等于视窗高度的 1%。\n7. vm：css3 新单位，相对于视口的宽度或高度中较小的那个。其中最小的那个被均分为 100 单位的 vm，举个例子：浏览器高度 900px，宽度 1200px，取最小的浏览器高度， 1 vm = 900px/100 = 9\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 242,
        "like_count": 98
    },
    {
        "id": 60,
        "tag_id": 3,
        "tag_type": 1,
        "title": "4.内存淘汰机制",
        "content": "# 内存淘汰机制\n\n面试官：先讲一下 Redis 的过期时间\n\n我：\n\n定期删除+惰性删除\n\n- 定期删除：redis 默认是每隔 100ms 就随机抽取一些设置了过期时间的 key，检查其是否过期，如果过期就删除。注意这里是随机抽取的。为什么要随机呢？你想一想假如 redis 存了几十万个 key ，每隔 100ms 就遍历所有的设置过期时间的 key 的话，就会给 CPU 带来很大的负载！\n- 惰性删除 ：定期删除可能会导致很多过期 key 到了时间并没有被删除掉。所以就有了惰性删除。假如你的过期 key，靠定期删除没有被删除掉，还停留在内存里，除非你的系统去查一下那个 key，才会被 redis 给删除掉。这就是所谓的惰性删除，也是够懒的哈！\n\n面试官：如果定期删除漏掉了很多过期 key，然后你也没及时去查， 也就没走惰性删除，此时会怎么样？如果大量过期 key 堆积在内存里，导致 redis 内存块耗尽了。怎么解决这个问题呢？\n\n我：**redis 内存淘汰机制。**\n\nredis 内存数据集大小上升到一定大小的时候，就会施行数据淘汰策略。redis 提供 6 种数据淘汰策略：\n\n- volatile-lru：从已设置过期时间的数据集中挑选最近最少使用的数据淘汰\n- volatile-ttl：从已设置过期时间的数据集中挑选将要过期的数据淘汰\n- volatile-random：从已设置过期时间的数据集中任意选择数据淘汰\n- allkeys-lru：从数据集中挑选最近最少使用的数据淘汰\n- allkeys-random：从数据集中任意选择数据淘汰\n- no-enviction（驱逐）：禁止驱逐数据\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 370,
        "like_count": 76
    },
    {
        "id": 65,
        "tag_id": 10,
        "tag_type": 2,
        "title": "4.浅谈MVC和MVVM模型",
        "content": "# 浅谈 MVC 和 MVVM 模型\n\n## MVC\n\nMVC 模式代表 Model-View-Controller（模型-视图-控制器） 模式。这种模式用于应用程序的分层开发。\n\n- Model(模型)\n\nModel（模型）是应用程序中用于**处理应用程序数据逻辑的部分**。通常**模型对象负责在数据库中存取数据**。\n\n- View(视图)\n\nView（视图）是应用程序中处理**数据显示**的部分。通常视图是依据模型数据创建的。\n\n- Controller（控制器）\n\nController（控制器）是应用程序中**处理用户交互**的部分。通常控制器负责**从视图读取数据，控制用户输入，并向模型发送数据**。\n\n## MVVM\n\nMVVM 是 Model-View-ViewModel 的简写。它本质上就是 MVC 的改进版。MVVM 就是将其中的 View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开。当然这些事 ViewModel 已经帮我们做了，它可以取出 Model 的数据同时帮忙处理 View 中由于需要展示内容而涉及的业务逻辑。\n\n### Model\n\n我们可以把 Model 称为数据层，因为它仅仅关注数据本身，不关心任何行为（格式化数据由 View 的负责），这里可以把它理解为一个类似 json 的数据对象。\n\n### View\n\n指的是所看到的页面，和 MVC/MVP 不同的是，MVVM 中的 View 通过使用模板语法来声明式的将数据渲染进 DOM，当 ViewModel 对 Model 进行更新的时候，会通过数据绑定更新到 View。\n\n### ViewModel\n\nmvvm 模式的核心，它是连接 view 和 model 的桥梁。它有两个方向：\n\n1. 将 Model 转化成 View，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。\n2. 将 View 转化成 Model，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。这两个方向都实现的，我们称之为数据的双向绑定。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 73,
        "like_count": 1
    },
    {
        "id": 136,
        "tag_id": 1,
        "tag_type": 1,
        "title": "4.装箱和拆箱是什么",
        "content": "## 装箱和拆箱\n\n- 装箱：将基本类型用它们对应的**引用类型**包装起来；\n- 将包装类型转换为**基本数据类型**；\n\n## 例子\n\n### 装箱\n\n```java\nint a = 3;\nInteger b = a; // Integer b = 3\nSystem.out.println(a);\nSystem.out.println(b);\n// 结果\n3\n3\n```\n\n### 拆箱\n\n```java\nInteger a = new Integer(3);\nint b = a; // int b = 3\nSystem.out.println(a);\nSystem.out.println(b);\n// 结果\n3\n3\n```\n\n### 探其原理\n\n> ps: 我面试可曾被问过底层原理。一般要反编译才能看到其中的原理哦。\n\n原理：装箱的时候自动调用的是`Integer`的`valueOf(int)`方法;而在拆箱的时候自动调用的是`Integer`的`intValue`方法。\n\n那去 `jdk` 看看其中的源码\n\n`valueOf(int)`:\n\n```java\n// This method will always cache values in the range -128 to 127,\npublic static Integer valueOf(int i) {\n    if (i >= IntegerCache.low && i <= IntegerCache.high)\n        return IntegerCache.cache[i + (-IntegerCache.low)];\n    return new Integer(i);\n}\n// static final int low = -128; IntegerCache.low = -128\n```\n\n`intValue()`:\n\n```java\npublic int intValue() {\n    return value; // 直接返回值，比如3\n}\n```\n\n### 看题\n\n```java\nint a;\nSystem.out.println(a); // 这里会报错，因为a没有初始化\nInteger b = new Integer(); // 构造函数必须传递一个默认值，要不然提示报错，无法初始化\n// 源码：\npublic Integer(int value) {\n    this.value = value;\n}\n// 并且\nprivate final int value; // final 懂了吧？\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 190,
        "like_count": 97
    },
    {
        "id": 170,
        "tag_id": 9,
        "tag_type": 2,
        "title": "4.src和href区别",
        "content": "# src 和 href 的区别\n\nsrc 和 href 都是用于外部资源的引入，像图片、CSS 文件、HTML 文件、js 文件或其他 web 页面等。\n\n- 引用 css 文件时：href=\\\"cssfile.css\\\"\n- 引用 js 文件时：src=\\\"myscript.js\\\"\n- 引用图片：src=\\\"mypic.jpg\\\"\n- 网站链接：href=\\\"http://www.webpage.com\\\"\n\n它们之间的主要区别可以用这样一句话来概括：**src 用于替代这个元素，而 href 用于建立这个标签与外部资源之间的关系**。\n\na 标签里面的内容是一张图片，a 标签加上 href 属性将图片链接到了www.xxx.com这个网站，但并未替换a标签里面的内容，而img标签的src属性则是将这个标签完全替换成了src里面的资源。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 468,
        "like_count": 61
    },
    {
        "id": 176,
        "tag_id": 5,
        "tag_type": 1,
        "title": "4.操作系统内存管理方式",
        "content": "## 分页管理\n\n分页存储管理是将一个进程的逻辑地址空间分成若干个大小相等的片，称为页面或页，并为各页加以编号，从 0 开始，如第 0 页、第 1 页等。相应地，也把内存空间分成与页面相同大小的若干个存储块，称为(物理)块或页框(frame)，也同样为它们加以编号，如 0#块、1#块等等。在为进程分配内存时，以块为单位将进程中的若干个页分别装入到多个可以不相邻接的物理块中。由于进程的最后一页经常装不满一块而形成了不可利用的碎片，称之为“页内碎片”。\n\n**优缺点**：**没有外部碎片，内存利用率高。但各页中内容没有关联，不利于编程和共享**。\n\n## 分段管理\n\n程序通过分段(segmentation)划分为多个模块，如代码段、数据段、共享段。内存每段的大小都匹配程序段，不会产生内部碎片。\n**优缺点**： 可以针对不同类型的段采取不同的保护。 可以按段为单位来进行共享，包括通过动态链接进行代码共享。 **不会产生内部碎片，但会产生外部碎片，内存利用率比分页低**。\n\n## 段页式管理\n\n一个进程中所包含的具有独立逻辑功能的程序或数据仍被划分为段，并有各自的段号 s。这反映相继承了段式管理的特征。其次，对于段 s 中的程序或数据，则按照一定的大小将其划分为不同的页。和页式系统一样，最后不足一页的部分仍占一页。这反映了段页式管理中的页式特征。从而，段页式管理时的进程的虚拟地址空间中的虚拟地址由三部分组成：即段号 s，页号 P 和页内相对地址 d。虚拟空间的最小单位是页而不是段，从而内存可用区也就被划分成为若干个大小相等的页面，且每段所拥有的程序和数据在内存中可以分开存放。分段的大小也不再受内存可用区的限制。\n**优缺点：**既有具有独立逻辑功能的段，又以大小相同的页为内存分配单位进而不会产生外部碎片。但仍会有内部碎片。\n\n[操作系统如管理内存](https://blog.csdn.net/hguisu/article/details/5713164)\n\n## 内存分配过程\n\n[https://blog.csdn.net/edonlii/article/details/22601043](https://blog.csdn.net/edonlii/article/details/22601043)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 255,
        "like_count": 51
    },
    {
        "id": 195,
        "tag_id": 2,
        "tag_type": 1,
        "title": "4.Innodb与MyISAM的区别",
        "content": "> 这个问题简单回答一下即可\n\n# MySQL 的引擎\n\n面试官：MySQL 的引擎都有哪些？\n\n我：我知道，MySQL 内部可以分为服务层和存储引擎层两部分：**服务层包括连接器、查询缓存、分析器、优化器、执行器等；存储引擎层负责数据的存储和提取**。我就说一下自己了解的 InnoDB 和 MyISAM 引擎\n\n# InnoDB\n\n- 是 MySQL 默认的**事务型存储引擎**，只有在需要它不支持的特性时，才考虑使用其它存储引擎。\n- 实现了四个标准的隔离级别，默认级别是**可重复读(REPEATABLE READ)**。在可重复读隔离级别下，通过**多版本并发控制**(MVCC)+ (Next-Key Locking)**防止幻影读**。\n- 主索引是**聚簇索引**，在**索引中保存了数据**，从而避免直接读取磁盘，因此对查询性能有很大的提升。\n- 内部做了很多优化，包括从磁盘读取数据时采用的**可预测性读**、能够加快读操作并且自动创建的**自适应哈希索引**、能够加速插入操作的**插入缓冲区**等。\n- 支持真正的**在线热备份**。其它存储引擎不支持在线热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合场景中，停止写入可能也意味着停止读取。\n\n# MyISAM\n\n- 设计简单，数据以**紧密格式存储**。对于只读数据，或者表比较小、可以容忍修复操作，则依然可以使用它。\n- 提供了大量的特性，包括**压缩表、空间数据索引**等。\n- **不支持事务**。\n- **不支持行级锁，只能对整张表加锁**，读取时会对需要读到的所有表加共享锁，写入时则对表加排它锁。但在表有读取操作的同时，也可以往表中插入新的记录，这被称为并发插入(CONCURRENT INSERT)。\n\n# 索引文件\n\n我一般还会回答一个**索引文件**上的区别\n\n## MyISAM\n\n1. MyISAM**索引文件和数据文件是分离**的，**索引文件仅保存数据记录的地址**，同样使用 B+Tree 作为索引结构，叶节点的**data 域存放的是数据记录的地址**\n2. 在 MyISAM 中，主索引和辅助索引（Secondary key）在结构上没有任何区别，只是主索引要求 key 是唯一的，而辅助索引的 key 可以重复\n3. MyISAM 中索引检索的算法为**首先按照 B+Tree 搜索算法搜索索引**，**如果指定的 Key 存在，则取出其 data 域的值，然后以 data 域的值为地址，读取相应数据记录**\n\n## InnoDB\n\n1. **InnoDB 的数据文件本身就是索引文件**，这棵树的叶节点**data 域保存了完整的数据记录**（聚集索引）\n2. InnoDB 的**辅助索引 data 域存储相应记录主键的值而不是地址**\n3. **聚集索引这种实现方式使得按主键的搜索十分高效**，**但是辅助索引搜索需要检索两遍索引：首先检索辅助索引获得主键，然后用主键到主索引中检索获得记录**。\n\n# 分页查询\n\n其实个人还知道一点，分页查询的时候还有一点区别，这点区别也是根据索引文件的区别来的。\n\n咱们知道，使用 limit 分页查询，offset 越大，性能越差，比如：\n\n```sql\n-- 以真实的生产环境的6万条数据的一张表为例，比较一下优化前后的查询耗时：\n-- 传统limit，文件扫描\nselect * from table order by id limit 50000,2;\n受影响的行: 0\n时间:  0.171s\n\n-- 子查询方式，索引扫描\nselect * from table\nwhere id >= (select id from table order by id limit 50000 , 1)\nlimit 2;\n受影响的行: 0\n时间: 0.035s\n\n-- JOIN分页方式\nselect * from table as t1\njoin (select id from table order by id limit 50000, 1) as t2\nwhere t1.id <= t2.id order by t1.id limit 2;\n受影响的行: 0\n时间: 0.036s\n```\n\n原因：因为 MySQL 并非是跳过偏移量直接去取后面的数据，而是先把偏移量+要取的条数，然后再把前面偏移量这一段的数据抛弃掉再返回的。比如上面的(50000，2)，每次取 2 条，还要经过回表，发现不是想要的，舍弃。那肯定非常耗时间，而通过子查询通过 id 索引，只查询 id，使用到了 innodb 的索引覆盖, 在内存缓冲区中进行检索,没有回表查询. 然后再用 id >= 条件,进一步的缩小查询范围.这样就大大提高了效率。\n\n而 MyISAM，是直接索引是分离的，通过索引文件查到的数据记录地址，不需要回表，直接对应数据记录，效率也很高。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 341,
        "like_count": 40
    },
    {
        "id": 212,
        "tag_id": 6,
        "tag_type": 1,
        "title": "4.paxios算法了解吗",
        "content": "## paxos 算法\n\n> 要讲这个算法，还要先扯背景：在常见的分布式系统中，总会发生诸如机器宕机或网络异常（等情况。Paxos 算法需要解决的问题就是如何在一个可能发生上述异常的分布式系统中，快速且正确地在集群内部对某个数据的值达成一致，并且保证不论发生以上任何异常，都不会破坏整个系统的一致性。\n\n> 其实在整个提议和投票过程当中，主要的角色就是“提议者”和“接受者”\n\n该算法大致流程：其实分为两个阶段\n\n1. 因为存在多个“提议者”Proposer，如果都提意见，那么“接受者”Acceptor 不就炸掉了嘛？到底接受谁啊？所以，要先明确哪个“提议者”是领袖，最厉害的那个，先把这个给挑出来。尽早的让意见统一，并且早点形成多数派。\n2. 由上阶段选出的意见领袖提出提议，“接受者”反馈意见。如果多数“接受者”接受了一个提议，那么这个提议就通过了。\n\n[例子](https://ocavue.com/paxos.html#%E8%8A%82%E7%82%B9%E6%95%85%E9%9A%9C%E7%9A%84%E4%BE%8B%E5%AD%90)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 240,
        "like_count": 99
    },
    {
        "id": 264,
        "tag_id": 7,
        "tag_type": 2,
        "title": "4.js类型判断",
        "content": "# js 类型判断\n\n## 数据类型\n\n- 基本数据类型（Undefined、Null、Boolean、Number、String）\n- 复杂数据类型（Object）\n\n## 判断数据类型\n\n下面对如下数据进行判断它们的类型\n\n```javascript\nvar bool = true;\nvar num = 1;\nvar str = \\\"abc\\\";\nvar und = undefined;\nvar nul = null;\nvar arr = [1, 2, 3];\nvar obj = { name: \\\"haoxl\\\", age: 18 };\nvar fun = function () {\n  console.log(\\\"I am a function\\\");\n};\n```\n\n### 使用 typeof\n\n```javascript\nconsole.log(typeof bool); //boolean\nconsole.log(typeof num); //number\nconsole.log(typeof str); //string\nconsole.log(typeof und); //undefined\nconsole.log(typeof nul); //object\nconsole.log(typeof arr); //object\nconsole.log(typeof obj); //object\nconsole.log(typeof fun); //function\n```\n\n结果：由结果可知 typeof 可以测试出`number`、`string`、`boolean`、`undefined`及`function`，而对于`null`及数组、对象，typeof 均检测出为 object，不能进一步判断它们的类型。\n\n### 使用 instanceof\n\n```javascript\nconsole.log(bool instanceof Boolean); // false\nconsole.log(num instanceof Number); // false\nconsole.log(str instanceof String); // false\nconsole.log(und instanceof Object); // false\nconsole.log(arr instanceof Array); // true\nconsole.log(nul instanceof Object); // false\nconsole.log(obj instanceof Object); // true\nconsole.log(fun instanceof Function); // true\nvar bool2 = new Boolean();\nconsole.log(bool2 instanceof Boolean); // true\n\nvar num2 = new Number();\nconsole.log(num2 instanceof Number); // true\n\nvar str2 = new String();\nconsole.log(str2 instanceof String); //  true\n\nfunction Person() {}\nvar per = new Person();\nconsole.log(per instanceof Person); // true\n\nfunction Student() {}\nStudent.prototype = new Person();\nvar haoxl = new Student();\nconsole.log(haoxl instanceof Student); // true\nconsole.log(haoxl instanceof Person); // true\n```\n\n结果：从结果中看出 instanceof 不能区别 undefined 和 null，而且对于基本类型如果不是用 new 声明的则也测试不出来，对于是使用 new 声明的类型，它还可以检测出多层继承关系。\n\n### 使用 constructor\n\n注意：**undefined 和 null 没有 contructor 属性**\n\n```javascript\nconsole.log(bool.constructor === Boolean); // true\nconsole.log(num.constructor === Number); // true\nconsole.log(str.constructor === String); // true\nconsole.log(arr.constructor === Array); // true\nconsole.log(obj.constructor === Object); // true\nconsole.log(fun.constructor === Function); // true\n\nconsole.log(haoxl.constructor === Student); // false\nconsole.log(haoxl.constructor === Person); // true\n```\n\n结果：constructor 不能判断 undefined 和 null，并且使用它是不安全的，因为 contructor 的指向是可以改变的\n\n### 使用 Object.prototype.toString.call\n\n```javascript\nconsole.log(Object.prototype.toString.call(bool)); //[object Boolean]\nconsole.log(Object.prototype.toString.call(num)); //[object Number]\nconsole.log(Object.prototype.toString.call(str)); //[object String]\nconsole.log(Object.prototype.toString.call(und)); //[object Undefined]\nconsole.log(Object.prototype.toString.call(nul)); //[object Null]\nconsole.log(Object.prototype.toString.call(arr)); //[object Array]\nconsole.log(Object.prototype.toString.call(obj)); //[object Object]\nconsole.log(Object.prototype.toString.call(fun)); //[object Function]\n\nfunction Person() {}\nfunction Student() {}\nStudent.prototype = new Person();\nvar haoxl = new Student();\nconsole.log(Object.prototype.toString.call(haoxl)); //[object Object]\n```\n\n结果：在任何值上调用 Object 原生的 toString() 方法，都会返回一个 [object NativeConstructorName] 格式的字符串。每个类在内部都有一个 [[Class]] 属性，这个属性中就指定了上述字符串中的构造函数名。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 235,
        "like_count": 39
    },
    {
        "id": 6,
        "tag_id": 11,
        "tag_type": 2,
        "title": "5.XML和JSON区别",
        "content": "# XML 和 JSON 区别\n\nJSON（JavaScript Object Notation）是一种**轻量级的数据交换格式，它完全独立于语言**。它基于**JavaScript 编程语言，易于理解和生成**。\n\n比如：\n\n```json\n{\n  \\\"Student\\\": [\n    { \\\"Name\\\": \\\"Vivek\\\", \\\"age\\\": \\\"20\\\" },\n    { \\\"Name\\\": \\\"Suraj\\\", \\\"age\\\": \\\"19\\\" },\n    { \\\"Name\\\": \\\"John\\\", \\\"age\\\": \\\"21\\\" },\n    { \\\"Name\\\": \\\"Peter\\\", \\\"age\\\": \\\"22\\\" }\n  ]\n}\n```\n\n**XML（可扩展标记语言）旨在传输数据，而不是显示数据。这是 W3C 的推荐**。可扩展标记语言（XML）是一种标记语言，它定义了一组规则，用于以人类可读和机器可读的格式编码文档。XML 的设计目标侧重于 Internet 上的简单性，通用性和可用性。它是一种文本数据格式，通过 Unicode 为不同的人类语言提供强大的支持。尽管 XML 的设计侧重于文档，但该语言被广泛用于表示任意数据结构，例如 Web 服务中使用的那些数据结构。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 179,
        "like_count": 39
    },
    {
        "id": 16,
        "tag_id": 4,
        "tag_type": 3,
        "title": "5.DNS是什么",
        "content": "# DNS 是什么\n\n**官方解释**：DNS（Domain Name System，域名系统），因特网上作为**域名和 IP 地址相互映射**的一个**分布式数据库**，能够使用户更方便的访问互联网，而不用去记住能够被机器直接读取的 IP 数串。通过主机名，最终得到该主机名对应的 IP 地址的过程叫做域名解析（或主机名解析）。\n\n**通俗的讲**，我们更习惯于记住一个网站的名字，比如www.baidu.com,而不是记住它的ip地址，比如：167.23.10.2。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 72,
        "like_count": 61
    },
    {
        "id": 52,
        "tag_id": 8,
        "tag_type": 2,
        "title": "5.css样式优先级",
        "content": "# css 样式优先级\n\n1. 优先级就是分配给指定的 CSS 声明的一个权重，浏览器器会将最高优先级的样式应用到元素上。\n2. 当多个 CSS 声明的优先级相等时（均为最高），其中最后的那个声明将会被应用到元素上。\n\n## 什么是权重\n\n1. 权重决定了你 css 规则怎样被浏览器解析直到生效。“css 权重关系到你的 css 规则是怎样显示的”。\n2. 当很多的样式被应用到某一个元素上时，权重是一个决定哪种样式生效，或者是优先级的过程。\n3. 每个选择器都有自己的权重。你的每条 css 规则，都包含一个权重级别。 这个级别是由不同的选择器加权计算的，通过权重，不同的样式最终会作用到你的网页中 。\n4. 如果两个选择器同时作用到一个元素上，权重高者生效。\n\n**记忆口诀**：从 0 开始，一个行内样式+1000，一个 id 选择器+100，一个属性选择器、class 或者伪类+10，一个元素选择器，或者伪元素+1，通配符+0。\n\n![css样式-1-kwF6x3](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/css样式-1-kwF6x3.jpeg)\n\n## 排序\n\n!important > 内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器 > 通配符选择器 > 继承 > 浏览器默认属性\n\n- ID 选择器：如 `#id{}`\n- 类选择器：如 `.class{}`\n- 属性选择器：如 `a[href=\\\"segmentfault.com\\\"]{}`\n- 伪类选择器：如 `:hover{}`\n- 标签选择器：如 `span{}`\n- 伪元素选择器：如 `::before{}`\n- 通配符选择器：如 `*{}`\n\n## css 不引入方式及其其优先级\n\n- 行内样式：\n\n```css\n<div style=\\'background:red\\'></div>\n```\n\n- 内联样式：\n\n```css\n<html>\n  <style type=\\'text/css\\'>\n     div{\n        background:red;\n     }\n  </style>\n</html>\n```\n\n- 链接样式：\n\n```css\n<html>\n  <link rel=\\'stylesheet\\' type=\\'text/css\\' href=\\'style.css\\'/>\n</html>\n```\n\n如果三种方式来对同一目标元素设置相同样式，那么它们优先级：\n\n- 理论上：行内 > 内联 > 链接\n- 实际上： 行内仍然最高，但内嵌、链接谁离相应的代码近，谁的优先级高\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 65,
        "like_count": 92
    },
    {
        "id": 56,
        "tag_id": 3,
        "tag_type": 1,
        "title": "5.缓存穿透和缓存雪崩",
        "content": "> 感觉这个被问烂了\n\n面试官：聊聊什么是缓存穿透和雪崩\n\n我：ok\n\n**缓存穿透**：\n\n一般是黑客故意去请求缓存中不存在的数据，导致所有的请求都落到数据库上，造成数据库短时间内承受大量请求而崩掉。\n\n1. 在接口做校验\n2. 存 null 值（缓存击穿加锁）\n3. 布隆过滤器拦截： 将所有可能的查询 key 先映射到布隆过滤器中，查询时先判断 key 是否存在布隆过滤器中，存在才继续向下执行，如果不存在，则直接返回。布隆过滤器将值进行多次哈希 bit 存储，布隆过滤器说某个元素在，可能会被误判。布隆过滤器说某个元素不在，那么一定不在。\n\n**缓存雪崩：**\n\n缓存同一时间大面积的失效，所以，后面的请求都会落到数据库上，造成数据库短时间内承受大量请求而崩掉。\n\n1. 使用 Redis 高可用架构：使用 Redis 集群来保证 Redis 服务不会挂掉\n2. 缓存时间不一致，给缓存的失效时间，加上一个随机值，避免集体失效\n3. 限流降级策略：有一定的备案，比如个性推荐服务不可用了，换成热点数据推荐服务\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 178,
        "like_count": 92
    },
    {
        "id": 64,
        "tag_id": 10,
        "tag_type": 2,
        "title": "5.Vue生命周期",
        "content": "# Vue 生命周期\n\n每个 Vue 实例在被创建之前都要经过一系列的初始化过程,这个过程就是 vue 的生命周期。\n\n请看官网上的图：\n\n![vue生命周期-VgOuyU](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/vue生命周期-VgOuyU.png)\n\n可以看到在 vue 一整个的生命周期中会有很多钩子函数提供给我们在 vue 生命周期不同的时刻进行操作, 那么先列出所有的钩子函数:\n\n- beforeCreate\n- created\n- beforeMount\n- mounted\n- beforeUpdate\n- updated\n- beforeDestroy\n- destroyed\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 359,
        "like_count": 64
    },
    {
        "id": 85,
        "tag_id": 1,
        "tag_type": 1,
        "title": "5.==、hashcode和equals",
        "content": "# ==、hashcode 和 equals\n\n> 我感觉这问题被问的频率有点高， 那是因为考的知识点比较多\n\n## ==\n\n面试官：出个题：\n\n```java\nInteger a = new Integer(5);\nInteger b = new Integer(5);\nSystem.out.println(a == b);\n```\n\n我：`false`，太简单了嘛。 `==` 比较的是两个对象的地址哦，你看：概念及作用\n\n### 概念及作用\n\n它的作用是**判断两个对象的地址是不是相等**。即，判断两个对象是不是同一个对象：\n\n- 基本数据类型`==`比较的是**值** ;\n- 引用数据类型`==`比较的是**内存地址**;\n\n你要是：`System.out.println(a.equals(b)); \\\\\\\\ false`\n\n面试官：那这个呢：\n\n```java\nint a = 5;\nInteger b = new Integer(5);\nSystem.out.println(a == b); // true，b拆箱成基本类型\n```\n\n这里考了个**装箱和拆箱**的知识点，请看：4.装箱和拆箱是什么\n\n## equals\n\n面试官：聊一下 equals\n\n### 概念及原理\n\n我：`equals` 是顶层父类 `Object` 的方法之一\n\n```java\n// 你看，object默认调用的== ， 你对象如果不重写，可能会发上重大事故\npublic boolean equals(Object obj) {\n    return (this == obj); // 比较对象的地址值\n}\n```\n\n顺带说一下 `Object` 的 `hashcode` 方法\n\n```java\n// Returns a hash code value for the object.\n// 说白了，调用本地方法返回的就是该对象的地址值\npublic native int hashCode();\n```\n\n### 作用\n\nEquals 的作用也是**判断两个对象是否相等**。但它一般有两种使用情况：\n\n- 情况 1：类没有覆盖 `equals()` 方法。则通过 `equals()` 比较该类的两个对象时，等价于通过`==`比较这两个对象。\n- 情况 2：类覆盖了 `equals()` 方法。一般，我们都覆盖 `equals()` 方法来比较两个对象的**内容**是否相等；若它们的内容相等，则返回 `true` (即，认为这两个对象相等)。\n\n再看：\n\n```java\nInteger a = new Integer(5);\nInteger b = new Integer(5);\nSystem.out.println(a.equals(b));\n```\n\n可以看一下 `Integer` 的 `equals` 方法：\n\n```java\n// 重写了Object的equals的方法\npublic boolean equals(Object obj) {\n    if (obj instanceof Integer) {\n        // 比较value\n        return value == ((Integer)obj).intValue();\n    }\n    return false;\n}\n```\n\n## hashcode\n\n```java\npublic static void main(String[] args) {\n    Set<Integer> set = new HashSet<>();\n    set.add(1);\n    set.add(1);\n    System.out.println(set.toString());\n}\n```\n\n**解释：**\n在添加 1 的时候，先判断**hashcode 是否相同**，如果相同，**继续判断 equals 比较值**，这样的好处是，**如果 hashcode 相同就直接返回 false 了，减少了一次 equals 的判断，因为通常 hashcode 的值判断是否相等比较快，而 equals 相对于 hashcode 来讲慢一些**。所以，如果不重写 hashcode，我们看到 `object` 的 `hashcode` 是对象的内存值，那么 `set` 添加 1 判断的时候，`hashcode` 永远不相等，那么就永远返回 `false`，不管添加 1，还是 2，都是 `false`。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 93,
        "like_count": 88
    },
    {
        "id": 175,
        "tag_id": 5,
        "tag_type": 1,
        "title": "5.系统进程调度",
        "content": "- FCFS(先来先服务，队列实现，非抢占的)：先请求 CPU 的进程先分配到 CPU\n- SJF(最短作业优先调度算法)：平均等待时间最短，但难以知道下一个 CPU 区间长度\n- 优先级调度算法(可以是抢占的，也可以是非抢占的)：优先级越高越先分配到 CPU，相同优先级先到先服务，存在的主要问题是：低优先级进程无穷等待 CPU，会导致无穷阻塞或饥饿；解决方案：老化\n- 时间片轮转调度算法(可抢占的)：队列中没有进程被分配超过一个时间片的 CPU 时间，除非它是唯一可运行的进程。如果进程的 CPU 区间超过了一个时间片，那么该进程就被抢占并放回就绪队列。\n- 多级队列调度算法：将就绪队列分成多个独立的队列，每个队列都有自己的调度算法，队列之间采用固定优先级抢占调度。其中，一个进程根据自身属性被永久地分配到一个队列中。\n- 多级反馈队列调度算法：与多级队列调度算法相比，其允许进程在队列之间移动：若进程使用过多 CPU 时间，那么它会被转移到更低的优先级队列；在较低优先级队列等待时间过长的进程会被转移到更高优先级队列，以防止饥饿发生。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 77,
        "like_count": 60
    },
    {
        "id": 188,
        "tag_id": 2,
        "tag_type": 1,
        "title": "5.MySQL的日志文件",
        "content": "> undolog\n> redolog\n> binlog\n\n## undolog\n\nundoLog 也就是我们常说的**回滚日志文件**   主要用于事务中执行失败，进行回滚，以及 MVCC 中对于数据历史版本的查看。\n\n由**引擎层的 InnoDB 引擎实现**，是**逻辑日志** ，记录数据修改被修改前的值，比如\\\"把 id=\\'B\\' 修改为 id = \\'B2\\' ，那么 undo 日志就会用来存放 id =\\'B\\'的记录”。\n\n## redolog\n\nredoLog 是重做日志文件是**记录数据修改之后的值** ，**用于持久化到磁盘中** 。\n\nredo log 包括两部分：**一是内存中的日志缓冲(redo log buffer)，该部分日志是易失性的** ；二是**磁盘上的重做日志文件(redo log file)** ，该部分日志是持久的。\n\n当一条数据需要更新时，InnoDB 会先将数据更新，然后记录 redoLog 在**内存**中，然后找个时间将 redoLog 的操作**执行到磁盘上的文件**上。\n\n## binlog\n\nbinlog 由**Mysql 的 Server 层实现** ，是**逻辑日志** ，记录的是 SQL 语句的**原始逻辑**。\n\n**用于复制和恢复在主从复制中，从库利用主库上的 binlog 进行重播(执行日志中记录的修改逻辑)，实现主从同步。**\n\n## binlog 和 redolog 的区别\n\n1. redolog 是在 InnoDB**存储引擎层**产生 ，而 binlog 是 MySQL 数据库的**上层服务层**产生的。\n2. 两种日志记录的内容形式不同。MySQL 的**binlog 是逻辑日志 **，其记录是对应的 SQL 语句 。而 innodb 存储引擎层面的重做日志是**物理日志** 。\n3. 两种日志与记录**写入磁盘的时间点不同**，binlog 日志**只在事务提交完成后进行一次写入 **。而 innodb 存储引擎的重做日志在事务进行中**不断地被写入**，并且日志不是随事务提交的顺序进行写入的 。\n4. binlog 不是循环使用，在写满或者重启之后，会生成新的 binlog 文件，redolog 是**循环使用** 。\n5. binlog 可以作为**恢复数据使用，主从复制搭建** ，redolog 作为异常宕机或者介质故障后的数据恢复使用 。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 119,
        "like_count": 49
    },
    {
        "id": 219,
        "tag_id": 6,
        "tag_type": 1,
        "title": "5.zookeeper的zab协议了解吗",
        "content": "## ZAB\n\n- ZAB 协议包括两种基本的模式：**崩溃恢复**和**消息广播**。\n- 当整个 Zookeeper 集群刚刚启动或**者 Leader 服务器宕机**、**重启**或者网络故障导致**少于过半的服务器与 Leader 服务器保持正常通信**时，所有服务器进入崩溃恢复模式，首先选举产生新的 Leader 服务器，然后集群中 Follower 服务器开始与新的 Leader 服务器进行数据同步。\n- 当集群中超过**半数机器与该 Leader 服务器完成数据同步**之后，退出恢复模式进入消息广播模式，Leader 服务器开始接收客户端的事务请求生成事物提案来进行事务请求处理。\n\n## zk 的 leader 选举算法和流程\n\n目前有 5 台服务器，每台服务器均没有数据，它们的编号分别是 1,2,3,4,5,按编号依次启动，它们的选择举过程如下：\n\n1. 服务器 1 启动，给自己投票，然后发投票信息，由于其它机器还没有启动所以它收不到反馈信息，服务器 1 的状态一直属于 Looking。\n2. 服务器 2 启动，给自己投票，同时与之前启动的服务器 1 交换结果，由于服务器 2 的编号大所以服务器 2 胜出，但此时投票数没有大于半数，所以两个服务器的状态依然是 LOOKING。\n3. 服务器 3 启动，给自己投票，同时与之前启动的服务器 1,2 交换信息，由于服务器 3 的编号最大所以服务器 3 胜出，此时投票数正好大于半数，所以服务器 3 成为 leader，服务器 1,2 成为 follower。\n4. 服务器 4 启动，给自己投票，同时与之前启动的服务器 1,2,3 交换信息，尽管服务器 4 的编号大，但之前服务器 3 已经胜出，所以服务器 4 只能成为 follower。\n5. 服务器 5 启动，后面的逻辑同服务器 4 成为 follower。\n\n[https://www.cnblogs.com/wuzhenzhao/p/9983231.html](https://www.cnblogs.com/wuzhenzhao/p/9983231.html)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 342,
        "like_count": 92
    },
    {
        "id": 245,
        "tag_id": 7,
        "tag_type": 2,
        "title": "5.null和undefined的区别",
        "content": "# null 和 undefined 的区别\n\n## 概述\n\nUndefined 和 Null 是 Javascript 中两种特殊的原始数据类型 (Primary Type)，它们都只有一个值，分别对应 undefined 和 null ，这两种不同类型的值，既有着不同的语义和场景，又表现出较为相似的行为\n\n## undefined\n\nundefined 的字面意思就是：未定义的值 。这个值的语义是，希望**表示一个变量最原始的状态，而非人为操作的结果 。** 这种原始状态会在以下 4 种场景中出现：\n\n- 声明了变量，但没有赋值\n\n```javascript\nvar foo;\nconsole.log(foo); // undefined\n```\n\n访问 foo，返回了 undefined，表示这个变量自从声明了以后，就从来没有使用过，也没有定义过任何有效的值，即处于一种原始而不可用的状态。\n\n- 访问对象上不存在的属性\n\n```javascript\nconsole.log(Object.foo); // undefined\nvar arr = [];\nconsole.log([0]); // undefined\n```\n\n访问 Object 对象上的 foo 属性，返回 undefined ， 表示 Object 上不存在或者没有定义名为 foo 的属性。数组中的元素在内部也属于对象属性，访问下标就等于访问这个属性，返回 undefined ，就表示数组中不存在这个元素。\n\n- 函数定义了形参，但没有传递实参\n\n```javascript\n// 函数定义了形参a\nfunction fn(a) {\n  console.log(a); // undefined\n}\nfn(); // 未传递实参\n```\n\n函数 fn 定义了形参 a， 但 fn 被调用时没有传递参数，因此，fn 运行时的参数 a 就是一个原始的、未被赋值的变量。\n\n- 使用 void 对表达式求值\n\n```javascript\nvoid 0; // undefined\nvoid false; // undefined\nvoid []; // undefined\nvoid null; // undefined\nvoid function fn() {}; // undefined\n```\n\nECMAScript 明确规定 void 操作符 对任何表达式求值都返回 undefined ，这和函数执行操作后没有返回值的作用是一样的，JavaScript 中的函数都有返回值，当没有 return 操作时，就默认返回一个原始的状态值，这个值就是 undefined，表明函数的返回值未被定义。\n\n因此，undefined 一般都来自于某个表达式最原始的状态值，不是人为操作的结果。当然，你也可以手动给一个变量赋值 undefined，但这样做没有意义，因为一个变量不赋值就是 undefined 。\n\n## null\n\nnull 的字面意思是：空值 。这个值的语义是，希望**表示 一个对象被人为的重置为空对象，而非一个变量最原始的状态 。** 在内存里的表示就是，栈中的变量没有指向堆中的内存对象，即：\n\n![](https://images2017.cnblogs.com/blog/849589/201708/849589-20170810192309683-590729765.png)\n\n当一个对象被赋值了 null 以后，原来的对象在内存中就处于游离状态，GC 会择机回收该对象并释放内存。因此，如果需要释放某个对象，就将变量设置为 null，即表示该对象已经被清空，目前无效状态。试想一下，如果此处把 null 换成 undefined 会不会感到别扭? 显然语义不通，其操作不能正确的表达其想要的行为。\n\n### null 的问题\n\n看这样一个例子：\n\n```javascript\ntypeof null == \\\"object\\\";\n```\n\nnull 有属于自己的类型 Null，而不属于 Object 类型，typeof 之所以会判定为 Object 类型，是因为 JavaScript 数据类型在底层都是以二进制的形式表示的，**二进制的前三位为 0 会被 typeof 判断为对象类型**，而 null 的二进制位恰好都是 0 ，因此，null 被误判断为 Object 类型。\n\n```javascript\n000 - 对象，数据是对象的应用\n1 - 整型，数据是 31 位带符号整数\n010 - 双精度类型，数据是双精度数字\n100 - 字符串，数据是字符串\n110 - 布尔类型，数据是布尔值\n```\n\n其实，我们可以通过另一种方法获取 null 的真实类型：\n\n```javascript\nObject.prototype.toString.call(null); // [object Null]\nObject.prototype.toString.call(undefined); // [object Undefined]\n```\n\n## 相似性\n\n虽然 undefined 和 null 的语义和场景不同，但总而言之，它们都表示的是一个**无效的值。** 因此，在 JS 中对这类值访问属性时，都会得到异常的结果：\n\n```javascript\nnull.toString(); // Cannot read property \\'toString\\' of null\nundefined.toString(); // Cannot read property \\'toString\\' of undefined\n```\n\nECMAScript 规范认为，既然 null 和 undefined 的行为很相似，并且都表示 一个无效的值，那么它们所表示的内容也具有相似性，即有\n\n```javascript\nundefined == null; // true\n```\n\n但 === 会返回 false ，因为全等操作 === 在比较相等性的时候，不会主动转换分项的数据类型，而两者又不属于同一种类型：\n\n```javascript\nundefined === null; // false，类型不相同\nundefined !== null; // true, 类型不相同\n```\n\n## 总结\n\n用一句话总结两者的区别就是：undefined 表示一个变量自然的、最原始的状态值，而 null 则表示一个变量被人为的设置为空对象，而不是原始状态。所以，在实际使用过程中，为了保证变量所代表的语义，不要对一个变量显式的赋值 undefined，当需要释放一个对象时，直接赋值为 null 即可。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 13,
        "like_count": 28
    },
    {
        "id": 1,
        "tag_id": 11,
        "tag_type": 2,
        "title": "6.XSS攻击，如何防范",
        "content": "# xss\n\nXSS 攻击，即跨站脚本攻击（Cross Site Scripting），它是 web 程序中常见的漏洞。 原理是攻击者往 web 页面里插入恶意的脚本代码（CSS 代码、JavaScript 代码等），当用户浏览该页面时，嵌入其中的脚本代码会被执行，从而达到恶意攻击用户的目的。如盗取用户 cookie，破坏页面结构、重定向到其他网站等。\n\n## xss 分类\n\n根据攻击的来源，XSS 攻击可分为存储型、反射型和 DOM 型三种。\n\n## xss 预防\n\n1. 输入过滤\n2. 预防存储型和反射型 XSS 攻击\n3. 预防 DOM 型 XSS 攻击\n\n## 其他预防\n\n- Content Security Policy\n- 输入内容长度控制\n\n参考：[https://cloud.tencent.com/developer/article/1410405](https://cloud.tencent.com/developer/article/1410405)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 215,
        "like_count": 30
    },
    {
        "id": 33,
        "tag_id": 4,
        "tag_type": 3,
        "title": "6.谈谈DNS解析过程",
        "content": "# 谈谈 DNS 解析过程\n\n![DNS解析过程-TzfQba](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/DNS解析过程-TzfQba.png)\n\n- 请求一旦发起，若是 chrome 浏览器，先在浏览器找之前**有没有缓存过的域名所对应的 ip 地址**，有的话，直接跳过 dns 解析了，若是没有，就会**找硬盘的 hosts 文件**，看看有没有，有的话，直接找到 hosts 文件里面的 ip\n\n[字节问了修改 hosts，浏览器会变吗？](https://blog.csdn.net/woshizhangliang999/article/details/51457864)\n\n- 如果本地的 hosts 文件没有能的到对应的 ip 地址，浏览器会发出一个**dns 请求到本地 dns 服务器**，**本地 dns 服务器一般都是你的网络接入服务器商提供**，比如中国电信，中国移动等。\n- 查询你输入的网址的 DNS 请求到达本地 DNS 服务器之后，**本地 DNS 服务器会首先查询它的缓存记录**，如果缓存中有此条记录，就可以直接返回结果，此过程是**递归的方式进行查询**。如果没有，本地 DNS 服务器还要向**DNS 根服务器**进行查询。\n- 本地 DNS 服务器继续向域服务器发出请求，在这个例子中，请求的对象是.com 域服务器。.com 域服务器收到请求之后，也不会直接返回域名和 IP 地址的对应关系，而是告诉本地 DNS 服务器，你的域名的解析服务器的地址。\n- 最后，本地 DNS 服务器向**域名的解析服务器**发出请求，这时就能收到一个域名和 IP 地址对应关系，本地 DNS 服务器不仅要把 IP 地址返回给用户电脑，还要把这个对应关系保存在缓存中，以备下次别的用户查询时，可以直接返回结果，加快网络访问。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 175,
        "like_count": 29
    },
    {
        "id": 42,
        "tag_id": 8,
        "tag_type": 2,
        "title": "6.css两栏布局和三栏布局",
        "content": "# css 两栏布局和三栏布局\n\n## 两栏布局\n\n1. 浮动布局\n2. 浮动布局+负外边距\n3. 绝对定位\n4. flex\n\n## 三栏布局\n\n1. 绝对定位\n2. 浮动+负外边距\n3. 浮动定位法\n4. flexbox\n5. 圣杯布局\n\n参考：[https://blog.csdn.net/crystal6918/article/details/55224670](https://blog.csdn.net/crystal6918/article/details/55224670)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 229,
        "like_count": 80
    },
    {
        "id": 55,
        "tag_id": 3,
        "tag_type": 1,
        "title": "6.Redis分布式锁",
        "content": "# 分布式锁\n\n> 毕竟判断和绑定座位（或者下单）非原子性，为了降低锁的粒度，可以将判断和绑定座位锁在一个事务里。集群：Redisson\n\n- Key 为 xx\\\\_座位号，过期时间为随机 1-5s（用 setex 的命令，该命令是 key 和过期时间是原子性的）\n- 每次先 Redis 中判断该 key 存在不存在，如果存在，要么阻塞，要么就返回给用户，座位已被选择。\n- 如果不存在，先上锁，然后再判断和绑定座位（或者下单）。其实这里有个隐藏的问题。如果绑定座位非常耗时，超过了过期时间 1-5s，就凉凉了。其实这里设置过期时间，就是防止一直因为某种原因阻塞而不释放锁\n- 前三步，少了个签证 value，如果不设置，那么当锁过期了，业务逻辑才走完，准备删除的时候，B 客户端获取到了该锁，但是 A 把 B 的 key 锁删除了，然而 B 还不知道。\n- 因此，要解决这个问题，可以设置 value 签证，结束的时候判断一次，该 value 是不是自己的 value，这样就不会误删。\n\n## RedLock 算法流程\n\n首先有这样的问题：\n\n1. 客户端 A 从 Master 上获取锁。\n2. 在锁未被复制到某 Slave 节点的时候，Master 节点 Down 掉了。\n3. 某 Slave 节点成为新的 Master。\n4. 客户端 B 可从新 Master 上获取锁。\n\n假设有 5 个实例\n\n1. 比如过期时间为 TTL：10min\n2. 记录当前时间：比如 T1 = 12:00\n3. 客户端分别向 5 个实例获取锁，比如申请锁的时间依次为：12:01...12:05,最后获取实例的锁为 T2:12:05（获取锁的超时时间要远远小于过期时间，防止死等。）\n4. 如果获取锁的实例大于 3 个（过半机制），那么就相当于获取到锁了，该锁的真正的有效时间为 TTL-(T2-T1) = 5min\n5. 如果客户端由于某些原因获取锁失败，便会开始解锁所有 redis 实例；因为可能已经获取了小于 3 个锁，必须释放，否则影响其他 client 获取锁\n\n[https://juejin.im/post/5cc165816fb9a03202221dd5](https://juejin.im/post/5cc165816fb9a03202221dd5)\n\n## zk 实现分布式锁\n\n[补充-Zookeeper 锁的实现](https://juejin.im/post/5c01532ef265da61362232ed)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 308,
        "like_count": 33
    },
    {
        "id": 67,
        "tag_id": 10,
        "tag_type": 2,
        "title": "6.Vuex是什么",
        "content": "# Vuex 是什么\n\nVuex 是专门为 Vue.js 设计的**状态管理库**，它采用**集中式存储管理应用的所有组件的状态**。\n\n包含以下几个部分：\n\n- state，驱动应用的数据源\n- view，以声明方式将 state 映射到视图\n- actions，响应在 view 上的用户输入导致的状态变化\n\n这是一个**状态自管理应用**，状态自管理？可以这样理解，state，view，action，三部分都写在了组件内，状态由应用组件各自管理，即**自己的状态自己管理**。\n\n更详细的可参考：[https://juejin.cn/post/6844903763249987591](https://juejin.cn/post/6844903763249987591)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 117,
        "like_count": 54
    },
    {
        "id": 101,
        "tag_id": 1,
        "tag_type": 1,
        "title": "6.简单介绍Object类中的方法",
        "content": "# Object\n\n```java\npublic final native Class<?> getClass();\n// 返回对象的哈希代码值。\npublic native int hashCode();\npublic boolean equals(Object obj)\n// 创建并返回此对象的副本。\nprotected native Object clone()\n// 返回对象的字符串表示形式。\npublic String toString()\n// 唤醒正在该对象的监视器上等待的单个线程。\npublic final native void notify();\n// 唤醒正在该对象的监视器上等待的全部线程。\npublic final native void notifyAll();\n// 使当前线程等待，直到另一个线程调用此对象的方法或方法。\npublic final native void wait();\n// 当垃圾回收确定不再有对对象的引用时，由对象上的垃圾回收器调用。\nprotected void finalize();\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 245,
        "like_count": 58
    },
    {
        "id": 178,
        "tag_id": 5,
        "tag_type": 1,
        "title": "6.虚拟内存",
        "content": "> 为什么操作系统引进虚拟内存？说白了，直接让一个进程全部放在主内存当中，太占用内存啦，以前的计算机的内存可没有那么大，并且程序也很多。所以在进程和主内存之间存在虚拟内存。可以[参考](https://draveness.me/whys-the-design-os-virtual-memory/)\n\n虚拟内存允许执行进程不必完全在内存中。虚拟内存的基本思想是：\n\n- 每个进程拥有独立的地址空间，这个空间被分为大小相等的多个块，称为页(Page)，每个页都是一段连续的地址。\n- 这些页被映射到物理内存，但并不是所有的页都必须在内存中才能运行程序。\n- 当程序引用到一部分在物理内存中的地址空间时，由硬件立刻进行必要的映射；当程序引用到一部分不在物理内存中的地址空间时，由操作系统负责将缺失的部分装入物理内存并重新执行失败的命令。这样，对于进程而言，逻辑上似乎有很大的内存空间，实际上其中一部分对应物理内存上的一块(称为帧，通常页和帧大小相等)，还有一些没加载在内存中的对应在硬盘上。\n\n举个小例子：\n吃饭。\n\n比如你和同学去聚餐，根据菜谱点了一堆的菜，有汤，有肉，有素材等。 大可不必一下子全做完一起送过来（如果桌子不给力，比较小，并且时间成本，饭菜都凉了等），比如，同学想吃肉哈？不想先喝汤，那就把肉类端上来，对吧？等同学又想喝汤了，就把汤做一下端过来。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 412,
        "like_count": 17
    },
    {
        "id": 187,
        "tag_id": 2,
        "tag_type": 1,
        "title": "6.MVCC的缺点",
        "content": "**MVCC 的缺点**:\n\nMVCC 在大多数情况下代替了行锁，实现了对读的非阻塞，读不加锁，读写不冲突。缺点是每行记录**都需要额外的存储空间，需要做更多的行维护和检查工作**。 要知道的，MVCC 机制下，会在更新前建立 undo log，根据各种策略读取时非阻塞就是 MVCC，undo log 中的行就是 MVCC 中的多版本。 而 undo log 这个关键的东西，**记载的内容是串行化的结果，记录了多个事务的过程，不属于多版本共存**。 这么一看，似乎 mysql 的 mvcc 也并没有所谓的多版本共存\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 336,
        "like_count": 69
    },
    {
        "id": 226,
        "tag_id": 6,
        "tag_type": 1,
        "title": "6.raft算法了解吗",
        "content": "## 分布式一致性\n\n想象一下，我们有一个单节点系统，且作为数据库服务器，然后存储了一个值（假设为 X）。然后，有一个客户端往服务器发送了一个值（假设为 8）。只要服务器接受到这个值即可，这个值在单节点上的一致性非常容易保证。\n\n但是，如果数据库服务器有多个节点呢？比如，如下图所示，有三个节点：a，b，c。这时候客户端对这个由 3 个节点组成的数据库集群进行操作时的值一致性如何保证，这就是分布式一致性问题。而 Raft 就是一种实现了分布式一致性的协议。\n\n## raft 概念\n\n- term\n\n任期，比如新的选举任期，即整个集群初始化时，或者新的 Leader 选举就会开始一个新的选举任期。\n\n- 大多数\n\n假设一个集群由 N 个节点组成，那么大多数就是至少 N/2+1。例如：3 个节点的集群，大多数就是至少 2；5 个节点的集群，大多数就是至少 3。\n\n- 状态\n\n每个节点有三种状态，且某一时刻只能是三种状态中的一种：Follower（左），Candidate（中），Leader（右）。假设三种状态不同图案如下所示：\n\n![](https://imgs.heiye.site/byte/1643297194524.png)\n\n初始化状态时，三个节点都是 Follower 状态，并且 term 为 0，如下图所示：\n\n![](https://imgs.heiye.site/byte/1643297237520.png)\n\n现在开始选举了\n\n## leader 选举\n\nLeader 选举需要某个节点发起投票，在确定哪个节点向其他节点发起投票之前，每个节点会分配一个随机的选举超时时间（election timeout）。\n\n在这个时间内，节点必须等待，不能成为 Candidate 状态。\n\n现在假设节点 a 等待 168ms , 节点 b 等待 210ms , 节点 c 等待 200ms 。\n\n由于 a 的等待时间最短，所以它会最先成为 Candidate，并向另外两个节点发起投票请求，希望它们能选举自己为 Leader：\n\n![](https://imgs.heiye.site/byte/1643297289597.png)\n\n另外两个节点收到请求后，假设将它们的投票返回给 Candidate 状态节点 a，节点 a 由于得到了大多数节点的投票，就会从 Candidate 变为 Leader。\n\n如下图所示，这个过程就叫做 Leader 选举（Leader Election）。接下来，这个分布式系统所有的改变都要先经过节点 a，即 Leader 节点：\n\n![](https://imgs.heiye.site/byte/1643297328521.png)\n\n如果某个时刻，Follower 不再收到 Leader 的消息，它就会变成 Candidate。然后请求其他节点给他投票（类似拉票一样）。其他节点就会回复它投票结果，如果它能得到大多数节点的投票，它就能成为新的 Leader。\n\n## 日志复制\n\n假设接下来客户端发起一个 SET 5 的请求，这个请求会首先由 leader 即节点 a 接收到，并且节点 a 写入一条日志。由于这条日志还没被其他任何节点接收，所以它的状态是 **uncommitted**。\n\n![](https://imgs.heiye.site/byte/1643297674962.png)\n\n为了提交这条日志，Leader 会将这条日志通过心跳消息复制给其他的 Follower 节点：\n\n![](https://imgs.heiye.site/byte/1643297732528.png)\n\n一旦有大多数节点成功写入这条日志，那么 Leader 节点的这条日志状态就会更新为 committed 状态，并且值更新为 5：\n\n![](https://imgs.heiye.site/byte/1643297765976.png)\n\nLeader 节点然后通知其他 Follower 节点，其他节点也会将值更新为 5。如下图所示，这个时候集群的状态是完全一致的，这个过程就叫做日志复制（Log Replication）：\n\n![](https://imgs.heiye.site/byte/1643297802741.png)\n\n## 两个超时\n\n### 选举超时\n\n为了防止 3 个节点（假设集群由 3 个节点组成）同时发起投票，会给每个节点分配一个随机的选举超时时间（Election Timeout），即从 Follower 状态成为 Candidate 状态需要等待的时间。在这个时间内，节点必须等待，不能成为 Candidate 状态。如下图所示，节点 C 优先成为 Candidate，而节点 A 和 B 还在等待中：\n\n![](https://imgs.heiye.site/byte/1643297872529.png)\n\n### 心跳超时\n\n如下图所示，节点 A 和 C 投票给了 B，所以节点 B 是 leader 节点。节点 B 会固定间隔时间向两个 Follower 节点 A 和 C 发送心跳消息，这个固定间隔时间被称为 heartbeat timeout。Follower 节点收到每一条日志信息都需要向 Leader 节点响应这条日志复制的结果：\n\n![](https://imgs.heiye.site/byte/1643297910530.png)\n\n## 重新选举\n\n选举过程中，如果 Leader 节点出现故障，就会触发重新选举。如下图所示，Leader 节点 B 故障（灰色），这时候节点 A 和 C 就会等待一个随机时间（选举超时），谁等待的时候更短，谁就先成为 Candidate，然后向其他节点发送投票请求：\n\n![](https://imgs.heiye.site/byte/1643297947611.png)\n\n如果节点 A 能得得到节点 C 的投票，加上自己的投票，就有大多数选票。那么节点 A 将成为新的 Leader 节点，并且 Term 即任期的值加 1 更新到 2：\n\n![](https://imgs.heiye.site/byte/1643297967630.png)\n\n需要说明的是，每个选举期只会选出一个 Leader。假设同一时间有两个节点成为 Candidate（它们随机等待选举超时时间刚好一样），如下图所示，并且假设节点 A 收到了节点 B 的投票，而节点 C 收到了节点 D 的投票：\n\n![](https://imgs.heiye.site/byte/1643298041542.png)\n\n这种情况下，就会触发一次新的选举，节点 A 和节点 B 又等待一个随机的选举超时时间，直到一方胜出：\n\n![](https://imgs.heiye.site/byte/1643298060936.png)\n\n我们假设节点 A 能得到大多数投票，那么接下来节点 A 就会成为新的 Leader 节点，并且任期 term 加 1：\n\n![](https://imgs.heiye.site/byte/1643298079514.png)\n\n## 网络分区\n\n此书省略...\n\n> 参考：https://zhuanlan.zhihu.com/p/66441389\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 298,
        "like_count": 81
    },
    {
        "id": 260,
        "tag_id": 7,
        "tag_type": 2,
        "title": "6.es6新增特性",
        "content": "# es6 新增特性\n\n## 变量的改变\n\n- **let 用来声明变量 (块级作用域)**\n- **const 用来表示常量 (块级作用域)**\n\n补充：块级作用域 就是在 **{}** 声明的常量、变量只能在 **{}** 内使用\n\n```javascript\nfor (let i = 0; i < 10; i++) {\n  func.push(() => console.log(i));\n}\n```\n\n上面 for 循环内的 let i 也是块级作用域\n\n## 模板字符串(``)\n\n- **字符串拼接。**将表达式嵌入字符串中进行拼接。用${}来界定。\n\n```javascript\nlet name = \\\"Mai\\\";\nconsole.log(`Hello ${name}`);\n// Hello Mai\n```\n\n- 字符串换行\n\n> 在 ES5 时我们通过反斜杠(\\\\)来做多行字符串或者字符串一行行拼接。es6 直接使用``\n\n```javascript\nconsole.log(`Hello\nMai`);\nHello;\nMai;\n```\n\n- 字符串新增方法\n\n```javascript\n// 1. includes()返回布尔值：表示是否找到了参数字符\nlet str = \\\"hahay\\\";\nconsole.log(str.includes(\\\"y\\\")); // true\n// 2. repeat(): 获取字符串重复n次\nlet s = \\\"he\\\";\nconsole.log(s.repeat(3)); // \\'hehehe\\'\n// 3. startsWith()返回布尔值：表示参数字符串是否在源字符串的头部\nconsole.log(\\\"lxy\\\".startsWith(\\\"l\\\")); //true\nconsole.log(\\\"lxy\\\".startsWith(\\\"x\\\")); //false\n// 4. endsWith()返回布尔值，表示参数字符串是否在源字符串的尾部\nconsole.log(str.includes(\\\"x\\\")); //true\nconsole.log(str.includes(\\\"z\\\")); //false\n```\n\n## 函数\n\n### 箭头函数\n\n```javascript\n(sender) => {};\n```\n\n- 不需要 function 关键字\n- 可以省略 return 关键字\n- 继承当前上下文的 this 关键字\n\n```javascript\n//例如：\n[1, 2, 3]\n  .map((x) => {\n    x + 1;\n  })\n\n  [\n    // 当函数仅有一个参数的时候可以省略()\n    (1, 2, 3)\n  ].map((x) => {\n    x + 1;\n  })\n\n  [\n    // 当函数体仅有一个表达式的时候可以省略 {}\n    (1, 2, 3)\n  ].map((x) => x + 1)\n\n  [\n    //等同于：\n    (1, 2, 3)\n  ].map(\n    function (x) {\n      return x + 1;\n    }.bind(this)\n  );\n```\n\n### 函数设置默认参数\n\n```javascript\nvar people = (name = \\\"afei\\\") => {\n  `boy ${name}`;\n};\n// 替代 下面写法\nname = name || \\\"afei\\\";\n```\n\n## 对象(字典)\n\n### 键值对重写 简写\n\n```javascript\nfunction people(name, age) {\n  return {\n    name,\n    age,\n  };\n}\n```\n\n### 对象字面量方法赋值\n\n```javascript\n// 省略冒号(:) 和function关键字\nconst people = {\n  name: \\\"lux\\\",\n  getName() {\n    console.log(this.name);\n  },\n};\n```\n\n### 提供浅赋值方法\n\n```javascript\nconst obj = Object.assign({}, objA, objB);\n```\n\n### 数据结构\n\n```javascript\n//对象\nconst people = {\n  name: \\\"afei\\\",\n  age: 18,\n};\nconst { name, age } = people;\nconsole.log(`${name} --- ${age}`); // afei 18\n//数组\nconst color = [\\\"red\\\", \\\"blue\\\"];\nconst [first, second] = color;\nconsole.log(first); //\\'red\\'\nconsole.log(second); //\\'blue\\'\n```\n\n### 数据展开\n\n- 组装对象或数组\n\n```javascript\n//数组\nconst color = [\\\"red\\\", \\\"yellow\\\"];\nconst colorful = [...color, \\\"green\\\", \\\"pink\\\"];\nconsole.log(colorful); //[red, yellow, green, pink]\n\n//对象\nconst alp = { fist: \\\"a\\\", second: \\\"b\\\" };\nconst alphabets = { ...alp, third: \\\"c\\\" };\nconsole.log(alphabets); //{ \\\"fist\\\": \\\"a\\\", \\\"second\\\": \\\"b\\\", \\\"third\\\": \\\"c\\\"\n```\n\n- 移除某几项\n\n```javascript\n//数组\nconst number = [1, 2, 3, 4, 5];\nconst [first, ...rest] = number;\nconsole.log(rest); //2,3,4,5\n//对象\nconst user = {\n  username: \\\"lux\\\",\n  gender: \\\"female\\\",\n  age: 19,\n  address: \\\"peking\\\",\n};\nconst { username, ...rest } = user;\nconsole.log(rest); //{\\\"address\\\": \\\"peking\\\", \\\"age\\\": 19, \\\"gender\\\": \\\"female\\\"\n```\n\n- 组合新的 Object\n\n```javascript\nconst first = {\n  a: 1,\n  b: 2,\n  c: 6,\n};\nconst second = {\n  c: 3,\n  d: 4,\n};\nconst total = { ...first, ...second };\nconsole.log(total); // { a: 1, b: 2, c: 3, d: 4 }\n```\n\n## 数组\n\n### forEach()\n\n```javascript\nvar arr = [1, 2, 3, 4];\narr.forEach((item, index, arr) => {\n  console.log(item); //结果为1,2,3,4\n});\n// 数组的遍历方法，无返回值，不改变原数组\n```\n\n### map()\n\n```javascript\nvar arr = [1, 2, 3, 4];\narr.map((item, index, arr) => {\n  return item * 10; //新数组为10,20,30,40\n});\n//map遍历数组，返回一个新数组，不改变原数组的值。\n```\n\n### filter()\n\n```javascript\nvar arr = [1, 2, 3, 4];\narr.filter((item, index, arr) => {\n  return item > 2; //新数组为[3,4]\n});\n//filter过滤掉数组中不满足条件的值，返回一个新数组，不改变原数组的值。\n```\n\n### reduce()\n\n```javascript\nvar arr = [1, 2, 3, 4];\narr.reduce((sum, item, index, arr) => {\n  // sum 上次循环返回的值，若为第一次循环值为 origin\n  // item 循环项\n  // index 循环下表\n  // arr 源数组\n  return sum + item;\n}, origin);\n//reduce 遍历数据求和。\n```\n\n### some()\n\n```javascript\nvar arr = [1, 2, 3, 4];\narr.some((item, index, arr) => {\n  return item > 3; //结果为true\n});\n//遍历数组每一项，有一项返回true,则停止遍历，结果返回true。不改变原数组\n```\n\n### every()\n\n```javascript\nvar arr = [1, 2, 3, 4];\narr.every((item, index, arr) => {\n  return item > 1; //结果为false\n});\n//遍历数组每一项，每一项返回true,则最终结果为true。当任何一项返回false时，停止遍历，返回false。不改变原数组\n// 与some()方法互补\n```\n\n## Import 和 export\n\n...\n\n## Promise\n\nPromise 是一个构造函数，自己身上有 all、reject、resolve 这几个眼熟的方法，原型上有 then、catch 等同样很眼熟的方法。\n\n```javascript\n// 简单语法\nnew Promise((resolve, reject) => {\n  // 承诺成功\n  resolve(\\\"afei\\\");\n  // 承诺失败\n  reject(\\\"fail\\\");\n  // 承诺成功 和 失败 只能执行一个\n})\n  .then(\n    (result) => {\n      console.log(result); // afei\n    },\n    (error) => {\n      console.log(error); // fail\n    }\n  )\n  .catch();\n// catch 方法 作用有两个\n// 1 js代码执行发生错误时 执行  和try...catch 类似\n// 1 reject() 执行时 执行 和then第二个回调一样 写代码时可以选其一\n```\n\n### **all()方法**\n\n多个异步操作执行完后才执行回调\n\n```javascript\nPromise.all([promise1, promise2, promise3]).then((results) => {\n  // results 是上面多个promise回调结果的数组\n});\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 328,
        "like_count": 70
    },
    {
        "id": 8,
        "tag_id": 11,
        "tag_type": 2,
        "title": "7.csrf、ddos和sql注入",
        "content": "# csrf、ddos 和 sql 注入\n\n## csrf\n\nCSRF（Cross Site Request Forgery, 跨站域请求伪造）是一种网络的攻击方式，CSRF 是一种危险的恶意请求利用，攻击者利用用户本地的 cookie，冒充用户发送一些恶意的请求，而这些请求对服务器来说是完全合法的。可能造成的后果是攻击者冒用用户名义发送消息、盗取账号、消耗账号内资源等。\n\n**解决方法：**\n这里 csrf 攻击的防御采用以下方案：在用户发送请求之前，先通过 ajax 请求访问后台，生成一个随机数作为一个 token，并将这个 token 保存在 session，同时返回到前台页面，然后前台页面将这个 token 放在请求中，发送到后台，被过滤器拦截，判断请求中带的 token 和 session 中的 token 进行匹配，如果一致，则转发请求到真正的 controller 中处理。\n\n## 什么是 DDos 攻击\n\n分布式拒绝服务(DDoS:Distributed Denial of Service)攻击指借助于客户/服务器技术，将多个计算机联合起来作为攻击平台，对一个或多个目标发动 DDoS 攻击，从而成倍地提高拒绝服务攻击的威力。\n\n比如：\n一群恶霸试图让对面那家有着竞争关系的商铺无法正常营业，他们会采取什么手段呢？恶霸们扮作普通客户一直拥挤在对手的商铺，赖着不走，真正的购物者却无法进入；或者总是和营业员有一搭没一搭的东扯西扯，让工作人员不能正常服务客户；此外恶霸们完成这些坏事有时凭单干难以完成，需要叫上很多人一起。网络安全领域中 DoS 和 DDoS 攻击就遵循着这些思路。\n\n## 浅谈 SQL 注入和防御\n\nSql 注入攻击是通过将恶意的 Sql 查询或添加语句插入到应用的输入参数中，再在后台 Sql 服务器上解析执行进行的攻击，是目前对数据库进行攻击的最常用手段之一。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 305,
        "like_count": 47
    },
    {
        "id": 36,
        "tag_id": 4,
        "tag_type": 3,
        "title": "7.DNS查询方式",
        "content": "# DNS 查询方式\n\n## 递归解析\n\n当局部 DNS 服务器自己不能回答客户机的 DNS 查询时，它就需要向其他 DNS 服务器进行查询。此时有两种方式。**局部 DNS 服务器自己负责向其他 DNS 服务器进行查询，一般是先向该域名的根域服务器查询，再由根域名服务器一级级向下查询**。最后得到的查询结果返回给局部 DNS 服务器，再由局部 DNS 服务器返回给客户端。\n\n## 迭代解析\n\n当局部 DNS 服务器自己不能回答客户机的 DNS 查询时，也可以通过迭代查询的方式进行解析。局部 DNS 服务器不是自己向其他 DNS 服务器进行查询，**而是把能解析该域名的其他 DNS 服务器的 IP 地址返回给客户端 DNS 程序**，客户端 DNS 程序再继续向这些 DNS 服务器进行查询，直到得到查询结果为止。也就是说，迭代解析只是帮你找到相关的服务器而已，而不会帮你去查。比如说：baidu.com 的服务器 ip 地址在 192.168.4.5 这里，你自己去查吧，本人比较忙，只能帮你到这里了。\n\n# DNS 负载均衡\n\n当一个网站有足够多的用户的时候，假如每次请求的资源都位于同一台机器上面，那么这台机器随时可能会蹦掉。处理办法就是用 DNS 负载均衡技术，它的原理是在**DNS 服务器中为同一个主机名配置多个 IP 地址,在应答 DNS 查询时,DNS 服务器对每个查询将以 DNS 文件中主机记录的 IP 地址按顺序返回不同的解析结果,将客户端的访问引导到不同的机器上去,使得不同的客户端访问不同的服务器**,从而达到负载均衡的目的｡例如可以根据每台机器的负载量，该机器离用户地理位置的距离等等。\n\n# 为什么域名解析用 UDP 协议？\n\n因为 UDP 快啊！UDP 的 DNS 协议只要一个请求、一个应答就好了。而使用基于 TCP 的 DNS 协议要三次握手、发送数据以及应答、四次挥手。但是 UDP 协议传输内容不能超过 512 字节。不过客户端向 DNS 服务器查询域名，一般返回的内容都不超过 512 字节，用 UDP 传输即可。\n\n# 为什么区域传送用 TCP 协议？\n\n因为 TCP 协议可靠性好啊！你要从主 DNS 上复制内容啊，你用不可靠的 UDP？ 因为 TCP 协议传输的内容大啊，你用最大只能传 512 字节的 UDP 协议？万一同步的数据大于 512 字节，你怎么办？\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 195,
        "like_count": 34
    },
    {
        "id": 50,
        "tag_id": 8,
        "tag_type": 2,
        "title": "7.相对定位和绝对定位",
        "content": "# 相对定位和绝对定位\n\n相对定位和绝对定位，不改变元素的大小形状，只改变元素的位置。\n\n相对定位和绝对定位是通过 position 属性来控制的，position 属性的值为下面几种：\n\n1. absolute\n2. relative\n3. fixed\n4. static\n5. inherit\n\n## 相对定位\n\n相对定位的参考点，是它自己定位(移动)之前的位置，不是相对于父节点，也不是相对于平级节点。\n\n## 绝对定位\n\n绝对定位的参考对象就不是自己了，而是最近的已设置了 position 的祖先元素，并且 position 不是 static，而是 absolute 或者 relative。首先看它的父元素是否设置了 position 为 absolute 或者 relative，如果有就按父元素的左上角作为参考点，如果没有则再找祖父元素、曾祖父元素、高祖父元素，如果都没有就以页面文档的初始位置作为参考点。\n\n参考：[https://blog.csdn.net/gnail_oug/article/details/77564684](https://blog.csdn.net/gnail_oug/article/details/77564684)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 50,
        "like_count": 56
    },
    {
        "id": 57,
        "tag_id": 3,
        "tag_type": 1,
        "title": "7.Redis架构演进",
        "content": "# Redis 架构演进-带着问题找答案\n\n## 背景\n\n> 起初，我仅仅是想学习一下 Redis 的单 Reactor 模型而已，没想到看到了一篇很有意思的文章，带着问题逐渐知道 Redis 的演变架构。\n\n怎么说，咱也用过 Redis，咱也就当 MySQL 撑不住的时候才会想到 Redis 的好（缓存），但从来没有认真思考他为什么这么强悍，能让所有的三高项目离不开他的伟大之处。那 Redis 到底是如何稳定、高性能地提供服务的？不妨我们动脑思考思考。\n\n- 我使用 Redis 的场景很简单，只使用单机版 Redis 会有什么问题吗？\n- 如果我的 Redis 故障宕机了，数据丢失了怎么办？如何才能保证我们的业务应用不受到影响？\n- 为什么需要主从集群？究竟出现了什么问题，才能让我们采用主从集群？\n- 什么事分片集群？什么场景下需要分片集群？\n\n简单看过一些书籍-《Redis 的设计与实现》，想必大家都有所耳闻，但我们并没有真正的思考为什么需要**数据持久化、主从复制、哨兵**这些概念，这些又有什么区别和联系呢？\n\n![](https://imgs.heiye.site/byte/1644820704900.png)\n\n## 单机版 Redis\n\n首先，我们从最简单的场景开始。\n\n假设我们现在有一个业务也用，需要依然怒 Redis 来提高应用的性能，此时可以选择部署一个单机版的 Redis 来使用，就像这样：\n\n![](https://imgs.heiye.site/byte/1644821220880.png)\n\n从图中可以看到此架构非常简单，仅仅是将 Redis 当做缓存来使用，从 MySQL 中查询数据，然后写入到 Redis 中，之后业务应用再从 Redis 中读取这些数据，由于 Redis 的所有数据存在内存中，因此速度极快。\n\n这样的场景可是业务体量不大，此架构模型基本可以满足咱们的需求，是不是超级简单？\n\n好景不长，随着时间的推移，业务体量逐渐发展起来了，Redis 中存储的数据也越来越多，当时，此时业务应用对 Redis 的依赖也越来越重。\n\n但是，倘若有一天，Redis 因为某些原因宕机了，这时业务流量，都会请求到后端 MySQL 上，这会导致 MySQL 的压力剧增，**缓存雪崩**，严重的话会压垮 MySQL。\n\n这时，你的方案可能是：赶紧重启 Redis，让它可以继续提供服务。\n\n但是，因为之前 Redis 中的数据都在内存中，尽管你现在把 Redis 重启了，之前的数据也都丢失了。\n\n重启后的 Redis 虽然可以正常工作，但是由于 Redis 中没有任何数据，业务流量还是都会请求到后端 MySQL 上，MySQL 的压力还是很大。\n\n怎么办？\n\n既然 Redis 只把数据存储在内存中，那是否可以把**这些数据也写一份到磁盘上**呢？\n\n如果采用这种方式，当 Redis 重启时，我们把磁盘中的数据快速恢复到内存中，这样它就可以继续正常提供服务了。\n\n是的，这是一个很好的解决方案，这个把内存数据写到磁盘上的过程，就是「数据持久化」。\n\n## 数据持久化：有备无患\n\n现在，设想的 Redis 数据持久化是这样的：\n\n![](https://imgs.heiye.site/byte/1644822433771.png)\n\n但是，数据持久化具体应该怎么做呢？\n\n最容易想到的一个方案是：Redis 每一次执行写操作，除了写内存之外，同时也写一份到磁盘上，就像这样：\n\n![](https://imgs.heiye.site/byte/1644822500648.png)\n\n确实，这是最简单直接的方案。\n\n但，仔细想一下，这个方案存在一个问题：客户端的每次写操作，即需要**写内存，又需要写磁盘**，而写磁盘的耗时相对于写内存来说，还要是要**慢**很多，这百分百会影响到 Redis 的性能。\n\n如何解决这个问题呢？\n\n我们可以这样优化：Redis **写内存由主线程**来做，写内存完成后就给客户端返回结果，然后 Redis 用**另一个线程去写磁盘**，这样就可以避免主线程写磁盘对性能的影响。\n\n这确实是一个好方案。除此之外，我们可以换个角度，思考一下还有什么方式可以持久化数据？\n\n这时你就要结合 Redis 的使用场景来考虑了。\n\n回忆一下，我们在使用 Redis 时，通常把它用作什么场景？\n\n是的，缓存。\n\n把 Redis 当做缓存来用，意味着尽管 Redis 中没有保存全量数据，对于不在缓存中的数据，我们的业务应用依旧可以通过查询后端数据库得到结果，只不过查询后端数据的速度会慢一点而已，但对业务结果其实是没有影响的。\n\n基于这个特点，我们的 Redis 数据持久化还可以用「数据快照」的方式来做。\n\n那什么是数据快照呢？\n\n简单来讲，你可以这么理解：\n\n> 1. 你把 Redis 想象成一个水杯，向 Redis 写入数据，就相当于往这个杯子里倒水。\n> 2. 此时你拿一个相机给这个水杯拍一张照片，拍照的这一瞬间，照片中记录到这个水杯中水的容量，就是水杯的数据快照。\n\n![](https://imgs.heiye.site/byte/1644822934826.png)\n\n相当于，Redis 的数据快照，是记录某一时刻下 Redis 中的数据，然后只需要把这个数据快照写道磁盘上就可。\n\n它的优势在于，只在需要持久化时，把数据「一次性」写入磁盘，其它时间都不需要操作磁盘。\n\n基于这个方案，我们可以定时给 Redis 做数据快照，把数据持久化到磁盘上。\n\n![](https://imgs.heiye.site/byte/1644823233667.png)\n\n其实，上面说的这些持久化方案，就是 Redis 的「RDB」和「AOF」：\n\n- RDB：只持久化**某一时刻的数据快照到磁盘上**（创建一个子进程来做）\n- AOF：**每一次写操作都持久到磁盘**（主线程写内存，根据策略可以配置由主线程还是子线程进行数据持久化）\n  它们的区别除了上面讲到的，还有以下特点：\n\n> 1. RDB 采用二进制 + 数据压缩的方式写磁盘，这样文件体积小，数据恢复速度也快。\n> 2. AOF 记录的是每一次写命令，数据最全，但文件体积大，数据恢复速度慢。\n\n如果让你来选择持久化方案，你可以这样选择：\n\n> 1. 如果你的业务对于数据丢失不敏感，采用 RDB 方案持久化数据。\n> 2. 如果你的业务对数据完整性要求比较高，采用 AOF 方案持久化数据。\n\n假设你的业务对 Redis 数据完整性要求比较高，选择了 AOF 方案，那此时你又会遇到这些问题：\n\n> 1. AOF 记录每一次写操作，随着时间增长，AOF 文件体积会越来越大。\n> 2. 这么大的 AOF 文件，在数据恢复时变得非常慢。\n\n这怎么办？数据完整性要求变高了，恢复数据也变困难了？有没有什么方法，可以缩小文件体积？提升恢复速度呢？\n\n我们继续来分析 AOF 的特点。\n\n由于 AOF 文件中记录的都是每一次写操作，但对于同一个 key 可能会发生多次修改，我们只保留最后一次被修改的值，是不是也可以？\n\n是的，这就是我们经常听到的「AOF rewrite」，你也可以把它理解为 AOF 「瘦身」。\n\n我们可以对 AOF 文件定时 rewrite，避免这个文件体积持续膨胀，这样在恢复时就可以缩短恢复时间了。\n\n![](https://imgs.heiye.site/byte/1644823775665.png)\n\n再进一步思考一下，还有没有办法继续缩小 AOF 文件？\n\n回顾一下前面讲到的，RDB 和 AOF 各自的特点：\n\n> 1、RDB 以二进制 + 数据压缩方式存储，文件体积小。\n> 2、AOF 记录每一次写命令，数据最全。\n\n我们可否利用它们各自的优势呢？\n\n当然可以，这就是 Redis 的「混合持久化」。\n\n具体来说，当 AOF rewrite 时，Redis 先以 RDB 格式在 AOF 文件中写入一个数据快照，再把在这期间产生的每一个写命令，追加到 AOF 文件中。因为 RDB 是二进制压缩写入的，这样 AOF 文件体积就变得更小了。\n\n![](https://imgs.heiye.site/byte/1644825232740.png)\n\n此时，你在使用 AOF 文件恢复数据时，这个恢复时间就会更短了！\n\n注意：Redis 4.0 以上版本才支持混合持久化。\n\n这么一番优化，你的 Redis 再也不用担心实例宕机了，当发生宕机时，你就可以用持久化文件快速恢复 Redis 中的数据。\n\n但这样就没问题了吗？\n\n仔细想一下，虽然我们已经把持久化的文件优化到最小了，但在恢复数据时依旧是需要时间的，在这期间你的业务应用还是会受到影响，这怎么办？\n\n我们来分析有没有更好的方案。\n\n一个实例宕机，只能用恢复数据来解决，那我们是否可以部署多个 Redis 实例，然后让这些实例数据保持实时同步，这样当一个实例宕机时，我们在剩下的实例中选择一个继续提供服务就好了。\n\n没错，这个方案就是接下来要讲的「主从复制：多副本」。\n\n## 主从复制：多副本\n\n此时，你可以部署多个 Redis 实例，架构模型就变成了这样：\n\n![](https://imgs.heiye.site/byte/1644825569568.png)\n\n我们这里把实时读写的节点叫做 master，另一个实时同步数据的节点叫做 slave。\n\n采用多副本的方案，它的优势是：\n\n1. 缩短不可用时间：master 发生宕机，我们可以手动把 slave 提升为 master 继续提供服务。\n2. 提升读性能：让 slave 分担一部分读请求，提升应用的整体性能。\n\n![](https://imgs.heiye.site/byte/1644825719747.png)\n\n这个方案不错，不仅节省了数据恢复的时间，还能提升性能，那它有什么问题吗？\n\n你可以思考一下。\n\n其实，它的问题在于：当 master 宕机时，我们需要「手动」把 slave 提升为 master，这个过程也是需要花费时间的。\n\n虽然比恢复数据要快得多，但还是需要人工介入处理。一旦需要人工介入，就必须要算上人的反应时间、操作时间，所以，在这期间你的业务应用依旧会受到影响。\n\n怎么解决这个问题？我们是否可以把这个切换的过程，变成自动化呢？\n\n对于这种情况，我们需要一个「故障自动切换」机制，这就是我们经常听到的「哨兵」所具备的能力。\n\n## 哨兵：故障自动切换\n\n现在，我们可以引入一个「观察者」，让这个观察者去实时监测 master 的健康状态，这个观察者就是「哨兵」。\n\n具体如何做？\n\n> 1. 哨兵每隔一段时间询问 master 是否正常\n> 2. master 正常回复，表示状态正常，回复超时表示异常\n> 3. 哨兵发现异常，发起主从切换\n\n![](https://imgs.heiye.site/byte/1644826007997.png)\n\n有了这个方案，就不需要人去介入处理了，一切就变得自动化了，是不是很爽？\n\n但这里还有一个问题，如果 master 状态正常，但这个哨兵在询问 master 时，它们之间的网络发生了问题，那这个哨兵可能会误判。\n\n这个问题怎么解决？\n\n答案是，我们可以部署多个哨兵，让它们分布在不同的机器上，它们一起监测 master 的状态，流程就变成了这样：（过半机制...）\n\n1、哨兵每隔一段时间询问 master 是否正常。\n\n2、master 正常回复，表示状态正常，回复超时表示异常。\n\n3、一旦有一个哨兵判定 master 异常（不管是否是网络问题），就询问其它哨兵，如果多个哨兵（设置一个阈值）都认为 master 异常了，这才判定 master 确实发生了故障。\n\n4、多个哨兵经过协商后，判定 master 故障，则发起主从切换。\n\n所以，我们用多个哨兵互相协商来判定 master 的状态，这样一来，就可以大大降低误判的概率。\n\n哨兵协商判定 master 异常后，这里还有一个问题：由哪个哨兵来发起主从切换呢？\n\n答案是，选出一个哨兵「领导者」，由这个领导者进行主从切换。\n\n问题又来了，这个领导者怎么选？\n\n想象一下，在现实生活中，选举是怎么做的？\n\n是的，投票。\n\n在选举哨兵领导者时，我们可以制定这样一个选举规则：\n\n> 1. 每个哨兵都询问其它哨兵，请求对方为自己投票。\n> 2. 每个哨兵只投票给第一个请求投票的哨兵，且只能投票一次。\n> 3. 首先拿到超过半数投票的哨兵，当选为领导者，发起主从切换。\n\n其实，这个选举的过程就是我们经常听到的：**分布式系统领域中的「共识算法」**。\n\n**什么是共识算法（分布式一致性协议）？**\n\n我们在多个机器部署哨兵，它们需要共同协作完成一项任务，所以它们就组成了一个「分布式系统」。\n\n在分布式系统领域，多个节点如何就一个问题达成共识的算法，就叫共识算法。\n\n在这个场景下，多个哨兵共同协商，选举出一个都认可的领导者，就是使用共识算法完成的。\n\n这个算法还规定节点的数量必须是奇数个，这样可以保证系统中即使有节点发生了故障，剩余超过「半数」的节点状态正常，依旧可以提供正确的结果，也就是说，这个算法还兼容了存在故障节点的情况。\n\n> 共识算法在分布式系统领域有很多，例如 Paxos、Raft，哨兵选举领导者这个场景，使用的是 Raft 共识算法，因为它足够简单，且易于实现。\n\n现在，我们用多个哨兵共同监测 Redis 的状态，这样一来，就可以避免误判的问题了，架构模型就变成了这样：\n\n![](https://imgs.heiye.site/byte/1644826277704.png)\n\n好了，到这里我们先小结一下。\n\n你的 Redis 从最简单的单机版，经过数据持久化、主从多副本、哨兵集群，这一路优化下来，你的 Redis 不管是性能还是稳定性，都越来越高，就算节点发生故障，也不用担心了。\n\n你的 Redis 以这样的架构模式部署，基本上就可以稳定运行很长时间了。\n\n...\n\n随着时间的发展，你的业务体量开始迎来了爆炸性增长，此时你的架构模型，还能够承担这么大的流量吗？\n\n我们一起来分析一下：\n\n> 1. 稳定性：Redis 故障宕机，我们有哨兵 + 副本，可以自动完成主从切换\n> 2. 读性能：读请求量增长，我们可以再部署多个 slave，读写分离，分担读压力\n> 3. 写性能：写请求量增长，但我们只有一个 master 实例，这个实例达到瓶颈怎么办？\n\n看到了么，当你的写请求量越来越大时，一个 master 实例可能就无法承担这么大的写流量了。\n\n要想完美解决这个问题，此时你就需要考虑使用「分片集群」了。\n\n## 分片集群：横向扩展\n\n什么是「分片集群」？\n\n简单来讲，一个实例扛不住写压力，那我们是否可以部署多个实例，然后把这些实例按照一定规则组织起来，把它们当成一个整体，对外提供服务，这样不就可以解决集中写一个实例的瓶颈问题吗？\n\n所以，现在的架构模型就变成了这样：\n\n![](https://imgs.heiye.site/byte/1644826575708.png)\n\n现在问题又来了，这么多实例如何组织呢？\n\n我们制定规则如下：\n\n> 1. 每个节点各自存储一部分数据，所有节点数据之和才是全量数据。\n> 2. 制定一个路由规则，对于不同的 key，把它路由到固定一个实例上进行读写。\n\n而分片集群根据路由规则所在位置的不同，还可以分为两大类：\n\n> 1. 客户端分片\n> 2. 服务端分片\n\n客户端分片指的是，key 的路由规则放在客户端来做，就是下面这样：\n\n![](https://imgs.heiye.site/byte/1644826792997.png)\n\n这个方案的缺点是，客户端需要维护这个路由规则，也就是说，你需要把路由规则写到你的业务代码中。\n\n如何做到不把路由规则耦合在业务代码中呢？\n\n你可以这样优化，把这个路由规则封装成一个模块，当需要使用时，集成这个模块就可以了。\n\n这就是 Redis Cluster 的采用的方案。\n\n![](https://imgs.heiye.site/byte/1644826913871.png)\n\n当然，Redis Cluster 内置了哨兵逻辑，无需再部署哨兵。\n\n当你使用 Redis Cluster 时，你的业务应用需要使用配套的 Redis SDK，这个 SDK 内就集成好了路由规则，不需要你自己编写了。\n\n再来看服务端分片。\n\n这种方案指的是，路由规则不放在客户端来做，而是在客户端和服务端之间增加一个「中间代理层」，这个代理就是我们经常听到的 Proxy。\n\n而数据的路由规则，就放在这个 Proxy 层来维护。\n\n这样一来，你就无需关心服务端有多少个 Redis 节点了，只需要和这个 Proxy 交互即可。\n\nProxy 会把你的请求根据路由规则，转发到对应的 Redis 节点上，而且，当集群实例不足以支撑更大的流量请求时，还可以横向扩容，添加新的 Redis 实例提升性能，这一切对于你的客户端来说，都是透明无感知的。\n\n业界开源的 Redis 分片集群方案，例如 Twemproxy、Codis 就是采用的这种方案。\n\n![](https://imgs.heiye.site/byte/1644827208691.png)\n\n至此，当你使用分片集群后，对于未来更大的流量压力，都可以从容面对了！\n\n思路清晰独特...\n\n## 总结\n\n此处省略...[滑稽]\n\n## 参考\n\n- [https://jishuin.proginn.com/p/763bfbd4d516](https://jishuin.proginn.com/p/763bfbd4d516)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 147,
        "like_count": 73
    },
    {
        "id": 69,
        "tag_id": 10,
        "tag_type": 2,
        "title": "7.组件之间通信的方式",
        "content": "# 组件之间通信的方式\n\n1. `props/$emit`\n2. `$emit/$on`\n3. `vuex`\n4. `$attr/$listeners`\n5. `provide/inject`\n6. `$parent/$children与ref`\n\n详细请看：[https://juejin.cn/post/6844903887162310669](https://juejin.cn/post/6844903887162310669)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 262,
        "like_count": 11
    },
    {
        "id": 122,
        "tag_id": 1,
        "tag_type": 1,
        "title": "7.String、StringBuffer和StringBuilder的区别",
        "content": "# String、StringBuffer 和 StringBuilder 的区别\n\n面试官：说一下你知道的`String、StringBuffer`和`StringBuilder`的区别\n\n我：其实总结说一下就行，三点不同\n\n## 可变性\n\n- 简单的来说：`String` 类中使用 `final` 关键字修饰字符数组来保存字符串，`private final char value[]`，所以 `String` 对象是不可变的。（还不是为了线程安全和 JVM 缓存速度问题）\n\n- `StringBuilder` 与 `StringBuffer` 都继承自 `AbstractStringBuilder` 类，在 `AbstractStringBuilder` 中也是使用字符数组保存字符串 char[]value 但是没有用 `final` 关键字修饰，所以这两种对象都是可变的。\n\n## 线程安全\n\n- `String` 中的对象是不可变的，也就可以理解为常量，线程安全。\n\n- `AbstractStringBuilder` 是 `StringBuilder` 与 `StringBuffer` 的公共父类，定义了一些字符串的基本操作，如 `expandCapacity`、`append`、`insert`、`indexOf` 等公共方法。`StringBuffer` 对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的。`StringBuilder` 并没有对方法进行加同步锁，所以是非线程安全的。\n\n## 性能\n\n- 每次对 `String` 类型进行改变的时候，都会生成一个新的 `String` 对象，然后将指针指向新的 `String` 对象。（人家目的是不可变，你一直让人家干可变的事情，那岂不是很难受？）\n\n- `StringBuffer` 每次都会对 `StringBuffer` 对象本身进行操作，而不是生成新的对象并改变对象引用。相同情况下使用 `StringBuilder` 相比使用 `StringBuffer` 仅能获得 10%~15% 左右的性能提升，但却要冒多线程不安全的风险。\n\n## 总结\n\n- 操作少量的数据: 适用 `String`\n\n- 单线程操作字符串缓冲区下操作大量数据: 适用 `StringBuilder`\n\n- 多线程操作字符串缓冲区下操作大量数据: 适用 `StringBuffer`\n\n> 注意：这里可能要问 final 关键字来解释一波 String 的 char 前面所加的 final 的好处\n\n## final 关键字\n\n面试官：有木有想过为什么 `String` 的 `char` 前面加了 `final`，有什么好处？\n\n我：答这个问题，你要先说 `final` 是干啥的\n\n`final` 关键字主要用在三个地方：变量、方法、类。\n\n- 对于一个 `final` 变量，如果是**基本数据类型的变量，则其数值一旦在初始化之后便不能更改**；如果是引用类型的变量，则在对其初始化之后便**不能再让其指向另一个对象**。\n\n- 当用 `final` 修饰一个类时，表明**这个类不能被继承**。`final` 类中的所有成员方法都会被隐式地指定为 `final` 方法。\n\n- 使用 `final` 方法的原因有两个。第一个原因是把**方法锁定**，以防任何继承类修改它的含义；第二个原因是**效率**。在早期的 `Java` 实现版本中，会将 `final` 方法转为内嵌调用。但是如果方法过于庞大，可能看不到内嵌调用带来的任何性能提升（现在的 `Java` 版本已经不需要使用 `final` 方法进行这些优化了）。类中所有的 private 方法都隐式地指定为 final。\n\n**final 修饰有啥好处**：（面试官想听这三点）\n\n- final 的关键字**提高了性能**，JVM 和 java 应用会**缓存 final 变量**；\n\n- final 变量可以在多线程环境下保持**线程安全**；\n\n- 使用 final 的关键字提高了性能，JVM 会对方法变量类进行优化；\n\n> 这里可能让解释 String 对象和 JVM 的常量池\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 21,
        "like_count": 57
    },
    {
        "id": 183,
        "tag_id": 5,
        "tag_type": 1,
        "title": "7.页面置换算法",
        "content": "> 地址映射过程中，若在页面中发现所要访问的页面不再内存中，则产生缺页中断。当发生缺页中断时操作系统必须在内存选择一个页面将其移出内存，以便为即将调入的页面让出空间。而用来选择淘汰哪一页的规则叫做页面置换算法。常见的置换算法有：\n\n- 最佳置换算法（OPT）：所选择的被换出的页面将是最长时间内不再被访问，通常可以保证获得最低的缺页率。是一种理论上的算法，因为无法知道一个页面多长时间不再被访问。\n- 先进先出置换算法（FIFO）：选择换出的页面是最先进入的页面。该算法会将那些经常被访问的页面换出，导致缺页率升高。\n- 第二次机会算法：当页面被访问 (读或写) 时设置该页面的 R 位为 1。需要替换的时候，检查最老页面的 R 位。如果 R 位是 0，那么这个页面既老又没有被使用，可以立刻置换掉；如果是 1，就将 R 位清 0，并把该页面放到链表的尾端，修改它的装入时间使它就像刚装入的一样，然后继续从链表的头部开始搜索。\n- 最近最久未使用（LRU）算法：为了实现 LRU，需要在内存中维护一个所有页面的链表。当一个页面被访问时，将这个页面移到链表表头。这样就能保证链表表尾的页面是最近最久未访问的。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 191,
        "like_count": 30
    },
    {
        "id": 186,
        "tag_id": 2,
        "tag_type": 1,
        "title": "7.读写分离原理",
        "content": "**读写分离原理**：\n\n主库（`master`）将变更写**binlog**日志，然后从库（slave）连接到主库之后，从库有一个**IO 线程**，将主库的 binlog 日志**拷贝到自己本地**，写入一个中继日志中。接着从库中有一个 SQL 线程会从中继日志读取 binlog，然后执行 binlog 日志中的内容，也就是在自己本地再次执行一遍 SQL，这样就可以保证自己跟主库的数据是一样的。\n\n这里有一个非常重要的一点，就是从库同步主库数据的过程是**串行化**的，也就是说**主库上并行**的操作，在从库上会串行执行。所以这就是一个非常重要的点了，由于从库从主库拷贝日志以及串行执行 SQL 的特点，在高并发场景下，从库的数据一定会比主库慢一些，是有延时的。所以经常出现，刚写入主库的数据可能是读不到的，要过几十毫秒，甚至几百毫秒才能读取到。\n\n而且这里还有另外一个问题，就是如果主库突然宕机，然后恰好数据还没同步到从库，那么有些数据可能在从库上是没有的，有些数据可能就丢失了。\n\n所以 mysql 实际上在这一块有两个机制，一个是**半同步复制**，用来解决主库数据丢失问题；一个是**并行复制**，用来解决主从同步延时问题。\n\n所谓并行复制，指的是从库**开启多个线程，并行读取 relay log 中不同库的日志**，然后并行重放不同库的日志，这是库级别的并行。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 279,
        "like_count": 32
    },
    {
        "id": 239,
        "tag_id": 6,
        "tag_type": 1,
        "title": "7.分布式一致性哈希算法",
        "content": "# 分布式一致性哈希算法\n\n> 哈希算法大家都知道，那何为分布式一致性哈希算法呢？\n\n普通哈希：\n\n哈希一般都是将一个大数字取模然后分散到不同的桶里，假设我们只有两个桶，有 2、3、4、5 四个数字，那么模 2 分桶的结果就是：\n\n![](https://imgs.heiye.site/byte/1643298242596.png)\n\n这时我们嫌桶太少要给哈希表扩容加了一个新桶，这时候所有的数字就需要模 3 来确定分在哪个桶里，结果就变成了：\n\n![](https://imgs.heiye.site/byte/1643298340855.png)\n\n可以看到新加了一个桶后所有数字的分布都变了，这就意味着哈希表的每次扩展和收缩都会导致所有条目分布的重新计算，这个特性在某些场景下是不可接受的。\n\n比如分布式的存储系统，每个桶就相当于一个机器，文件分布在哪台机器由哈希算法来决定，这个系统想要加一台机器时就需要停下来等所有文件重新分布一次才能对外提供服务，而当一台机器掉线的时候尽管只掉了一部分数据，但所有数据访问路由都会出问题。\n\n这样整个服务就无法平滑的扩缩容，成为了有状态的服务。\n\n要想实现无状态化，就要用到一致性哈希了，一致性哈希中假想我们有很多个桶，先定一个小目标比如 7 个，但一开始真实还是只有两个桶，编号是 3 和 6。\n\n哈希算法还是同样的取模，只不过现在分桶分到的很可能是不存在的桶，那么就往下找找到第一个真实存在的桶放进去。\n\n这样 2 和 3 都被分到了编号为 3 的桶， 4 和 5 被分到了编号为 6 的桶。\n\n![](https://imgs.heiye.site/byte/1643298506593.png)\n\n这时候再添加一个新的桶，编号是 4，取模方法不变还是模 7：\n\n![](https://imgs.heiye.site/byte/1643298529006.png)\n\n因为 3 号桶里都是取模小于等于 3 的，4 号桶只需要从 6 号桶里拿走属于它的数字就可以了，这种情况下只需要调整一个桶的数字就可分成了重新分布。\n\n可以想象下即使有 1 亿个桶，增加减少一个桶也只会影响一个桶的数据分布。\n\n这样增加一个机器只需要和他后面的机器同步一下数据就可以开始工作了，下线一个机器需要先把他的数据同步到后面一台机器再下线。\n\n如果突然掉了一台机器也只会影响这台机器上的数据。实现中可以让**每台机器同步一份自己前面机器的数据**，这样即使掉线也不会影响这一部分的数据服务。\n\n这里还有个小问题要是编号为 6 的机桶下线了，它没有后一个桶了，数据该咋办？为了解决这个问题，实现上通常把哈希空间做成环状，这样 3 就成了 6 的下一桶，数据给 3 就好了：\n\n![](https://imgs.heiye.site/byte/1643298789523.png)\n\n用一致性哈希还能实现部分的分布式系统无锁化，每个任务有自己的编号，由于哈希算法的确定性，分到哪个桶也是确定的就不存在争抢，也就不需要分布式锁了。\n\n既然一致性哈希有这么多好的特性，那为啥主流的哈希都是非一致的呢？\n\n主要一个原因在于查找效率上，普通的哈希查询一次哈希计算就可以找到对应的桶了，算法时间复杂度是 O(1)，而一致性哈希需要将排好序的桶组成一个链表，然后一路找下去，k 个桶查询时间复杂度是 O(k)，所以通常情况下的哈希还是用不一致的实现。\n\n当然 O(k) 的时间复杂度对于哈希来说还是不能忍的，想一下都是 O(k) 这个量级了用哈希的意义在哪里？\n\n既然是在排好序的桶里查询，很自然的想法就是二分了，能把时间复杂度降到 O(logk)，然而桶的组合需要不断的增减，所以是个链表的实现，二分肯定就不行了，还好可以用跳转表进行一个快速的跳转也能实现 O(logk) 的时间复杂度。\n\n在这个跳转表中，每个桶记录距离自己 1，2，4 距离的数字所存的桶，这样不管查询落在哪个节点上，对整个哈希环上任意的查询一次都可以至少跳过一半的查询空间，这样递归下去很快就可以定位到数据是存在哪个桶上。\n\n比如选择数字放在哪个桶，上面的介绍里是选择顺着数字下去出现的第一个桶，其实也可以选择距离这个数字最近的桶，这样实现和后面的跳转表规则也会有变化。\n\n同样跳转表也有多种不同的算法实现，感兴趣的可以去看一下 CAN，Chord，Tapestry，Pastry 这四种 DHT 的实现。\n\n> 参考：https://zhuanlan.zhihu.com/p/24440059\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 183,
        "like_count": 51
    },
    {
        "id": 243,
        "tag_id": 7,
        "tag_type": 2,
        "title": "7.深拷贝和浅拷贝",
        "content": "# 深拷贝和浅拷贝\n\n## 回顾\n\njs 中两大数据类型\n\n- 基本类型 Undefined、Null、Boolean、Number、String\n- 引用类型 Object Array\n\n## 基本类型\n\n基本类型就是值类型, 存放在栈 (stack) 内存中的简单数据段，数据大小确定，内存空间大小可以分配\n\n## 引用类型\n\n引用类型, 存放在堆 (heap) 内存中的对象，变量实际保存的是一个指针，这个指针指向另一个位置\n\n我们可以看一个例子\n\n```javascript\nlet obj = {\n  name: \\\"每日一题\\\",\n  value: \\\"JS\\\",\n};\n\nlet obj2 = obj;\nlet obj3 = obj.name;\n\nconsole.log(obj2.value); //JS\nconsole.log(obj3); // 每日一题\n\n// 改变obj2,obj3\nobj2.value = \\\"CSS\\\";\nobj3 = \\\"HTML\\\";\n\nconsole.log(obj.value); // CSS  从这里可以看出， obj2和obj  指向了同一个对象\nconsole.log(obj.name); // 每日一题 这里可以看出， obj3和obj完全独立\n```\n\n## 浅拷贝\n\n概念: 对于字符串类型，**浅拷贝是对值的复制**，对于对象来说，**浅拷贝是对对象地址的复制**, 也就是拷贝的结果是两个变量指向同一个对象\n\n## 深拷贝\n\n概念: **深拷贝开辟一个新的栈，两个对象对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性**\n\n## 实现深拷贝\n\n##### JSON.stringify()\n\n```javascript\nlet obj = {\n  name: \\\"每日一题\\\",\n  value: \\\"JS\\\",\n};\nconsole.log(JSON.parse(JSON.stringify(obj))); // 深拷贝了一份obj\n\nlet obj = {\n  name: \\\"每日一题\\\",\n  value: \\\"JS\\\",\n  fn: function () {},\n};\nconsole.log(JSON.parse(JSON.stringify(obj))); // obj.fn 丢失\n```\n\n缺点: JSON.stringify() 无法正确处理函数\n\n### 递归拷贝\n\n```javascript\n// 思路就是遍历赋值给新的对象\nfunction deepClone(initalObj, finalObj) {\n  var obj = finalObj || {};\n  for (var i in initalObj) {\n    var prop = initalObj[i]; // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况\n    if (prop === obj) {\n      continue;\n    }\n    if (typeof prop === \\\"object\\\") {\n      obj[i] = prop.constructor === Array ? [] : {};\n      arguments.callee(prop, obj[i]);\n    } else {\n      obj[i] = prop;\n    }\n  }\n  return obj;\n}\nvar str = {};\nvar obj = { a: { a: \\\"hello\\\", b: 21 } };\ndeepClone(obj, str);\nconsole.log(str.a);\n```\n\n### 使用 Object.create()方法\n\n直接使用 var newObj = Object.create(oldObj)，可以达到深拷贝的效果。\n\n```javascript\nfunction deepClone(initalObj, finalObj) {\n  var obj = finalObj || {};\n  for (var i in initalObj) {\n    var prop = initalObj[i]; // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况\n    if (prop === obj) {\n      continue;\n    }\n    if (typeof prop === \\\"object\\\") {\n      obj[i] = prop.constructor === Array ? [] : Object.create(prop);\n    } else {\n      obj[i] = prop;\n    }\n  }\n  return obj;\n}\n```\n\n## 总结\n\njs 有五种基本数据类型，string,number,boolean,null,undefind。这五种类型的赋值，就是值传递。特殊类型对象的赋值是将对象地址的引用赋值。这时候修改对象中的属性或者值，会导致所有引用这个对象的值改变。如果想要真的复制一个新的对象，而不是复制对象的引用，就要用到对象的深拷贝。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 482,
        "like_count": 25
    },
    {
        "id": 3,
        "tag_id": 11,
        "tag_type": 2,
        "title": "8.浏览器同源策略及跨域的解决方法",
        "content": "# 浏览器同源策略及跨域的解决方法\n\n## 同源策略\n\n同源策略（Same origin policy）是一种约定，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。可以说 Web 是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。\n\n它的核心就在于它认为自任何站点装载的信赖内容是不安全的。当被浏览器半信半疑的脚本运行在沙箱时，它们应该只被允许访问来自同一站点的资源，而不是那些来自其它站点可能怀有恶意的资源。\n\n所谓同源是指：域名、协议、端口相同。\n\n下表是相对于 http://www.laixiangran.cn/home/index.html 的同源检测结果：\n\n![同源-1-zonglF](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/同源-1-zonglF.jpg)\n\n另外，同源策略又分为以下两种：\n\n1. DOM 同源策略：禁止对不同源页面 DOM 进行操作。这里主要场景是 iframe 跨域的情况，不同域名的 iframe 是限制互相访问的。\n2. XMLHttpRequest 同源策略：禁止使用 XHR 对象向不同源的服务器地址发起 HTTP 请求。\n\n## 为什么跨越限制\n\n因为存在浏览器同源策略，所以才会有跨域问题。那么浏览器是出于何种原因会有跨域的限制呢。其实不难想到，跨域限制主要的目的就是为了用户的上网安全。\n\n如果浏览器没有同源策略，会存在什么样的安全问题呢。下面从 DOM 同源策略和 XMLHttpRequest 同源策略来举例说明：\n\n**如果没有 DOM 同源策略，也就是说不同域的 iframe 之间可以相互访问，那么黑客可以这样进行攻击**：\n\n1. 做一个假网站，里面用 iframe 嵌套一个银行网站 http://mybank.com。\n2. 把 iframe 宽高啥的调整到页面全部，这样用户进来除了域名，别的部分和银行的网站没有任何差别。\n3. 这时如果用户输入账号密码，我们的主网站可以跨域访问到 http://mybank.com 的 dom 节点，就可以拿到用户的账户密码了。\n\n**如果没有 XMLHttpRequest 同源策略，那么黑客可以进行 CSRF（跨站请求伪造） 攻击**：\n\n1. 用户登录了自己的银行页面 http://mybank.com，http://mybank.com 向用户的 cookie 中添加用户标识。\n2. 用户浏览了恶意页面 http://evil.com，执行了页面中的恶意 AJAX 请求代码。\n3. http://evil.com 向 http://mybank.com 发起 AJAX HTTP 请求，请求会默认把 http://mybank.com 对应 cookie 也同时发送过去。\n4. 银行页面从发送的 cookie 中提取用户标识，验证用户无误，response 中返回请求数据。此时数据就泄露了。\n5. 而且由于 Ajax 在后台执行，用户无法感知这一过程。\n\n## 跨域的解决方法\n\n1. CORS（跨域资源共享）\n   CORS（Cross-origin resource sharing，跨域资源共享）是一个 W3C 标准，定义了在必须访问跨域资源时，浏览器与服务器应该如何沟通。CORS 背后的基本思想，就是使用自定义的 HTTP 头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功，还是应该失败。\n\n2. JSONP 跨域\n\n由于 script 标签不受浏览器同源策略的影响，允许跨域引用资源。因此可以通过动态创建 script 标签，然后利用 src 属性进行跨域，这也就是 JSONP 跨域的基本原理。\n\n详细跨域的方法参考：[https://juejin.cn/post/6844903681683357710](https://juejin.cn/post/6844903681683357710)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 198,
        "like_count": 64
    },
    {
        "id": 17,
        "tag_id": 4,
        "tag_type": 3,
        "title": "8.TCP是什么",
        "content": "`TCP（Transmission Control Protocol 传输控制协议）`是一种面向连接的、可靠的、基于字节流的传输层通信协议。",
        "publish_time": "2022-09-29 23:37",
        "view_count": 292,
        "like_count": 83
    },
    {
        "id": 48,
        "tag_id": 8,
        "tag_type": 2,
        "title": "8.重绘和回流",
        "content": "# 重绘和回流\n\n## 前沿\n\n1. 浏览器使用流式布局模型\n2. 浏览器会把 HTML 解析呈 DOM，把 CSS 解析呈 CSSOM，DOM 和 CSSOM 合并就产生了 Render Tree\n3. 有了 RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上\n4. 由于浏览器使用流式布局，对 Render Tree 的计算通常只需要遍历一次就可以完成，但 table 及其内部元素除外，他们可能需要多次计算，通常要花 3 倍于同等元素的时间，这也是为什么避免使用 table 布局的原因之一。\n\n总之：回流必将引起重绘，重绘不一定会引起回流。\n\n## 回流\n\n当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。\n\n会导致回流的操作：\n\n- 页面首次渲染\n- 浏览器窗口大小发生改变\n- 元素尺寸或位置发生改变\n- 元素内容变化（文字数量或图片大小等）\n- 元素字体大小变化\n- 添加或者删除可见的 DOM 元素\n- 激活 CSS 伪类（例如：`:hover`）\n\n一些常用会导致回流的属性和方法：\n\n- clientWidth、clientHeight、clientTop、clientLeft\n- offsetWidth、offsetHeight、offsetTop、offsetLeft\n- scrollWidth、scrollHeight、scrollTop、scrollLeft\n- scrollIntoView()、scrollIntoViewIfNeeded()\n- getComputedStyle()\n- getBoundingClientRect()\n- scrollTo()\n\n## 重绘\n\n当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。\n\n## 性能影响\n\n**回流比重绘的代价要更高。**\n\n有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。\n现代浏览器会对频繁的回流或重绘操作进行优化：\n\n浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。\n\n## 如何避免\n\n### css\n\n- 避免使用 table 布局\n- 尽可能在 DOM 树的最末端改变 class\n- 避免设置多层内联样式\n- 将动画效果应用到 position 属性为 absolute 或 fixed 的元素上\n- 避免使用 css 表达式\n\n### js\n\n- 避免频繁操作样式，最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性。\n- 避免频繁操作 DOM，创建一个 documentFragment，在它上面应用所有 DOM 操作，最后再把它添加到文档中。\n- 也可以先为元素设置 display: none，操作结束后再把它显示出来。因为在 display 属性为 none 的元素上进行的 DOM 操作不会引发回流和重绘。\n- 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。\n- 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 60,
        "like_count": 40
    },
    {
        "id": 59,
        "tag_id": 3,
        "tag_type": 1,
        "title": "8.Redis主从复制原理",
        "content": "# Redis 主从复制原理\n\n> 但愿每一个人都像星星一样安详而从容地，不断沿着既定的目标走完自己的路程。\n> 在现在的中间件架构中，无论是 MySQL、Redis 还是 RocketMQ 中的 broker 组件等，存在主从架构，那么有了为什么会有主从架构？\n\n## 背景\n\n假如，你现在有一个项目，需要使用到缓存，在体量不大的时候，采取了如下的架构：\n\n![](https://imgs.heiye.site/byte/1645433994348.png)\n\n从图上看，属实非常简单，一个 redis 单机版就可以满足读写。\n\n假如有一天，读请求开始增多的情况下，redis 承受的压力剧增，需要适当的调整一下架构，比如：我们可以专门提供一读请求的 Redis 服务？类似于下面的结构：\n\n![](https://imgs.heiye.site/byte/1645434517308.png)\n\n但开始思考了，如何将 master 的数据同步到 slave 呢？又是如何保证数据一致性呢？\n\n我们来回顾一下 MySQL 的主从同步原理是什么？\n\n简单来讲，主库（master）将变更写**binlog** 日志，然后从库（slave）连接到主库之后，从库有一个**IO 线程** ，将主库的 binlog 日志**拷贝到自己本地** ，写入一个**中继日志**中。接着从库中有一个 SQL 线程会从中继日志读取 binlog，然后执行 binlog 日志中的内容，也就是在自己本地再次执行一遍 SQL，这样就可以保证自己跟主库的数据是一样的。\n\nMySQL 需要借助一个中间文件来同步，那么 Redis 是否可以借助某个文件来同步？\n\n众所周知：Redis 的持久化的方式有 RDB 和 AOF 两种方式，这两个方式可以作为介质来同步。\n\n![](https://imgs.heiye.site/byte/1645436458938.png)\n\n简单说明一下 RDB 和 AOF 的特点，不再详细的赘述了：\n\n- RDB：只持久化**某一时刻的数据快照到磁盘上**（创建一个子进程来做）\n- AOF：**每一次写操作都持久到磁盘**（主线程写内存，根据策略可以配置由主线程还是子线程进行数据持久化）\n\n它们的区别除了上面讲到的，还有以下特点：\n\n1. RDB 采用二进制 + 数据压缩的方式写磁盘，这样文件体积小，数据恢复速度也快。\n2. AOF 记录的是每一次写命令，数据最全，但文件体积大，数据恢复速度慢。\n\n如果让你来选择持久化方案，你可以这样选择：\n\n1. 如果你的业务对于数据丢失不敏感，采用 RDB 方案持久化数据。\n2. 如果你的业务对数据完整性要求比较高，采用 AOF 方案持久化数据。\n\n假设你的业务对 Redis 数据完整性要求比较高，选择了 AOF 方案，那此时你又会遇到这些问题：\n\n1. AOF 记录每一次写操作，随着时间增长，AOF 文件体积会越来越大。\n2. 这么大的 AOF 文件，在数据恢复时变得非常慢。\n\n根据以上特点：**于主从同步来说，主从刚刚连接的时候，进行全量同步（RDB）；全同步结束后，进行增量同步(AOF)。**\n\n## 主从复制的工作原理\n\n其实就是一句话：主从刚刚连接的时候，进行**全量同步**（RDB）；全同步结束后，进行**增量同步**(AOF)。\n\n主从复制完整的工作流程分为以下**三个阶段**。每一段都有自己的内部工作流程，那么我们会对这三个过程进行谈论。\n\n1. 建立连接过程：这个过程就是 slave 跟 master 连接的过程（同步前，不得连接？）\n2. 数据同步过程：是 master 给 slave 同步数据的过程（连接好了，不得赶紧同步？）\n3. 命令传播过程：是反复同步数据（数据无时无刻在变化，持续同步）\n\n所以，简单来讲，三个阶段的图示：\n\n![](https://imgs.heiye.site/byte/1645436941549.png)\n\n### 第一阶段\n\n既然第一阶段是连接，那么你就会想，那该怎么连接呢？连接需要什么条件:双方的 ip 、port 和建立使用的协议等。\n\n1. 设置 master 的地址和端口，保存 master 的信息\n2. 建立 socket 连接\n3. 持续发送 ping 命令\n4. 身份验证\n5. 发送 slave 端口信息\n\n在建立连接的过程中，从节点会保存 master 的地址和端口、主节点 master 保存从节点 slave 的端口。\n\n### 第二阶段\n\n![](https://imgs.heiye.site/byte/1645447186400.png)\n\n1. 发送指令：psync2\n2. 执行 bgsave\n3. 创建缓冲区\n4. 生成 RDB 文件，通过 socket 发送给 slave\n5. 接收 RDB，执行 RDB 恢复过程\n6. 发送命令告知 RDB 恢复完成\n7. 发送复制缓冲区信息\n8. 接收信息，执行 bgrewriteaof，恢复数据\n\n注意：从节点第一次连接主节点时，先会执行一次**全量复制**这次的全量复制是无法避免的。 全量复制执行完成后，主节点就会发送复制**积压缓冲区的数据**，然后从节点就会执行 **bgrewriteaof** 恢复数据，这也就是部分复制。 在这个阶段提到了三个新点，全量复制、部分复制、复制缓冲积压区。\n\n### 第三方阶段\n\n当 master 数据库被修改后，主从服务器的数据不一致后，此时就会让主从数据同步到一致，这个过程称之为命令传播。 master 会将接收到的数据变更命令发送给 slave，slave 接收命令后执行命令，让主从数据达到一致。 命令传播阶段的**部分复制**：\n\n- 在命令传播阶段出现断网的情况，或者网络抖动时会导致连接断开（connection lost）\n- 这个时候主节点 master 还是会继续往 replbackbuffer（复制缓冲积压区）写数据\n- 从节点会继续尝试连接主机（connect to master）\n- 当从节点把自己的 runid 和复制偏移量发送给主节点，并且执行 pysnc 命令同步\n- 如果 master 判断偏移量是在复制缓冲区范围内，就会返回 continue 命令。并且发送复制缓冲区的数据给从节点。\n- 从节点接收数据执行 bgrewriteaof，恢复数据\n\n### 心跳机制\n\n在命令传播阶段是，主节点与从节点之间一直都需要进行信息互换，使用**心跳机制进行维护**，实现主节点和从节点连接保持在线。\n\n- master 心跳\n\n  - 指令：ping\n  - 默认 10 秒进行一次，是由参数 repl-ping-slave-repiod 决定的\n  - 主要做的事情就是判断从节点是否在线\n  - 可以使用 info replication 来查看从节点租后一次连接事件的间隔，lag 为 0 或者为 1 就是正常状态。\n\n- slave 心跳任务\n  - 指令：replication ack {offset}\n  - 每秒执行一次\n  - 主要做的事情是给**主节点发送自己的复制偏移量**，从主节点获取到最新的数据变更命令，还做一件事就是判断**主节点是否在线**。\n\n注意：主节点为保障数据稳定性，**当从节点挂掉的数量或者延迟过高时，将会拒绝所有信息同步**。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 152,
        "like_count": 85
    },
    {
        "id": 62,
        "tag_id": 10,
        "tag_type": 2,
        "title": "8.v-if和v-show的区别",
        "content": "# v-if/v-show 的区别\n\n- `v-if` 是动态添加，当值为 `false` 时，是完全移除该元素，即 `dom` 树中不存在该元素。\n- `v-show` 仅是隐藏 `/` 显示，值为 `false` 时，该元素依旧存在于 `dom` 树中。若其原有样式设置了 `display`: `none` 则会导致其无法正常显示。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 215,
        "like_count": 81
    },
    {
        "id": 140,
        "tag_id": 1,
        "tag_type": 1,
        "title": "8.聊一下final关键字",
        "content": "## final 关键字\n\n面试官：有木有想过为什么 `String` 的 `char` 前面加了 `final`，有什么好处？\n\n我：答这个问题，你要先说 `final` 是干啥的\n\n`final` 关键字主要用在三个地方：变量、方法、类。\n\n- 对于一个 `final` 变量，如果是**基本数据类型的变量，则其数值一旦在初始化之后便不能更改**；如果是引用类型的变量，则在对其初始化之后便**不能再让其指向另一个对象**。\n\n- 当用 `final` 修饰一个类时，表明**这个类不能被继承**。`final` 类中的所有成员方法都会被隐式地指定为 `final` 方法。\n\n- 使用 `final` 方法的原因有两个。第一个原因是把方法锁定，以防任何继承类修改它的含义；第二个原因是效率。在早期的 `Java` 实现版本中，会将 `final` 方法转为内嵌调用。但是如果方法过于庞大，可能看不到内嵌调用带来的任何性能提升（现在的 `Java` 版本已经不需要使用 `final` 方法进行这些优化了）。类中所有的 private 方法都隐式地指定为 final。\n\n**final 修饰有啥好处**：（面试官想听这三点）\n\n- `final` 的关键字**提高了性能**，`JVM` 和 `java` 应用会**缓存 final 变量**；\n\n- `final` 变量可以在多线程环境下保持**线程安全**；\n\n- 使用 `final` 的关键字提高了性能，`JVM` 会对方法变量类进行优化；\n\n> 这里可能让解释 String 对象和 JVM 的常量池\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 415,
        "like_count": 33
    },
    {
        "id": 180,
        "tag_id": 5,
        "tag_type": 1,
        "title": "8.死锁",
        "content": "# 死锁的条件\n\n所以：死锁的条件？\n\n- **互斥条件**：该资源任意一个时刻只由一个线程占用。(同一时刻，这个碗是我的，你不能碰)\n- **请求与保持条件**：一个进程因请求资源而阻塞时，对已获得的资源保持不放。（我拿着这个碗一直不放）\n- **不剥夺条件**:线程已获得的资源在末使用完之前不能被其他线程强行剥夺，只有自己使用完毕后才释放资源。（我碗中的饭没吃完，你不能抢，释放权是我自己的，我想什么时候放就什么时候放）\n- **循环等待条件**:若干进程之间形成一种头尾相接的循环等待资源关系。（我拿了 A 碗，你拿了 B 碗，但是我还想要你的 B 碗，你还想我的 A 碗）比喻成棒棒糖也阔以。\n\n面试官：所以解决死锁的办法是？\n\n我：好的，没毛病\n\n- 预防死锁：\n  - **资源一次性分配**：破坏请求和保持条件。\n  - **可剥夺资源**：当进程新申请的资源不满足时，释放已经分配的资源。破坏不可剥夺条件\n  - **资源有序分配**：系统给进程编号，按某一顺序申请资源，释放资源则反序释放。破坏循环等待条件。\n- 避免死锁：银行家算法：分配资源前先评估风险，会不会在分配后导致死锁。　即分配给一个进程资源的时候，该进程能否全部返还占用的资源。\n- 检测死锁：建立资源分配表和进程等待表。\n- 解除死锁：可以直接撤销死锁进程，或撤销代价最小的进程。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 121,
        "like_count": 77
    },
    {
        "id": 194,
        "tag_id": 2,
        "tag_type": 1,
        "title": "8.索引类型",
        "content": "# 索引类型\n\n我：ok，先说一下**索引类型**：\n\n- FULLTEXT：即为全文索引，目前只有 MyISAM 引擎支持。其可以在 CREATE TABLE ，ALTER TABLE ，CREATE INDEX 使用，不过目前只有 CHAR、VARCHAR ，TEXT 列上可以创建全文索引。\n- HASH：由于 HASH 的唯一及类似键值对的形式，很适合作为索引。 HASH 索引可以一次定位，不需要像树形索引那样逐层查找,因此具有极高的效率。但是，这种高效是有条件的，即只在“=”和“in”条件下高效，对于范围查询、排序及组合索引仍然效率不高。\n- BTREE：BTREE 索引就是一种将索引值按一定的算法，存入一个树形的数据结构中（二叉树），每次查询都是从树的入口 root 开始，依次遍历 node，获取 leaf。这是 MySQL 里默认和最常用的索引类型。\n- RTREE\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 241,
        "like_count": 78
    },
    {
        "id": 211,
        "tag_id": 6,
        "tag_type": 1,
        "title": "8.布隆过滤器了解吗",
        "content": "# 布隆过滤器\n\n> 是一个二进制向量数据结构，当时专门解决数据查询问题。\n\n> 缓存穿透：绕过 Redis 服务器，**直接进入后台数据库查询的攻击方式** ，我们就称之为缓存穿透。缓存穿透攻击，是指恶意用户在短时内大量查询不存在的数据，导致大量请求被送达数据库进行查询，当请求数量超过数据库负载上限时，使系统响应出现高延迟甚至瘫痪的攻击行为，就是缓存穿透攻击。\n> 预防缓存穿透，那不得不提今天的主题：布隆过滤器\n\n简单来说布隆过滤器：其主旨是采用一个很长的二进制数组，通过一系列的 Hash 函数来确定该数据是否存在。\n\n布隆过滤器本质上是一个 n 位的二进制数组。你也知道二进制只有 0 和 1 来表示，针对于当前我们的场景。这里我模拟了一个二进制数组，其每一位它的初始值都是 0。\n\n## 布隆过滤器的原理\n\n### 1.首先若干次 Hash 来确定其位置\n\n我们提到作为当前的商城，假设有 1000 个商品编号，从 1~1000。作为布隆过滤器，在初始化的时候，实际上就是对每一个商品编号进行若干次 Hash 来确定它们的位置。\n\n“1”号商品计算：\n\n比如说针对于当前的“1”编号，我们对其执行了三次 Hash。所谓 Hash 函数就是将数据代入以后确定一个具体的位置。\n\n- Hash 1 函数：它会定位到二进制数组的索引为 1 上，并将其数值从 0 改为 1；\n\n- Hash 2 函数：它定位到索引为 5 的位置，并将从 0 改为 1；\n\n- Hash 3 函数：定位到索引为 99 的位置上，将其从 0 改为 1。\n\n“2”号商品计算：\n\n那 1 号商品计算完以后，该轮到 2 号商品。2 号商品经过三次 Hash 以后，分别定位到索引为 1、3 以及 98 号位置上。\n\n注意：原始数据中 1 号位因为刚才已经变成了 1，现在它不变；而 3 号位和 98 号位原始数据从 0 变为 1。\n\n这里又衍生出一个 Hash 新规则：如果在 Hash 后，原始位它是 0 的话，将其从 0 变为 1；如果本身这一位就是 1 的话，则保持不变。\n\n“1000”号商品计算：\n\n此时 2 号商品也处理完了，我们继续向后 3、4、5、6、7、8 直到编号达到了最后一个 1000，当商品编号 1000 处理完后，他将索引为 3、6、98 设置为 1。\n\n### 2.举个例子\n\n- 先看一个已经存在的情况\n\n比如，此时某一个用户要查询 858 号商品数据。都知道 858 是存在的，那么按照原始的三个 Hash 分别定位到了 1、5 和 98 号位，**当每一个 Hash 位的数值都是 1 时，则代表对应的编号它是存在的。**\n\n- 再看一个不存在的情况\n\n例如这里要查询 8888。8888 这个数值经过三次 Hash 后，定位到了 3、6 和 100 这三个位置。此时索引为 100 的数值是 0，在多次 Hash 时有任何一位为 0 则代表这个数据是不存在的。\n\n总结：如果布隆过滤器所有 Hash 的值都是 1 的话，则代表这个数据可能存在。它是可能存在；但如果某一位的数值是 0 的话，它是一定不存在的。\n\n- 但缺点会存在误判的\n\n比如现在我要查询 8889 的情况，经过三次 Hash 正好每一位上都是 1。尽管在数据库中，8889 这个商品是不存在的；但在布隆过滤器中，它会被判定为存在。这就是在布隆过滤器中会出现的小概率的误判情况。\n\n- 如何减少误判，有两种\n\n&ensp;&ensp;&ensp;&ensp;- 第一个是**增加二进制位数** 。在原始情况下我们设置索引位到达了 100，但是如果我们把它放大 1 万倍，到达了 100 万，是不是 Hash 以后的数据会变得更分散，出现重复的情况就会更小，这是第一种方式。\n\n&ensp;&ensp;&ensp;&ensp;- 第二个是**增加 Hash 的次数** 。其实每一次 Hash 处理都是在增加数据的特征，特征越多，出现误判的概率就越小。\n\n&ensp;&ensp;&ensp;&ensp;- 代价便是 CPU 需要进行更多运算，这会让布隆过滤器的性能有所降低。\n\n## 如何应用\n\n看一张图：\n\n![](https://s0.lgstatic.com/i/image6/M01/4B/ED/Cgp9HWDnAWiAWxDSAAChYqbfWhg484.png)\n\n- 第一个部分是在应用启动时，我们去初始化布隆过滤器。例如将 1000 个、1 万个、10 万个商品进行初始化，完成从 0 到 1 的转化工作。\n\n- 之后便是当用户发来请求时，会附加商品编号，如果布隆过滤器判断编号存在，则直接去读取存储在 Redis 缓存中的数据；如果此时 Redis 缓存没有存在对应的商品数据，则直接去读取数据库，并将读取到的信息重新载入到 Redis 缓存中。这样下一次用户在查询相同编号数据时，就可以直接读取缓存了。\n\n- 另外一种情况是，如果布隆过滤器判断没有包含编号，则直接返回数据不存在的消息提示，这样便可以在 Redis 层面将请求进行拦截。\n\n其实在大多数情况下，我们出现误判也不会对系统产生额外的影响。因为像刚才我们设置 1% 的误判率，1 万次请求才可能会出现 100 次误判的情况。我们已经将 99% 的无效请求进行了拦截，而这些漏网之鱼也不会对我们系统产生任何实质影响。\n\n延伸问题：初始化后，对应商品被删怎么办？\n假如布隆过滤器初始化后，对应商品被删除了，该怎么办呢？这是一个布隆过滤器的小难点。\n\n因为布隆过滤器某一位的二进制数据，可能被多个编号的 Hash 位进行引用。比如说，布隆过滤器中 2 号位是 1，但是它可能被 3、5、100、1000 这 4 个商品编号同时引用。这里是不允许直接对布隆过滤器某一位进行删除的，否则数据就乱了，怎么办呢？\n\n两种解决方案：\n\n- **计数布隆过滤器** 。在标准的布隆过滤器下，是无法得知当前某一位它是被哪些具体数据进行了引用，但是计数布隆过滤器它是在这一位上额外的附加的计数信息，表达出该位被几个数据进行了引用。（如果你对计数布隆过滤器有兴趣的话，可以再去翻阅一下相关资料）\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 275,
        "like_count": 83
    },
    {
        "id": 252,
        "tag_id": 7,
        "tag_type": 2,
        "title": "8.数组扁平化",
        "content": "# 数组扁平化\n\n## 什么是数组扁平化\n\n```javascript\n[\\\"a\\\", \\\"b\\\", \\\"c\\\"][([\\\"a\\\", \\\"b\\\"], [\\\"c\\\", \\\"d\\\"], [\\\"e\\\", \\\"f\\\"])]; //这是一个拥有3个元素的数组，是一个一维数组（不存在数组嵌套）。 // 二维\n// 数组扁平化就是把多维数组转化成一维数组。\n```\n\n## 扁平化的方法\n\n### es6 提供的方法 flat(depth)\n\n```javascript\nlet a = [1, [2, 3]];\na.flat(); // [1,2,3]\na.flat(1); //[1,2,3]\n```\n\nflat(**depth**) 方法中的参数 depth，代表展开嵌套数组的深度，默认是 1\n\n如果我们可以提前知道数组的维度，对这个数组进行扁平化处理，参数 depth 的值就是数组的维度减一。\n\n```javascript\nlet a = [1, [2, 3, [4, [5]]]];\na.flat(4 - 1); // [1,2,3,4,5]  a是4维数组\n```\n\n其实还有一种更简单的办法，无需知道数组的维度，直接将目标数组变成 1 维数组。 depth 的值设置为 Infinity。\n\n```javascript\nlet a = [1, [2, 3, [4, [5]]]];\na.flat(Infinity); // [1,2,3,4,5]  a是4维数组\n```\n\n### for 循环\n\n```javascript\nvar arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];\nfunction flatten(arr) {\n  var res = [];\n  for (let i = 0, length = arr.length; i < length; i++) {\n    if (Array.isArray(arr[i])) {\n      res = res.concat(flatten(arr[i])); //concat 并不会改变原数组\n      //res.push(...flatten(arr[i])); //扩展运算符\n    } else {\n      res.push(arr[i]);\n    }\n  }\n  return res;\n}\nflatten(arr1); //[1, 2, 3, 1, 2, 3, 4, 2, 3, 4]\n```\n\n### while 循环\n\n```javascript\nvar arr1 = [1, 2, [3], [1, 2, 3, [4, [2, 3, 4]]]];\nfunction flatten(arr) {\n  while (arr.some((item) => Array.isArray(item))) {\n    arr = [].concat(...arr);\n    //arr = Array.prototype.concat.apply([],arr);\n  }\n  return arr;\n}\nflatten(arr1); //[1, 2, 3, 1, 2, 3, 4, 2, 3, 4]\n```\n\n### reduce 方法\n\n```javascript\nvar arr1 = [1, 2, [3], [1, 2, 3, [4, [2, 3, 4]]]];\nfunction flatten(arr) {\n  return arr.reduce((res, next) => {\n    return res.concat(Array.isArray(next) ? flatten(next) : next);\n  }, []);\n}\n```\n\n#### 使用 stack 无限反嵌套多层嵌套数组\n\n```javascript\nvar arr1 = [1, 2, [3], [1, 2, 3, [4, [2, 3, 4]]]];\nfunction flatten(input) {\n  const stack = [...input]; //保证不会破坏原数组\n  const result = [];\n  while (stack.length) {\n    const first = stack.shift();\n    if (Array.isArray(first)) {\n      stack.unshift(...first);\n    } else {\n      result.push(first);\n    }\n  }\n  return result;\n}\nflatten(arr1); //[1, 2, 3, 1, 2, 3, 4, 2, 3, 4]\n```\n\n#### 如果数组的项全为数字，可以使用 join()，toString()\n\n```javascript\nfunction flatten(input) {\n  return input\n    .toString()\n    .split(\\\",\\\")\n    .map((item) => +item);\n  // return input.join().split(\\',\\').map(item => +item);\n  // return input.join(\\',\\').split(\\',\\').map(item => +item);\n}\nflatten(arr1); //[1, 2, 3, 1, 2, 3, 4, 2, 3, 4]\n```\n\n## 性能测试\n\n![数组扁平化测试-yauXB6](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/数组扁平化测试-yauXB6.png)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 410,
        "like_count": 16
    },
    {
        "id": 4,
        "tag_id": 11,
        "tag_type": 2,
        "title": "9.性能优化有哪些",
        "content": "# 浏览器性能优化有哪些\n\n- CDN\n- Webpack 插件压缩\n- 静态缓存\n- 图片懒加载\n\n等等\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 202,
        "like_count": 73
    },
    {
        "id": 28,
        "tag_id": 4,
        "tag_type": 3,
        "title": "9.TCP头部报文",
        "content": "## TCP 头部报文\n\n### source port 和 destination port\n\n> 两者分别为「源端口号」和「目的端口号」。源端口号就是指本地端口，目的端口就是远程端口。\n\n可以这么理解，我们有很多软件，每个软件都对应一个端口，假如，你想和我数据交互，咱们得互相知道你我的端口号。\n\n再来一个很官方的：\n\n> 扩展：应用程序的端口号和应用程序所在主机的 IP 地址统称为 socket（套接字），IP:端口号, 在互联网上 socket 唯一标识每一个应用程序，源端口+源 IP+目的端口+目的 IP 称为”套接字对“，一对套接字就是一个连接，一个客户端与服务器之间的连接。\n\n### Sequence Number\n\n> 称为「序列号」。用于 TCP 通信过程中某一传输方向上字节流的每个字节的编号，为了确保数据通信的有序性，避免网络中乱序的问题。接收端根据这个编号进行确认，保证分割的数据段在原始数据包的位置。初始序列号由自己定，而后绪的序列号由对端的 ACK 决定：SN_x = ACK_y (x 的序列号 = y 发给 x 的 ACK)。\n\n说白了，类似于身份证一样，而且还得发送此时此刻的所在的位置，就相当于身份证上的地址一样。\n\n### Acknowledge Number\n\n> 称为「确认序列号」。确认序列号是接收确认端所期望收到的下一序列号。确认序号应当是上次已成功收到数据字节序号加 1，只有当标志位中的 ACK 标志为 1 时该确认序列号的字段才有效。主要用来解决不丢包的问题。\n\n### TCP Flag\n\n`TCP` 首部中有 6 个标志比特，它们中的多个可同时被设置为 `1`，主要是用于操控 `TCP` 的状态机的，依次为`URG，ACK，PSH，RST，SYN，FIN`。\n\n当然只介绍三个：\n\n1. **ACK**：这个标识可以理解为发送端发送数据到接收端，发送的时候 `ACK` 为 0，标识接收端还未应答，一旦接收端接收数据之后，就将 ACK 置为 1，发送端接收到之后，就知道了接收端已经接收了数据。\n2. **SYN**：表示「同步序列号」，是 TCP 握手的发送的第一个数据包。用来建立 TCP 的连接。SYN 标志位和 ACK 标志位搭配使用，当连接请求的时候，SYN=1，ACK=0 连接被响应的时候，SYN=1，ACK=1；这个标志的数据包经常被用来进行端口扫描。扫描者发送一个只有 SYN 的数据包，如果对方主机响应了一个数据包回来 ，就表明这台主机存在这个端口。\n3. **FIN**：表示发送端已经达到数据末尾，也就是说双方的数据传送完成，没有数据可以传送了，发送 FIN 标志位的 TCP 数据包后，连接将被断开。这个标志的数据包也经常被用于进行端口扫描。发送端只剩最后的一段数据了，同时要告诉接收端后边没有数据可以接受了，所以用 FIN 标识一下，接收端看到这个 FIN 之后，哦！这是接受的最后的数据，接受完就关闭了；**TCP 四次分手必然问**。\n\n### Window size\n\n> 称为滑动窗口大小。所说的滑动窗口，用来进行流量控制。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 52,
        "like_count": 59
    },
    {
        "id": 45,
        "tag_id": 8,
        "tag_type": 2,
        "title": "9.flex弹性布局",
        "content": "# flex 弹性布局\n\n## 基本概念\n\n采用 Flex 布局的元素，称为 Flex 容器（flex container），简称\\\"容器\\\"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称\\\"项目\\\"。\n\n容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做 cross start，结束位置叫做 cross end。\n\nFlex 项目默认沿主轴排列。单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size。\n\n## flex 容器属性\n\n1. flex-direction\n2. flex-warp\n3. flex-flow\n4. justify-content\n5. align-items\n6. align-content\n\n## flex 项目属性\n\n1. order\n2. flex-grow\n3. flex-shrink\n4. flex-basis\n5. flex\n6. align-self\n\n参考：[https://juejin.cn/post/6844903586841755655](https://juejin.cn/post/6844903586841755655)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 223,
        "like_count": 79
    },
    {
        "id": 53,
        "tag_id": 3,
        "tag_type": 1,
        "title": "9.Redis三种缓存策略",
        "content": "# Redis 常见的三种缓存策略\n\n> 不是我在料理植物，而是植物在料理我。\n> 培土、拔草、浇水、晒阳光\n> 不是别的，是我的心。\n\n## 背景\n\n> 不会真有人不会使用 redis 充当缓存吧？\n\n所以，本次学习一下关于 \\\"缓存+数据库\\\"模型读写的一致性问题：\n\n1. 缓存中是否有可能被写入脏数据；\n2. 策略的读写性能如何；\n3. 是否存在缓存命中率下降的。\n\n## Cache Aside（旁路缓存）策略\n\n### 更新数据库，更新缓存\n\n一般情况下，当我们变更数据库中的数据，首先思路是更新数据库，最后修改 redis 的缓存来保证一致性，这是最容易想到的思路。\n\n所以，抽象出来，其实是：\n\n1. 写策略：先更新数据库，再更新缓存；\n2. 读策略：读缓存，缓存缺失时查数据库并回写缓存；\n\n![](https://imgs.heiye.site/byte/1646643380261.png)\n\n一般情况下，这种思路不会什么问题，但在一定的并发下，可能会出现缓存不一致的情况，如下面的例子：\n\n![](https://imgs.heiye.site/byte/1646645225181.png)\n\n有两个请求，分别为请求 1 和请求 2：\n\n1. 请求 1：更新数据库 20，更新缓存；\n2. 请求 2：更新数据库 21，更新缓存；\n3. 如上图：数据库中的结果是 21，但是缓存中的数据是 20，这是不一致的。\n\n原因：因为变更数据库和变更缓存是两个独立的操作，而我们并没有对操作做任何的并发控制。那么当两个线程并发更新它们的时候，就会因为写入顺序的不同造成数据的不一致。\n\n### 删除缓存，更新数据库\n\n如果写入缓存的顺序可能不一样，那就先删除缓存，再更新数据库，那么这样看看有什么问题。\n\n1. 写策略：先删除缓存，再更新数据库；\n2. 读策略：读缓存，缓存缺失时查找数据库并回写缓存；\n\n那么，看极端情况：\n\n![](https://imgs.heiye.site/byte/1646646302432.png)\n\n依然是两个请求，分别为请求 1 和请求 2：\n\n1. 请求 1：删除缓存，更新数据库\n2. 请求 2：读取缓存，缓存缺失时查找数据库里的数据并回写缓存\n3. 如上图：数据库中的结果是 21，但是缓存中的数据是 20，这是不一致的。\n\n上一个思路的原因是差不多的。\n\n解决这样的问题，可以通过 \\\"延迟双删\\\" 策略（更新后再次删除缓存）解决，但是这种策略对写性能影响较大，通常很少使用；\n\n```c\nredis.delkey(x)\ndb.update(x)\nsleep(n)\nredis.delkey(x)\n```\n\n### 更新数据库，再删除缓存\n\n1. 写策略：先更新数据库，再删除缓存；\n2. 读策略：读缓存，缓存缺失时查数据库并回写缓存；\n\n![](https://imgs.heiye.site/byte/1646646737438.png)\n\n这个策略就是使用缓存最常见的策略，Cache Aside 策略（也叫旁路缓存策略）；\n\n但是，当写入比较频繁时，缓存中的数据会被频繁地清理，这样会对缓存的命中率有一些影响。如果业务对缓存命中率有严格的要求，那么可以考虑两种解决方案：\n\n1. 在更新数据时也更新缓存，只是在更新缓存前先加一个分布式锁，因为这样在同一时间只允许一个线程更新缓存，就不会产生并发问题了。当然这么做对于写入的性能会有一些影响；\n2. 另一种做法同样也是在更新数据时更新缓存，只是给缓存加一个较短的过期时间，这样即使出现缓存不一致的情况，缓存的数据也会很快地过期，对业务的影响也是可以接受。\n\n以上三种思路中写数据库和写缓存都是分离的，那就有可能存在先写数据库成功后写缓存失败或先写缓存成功后写数据库失败的情况，这种情况同样会造成数据库和缓存不一致，这时可以把写操作通过消息中间件进行重试。\n\n![](https://imgs.heiye.site/byte/1646648167496.png)\n\n## Read/Write Through（同步直写）策略\n\n这个策略的核心原则是用户只与缓存模块打交道，由缓存模块跟具体的缓存实现及数据库通信，写入或者读取数据。\n\n- Write Through 策略：写请求直接发到缓存模块，缓存模块先查询要写入的数据在缓存中是否已经存在：\n\n  - 如果已经存在：则使用事务机制保证写入缓存和写数据库具有原子性；\n  - 如果不存在：则直接写入数据库\n\n- Read Through 策略：跟 Cache Aside 类似，缓存模块先查询缓存中数据是否存在：\n  - 如果存在：则直接返回\n  - 如果不存在：则从数据库中同步回写数据到缓存中，然后返回；\n\n优点：可以保证数据一致性，读性能高；\n缺点：同步写对写性能有比较大的影响，不适合写多的场景；\n\n这种策略涉及到缓存模块的开发，针对只用 Redis+DB 场景也可以由 Client 实现缓存模块的功能，通过事务来保证 Redis 和 DB 的一致性；\n\n## Write Behind（异步写回）策略\n\nWrite-Behind 和 Write-Through 在用户与缓存模块的交互特别相似，不同点在于 Write-Through 会把数据立即写入数据库中，而 Write-Behind 只写入缓存并会把缓存标记为脏的，在一段时间之后（或是被其他方式触发）再把数据一起写入数据库；\n\n数据库写操作可以用不同的方式完成：\n\n1. 其中一个方式就是收集所有的写操作并在某一时间点（比如数据库负载低的时候）批量写入；\n2. 另一种方式就是合并几个写操作成为一个小批次操作，接着缓存收集写操作（比如 5 个）一起批量写入；\n\n优点：异步写操作极大的降低了请求延迟并减轻了数据库的负担，大大提升写性能；\n缺点：因为缓存一般使用内存，而内存是非持久化的，所以一旦缓存机器掉电，就会造成原本缓存中的脏块儿数据丢失，造成数据不一致；\n\n## 小结\n\n1. Cache Aside 是在使用分布式缓存时最常用的策略，可以在实际工作中直接拿来使用；\n2. Read/Write Through 和 Write Back 策略需要缓存组件的支持，所以比较适合在实现本地缓存组件的时候使用；\n3. Write Back 策略是计算机体系结构中的策略，不过写入策略中的只写缓存，异步写入后端存储的策略倒是有很多的应用场景。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 471,
        "like_count": 33
    },
    {
        "id": 94,
        "tag_id": 1,
        "tag_type": 1,
        "title": "9.String对象和常量池",
        "content": "# String 对象和常量池\n\n```java\npublic class StringTest {\n    public static void main(String[] args) {\n        String str1 = \\\"todo\\\"; // 常量池\n        String str2 = \\\"todo\\\"; // 从常量池找了str1\n        String str3 = \\\"to\\\"; // 常量池\n        String str4 = \\\"do\\\"; // 常量池\n        String str5 = str3 + str4; // 内部用StringBuilder拼接了一波。 因此， 并非常量池\n        String str6 = new String(str1); //  创建对象了， 那还能是常量池的引用？\n    }\n}\n```\n\n分析一波：\n\n- 生成的 `class` 文件中会在常量池中**保存\\\"todo\\\"、\\\"to\\\"和\\\"do\\\"三个 String 常量**。\n- 变量 `str1` 和 `str2` 均保存的是常量池中\\\"todo\\\"的引用，所以 `str1==str2` 成立；\n- 在执行 `str5 = str3 + str4` 这句时，**JVM 会先创建一个 StringBuilder 对象，通过 StringBuilder.append()方法将 str3 与 str4 的值拼接**，然后通过 `StringBuilder.toString()`返回一个堆中的 `String` 对象的引用，赋值给 `str5`，因此 `str1` 和 `str5` 指向的不是同一个 `String` 对象，`str1 == str5` 不成立；\n- `String str6 = new String(str1)`一句显式创建了一个新的 `String` 对象，因此 `str1 == str6` 不成立便是显而易见的事了。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 406,
        "like_count": 98
    },
    {
        "id": 182,
        "tag_id": 5,
        "tag_type": 1,
        "title": "09.epoll的理解",
        "content": "# epoll 的理解\n\n## 前言\n\n谈到 epoll，无非联想到了 select、poll 和 epoll，这三个都是 IO 多路复用机制，关于什么事 IO 多路复用，这里暂时不讲解。\n\n先说一下 select 的缺点：\n\n1. 最大并发数限制，因为一个进程所打开的 FD （文件描述符）是有限制的，由 FD_SETSIZE 设置，默认值是 1024/2048 ，因此 Select 模型的最大并发数就被相应限制了。\n2. 效率问题， select 每次调用都会线性扫描全部的 FD 集合，这样效率就会呈现线性下降。\n3. 内核 / 用户空间内存拷贝问题，如何让内核把 FD 消息通知给用户空间呢？在这个问题上 select 采取了内存拷贝方法。\n\n而 poll 模型：\n\n基本上效率和 select 是相同的，但 select 的 2 和 3 缺点没有改掉。\n\n所以，epoll 改掉了上面的缺点，性能更高。\n\n1. 没有最大并发数限制，因为 epoll 可以监听多个 FD ，所以可以设置最大并发数。\n2. 效率提升， Epoll 最大的优点就在于它只管你\\\"变化\\\"的连接 ，而跟连接总数无关，因此在实际的网络环境中， Epoll 的效率就会远远高于 select 和 poll 。\n3. 内存拷贝， Epoll 在这点上使用了“共享内存 ”，这个内存拷贝也省略了。\n\n## epoll 函数\n\n```c\n//用于创建并返回一个epfd句柄，后续关于fd的添加删除等操作都依据这个句柄。\nint epoll_create(int size);\n//用于向epfd添加，删除，修改要监听的fd。\nint epoll_ctl(int epfd, int op, int fd, struct epoll_event* event);\n//传入创建返回的epfd句柄，以及超时时间，返回就绪的fd句柄。\nint epoll_wait(int epfd, struct epoll_event* events, int maxevents, int timeout);\n```\n\n因此，可以给出简单的流程：\n\n![](https://imgs.heiye.site/byte/1644573721722.png)\n\n## epoll 示意图\n\n![](https://imgs.heiye.site/byte/1644595929205.png)\n\n- 调用 epoll_create 会在内核创建一个 eventpoll 对象，这个对象会维护一个 epitem 集合，可简单理解为 fd 集合。\n- 调用 epoll_ctl 函数用于将 fd 封装成 epitem 加入这个 eventpoll 对象，并给这个 epitem 加了一个回调函数注册到内核，会在这个 fd 状态改变时候触发，使得该 epitem 加入 eventpoll 的就绪列表 rdlist。\n- 当相应数据到来，触发中断响应程序，将数据拷贝到 fd 的 socket 缓冲区，fd 缓冲区状态发生变化，回调函数将 fd 对应的 epitem 加入 rdlist 就绪队列中。\n- 调用 epoll_wait 时无需遍历，只是返回了这个就绪的 rdlist 队列，如果 rdlist 队列为空，则阻塞等待或等待超时时间的到来。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 315,
        "like_count": 6
    },
    {
        "id": 184,
        "tag_id": 2,
        "tag_type": 1,
        "title": "9.索引种类",
        "content": "# 索引种类\n\n再说一下**索引种类**：\n\n- 普通索引：仅加速查询\n- 唯一索引：加速查询 + 列值唯一（可以有 null）\n- 主键索引：加速查询 + 列值唯一（不可以有 null）+ 表中只有一个\n- 组合索引：多列值组成一个索引，专门用于组合搜索，其效率大于索引合并\n- 全文索引：对文本的内容进行分词，进行搜索\n- 索引合并：使用多个单列索引组合搜索\n- 覆盖索引：select 的数据列只用从索引中就能够取得，不必读取数据行，换句话说查询列要被所建的索引覆盖\n- 聚簇索引：表数据是和主键一起存储的，主键索引的叶结点存储行数据(包含了主键值)，二级索引的叶结点存储行的主键值。使用的是 B+树作为索引的存储结构，非叶子节点都是索引关键字，但非叶子节点中的关键字中不存储对应记录的具体内容或内容地址。叶子节点上的数据是主键与具体记录(数据内容)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 211,
        "like_count": 39
    },
    {
        "id": 204,
        "tag_id": 6,
        "tag_type": 1,
        "title": "9.限流算法有哪些",
        "content": "> 在大型电商等系统中,我们回努力提升 API 的吞吐量和 QPS(Query Per Second 每秒查询量),但总归有上限.为了应对巨大流量的瞬间提交,我们会做对应的限流处理.\n\n常见的限流算法有计数器,漏桶,令牌桶.\n\n## 计数器\n\n计数器限流方式比较粗暴,**一次访问设置一次计数**,在系统内设置每秒的访问量,**超过访问量的访问直接丢弃**,实现访问限流.这种算法的弊端就是,在开始的时间,访问量被使用完后,1S 内会有长时间的真空期是处于接口不可用的状态的.\n\n实现方式和拓展方式很多.比如可以使用 redis 进行 1S 的 100 次访问计数,来一个流量 100-1 当数量到达 0 时,拒绝后续的访问.也可以不拒绝而是将请求放入缓存队列,根据实际业务情况选择不同的实现方式.\n\n## 漏斗\n\n在计数器算法中我们看到,当使用了所有的访问量后,接口会完全处于不可用状态.有些系统不喜欢这样的处理方式,可以选择漏斗算法进行限流. 漏斗算法的原理就像名字,是一个漏斗,**访问量从漏斗的大口进入,从漏斗的小口进入系统**.这样不管是多大的访问量进入漏斗,最后进入系统的访问量都是固定的.漏斗的好处就是,大批量访问进入时,漏斗有容量,不超过容量(容量的设计=固定处理的访问量\\\\*可接受等待时长)的数据都可以排队等待处理,超过的才会丢弃.\n\n实现方式可以使用队列,队列设置容量,访问可以大批量塞入队列,满队列后丢弃后续访问量.队列的出口以固定速率拿去访问量处理.\n\n这种方案由于出口速率是固定的,那么当就无法应对短时间的突发流量.\n\n## 令牌桶\n\n令牌桶算法算是漏斗算法的改进版,为了处理短时间的突发流量而做了优化,令牌桶算法主要由三部分组成令牌流、数据流、令牌桶.\n\n- 令牌流:流通令牌的管道,用于生成的令牌的流通,放入令牌桶中.\n- 数据流:进入系统的数据流量\n- 令牌桶:保存令牌的区域,可以理解为一个缓存区.令牌保存在这里用于使用.\n\n令牌桶算法会**按照一定的速率生成令牌放入令牌桶,访问要进入系统时,需要从令牌桶获取令牌,有令牌的可以进入,没有的被抛弃**。由于令牌桶的令牌是源源不断生成的,当访问量小时,可以留存令牌达到令牌桶的上限,这样当短时间的突发访问量来时,积累的令牌数可以处理这个问题.当访问量持续大量流入时,由于生成令牌的速率是固定的,最后也就变成了类似漏斗算法的固定流量处理。\n\n实现方式和漏斗也比较类似,可以使用一个队列保存令牌,一个定时任务用等速率生成令牌放入队列,访问量进入系统时,从队列获取令牌再进入系统.\n\nGoogle 开源的 guava 包中 RateLimiter 类实现了令牌桶算法,不过这是单机的.集群可以按照上面的实现方式实现,队列使用中间件 MQ 实现,配合负载均衡算法,考虑集群各个服务器的承压情况做对应服务器的队列是比较建议的做法.\n\n> 参考:https://zhuanlan.zhihu.com/p/95066428\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 192,
        "like_count": 11
    },
    {
        "id": 253,
        "tag_id": 7,
        "tag_type": 2,
        "title": "9.import和require",
        "content": "# import 和 require\n\n直接放图\n\n![js的import和requier的区别-dngOCp](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js的import和requier的区别-dngOCp.png)\n\n## 规范\n\nimport 是 es6 的一个语法标准，如果要兼容浏览器的话，还是要转换成 es5 的语法。\n\n## 调用\n\n- require 的引用可以在代码的任何地方\n- import 语法规范是放在文件开头\n\n## 本质\n\n- require 的结果就是对象、数字、字符串、函数等，再把 require 的结果**赋值给某个变量**\n- 目前所有的引擎都还没有实现 import，我们在 node 中使用 babel 支持 ES6，也仅仅是将 ES6 转码为 ES5 再执行，import 语法会被转码为 require\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 391,
        "like_count": 93
    },
    {
        "id": 9,
        "tag_id": 11,
        "tag_type": 2,
        "title": "10.浏览器缓存机制",
        "content": "# 浏览器缓存机制\n\n浏览器的缓存机制也就是我们说的 HTTP 缓存机制\n\n## 强制缓存\n\n强制缓存就是向浏览器缓存查找该请求结果，并根据该结果的缓存规则来决定是否使用该缓存结果的过程，强制缓存的情况主要有三种(暂不分析协商缓存过程)，如下：\n不存在该缓存结果和缓存标识，强制缓存失效，则直接向服务器发起请求（跟第一次发起请求一致），如下图：\n\n![强制缓存-1-0D26Y3](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/强制缓存-1-0D26Y3.jpg)\n\n存在该缓存结果和缓存标识，但该结果已失效，强制缓存失效，则使用协商缓存(暂不分析)，如下图\n\n![强制缓存-2-gsqQ6m](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/强制缓存-2-gsqQ6m.jpg)\n\n存在该缓存结果和缓存标识，且该结果尚未失效，强制缓存生效，直接返回该结果，如下图\n\n![强制缓存-3-Vgn3K3](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/强制缓存-3-Vgn3K3.jpg)\n\n> 那么强制缓存的缓存规则是什么？\n\n当浏览器向服务器发起请求时，服务器会将缓存规则放入 HTTP 响应报文的 HTTP 头中和请求结果一起返回给浏览器，控制强制缓存的字段分别是 Expires 和 Cache-Control，其中 Cache-Control 优先级比 Expires 高。\n\n## 协商缓存\n\n协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程，主要有以下两种情况：\n\n- 协商缓存生效，返回 304，如下\n\n![协商缓存-1-H0VyOQ](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/协商缓存-1-H0VyOQ.jpg)\n\n- 协商缓存失效，返回 200 和请求结果结果，如下\n\n![协商缓存-2-YlWe1l](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/协商缓存-2-YlWe1l.jpg)\n\n## 总结\n\n强制缓存优先于协商缓存进行，若强制缓存(Expires 和 Cache-Control)生效则直接使用缓存，若不生效则进行协商缓存(Last-Modified / If-Modified-Since 和 Etag / If-None-Match)，协商缓存由服务器决定是否使用缓存，若协商缓存失效，那么代表该请求的缓存失效，重新获取请求结果，再存入浏览器缓存中；生效则返回 304，继续使用缓存，主要过程如下：\n\n![浏览器缓存-1-nHYtoE](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/浏览器缓存-1-nHYtoE.jpg)\n\n参考：[https://juejin.cn/post/6844903593275817998](https://juejin.cn/post/6844903593275817998)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 145,
        "like_count": 79
    },
    {
        "id": 11,
        "tag_id": 4,
        "tag_type": 3,
        "title": "10.TCP三次握手",
        "content": "# TCP 三次握手\n\n![TCP三次握手-DjvoNi](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/TCP三次握手-DjvoNi.svg)\n\n- **初始状态**：客户端处于 `closed(关闭)`状态，服务器处于 `listen(监听)` 状态。\n- **第一次握手**：客户端发送请求报文将 `SYN = 1`同步序列号和初始化序列号`seq = x`发送给服务端，发送完之后客户端处于`SYN_Send`状态。\n- **第二次握手**：服务端收到 `SYN` 请求报文之后，如果同意连接，会以自己的同步序列号`SYN(服务端) = 1`、初始化序列号 `seq = y`和确认序列号（期望下次收到的数据包）`ack = x + 1` 以及确认号`ACK = 1`报文作为应答，服务器为`SYN_Receive`状态。（问题来了，两次握手之后，所以老哥，你需要给我三次握手来传个话告诉我一声。你要是不告诉我，万一我认为你跑了，然后我可能出于安全性的考虑继续给你发一次，看看你回不回我。）\n- **第三次握手**： 客户端接收到服务端的 `SYN + ACK`之后，知道可以下次可以发送了下一序列的数据包了，然后发送同步序列号 `ack = y + 1`和数据包的序列号 `seq = x + 1`以及确认号`ACK = 1`确认包作为应答，客户端转为`established`状态。（分别站在双方的角度上思考，各自 ok）\n\n1. 你吃饭了嘛？（seq=x），收到请回答（SYN=1）\n2. 收到（ACK=1），吃饭了（ack=x+1），你吃饭了吗？（seq=y），收到请回答（SYN=1）\n3. 收到（ACK=1），吃饭了（ack=y+1），那么我们聊一下接下里的事情（established）\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 214,
        "like_count": 29
    },
    {
        "id": 46,
        "tag_id": 8,
        "tag_type": 2,
        "title": "10.css哪些属性是可以继承",
        "content": "# css 哪些属性是可以继承\n\n## 字体系列属性\n\n- font: 组合字体\n- font-famliy：规定元素的字体系列\n- font-weight：设置字体的粗细\n\n等等等\n\n## 文本系列属性\n\n- text-indent：文本缩进\n- text-align：文本水平对齐\n- line-height：行高\n\n等等等\n\n## 元素可见性质\n\n- visibility\n\n## 表格布局属性\n\n- caption-side\n- border-collapse\n\n## 列表属性\n\n- list-style-type\n- list-style-image\n\n挺多的\n\n参考:[https://www.html.cn/qa/css3/13444.html](https://www.html.cn/qa/css3/13444.html)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 42,
        "like_count": 99
    },
    {
        "id": 166,
        "tag_id": 1,
        "tag_type": 1,
        "title": "10.String的intern()方法",
        "content": "## 了解 String.intern()方法吗？\n\n面试官：说一下`String.intern()`干嘛用的？\n\n我：去字符串常量池拿吃的\n\n- jdk6：\n\n执行 `intern()`方法时，**若常量池中不存在等值的字符串，JVM 就会在常量池中创建一个等值的字符串(这句话很重要)，然后返回该字符串的引用**。\n\n- jdk7：\n\n执行 `intern` 操作时，如果常量池已经存在该字符串，则直接返回字符串引用，否则**复制该堆中字符串对象的引用到常量池(堆对象引用复制到常量池)中并返回**。\n\n简单说一下常量池版本的变化\n\n### 1.6\n\n- 静态常量池在 `Class` 文件中。\n- **运行时常量池(常量池：字面量和符号引用)在 Perm Gen 区(也就是方法区)中**。\n- **字符串常量池在运行时常量池**中。\n\n### 1.7\n\n- 静态常量池在 `Class` 文件中。\n- **运行时常量池依然在 Perm Gen 区(也就是方法区)中**。在 `JDK7` 版本中，永久代的转移工作就已经开始了，将譬如符号引用转移到了 `native heap`；字面量转移到了 `java heap`；类的静态变量转移到了 `java heap`。但是运行时常量池依然还存在，只是很多内容被转移，其只存着这些被转移的引用。\n- **字符串常量池被分配到了 Java 堆的主要部分**。也就是**字符串常量池从运行时常量池分离出来了**。\n\n### 1.8\n\n- 静态常量池在 Class 文件中。\n- **JVM 已经将运行时常量池从方法区中移了出来，在 Java 堆（Heap）中开辟了一块区域存放运行时常量池**。**同时永久代被移除，以元空间代替**。元空间并不在虚拟机中，而是使用本地内存。因此，默认情况下，元空间的大小仅受本地内存限制。其主要用于存放一些元数据（类信息）。\n- **字符串常量池存在于 Java 堆中**。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 80,
        "like_count": 83
    },
    {
        "id": 179,
        "tag_id": 5,
        "tag_type": 1,
        "title": "10.零拷贝的理解",
        "content": "# 零拷贝的理解\n\n> 孤身独影，并非因为我被人遗弃，而是因为我找不到想要寻找的东西。\n\n> 学习 epoll 的时候，提到了一个词语：零拷贝。那么今天就来讲讲零拷贝的前世今生。\n\n## 背景\n\n零拷贝（Zero-Copy）是一种 **I/O** 操作优化技术，可以快速高效地**将数据从文件系统移动到网络接口**，而不需要将其从内核空间复制到用户空间。\n\n那么，很想知道传统的 I/O 操作是如何实现的？有什么样的性能缺陷呢？\n\n假如服务端要提供文件传输的功能，我们能想到的最简单的方式是：将磁盘上的文件读取出来，然后通过网络协议发送给客户端。\n\n传统 I/O 的工作方式是，**数据读取和写入是从用户空间到内核空间来回复制**，而内核空间的**数据是通过操作系统层面的 I/O 接口从磁盘读取或写入**。\n\n代码示例，一般需要两个系统调用：\n\n```c\nread(file, tmp_buf, len);\nwrite(socket, tmp_buf, len);\n```\n\n我们以图展示一下流程：\n\n![](https://imgs.heiye.site/byte/1645611907735.png)\n\n从图流程看，期间一共发生了**4 次用户态与内核态的上下文切换**，因为发生了**两次系统调用**，一次是 read() , 一次是 write()。\n\n注意：上下文切换到成本并不小，一次切换需要耗时几十纳秒到几微秒，虽然时间看上去很短，但是在高并发的场景下，这类时间容易被**累积和放大**，从而影响系统的性能。\n\n再者，期间发生了**4 次数据拷贝**，其中两次是**DMA 的拷贝**，另外两次则是**CPU 拷贝**，接下来说一下这个过程：\n\n- **第一次拷贝**：把磁盘上的数据拷贝到操作系统内核的缓冲区里，这个拷贝的过程是通过 DMA 搬运的。\n- **第二次拷贝**：把**内核缓冲区的数据拷贝到用户的缓冲区**里，于是我们应用程序就可以使用这部分数据了，这个拷贝到过程是由 CPU 完成的。\n- **第三次拷贝**：把刚才拷贝到用户的缓冲区里的数据，**再拷贝到内核的 socket 的缓冲区里**，这个过程依然还是由 CPU 搬运的。\n- **第四次拷贝**：把内核的 socket 缓冲区里的数据，**拷贝到网卡的缓冲区**里，这个过程又是由 DMA 搬运的。\n\n仔细一看，这种简单又传统的文件传输方式，存在冗余的上下文切换和数据拷贝，如果频繁的进行文件传输，那么会导致系统性能下降。\n\n所以，**要想提高文件传输的性能，就需要减少上下文切换和数据拷贝的次数**。\n\n## 零拷贝\n\n零拷贝的技术有 mmap+write、sendfile 和 splice 等几种方式。\n\n简单提一下虚拟内存：\n\n所有现代操作系统都使用虚拟内存，使用虚拟地址取代物理地址，主要有以下几点好处：\n\n- 多个虚拟内存可以指向同一个物理地址。\n- 虚拟内存空间可以远远大于物理内存空间。\n\n利用上述的第一条特性可以优化，可以把内核空间和用户空间的虚拟地址映射到同一个物理地址，这样在 I/O 操作时就不需要来回复制了。\n\n### mmap/write 方式\n\n使用 mmap/write 方式替换原来的传统 I/O 方式，就是利用了虚拟内存的特性。下图展示了 mmap/write 原理：\n\n![](https://imgs.heiye.site/byte/1645612244780.png)\n\n整个流程的核心区别就是，把数据读取到内核缓冲区后，应用程序进行写入操作时，**直接把内核的 Read Buffer 的数据复制到 Socket Buffer 以便写入**，这次内核之间的复制也是需要 CPU 的参与的。\n\n上述流程就是少了一个 CPU COPY，提升了 I/O 的速度。不过发现上下文的切换还是 4 次并没有减少，这是因为还是要应用程序发起 write 操作。\n\n那你就要想了，能不能减少一些上下文切换呢？，此时可能需要 sendfile 方式来替换 mmap/write 方式。\n\n### sendfile\n\nsendfile 方式将 mmap write 两个系统调用替换为 sendfile，这样就减少了上下文切换，因为少了一个应用程序发起 write 操作，直接发起 sendfile 操作。\n\n![](https://imgs.heiye.site/byte/1645618466156.png)\n\nsendfile 方式只有三次数据复制（其中只有一次 CPU COPY）以及 2 次上下文切换。\n\n那继续思考，能不能继续优化呢？把 cpu copy 给从这个世界上消失掉，于是使用 scatter/gather 的 sendfile 方式了。\n\n### scatter/gather\n\n其原理就是**在内核空间 Read BUffer 和 Socket Buffer 不做数据复制，而是将 Read Buffer 的内存地址、偏移量记录到相应的 Socket Buffer 中，这样就不需要复制**。其本质和虚拟内存的解决方法思路一致，就是内存地址的记录。\n\n![](https://imgs.heiye.site/byte/1645618540842.png)\n\nscatter/gather 的 sendfile 只有两次数据复制（都是 DMA COPY）及 2 次上下文切换。\n\n## 总结\n\n无论是传统的 I/O 方式，还是引入了零拷贝之后，2 次 DMA copy 是都少不了的。因为两次 DMA 都是依赖硬件完成的。所以，所谓的零拷贝，都是为了减少 CPU copy 及减少了上下文的切换。\n\n![](https://imgs.heiye.site/byte/1645618647158.png)\n\n## 参考\n\n- [https://juejin.cn/post/6995519558475841550](https://juejin.cn/post/6995519558475841550)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 384,
        "like_count": 98
    },
    {
        "id": 201,
        "tag_id": 2,
        "tag_type": 1,
        "title": "10.索引结构",
        "content": "# 索引结构\n\n其次说**索引结构**：\n\n**MyISAM**：\n\n1. MyISAM 索引文件和数据文件是分离的，索引文件仅保存数据记录的地址，同样使用 B+Tree 作为索引结构，叶节点的 data 域存放的是数据记录的地址\n2. 在 MyISAM 中，主索引和辅助索引（Secondary key）在结构上没有任何区别，只是主索引要求 key 是唯一的，而辅助索引的 key 可以重复\n3. MyISAM 中索引检索的算法为首先按照 B+Tree 搜索算法搜索索引，如果指定的 Key 存在，则取出其 data 域的值，然后以 data 域的值为地址，读取相应数据记录\n\n**InnoDB**：\n\n1. InnoDB 的数据文件本身就是索引文件，这棵树的叶节点 data 域保存了完整的数据记录（聚集索引）\n2. InnoDB 的辅助索引 data 域存储相应记录主键的值而不是地址\n3. 聚集索引这种实现方式使得按主键的搜索十分高效，但是辅助索引搜索需要检索两遍索引：首先检索辅助索引获得主键，然后用主键到主索引中检索获得记录。\n\n补充一下**为什么 InnoDB 索引是 B+**：\n\n- Hash 索引：Hash 索引底层是哈希表，哈希表是一种以 key-value 存储数据的结构，所以多个数据在存储关系上是完全没有任何顺序关系的，所以，对于区间查询是无法直接通过索引查询的，就需要全表扫描。所以，哈希索引只适用于等值查询的场景。而 B+ 树是一种多路平衡查询树，所以他的节点是天然有序的（左子节点小于父节点、父节点小于右子节点），所以对于范围查询的时候不需要做全表扫描\n- 二叉查找树：解决了排序的基本问题，但是由于无法保证平衡，可能退化为链表。\n- 平衡二叉树：通过旋转解决了平衡的问题，但是旋转操作效率太低。\n- 红黑树：通过舍弃严格的平衡和引入红黑节点，解决了 AVL 旋转效率过低的问题，但是在磁盘等场景下，树仍然太高，IO 次数太多。\n- B+树：在 B 树的基础上，**B+树相对于 B 树能够有更多的分支，使得这棵树更加矮胖，查询时做的 IO 操作次数也更少**；此外将叶节点使用指针连接成链表，范围查询更加高效。B+树的**非叶子节点不保存数据**，只保存**子树的临界值**（最大或者最小），所以同样大小的节点。\n- [B+树的高度](https://www.jianshu.com/p/544e97672deb)\n\n补充 B 树：\n\nB 树（英语: B-tree）是一种自平衡的树，能够保持数据有序。这种数据结构能够让**查找数据、顺序访问、插入数据及删除的动作，都在对数时间内完成**。B 树，概括来说是一个**一般化的二叉查找树**（binary search tree），可以拥有最多 2 个子节点。与自平衡二叉查找树不同，B 树适用于读写相对大的数据块的存储系统，例如磁盘。\n\n- 关键字集合分布在整颗树中；\n- 任何一个关键字出现且只出现在一个结点中；\n- 搜索有可能在非叶子结点结束；\n- 其搜索性能等价于在关键字全集内做一次二分查找；\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 345,
        "like_count": 36
    },
    {
        "id": 217,
        "tag_id": 6,
        "tag_type": 1,
        "title": "10.分布式事务了解吗",
        "content": "# 分布式事务\n\n> 人只能扔掉真正属于他自己的东西。\n> 两个人如果读过同一本书，他们之间就有了一条纽带。\n\n## 背景\n\nCAP 理论暂时先不讨论，姑且就单论一致性来说，对于关系型数据库我们通常利用**事务**来保证数据的强一致性。\n\n但是当我们的数据量越来越大，大到单库已经无法承担时，我们不得不采取**分库分表**的策略对数据库实现水平拆分，或者引入 NoSQL 技术，构建分布式数据库集群以分摊读写压力，从而提升数据库的存储和响应能力。\n\n但是多个数据库实例也为我们使用数据库带来了许多的限制，比如主键的全局唯一、联表查询、数据聚合等等，另外一个相当棘手的问题就是数据库的事务由原先的**单库事务**变成了现在的**分布式事务**。\n\n分布式事务的实现并不是无解的，比如**两阶段提交**（2PC：Two-Phase Commit）和**三阶段提交**（3PC：Three-Phase Commit）都给我们提供了思路，但是在分布式环境下如何保证数据的强一致性，并对外提供高可用的服务还是相当棘手的，因此很多分布式系统对于数据强一致性都敬而远之。\n\n## 两阶段提交\n\n为什么会有两阶段提交呢？\n\n假如，目前有一个单机系统架构，当在一个服务中调用多个服务时，如果出现了异常，此时由于单机的情况下，可以使用单库提供的事务回滚特性，可以解决一致性问题，但是如果不是单机系统呢？多个服务在多个节点上，多个库在多个节点上，那么假设出现了异常，如何告知服务需要回滚呢？\n\n这个时候可能需要一个全局管理者，管理多个服务的提交与回滚。那么，既然提到了管理者，如果是你，你怎么设计流程呢？可能联想到是这样的场景：\n\n1. 管理者告知 A 服务和 B 服务，你们分别执行自己的服务，提交事务前分别告知我一声，让我方便统计一下是不是都可以正常进行。（第一阶段）\n2. 开始统计服务回馈给自己的票数，如果全是 ok，那么发号施令，你们可以提交了；但凡有一个票数不是 ok，那么发号施令，你们全部都得回滚。（第二阶段）\n\n所以，我们可以把上面的 A 服务和 B 服务，称为**参与者**（额...专业点），将管理者称为**协调者**。\n\n上述第一阶段可以称为**投票**，第二阶段**提交事务**。\n\n### 第一阶段\n\n该阶段的主要目的在于打探数据库集群中的各个参与者是否能够正常的执行事务，具体步骤如下：\n\n1. 协调者向所有的参与者发送**事务执行请求**，并等待参与者反馈事务执行结果；\n2. 事务参与者收到请求之后，**执行事务但不提交，并记录事务日志**；\n3. 参与者将自己事务执行情况反馈给协调者，**同时阻塞等待协调者的后续指令**。\n\n### 第二阶段\n\n在经过第一阶段协调者的询盘之后，各个参与者会回复自己事务的执行情况，这时候存在 3 种可能性：\n\n1. 所有的参与者都回复能够**正常执行事务**；\n2. 一个或多个参与者回复**事务执行失败**；\n3. 协调者**等待超时**。\n\n对于第 1 种情况，协调者将向所有的参与者发出提交事务的通知，具体步骤如下：\n\n1. 协调者向各个参与者**发送 commit 通知**，请求提交事务；\n2. 参与者收到事务提交通知之后执行 commit 操作，然后释放占有的资源；\n3. 参与者向协调者返回事务 commit 结果信息。\n\n![](https://imgs.heiye.site/byte/1648623246803.png)\n\n对于第 2 和第 3 种情况，协调者均认为参与者无法成功执行事务，为了整个集群数据的一致性，所以要向各个参与者发送事务回滚通知，具体步骤如下：\n\n1. 协调者向各个参与者发送**事务 rollback 通知**，请求回滚事务；\n2. 参与者收到事务回滚通知之后执行 rollback 操作，然后释放占有的资源；\n3. 参与者向协调者返回事务 rollback 结果信息。\n\n![](https://imgs.heiye.site/byte/1648623368689.png)\n\n所以两阶段呢，是来解决分布式数据库中事务一致性问题，但实际应用中更多是用来解决原子性问题。\n\n优点：简单，易实现；\n\n缺点：\n\n- **单点故障**：\n\n协调者在整个两阶段提交过程中扮演着举足轻重的作用，**一旦协调者所在服务器宕机**，就会影响整个数据库集群的正常运行。比如在第二阶段中，如果协调者**因为故障不能正常发送事务提交或回滚通知**，那么参与者们将**一直处于阻塞状态**，整个数据库集群将无法提供服务。\n\n- **同步阻塞**：\n\n两阶段提交执行过程中，所有的参与者都需要听从协调者的统一调度，期间**处于阻塞状态而不能从事其他操作**，这样效率极其低下。比如，有些服务返回通知较快，有些服务则较慢，较快的服务则一直在等待。\n\n- **数据不一致**：\n\n两阶段提交协议虽然是分布式数据强一致性所设计，但仍然存在数据不一致性的可能性。比如在第二阶段中，假设协调者发出了事务 commit 通知，但是因为**网络问题该通知仅被一部分参与者所收到并执行了 commit 操作**，其余的参与者则因为**没有收到通知一直处于阻塞状态**，这时候就产生了数据的不一致性。\n\n如何解决以上问题呢，那么从问题着手，可设计**超时机制**和**互相轮询机制**。\n\n1. 站在协调者的角度，如果在指定时间内没有收到所有参与者的应答，则可以自动退出 WAIT 状态，并向所有参与者发送 rollback 通知。\n2. 站在参与者的角度，如果在指定时间内没有收到协调者的通知，这个时候不能执行 RollBack，因为可能协调者发送的是 Commit 通知，可能由于网络阻塞，自己没有收到，那么此时可能需要使用刚才提到的**互相轮询**，询问一下其他服务收到的通知类型，此时又出现几种情况：\n   1. 如果其他服务，比如 B，它未处于 Ready 状态，说明协调者等 B，等的发慌，B 自己在第一阶段执行太久了，超时了呗，那么协调者等超时了，就发送 RollBack 了，那自己可以放心的去执行 RollBack 命令。\n   2. 如果 B 服务处于 Ready 状态，并且在执行 RollBack 或者 Commit 命令，那么自己也可以执行相同的命令。\n   3. 如果 B 服务处于 Ready 状态，也没有做任何动作，它可能和自己一样，走的是 2g 网...，那这个时候继续找 C，找 D，直到所有都是像自己一样都是没网了。那可能不是自己没网了，而是你协调者可能出事了。\n\n那怎么办呢？\n\n## 三阶段\n\n针对两阶段提交存在的问题，三阶段提交协议通过引入一个**预询盘**阶段，以及**超时策略**来减少整个集群的阻塞时间，提升系统性能。三阶段提交的三个阶段分别为：预询盘（can_commit）、预提交（pre_commit），以及事务提交（do_commit）。\n\n### 第一阶段\n\n该阶段协调者会去询问各个参与者是否能够正常执行事务，参与者根据自身情况回复一个**预估值**（个人感觉是衡量一下网络阻塞的情况），相对于真正的执行事务，这个过程是**轻量的**，具体步骤如下：\n\n1. 协调者向各个参与者发送事务询问通知，询问是否可以执行事务操作，并等待回复；（检查一下通不通）\n2. 各个参与者依据自身状况回复**一个预估值**，如果预估自己能够正常执行事务就返回确定信息，并进入预备状态，否则返回否定信息。（全部畅通无阻，基本不怎么超时，放心来吧）\n\n### 第二阶段\n\n本阶段协调者会根据第一阶段的询盘结果采取相应操作，询盘结果主要有 3 种：\n\n1. 所有的参与者都返回确定信息；（网络通）\n2. 一个或多个参与者返回否定信息；\n3. 协调者等待超时。（协调者还是要等...）\n\n针对第 1 种情况，协调者会向所有参与者发送事务执行请求，具体步骤如下：（你可以理解为和两阶段的第一阶段类似）\n\n1. 协调者向所有的事务参与者发送事务执行通知；\n2. 参与者收到通知后执行事务但不提交；\n3. 参与者将事务执行情况返回给协调者。\n\n但与此不同的是：**如果参与者等待超时，则会中断事务，不会一直等**；而对于第一阶段的 2、3 结果，协调者直接发送 abort 通知，直接退出，不用在占用资源。\n\n1. 协调者向所有事务参与者发送 abort 通知；\n2. 参与者收到通知后中断事务。\n\n### 第三阶段\n\n如果第二阶段事务未中断，那么本阶段协调者将会依据事务执行返回的结果来决定提交或回滚事务，分为 3 种情况：（和两阶段的第二阶段类似）\n\n1. 所有的参与者都能正常执行事务。\n2. 一个或多个参与者执行事务失败。\n3. 协调者等待超时。\n\n第一种情况，无非是协调者继续给参与者发送 commit，关于过程和结果不再介绍；\n\n第二、三种情况，协调者给参与者发送 RollBack，过于过程和结果不再介绍；\n\n不过，在第三阶段中，如果因为协调者或网络问题，导致**参与者迟迟不能收到来自协调者的 commit 或 rollback 请求**，那么参与者将不会如两阶段提交中那样陷入阻塞，而是等待超时后**继续 commit**，相对于两阶段提交虽然降低了同步阻塞，**但仍然无法完全避免数据的不一致**。\n\n三阶段相对于两阶段提交，主题是降低了**超时**，从参与者角度降低了超时，三阶段的**第一阶段非常轻量级的去校验一下网络等其他参数，尽量少占用点资源**。\n\n不过，二阶段和三阶段，再锁资源这一方面，粒度还是较大的，比如，有这样的场景：用户在电商网站购买商品 1000 元，使用余额支付 800 元，使用红包支付 200 元。我们看一下在 2PC 中的流程：\n\n- prepare 阶段：\n\n1. 下单系统插入一条订单记录，不提交；\n2. 余额系统减 800 元，给记录加锁（锁记录），写 redo 和 undo 日志，不提交；\n3. 红包系统减 200 元，给记录加锁（锁记录），写 redo 和 undo 日志，不提交；\n\n- commit 阶段：\n\n1. 下单系统提交订单记录\n2. 余额系统提交，释放锁\n3. 红包系统提交，释放锁\n\n为什么说这是一种大粒度的资源锁定呢？是因为在 prepare 阶段，当数据库给用户余额减 800 元之后，为了维持隔离性，**会给该条记录加锁**，在事务提交前，其它事务无法再访问该条记录。但实际上，**我们只需要预留其中的 800 元，不需要锁定整个用户余额**。这是 2PC 和 3PC 的局限，因为这两者是**资源层**的协议，无法提供更灵活的资源锁定操作。\n\n所以，TCC（try-confirm-cancel） 应运而生。\n\n## TCC\n\nTCC 本质上也是一个二阶段提交协议，TCC 将事务的提交过程分为 try-confirm-cancel(实际上 TCC 就是 try、confirm、cancel 的简称) 三个阶段:\n\n1. try：完成业务检查、预留业务资源；\n2. confirm：使用预留的资源执行业务操作（需要保证幂等性）；\n3. cancel：取消执行业务操作，释放预留的资源（需要保证幂等性）。\n\n这三步就不再详细介绍了，我们尝试 TCC 走一下刚才的场景：\n\n- Try 阶段\n\n1. tryX 下单系统创建待支付订单\n2. tryY 冻结账户红包 200 元\n3. tryZ 冻结资金账户 800 元\n\n- Confirm 操作\n\n1. confirmX 订单更新为支付成功\n2. confirmY 扣减账户红包 200 元\n3. confirmZ 扣减资金账户 800 元\n\n- Cancel 操作\n\n1. cancelX 订单处理异常，资金红包退回，订单支付失败\n2. cancelY 冻结红包失败，账户余额退回，订单支付失败\n3. cancelZ 冻结余额失败，账户红包退回，订单支付失败\n\n可以看到，我们使用了冻结代替了原先的账号锁定（实际操作中，**冻结操作可以用数据库减操作+日志实现**），这样在冻结操作之后，事务提交之前，**其它事务也能使用账户余额，提高了并发性**。\n\n总结一下，相比于二阶段提交协议，TCC 主要有以下区别：\n\n1. 2PC 位于**资源层**而 TCC 位于**服务层**。\n2. 2PC 的接口由第三方厂商实现，TCC 的接口由开发人员实现。\n3. TCC 可以更灵活地控制资源锁定的粒度。\n4. TCC 对应用的**侵入性强**。业务逻辑的**每个分支**都需要实现 try、confirm、cancel 三个操作，应用侵入性较强，改造成本高。\n\n## 可靠消息最终一致性\n\n在上面的通用方案设计里，完全依赖可靠消息服务的各种自检机制来确保：\n\n- 如果上游服务的数据库操作没成功，下游服务是不会收到任何通知。\n- 如果上游服务的数据库操作成功了，**可靠消息服务死活都会确保将一个调用消息投递给下游服务，而且一定会确保下游服务务必成功处理这条消息**。\n\n通过这套机制，保证了基于 MQ 的异步调用/通知的服务间的分布式事务保障。其实阿里开源的 RocketMQ，就实现了可靠消息服务的所有功能，核心思想跟上面类似。\n\n> 参考：https://segmentfault.com/a/1190000012534071#/\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 331,
        "like_count": 7
    },
    {
        "id": 267,
        "tag_id": 7,
        "tag_type": 2,
        "title": "10.js集合类",
        "content": "# js 集合类\n\n## 基本概念\n\n- 对象：对象的每个值都是对象的一个属性。创建对象可以用 _var obj = {}_：\n\n```javascript\nvar person = { age: 18, name: \\\"John\\\" };\nvar person2 = Object();\nperson2.age = 19;\nperson2.name = \\\"Tim\\\";\n```\n\n- Array()：传统数组（下标访问）；关联数组（其实是数组对象的属性）.\n\n```javascript\nvar persons = Array(4); //创建只有四个元素的数组\nvar names1 = [\\\"a\\\", \\\"b\\\", \\\"c\\\"]; //\nvar persons2 = Array();\npersons2[\\\"age\\\"] = 18;\npersons2[\\\"name\\\"] = \\\"John\\\";\n```\n\n既然对象就可以实现 Map 的功能，为啥要有 map？ 注意：JavaScript 的对象的键必须是字符串。\n\n- Map：是一组键值对的结构，具有极快的查找速度。通过传入数组的数组来建立。通过调用 _.set(key,value)_ 来添加新的元素。\n\n```javascript\nvar m = new Map([\n  [\\\"Michael\\\", 95],\n  [\\\"Bob\\\", 75],\n  [\\\"Tracy\\\", 85],\n]);\nm.get(\\\"Michael\\\"); // 95\nm.set(\\\"Adam\\\", 67); // 添加新的key-value\n```\n\n- Set：Set 和 Map 类似，也是一组 key 的集合，但不存储 value。由于 key 不能重复，所以，在 Set 中，没有重复的 key。要创建一个 Set，需要提供一个 Array 作为输入，或者直接创建一个空 Set：\n\n```javascript\nvar s1 = new Set(); // 空Set\nvar s2 = new Set([1, 2, 3]); // 含1, 2, 3\nvar s3 = new Set([1, 2, 2]); // 含1， 2\n```\n\n## 遍历\n\nArray、Map 和 Set 都属于 Iterable 类型\n\n- 具有 iterable 类型的集合可以通过新的 _for … of_ 循环来遍历。\n\n```javascript\nvar a = [\\\"A\\\", \\\"B\\\", \\\"C\\\"];\nvar s = new Set([\\\"A\\\", \\\"B\\\", \\\"C\\\"]);\nvar m = new Map([\n  [1, \\\"x\\\"],\n  [2, \\\"y\\\"],\n  [3, \\\"z\\\"],\n]);\nfor (var x of a) {\n  // 遍历Array\n  alert(x);\n}\nfor (var x of s) {\n  // 遍历Set\n  alert(x);\n}\nfor (var x of m) {\n  // 遍历Map\n  alert(x[0] + \\\"=\\\" + x[1]);\n}\n```\n\n- for … of 循环和 for … in 循环有何区别？前者只取集合本身元素，而不是属性，后者当我们给数组人为添加属性后，就会访问所有的 key，原数组则返回数组下标。\n\n```javascript\nvar a = [\\\"A\\\", \\\"B\\\", \\\"C\\\"];\na.name = \\\"Hello\\\";\nfor (var x in a) {\n  alert(x); // \\'0\\', \\'1\\', \\'2\\', \\'name\\'\n}\n/* for ... in循环将把name包括在内，但Array的length属性却不包括在内。for ... of循环则完全修复了这些问题，它只循环集合本身的元素：*/\nvar a = [\\\"A\\\", \\\"B\\\", \\\"C\\\"];\na.name = \\\"Hello\\\";\nfor (var x of a) {\n  alert(x); // \\'A\\', \\'B\\', \\'C\\'\n}\n```\n\n- 直接使用 iterable 内置的 forEach 方法，它接收一个函数，每次迭代就自动回调该函数。\n  以 Array 为例：\n\n```javascript\nvar a = [\\\"A\\\", \\\"B\\\", \\\"C\\\"];\na.forEach(function (element, index, array) {\n  // element: 指向当前元素的值\n  // index: 指向当前索引\n  // array: 指向Array对象本身\n  alert(element);\n});\n// 注意，forEach()方法是ES5.1标准引入的，你需要测试浏览器是否支持。Set与Array类似，但Set没有索引，因此回调函数的前两个参数都是元素本身：\nvar s = new Set([\\\"A\\\", \\\"B\\\", \\\"C\\\"]);\ns.forEach(function (element, sameElement, set) {\n  alert(element);\n});\n// Map的回调函数参数依次为value、key和map本身：\nvar m = new Map([\n  [1, \\\"x\\\"],\n  [2, \\\"y\\\"],\n  [3, \\\"z\\\"],\n]);\nm.forEach(function (value, key, map) {\n  alert(value);\n});\n```\n\n- 那么对于之前提到的 _for… in_ 出现的返回 _key_ 的问题用 _for … of_ 或者 _forEach_ 回调都可以解决。\n\n```javascript\nvar a = [\\\"A\\\", \\\"B\\\", \\\"C\\\"];\na.name = \\\"Hello\\\";\nfor (var x of a) {\n  alert(x); // \\'A\\', \\'B\\', \\'C\\'\n}\na.forEach(function (v, i) {\n  alert(v); // \\'A\\', \\'B\\', \\'C\\' 与 for ... of 功效相同\n});\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 350,
        "like_count": 93
    },
    {
        "id": 13,
        "tag_id": 4,
        "tag_type": 3,
        "title": "11.TCP四次分手",
        "content": "# TCP 四次分手\n\n![TCP四次分手-IESBYO](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/TCP四次分手-IESBYO.png)\n\n- **初始化状态**：客户端和服务端都在连接状态，接下来开始进行四次分手断开连接操作。\n- **第一次分手**：第一次分手无论是客户端还是服务端都可以发起，因为 TCP 是全双工的。\n\n> 假如客户端发送的数据已经发送完毕，发送 FIN = 1 **告诉服务端，客户端所有数据已经全发完了**，**服务端你可以关闭接收了**，但是如果你们服务端有数据要发给客户端，客户端照样可以接收的。此时客户端处于 FIN = 1 等待服务端确认释放连接状态。\n\n- **第二次分手**：服务端接收到客户端的释放请求连接之后，**知道客户端没有数据要发给自己了**，**然后服务端发送 ACK = 1 告诉客户端收到你发给我的信息**，此时服务端处于 CLOSE_WAIT 等待关闭状态。（服务端先回应给客户端一声，我知道了，但服务端的发送数据能力即将等待关闭，于是接下来第三次就来了。）\n- **第三次分手**：此时服务端向客户端把所有的数据发送完了，然后发送一个 FIN = 1，**用于告诉客户端，服务端的所有数据发送完毕**，**客户端你也可以关闭接收数据连接了**。此时服务端状态处于 LAST_ACK 状态，来等待确认客户端是否收到了自己的请求。（服务端等客户端回复是否收到呢，不收到的话，服务端不知道客户端是不是挂掉了还是咋回事呢）\n- **第四次分手**：此时如果客户端收到了服务端发送完的信息之后，就发送 ACK = 1，告诉服务端，客户端已经收到了你的信息。**有一个 2 MSL 的延迟等待**。\n\n### 为什么要有 2MSL 等待延迟？\n\n对应这样一种情况，最后客户端发送的 ACK = 1 给服务端的**过程中丢失**了，服务端没收到，服务端怎么认为的？我已经发送完数据了，怎么客户端没回应我？是不是中途丢失了？然后服务端再次发起断开连接的请求，一个来回就是 2MSL。\n\n客户端给服务端发送的 ACK = 1 丢失，**服务端等待 1MSL 没收到**，**然后重新发送消息需要 1MSL**。如果再次接收到服务端的消息，则**重启 2MSL 计时器**，**发送确认请求**。客户端只需等待 2MSL，如果没有再次收到服务端的消息，就说明服务端已经接收到自己确认消息；此时双方都关闭的连接，TCP 四次分手完毕\n\n### 为什么四次分手？\n\n任何一方都可以在数据传送结束后发出连接释放的通知，待对方确认后进入半关闭状态。当另一方也没有数据再发送的时候，则发出连接释放通知，对方确认后就完全关闭了 TCP 连接。举个例子：A 和 B 打电话，通话即将结束后，A 说“我没啥要说的了”，B 回答“我知道了”，但是 B 可能还会有要说的话，A 不能要求 B 跟着自己的节奏结束通话，于是 B 可能又巴拉巴拉说了一通，最后 B 说“我说完了”，A 回答“知道了”，这样通话才算结束。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 133,
        "like_count": 12
    },
    {
        "id": 40,
        "tag_id": 8,
        "tag_type": 2,
        "title": "11.如何避免CSS污染问题",
        "content": "# 如何避免 CSS 污染问题\n\n当引用 css 的时候会造成污染其它样式比如习惯使用标签选择器；css 类名定义不够严谨导致冲突\n\n1. 可以使用 css module 的形式\n2. 可以使用 css in js 的形式\n3. css 还能像 vue 组件的形式去写，只不过需要用工具去转化\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 50,
        "like_count": 45
    },
    {
        "id": 70,
        "tag_id": 1,
        "tag_type": 1,
        "title": "11.static关键字",
        "content": "# static\n\n- **修饰成员变量和成员方法:** 被 `static` 修饰的成员属于类，不属于单个这个类的某个对象，被类中所有对象共享，可以并且建议通过类名调用。被 `static` 声明的成员变量属于静态成员变量，静态变量存放在 `Java` 内存区域的方法区。调用格式：`类名.静态变量名` `类名.静态方法名()`\n- **静态代码块:** 静态代码块定义在类中方法外, 静态代码块在非静态代码块之前执行(静态代码块—>非静态代码块—>构造方法)。 该类不管创建多少对象，静态代码块只执行一次.\n- **静态内部类（static 修饰类的话只能修饰内部类）：** 静态内部类与非静态内部类之间存在一个最大的区别: 非静态内部类在编译完成之后会隐含地保存着一个引用，该引用是指向创建它的外围类，但是静态内部类却没有。没有这个引用就意味着：1. 它的创建是不需要依赖外围类的创建。2. 它不能使用任何外围类的非 static 成员变量和方法。\n- **静态导包(用来导入类中的静态资源，1.5 之后的新特性):** 格式为：`import static` 这两个关键字连用可以指定导入某个类中的指定静态资源，并且不需要使用类名调用类中静态成员，可以直接使用类中静态成员变量和成员方法。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 159,
        "like_count": 49
    },
    {
        "id": 196,
        "tag_id": 2,
        "tag_type": 1,
        "title": "11.索引失效",
        "content": "# 索引失效\n\n查询什么时候不走**索引**：\n\n1. **模糊查询 %like**\n2. **索引列参与计算,使用了函数**\n3. **非最左前缀顺序**\n4. **where 对 null 判断**\n5. **where 不等于**\n6. or 操作有至少一个字段没有索引\n7. 需要回表的查询结果集过大（超过配置的范围）\n8. **将打算加索引的列设置为 NOT NULL，否则将导致引擎放弃使用索引而进行全表扫描**\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 392,
        "like_count": 21
    },
    {
        "id": 214,
        "tag_id": 6,
        "tag_type": 1,
        "title": "11.Dubbo是什么",
        "content": "## Dubbo 是什么？\n\nDubbo 是一款**高性能**、**轻量级**的开源 JavaRPC 框架，它提供了三大核心能力：**面向接口的远程方法调用**，**智能容错和负载均衡**，以及**服务自动注册和发现**。简单来说 Dubbo 是一个**分布式服务框架**，致力于提供**高性能和透明化的 RPC 远程服务调用方案**，以及**SOA 服务治理方案。**\n\n- **负载均衡**——同一个服务部署在不同的机器时该调用那一台机器上的服务。\n- **服务调用链路生成**——随着系统的发展，服务越来越多，服务间依赖关系变得错踪复杂，甚至分不清哪个应用要在哪个应用之前启动，架构师都不能完整的描述应用的架构关系。Dubbo 可以为我们解决服务之间互相是如何调用的。\n- **服务访问压力以及时长统计、资源调度和治理**——基于访问压力实时管理集群容量，提高集群利用率。\n- **服务降级**——某个服务挂掉之后调用备用服务。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 455,
        "like_count": 68
    },
    {
        "id": 251,
        "tag_id": 7,
        "tag_type": 2,
        "title": "11.闭包",
        "content": "# 闭包\n\n## 问题\n\n### 变量作用域\n\n作用域：**全局变量和局部变量**，则**函数内部可以直接读取全局变量，但是在函数外部无法读取函数内部的局部变量**\n\n### 如何获取内部局部变量\n\n```javascript\nfunction f1() {\n  var n = 999;\n  function f2() {\n    console.log(n); // 999\n  }\n}\n```\n\n数 f2 就被包括在函数 f1 内部，这时 f1 内部的所有局部变量，对 f2 都是可见的。但是反过来就不行，f2 内部的局部变量，对 f1 就是不可见的。这就是 Javascript 语言特有的 \\\"链式作用域\\\" 结构（chain scope），子对象会一级一级地向上寻找所有父对象的变量。所以，父对象的所有变量，对子对象都是可见的，反之则不成立。既然 f2 可以读取 f1 中的局部变量，那么只要把 f2 作为返回值，我们不就可以在 f1 外部读取它的内部变量了吗！\n\n```javascript\nfunction a() {\n  var n = 0;\n  function inc() {\n    n++;\n    console.log(n);\n  }\n  return inc; // 而返回的是内部函数\n}\nvar c = a();\nc(); //控制台输出1\nc(); //控制台输出2\n```\n\njs 的每个函数都是一个个小黑屋，它可以获取外界信息，但是外界却无法直接看到里面的内容。\n\n将变量 n 放进小黑屋里，除了 inc 函数之外，没有其他办法能接触到变量 n，而且在函数 a 外定义同名的变量 n 也是互不影响的，这就是所谓的增强“封装性”。\n\n而之所以要用 return 返回函数标识 inc，是因为在 a 函数外部无法直接调用 inc 函数，所以 return inc 与外部联系起来\n\n## 概念\n\n上面代码中的 f2 函数，就是闭包。说白了，**闭包就是能够读取其他函数内部变量的函数**，在本质上，闭包是将函数内部和函数外部连接起来的桥梁。\n\n## 用途\n\n- 可以读取函数内部的变量\n- 让这些变量的值始终保存在内存中，不会在外层调用后被自动清除：原因就在于 f1 是 f2 的父函数，而 f2 被赋给了一个全局变量，这导致 f2 始终在内存中，而 f2 的存在依赖于 f1，因此 f1 也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。\n\n## 优缺点\n\n### 优点\n\n- 避免全局变量的污染；\n- 能够读取函数内部的变量；\n- 在内存中维护一个变量\n\n### 缺点\n\n- 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在 IE 中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。\n- 操作不当容易浪费内存，造成内存泄漏\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 137,
        "like_count": 89
    },
    {
        "id": 26,
        "tag_id": 4,
        "tag_type": 3,
        "title": "12.TCP粘包",
        "content": "# TCP 粘包\n\n**TCP 粘包**是指发送方发送的若干包数据到接收方接收时粘成一包，从接收缓冲区看，后一包数据的头紧接着前一包数据的尾。\n\n个人觉得：应用层的报文在以流的形式传输时，每一个报文的报头紧接着上一个报文的报文尾部，这就是所谓的“粘包”问题。\n\n- 由 TCP**连接复用**造成的粘包问题。\n- 因为 TCP 默认会使用**Nagle 算法**，此算法会导致粘包问题。\n  - 只有上一个分组得到确认，才会发送下一个分组；\n  - 收集多个小分组，在一个确认到来时一起发送。\n- **数据包过大**造成的粘包问题。\n- 流量控制，**拥塞控制**也可能导致粘包。\n- **接收方不及时接收缓冲区的包，造成多个包接收**\n\n**解决**：\n\n1. **Nagle 算法**问题导致的，需要结合应用场景适当关闭该算法\n2. 尾部标记序列。通过特殊标识符表示数据包的边界，例如\\\\n\\\\r，\\\\t，或者一些隐藏字符。\n3. 头部标记分步接收。在 TCP 报文的头部加上表示数据长度。\n4. 应用层发送数据时**定长**发送。\n\n[https://blog.csdn.net/xp178171640/article/details/104746379/](https://blog.csdn.net/xp178171640/article/details/104746379/)\n\n[https://blog.csdn.net/songchuwang1868/article/details/87707127](https://blog.csdn.net/songchuwang1868/article/details/87707127)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 122,
        "like_count": 24
    },
    {
        "id": 47,
        "tag_id": 8,
        "tag_type": 2,
        "title": "12.css层叠样式表有哪几种类型",
        "content": "# css 层叠样式表有哪几种类型\n\n1. 内部样式表\n\n将样式代码写在页面`<style>...</style>`标签之中\n\n2. 外部样式表（.css 文件）\n\n可使用<link>标签链接到 HTML 中：`<link rel=\\\"stylesheet\\\" href=\\\"样式路径及全称\\\" type=\\\"text/css\\\"/>`\n\n3. 内联样式表\n\n利用 style 属性将样式写在 HTML 标签中。\n\n`<标签 style=\\\"属性：属性值；属性：属性值；\\\"></标签>`\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 352,
        "like_count": 14
    },
    {
        "id": 88,
        "tag_id": 1,
        "tag_type": 1,
        "title": "12.谈谈java的异常机制",
        "content": "> 面着面着，就修仙了，还原俺的真实面试场景。\n\n# 异常体系\n\n面试官：谈谈异常机制？\n\n我：只要涉及到谈谈，我内心都是崩溃的，不知道该如何说起\n\n一上来，我可能先回答：`Error` 和 `Exception` 是 `Throwable` 类的派生实例。说到此处，面试官还不得问一下 `Error`？\n\n## Error\n\n面试官：给我讲讲什么是 `Error`？\n\n我：其实就是明显的给自己挖坑，哈能咋滴！**Error 描述了 Java 运行时系统的内部错误和资源耗尽错误，你比如栈溢出和堆溢出啦**？不好，面试官微笑了。\n\n面试官：讲一下什么是栈溢出和堆溢出？\n\n我：哎，中枪了，这咋害能扯到虚拟机上了\n\n- `StackOverFlowError`：**如果线程请求的栈深度大于虚拟机所允许的深度**，将抛出此异常。比如，**无限递归方法**，其实面试官按捺不住的问\n\n面试官：为什么无限递归方法就可以抛出该异常？\n\n我：因为我们知道，**每次调用方法所产生资源都存放在了虚拟机栈中**，如果无限递归下去，那岂不是？\n\n面试官：虚拟机栈存了什么资源？\n\n我：我真的是！虚拟机栈存了**局部变量表、操作数栈、动态链接和方法出口**。\n\n面试官：局部变量表中存了什么？\n\n我：啊？还好我会，存放了编译期可知的各种**基本数据类型(8 大基本类型)**，**对象引用类型**，它不等同于对象本身，可能是一个指向对象**起始地址的引用指针**，也可能是指向一个**代表对象的句柄或其他与此对象相关的位置**。\n\n面试官：好，开始讲堆溢出\n\n我：害能给我绕回来...如果**虚拟机可动态扩展，如果扩展时无法申请到足够的内存**，就会抛出 `OutOfMemoryError` 异常，当然，**如果在堆中没有内存完成实例分配，并且堆也无法再扩展时**，也会抛出该异常。比如，我又挖坑，举例子：无限创建线程。这次我主动说原因：操作系统分配给每个进程内存是有限的，比如 32 位的 `windows` 限制为 2G。虚拟机提供了参数来控制堆和方法区的内存的最大值，而剩下的内存，忽略其他因素，就由虚拟机栈和本地方法栈“瓜分天下了”。**每个线程分配到栈容越大，可以建立的线程数量自然就越少，建立线程时就越容易把剩下的内存耗尽。**\n\n面试官：**嘿嘿，方法区会溢出吗？**\n\n我：嘿嘿，会。比如方法区中有一个**运行时常量池**，晓得吧？其中 `String.intern()`方法是一个 `native` 方法，它(1.6)的作用是：如果字符串常量池中已经包含了此 `String` 对象的字符串，则返回代表池中这个字符串 `String` 对象；**否则，将此 String 对象所包含的字符串添加到常量池中，并且返回此 String 对象的引用**。在 1.7 版本就不一样了，**而是从堆中实例 String 对象的引用复制到常量池并返回**。当然，还有很多带有**反射**机制的框架，大量使用反射创建类来填满方法区。\n\n面试官：嘿嘿，直接内存会溢出吗？\n\n我：简直了，太能问了。那肯定也是能的哦，比如 `DirectByteBuffer`。\n\n## Exception\n\n面试官：可以了，聊 `Exception`\n\n我：无限退出递模式！`Exception` 又分解为**RuntimeException**（运行时）和程序本身没有问题，由于像 IO 错误这类问题导致的异常（编译）。\n\n面试官：`RuntimeException` 中有哪些，举一些？\n\n我：好的，比如，`NullPointerException`，`ArithmeticException`，`ClassCastException`，`ArrayIndexOutOfBoundsException`等\n\n面试官：什么是受检异常和非受检异常？\n\n我：派生于**Error 类或 RuntimeException 类**的所有异常称为非受检异常，所有其他的异常称为受检异常。\n\n## 捕获异常\n\n面试官：如何捕获异常？\n\n我：\n\n- `try` 块： 用于捕获异常。其后可接零个或多个`catch`块，如果没有`catch`块，则必须跟一个`finally`块。\n\n- `catch` 块： 用于处理`try`捕获到的异常。\n\n- `finally` 块： 无论是否捕获或处理异常，`finally`块里的语句都会被执行。当在`try`块或`catch`块中遇到`return`语句时，`finally`语句块将在方法返回之前被执行。\n\nthrow 抛出异常,throws 是方法可能抛出异常的声明。(用在声明方法时，表示该方法可能要抛出异常)\n\n注意：finally return 会覆盖 try 和 catch 的返回值(反编译看看是覆盖还是优先级)\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(test());\n    }\n\n    public static int test() {\n        int a = 0;\n        try {\n            int b = 1 / 0; // 不管发生不发生异常\n            a++;\n            return a;\n        } catch (Exception e) {\n            a++;\n            return a;\n        } finally {\n            return 5;\n        }\n    }\n}\n// 结果都是5\n```\n\n## 结束\n\n面试官：可以，我们换一波问题。\n\n我：既然聊到了非受检异常，我还想扯一波 `Spring` 事务，`Spring` 事务失效的原因，其中原因之一有非受检异常的原因。\n\n简单这里提一下原因：\n\n1. 数据库引擎不支持事务\n\n2. 没有被 `Spring` 管理\n\n3. 方法不是 `public` 的\n\n4. 自身调用问题\n\n5. 数据源没有配置事务管理器\n\n6. 不支持事务（传播机制）\n\n7. 异常被吃了（捕获异常）\n\n8. 异常类型错误（checked 异常失效）\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 171,
        "like_count": 28
    },
    {
        "id": 199,
        "tag_id": 2,
        "tag_type": 1,
        "title": "12.索引最左",
        "content": "# 索引最左\n\n**索引最左原则：**\n\n**举例子**：\n如果索引列分别为 A，B，C，顺序也是 A，B，C：\n\n- 那么查询的时候，如果查询【A】【A，B】 【A，B，C】，那么可以通过索引查询\n- 如果查询的时候，采用【A，C】，那么 C 这个虽然是索引，但是由于中间缺失了 B，因此 C 这个索引是用不到的，只能用到 A 索引\n- 如果查询的时候，采用【B】 【B，C】 【C】，由于没有用到第一列索引，不是最左前缀，那么后面的索引也是用不到了\n- 如果查询的时候，采用范围查询，并且是最左前缀，也就是第一列索引，那么可以用到索引，但是范围后面的列无法用到索引（比如，a>= 3 and b = 4 and c = 5; A 走索引，bc 不走）（比如，a = 3 and b >= 4 and c = 5; a 和 b 走，c 不走）\n\n**组合索引的底层其实按照第一个索引排序，从排序里面查第二个索引，以此类推。如果第一个索引失效，或者没有经过第一个索引，后面没发在前面的基础上查询。**\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 473,
        "like_count": 96
    },
    {
        "id": 238,
        "tag_id": 6,
        "tag_type": 1,
        "title": "12.简单讲Dubbo架构",
        "content": "## Dubbo 的图解？\n\n![dubbo架构-AwhhL9](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/dubbo架构-AwhhL9.png)\n\n- **Provider：**暴露服务的服务提供方\n- **Consumer：**调用远程服务的服务消费方\n- **Registry：**服务注册与发现的注册中心\n- **Monitor：**统计服务的调用次数和调用时间的监控中心\n- **Container：**服务运行容器\n\n**调用关系说明**：\n\n- 服务容器负责启动，加载，运行服务提供者。\n- 服务提供者在启动时，向注册中心注册自己提供的服务。\n- 服务消费者在启动时，向注册中心订阅自己所需的服务。\n- 注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者。\n- 服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。\n- 服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。\n\n**各个组件总结**：\n\n- 注册中心负责服务地址的注册与查找，相当于目录服务，服务提供者和消费者只在启动时与注册中心交互，注册中心不转发请求，压力较小\n- 监控中心负责统计各服务调用次数，调用时间等，统计先在内存汇总后每分钟一次发送到监控中心服务器，并以报表展示\n- 注册中心，服务提供者，服务消费者三者之间均为长连接，监控中心除外\n- 注册中心通过长连接感知服务提供者的存在，服务提供者宕机，注册中心将立即推送事件通知消费者\n- 注册中心和监控中心全部宕机，不影响已运行的提供者和消费者，消费者在本地缓存了提供者列表\n- 注册中心和监控中心都是可选的，服务消费者可以直连服务提供者\n- 服务提供者无状态，任意一台宕掉后，不影响使用\n- 服务提供者全部宕掉后，服务消费者应用将无法使用，并无限次重连等待服务提供者恢复\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 294,
        "like_count": 61
    },
    {
        "id": 250,
        "tag_id": 7,
        "tag_type": 2,
        "title": "12.js为什么是单线程",
        "content": "# js 为什么是单线程\n\n## 比喻\n\n进程就是一个公司，每个公司都有自己的资源可以调度；公司之间是相互独立的；而线程就是公司中的每个员工(你，我，他)，多个员工一起合作，完成任务，公司可以有一名员工或多个，员工之间共享公司的空间\n\n## 什么是进程？\n\n进程：是 cpu 分配资源的最小单位；即是能拥有资源和独立运行的最小单位\n\n## 什么是线程？\n\n线程：是 cpu 调度的最小单位；即线程是简历在进程的基础上的一次程序运行单位，一个进程中可以有多个线程\n\n## 浏览器是多进程\n\n放在浏览器中，每打开一个 tab 页面，其实就是新开了一个进程，在这个进程中，还有 ui 渲染线程，js 引擎线程，http 请求线程等。 所以，浏览器是一个多进程的。\n\n### 为什么设计单线程？\n\n这主要和 js 的用途有关，js 是作为浏览器的脚本语言，主要是实现用户与浏览器的交互，以及操作 dom；这决定了它只能是单线程，否则会带来很复杂的同步问题。 举个例子：如果 js 被设计了多线程，如果有一个线程要修改一个 dom 元素，另一个线程要删除这个 dom 元素，此时浏览器就会一脸茫然，不知所措。所以，为了避免复杂性，从一诞生，JavaScript 就是单线程，这已经成了这门语言的核心特征，将来也不会改变（主要是怕同步带来的复杂性）\n\n为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，**但是子线程完全受主线程控制，且不得操作 DOM**。所以，这个新标准并没有改变 JavaScript 单线程的本质。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 383,
        "like_count": 22
    },
    {
        "id": 22,
        "tag_id": 4,
        "tag_type": 3,
        "title": "13.TCP协议如何保证可靠传输",
        "content": "# TCP 协议如何保证可靠传输？\n\n- **确认和重传**：接收方收到报文就会确认，发送方发送一段时间后没有收到确认就会重传。\n- **数据校验**：TCP 报文头有校验和，用于校验报文是否损坏。\n- **数据合理分片和排序**：tcp 会按最大传输单元(MTU)合理分片，接收方会缓存未按序到达的数据，重新排序后交给应用层。而 UDP：IP 数据报大于 1500 字节，大于 MTU。这个时候发送方的 IP 层就需要分片，把数据报分成若干片，是的每一片都小于 MTU。而接收方 IP 层则需要进行数据报的重组。由于 UDP 的特性，某一片数据丢失时，接收方便无法重组数据报，导致丢弃整个 UDP 数据报。\n- **流量控制**：当接收方来不及处理发送方的数据，能通过滑动窗口，提示发送方降低发送的速率，防止包丢失。\n- **拥塞控制**：当网络拥塞时，通过拥塞窗口，减少数据的发送，防止包丢失。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 15,
        "like_count": 55
    },
    {
        "id": 41,
        "tag_id": 8,
        "tag_type": 2,
        "title": "13.meta和viewport是做什么的",
        "content": "# meta 和 viewport 是做什么的\n\n## meta 标签\n\n> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。\n\n## viewport\n\nviewport 是 meta 标签的 name 属性中可选值中的一个，指 web 页面上用户可见的区域，用于移动端页面设计，代码如下：\n\n```html\n<meta\n  name=\\\"viewport\\\"\n  content=\\\"width=device-width, initial-scale=1, maximum-scale=1\\\"\n/>\n```\n\n由于 PC 端的 viewport 比移动端大，所以为了解决这个问题，浏览器只能的等比的缩小整个页面，导致页面的字体，图片等等都显得非常小，而由于 PC 端的 viewport 是横屏的（宽大大于高），而移动端是竖屏，所以用户放大网页之后还会出现横向的滚动条，这一系列都让用户体验相当不好\n\n让我们再来看看一开始的设置：\n\n```html\n<meta\n  name=\\\"viewport\\\"\n  content=\\\"width=device-width, initial-scale=1, maximum-scale=1\\\"\n/>\n```\n\n<table><thead><tr><th>key</th><th>mean</th><th>example</th></tr></thead><tbody><tr><td>width</td><td>视口的宽度</td><td>width=device-width 指缩放为 100% 时以 CSS 像素计量的屏幕宽度</td></tr><tr><td>initial-scale</td><td>初始化缩放比例</td><td>initial-scale=1.0 初始化不进行缩放</td></tr><tr><td>maximum-scale</td><td>用户最大缩放比例</td><td>maximum-scale=1.0 不允许用户缩放</td></tr></tbody></table>\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 362,
        "like_count": 98
    },
    {
        "id": 134,
        "tag_id": 1,
        "tag_type": 1,
        "title": "13.面向对象的三大特性",
        "content": "# 对象特性\n\n## 封装\n\n封装把一个对象的**属性私有化**，同时提供一些可以**被外界访问的属性的方法**。\n\n```java\nclass Person{\n    String name; // 属性\n    int age;\n\n    // 方法\n    public Person(String name, int age){\n        this.name = name;\n        this.age = age;\n    }\n}\n```\n\n## 继承\n\n继承是使用**已存在的类**的定义作为基础建立新类的技术，新类的定义可以增加**新的数据或新的功能，也可以用父类的功能，但不能选择性地继承父类**。通过使用继承我们能够非常方便地复用以前的代码。\n\n```java\nclass Student extends Person{\n    double grade; // 在已经的name，age中， 在学生类中添加了成绩或者班级\n\n    // 方法\n    public Student(String name, int age, double grade) {\n        this.name = name;\n        this.age = age;\n        this.grade = grade;\n    }\n}\n```\n\n## 多态\n\n### 定义\n\n三要素：加黑的地方！\n\n首先我觉得即**一个引用变量到底会指向哪个类的实例对象**，该**引用变量发出的方法调用到底是哪个类中实现的方法**，必须在由程序**运行期间**才能决定。强调在编译的时候，不知道该引用指向的是哪个对象的实例，包括调用哪个实例的方法，只有运行的时候，动态知道。\n\n举个例子：\n\n任何事物的多个姿态，多个形态。比如，你说一个猫在吃东西，同样的，你也能说一个动物在吃东西。\n\n```java\npublic class Test {\n    public static void main(String[] args){\n        Animal animal = new Cat();\n        animal.eat() // 猫也会吃饭\n        // 你看到了一只猫，同样它也是动物\n        // 比如有很多其他种类继承了动物哈，\n        // 当编译期间的animal引用变量，到底指的哪个实例对象，（重要）（主语是引用变量）\n        // 或者该引用调用的eat方法，到底是哪个实例对象的eat，编译期间恐怕不知道哦（主语是引用变量）\n        // 只有运行期间，哦哦， 原来是猫的eat方法哇...\n    }\n}\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 216,
        "like_count": 86
    },
    {
        "id": 190,
        "tag_id": 2,
        "tag_type": 1,
        "title": "13.为什么使用索引",
        "content": "# 为什么使用索引\n\n- 通过创建唯一性索引，可以保证数据库表中每一行数据的**唯一性**。\n- 可以大大加快数据的**检索速度**，这也是创建索引的最主要的原因。\n- 帮助服务器**避免排序和临时表**。\n- 将**随机 IO 变为顺序 IO**。\n- 可以**加速表和表之间的连接**，特别是在实现数据的参考完整性方面特别有意义。\n\n但是使用索引要看一条准则--- 那就是读写比例，我们知道索引的缺点：\n\n- 当对表中的数据进行增加、删除和修改的时候，**索引也要动态的维护**，这样就降低了数据的维护速度。\n- 索引需要**占物理空间**，除了数据表占数据空间之外，每一个索引还要占一定的物理空间，如果要建立簇索引，那么需要的空间就会更大。\n- **创建索引和维护索引要耗费时间**，这种时间随着数据量的增加而增加\n\n**你想，如果某个场景，发送 10 条请求，9 条写，1 条读。 加索引岂不是在浪费效率和空间？**\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 477,
        "like_count": 52
    },
    {
        "id": 231,
        "tag_id": 6,
        "tag_type": 1,
        "title": "13.Dubbo和SpringCloud的区别",
        "content": "## Dubbo 和 SpringCloud 的区别？\n\n- **底层**：`Dubbo`底层是使用 Netty 的 NIO 框架，基于 TCP 协议传输，使用 Hession 序列化完成 RPC 通信；`SpringCloud`是基于 HTTP 协议+REST 接口调用远程过程的通信，HTTP 请求会有更大的报文，占的带宽也会更多。但是 REST 相比 RPC 更为灵活，不存在代码级别的强依赖。\n- **集成**：springcloud 相关组件多，有自己的注册中心网关等，集成方便，Dubbo 需要自己额外去集成。Dubbo 是 SOA 时代的产物，它的关注点主要在于**服务的调用，流量分发、流量监控和熔断**。而 SpringCloud 诞生于微服务架构时代，考虑的是微服务治理的方方面面，另外由于依托了 Spring、SpringBoot 的优势之上，两个框架在开始目标就不一致，Dubbo 定位服务治理、SpirngCloud 是一个生态。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 399,
        "like_count": 96
    },
    {
        "id": 246,
        "tag_id": 7,
        "tag_type": 2,
        "title": "13.垃圾回收机制",
        "content": "# 垃圾回收机制\n\n## 引言\n\nJavaScript 中的内存管理是自动执行的，而且是不可见的。我们创建基本类型、对象、函数…… 所有这些都需要内存。\n\n## 可达性\n\n“可达性” 值就是那些以某种方式可访问或可用的值，它们被保证存储在内存中。\n\n1. 有一组基本的固有可达值，由于显而易见的原因无法删除。例如\n\n- 本地函数的局部变量和参数\n- 当前嵌套调用链上的其他函数的变量和参数\n- 全局变量\n\n这些值称为**根**\n\n2. 如果引用或引用链可以从根访问任何其他值，则认为该值是可访问的。\n\n例如，如果局部变量中有对象，并且该对象具有引用另一个对象的属性，则该对象被视为**可达性**，它引用的那些也是可以访问的。\n\n其实，JavaScript 引擎中有一个后台进程称为**垃圾回收器**，它监视所以对象，并删除那些不可访问的对象。\n\n### 举个例子\n\n```javascript\nlet user = {\n  name: \\\"Mai\\\",\n};\n```\n\n全局变量`user`引用对象`{name:\\\"mai\\\"}`,如果`user`的值被覆盖，如，`user = null`则引用丢失。则没有变量引用对象，则为不可达的状态，垃圾回收器将丢失{name:\\\"Mai\\\"}数据并释放内存。\n\n### 两个引用\n\n```javascript\nlet user = {\n  name: \\\"Mai\\\",\n};\nlet admin = user;\n```\n\n根据以上代码，user 和 admin 引用变量，指向同一个 Object(Mai)，那么现在`user = null;`\n\n该对象仍然可以通过 `admin` 全局变量访问，所以它在内存中。如果我们也覆盖`admin`，那么它可以被释放。\n\n### 相互关联的对象\n\n```javascript\nfunction marry(man, woman) {\n  woman.husban = man;\n  man.wife = woman;\n\n  return {\n    father: man,\n    mother: woman,\n  };\n}\n\nlet family = marry(\n  {\n    name: \\\"John\\\",\n  },\n  {\n    name: \\\"Ann\\\",\n  }\n);\n```\n\n![js垃圾回收-1-Lc52zq](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js垃圾回收-1-Lc52zq.png)\n\n现在让我们删除两个引用：\n\n```javascript\ndelete family.father;\ndelete family.mother.husband;\n```\n\n![js垃圾回收-2-Zy9h71](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js垃圾回收-2-Zy9h71.png)\n\n仅仅删除这两个引用中的一个是不够的，因为所有对象仍然是可访问的。\n\n但是如果我们把这两个都删除，那么我们可以看到 **John** 不再有传入的引用:\n\n![js垃圾回收-3-O9Q7zz](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js垃圾回收-3-O9Q7zz.png)\n\n输出引用无关紧要。只有传入的对象才能使对象可访问，因此，**John** 现在是不可访问的，并将从内存中删除所有不可访问的数据。\n\n垃圾回收之后：\n\n![js垃圾回收-4-LfqeKd](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js垃圾回收-4-LfqeKd.png)\n\n### 无法访问的数据块\n\n```javascript\nfamily = null;\n```\n\n内存中的图片变成：\n\n![js垃圾回收-5-ienOnL](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js垃圾回收-5-ienOnL.png)\n\n“family” 对象已经从根上断开了链接，不再有对它的引用，因此下面的整个块变得不可到达，并将被删除。\n\n## 内部算法\n\n基本的垃圾回收算法称为 **“标记 - 清除”**，定期执行以下 “垃圾回收” 步骤:\n\n- 垃圾回收器获取根并 **“标记”**(记住) 它们。\n- 然后它访问并 “标记” 所有来自它们的引用。\n- 然后它访问标记的对象并标记它们的引用。所有被访问的对象都被记住，以便以后不再访问同一个对象两次。\n- 以此类推，直到有未访问的引用 (可以从根访问) 为止。\n- 除标记的对象外，所有对象都被删除。\n\n例如，对象结构如下：\n\n![js垃圾回收-6-IjcFHB](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js垃圾回收-6-IjcFHB.png)\n\n我们可以清楚地看到右边有一个 “不可到达的块”。现在让我们看看 **“标记并清除”** 垃圾回收器如何处理它。\n\n**第一步标记根**\n\n![js垃圾回收-7-kcC4cD](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js垃圾回收-7-kcC4cD.png)\n\n**然后标记它们的引用**\n\n![js垃圾回收-8-S5mPKj](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js垃圾回收-8-S5mPKj.png)\n\n**以及子孙代的引用**\n\n![js垃圾回收-9-7rVAl0](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js垃圾回收-9-7rVAl0.png)\n\n**现在进程中不能访问的对象被认为是不可访问的，将被删除:**\n\n![js垃圾回收-10-r45CSV](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js垃圾回收-10-r45CSV.png)\n\n这就是垃圾收集的工作原理。JavaScript 引擎应用了许多优化，使其运行得更快，并且不影响执行。\n\n- **分代回收**——对象分为两组:“新对象” 和 “旧对象”。许多对象出现，完成它们的工作并迅速结 ，它们很快就会被清理干净。那些活得足够久的对象，会变 “老”，并且很少接受检查。\n- **增量回收**——如果有很多对象，并且我们试图一次遍历并标记整个对象集，那么可能会花费一些时间，并在执行中会有一定的延迟。因此，引擎试图将垃圾回收分解为多个部分。然后，各个部分分别执行。这需要额外的标记来跟踪变化，这样有很多微小的延迟，而不是很大的延迟。\n- **空闲时间收集**——垃圾回收器只在 CPU 空闲时运行，以减少对执行的可能影响。\n\n## 面试怎么回答\n\n### 什么是垃圾\n\n一般来说没有被引用的对象就是垃圾，就是要被清除， 有个例外如果几个对象引用形成一个环，互相引用，但根访问不到它们，这几个对象也是垃圾，也要被清除。\n\n### 如何收集垃圾\n\n一种算法是标记 **标记 - 清除** 算法，当然还有其他 GC 算法如[链接](https://www.jianshu.com/p/a8a04fd00c3c)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 232,
        "like_count": 49
    },
    {
        "id": 29,
        "tag_id": 4,
        "tag_type": 3,
        "title": "14.TCP实现流量控制的机制",
        "content": "# TCP 利用滑动窗口实现流量控制的机制？\n\n> 流量控制是为了控制发送方发送速率，保证接收方来得及接收。TCP 利用滑动窗口实现流量控制。\n\nTCP 中采用滑动窗口来进行传输控制，滑动窗口的大小意味着**接收方还有多大的缓冲区可以用于接收数据**。发送方可以通过滑动窗口的大小来确定应该发送多少字节的数据。当滑动窗口为 0 时，发送方一般不能再发送数据报，但有两种情况除外，一种情况是可以发送紧急数据。\n\n> 例如，允许用户终止在远端机上的运行进程。另一种情况是发送方可以发送一个 1 字节的数据报来通知接收方重新声明它希望接收的下一字节及发送方的滑动窗口大小。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 29,
        "like_count": 36
    },
    {
        "id": 156,
        "tag_id": 1,
        "tag_type": 1,
        "title": "14.多态的底层原理",
        "content": "# 多态\n\n## 定义\n\n三要素：加黑的地方！\n\n首先我觉得即**一个引用变量到底会指向哪个类的实例对象**，该**引用变量发出的方法调用到底是哪个类中实现的方法**，必须在由程序**运行期间**才能决定。强调在编译的时候，不知道该引用指向的是哪个对象的实例，包括调用哪个实例的方法，只有运行的时候，动态知道。\n\n举个例子：\n\n任何事物的多个姿态，多个形态。比如，你说一个猫在吃东西，同样的，你也能说一个动物在吃东西。\n\n```java\npublic class Test {\n    public static void main(String[] args){\n        Animal animal = new Cat();\n        animal.eat() // 猫也会吃饭\n        // 你看到了一只猫，同样它也是动物\n        // 比如有很多其他种类继承了动物哈，\n        // 当编译期间的animal引用变量，到底指的哪个实例对象，（重要）（主语是引用变量）\n        // 或者该引用调用的eat方法，到底是哪个实例对象的eat，编译期间恐怕不知道哦（主语是引用变量）\n        // 只有运行期间，哦哦， 原来是猫的eat方法哇...\n    }\n}\n```\n\n## 表现形式\n\n- **Java 的方法重载，就是在类中可以创建多个方法，它们具有相同的名字，但可具有不同的参数列表、返回值类型。调用方法时通过传递的参数类型来决定具体使用哪个方法**，这就是多态性。比如，`java lang` 的包很多工具类如 `String` 工具类，那么就有很多相同的名字，但是参数类型、数量和返回值等等不一样。\n\n- **Java 的方法重写，是父类与子类之间的多态性，子类可继承父类中的方法，但有时子类并不想原封不动地继承父类的方法，而是想作一定的修改，这就需要采用方法的重写。重写的参数列表和返回类型均不可修改**。这也是多态性。比如 `JUC` 的 `AQS` 框架，凡事继承了 `AQS` 的那几个类，其中几个重要的方法，都被重写了，很多这样的情况。\n\n## 底层\n\n首先要说：首先当程序运行需要某个类时，类加载器会将相应的 `class` 文件载入到 JVM 中，并在方法区建立该类的类型信息（包括方法代码，类变量、成员变量以及**方法表**。（标黑的这个玩意）\n\n面试官：方法表有啥？\n\n我：方法表的结构如同字段表一样，依次包括了**访问标志、名称索引、描述符索引、属性表集合**几项。\n\n接着回答：**方法表是实现动态调用的核心。为了优化对象调用方法的速度，方法区的类型信息会增加一个指针，该指针指向记录该类方法的方法表，方法表中的每一个项都是对应方法的指针**。\n\n到这里：就要分情况讨论了，一个是方法调用，一个是接口\n\n### 方法调用\n\n```java\nclass Person {\n    // 重写object的toString\n    public String toString(){\n        return \\\"I\\'m a person.\\\";\n    }\n    public void eat(){}\n    public void speak(){}\n\n}\n\nclass Boy extends Person{\n    // 重写object的toString\n    public String toString(){\n        return \\\"I\\'m a boy\\\";\n    }\n    // 继承Person的speak\n    public void speak(){}\n    // 自己实现的自定义方法\n    public void fight(){}\n}\n\nclass Girl extends Person{\n    // 重写object的toString\n    public String toString(){\n        return \\\"I\\'m a girl\\\";\n    }\n    // 继承Person的speak\n    public void speak(){}\n    // 自己实现的自定义方法\n    public void sing(){}\n}\n```\n\n![多态的底层原理-5jdak6](http://imgs.heiye.site/uPic/%E5%A4%9A%E6%80%81%E7%9A%84%E5%BA%95%E5%B1%82%E5%8E%9F%E7%90%86-ioAt9U.png)\n\n这张图的指向：你可以根据颜色对应上，注意方法表条目指向的具体的**方法地址**。其次注意蓝色部分其继承自于 `Person` 的方法 `eat()` 和 `speak()` 分别指向 **Person 的方法实现和本身的实现**。如果子类改写了父类的方法，那么子类和父类的那些**同名的方法共享一个方法表项**。因此，**所有继承父类的子类的方法表中，其父类所定义的方法的偏移量也总是一个定值**。`Person` 或 `Object` 中的任意一个方法，在它们的方法表和其子类 Girl 和 Boy 的方法表中的位置 (index) 是一样的。这样 JVM 在调用实例方法其实只需要指定调用方法表中的第几个方法即可。\n\n调用过程：\n\n1. 在常量池里找到方法调用的**符号引用**（肯定先看到 `Person` 定义引用类型）\n2. 查看 `Person` 的方法表，得到 `speak` 方法在该**方法表的偏移量**（假设为 15），这样就得到该方法的直接引用。\n3. 根据 `this`（invoker this 字节码）指针得到**具体的对象**（即 `girl` 所指向的位于堆中的对象）。\n4. 根据对象得到该对象对应的方法表，根据偏移量 15 查看**有无重写（override）该方法**，如果重写，则可以直接调用（`Girl` 的方法表的 `speak` 项指向自身的方法而非父类）；如果没有重写，则需要拿到按照继承关系从下往上的基类（这里是 Person 类）的方法表，同样按照这个偏移量 15 查看有无该方法。\n\n### 接口调用\n\n一个类可以实现多个接口，那么就像多继承一样，这样的话，在方法表中的索引就会不一样，所以 `Java` 对于接口方法的调用是采用**搜索方法表**的方式。\n\n## 初始化顺序\n\n有这样的两个类：`Person` 和 `Student`\n\nPerson:\n\n```java\nclass Person{\n    // 静态代码块\n    static {\n        System.out.println(\\\"Person 静态方法\\\");\n    }\n    // 代码块\n    {\n        System.out.println(\\\"Person 代码块\\\");\n    }\n    // 构造方法\n    Person(){\n        System.out.println(\\\"Person 构造方法\\\");\n    }\n}\n```\n\nStudent:\n\n```java\nclass Student extends Person{\n    // 静态代码块\n    static {\n        System.out.println(\\\"Student 静态方法\\\");\n    }\n    // 代码块\n    {\n        System.out.println(\\\"Student 代码块\\\");\n    }\n    // 构造方法\n    Student(){\n        System.out.println(\\\"Student 构造方法\\\");\n    }\n}\n```\n\n测试\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        Student student = new Student();\n    }\n}\n\n// result:\n\nPerson 静态方法\nStudent 静态方法\nPerson 代码块\nPerson 构造方法\nStudent 代码块\nStudent 构造方法\n```\n\n解释：还不是因为类加载器的双亲委派哈， 先走类方法，也就是说 static 属于类，所以先调用**Person static -> Student static**，接着走对象的初始化，那么对象初始化了，还是先走父类的初始化了，所以**Perosn {} -> Person(){}**，最后走子类的初始化**Student {} -> Student(){}**\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 243,
        "like_count": 54
    },
    {
        "id": 198,
        "tag_id": 2,
        "tag_type": 1,
        "title": "14.你知道explain吗",
        "content": "# explain\n\n面试官：聊聊**explain**\n\n我：好的，不过这一块内容好多，我只说几个关键的吧\n\n1. id : 表示 SQL 执行的顺序的标识,SQL 从大到小的执行\n2. select_type：表示查询中每个 select 子句的类型\n3. table：显示这一行的数据是关于哪张表的，有时不是真实的表名字\n4. type：表示 MySQL 在表中找到所需行的方式，又称“访问类型”。常用的类型有： ALL, index, range, ref, eq_ref, const, system, NULL（从左到右，性能从差到好）\n5. possible_keys：指出 MySQL 能使用哪个索引在表中找到记录，查询涉及到的字段上若存在索引，则该索引将被列出，但不一定被查询使用\n6. Key：key 列显示 MySQL 实际决定使用的键（索引），如果没有选择索引，键是 NULL。\n7. key_len：表示索引中使用的字节数，可通过该列计算查询中使用的索引的长度（key_len 显示的值为索引字段的最大可能长度，并非实际使用长度，即 key_len 是根据表定义计算而得，不是通过表内检索出的）\n8. ref：表示上述表的连接匹配条件，即哪些列或常量被用于查找索引列上的值\n9. rows： 表示 MySQL 根据表统计信息及索引选用情况，估算的找到所需的记录所需要读取的行数，理论上行数越少，查询性能越好\n10. Extra：该列包含 MySQL 解决查询的详细信息\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 440,
        "like_count": 40
    },
    {
        "id": 225,
        "tag_id": 6,
        "tag_type": 1,
        "title": "14.Dubbo的容错机制",
        "content": "## Dubbo 的容错机制\n\n1. Failover Cluster 失败自动切换，当出现失败，重试其它服务器。通常用于读操作，但重试会带来更长延迟。可通过 retries=\\\"2\\\" 来设置重试次数\n2. Failfast Cluster 快速失败，只发起一次调用，失败立即报错。通常用于非幂等性的写操作，比如新增记录。\n3. Failsafe Cluster 失败安全，出现异常时，直接忽略。通常用于写入审计日志等操作。\n4. Failback Cluster 失败自动恢复，后台记录失败请求，定时重发。通常用于消息通知操作。\n5. Forking Cluster 并行调用多个服务器，只要一个成功即返回。通常用于实时性要求较高的读操作，但需要浪费更多服务资源。可通过 forks=\\\"2\\\" 来设置最大并行数。\n6. 广播调用所有提供者，逐个调用，任意一台报错则报错。通常用于通知所有提供者更新缓存或日志等本地资源信息\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 278,
        "like_count": 4
    },
    {
        "id": 242,
        "tag_id": 7,
        "tag_type": 2,
        "title": "14.内存泄露",
        "content": "# 内存泄漏\n\n## 什么是内存？\n\n> 题外话了，在硬件级别上，计算机内存由大量触发器组成。每个触发器包含几个晶体管，能够存储一个位。单个触发器可以通过唯一标识符寻址，因此我们可以读取和覆盖它们。因此，从概念上讲，我们可以把我们的整个计算机内存看作是一个巨大的位数组，我们可以读和写。\n\n## 内存生命周期\n\n内存也是有生命周期的，不管是什么程序语言，一般可以按顺序分为三个周期：\n\n- 分配器：分配所需要的内存\n- 使用期：使用分配到内存（读、写）\n- 释放期：不需要时将其释放和归还\n\n## 什么是内存泄漏？\n\n> **内存泄漏**指由于疏忽或错误造成程序未能释放已经不再使用的内存。内存泄漏并非指内存在物理上的消失，而是应用程序分配某段内存后，由于设计错误，导致在释放该段内存之前就失去了对该段内存的控制，从而造成了内存的浪费。\n\n如果内存不需要时，没有经过生命周期的**释放期**，那么就存在**内存泄漏**。\n\n内存泄漏简单理解：无用的内存还在占用，得不到释放和归还。比较严重时，无用的内存会持续递增，从而导致整个系统卡顿，甚至崩溃。\n\n## JS 内存管理机制\n\nJavaScript 内存管理机制和内存的**生命周期**是一一对应的。首先需要**分配内存**，然后**使用内存**，最后**释放内存**。\n\n### 内存分配\n\n看一下内存自动分配的例子：\n\n```javascript\n// 给数值变量分配内存\nlet number = 123;\n// 给字符串分配内存\nconst string = \\\"xianshannan\\\";\n// 给对象及其包含的值分配内存\nconst object = {\n  a: 1,\n  b: null,\n};\n// 给数组及其包含的值分配内存（就像对象一样）\nconst array = [1, null, \\\"abra\\\"];\n// 给函数（可调用的对象）分配内存\nfunction func(a) {\n  return a;\n}\n```\n\n### 内存使用\n\n其实就是**读取和写入**，即读取与写入可能是写入一个变量或者一个对象的属性值，甚至传递函数的参数。\n\n```javascript\n// 写入内存\nnumber = 234;\n// 读取 number 和 func 的内存，写入 func 参数内存\nfunc(number);\n```\n\n### 内存回收\n\n前端界一般称**垃圾内存回收**为 `GC`（Garbage Collection，即垃圾回收）。其实，Java 也是这样称呼的\n\n**内存泄漏一般都是发生在这一步，JavaScript 的内存回收机制虽然能回收绝大部分的垃圾内存，但是还是存在回收不了的情况，如果存在这些情况，需要我们手动清理内存。**\n\n#### 引用计数垃圾回收\n\n> 这是最初级的垃圾收集算法。此算法把 “对象是否不再需要” 简化定义为“对象有没有其他对象引用到它”。如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。\n\n```javascript\n// “这个对象”分配给 a 变量\nvar a = {\n  a: 1,\n  b: 2,\n};\n// b 引用“这个对象”\nvar b = a;\n// 现在，“这个对象”的原始引用 a 被 b 替换了\na = 1;\n```\n\n当前执行环境中，“这个对象”内存还没有被回收的，需要手动释放 “这个对象” 的内存（当然是还没离开执行环境的情况下），例如：\n\n```javascript\nb = null;\n// 或者 b = 1，反正替换“这个对象”就行了\n```\n\n这样引用的 \\\"这个对象\\\" 的内存就被回收了。\n\nES6 把**引用**有区分为**强引用**和**弱引用**，这个目前只有再 Set 和 Map 中才有。\n\n**强引用**才会有**引用计数**叠加，只有引用计数为 0 的对象的内存才会被回收，所以一般需要手动回收内存（手动回收的前提在于**标记清除法**还没执行，还处于当前执行环境）。\n\n而**弱引用**没有触发**引用计数**叠加，只要引用计数为 0，弱引用就会自动消失，无需手动回收内存。\n\n#### 标记清除法\n\n> 当变量进入执行环境时标记为 “进入环境”，当变量离开执行环境时则标记为“离开环境”，被标记为“进入环境” 的变量是不能被回收的，因为它们正在被使用，而标记为 “离开环境” 的变量则可以被回收\n\n环境可以理解为我们的作用域，但是全局作用域的变量只会在页面关闭才会销毁。\n\n```javascript\n// 假设这里是全局变量\n// b 被标记进入环境\nvar b = 2;\nfunction test() {\n  var a = 1;\n  // 函数执行时，a 被标记进入环境\n  return a + b;\n}\n// 函数执行结束，a 被标记离开环境，被回收\n// 但是 b 就没有被标记离开环境\ntest();\n```\n\n## 泄漏场景\n\n**下面有些例子是在执行环境中，没离开当前执行环境，还没触发标记清除法。所以你需要读懂上面 JavaScript 的内存回收机制，才能更好理解下面的场景。**\n\n### 意外的全局变量\n\n```javascript\n// 在全局作用域下定义\nfunction count(number) {\n  // basicCount 相当于 window.basicCount = 2;\n  basicCount = 2;\n  return basicCount + number;\n}\n```\n\n不过在 eslint 帮助下，这种场景现在基本没人会犯了，eslint 会直接报错，了解下就好。\n\n### 被遗忘的定时器\n\n```vue\n<template>\n  <div></div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    refresh() {\n      // 获取一些数据\n    },\n  },\n  mounted() {\n    setInterval(function () {\n      // 轮询获取数据\n      this.refresh();\n    }, 2000);\n  },\n};\n</script>\n```\n\n上面的组件销毁的时候，`setInterval` 还是在运行的，里面涉及到的内存都是没法回收的（浏览器会认为这是必须的内存，不是垃圾内存），需要在组件销毁的时候清除计时器，如下：\n\n```vue\n<template>\n  <div></div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    refresh() {\n      // 获取一些数据\n    },\n  },\n  mounted() {\n    this.refreshInterval = setInterval(function () {\n      // 轮询获取数据\n      this.refresh();\n    }, 2000);\n  },\n  // 清理内存\n  beforeDestroy() {\n    clearInterval(this.refreshInterval);\n  },\n};\n</script>\n```\n\n### 被遗忘的事件监听器\n\n无用的事件监听器忘记清理是新手最容易犯的错误之一。\n\n```javascript\n<template>\n  <div></div>\n</template>\n\n<script>\nexport default {\n  mounted() {\n    window.addEventListener(\\'resize\\', () => {\n      // 这里做一些操作\n    })\n  },\n}\n</script>\n```\n\n上面的组件销毁的时候，resize 事件还是在监听中，里面涉及到的内存都是没法回收的（浏览器会认为这是必须的内存，不是垃圾内存），需要在组件销毁的时候移除相关的事件，如下：\n\n```javascript\ntemplate>\n  <div></div>\n</template>\n\n<script>\nexport default {\n  mounted() {\n    this.resizeEventCallback = () => {\n      // 这里做一些操作\n    }\n    window.addEventListener(\\'resize\\', this.resizeEventCallback)\n  },\n  beforeDestroy() {\n    window.removeEventListener(\\'resize\\', this.resizeEventCallback)\n  },\n}\n</script>\n```\n\n### 被遗忘的 ES6 Set 成员\n\n```javascript\nlet map = new Set();\nlet value = { test: 22 };\nmap.add(value);\n\nvalue = null;\n// 如果value是引用类型的，value=null， 会导致内存泄漏\n\n// 改成一下\nlet map = new Set();\nlet value = { test: 22 };\nmap.add(value);\n\nmap.delete(value);\nvalue = null;\n```\n\n有个更便捷的方式，使用 WeakSet，WeakSet 的成员是**弱引用**，内存回收不会考虑到这个引用是否存在。\n\n```javascript\nlet map = new WeakSet();\nlet value = { test: 22 };\nmap.add(value);\n\nvalue = null;\n```\n\n### 被遗忘的 ES6 Map\n\n```javascript\nlet map = new Map();\nlet key = new Array(5 * 1024 * 1024);\nmap.set(key, 1);\nkey = null;\n// 和set是差不多的一个道理\n\n// 改成这样\nlet map = new Map();\nlet key = new Array(5 * 1024 * 1024);\nmap.set(key, 1);\n\nmap.delete(key);\nkey = null;\n```\n\n有个更便捷的方式，使用 WeakMap，WeakMap 的键名是**弱引用**，内存回收不会考虑到这个引用是否存在。\n\n```javascript\nlet map = new WeakMap();\nlet key = new Array(5 * 1024 * 1024);\nmap.set(key, 1);\n\nkey = null;\n```\n\n### 被遗忘的订阅发布事件监听器\n\n这个跟上面的**被遗忘的事件监听器**的道理是一样的。假设订阅发布事件有三个方法 `emit` 、`on` 、`off` 三个方法。\n\n```vue\n<template>\n  <div @click=\\\"onClick\\\"></div>\n</template>\n\n<script>\nimport customEvent from \\\"event\\\";\n\nexport default {\n  methods: {\n    onClick() {\n      customEvent.emit(\\\"test\\\", { type: \\\"click\\\" });\n    },\n  },\n  mounted() {\n    customEvent.on(\\\"test\\\", (data) => {\n      // 一些逻辑\n      console.log(data);\n    });\n  },\n};\n</script>\n```\n\n上面的组件销毁的时候，自定义 test 事件还是在监听中，里面涉及到的内存都是没法回收的（浏览器会认为这是必须的内存，不是垃圾内存），需要在组件销毁的时候移除相关的事件，如下：\n\n```vue\n<template>\n  <div @click=\\\"onClick\\\"></div>\n</template>\n\n<script>\nimport customEvent from \\\"event\\\";\n\nexport default {\n  methods: {\n    onClick() {\n      customEvent.emit(\\\"test\\\", { type: \\\"click\\\" });\n    },\n  },\n  mounted() {\n    customEvent.on(\\\"test\\\", (data) => {\n      // 一些逻辑\n      console.log(data);\n    });\n  },\n  beforeDestroy() {\n    customEvent.off(\\\"test\\\");\n  },\n};\n</script>\n```\n\n### 被遗忘的闭包\n\n看一段代码\n\n```javascript\nfunction closure() {\n  const name = \\\"xianshannan\\\";\n  return () => {\n    return name.split(\\\"\\\").reverse().join(\\\"\\\");\n  };\n}\nconst reverseName = closure();\n// 这里调用了 reverseName\nreverseName();\n```\n\n上面是没有内存泄漏的，因为`name` 变量是要用到的（非垃圾）。这也是从侧面反映了闭包的缺点，内存占用相对高，量多了会有性能影响。\n\n```javascript\nfunction closure() {\n  const name = \\\"xianshannan\\\";\n  return () => {\n    return name.split(\\\"\\\").reverse().join(\\\"\\\");\n  };\n}\nconst reverseName = closure();\n```\n\n在当前执行环境未结束的情况下，严格来说，这样是有内存泄漏的，`name` 变量是被 `closure` 返回的函数调用了，但是返回的函数没被使用，这个场景下 `name` 就属于垃圾内存。`name` 不是必须的，但是还是占用了内存，也不可被回收。当然这种也是极端情况，很少人会犯这种低级错误。这个例子可以让我们更清楚的认识内存泄漏。\n\n### 脱离 DOM 的引用\n\n每个页面上的 DOM 都是占用内存的，假设有一个页面 A 元素，我们获取到了 A 元素 DOM 对象，然后赋值到了一个变量（内存指向是一样的），然后移除了页面的 A 元素，如果这个变量由于其他原因没有被回收，那么就存在内存泄漏，如下面的例子：\n\n```javascript\nclass Test {\n  constructor() {\n    this.elements = {\n      button: document.querySelector(\\\"#button\\\"),\n      div: document.querySelector(\\\"#div\\\"),\n      span: document.querySelector(\\\"#span\\\"),\n    };\n  }\n  removeButton() {\n    document.body.removeChild(this.elements.button);\n    // this.elements.button = null\n  }\n}\n\nconst a = new Test();\na.removeButton();\n```\n\n上面的例子 button 元素 虽然在页面上移除了，但是内存指向换为了 `this.elements.button`，内存占用还是存在的。所以上面的代码还需要这样写： `this.elements.button = null`，手动释放这个内存。\n\n## 如果发现内存泄漏\n\n谷歌开发者工具即可\n\n[参考文章](https://segmentfault.com/a/1190000020231307)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 407,
        "like_count": 62
    },
    {
        "id": 24,
        "tag_id": 4,
        "tag_type": 3,
        "title": "15.TCP拥塞控制的机制以及算法",
        "content": "# TCP 拥塞控制的机制以及算法？\n\n> 在某段时间，若对网络中某一资源的需求超过了该资源所能提供的可用部分，网络的性能就要变坏。这种情况就叫拥塞。\n\nTCP 发送方要维持一个 **拥塞窗口(cwnd) 的状态变量**。拥塞控制窗口的大小**取决于网络的拥塞程度**，并且动态变化。发送方让自己的发送窗口取为拥塞窗口和接收方的接受窗口中较小的一个。TCP 的拥塞控制采用了四种算法，即 **慢开始** 、 **拥塞避免** 、**快重传** 和 **快恢复**。在网络层也可以使路由器采用适当的分组丢弃策略（如主动队列管理 AQM），以减少网络拥塞的发生。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 115,
        "like_count": 59
    },
    {
        "id": 99,
        "tag_id": 1,
        "tag_type": 1,
        "title": "15.接口和抽象类的区别",
        "content": "# 接口和抽象类的区别\n\n1. 方法是否能实现：所有**方法在接口中不能有实现**(`Java8` 开始接口方法可以有默认实现），而**抽象类可以有非抽象的方法**。\n2. 变量：接口中除了**static、final 变量**，不能有其他变量，而抽象类中则不一定。\n3. 实现：一个类可以实现**多个接口**，但**只能实现一个抽象类**。接口自己本身可以通过 `implement` 关键字扩展多个接口。\n4. 修饰符：接口方法默认修饰符是 `public`，抽象方法可以有 `public`、`protected` 和 `default` 这些修饰符（抽象方法就是为了被重写所以不能使用 `private` 关键字修饰！）。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 409,
        "like_count": 67
    },
    {
        "id": 197,
        "tag_id": 2,
        "tag_type": 1,
        "title": "15.慢查询优化",
        "content": "# 慢查询优化\n\n面试官：慢查询优化\n\n我：我试试\n\n打开慢查询日志\n\n1. 先运行看看是否真的很慢，注意设置 SQL_NO_CACHE\n2. where 条件单表查，锁定最小返回记录表。这句话的意思是把查询语句的 where 都应用到表中返回的记录数最小的表开始查起，单表每个字段分别查询，看哪个字段的区分度最高\n3. explain 查看执行计划，是否与 1 预期一致（从锁定记录较少的表开始查询）\n4. order by limit 形式的 sql 语句让排序的表优先查（这里要注意如果数据量大，要注意了）\n5. 了解业务方使用场景\n6. 加索引时参照建索引的几大原则\n7. 观察结果，不符合预期继续从 0 分析\n\n咱们知道，使用 limit 分页查询，offset 越大，性能越差，比如：\n\n```sql\n-- 以真实的生产环境的6万条数据的一张表为例，比较一下优化前后的查询耗时：\n-- 传统limit，文件扫描\nselect * from table order by id limit 50000,2;\n受影响的行: 0\n时间:  0.171s\n\n-- 子查询方式，索引扫描\nselect * from table\nwhere id >= (select id from table order by id limit 50000 , 1)\nlimit 2;\n受影响的行: 0\n时间: 0.035s\n\n-- JOIN分页方式\nselect * from table as t1\njoin (select id from table order by id limit 50000, 1) as t2\nwhere t1.id <= t2.id order by t1.id limit 2;\n受影响的行: 0\n时间: 0.036s\n```\n\n原因：因为 MySQL 并非是跳过偏移量直接去取后面的数据，而是先把偏移量+要取的条数，然后再把前面偏移量这一段的数据抛弃掉再返回的。比如上面的(50000，2)，每次取 2 条，还要经过回表，发现不是想要的，舍弃。那肯定非常耗时间，而通过子查询通过 id 索引，只查询 id，使用到了 innodb 的索引覆盖, 在内存缓冲区中进行检索,没有回表查询. 然后再用 id >= 条件,进一步的缩小查询范围.这样就大大提高了效率。\n\n而 MyISAM，是直接索引是分离的，通过索引文件查到的数据记录地址，不需要回表，直接对应数据记录，效率也很高。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 380,
        "like_count": 21
    },
    {
        "id": 240,
        "tag_id": 6,
        "tag_type": 1,
        "title": "15.Dubbo的限流是如何实现",
        "content": "## Dubbo 的限流是怎么实现的？\n\nDubbo 默认是**令牌桶**算法实现限流。在某段时间内，以某种速度向桶里面只能放 n 个令牌，然后来一个请求就减少一个令牌，如果桶内的令牌没有了，则不能继续执行请求。\n\n限流主要是通过 `TPSLimitFilter` 实现。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 3,
        "like_count": 95
    },
    {
        "id": 257,
        "tag_id": 7,
        "tag_type": 2,
        "title": "15.new的过程",
        "content": "# new 的过程\n\n说白了，就是新建一个对象\n\n看一个例子\n\n```javascript\n// 字面量创建对象\nlet t1 = {\n  name: \\\"li\\\",\n};\n// 用new创建对象\n// 这里有个Object函数，Js自带的\nlet t2 = new Object();\nt2.name = \\\"li\\\";\n```\n\n## 为什么要用 new\n\n继续看一个例子\n\n```javascript\n// 创建十个对象\nlet obj1 = {\n    num: 1,\n    getNum: function() {\n        console.log(this.num);\n    }\n}\n...\n// 这里有十个\nlet obj10 = {\n    num: 2,\n    getNum: function() {\n        console.log(this.num);\n    }\n}\n\n```\n\n问题：这种创建方式，就很 low，每个对象的 getNum 都是一样的，没必要去创建 10 份，那怎么办，用 new 会怎么样?\n\n继续看：\n\n```javascript\nfunction Test(num) {\n  this.num = num;\n}\nTest.property.getNum = function () {\n  console.log(this.num);\n};\nlet array = [];\nfor (let i = 0; i < 10; i++) {\n  array.push(new Test(i));\n}\n```\n\n这样用 new 创建的方式，相当于为定制对象创建一个公共类库，每个新建出来的对象都自带这个公共类库，节省一部分内存，而且 B 格会高很多，至于为什么不给 Object.prototype 添加，个人觉得还是因为要用构造函数定制。\n\n## new 的具体过程\n\n1. 新建一个对象\n2. 给这个对象指定一个原型链，对象的**proto**指向构造函数的 prototype\n3. 返回这个内部对象\n\n```javascript\nvar obj = new Base();\n//\n\nvar obj = {}; //创建一个空对象\nobj.__proto__ = Base.prototype; //让他的原型指向构造函数(Base)的原型对象\nBase.call(obj); //改变Base函数对象的指针this，将其替换成obj\n// 第一行，我们创建了一个空对象obj\n\n// 第二行，我们将这个空对象的__proto__成员指向了Base函数对象prototype成员对象\n// 第三行，我们将Base函数对象的this指针替换成obj，然后再调用Base函数。执行构造函数中的代码，构造函数中的this指向new出对象. 返回对象，并赋给等号左边的变量\n```\n\n参考：[链接](https://www.cnblogs.com/echolun/p/10903290.html)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 160,
        "like_count": 30
    },
    {
        "id": 27,
        "tag_id": 4,
        "tag_type": 3,
        "title": "16.UDP的特点",
        "content": "## UDP\n\n提供**无连接**的，尽最大努力的数据传输服务（**不保证数据传输的可靠性**）。\n\n## UDP 的特点\n\n- UDP 是**无连接的**；\n- UDP 使用**尽最大努力交付**，即不保证可靠交付，因此主机不需要维持复杂的链接状态（这里面有许多参数）；\n- UDP 是**面向报文**的；\n- UDP**没有拥塞控制**，因此网络出现拥塞不会使源主机的发送速率降低（对实时应用很有用，如 IP 电话，实时视频会议等）；\n- UDP**支持一对一、一对多、多对一和多对多**的交互通信；\n- UDP 的**首部开销小**，只有 8 个字节，比 TCP 的 20 个字节的首部要短。\n\n那么，再说一次 TCP 的特点：\n\n- **TCP 是面向连接的**。（就好像打电话一样，通话前需要先拨号建立连接，通话结束后要挂机释放连接）；\n- 每一条 TCP 连接只能有两个端点，每一条 TCP 连接只能是点对点的（**一对一**）；\n- TCP**提供可靠交付的服务**。通过 TCP 连接传送的数据，无差错、不丢失、不重复、并且按序到达；\n- TCP**提供全双工通信**。TCP 允许通信双方的应用进程在任何时候都能发送数据。TCP 连接的两端都设有发送缓存和接收缓存，用来临时存放双方通信的数据；\n- **面向字节流**。TCP 中的“流”（stream）指的是流入进程或从进程流出的字节序列。“面向字节流”的含义是：虽然应用程序和 TCP 的交互是一次一个数据块（大小不等），但 TCP 把应用程序交下来的数据仅仅看成是一连串的无结构的字节流。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 85,
        "like_count": 42
    },
    {
        "id": 93,
        "tag_id": 1,
        "tag_type": 1,
        "title": "16.匿名内部类传参数为什么需要final",
        "content": "# 匿名内部类传参数为什么需要 final\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        String str = \\\"m\\\";\n        new Thread(){\n            @Override\n            public void run() {\n                System.out.println(str);\n            }\n        }.start();\n    }\n}\n// 在1.8版本之前是编译不通过的，1.8能编译能过，但是还是需要final保证局部变量的数据一致性\n```\n\n反编译\n\n```java\npublic class Hello$1 extends Thread {\n\tprivate String val$str;\n\tHello$1(String paramString) {\n\t\tthis.val$str = paramString;\n\t}\n\tpublic void run() {\n\t\tSystem.out.println(this.val$str);\n\t}\n}\n```\n\n解释：**局部变量是被当成了参数传递给匿名对象的构造器（那就相当于拷贝一份，那就是浅拷贝了），这样的话，如果不管是基本类型还是引用类型，一旦这个局部变量是消失（局部变量随着方法的出栈而消失），还是数据被改变，那么此时匿名构造类是不知道的，毕竟是你浅拷贝了一份，那么如果加上 final，这个数据或者引用永远都不会改变，保证数据一致性。注意：在 JDK8 中如果我们在匿名内部类中需要访问局部变量，那么这个局部变量不需要用 final 修饰符修饰。**\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 95,
        "like_count": 25
    },
    {
        "id": 189,
        "tag_id": 2,
        "tag_type": 1,
        "title": "16.MySQL的锁",
        "content": "# MySQL 的锁\n\n> MySQL 的锁，其实跟 Java 差不了，一个思想。\n\n面试官：MySQL 的锁，介绍一下\n\n我：\n\nMyISAM：MyISAM 只有表锁，其中又分为共享读锁和独占写锁。\n\n- MyISAM 表的读操作，不会阻塞其他用户对同一个表的读请求，但会阻塞对同一个表的写请求。\n- MyISAM 表的写操作，会阻塞其他用户对同一个表的读和写操作。\n- MyISAM 表的读、写操作之间、以及写操作之间是串行的。\n\nInnodb 行锁：共享锁，排他锁\n\n- 对于 UPDATE、DELETE、INSERT 语句，Innodb 会自动给涉及的数据集加排他锁（X）；对于普通 SELECT 语句，Innodb 不会加任何锁。\n\n```sql\n//显示共享锁（S） ：\n SELECT * FROM table_name WHERE .... LOCK IN SHARE MODE\n //显示排他锁（X）：\n SELECT * FROM table_name WHERE .... FOR UPDATE.\n```\n\n- 记录锁（Record Locks）：记录锁是封锁记录，记录锁也叫行锁，注意：行锁是针对索引的，如果表中没有索引，那么就会锁整张表\n- 间隙锁（GAP）对于键值在条件范围内但并不存在的记录，InnoDB 也会对这个“间隙”加锁，这种锁机制就是所谓的间隙锁。\n- 临键锁（Next-Key Lock）：（Record Locks+GAP），锁定一个范围，并且锁定记录本身。对于行的查询，都是采用该方法，主要目的是解决幻读的问题。\n\n面试官：给你张表怎么用 cas 实现高并发下的 update 操作\n\n我：\n\n第一种：\n\n```xml\n// cas, 期望值和数据表中的旧值一致，才更新。\n# newStock = oldStock-desStock;\n<update id=\\\"desStockByCas\\\">\n     UPDATE t_order SET stock=#{newStock} WHERE id=#{orderId} AND stock=#{oldStock}\n</update>\n```\n\n```java\n// orderId：订单id\n// getStock:库存：旧值\n// desStock：可以是期望值，但这里预减值\nint result = orderManager.desStockByCas(orderId, orderDo.getStock(), desStock);\n```\n\n第二种：\n\n```xml\n// 用版本号\n// 我期望的版本号， 和旧版本号一致才更新，并且版本号累加...\n<update id=\\\"desStockByOptimistic\\\">\n    UPDATE t_order SET stock=stock-#{desStock}, version=version+1\n    \t\tWHERE id=#{orderId} AND version=#{oldVersion}\n</update>\n```\n\n如\n\n```java\n// orderId：订单id\n// getVersion：获取数据库版本号，旧版本\n// desStock：可以是期望值，但这里预减值\nint result = orderManager.desStockByOptimistic(orderId, orderDo.getVersion(), desStock);\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 427,
        "like_count": 22
    },
    {
        "id": 208,
        "tag_id": 6,
        "tag_type": 1,
        "title": "16.Dubbo服务降级",
        "content": "## 什么是 dubbo 服务降级？\n\n- dubbo 在服务调用时，可能由于服务器宕机、网络超时、并发数太高等，导致调用失败。**服务降级**就是指在非业务异常导致的服务不可用时，可以返回默认值，避免影响主业务的处理。\n- dubbo 可以通过 mock 配置实现服务降级。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 294,
        "like_count": 81
    },
    {
        "id": 258,
        "tag_id": 7,
        "tag_type": 2,
        "title": "16.聊一聊prototype",
        "content": "## prototype\n\n> 在 ES6 之前，js 中是没有 Class 的概念的（ES6 中的类也是语法糖，本质还是基于原型），为了实现实例对象的属性和方法共享，就给 function 设计了一个 prototype 的概念。 当我们调用一个对象的属性时，如果对象没有该属性，JavaScript 解释器就会从对象的原型对象上去找该属性，如果原型上也没有该属性，那就去找原型的原型，直到最后返回 null 为止，null 没有原型。这种属性查找的方式被称为原型链（prototype chain）。（像不像 JVM 的类加载器...）\n\n**原型也是一个对象，通过原型可以实现对象的属性继承，函数有原型**，函数有一个属性叫 prototype，函数的这个原型指向一个对象，这个对象叫原型对象。这个原型对象有一个 constructor 属性，指向这个函数本身。\n\n一个实例化对象，没有 prototype 属性\n\n## 看例子\n\n```javascript\nvar TestPrototype = function () {\n  this.propA = 1;\n  this.methodA = function () {\n    return this.propA;\n  };\n};\nTestPrototype.prototype = {\n  methodB: function () {\n    return this.propA;\n  },\n};\nvar objA = new TestPrototype();\nobjA.methodA(); // 1\nobjA.methodB(); // 1\n```\n\n当我们直接在控制台输出 objA 时，返回：\n![js的prototype-1-QBSGBT](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js的prototype-1-QBSGBT.jpg)\n\n可以看出，该实例对象有 3 个属性，其中并没有 methodB。这就是方法在构造函数内声明和在原型上声明的区别之一。不过，展开**proto**展开，发现 methodB 在图中的位置。\n\n![js的prototype-2-oDHSvy](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js的prototype-2-oDHSvy.jpg)\n\n但，这样写有什么好处呢？\n\n再看一个例子：\n\n```js\nvar objB = new TestPrototype();\n```\n\n![js的prototype-3-gVjAQc](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js的prototype-3-gVjAQc.jpg)\n\n看似和 objA 长的很像，其实他们并不相等的，比如\n\n![js的prototype-4-ujhUL0](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js的prototype-4-ujhUL0.jpg)\n\n可从图中可以看出，methodA 返回的是 false，而 methodB 返回的是 true\n\n重点来了，把方法写在构造函数的内部，无疑是增加了构造函数初始化一个对象的成本（**内存占用，因为两个实例对象就创建了两个一样的方法 methodA**），把方法写在 prototype 属性上就可以有效的减少了其成本（他们都指向了同一个 methodB）。因此，这种重复性的方法就可以写在原型中，当你的构造函数有相当多的方法，并且实例化非常多时，提升是非常大的。\n\n再举个例子：\n\n当我们创建一个对象后，就可以通过“点”方法名的方式调用一些并不是我们手写的方法了，如 obj.toString()\n\n```js\nobj.toString === Object.prototype.toString;\n// true\n```\n\n其实我们调用的是 Object.prototype.toString。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 144,
        "like_count": 58
    },
    {
        "id": 12,
        "tag_id": 4,
        "tag_type": 3,
        "title": "17.HTTP响应码",
        "content": "## 响应码\n\n### 1xx 信息\n\n**100 Continue** ：表明到目前为止都很正常，客户端可以继续发送请求或者忽略这个响应。\n\n### 2xx 成功\n\n- **200 OK**\n- **204 No Content** ：请求已经成功处理，但是返回的响应报文不包含实体的主体部分。一般在只需要从客户端往服务器发送信息，而不需要返回数据时使用。\n- **206 Partial Content** ：表示客户端进行了范围请求，响应报文包含由 Content-Range 指定范围的实体内容。\n\n### 3xx 重定向\n\n- **301 Moved Permanently** ：永久性重定向\n- **302 Found** ：临时性重定向\n- **303 See Other** ：和 302 有着相同的功能，但是 303 明确要求客户端应该采用 GET 方法获取资源。\n- **304 Not Modified** ：如果请求报文首部包含一些条件，例如：If-Match，If-Modified-Since，If-None-Match，If-Range，If-Unmodified-Since，如果不满足条件，则服务器会返回 304 状态码。\n- **307 Temporary Redirect** ：临时重定向，与 302 的含义类似，但是 307 要求浏览器不会把重定向请求的 POST 方法改成 GET 方法。\n\n### 4xx 客户端错误\n\n- **400 Bad Request** ：请求报文中存在语法错误。\n- **401 Unauthorized** ：该状态码表示发送的请求需要有认证信息（BASIC 认证、DIGEST 认证）。如果之前已进行过一次请求，则表示用户认证失败。\n- **403 Forbidden** ：请求被拒绝。没有权限\n- **404 Not Found**：路由不存在，或者没找到\n\n### 5xx 服务器错误\n\n- **500 Internal Server Error** ：服务器正在执行请求时发生错误。\n- **503 Service Unavailable** ：服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 323,
        "like_count": 0
    },
    {
        "id": 158,
        "tag_id": 1,
        "tag_type": 1,
        "title": "17.四种修饰符的限制范围",
        "content": "# 四种修饰符的限制范围\n\n1. `public`：可以被所有其他类所访问。\n\n2. `private`：只能被自己访问和修改。\n\n3. `protected`：自身，子类及同一个包中类可以访问。\n\n4. `default`（默认）：同一包中的类可以访问\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 4,
        "like_count": 28
    },
    {
        "id": 200,
        "tag_id": 2,
        "tag_type": 1,
        "title": "17.MySQL数据库结构优化",
        "content": "> 一个是索引优化，一个是结构优化。。。。\n\n## 三范式\n\n面试官：先来个**三范式**\n\n我：好的\n\n1. 第一范式：第一范式就是原子性，字段不可再分割；\n\n- 数据库表中的所有字段都具有单一属性（即字段不能再分割了）\n- 单一属性的列是由基本数据类型所构成的\n- 设计出来的表都是简单的二维表\n\n2. 第二范式：第二范式需要确保数据库表中的每一列都和主键相关，而不能只与主键的某一部分相关（主要针对联合主键而言）\n3. 第三范式：所有非主键字段和主键字段之间不能产生传递依赖\n\n[https://www.jianshu.com/p/3e97c2a1687b](https://www.jianshu.com/p/3e97c2a1687b)\n\n**反范式设计**：反范式化就是为了性能和读取效率的考虑而适当的对数据库设计范式的要求进行违反，**而允许存在少量的数据冗余，也就是使用空间来换取（查询）时间**；比如举个例子：**比如订单表中应该保留当前购买商品的价格、商品的名称（商品的价格是会变动的，这很危险）**\n\n因此，简单说一下**范式化设计的优缺点**：\n\n优点：\n\n- 可以尽量的减少数据冗余\n- 范式化的更新操作比反范式化更快\n- 范式化的表通常比反范式化更小\n\n缺点：\n\n- 对于查询需要关联多个表\n- 更难进行索引优化\n\n**反范式化设计的优缺点**：\n\n优点：\n\n- 可以减少表的关联\n- 可以更好的进行索引优化\n\n缺点：\n\n- 存在数据冗余和数据维护异常\n- 对数据修改需要更多的成本\n\n**如何选择 varchar 和 char 类型**：\n\n- varchar 用于存储变长字符串，只占用的必要的存储空间。\n- char 类型是定长的，char 类型的最大宽度为 255\n- 场景：varchar 适用于存储很少被更新的字符串列；char 适合存储长度近似的值，适合存储短字符串，适合存储经常更新的字符串\n\n## 分库分表\n\n1. **垂直分表**\n\n也就是“大表拆小表”，基于列字段进行的。一般是表中的字段较多，将不常用的， 数据较大，长度较长（比如 text 类型字段）的拆分到“扩展表“。 一般是针对那种几百列的大表，也避免查询时，数据量太大造成的“跨页”问题。\n\n2. **垂直分库**\n\n垂直分库针对的是一个系统中的不同业务进行拆分，比如用户 User 一个库，商品 Producet 一个库，订单 Order 一个库。 切分后，要放在多个服务器上，而不是一个服务器上。为什么？ 我们想象一下，一个购物网站对外提供服务，会有用户，商品，订单等的 CRUD。没拆分之前， 全部都是落到单一的库上的，这会让数据库的单库处理能力成为瓶颈。按垂直分库后，如果还是放在一个数据库服务器上， 随着用户量增大，这会让单个数据库的处理能力成为瓶颈，还有单个服务器的磁盘空间，内存，tps 等非常吃紧。所以我们要拆分到多个服务器上，这样上面的问题都解决了，以后也不会面对单机资源问题。垂直分库一定程度上能够突破 IO、连接数及单机硬件资源的瓶颈。\n\n3. **水平分表**\n\n针对数据量巨大的单张表（比如订单表），按照某种规则（RANGE,HASH 取模等），切分到多张表里面去。 但是这些表还是在同一个库中，所以库级别的数据库操作还是有 IO 瓶颈。不建议采用。\n\n切分规则：\n\n- RANGE：从 0 到 10000 一个表，10001 到 20000 一个表；\n- HASH 取模：一个商场系统，一般都是将用户，订单作为主表，然后将和它们相关的作为附表，这样不会造成跨库事务之类的问题。 取用户 id，然后 hash 取模，分配到不同的数据库上。\n- 地理区域：比如按照华东，华南，华北这样来区分业务，七牛云应该就是如此。\n- 时间：按照时间切分，就是将 6 个月前，甚至一年前的数据切出去放到另外的一张表，因为随着时间流逝，这些表的数据 被查询的概率变小，所以没必要和“热数据”放在一起，这个也是“冷热数据分离”。\n\n4. **水平分库分表**\n\n将单张表的数据切分到多个服务器上去，每个服务器具有相应的库与表，只是表中数据集合不同。 水平分库分表能够有效的缓解单机和单库的性能瓶颈和压力，突破 IO、连接数、硬件资源等的瓶颈。\n\n**分库分表带来的问题：**\n\n1. **事务支持**\n\n分库分表后，就成了分布式事务了。如果依赖数据库本身的分布式事务管理功能去执行事务，将付出高昂的性能代价； 如果由应用程序去协助控制，形成程序逻辑上的事务，又会造成编程方面的负担。\n\n2. **join**\n\nTODO 分库分表后表之间的关联操作将受到限制，我们无法 join 位于不同分库的表，也无法 join 分表粒度不同的表， 结果原本一次查询能够完成的业务，可能需要多次查询才能完成。 粗略的解决方法： 全局表：基础数据，所有库都拷贝一份。 字段冗余：这样有些字段就不用 join 去查询了。 系统层组装：分别查询出所有，然后组装起来，较复杂。\n\n**分库分表中间件：**\n\nMycat 和 ShardingSphere（包括 Sharding-JDBC、Sharding-Proxy 和 Sharding-Sidecar 3 款产品）。\n\n[[对比](https://my.oschina.net/u/4318872/blog/4281049)](https://my.oschina.net/u/4318872/blog/4281049)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 402,
        "like_count": 79
    },
    {
        "id": 241,
        "tag_id": 6,
        "tag_type": 1,
        "title": "17.Dubbo的负载均衡",
        "content": "## 负载均衡\n\n个人理解：\n\n> 比如我们的系统中的某个服务的**访问量特别大**，我们将这个服务部署在了**多台服务器**上，当客户端发起请求的时候，**多台服务器都可以处理这个请求**。那么，如何正确选择处理该请求的服务器就很关键。假如，你就要一台服务器来处理该服务的请求，那该服务部署在多台服务器的意义就不复存在了。负载均衡就是为了避免单个服务器响应同一请求，容易造成服务器宕机、崩溃等问题，我们从负载均衡的这四个字就能明显感受到它的意义。\n\n1. RandomLoadBalance:随机负载均衡。随机的选择一个。是 Dubbo 的默认负载均衡策略。\n2. RoundRobinLoadBalance:轮询负载均衡。轮询选择一个。\n3. LeastActiveLoadBalance:最少活跃调用数，相同活跃数的随机。活跃数指调用前后计数差。使慢的 Provider 收到更少请求，因为越慢的 Provider 的调用前后计数差会越大。\n4. ConsistentHashLoadBalance:一致性哈希负载均衡。相同参数的请求总是落在同一台机器上。\n\n> 参考：http://dubbo.apache.org/zh-cn/blog/dubbo-loadbalance.html\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 471,
        "like_count": 83
    },
    {
        "id": 249,
        "tag_id": 7,
        "tag_type": 2,
        "title": "17.原型链相关的面试",
        "content": "## 什么是原型链\n\n原型与原型层层相链接的过程即为原型链。\n\n## 直接看题目\n\n```js\nFunction.prototype.a = () => {\n  console.log(1);\n};\nObject.prototype.b = () => {\n  console.log(2);\n};\nfunction A() {}\nconst a = new A();\na.a(); // a.a is not a function\na.b(); // 2\nA.a(); // 1\nA.b(); // 2\n```\n\n对于`new`出来的对象 a 的属性，原型链查找的顺序是\n\n1. a 自身\n2. `a.__proto__`相当于 A.prototype\n3. `A.prototype.__proto__`相当于`Object.prototype`\n4. `Object.prototype.__proto__`这个为 null，原型链查找到头\n\n![原型链-1-U1bXhi](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/原型链-1-U1bXhi.png)\n\n对于 function 定义的函数 A 的属性，原型链查找顺序应该是\n\n1. A 自身\n2. `A.__proto__`相当于`Function.prototype`\n3. `Function.prototype.__proto__`等于`Object.prototype`\n4. `Object.prototype.__proto__`这个为 `null`,原型链找到头\n\n![js的原型链的流程图-oViZvl](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js的原型链的流程图-oViZvl.png)\n\n再看个例子：\n\n```js\nfunction A() {}\nA.prototype.n = 0;\nA.prototype.add = function () {\n  this.n += 1;\n};\na = new A();\nb = new A();\na.add();\nconsole.log(b.add());\n```\n\n构造函数 `new` 出来的对象，其方法 `this` 都指向他的实例。所以调用完 `add` 方法，遇到 this.n += 1;，这个 `this` 指向的又是实例对象。所以我们的 `a` 对象 和 `b` 对象都有独属于自己的 `n`。\n\n![原型链题-2-3JAu0D](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/原型链题-2-3JAu0D.png)\n\n再看个例子：\n\n```js\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n  this.eat = function () {\n    console.log(age + \\\"岁的\\\" + name + \\\"在吃饭。\\\");\n  };\n}\nPerson.run = function () {};\nPerson.prototype.walk = function () {};\nlet p1 = new Person(\\\"jsliang\\\", 24);\nlet p2 = new Person(\\\"jsliang\\\", 24);\nconsole.log(p1.eat === p2.eat); // false\nconsole.log(p1.run === p2.run); // true\nconsole.log(p1.walk === p2.walk); // true\n```\n\n- `new` 操作符使得构造函数内的 `eat` 函数（对象），是在堆中新开一份空间放置，所以两个实例对象它自然不共享。\n- 而原型上两个实例对象自然都是同一份，`walk` 方法相同。\n- 需要注意的是 `p1.run` 和 `p2.run` 都是 `undefined`。因为 `run` 方法只是作为 `Person` 自己的**静态属性**，`p1` 和`p2`之后的原型链上是找不到的。\n\n再看个例子：\n\n```js\nfunction A() {\n  this.test = 1;\n}\nvar a = new A();\nconsole.log(a.test); // 1\na = new A();\nconsole.log(a.test); // 1\na = A();\nconsole.log(A.test); // undefine\nconsole.log(A.test); // 报错\n```\n\n注意：new A 等价与 new A(). 查找资料：使用指定的参数调用构造函数 Foo，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。\n\n- 而 a = A() 只是把 A 作为普通函数执行了，这个普通函数内部并无 return 出什么来，所以 a 只是 undefined，a.test 就会报错。\n- 至于 A.test， A 只是个函数定义，A 本身没得到执行，自然不会有什么 test 属性，只能往 Function.prototype 上找，自然还是找不到了。\n\n```js\nfunction A() {}\nfunction B(a) {\n  this.a = a;\n}\nfunction C(a) {\n  if (a) {\n    this.a = a;\n  }\n}\nA.prototype.a = 1;\nB.prototype.a = 1;\nC.prototype.a = 1;\nconsole.log(new A().a); // 1\nconsole.log(new B().a); // undefined\nconsole.log(new C(2).a); // 2\n```\n\n请问 foo1 上究竟都挂着什么属性\n\n```js\nfunction foo() {\n  this.some = \\\"222\\\";\n  let ccc = \\\"ccc\\\";\n  foo.obkoro1 = \\\"obkoro1\\\";\n  foo.prototype.a = \\\"aaa\\\";\n}\nfoo.koro = \\\"扣肉\\\";\nfoo.prototype.test = \\\"test\\\";\nlet foo1 = new foo();\nfoo.prototype.test = \\\"test2\\\";\n```\n\nfoo1 上挂着属性 some，其原型链上挂着 test 和 a，至于 foo.obkoro1 只是静态属性不影响 foo1，ccc 更是闭包里的变量更没关系。\n![js-原型链-11-DaEzTB](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/js-原型链-11-DaEzTB.png)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 337,
        "like_count": 100
    },
    {
        "id": 25,
        "tag_id": 4,
        "tag_type": 3,
        "title": "18.GET和POST的区别",
        "content": "## GET 和 POST 的区别？\n\n1. GET 使用 URL 或 Cookie 传参，而 POST 将数据放在 BODY 中\n2. GET 方式提交的数据有长度限制，则 POST 的数据则可以非常大\n3. POST 比 GET 安全，因为数据在地址栏上不可见，没毛病\n4. **本质区别**：GET 请求是幂等性的，POST 请求不是。\n\n> 这里的幂等性：幂等性是指一次和多次请求某一个资源应该具有同样的副作用。简单来说意味着对同一 URL 的多个请求应该返回同样的结果。\n\n正因为它们有这样的区别，所以不应该且**不能用 get 请求做数据的增删改这些有副作用的操作**。因为 get 请求是幂等的，**在网络不好的隧道中会尝试重试**。如果用 get 请求增数据，会有**重复操作**的风险，而这种重复操作可能会导致副作用（浏览器和操作系统并不知道你会用 get 请求去做增操作）。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 417,
        "like_count": 70
    },
    {
        "id": 141,
        "tag_id": 1,
        "tag_type": 1,
        "title": "18.Java深浅拷贝",
        "content": "# 深浅拷贝\n\n- **浅拷贝**：对**基本数据类型进行值传递**，对**引用数据类型进行引用传递般的拷贝**，此为浅拷贝。\n- **深拷贝**：对**基本数据类型进行值传递**，对**引用数据类型，创建一个新的对象，并复制其内容，此为深拷贝**\n- 也就二者对引用数据类型有区别\n\n## 举例子\n\n1. 首先看浅拷贝：\n\nSubject 类：\n\n```java\npublic class Subject {\n    private String name;\n    public Subject(String name) {\n        this.name = name;\n    }\n    public String getName() {\n        return name;\n    }\n    public void setName(String name) {\n        this.name = name;\n    }\n    @Override\n    public String toString() {\n        return \\\"Subject{\\\" +\n                \\\"name=\\'\\\" + name + \\'\\\\\\'\\' +\n                \\'}\\';\n    }\n}\n```\n\nStudent 类：\n\n```java\npublic class Student implements Cloneable{\n    // 对象的引用\n    private Subject subject;\n    private String name;\n    public Student(Subject s, String name) {\n        this.subject = s;\n        this.name = name;\n    }\n    public Subject getSubject() {\n        return subject;\n    }\n    public String getName() {\n        return name;\n    }\n    public void setSubject(Subject subject) {\n        this.subject = subject;\n    }\n    public void setName(String name) {\n        this.name = name;\n    }\n    @Override\n    public String toString() {\n        return \\\"Student{\\\" +\n                \\\"subject=\\\" + subject +\n                \\\", name=\\'\\\" + name + \\'\\\\\\'\\' +\n                \\'}\\';\n    }\n    @Override\n    protected Object clone() throws CloneNotSupportedException {\n        // 浅拷贝\n//        return super.clone();\n    }\n}\n```\n\n测试：\n\n```java\npublic class ShallowCopyDemo {\n    public static void main(String[] args) throws CloneNotSupportedException {\n        // 原始对象\n        Student student = new Student(new Subject(\\\"code\\\"), \\\"dream\\\");\n        System.out.println(\\\"原始对象: \\\" + student.getName() + \\\" - \\\" + student.getSubject().getName()); // dream-code\n        // 拷贝对象\n        Student cloneStu = (Student) student.clone();\n        System.out.println(\\\"拷贝对象: \\\" + cloneStu.getName() + \\\" - \\\" + cloneStu.getSubject().getName()); // dream-code\n        // 原始对象和拷贝对象是否一样：\n        System.out.println(\\\"原始对象和拷贝对象是否一样: \\\" + (student == cloneStu)); // false\n        // 原始对象和拷贝对象的name属性是否一样\n        System.out.println(\\\"原始对象和拷贝对象的name属性是否一样: \\\" + (student.getName() == cloneStu.getName())); // true\n        // 原始对象和拷贝对象的subj属性是否一样\n        System.out.println(\\\"原始对象和拷贝对象的subj属性是否一样: \\\" + (student.getSubject() == cloneStu.getSubject())); // true\n        student.setName(\\\"cat\\\");\n        student.getSubject().setName(\\\"eat\\\");\n        System.out.println(\\\"更新后的原始对象: \\\" + student.getName() + \\\" - \\\" + student.getSubject().getName()); // cat-eat\n        System.out.println(\\\"更新原始对象后的克隆对象: \\\" + cloneStu.getName() + \\\" - \\\" + cloneStu.getSubject().getName()); // dream-eat\n        // 在这个例子中，让要拷贝的类Student实现了Clonable接口并重写Object类的clone()方法，然后在方法内部调用super.clone()方法。\n        // 从输出结果中我们可以看到，对原始对象stud的\\\"name\\\"属性所做的改变并没有影响到拷贝对象clonedStud；\n        // 但是对引用对象subj的\\\"name\\\"属性所做的改变影响到了拷贝对象clonedStud。\n    }\n}\n```\n\n运行结果：\n\n```shell\n原始对象: dream - code\n拷贝对象: dream - code\n原始对象和拷贝对象是否一样: false\n原始对象和拷贝对象的name属性是否一样: true\n原始对象和拷贝对象的subj属性是否一样: true\n更新后的原始对象: cat - eat\n更新原始对象后的克隆对象: dream - eat\n```\n\n2. 深拷贝\n\n只需要重写 Student 的 clone 方法\n\n```java\n    @Override\n    protected Object clone() throws CloneNotSupportedException {\n        Student student = new Student(new Subject(subject.getName()), name); // 新建对象，拷贝内容\n        return student;\n        // 因为它是深拷贝，所以你需要创建拷贝类的一个对象。\n        // 因为在Student类中有对象引用，所以需要在Student类中实现Cloneable接口并且重写clone方法。\n    }\n```\n\n测试结果：\n\n```shell\n原始对象: dream - code\n拷贝对象: dream - code\n原始对象和拷贝对象是否一样: false\n原始对象和拷贝对象的name属性是否一样: true\n原始对象和拷贝对象的subj属性是否一样: false\n更新后的原始对象: cat - eat\n更新原始对象后的克隆对象: dream - code\n```\n\n晓得了吧？\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 422,
        "like_count": 54
    },
    {
        "id": 192,
        "tag_id": 2,
        "tag_type": 1,
        "title": "18.不得不探究MySQL的结构",
        "content": "> 她只想逃走，逃到更远的地方，用剧烈的方式割断与日常生活的联系，呼吸到自由的空气。\n\n## 背景\n\n> 最近迷恋上了中间件的架构，确实想了解一下为什么要这么设计，到底存在了什么问题，采用了什么方案解决的。\n\n我之前画过一张图：\n\n![SQL执行的全部过程-RtckDU](http://imgs.heiye.site/uPic/SQL%E6%89%A7%E8%A1%8C%E7%9A%84%E5%85%A8%E9%83%A8%E8%BF%87%E7%A8%8B-RtckDU.png)\n\n图上负责的组件其实挺简单的：\n\n试想一下，一条 SQL 语句走过来，怎么就能拿到数据的？\n\n再试想一下，我们装过 MySQL 的环境，或者说，每次想看一下 table 的数据，首先要做什么？\n\n连接 `mysql -r root -p`（是不是很熟悉，图中的连接器）\n\n此时，你登录成功并且有查询权限的话，你很高兴的输入一条 SQL 语句：`select * from female where id = xxx;`\n\n当然，如果存储引擎中有相应的数据返回，你肯定特别高兴，但有时候你疯狂的请求，也不在乎引擎的死活和忙的程度，引擎慢慢就顶不住了。\n\n所以，此时图中的查询缓存器就出来了，它的作用是：存在缓存则直接返回，不存在则执行后续操作，并将结果缓存起来。\n\n单纯的一条逻辑 SQL 语句，如何做到引擎识别的呢？那自然需要分析器的帮忙，分析器就是一个简单的解析器，它可以解析一条 SQL 语句，并将其分解成一个个的语句，然后将这些语句放到一个队列中，这就可以按照顺序执行了。\n\n虽然我们解析器分解成了一个一个小的语句，但我们思考一下，是不是存在多种执行的方案？比如，我们要去某个地方吃饭，在地图上搜索，发现有好几条路，那你肯定想选一个最近的一条路走，省时间省力气，所有 MySQL 服务层中有个优化器，它可以把多条路的距离排序，然后选择最近的一条路，这样就可以节省时间了。\n\n有了方案接下来要做什么？\n\n那必然是行动，不能光有规划，没有执行，那怎么成功？\n\n于是：\n\n**MySQL 内部可以分为服务层和存储引擎层两部分：**\n\n1. **服务层包括连接器、查询缓存、分析器、优化器、执行器等**，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。\n2. **存储引擎层负责数据的存储和提取**，其架构模式是插件式的，支持 InnoDB、MyISAM、Memory 等多个存储引擎。现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5.5 版本开始成为了默认的存储引擎，存储引擎层即插即用，非常轻便。\n\n**Server 层按顺序执行 SQL 的步骤为**：\n\n客户端请求:\n\n- 连接器:（验证用户身份，给予权限）\n- 查询缓存:（存在缓存则直接返回，不存在则执行后续操作）\n- 分析器:（对 SQL 进行词法分析和语法分析操作）\n- 优化器:（主要对执行的 sql 优化选择最优的执行方案方法）\n- 执行器:（执行时会先看用户是否有执行权限，有才去使用这个引擎提供的接口）\n- 去引擎层获取数据返回:（如果开启查询缓存则会缓存查询结果）\n\n## 存储引擎层\n\n> 当服务层拿到了一些数据，需要存盘，那么怎么存呢？以怎样的方式存呢？\n\n谈论到 MySQL 的存储引擎，不得不提 InnoDB 引擎，你可以理解为以对某些数据的管理（增删改查），但是如何做到高效、数据一致等，这就要看 InnoDB 是如何设计，如何解决了。\n\n我们继续试想一下，我们在数据库中创建一张表，如：`female`，那这张表在引擎中怎么放呢？\n\n先看一张图：\n\n![](https://imgs.heiye.site/byte/1645153970922.png)\n\n从图中可以看到有几个角色：\n\n- 表空间（Tablespace）\n\n表空间可以看做是 InnoDB 逻辑结构的最高层，所有的数据都放在表空间中。\n\n在默认情况下，InnoDB 存储引擎都有一个共享表空间 idbdata1，即所有数据都存放在这个表空间内。如果用户开启用了参数 Innodb_file_per_table，则每张表内的数据可以单独放在一个表空间内。\n\n如果启动了 innodb_file_per_table 参数，也需要注意，每张表的表空间存放的只是**数据、索引和插入缓存 Bimtmap 页**，其它类的数据，如回滚(undo)信息，插入缓存索引页、系统事务消息，二次写缓存等还是存放在原来的共享表空间内。\n\n- 段（Segment）\n\n表空间是由各个段组成的，常见的段有**数据段、索引段、回滚段**等。\n\nInnoDB 存储引擎表是索引祖师的，因此数据即索引，索引即数据。\n\n那么数据段即为 B+树的叶子结点（Leaf node segment），索引段即为 B+树的非叶子结点（Non-leaf node segment）。\n\n- 区（extend）\n\n区是由连续页组成的空间，在任何情况下每个区的大小都为 1MB。为了保证区中页的连续性，InonoDB 存储引擎一次从磁盘申请 4-5 个区。在默认情况下，InnoDB 存储引擎的页的大小为 16KB，即一个区中应有 64 个连续的页。\n\n- 页（page）\n\n页是 InnoDB 存储引擎磁盘管理的最小单位，每个页默认 16KB，若设置完成，则所有表中页的大小都为 innodb_page_size，不可以再次对其进行修改，除非通过 mysqldump 导入和导出操作来产生新的库。\n\nInnoDB 存储引擎中，常见的页类型有：\n\n1. 数据页（B-Tree Node）\n2. undo 页（Undo Log Page）\n3. 系统页（System Page）\n4. 事务数据页（Transaction System Page）\n5. 插入缓冲位图页（Insert Buffer Bitmap）\n6. 插入缓冲空闲列表页（Insert Buffer Free List）\n7. 未压缩的二进制大对象页（Uncompressed Blog Page）\n8. 压缩的二进制大对象页（Compressed Blog Page）\n\n- 行（row）\n\nInnoDB 存储引擎是面向行的(row-oriented)，也就是说数据是按行进行存放的，每个页存放的行记录也是有硬性定义的，最多允许存放 16KB/2-200，即 7992 行记录。\n\n关于行记录格式，不得不提 InnoDB 引擎提供的 Compact 格式。\n\nCompact 行记录是在 MySQL 5.0 中引人的，**其设计目标是髙效地存储数据。简单来说,一个页中存放的行数据越多，其性能就越髙**。\n\n![](https://imgs.heiye.site/byte/1645166577754.png)\n\n## 索引结构\n\n试想一个问题，一个一个数据记录存放在磁盘中，如果想找某个记录，那怎么快速定位到这个记录呢？\n\n通常，我们将记录存放到某个位置的时候，会将这个位置的值作为索引，这样就可以快速定位到这个记录。\n\n你可以将索引理解为字典中的目录。\n\n想必大家肯定知道一些数据结构，比如：哈希、树、链表等。\n\n如果使用哈希结构作为索引呢？先不讨论 MySQL 是如何实现，我们一般的做法是：\n\n查询的时候，根据 key 调用 hash 函数获得对应的 hashcode，根据 hashcode 找到对应的数据行地址、根据地址拿到对应的数据。\n\n乍一看真不错，如果只查询单个值的话，hash 索引的效率非常高，时间复杂度为 O(1). 如果查询多个值的话，那么 hash 索引的效率就会下降，时间复杂度为 O(n)。\n\n所以，hash 索引有一些问题：\n\n1. 不支持范围查询；\n2. 不支持索引值的排序操作；\n3. 不支持联合索引的最左匹配规则。\n\n那怎么办呢？考虑考虑树的结构？\n\n普通的树、avl、就不提了，就谈一下红黑树、B 树、B+树和跳表。\n\n先说一下红黑树：\n\n查询性能虽好，时间复杂度也是 O(logn)，中序遍历可以得到一个从小到大有序的数据序列，但不支持区间查找。而且由于是二叉树，当数据量很大时树的层数就会很高，从树的根结点向下寻找的过程，每读 1 个节点，都相当于一次 IO 操作，因此他的 I/O 操作会比 B+树多的多。\n\nB 树与 B+树呢：\n\n1. B+树的中间节点存的是索引，不存储数据，数据都保存在叶子节点中，而 B 树的所有节点都能存放数据。所以 B+树 磁盘读写的代价比 B 树低，因为中间节点不放数据，所以相同的磁盘块能存放更多的节点，一次性读入内存的节点数量也就越多，所以 IO 读写次数就降低了。\n2. B+树的叶子节点位于同一层，数据也都位于叶子节点中，所以每次查找都是从根节点找到叶子节点，效率很稳定。而 B 树在查到关键字后就停止查找了，效率不够稳定。\n3. B+树的叶子节点还按照大小，通过链表有序的串联在一起，在进行遍历查询时，只需要遍历这个链表即可，而且还支持范围查询，查到范围的开始节点，然后往后遍历即可实现。而 B 树没有这样的链表，只能通过中序遍历来查找数据，不支持范围查询。\n\n那么跳表呢？\n\n跳表：是一种链表加多层索引的结构，时间复杂度 O(logn)，支持区间查找，而 B+树是一种多叉树，可以让每个节点大小等于操作系统每次读取页的大小，从而使读取节点时只需要进行一次 IO 即可。而且同数量级的数据，跳表索引的高度会比 B+ 树的高，导致 IO 读取次数多，影响查询性能。\n\n![](https://imgs.heiye.site/byte/1645174635727.png)\n\n从上图可以看出几个特点：\n\n1. 非叶子节点：key+指针（8+6=14byte）\n2. 叶子结点：数据记录并且链表连接\n\n可能有这样的疑问，凭什么 B+树能存这么多数据？\n\nB+树一个节点的大小设为一页或页的倍数最为合适。因为如果一个节点的大小 < 1 页，那么读取这个节点的时候其实读取的还是一页，这样就造成了资源的浪费。\n\n我们算一算：\n\n> 1. 对于叶子节点，如果一行数据大小为 1k，那么一页就能存 16 条数据；\n> 2. 对于非叶子节点，如果 key 使用的是 bigint，则为 8 字节，指针在 mysql 中为 6 字节，一共是 14 字节，则 16k 能存放 16 \\\\* 1024 / 14 = 1170 个索引指针。\n> 3. 对于一颗高度为 2 的 B+树，根节点存储索引指针节点，那么它有 1170 个叶子节点存储数据，每个叶子节点可以存储 16 条数据，一共 1170 x 16 = 18720 条数据。\n> 4. 而对于高度为 3 的 B+树，就可以存放 1170 x 1170 x 16 = 21902400 条数据（两千多万条数据），也就是对于两千多万条的数据，我们只需要高度为 3 的 B+树就可以完成，通过主键查询只需要 3 次 IO 操作就能查到对应数据。\n\n## 参考\n\n- [https://juejin.cn/post/6844904190477598733](https://juejin.cn/post/6844904190477598733)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 282,
        "like_count": 90
    },
    {
        "id": 213,
        "tag_id": 6,
        "tag_type": 1,
        "title": "18.Dubbo-SPI源码过程",
        "content": "## SPI 源码(过程)\n\n先说一下 Java 的 SPI 机制\nJava 的 SPI 机制利用 ServiceLoader 的 load 方法传递个接口，就会得到该接口的所有的实现类\n要在指定的 META-INF 的 services 下\n但是有一说一，只能通过 iterator 来遍历判断想要的实现类\n而 Dubbo 和 Spring 的 SPI 比 Java 的灵活一些，可以通过 key 来获取对应的实例\n\n直接说 Dubbo 的 SPI 源码过程\n先说一下 Dubbo 的 SPI 机制，不仅支持有着 Java 的 SPI，还有着 AOP 的功能，同时有着 DI 功能\n\n1. 通过 getExtensionLoader 得到该接口的 load，不过获取之间会对一些 type 检查，同时有缓存机制。\n2. 然后通过 load 调用 getExtension，也是一系列检查和缓存，最关键的就是 createExtension\n3. 其中 getExtensionClasses，这个方法返回对应 name 的接口的实例对象，接着来到 injectExtension 注入属性\n4. 如果有 wrapper 包装，就是通过接口的实例类有木有构造器，如果有，最后 injectExtension((T) wrapperClass.getConstructor(type).newInstance(instance));无限遍历 AOP，也就是构造器注入，最后返回带包装的接口的实例对象。\n5. 以上是没有讲依赖注入的过程，官网上有。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 380,
        "like_count": 28
    },
    {
        "id": 247,
        "tag_id": 7,
        "tag_type": 2,
        "title": "18.js的继承",
        "content": "## js 的继承是？\n\n在 js 中，它没有\\\"子类\\\"和\\\"父类\\\"的概念，也没有\\\"类\\\"（class）和\\\"实例\\\"（instance）的区分，全靠一种很奇特的\\\"原型链\\\"（prototy chain）模式，来实现继承。\n\n## js 继承是如何设计的\n\n有个哥们：Brendan Eich， 他是设计的 Javascript 语言。\n\n如果真的是一种简易的脚本语言，其实不需要有\\\"继承\\\"机制。**但是 Javascript 里面都是对象**，必须有一种机制，将所有对象联系起来。所以，Brendan Eich 最后还是设计了\\\"继承\\\"。\n\n但是，他不打算引入\\\"类\\\"（class）的概念，因为一旦有了\\\"类\\\",Javascript 就是一种完整的面向对象编程语言了，这好像有点不太正式了，而且增加了初学者的入门难度。\n\n他考虑到，C++和 Java 语言都使用`new`命令，生成实例。\n\n- C++的写法是：\n\n```c++\nClassName *object = new ClassName(param);\n```\n\n- Java 的写法是：\n\n```java\nFoo foo = new Foo();\n```\n\n因此，他就把 new 命令引入了 Javascript，用来从原型对象生成一个实例对象。但是，Javascript 没有\\\"类\\\"，怎么来表示原型对象呢？\n\n这时，他想到 c++和 Java 使用 new 命令时，都会调用\\\"类\\\"的构造函数（constructor）。他就做了一个简化的设计，在 Javascript 语言中，new 命令后面跟的不是类，而是构造函数。\n\n举例子来说，现在有一个叫做 Dog 的构造函数，表示狗对象的原型。\n\n```js\nfunction Dog(name) {\n  this.name = name;\n}\n```\n\n对这个构造函数使用 new，就会生成一个狗对象的实例。\n\n```js\nvar dogA = new Dog(\\\"哈士奇\\\");\nconsole.log(dogA.name); // 哈士奇\n```\n\n注意：构造函数中的`this`关键字，它就代表了新创建的实例对象。\n\n---\n\n### 谈一谈：new 运算符的缺点\n\n用构造函数生成实例对象，有一个缺点：**那就是无法共享属性和方法**。\n\n比如，在 Dog 对象的构造函数中，设置一个实例对象的共有属性 species。\n\n```js\nfunction Dog(name) {\n  this.name = name;\n  this.species = \\\"犬科\\\";\n}\n```\n\n然后，生成两个实例对象：\n\n```js\nvar dogA = new Dog(\\\"哈士奇\\\");\nvar dogB = new Dog(\\\"金毛\\\");\n```\n\n这两个对象的 species 属性是独立的，修改其中一个，不会影响到另一个，比如：\n\n```js\ndogA.species = \\\"猫科\\\";\nconsole.log(dogB.species); // 犬科\n```\n\n每一个实例对象，都有自己的属性和方法的副本。这不仅无法做到数据共享，也是极大的资源浪费。\n\n### prototype 属性的引入\n\n考虑到这一点，Brendan Eich 决定为构造函数设置一个 prototype 属性。\n\n这个属性包含一个对象（以下简称\\\"prototype 对象\\\"），所有实例对象需要共享的属性和方法，都放在这个对象里面；那些不需要共享的属性和方法，就放在构造函数里面。\n\n实例对象一旦创建，将自动引用 prototype 对象的属性和方法。也就是说，实例对象的属性和方法，分成两种，一种是本地的，另一种是引用的。\n\n还是以 Dog 构造函数为例，现在用 prototype 属性进行改写：\n\n```js\nfunction Dog(name) {\n  this.name = name;\n}\nDog.prototype = { species: \\\"犬科\\\" };\n\nvar dogA = new Dog(\\\"哈士奇\\\");\nvar dogB = new Dog(\\\"金毛\\\");\nconsole.log(dogA.species); // 犬科\nconsole.log(dogB.species); // 犬科\n```\n\n现在，species 属性放在 prototype 对象里，是两个实例对象共享的。只要修改了 prototype 对象，就会同时影响到两个实例对象。\n\n```js\nDog.prototype.species = \\\"猫科\\\"; //\nconsole.log(dogA.species); // 猫科\nconsole.log(dogB.species); // 猫科\n```\n\n## 总结\n\n由于所有的实例对象共享同一个 prototype 对象，那么从外界看起来，prototype 对象就好像是实例对象的原型，而实例对象则好像\\\"继承\\\"了 prototype 对象一样。\n\n参考：[http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 337,
        "like_count": 5
    },
    {
        "id": 35,
        "tag_id": 4,
        "tag_type": 3,
        "title": "19.Cookie和Session的选择",
        "content": "## Cookies\n\nHTTP 协议是**无状态**的，主要是为了让 HTTP 协议尽可能简单，使得它能够处理大量事务。HTTP/1.1 引入 Cookie 来保存状态信息。\n\nCookie 是**服务器发送到用户浏览器并保存在本地的一小块数据**，它会在浏览器之后向同一服务器再次发起请求时被携带上，用于告知服务端两个请求是否来自同一浏览器。由于之后每次请求都会需要携带 Cookie 数据，因此会带来额外的性能开销（尤其是在移动环境下）。\n\n用途\n\n- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）\n- 个性化设置（如用户自定义设置、主题等）\n- 浏览器行为跟踪（如跟踪分析用户行为等）\n\n## Session\n\n除了可以将用户信息通过 Cookie 存储在用户浏览器中，也可以利用 Session 存储在服务器端，存储在服务器端的信息更加安全。\n\nSession 可以存储在服务器上的文件、数据库或者内存中。也可以将 Session 存储在 Redis 这种内存型数据库中，效率会更高。\n\n## Cookie 和 Session 的选择\n\n- Cookie 只能存储 ASCII 码字符串，而 Session 则可以存储任何类型的数据，因此在考虑数据复杂性时首选 Session；\n- Cookie 存储在浏览器中，容易被恶意查看。如果非要将一些隐私数据存在 Cookie 中，可以将 Cookie 值进行加密，然后在服务器进行解密；\n- 对于大型网站，如果用户所有的信息都存储在 Session 中，那么开销是非常大的，因此不建议将所有的用户信息都存储到 Session 中。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 138,
        "like_count": 49
    },
    {
        "id": 92,
        "tag_id": 1,
        "tag_type": 1,
        "title": "19.Java值传递",
        "content": "# 值传递\n\n> Java 值传递，举例子比较合适，总之，拷贝，拷来烤去的。\n\n面试官：了解 `Java` 值传递嘛？\n\n我：了解，我总结了一波：\n\n- 一个方法**不能修改一个基本数据类型的参数**（即数值型或布尔型）。\n- 一个方法可以改变**一个对象参数的状态**。\n- 一个方法**不能让对象参数引用一个新的对象**。\n\n## 基本类型\n\n所谓第一个，举例子先：\n\n```java\npublic static void main(String[] args) {\n    int num1 = 10;\n    int num2 = 20;\n    swap(num1, num2); // 交换\n    System.out.println(\\\"num1 = \\\" + num1); // 10\n    System.out.println(\\\"num2 = \\\" + num2); // 20\n}\npublic static void swap(int a, int b) {\n    int temp = a;\n    a = b;\n    b = temp;\n    System.out.println(\\\"a = \\\" + a); // 20\n    System.out.println(\\\"b = \\\" + b); // 10\n}\n// a = 20\n// b = 10\n// num1 = 10\n// num2 = 20\n```\n\n![基本类型传递-gkBalP](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/基本类型传递-gkBalP.png)\n\n> 在 swap 方法中，**a、b 的值进行交换，并不会影响到 num1、num2**。因为，a、b 中的值，只是从 num1、num2 的复制过来的。也就是说，**a、b 相当于 num1、num2 的副本**，副本的内容无论怎么修改，都不会影响到原件本身。 说白了，就是深拷贝\n\n## 数组类型传递\n\n所谓第二个，举例子先：\n\n```java\n    public static void main(String[] args) {\n        int[] arr = { 1, 2, 3, 4, 5 };\n        System.out.println(arr[0]); // 1\n        change(arr);\n        System.out.println(arr[0]); // 0\n        // 得到的是对象引用的拷贝，对象引用及其他的拷贝同时引用同一个对象。\n    }\n    private static void change(int[] array) {\n        // 修改数组中的一个元素\n        array[0] = 0;\n    }\n// 1\n// 0\n```\n\n![数组类型传递-FhSHF7](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/数组类型传递-FhSHF7.png)\n\n> array 被初始化 arr 的拷贝也就是**一个对象的引用**，也就是说 array 和 arr 指向的是**同一个数组对象**。 因此，外部对引用对象的改变会反映到所对应的对象上。说白了，浅拷贝\n\n## 对象引用\n\n所谓第三个，举例子先：\n\n```java\n    public static void main(String[] args) {\n        // 有些程序员认为 Java 程序设计语言对对象采用的是引用调用，实际上，这种理解是不对的。\n        Student s1 = new Student(\\\"Mai\\\");\n        Student s2 = new Student(\\\"Feng\\\");\n        swap2(s1, s2);\n        System.out.println(\\\"s1:\\\" + s1.getName()); // Mai\n        System.out.println(\\\"s2:\\\" + s2.getName()); // Feng\n        // 方法并没有改变存储在变量 s1 和 s2 中的对象引用。\n        // swap 方法的参数 x 和 y 被初始化为两个对象引用的拷贝，这个方法交换的是这两个拷贝\n    }\n    private static void swap2(Student x, Student y) {\n        Student temp = x;\n        x = y;\n        y = temp;\n        System.out.println(\\\"x:\\\" + x.getName()); // Feng\n        System.out.println(\\\"y:\\\" + y.getName()); // Mai\n    }\n// x:Feng\n// y:Mai\n// s1:Mai\n// s2:Feng\n```\n\n![对象引用传递-qordb9](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/对象引用传递-qordb9.png)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 366,
        "like_count": 16
    },
    {
        "id": 237,
        "tag_id": 6,
        "tag_type": 1,
        "title": "19.Dubbo-服务导出源码流程",
        "content": "## 服务导出与暴漏(源码流程)\n\n源码省略，针对于面试就说源码流程即可\n总结一波吧：\n\n1. 当我们看源码知道，导出和暴漏在 IoC 初始化的最后一步的 finishRefresh 中的 ServiceBean 中。\n2. 其中在 onApplicationEvent 执行 export->doExport，在 doExport 中首先检查 provider 呀，register 呀，monitor 呀等，最后来到关键的一步 doExportUrls();\n3. 在这一步当中，实际上，就是对注册的 url 和导出的 url 拼接，并且将导出的 url 远程注册到注册中心，最后暴漏一下自己的 url，具体的话就第四步。\n4. doExportUrlsFor1Protocol 包括：1. exportLocal，默认本地导出，2. 远程导出：proxyFactory.getInvoker，然后得到 wrapperInvoker，最后就是这个关键了 protocol.export(wrapperInvoker)，然后会有个子流程去构造 buildInvokerChain，调用链。这个是服务调用链路\n5. 实际上找 Protocol.class 接口的实例代理类，默认是 dubbo 协议，因此调用的 dubbo 的实例代理类的 export 方法，继续使用 dubbo 协议的 url，一步一步绑定 nettyClient 客户端，最后导出自己的调用链。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 424,
        "like_count": 42
    },
    {
        "id": 259,
        "tag_id": 7,
        "tag_type": 2,
        "title": "19.es5和es6继承的区别",
        "content": "# es5 和 es6 继承的区别\n\n## es5 的继承\n\n举借用构造函数的例子：\n\n```js\nfunction Parent() {\n  this.colors = [\\\"red\\\", \\\"blue\\\", \\\"green\\\"];\n}\nfunction Child() {\n  Parent.call(this);\n}\n```\n\n由此可知，ES5 继承的实质是先**创建了子类元素 child 的的实例对象 this**，**然后再把父类元素 parent 的原型对象中的属性赋值给子类元素 child 的实例对象里面**，从而实现继承\n\n## es6 的继承\n\n在传统 JS 中，生成对象是通过创建构造函数，然后定义生成对象\n\n```js\nfunction parent(a, b) {\n  this.a = a;\n  this.b = b;\n}\n```\n\n然后通过 prototype 增加对应所需方法或属性\n\n```js\nparent.prototype.methods = function(){\n    return \\'this is test methods\\';\n}\nparent.prototype.attr = \\'this is test attr‘;\n```\n\n而 ES6 中引入了类的概念，也就是 class。通过关键词 class 去定义对象。\n\nclass 是个关键词，语言糖，这样能更清晰的读懂所创建的对象,通过属性 constructor 来接收控制方法传入的参数，如果不写这个属性，默认是没有参数的\n\n```js\nclass parent {\n  curstructor(a, b) {\n    this.a = a;\n    this.b = b;\n  }\n}\n```\n\nES6 中的继承是基于 class 类之间继承的。通过关键词`extends`实现。\n\n通过`super`实例化调用父类。\n\n```js\nclass parent {\n  constructor(a, b) {\n    this.a = a;\n    this.b = b;\n  }\n  parentMethods() {\n    return this.a + this.b;\n  }\n}\nclass child extends parent {\n  constructor(a, b, c) {\n    super(a, b);\n    this.c = c;\n  }\n  childMethods() {\n    return this.c + \\\",\\\" + super.parentMethods();\n  }\n}\nconst point = new child(1, 2, 3);\nalert(point.childMethods());\n```\n\n## 总结\n\nES5 和 ES6 继承最大的区别就是在于：\n\n1. ES5 先创建子类的实例对象 this，然后再将父类的方法添加到 this 上面（Parent.call(this)）\n2. ES6 先创建父类的实例对象 this(所以必须先调用父类的 super()方法)，然后再用子类的构造函数修改 this。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 17,
        "like_count": 80
    },
    {
        "id": 39,
        "tag_id": 4,
        "tag_type": 3,
        "title": "20.JWT是什么",
        "content": "## JWT\n\nJWT(json web token)是为了在网络应用环境间传递声明而执行的一种基于 JSON 的开放标准。\n\ncookie+session 这种模式通常是保存在**内存**中，而且服务从单服务到多服务会面临的 session 共享问题，随着用户量的增多，开销就会越大。而 JWT 不是这样的，**只需要服务端生成 token，客户端保存这个 token，每次请求携带这个 token，服务端认证解析就可**。\n\n**JWT 的构成**：\n\n第一部分我们称它为头部（header),第二部分我们称其为载荷（payload)，第三部分是签证（signature)。详情请见[官网](https://jwt.io/introduction/)\n\n**JWT 总结**：\n\n1. 因为 json 的通用性，所以 JWT 是可以进行跨语言支持的，像 JAVA,JavaScript,NodeJS,PHP 等很多语言都可以使用。\n2. payload 部分，JWT 可以在自身存储一些其他业务逻辑所必要的非敏感信息。\n3. 便于传输，jwt 的构成非常简单，字节占用很小，所以它是非常便于传输的。它不需要在服务端保存会话信息, 所以它易于应用的扩展。\n\n[jwt 优缺点](https://snailclimb.gitee.io/javaguide/#/docs/system-design/authority-certification/JWT-advantages-and-disadvantages)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 399,
        "like_count": 80
    },
    {
        "id": 90,
        "tag_id": 1,
        "tag_type": 1,
        "title": "20.聊一聊序列化",
        "content": "> 很多 rpc 框架都要考虑序列化的问题，但是我没有过于深入\n> 我面试基本没有问过我，可能跟我简历有关系，我也没有深入的探究\n\n# 序列化\n\n1. 所有需要网络传输的对象都需要实现序列化接口，通过建议所有的 `javaBean` 都实现 `Serializable` 接口。\n2. 对象的类名、实例变量（包括基本类型，数组，对其他对象的引用）都会被序列化；方法、类变量、`transient` 实例变量都不会被序列化。\n3. 如果想让某个变量不被序列化，使用 `transient` 修饰。\n4. 序列化对象的引用类型成员变量，也必须是可序列化的，否则，会报错。\n5. 反序列化时必须有序列化对象的 `class` 文件。\n6. 当通过文件、网络来读取序列化后的对象时，必须按照实际写入的顺序读取。\n7. 单例类序列化，需要重写`readResolve()`方法；否则会破坏单例原则。\n8. 同一对象序列化多次，只有第一次序列化为二进制流，以后都只是保存序列化编号，不会重复序列化。\n9. 建议所有可序列化的类加上 `serialVersionUID` 版本号，方便项目升级。\n\n[参考链接](https://juejin.im/post/5ce3cdc8e51d45777b1a3cdf#heading-9)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 158,
        "like_count": 71
    },
    {
        "id": 215,
        "tag_id": 6,
        "tag_type": 1,
        "title": "20.Dubbo-服务引入源码过程",
        "content": "## 服务引入与目录(源码过程)\n\n肯定是 ReferenceBean\n\n1. 当我们看源码知道，首先进来的 ReferenceBean 的 get 方法->ReferenceConfig 的 init 方法内部\n2. checkDefault 检查消费端的全局配置，接着通过 SPI 获取消费服务的实现类，经过一些列检查又进入了 HashMap 的缓存当中\n3. init 方法中的最后一步 createProxy 中，这个方法就是将要引入订阅注册中心的服务端的目录，首先是 refprotocol.refer 方法从注册中心引入和订阅，该方法是核心。\n4. 首先通过 RegistryProtocol 的 refer 中，如果是 zk 协议，那么就启动 zk 客户端去连接，接着进入 doRefer 方法中，先在注册中心，注册消费端服务，接着开始通过 subscribe 订阅注册中心的目录，category、providers、configurators 和 routers，然后进入 notify，调用 listener.notify(categoryList)，通知 categoryList\n5. 这时候来到了协议 Dubbo 的 refer 中，开始构造路由链，首先 buildInvokerChain 调用链，Dubbo 启动的是 netty 客户端哦，debug 时候看出来的，获取的是 netty 的 client，最后构建成功就返回。\n6. 最后将所有的目录添加到 cluster 中，并返回 invoker，其实该 invoker 是 MockClusterInvoker，ref 是它的代理实现类最后初始化完毕。\n\n总感觉处处 invoker(执行)类似于发送请求一样。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 111,
        "like_count": 16
    },
    {
        "id": 265,
        "tag_id": 7,
        "tag_type": 2,
        "title": "20.call、apply、bind的区别与应用场景",
        "content": "# call、apply、bind 的区别与应用场景\n\n## 概念\n\n为什么会有 call 和 apply？ call 和 apply 两个方法的作用基本相同，它们都是为了改变某个函数**执行时的上下文**（context）而建立的， 他的真正强大之处就是能够扩充函数赖以运行的作用域。通俗一点讲，就是改变函数体内部 **this 的指向**。\n\n举个例子：\n\n```js\nwindow.color = \\\"red\\\";\nvar o = { color: \\\"blue\\\" };\nfunction sayColor() {\n  alert(this.color);\n}\nsayColor(); //red\nsayColor.call(this); //red，把函数体sayColor内部的this，绑到当前环境（作用域）(这段代码所处的环境)\nsayColor.call(window); //red，把函数体sayColor内部的this，绑到window（全局作用域）\nsayColor.call(o); //blue\n```\n\n解释：\n上面的栗子，很明显函数 sayColor 是在全局作用域（环境 / window）中调用的，而全局作用域中有一个 color 属性，值为 \\\"red\\\"，sayColor.call(this) 这一行代码就是表示**把函数体 sayColor 内部的 this，绑到当前环境（作用域）**，而 sayColor.call(window) 这一行代码就是表示**把函数体 sayColor 内部的 this，绑到 window（全局作用域）**，之所以这两行的输出都是 \\\"red\\\" 就是因为他当前作用域的 this 就是 window（this === window）； 最后，sayColor.call(o) 这一行代码就表示**把函数体 sayColor 内部的 this，绑到 o 这个对象的执行环境（上下文）中来**，也就是说 sayColor 内部的 this——>**o**\n\n## call(thisValue, arg1, arg2, ...)\n\n```js\nwindow.color = \\\"red\\\";\nvar o = { color: \\\"blue\\\" };\nfunction sayColor() {\n  alert(this.color);\n}\nsayColor.call(this); //red\nsayColor.call(window); //red\nsayColor.call();\nsayColor.call(null);\nsayColor.call(undefined);\nsayColor.call(o); //blue\n```\n\n> **注意：**如果 call 方法没有参数，或者参数为 **null 或 undefined**，则等同于指向**全局对象**。\n\n### 应用场景\n\n- 判断对象类型\n\n```js\nvar arr = [];\nObject.prototype.toString.call(arr); // [object Array]\n//把函数体Object.prototype.toString()方法内部的this，绑到arr的执行环境（作用域）\n```\n\n同样是检测对象类型，arr.toString() 的结果和 Object.prototype.toString.call(arr) 的结果不一样，这是为什么？\n\n解释：这是因为 `toString() 为 Object` 的原型方法，而 `Array` `，function` 等引用类型作为 `Object` 的实例，都重写了 `toString` 方法。不同的对象类型调用 toString 方法时，根据原型链的知识，调用的是对应的**重写**之后的 toString 方法（function 类型**返回内容为函数体的字符串，Array 类型返回元素组成的字符串**.....），而不会去调用 Object 上原型 toString 方法，所以采用 arr.toString() 不能得到其对象类型，**只能将 arr 转换为字符串类型**；因此，**在想要得到对象的具体类型时，应该调用 Object 上原型 toString 方法**。\n\n- 手撕 call\n\n```js\nvar foo = {\n\t  count: 1\n\t};\nfunction bar() {\n    console.log(this.count);\n}\nbar.myCall(foo); // 1\n--------------------------------------------------------------------\nFunction.prototype.myCall = function(context) {\n    // 取得传入的对象（执行上下文），比如上文的foo对象，这里的context就相当于上文的foo\n    // 不传第一个参数，默认是window,\n    var context = context || window;\n    // 给context添加一个属性，这时的this指向调用myCall的函数，比如上文的bar函数\n    context.fn = this;//这里的context.fn就相当于上文的bar函数\n    // 通过展开运算符和解构赋值取出context后面的参数，上文的例子没有传入参数列表\n    var args = [...arguments].slice(1);\n    // 执行函数（相当于上文的bar(...args)）\n    var result = context.fn(...args);\n    // 删除函数\n    delete context.fn;\n    return result;\n};\n```\n\n## apply(thisValue, [arg1, arg2, ...])\n\n很明显，我们看标题的可以知道 call 和 apply 的一个区别了，它们两个唯一的区别就是**传参列表**的不同，apply 是接收的参数是一个数组。\n\n手撕 apply：\n\n```js\nvar foo = {\n    count: 1\n};\nfunction bar() {\n    console.log(this.count);\n}\nbar.myApply(foo); // 1\n--------------------------------------------------------------------\nFunction.prototype.myApply = function(context) {\n      var context = context || window;\n      context.fn = this;\n      var result;\n      // 判断第二个参数是否存在，也就是context后面有没有一个数组\n      // 如果存在，则需要展开第二个参数\n      if (arguments[1]) {\n        result = context.fn(...arguments[1]);\n      } else {\n        result = context.fn();\n      }\n      delete context.fn;\n      return result;\n}\n```\n\n### 应用场景\n\n- 找出数组中最大或最小的元素\n\n```js\nvar a = [10, 2, 4, 15, 9];\nMath.max.apply(Math, a); //15\nMath.min.apply(null, a); //2\n```\n\n- 可以将一个类似（伪）数组的对象（比如 arguments 对象）转为真正的数组。 **前提**： 被处理的对象必须有 length 属性，以及相对应的数字键。\n\n```js\n//接收的是对象，返回的是数组\nArray.prototype.slice.apply({ 0: 1, length: 1 }); // [1]\nArray.prototype.slice.apply({ 0: 1 }); // []\nArray.prototype.slice.apply({ 0: 1, length: 2 }); // [1, undefined]\nArray.prototype.slice.apply({ length: 1 }); // [undefined]\n//（切下）[].slice(1, n)，返回索引为1到索引为n-1的数组复制代码\n```\n\n- 数组追加\n\n```js\nvar arr1 = [1, 2, 3];\nvar arr2 = [4, 5, 6];\n[].push.apply(arr1, arr2);\nconsole.log(arr1); //[1, 2, 3, 4, 5, 6]\nconsole.log(arr2); //[4, 5, 6]\n```\n\n- 数组合并\n\n```js\nvar arr1 = [1, 2, { id: 1, id: 2 }, [1, 2]];\nvar arr2 = [\\\"ds\\\", 1, 9, { name: \\\"jack\\\" }];\n// var arr = arr1.concat(arr2);//简单做法\nArray.prototype.push.apply(arr1, arr2);\nconsole.log(arr1);\n```\n\n## bind(thisArg[, arg1[, arg2[, ...]]])\n\n> call 和 apply 它们两个是改变 this 的指向之后立即调用该函数，而 bind 则不同，它是创建一个新函数，我们必须手动去调用它。 **MDN 说法：**bind() 方法创建一个新的函数，在调用时设置 this 关键字为提供的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。（虽然这句话我还不太懂）\n\n- bind() 是 ES5 新增的一个方法\n- 传参和 call 或 apply 类似\n- 不会执行对应的函数，call 或 apply 会自动执行对应的函数\n- bind 会返回对函数的引用\n\n举个例子\n\n```js\nvar a = {\n  name: \\\"Cherry\\\",\n  fn: function (a, b) {\n    console.log(a + b);\n  },\n};\nvar b = a.fn;\nb.call(a, 1, 2); //立即调用该函数\nb.bind(a, 1, 2)(); //手动调用()，它返回一个原函数的拷贝（新的，不是原函数），并拥有指定的this值和初始参数。复制代码\n```\n\n### 应用场景\n\n- 手撕 bind\n\n```js\nFunction.prototype.myBind = function (context) {\n  if (typeof this !== \\\"function\\\") {\n    throw new TypeError(\\\"Error\\\");\n  }\n  var _this = this;\n  var args = [...arguments].slice(1);\n  // 返回一个函数\n  return function F() {\n    // 因为返回了一个函数，我们可以 new F()，所以需要判断\n    if (this instanceof F) {\n      return new _this(...args, ...arguments);\n    }\n    return _this.apply(context, args.concat(...arguments));\n  };\n};\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 466,
        "like_count": 5
    },
    {
        "id": 15,
        "tag_id": 4,
        "tag_type": 3,
        "title": "21.一个TCP连接可以对应几个HTTP请求",
        "content": "如果维持连接，一个 TCP 连接是可以发送多个 HTTP 请求的。",
        "publish_time": "2022-09-29 23:37",
        "view_count": 195,
        "like_count": 67
    },
    {
        "id": 103,
        "tag_id": 1,
        "tag_type": 1,
        "title": "21.IO类型",
        "content": "# 聊一聊 IO\n\n## BIO\n\n**BIO (Blocking I/O)**:**同步阻塞 I/O 模式**，数据的读取写入必须阻塞在一个线程内等待其完成。在活动连接数不是特别高（小于单机 1000）的情况下，这种模型是比较不错的，可以让每一个连接专注于自己的 I/O 并且编程模型简单，也不用过多考虑系统的过载、限流等问题。线程池本身就是一个天然的漏斗，可以缓冲一些系统处理不了的连接或请求。但是，当面对十万甚至百万级连接的时候，传统的 `BIO` 模型是无能为力的。因此，我们需要一种更高效的 I/O 处理模型来应对更高的并发量。\n\n## NIO\n\n**NIO (New I/O)**:NIO 是一种**同步非阻塞的 I/O 模型**，在 Java 1.4 中引入了 NIO 框架，对应 `java.nio` 包，提供了 `Channel` , `Selector`，`Buffer`等抽象。`NIO` 中的 N 可以理解为`Non-blocking`，不单纯是 New。它支持**面向缓冲**的，基于通道的 I/O 操作方法。 `NIO` 提供了与传统 `BIO` 模型中的 `Socket` 和 `ServerSocket` 相对应的 `SocketChannel` 和 `ServerSocketChannel` 两种不同的套接字通道实现,两种通道都支持阻塞和非阻塞两种模式。阻塞模式使用就像传统中的支持一样，比较简单，但是性能和可靠性都不好；非阻塞模式正好与之相反。对于低负载、低并发的应用程序，可以使用同步阻塞 I/O 来提升开发速率和更好的维护性；对于高负载、高并发的（网络）应用，应使用 NIO 的非阻塞模式来开发。\n\n[NIO 底层原理](https://blog.csdn.net/u013857458/article/details/82424104)\n\n## AIO\n\n**AIO (Asynchronous I/O)**: `AIO` 也就是 `NIO 2`。在 `Java 7` 中引入了 `NIO` 的改进版 `NIO 2`,它是**异步非阻塞的 IO 模型**。异步 `IO` 是基于事件和回调机制实现的，也就是应用操作之后会直接返回，不会堵塞在那里，当后台处理完成，操作系统会通知相应的线程进行后续的操作。`AIO` 是异步 `IO` 的缩写，虽然 `NIO` 在网络操作中，提供了非阻塞的方法，但是 `NIO` 的 `IO` 行为还是同步的。对于 `NIO` 来说，我们的业务线程是在 IO 操作准备好时，得到通知，接着就由这个线程自行进行 `IO` 操作，IO 操作本身是同步的。查阅网上相关资料，我发现就目前来说 `AIO` 的应用还不是很广泛，`Netty` 之前也尝试使用过 `AIO`，不过又放弃了。\n\n## 听个故事\n\n故事情节为：老李去买火车票，三天后买到一张退票。参演人员（老李，黄牛，售票员，快递员），往返车站耗费 1 小时。\n\n往返车站可以看成系统调用，调用一次一小时\n\n### 1. 阻塞 I/O 模型\n\n老李去火车站买票，排队三天买到一张退票。\n\n耗费：在车站吃喝拉撒睡 3 天，其他事一件没干。\n\n### 2. 非阻塞 I/O 模型\n\n老李去火车站买票，隔 12 小时去火车站问有没有退票，三天后买到一张票。\n\n耗费：往返车站 6 次，路上 6 小时，其他时间做了好多事。\n\n2 比 1 多了个自己轮训调用\n\n### 3. I/O 复用模型\n\n1. select/poll\n\n老李去火车站买票，委托黄牛，然后每隔 6 小时电话**黄牛**询问，黄牛三天内买到票，然后老李去火车站交钱领票。\n\n耗费：往返车站 2 次，路上 2 小时，黄牛手续费 100 元，打电话 17 次\n\n实际上，就是自己不断调 select（像个船一样，装了很多描述符）询问哪些描述符可读可写，比如又一个可读了，咱就调用可读系统调用就 ok 了\n\n2. epoll\n\n老李去火车站买票，委托黄牛，**黄牛买到后即通知老李去领**，然后老李去火车站交钱领票。\n耗费：往返车站 2 次，路上 2 小时，黄牛手续费 100 元，无需打电话\n\n实际上，自己不用管了，当有可读的时候，直接中断你，然后你自己去读\n\n### 4. 信号驱动 I/O 模型\n\n老李去火车站买票，给售票员留下电话，有票后，售票员电话通知老李，然后老李去火车站交钱领票。\n\n耗费：往返车站 2 次，路上 2 小时，免黄牛费 100 元，无需打电话\n\n不要黄牛了，省了这个单线程，系统通知你，你收到以后自己去读\n\n### 5. 异步 I/O 模型\n\n老李去火车站，告诉售票员要买票，售票员买到票之后，打电话通知老李把票放在某某储物箱，老李根据储物箱地址自己去取票。\n\n耗费：往返车站 1 次，路上 1 小时，免黄牛费 100 元，无需打电话\n\n只需要注册一次，得到消息之后，就去另外一个地址上取走票\n\n黄牛是多路复用，他不仅可以帮你买票，还可以其他人买票，还可以买飞机票，高铁票等。\n\n[https://juejin.im/post/6844904000496599054](https://juejin.im/post/6844904000496599054)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 440,
        "like_count": 61
    },
    {
        "id": 234,
        "tag_id": 6,
        "tag_type": 1,
        "title": "21.Dubbo调用降级和容错源码过程",
        "content": "## 服务调用、服务降级和集群容错\n\n先说一下 invorker，在服务引入那里最终返回的是 MockClusterInvoker 的代理实现类，意思就是说，首先进入 Java 的动态代理，InvokerInvocationHandler，然后调用 invork，进入 MockClusterInvoker，然后调用 invoke 进入默认的 FailoverClusterInvoker 的 invoker。每个 invoker 就是 InvokerDelegate 委托实现类\n\n1. 根据我上面说的，其实从服务目录获取所有的提供者 Invokers，在经过 MockClusterInvoker 的时候，如果配置了服务降级，服务降级就是通过 mock 机制而已，那么如果调用失败，先走 Mock 的服务降级策略，如果没有配置，然后开始初始化负载均衡策略，\n2. 就进入了容错策略的 Invoker 类，然后通过负载均衡选择一个 invoker，开始调用过滤链，最后才会执行我们的 Dubbo 协议上的客户端，应该是 netty 吧，去执行 invoker\n3. 服务那边开始被触发事件之后，也会执行自己的过滤链，然后最后执行自己的 InvokerDelegate 服务实现委托类，将结果先返回给自己，然后在通过负责处理请求的控制器传给消费端。\n4. 以上是一次调用过程粗略的经过。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 159,
        "like_count": 71
    },
    {
        "id": 248,
        "tag_id": 7,
        "tag_type": 2,
        "title": "21.Promise规范",
        "content": "# promise 规范\n\n> Promise 是前端面试中的高频问题，据我所知，大多数公司，都会问一些关于 Promise 的问题。如果你能根据 PromiseA+的规范，写出符合规范的源码，那么我想，对于面试中的 Promise 相关的问题，都能够给出比较完美的答案。\n\n> 我的建议是，对照规范多写几次实现，也许第一遍的时候，是改了多次，才能通过测试，那么需要反复的写，我已经将 Promise 的源码实现写了不下七遍。\n\n## promise 是什么\n\n打印一下`console.dir(Promise)`\n![promise-1-GIHcIU](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/promise-1-GIHcIU.png)\n\nPromise 是一个构造函数，自己身上有 all、reject、resolve 这几个眼熟的方法，原型上有 then、catch 等同样很眼熟的方法。这么说用 Promise new 出来的对象肯定就有 then、catch 方法喽，没错。\n\n举个代码玩玩：\n\n```js\nfunction runAsync() {\n  var p = new Promise(function (resolve, reject) {\n    //做一些异步操作\n    setTimeout(function () {\n      console.log(\\\"执行完成\\\");\n      resolve(\\\"随便什么数据\\\");\n    }, 2000);\n  });\n  return p;\n}\nrunAsync();\n```\n\nPromise 的构造函数接收一个参数，是**函数**，并且传入两个参数：resolve，reject，分别表示**异步操作执行成功后的回调函数和异步操作执行失败后的回调函数**。其实这里用“成功”和“失败”来描述并不准确，按照标准来讲，resolve 是将 Promise 的状态置为 fullfiled，reject 是将 Promise 的状态置为 rejected。不过在我们开始阶段可以先这么理解，后面再细究概念。\n\n运行代码，会在 2 秒后输出“执行完成”。注意！我只是 new 了一个对象，并没有调用它，我们传进去的函数就已经执行了，这是需要注意的一个细节。所以我们用 Promise 的时候一般是包在一个函数中，在需要的时候去运行这个函数。\n\n我们继续来讲。在我们包装好的函数最后，会 return 出 Promise 对象，也就是说，执行这个函数我们得到了一个 Promise 对象。还记得 Promise 对象上有 then、catch 方法吧？这就是强大之处了，看下面的代码：\n\n```js\nrunAsync().then(function (data) {\n  console.log(data);\n  //后面可以用传过来的数据做些其他操作\n  //......\n});\n```\n\n在 runAsync()的返回上直接调用 then 方法，then 接收一个参数，是函数，并且会拿到我们在 runAsync 中调用 resolve 时传的的参数。运行这段代码，会在 2 秒后输出“执行完成”，紧接着输出“随便什么数据”。Promise 可以简化层层回调。`resolve`和`then`搭配。\n\n那`reject`呢？\n我们前面的例子都是只有“执行成功”的回调，还没有“失败”的情况，reject 的作用就是把 Promise 的状态置为 rejected，这样我们在 then 中就能捕捉到，然后执行“失败”情况的回调。`reject`和`catch`搭配。\n\n那`all`呢？\nPromise 的 all 方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。返回数组\n\n那`race`呢？\nall 方法的效果实际上是「谁跑的慢，以谁为准执行回调」->就意味着全部 ok 才回调，那么相对的就有另一个方法「谁跑的快，以谁为准执行回调」，这就是 race 方法，这个词本来就是赛跑的意思。race 的用法与 all 一样，可以用 race 给某个异步请求设置超时时间。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 412,
        "like_count": 22
    },
    {
        "id": 21,
        "tag_id": 4,
        "tag_type": 3,
        "title": "22.一个TCP连接中HTTP请求发送可以一起发送么",
        "content": "HTTP/1.1 存在一个问题，单个 TCP 连接在同一时刻只能处理一个请求，意思是说：两个请求的生命周期不能重叠，任意两个 HTTP 请求从开始到结束的时间在同一个 TCP 连接里不能重叠。\n\n在 HTTP/1.1 存在 Pipelining 技术可以完成这个多个请求同时发送，但是由于浏览器默认关闭，所以可以认为这是不可行的。在 HTTP2 中由于 Multiplexing 特点的存在，多个 HTTP 请求可以在同一个 TCP 连接中并行进行。\n\n那么在 HTTP/1.1 时代，浏览器是如何提高页面加载效率的呢？主要有下面两点：\n\n- 维持和服务器已经建立的 TCP 连接，在同一连接上顺序处理多个请求。\n- 和服务器建立多个 TCP 连接。",
        "publish_time": "2022-09-29 23:37",
        "view_count": 336,
        "like_count": 84
    },
    {
        "id": 91,
        "tag_id": 1,
        "tag_type": 1,
        "title": "22.Java的泛型",
        "content": "> 我也没有过多的深入这一块\n\n# 泛型\n\n泛型是 `Java SE 1.5` 的新特性，泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数。\n\n**好处**：\n\n- **类型安全**，提供编译期间的类型检测\n- **前后兼容**\n- **泛化代码,代码可以更多的重复利用**\n- **性能较高**，用 GJ(泛型 `JAVA`)编写的代码可以为 `java` 编译器和虚拟机带来更多的类型信息，这些信息对 `java` 程序做进一步优化提供条件\n\n[泛型擦除原理](https://www.jianshu.com/p/328efeb01940)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 191,
        "like_count": 12
    },
    {
        "id": 224,
        "tag_id": 6,
        "tag_type": 1,
        "title": "22.什么是消息队列",
        "content": "# 什么是消息队列\n\n消息队列是一种异步的服务间通信方式，适用于无服务器和微服务架构。消息在被处理和删除之前一直存储在队列上。每条消息仅可被一位用户处理一次。消息队列可被用于分离重量级处理、缓冲或批处理工作以及缓解高峰期工作负载。\n\n消息队列主要解决了应用耦合、异步处理、流量削锋等问题。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 339,
        "like_count": 12
    },
    {
        "id": 266,
        "tag_id": 7,
        "tag_type": 2,
        "title": "22.用js实现sleep，要用promise实现",
        "content": "# Javascript 如何能简短优雅地实现 sleep 函数？\n\n```js\nasync function test() {\n  console.log(\\\"Hello\\\");\n  await sleep(1000);\n  console.log(\\\"world!\\\");\n}\nfunction sleep(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms));\n}\ntest();\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 289,
        "like_count": 13
    },
    {
        "id": 37,
        "tag_id": 4,
        "tag_type": 3,
        "title": "23.为什么有的时候刷新页面不需要重新建立SSL连接",
        "content": "TCP 连接有的时候会被浏览器和服务端维持一段时间。TCP 不需要重新建立，SSL 自然也会用之前的。",
        "publish_time": "2022-09-29 23:37",
        "view_count": 341,
        "like_count": 98
    },
    {
        "id": 121,
        "tag_id": 1,
        "tag_type": 1,
        "title": "23.谈一谈反射",
        "content": "# 反射机制\n\n> 面试遇到这个问题，必须好好的想想如何回答这个问题，我就是这么回答的。害\n\n面试官：反射是什么？\n\n我：在 Java 的反射机制中是指在**运行状态**中，对于任意一个类都能够知道这个类所有的**属性和方法**；并且对于任意一个对象，都能够调用它的**任意一个方法**；这种**动态获取信息以及动态调用对象方法**的功能成为 Java 语言的反射机制。\n\n面试官：哦？有什么好处？\n\n我：怎么说呢，跟多态是的，比如在 Java 程序中许多对象在运行是都会出现两种类型：**编译时类型和运行时类型**。其中，编译时类型由**声明对象时使用的类型来决定**，运行时的类型由**实际赋值给对象的类型决定** 。比如\n\n`People = = new Man();`程序在运行的时候，有时候需要注入外部资源，那么这个外部资源在编译时是 People，如果想要它的运行时类型中的某个方法，为了解决这些问题，程序在运行时发现对象和类的真实信息，但是**编译时根本无法预知该对象和类属于哪些**类，程序只能靠运**行时信息来发现该对象和类的信息**，那就要用到反射了。\n\n## 反射的 API\n\n面试官：举几个反射的 API\n\n我：\n\n1.  `Class` 类：反射的核心类，可以获取类的属性，方法等信息。\n2.  `Field` 类：`Java.lang.reflec` 包中的类，表示类的成员变量，可以用来获取和设置类之中的属性值。\n3.  `Method` 类： `Java.lang.reflec` 包中的类，表示类的方法，它可以用来获取类中的方法信息或者执行方法。\n4.  `Constructor` 类： `Java.lang.reflec` 包中的类，表示类的构造方法\n\n## 获取 class 的方式\n\n面试官：获取 `class` 对象的三种方式？\n\n我：\n\n```java\nStudent student = new Student(); *// 这一new 产生一个Student对象，一个Class对象。*\nClass studentClass2 = Student.class; // 调用某个类的 class 属性来获取该类对应的 Class 对象\nClass studentClass3 = Class.forName(\\\"com.reflect.Student\\\") // 使用 Class 类中的 forName() 静态方法 ( 最安全 / 性能最好 )\n\n```\n\n面试官：三者区别？\n\n我：\n\n- Class.class 的形式会使 JVM 将使用类装载器将类装入内存（前提是类还没有装入内存），**不做类的初始化工作**，返回 Class 对象。\n- Class.forName() 的形式会装入类并做类的**静态初始化**，返回 Class 对象。\n- getClass() 的形式会对类进行**静态初始化**、**非静态初始化**，返回引用运行时真正所指的对象（因为子对象的引用可能会赋给父对象的引用变量中）所属的类的 Class 对象。\n\n> 静态属性初始化是在加载类的时候初始化，而非静态属性初始化是 new 类实例对象的时候初始化。它们三种情况在生成 Class 对象的时候都会先判断内存中是否已经加载此类。\n\n面试官：ClassLoader 呢？\n\n我：ClassLoader 就是遵循**双亲委派模型最终调用启动类加载器的类加载器**，实现的功能是“通过一个**类的全限定名来获取描述此类的二进制字节流**”，获取到二进制流后放到 JVM 中，加载的类**默认不会进行初始化**。\n\n而 Class.forName()会静态初始化，那么看源码：\n\n```java\n@CallerSensitive\npublic static Class<?> forName(String className)\n    throws ClassNotFoundException {\n    Class<?> caller = Reflection.getCallerClass();\n    // 这里的true，就是初始化\n    return forName0(className, true, ClassLoader.getClassLoader(caller), caller);\n}\n\n// initialize：是否初始化\nprivate static native Class<?> forName0(String name, boolean initialize,\n                                        ClassLoader loader,\n                                        Class<?> caller)\n    throws ClassNotFoundException;\n```\n\n## 如何用反射创建对象\n\n面试官：\n\n面试官：除了通过反射创建对象，还有？\n\n我：new 呗，`clone` 一个呗\n\n面试官：反射都有哪些应用场景\n\n我：我可以说 Spring，Dubbo，RocketMQ 吗？这些优秀的框架背后都用到了反射，这说明，反射的优点之一灵活，提高了代码的灵活度，但同时性能受损。因为反射要进行一系列的解释操作。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 333,
        "like_count": 8
    },
    {
        "id": 232,
        "tag_id": 6,
        "tag_type": 1,
        "title": "23.消息队列应用场景",
        "content": "# 消息队列应用场景\n\n消息队列在实际应用中包括如下四个场景：\n\n- 应用耦合：多应用间通过消息队列对同一消息进行处理，避免调用接口失败导致整个过程失败；\n- 异步处理：多应用对消息队列中同一消息进行处理，应用间并发处理消息，相比串行处理，减少处理时间；\n- 限流削峰：广泛应用于秒杀或抢购活动中，避免流量过大导致应用系统挂掉的情况；\n- 消息驱动的系统：系统分为消息队列、消息生产者、消息消费者，生产者负责产生消息，消费者(可能有多个)负责对消息进行处理；\n\n## 异步处理\n\n具体场景：用户为了使用某个应用，进行注册，系统需要发送注册邮件并验证短信。对这两个操作的处理方式有两种：串行及并行。\n\n三个子系统：注册信息写入-发送邮件-发送短信，假设分别为 50ms\n\n1. 串行\n2. 并行\n3. 消息队列\n\n首先，串行方式：新注册信息生成后，先发送注册邮件，再发送验证短信；50+50+50\n\n其次，并行方式：新注册信息写入后，由发短信和发邮件并行处理；50+50\n\n最后，消息队列，注册信息写入后，写入消息队列立即响应给客户端，约 50 右\n\n## 应用耦合\n\n具体场景：用户使用 QQ 相册上传一张图片，人脸识别系统会对该图片进行人脸识别，一般的做法是，服务器接收到图片后，图片上传系统立即调用人脸识别系统，调用完成后再返回成功，如下图所示：\n\n![](https://imgs.heiye.site/byte/1644288479649.png)\n\n该方法有如下缺点：\n\n- 人脸识别系统被调失败，导致图片上传失败；\n- 延迟高，需要人脸识别系统处理完成后，再返回给客户端，即使用户并不需要立即知道结果；\n- 图片上传系统与人脸识别系统之间互相调用，需要做耦合；\n\n如果使用消息队列：\n\n![](https://imgs.heiye.site/byte/1644288665679.png)\n\n客户端上传图片后，图片上传系统将图片信息如 uin、批次写入消息队列，直接返回成功；而人脸识别系统则定时从消息队列中取数据，完成对新增图片的识别。\n\n此时图片上传系统并不需要关心人脸识别系统是否对这些图片信息的处理、以及何时对这些图片信息进行处理。事实上，由于用户并不需要立即知道人脸识别结果，人脸识别系统可以选择不同的调度策略，按照闲时、忙时、正常时间，对队列中的图片信息进行处理。\n\n## 限流削峰\n\n具体场景：购物网站开展秒杀活动，一般由于瞬时访问量过大，服务器接收过大，会导致流量暴增，相关系统无法处理请求甚至崩溃。而加入消息队列后，系统可以从消息队列中取数据，相当于消息队列做了一次缓冲。\n\n![](https://imgs.heiye.site/byte/1644288712650.png)\n\n该方法有如下优点：\n\n1. 请求先入消息队列，而不是由业务处理系统直接处理，做了一次缓冲,极大地减少了业务处理系统的压力；\n2. 队列长度可以做限制，事实上，秒杀时，后入队列的用户无法秒杀到商品，这些请求可以直接被抛弃，返回活动已结束或商品已售完信息；\n\n## 消息驱动的系统\n\n具体场景：用户新上传了一批照片， 人脸识别系统需要对这个用户的所有照片进行聚类，聚类完成后由对账系统重新生成用户的人脸索引(加快查询)。这三个子系统间由消息队列连接起来，前一个阶段的处理结果放入队列中，后一个阶段从队列中获取消息继续处理。\n\n![](https://imgs.heiye.site/byte/1644289139652.png)\n\n该方法有如下优点：\n\n- 避免了直接调用下一个系统导致当前系统失败；\n- 每个子系统对于消息的处理方式可以更为灵活，可以选择收到消息时就处理，可以选择定时处理，也可以划分时间段按不同处理速度处理；\n\n## 参考\n\n- [https://cloud.tencent.com/developer/article/1006035](https://cloud.tencent.com/developer/article/1006035)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 254,
        "like_count": 22
    },
    {
        "id": 254,
        "tag_id": 7,
        "tag_type": 2,
        "title": "23.js定时器",
        "content": "# js 定时器\n\n## setInterval\n\nsetInterval，也称为间歇调用定时器，是指允许设置间歇时间来调用定时器代码在特定的时刻执行。也就是说，setInterval 会在每隔指定的时间就执行一次代码。\n\n## setTimeout\n\n在前一个定时器执行完毕之前，不会向任务队列中插入新的定时器代码\n\n## 关于 setTimeout 面试题\n\n主要是循环中使用定时器以及定时器中 this 的指向性问题。在 setTimeout 内部，this 绑定采用默认绑定规则，也就是说，在非严格模式下，this 会指向 window；而在严格模式下，this 指向 undefined。\n\n1. 看例子\n\n```js\nfor (var i = 0; i < 5; i++) {\n  setTimeout(function () {\n    console.log(i);\n  }, 1000 * i);\n}\n//以上代码输入什么？\n```\n\n回答：以上代码输出 5 个 5，并且每隔 1s 输出一个，一共用时 4s。这里我想解释一下为什么会这样子输出。以下解释为个人想法，仅供参考。\n\n2. 1 的代码如何让其输出 0,1,2,3,4 呢？\n\n```js\n//方法一：ES6 let关键字，创建块作用域\nfor (let i = 0; i < 5; i++) {\n  setTimeout(function () {\n    console.log(i);\n  }, 1000 * i);\n}\n//以上代码实际上是这样的\nfor (var i = 0; i < 5; i++) {\n  let j = i; //闭包的块作用域\n  setTimeout(function () {\n    console.log(i);\n  }, 1000 * i);\n}\n\n//方法二：IIFE\nfor (var i = 0; i < 5; i++) {\n  (function iife(j) {\n    //闭包的函数作用域\n    setTimeout(function () {\n      console.log(j);\n    }, 1000 * i); //这里将i换为j, 可以证明以上的想法。\n  })(i);\n}\n//实际上，函数参数，就相当于函数内部定义的局部变量，因此下面的写法是相同的。\nfor (var i = 0; i < 5; i++) {\n  (function iife() {\n    var j = i;\n    setTimeout(function () {\n      console.log(j);\n    }, 1000 * i); //如果这里将i换为j, 可以证明以上的想法。\n  })();\n}\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 387,
        "like_count": 33
    },
    {
        "id": 19,
        "tag_id": 4,
        "tag_type": 3,
        "title": "24.浏览器对同一Host建立TCP连接到数量有没有限制",
        "content": "有。Chrome 最多允许对同一个 Host 建立六个 TCP 连接。不同的浏览器有一些区别。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 43,
        "like_count": 82
    },
    {
        "id": 116,
        "tag_id": 1,
        "tag_type": 1,
        "title": "24.一张图看集合",
        "content": "# 看图\n\n![java_collections_overview-BBxHvX](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/java_collections_overview-BBxHvX.png)\n\n面试官：谈谈集合吧\n\n我：可以的，我们首先要介绍集合顶层接口**Collection、Map**，而**List、Queue、Set**实现了 Collection 接口，List 又有**ArrayList、LinkedList**，Queue 又有**LinkedList、PriorityQueue**，Set 又有**HashSet、TreeSet、LinkedHashSet**等。Map 又有**HashMap，TreeMap，LinkedHashMap**，当然**HashTable**是继承**Dictionary**接口，实现了 Map。\n\n此时就开始谈 JUC 下的集合，比如**HashMap**对应的**ConcurrentHashMap**，**ConcurrentSkipListMap**；比如**ArrayList**对应**CopyOnWriteArrayList**，Set 对应的**CopyOnWriteArraySet**等。阻塞队列暂时先不谈哈。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 411,
        "like_count": 51
    },
    {
        "id": 235,
        "tag_id": 6,
        "tag_type": 1,
        "title": "24.消息队列的两种模式",
        "content": "# 消息队列的两种模式\n\n> 消息队列包括两种模式，点对点模式（point to point， queue）和发布/订阅模式（publish/subscribe，topic）。\n\n## 点对点模式\n\n点对点模式下包括三个角色：\n\n- 消息队列\n- 发送者（生产者）\n- 接收者（消费者）\n\n![](https://imgs.heiye.site/byte/1644289765651.png)\n\n消息发送者生产消息发送到 queue 中，然后消息接收者从 queue 中取出并且消费消息。消息被消费以后，queue 中不再有存储，所以消息接收者不可能消费到已经被消费的消息。\n\n点对点模式特点：\n\n- 每个消息只有一个接收者（Consumer）（即一旦被消费，消息就不再在消息队列中）；\n- 发送者和接收者没有依赖性，发送者发送消息之后，不管有没有接收者在运行，都不会影响到发送者下次发送消息；\n- 接收者在成功接收消息之后需要向队列应答成功，以便消息队列删除当前接收的消息；\n\n## 发布/订阅模式\n\n发布/订阅模式下包括三个角色：\n\n- 角色主题（Topic）\n- 发布者（Publisher）\n- 订阅者（Subscriber）\n\n![](https://imgs.heiye.site/byte/1644291599612.png)\n\n发布者将消息发送到 Topic，系统将这些消息转发给多个订阅者。\n\n特点：\n\n- 每个消息可以有多个订阅者；\n- 发布者和订阅者之间有时间上的依赖性，针对某个主题（Topic）的订阅者，它必须创建一个订阅者之后，才能消费发布者的消息；\n- 为了消费消息，订阅者需要提前订阅该角色主题，并保持在线运行；\n\n## 参考\n\n- [https://cloud.tencent.com/developer/article/1006035](https://cloud.tencent.com/developer/article/1006035)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 200,
        "like_count": 38
    },
    {
        "id": 263,
        "tag_id": 7,
        "tag_type": 2,
        "title": "24.五种js继承方式",
        "content": "## 五种 js 继承方式\n\n### 原型链继承\n\n- 核心：将父亲实例作为子类原型\n- 优点：方法复用\n\n  - 由于方法定义在父类的原型上，复用了父类构造函数的方法。比如 say 方法\n\n- 缺点：\n  - 创建子类实例的时候，不能传父类的参数（比如 name）\n  - 子类实例共享了父类构造函数的引用属性，比如 arr 属性\n  - 无法实现多继承\n\n```js\nfunction Parent(name) {\n  this.name = name || \\\"父亲\\\";\n  this.arr = [1];\n}\nParent.prototype.say = function () {\n  console.log(\\\"hello\\\");\n};\nfunction Child(like) {\n  this.like = like;\n}\nChild.prototype = new Parent(); // 核心，体现了子类的原型对象被父类的实例对象的属性赋值了，此时Child.prototype.constructor == Parent\nlet boy1 = new Child();\nlet boy2 = new Child();\n// 优点：共享了父类构造函数的say方法\nconsole.log(boy1.say(), boy2.say(), boy1.say() === boy2.say()); // hello, hello, true\n// 缺点1:不能向父类构造函数传递参数\nconsole.log(boy1.name, boy2.name, boy1.name === boy2.name); // 父亲，父亲，true\n// 缺点2:子类实例共享了父类构造函数的引用属性，比如arr属性\nboy1.arr.push(2);\n// 修改了boy1的arr属性，boy2的arr属性，也会变化，因为两个实例的原型上(Child.prototype)有了父类构造函数的实例属性arr\nconsole.log(boy2.arr); // [1,2]\n```\n\n注意：修改 boy1 的 name 属性，是不会影响 boy2.name，因为设置了 boy1.name 相当于子类实例新增了 name 属性\n\n### 借用构造函数\n\n- 核心：借用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类\n- 优点：实例之间独立\n\n  - 创建子类实例，可以向父亲构造函数传参数\n  - 子类实例不共享父类构造函数的引用属性。如 arr 属性\n  - 可实现多继承（通过多个 call 或者 apply 继承多个父类）\n\n- 缺点：\n  - 父类的方法不能复用：由于方法在父构造函数中定义，导致方法不能复用（因为每次创建子类实例都要创建一遍方法）。比如 say 方法\n  - 子类实例，继承不了父类原型上的属性。（因为没用用到原型）\n\n```js\nfunction Parent(name) {\n  this.name = name; // 实例基本属性（私有）\n  this.arr = [1]; // 强调私有\n  this.say = function () {\n    // 实例引用属性，强调复用\n    console.log(\\\"hello\\\");\n  };\n}\nfunction Child(name, like) {\n  Parent.call(this, name); // 核心，拷贝了父类的实例属性和方法 // 先创建了父类的实例\n  this.like = like;\n}\nlet boy1 = new Child(\\\"小森\\\", \\\"apple\\\");\nlet boy2 = new Child(\\\"小林\\\", \\\"orange\\\");\n// 优点1:可向父类构造函数传参\nconsole.log(boy1.name, boy2.name); // 小森，小林\n// 优点2:不共享父类构造函数的引用属性\nboy1.arr.push(2);\nconsole.log(boy1.arr, bo2.arr); // [1, 2] [1]\n// 缺点1:方法不能复用\nconsole.log(boy1.say === boy2.say); // false  说明boy1和boy2方法是独立的，不是共享的\n// 缺点2:不能继承父类原型上的方法\nParent.prototype.walk = function () {\n  // 在父类的原型对象上定义一个walk方法\n  console.log(\\\"我会走路\\\");\n};\nboy1.walk; // undefined 说明实例，不能获得父类原型上的方法\n```\n\n### 组合继承\n\n- 核心：通过调用父类构造函数，继承父类的属性并保留传参的优点；然后通过将父类实例作为子类原型，实现函数复用。\n- 优点：\n\n  - 保留构造函数的优点：创建子类实例，可以向父类构造函数传参数。\n  - 保留原型链的优点：父类的方法定义在父类的原型对象上，可以实现方法复用。\n  - 不共享父类的引用属性，比如 arr 属性。\n\n- 缺点：\n\n  - 由于调用了 2 次父类的构造方法，会存在一份多余的父类实例属性\n\n- 注意：**组合继承**这种方式，要记得修复`Child.prototype.constructtor`指向\n\n第一次用`Parent.call(this);`从父类拷贝一份父类实例属性，作为子类实例属性，第二次`Child.prototype = new Parent();`创建父类实例作为子类原型，`Child.prototype`中的父类属性和方法会被第一次拷贝来的实例属性屏蔽掉，所以多余。\n\n```js\nfunction Parent(name) {\n  this.name = name;\n  this.arr = [1];\n}\nParent.prototype.say = function () {\n  console.log(\\\"hello\\\");\n};\nfunction Child(name, like) {\n  Parent.call(this, name, like); // 核心 第二次\n  this.like = like;\n}\nChild.prototype = new Parent(); // 第一次\nChild.prototype.constructor = Child; // 修正constructor的指向\nlet boy1 = new Child(\\\"小森\\\", \\\"apple\\\");\nlet boy2 = new Child(\\\"小林\\\", \\\"orange\\\");\n// 优点1:可以向父类构造函数传参数\nconsole.log(boy1.name, boy1.like); // 小森，apple\n// 优点2:可复用父类原型上的方法\nconsole.log(boy1.say === boy1.say); // true\n// 优点3:不共享父类的引用属性，如arr属性\nboy1.arr.push(2);\nconsole.log(boy1.arr, boy2.arr); // [1, 2] [1] 可以看出没有共享arr属性\n// 缺点：由于调用了2次父类的构造方法，会存在一份多余的父类实例属性\n```\n\n### 组合继承优化 1\n\n- 核心：通过这种方式，砍掉父类的实例属性，这样在调用父类的构造函数的时候，就不会初始化两次实例，避免组合继承的缺点。\n- 优点：\n\n  - 只调用一次父类构造函数\n  - 保留构造函数的优点：创建子类实例，可以向父类构造函数传参数\n  - 保留原型链的优点：父类的实例方法定义在父类的原型对象上，可以实现方法复用。\n\n- 缺点：\n\n  - 修正构造函数的指向之后，父类实例的构造函数指向，同时也发生变化（这是我们不希望的）\n\n- 注意：组合继承优化 1 这种方式，要记得修复`Child.prototype.constructor`指向\n\n原因是：不能判断子类实例的直接构造函数，到底是子类构造函数还是父类构造函数\n\n```js\nfunction Parent(name) {\n  this.name = name;\n  this.arr = [1];\n}\nParent.prototype.say = function () {\n  console.log(\\\"hello\\\");\n};\nfunction Child(name, like) {\n  Parent.call(this, name, like);\n  this.like = like;\n}\nChild.prototype = Parent.prototype; // 核心，子类原型和父类原型，实质上是同一个\n// 修复\nlet boy1 = new Child(\\\"小森\\\", \\\"apple\\\");\nlet boy2 = new Child(\\\"小林\\\", \\\"orange\\\");\nlet p1 = new Parent(\\\"小爸爸\\\");\n// 优点1:可以向父类构造函数传参数\nconsole.log(boy1.name, boy2.like); // 晓森，apple\n// 优点2：可复用父类原型上的方法\nconsole.log(boy1.say === boy2.say); // true\n// 缺点1:当修复子类构造函数的指向后，父类实例的构造函数指向也会跟着变了\n// 没修复之前\nconsole.log(boy1.constructor); // Parent\n// 修复代码\nChild.prototype.constructor = Child;\n// 修复之后\nconsole.log(p1.constructor); // Child 这里就是存在的问题（我们希望是Parent）\n```\n\n具体原因：因为是通过原型来实现继承的，Child.prototype 的上面是没有 constructor 属性的，就会往上找，这样就找到了 Parent.prototype 上面的 constructor 属性，当你修改了子类实例的 constructor 属性，所有的 constructor 的指向都会发生变化\n\n### 寄生组合继承（完美）\n\n```js\nfunction Parent(name) {\n  this.name = name;\n  this.arr = [1];\n}\nParent.prototype.say = function () {\n  console.log(\\\"hello\\\");\n};\nfunction Child(name, like) {\n  Parent.call(this, name, like);\n  this.like = like;\n}\n// 核心 通过创建中间对象，子类原型和父类原型，就会隔离开。不是同一个，有效避免了方式4的缺点\nChild.prototype = Object.create(Parent.prototype);\n// 这里是修复构造函数指向代码\nChild.prototype.constructor = Child;\nlet boy1 = new Child(\\\"小森\\\", \\\"apple\\\");\nlet boy2 = new Child(\\\"小林\\\", \\\"orange\\\");\nlet p1 = new Parent(\\\"小爸爸\\\");\n```\n\n注意：这种方法也要修复构造函数的\n修复代码：`Child.prototype.constructor = Child;`\n修复之后：\n\n```js\nconsole.log(boy1.constructor); // Child\nconsole.log(p1.constructor); // Parent 完美\n```\n\n## js 的继承是？\n\n在 js 中，它没有\\\"子类\\\"和\\\"父类\\\"的概念，也没有\\\"类\\\"（class）和\\\"实例\\\"（instance）的区分，全靠一种很奇特的\\\"原型链\\\"（prototy chain）模式，来实现继承。\n\n## js 继承是如何设计的\n\n有个哥们：Brendan Eich， 他是设计的 Javascript 语言。\n\n如果真的是一种简易的脚本语言，其实不需要有\\\"继承\\\"机制。**但是 Javascript 里面都是对象**，必须有一种机制，将所有对象联系起来。所以，Brendan Eich 最后还是设计了\\\"继承\\\"。\n\n但是，他不打算引入\\\"类\\\"（class）的概念，因为一旦有了\\\"类\\\",Javascript 就是一种完整的面向对象编程语言了，这好像有点不太正式了，而且增加了初学者的入门难度。\n\n他考虑到，C++和 Java 语言都使用`new`命令，生成实例。\n\n- C++的写法是：\n\n```c++\nClassName *object = new ClassName(param);\n```\n\n- Java 的写法是：\n\n```java\nFoo foo = new Foo();\n```\n\n因此，他就把 new 命令引入了 Javascript，用来从原型对象生成一个实例对象。但是，Javascript 没有\\\"类\\\"，怎么来表示原型对象呢？\n\n这时，他想到 c++和 Java 使用 new 命令时，都会调用\\\"类\\\"的构造函数（constructor）。他就做了一个简化的设计，在 Javascript 语言中，new 命令后面跟的不是类，而是构造函数。\n\n举例子来说，现在有一个叫做 Dog 的构造函数，表示狗对象的原型。\n\n```js\nfunction Dog(name) {\n  this.name = name;\n}\n```\n\n对这个构造函数使用 new，就会生成一个狗对象的实例。\n\n```js\nvar dogA = new Dog(\\\"哈士奇\\\");\nconsole.log(dogA.name); // 哈士奇\n```\n\n注意：构造函数中的`this`关键字，它就代表了新创建的实例对象。\n\n---\n\n### 谈一谈：new 运算符的缺点\n\n用构造函数生成实例对象，有一个缺点：**那就是无法共享属性和方法**。\n\n比如，在 Dog 对象的构造函数中，设置一个实例对象的共有属性 species。\n\n```js\nfunction Dog(name) {\n  this.name = name;\n  this.species = \\\"犬科\\\";\n}\n```\n\n然后，生成两个实例对象：\n\n```js\nvar dogA = new Dog(\\\"哈士奇\\\");\nvar dogB = new Dog(\\\"金毛\\\");\n```\n\n这两个对象的 species 属性是独立的，修改其中一个，不会影响到另一个，比如：\n\n```js\ndogA.species = \\\"猫科\\\";\nconsole.log(dogB.species); // 犬科\n```\n\n每一个实例对象，都有自己的属性和方法的副本。这不仅无法做到数据共享，也是极大的资源浪费。\n\n### prototype 属性的引入\n\n考虑到这一点，Brendan Eich 决定为构造函数设置一个 prototype 属性。\n\n这个属性包含一个对象（以下简称\\\"prototype 对象\\\"），所有实例对象需要共享的属性和方法，都放在这个对象里面；那些不需要共享的属性和方法，就放在构造函数里面。\n\n实例对象一旦创建，将自动引用 prototype 对象的属性和方法。也就是说，实例对象的属性和方法，分成两种，一种是本地的，另一种是引用的。\n\n还是以 Dog 构造函数为例，现在用 prototype 属性进行改写：\n\n```js\nfunction Dog(name) {\n  this.name = name;\n}\nDog.prototype = { species: \\\"犬科\\\" };\n\nvar dogA = new Dog(\\\"哈士奇\\\");\nvar dogB = new Dog(\\\"金毛\\\");\nconsole.log(dogA.species); // 犬科\nconsole.log(dogB.species); // 犬科\n```\n\n现在，species 属性放在 prototype 对象里，是两个实例对象共享的。只要修改了 prototype 对象，就会同时影响到两个实例对象。\n\n```js\nDog.prototype.species = \\\"猫科\\\"; //\nconsole.log(dogA.species); // 猫科\nconsole.log(dogB.species); // 猫科\n```\n\n## 总结\n\n由于所有的实例对象共享同一个 prototype 对象，那么从外界看起来，prototype 对象就好像是实例对象的原型，而实例对象则好像\\\"继承\\\"了 prototype 对象一样。\n\n参考：[http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html](http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html)\n\n## 五种 js 继承方式\n\n### 原型链继承\n\n- 核心：将父亲实例作为子类原型\n- 优点：方法复用\n\n  - 由于方法定义在父类的原型上，复用了父类构造函数的方法。比如 say 方法\n\n- 缺点：\n  - 创建子类实例的时候，不能传父类的参数（比如 name）\n  - 子类实例共享了父类构造函数的引用属性，比如 arr 属性\n  - 无法实现多继承\n\n```js\nfunction Parent(name) {\n  this.name = name || \\\"父亲\\\";\n  this.arr = [1];\n}\nParent.prototype.say = function () {\n  console.log(\\\"hello\\\");\n};\nfunction Child(like) {\n  this.like = like;\n}\nChild.prototype = new Parent(); // 核心，体现了子类的原型对象被父类的实例对象的属性赋值了，此时Child.prototype.constructor == Parent\nlet boy1 = new Child();\nlet boy2 = new Child();\n// 优点：共享了父类构造函数的say方法\nconsole.log(boy1.say(), boy2.say(), boy1.say() === boy2.say()); // hello, hello, true\n// 缺点1:不能向父类构造函数传递参数\nconsole.log(boy1.name, boy2.name, boy1.name === boy2.name); // 父亲，父亲，true\n// 缺点2:子类实例共享了父类构造函数的引用属性，比如arr属性\nboy1.arr.push(2);\n// 修改了boy1的arr属性，boy2的arr属性，也会变化，因为两个实例的原型上(Child.prototype)有了父类构造函数的实例属性arr\nconsole.log(boy2.arr); // [1,2]\n```\n\n注意：修改 boy1 的 name 属性，是不会影响 boy2.name，因为设置了 boy1.name 相当于子类实例新增了 name 属性\n\n### 借用构造函数\n\n- 核心：借用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类\n- 优点：实例之间独立\n\n  - 创建子类实例，可以向父亲构造函数传参数\n  - 子类实例不共享父类构造函数的引用属性。如 arr 属性\n  - 可实现多继承（通过多个 call 或者 apply 继承多个父类）\n\n- 缺点：\n  - 父类的方法不能复用：由于方法在父构造函数中定义，导致方法不能复用（因为每次创建子类实例都要创建一遍方法）。比如 say 方法\n  - 子类实例，继承不了父类原型上的属性。（因为没用用到原型）\n\n```js\nfunction Parent(name) {\n  this.name = name; // 实例基本属性（私有）\n  this.arr = [1]; // 强调私有\n  this.say = function () {\n    // 实例引用属性，强调复用\n    console.log(\\\"hello\\\");\n  };\n}\nfunction Child(name, like) {\n  Parent.call(this, name); // 核心，拷贝了父类的实例属性和方法 // 先创建了父类的实例\n  this.like = like;\n}\nlet boy1 = new Child(\\\"小森\\\", \\\"apple\\\");\nlet boy2 = new Child(\\\"小林\\\", \\\"orange\\\");\n// 优点1:可向父类构造函数传参\nconsole.log(boy1.name, boy2.name); // 小森，小林\n// 优点2:不共享父类构造函数的引用属性\nboy1.arr.push(2);\nconsole.log(boy1.arr, bo2.arr); // [1, 2] [1]\n// 缺点1:方法不能复用\nconsole.log(boy1.say === boy2.say); // false  说明boy1和boy2方法是独立的，不是共享的\n// 缺点2:不能继承父类原型上的方法\nParent.prototype.walk = function () {\n  // 在父类的原型对象上定义一个walk方法\n  console.log(\\\"我会走路\\\");\n};\nboy1.walk; // undefined 说明实例，不能获得父类原型上的方法\n```\n\n### 组合继承\n\n- 核心：通过调用父类构造函数，继承父类的属性并保留传参的优点；然后通过将父类实例作为子类原型，实现函数复用。\n- 优点：\n\n  - 保留构造函数的优点：创建子类实例，可以向父类构造函数传参数。\n  - 保留原型链的优点：父类的方法定义在父类的原型对象上，可以实现方法复用。\n  - 不共享父类的引用属性，比如 arr 属性。\n\n- 缺点：\n\n  - 由于调用了 2 次父类的构造方法，会存在一份多余的父类实例属性\n\n- 注意：**组合继承**这种方式，要记得修复`Child.prototype.constructtor`指向\n\n第一次用`Parent.call(this);`从父类拷贝一份父类实例属性，作为子类实例属性，第二次`Child.prototype = new Parent();`创建父类实例作为子类原型，`Child.prototype`中的父类属性和方法会被第一次拷贝来的实例属性屏蔽掉，所以多余。\n\n```js\nfunction Parent(name) {\n  this.name = name;\n  this.arr = [1];\n}\nParent.prototype.say = function () {\n  console.log(\\\"hello\\\");\n};\nfunction Child(name, like) {\n  Parent.call(this, name, like); // 核心 第二次\n  this.like = like;\n}\nChild.prototype = new Parent(); // 第一次\nChild.prototype.constructor = Child; // 修正constructor的指向\nlet boy1 = new Child(\\\"小森\\\", \\\"apple\\\");\nlet boy2 = new Child(\\\"小林\\\", \\\"orange\\\");\n// 优点1:可以向父类构造函数传参数\nconsole.log(boy1.name, boy1.like); // 小森，apple\n// 优点2:可复用父类原型上的方法\nconsole.log(boy1.say === boy1.say); // true\n// 优点3:不共享父类的引用属性，如arr属性\nboy1.arr.push(2);\nconsole.log(boy1.arr, boy2.arr); // [1, 2] [1] 可以看出没有共享arr属性\n// 缺点：由于调用了2次父类的构造方法，会存在一份多余的父类实例属性\n```\n\n### 组合继承优化 1\n\n- 核心：通过这种方式，砍掉父类的实例属性，这样在调用父类的构造函数的时候，就不会初始化两次实例，避免组合继承的缺点。\n- 优点：\n\n  - 只调用一次父类构造函数\n  - 保留构造函数的优点：创建子类实例，可以向父类构造函数传参数\n  - 保留原型链的优点：父类的实例方法定义在父类的原型对象上，可以实现方法复用。\n\n- 缺点：\n\n  - 修正构造函数的指向之后，父类实例的构造函数指向，同时也发生变化（这是我们不希望的）\n\n- 注意：组合继承优化 1 这种方式，要记得修复`Child.prototype.constructor`指向\n\n原因是：不能判断子类实例的直接构造函数，到底是子类构造函数还是父类构造函数\n\n```js\nfunction Parent(name) {\n  this.name = name;\n  this.arr = [1];\n}\nParent.prototype.say = function () {\n  console.log(\\\"hello\\\");\n};\nfunction Child(name, like) {\n  Parent.call(this, name, like);\n  this.like = like;\n}\nChild.prototype = Parent.prototype; // 核心，子类原型和父类原型，实质上是同一个\n// 修复\nlet boy1 = new Child(\\\"小森\\\", \\\"apple\\\");\nlet boy2 = new Child(\\\"小林\\\", \\\"orange\\\");\nlet p1 = new Parent(\\\"小爸爸\\\");\n// 优点1:可以向父类构造函数传参数\nconsole.log(boy1.name, boy2.like); // 晓森，apple\n// 优点2：可复用父类原型上的方法\nconsole.log(boy1.say === boy2.say); // true\n// 缺点1:当修复子类构造函数的指向后，父类实例的构造函数指向也会跟着变了\n// 没修复之前\nconsole.log(boy1.constructor); // Parent\n// 修复代码\nChild.prototype.constructor = Child;\n// 修复之后\nconsole.log(p1.constructor); // Child 这里就是存在的问题（我们希望是Parent）\n```\n\n具体原因：因为是通过原型来实现继承的，Child.prototype 的上面是没有 constructor 属性的，就会往上找，这样就找到了 Parent.prototype 上面的 constructor 属性，当你修改了子类实例的 constructor 属性，所有的 constructor 的指向都会发生变化\n\n### 寄生组合继承（完美）\n\n```js\nfunction Parent(name) {\n  this.name = name;\n  this.arr = [1];\n}\nParent.prototype.say = function () {\n  console.log(\\\"hello\\\");\n};\nfunction Child(name, like) {\n  Parent.call(this, name, like);\n  this.like = like;\n}\n// 核心 通过创建中间对象，子类原型和父类原型，就会隔离开。不是同一个，有效避免了方式4的缺点\nChild.prototype = Object.create(Parent.prototype);\n// 这里是修复构造函数指向代码\nChild.prototype.constructor = Child;\nlet boy1 = new Child(\\\"小森\\\", \\\"apple\\\");\nlet boy2 = new Child(\\\"小林\\\", \\\"orange\\\");\nlet p1 = new Parent(\\\"小爸爸\\\");\n```\n\n注意：这种方法也要修复构造函数的\n修复代码：`Child.prototype.constructor = Child;`\n修复之后：\n\n```js\nconsole.log(boy1.constructor); // Child\nconsole.log(p1.constructor); // Parent 完美\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 447,
        "like_count": 47
    },
    {
        "id": 30,
        "tag_id": 4,
        "tag_type": 3,
        "title": "25.在浏览器中输入url地址后显示主页的过程",
        "content": "- 根据域名，进行 DNS 域名解析；\n- 拿到解析的 IP 地址，建立 TCP 连接；\n- 向 IP 地址，发送 HTTP 请求；\n- 服务器处理请求；\n- 返回响应结果；\n- 关闭 TCP 连接；\n- 浏览器解析 HTML；\n- 浏览器布局渲染；\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 318,
        "like_count": 11
    },
    {
        "id": 161,
        "tag_id": 1,
        "tag_type": 1,
        "title": "25.ArrayList和LinkedList的区别",
        "content": "# ArrayList 和 LinkedList 的区别\n\n- `ArrayList` 是实现了基于**动态数组**的数据结构，`LinkedList` 基于**链表**的数据结构。\n- `ArrayList` 查找速度快，添加和删除慢\n- `LinkedList` 查找慢，添加和删除快\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 302,
        "like_count": 43
    },
    {
        "id": 220,
        "tag_id": 6,
        "tag_type": 1,
        "title": "25.常用消息队列有哪些",
        "content": "# 常用消息队列有哪些\n\n> 介绍四种常用的消息队列（RabbitMQ/ActiveMQ/RocketMQ/Kafka）的主要特性、优点、缺点。\n\n## RabbitMQ\n\nRabbitMQ 2007 年发布，是一个在 AMQP(高级消息队列协议)基础上完成的，可复用的企业消息系统。\n\n优点：\n\n1. 由于 erlang 语言的特性，mq 性能较好，高并发；\n2. 健壮、稳定、易用、跨平台、支持多种语言、文档齐全；\n3. 有消息确认机制和持久化机制，可靠性高；\n4. 高度可定制的路由；\n5. 管理界面较丰富，在互联网公司也有较大规模的应用；\n6. 社区活跃度高；\n\n缺点：\n\n1. 尽管结合 erlang 语言本身的并发优势，性能较好，但是不利于做二次开发和维护；\n2. 实现了代理架构，意味着消息在发送到客户端之前可以在中央节点上排队。此特性使得 RabbitMQ 易于使用和部署，但是使得其运行速度较慢，因为中央节点增加了延迟，消息封装后也比较大；\n3. 需要学习比较复杂的接口和协议，学习和维护成本较高；\n\n## ActiveMQ\n\nActiveMQ 是由 Apache 出品，ActiveMQ 是一个完全支持 JMS1.1 和 J2EE 1.4 规范的 JMS Provider 实现。它非常快速，支持多种语言的客户端和协议，而且可以非常容易的嵌入到企业的应用环境中，并有许多高级功能。\n\n优点：\n\n1. 跨平台(JAVA 编写与平台无关有，ActiveMQ 几乎可以运行在任何的 JVM 上)\n2. 可以用 JDBC：可以将数据持久化到数据库。虽然使用 JDBC 会降低 ActiveMQ 的性能，但是数据库一直都是开发人员最熟悉的存储介质。将消息存到数据库，看得见摸得着。而且公司有专门的 DBA 去对数据库进行调优，主从分离；\n3. 支持 JMS ：支持 JMS 的统一接口;\n4. 支持自动重连；\n5. 有安全机制：支持基于 shiro，jaas 等多种安全配置机制，可以对 Queue/Topic 进行认证和授权。\n6. 监控完善：拥有完善的监控，包括 Web Console，JMX，Shell 命令行，Jolokia 的 REST API；\n7. 界面友善：提供的 Web Console 可以满足大部分情况，还有很多第三方的组件可以使用，如 hawtio；\n\n缺点：\n\n1. 社区活跃度不及 RabbitMQ 高；\n2. 根据其他用户反馈，会出莫名其妙的问题，会丢失消息；\n3. 不适合用于上千个队列的应用场景；\n\n## RocketMQ\n\nRocketMQ 出自 阿里公司的开源产品，用 Java 语言实现，在设计时参考了 Kafka，并做出了自己的一些改进，消息可靠性上比 Kafka 更好。RocketMQ 在阿里集团被广泛应用在订单，交易，充值，流计算，消息推送，日志流式处理，binglog 分发等场景。\n\n优点：\n\n1. 单机支持 1 万以上持久化队列；\n2. RocketMQ 的所有消息都是持久化的，先写入系统 PAGECACHE，然后刷盘，可以保证内存与磁盘都有一份数据， 访问时，直接从内存读取。\n3. 模型简单，接口易用（JMS 的接口很多场合并不太实用）；\n4. 性能非常好，可以大量堆积消息在 broker 中；\n5. 支持多种消费，包括集群消费、广播消费等；\n6. 各个环节分布式扩展设计，主从 HA；\n7. 支持事务消息；\n8. 开发度较活跃，版本更新很快。\n\n缺点：\n\n1. 支持的客户端语言不多，目前是 java 及 c++，其中 c++不成熟；\n2. RocketMQ 社区关注度及成熟度也不及前两者；\n3. 没有在 mq 核心中去实现 JMS 等接口；\n\n## kafka\n\nApache Kafka 是一个分布式消息发布订阅系统。它最初由 LinkedIn 公司基于独特的设计实现为一个分布式的提交日志系统( a distributed commit log)，之后成为 Apache 项目的一部分。Kafka 系统快速、可扩展并且可持久化。它的分区特性，可复制和可容错都是其不错的特性。\n\n优点：\n\n1. 客户端语言丰富，支持 java、.net、php、ruby、python、go 等多种语言；\n2. 性能卓越，单机写入 TPS 约在百万条/秒，消息大小 10 个字节；\n3. 提供完全分布式架构, 并有 replica 机制, 拥有较高的可用性和可靠性, 理论上支持消息无限堆积；\n4. 支持批量操作；\n5. 消费者采用 Pull 方式获取消息, 消息有序, 通过控制能够保证所有消息被消费且仅被消费一次;\n6. 有优秀的第三方 Kafka Web 管理界面 Kafka-Manager；\n7. 在日志领域比较成熟，被多家公司和多个开源项目使用；\n\n缺点：\n\n1. Kafka 单机超过 64 个队列/分区，Load 会发生明显的飙高现象，队列越多，load 越高，发送消息响应时间变长\n2. 使用短轮询方式，实时性取决于轮询间隔时间；\n3. 消费失败不支持重试；\n4. 支持消息顺序，但是一台代理宕机后，就会产生消息乱序；\n\n![](https://imgs.heiye.site/byte/1644300663455.png)\n\n结论：\n\nKafka 在于分布式架构，RabbitMQ 基于 AMQP 协议来实现，RocketMQ/思路来源于 kafka，改成了主从结构，在事务性可靠性方面做了优化。广泛来说，电商、金融等对事务性要求很高的，可以考虑 RabbitMQ 和 RocketMQ，对性能要求高的可考虑 Kafka。\n\n## 参考\n\n- [https://cloud.tencent.com/developer/article/1006035](https://cloud.tencent.com/developer/article/1006035)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 468,
        "like_count": 64
    },
    {
        "id": 256,
        "tag_id": 7,
        "tag_type": 2,
        "title": "25.defer和async的区别",
        "content": "# defer 和 async 的区别\n\n当浏览器碰到 script 脚本的时候：\n\n1. `<script scr=\\\"script.js\\\"></script>`\n   没有 defer 或 async，浏览器会立即加载并执行指定的脚本，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。\n2. `<script async scr=\\\"script.js\\\"></script>`\n   有 async，加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。\n3. `<script defer scr=\\\"script.js\\\"></script>`\n   有 defer，加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。\n\n4. defer 和 async 在网络读取（下载）这块儿是一样的，都是异步的（相较于 HTML 解析）\n5. async 则是一个乱序执行的主，反正对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 405,
        "like_count": 35
    },
    {
        "id": 34,
        "tag_id": 4,
        "tag_type": 3,
        "title": "26.HTTP1.x的缺点",
        "content": "1. HTTP/1.0 一次只允许在一个 TCP 连接上发起一个请求，HTTP/1.1 使用的流水线技术也只能部分处理请求分析，仍然会存在队列头阻塞问题，因此客户端在需要发起多次请求时，通常会采用建立多连接来减少延迟\n2. 单向请求，只能由客户端发起\n3. 请求报文与响应报文首部信息冗余量大。\n4. 数据未压缩，导致数据的传输量大。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 217,
        "like_count": 23
    },
    {
        "id": 118,
        "tag_id": 1,
        "tag_type": 1,
        "title": "26.HashMap和HashTable的区别",
        "content": "# HashMap 和 HashTable 的区别\n\n- `HashTable` 是**线程安全的**，每个方法前加了**synchronized**，而 HashMap**是非线程安全的**\n- `HashTable` 底层是**数组+链表**，而 `HashMap1.8` 版本是**数组+链表 or 红黑树**\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 132,
        "like_count": 37
    },
    {
        "id": 203,
        "tag_id": 6,
        "tag_type": 1,
        "title": "26.RocketMQ有哪些组件",
        "content": "# RocketMQ 有哪些组件\n\n> 生产者-消费者模型\n\n- Producer:消息发布的角色，主要负责把消息发送到 Broker，支持分布式集群方式部署。\n- Consumer:消息消费者的角色，主要负责从 Broker 订阅消息消费，支持分布式集群方式部署。\n- Broker:消息存储的角色，主要负责消息的存储、投递和查询，以及服务高可用的保证，支持分布式集群方式部署。\n- NameServer:是一个非常简单的 Topic 路由注册中心，其角色类似于 Dubbo 中依赖的 Zookeeper，支持 Broker 动态注册和发现。\n  - 服务注册：NameServer 接收 Broker 集群注册的信息，保存下来作为路由信息的基本数据，并提供心跳检测机制，检查 Broker 是否存活。\n  - 路由信息管理：NameServer 保存了 Broker 集群的路由信息，用于提供给客户端查询 Broker 的队列信息，同时 Producer 和 Consumer 通过 NameServer 可以知道 Broker 集群的路由信息，从而进行消息的投递和消费。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 339,
        "like_count": 65
    },
    {
        "id": 261,
        "tag_id": 7,
        "tag_type": 2,
        "title": "26.Promise的源码实现",
        "content": "## Promise 的源码实现\n\n```js\n/**\n * 1. new Promise时，需要传递一个 executor 执行器，执行器立刻执行\n * 2. executor 接受两个参数，分别是 resolve 和 reject\n * 3. promise 只能从 pending 到 rejected, 或者从 pending 到 fulfilled\n * 4. promise 的状态一旦确认，就不会再改变\n * 5. promise 都有 then 方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled,\n *      和 promise 失败的回调 onRejected\n * 6. 如果调用 then 时，promise已经成功，则执行 onFulfilled，并将promise的值作为参数传递进去。\n *      如果promise已经失败，那么执行 onRejected, 并将 promise 失败的原因作为参数传递进去。\n *      如果promise的状态是pending，需要将onFulfilled和onRejected函数存放起来，等待状态确定后，再依次将对应的函数执行(发布订阅)\n * 7. then 的参数 onFulfilled 和 onRejected 可以缺省\n * 8. promise 可以then多次，promise 的then 方法返回一个 promise\n * 9. 如果 then 返回的是一个结果，那么就会把这个结果作为参数，传递给下一个then的成功的回调(onFulfilled)\n * 10. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个then的失败的回调(onRejected)\n * 11.如果 then 返回的是一个promise,那么需要等这个promise，那么会等这个promise执行完，promise如果成功，\n *   就走下一个then的成功，如果失败，就走下一个then的失败\n */\nconst PENDING = \\\"pending\\\";\nconst FULFILLED = \\\"fulfilled\\\";\nconst REJECTED = \\\"rejected\\\";\nfunction Promise(executor) {\n  let self = this;\n  self.status = PENDING;\n  self.onFulfilled = []; //成功的回调\n  self.onRejected = []; //失败的回调\n  //PromiseA+ 2.1\n  function resolve(value) {\n    if (self.status === PENDING) {\n      self.status = FULFILLED;\n      self.value = value;\n      self.onFulfilled.forEach((fn) => fn()); //PromiseA+ 2.2.6.1\n    }\n  }\n  function reject(reason) {\n    if (self.status === PENDING) {\n      self.status = REJECTED;\n      self.reason = reason;\n      self.onRejected.forEach((fn) => fn()); //PromiseA+ 2.2.6.2\n    }\n  }\n  try {\n    executor(resolve, reject);\n  } catch (e) {\n    reject(e);\n  }\n}\n\nPromise.prototype.then = function (onFulfilled, onRejected) {\n  //PromiseA+ 2.2.1 / PromiseA+ 2.2.5 / PromiseA+ 2.2.7.3 / PromiseA+ 2.2.7.4\n  onFulfilled =\n    typeof onFulfilled === \\\"function\\\" ? onFulfilled : (value) => value;\n  onRejected =\n    typeof onRejected === \\\"function\\\"\n      ? onRejected\n      : (reason) => {\n          throw reason;\n        };\n  let self = this;\n  //PromiseA+ 2.2.7\n  let promise2 = new Promise((resolve, reject) => {\n    if (self.status === FULFILLED) {\n      //PromiseA+ 2.2.2\n      //PromiseA+ 2.2.4 --- setTimeout\n      setTimeout(() => {\n        try {\n          //PromiseA+ 2.2.7.1\n          let x = onFulfilled(self.value);\n          resolvePromise(promise2, x, resolve, reject);\n        } catch (e) {\n          //PromiseA+ 2.2.7.2\n          reject(e);\n        }\n      });\n    } else if (self.status === REJECTED) {\n      //PromiseA+ 2.2.3\n      setTimeout(() => {\n        try {\n          let x = onRejected(self.reason);\n          resolvePromise(promise2, x, resolve, reject);\n        } catch (e) {\n          reject(e);\n        }\n      });\n    } else if (self.status === PENDING) {\n      self.onFulfilled.push(() => {\n        setTimeout(() => {\n          try {\n            let x = onFulfilled(self.value);\n            resolvePromise(promise2, x, resolve, reject);\n          } catch (e) {\n            reject(e);\n          }\n        });\n      });\n      self.onRejected.push(() => {\n        setTimeout(() => {\n          try {\n            let x = onRejected(self.reason);\n            resolvePromise(promise2, x, resolve, reject);\n          } catch (e) {\n            reject(e);\n          }\n        });\n      });\n    }\n  });\n  return promise2;\n};\nfunction resolvePromise(promise2, x, resolve, reject) {\n  let self = this;\n  //PromiseA+ 2.3.1\n  if (promise2 === x) {\n    reject(new TypeError(\\\"Chaining cycle\\\"));\n  }\n  if ((x && typeof x === \\\"object\\\") || typeof x === \\\"function\\\") {\n    let used; //PromiseA+2.3.3.3.3 只能调用一次\n    try {\n      let then = x.then;\n      if (typeof then === \\\"function\\\") {\n        //PromiseA+2.3.3\n        then.call(\n          x,\n          (y) => {\n            //PromiseA+2.3.3.1\n            if (used) return;\n            used = true;\n            resolvePromise(promise2, y, resolve, reject);\n          },\n          (r) => {\n            //PromiseA+2.3.3.2\n            if (used) return;\n            used = true;\n            reject(r);\n          }\n        );\n      } else {\n        //PromiseA+2.3.3.4\n        if (used) return;\n        used = true;\n        resolve(x);\n      }\n    } catch (e) {\n      //PromiseA+ 2.3.3.2\n      if (used) return;\n      used = true;\n      reject(e);\n    }\n  } else {\n    //PromiseA+ 2.3.3.4\n    resolve(x);\n  }\n}\nmodule.exports = Promise;\n```\n\n### Promise.resolve\n\n`Promise.resolve(value)` 返回一个以给定值解析后的 Promise 对象.\n\n1. 如果 value 是个 thenable 对象，返回的 promise 会“跟随”这个 thenable 的对象，采用它的最终状态\n2. 如果传入的 value 本身就是 promise 对象，那么 Promise.resolve 将不做任何修改、原封不动地返回这个 promise 对象。\n3. 其他情况，直接返回以该值为成功状态的 promise 对象。\n\n```js\nPromise.resolve = function (param) {\n  if (param instanceof Promise) {\n    return param;\n  }\n  return new Promise((resolve, reject) => {\n    if (param && param.then && typeof param.then === \\\"function\\\") {\n      setTimeout(() => {\n        param.then(resolve, reject);\n      });\n    } else {\n      resolve(param);\n    }\n  });\n};\n```\n\n### Promise.reject\n\nPromise.reject 方法和 Promise.resolve 不同，Promise.reject()方法的参数，会原封不动地作为 reject 的理由，变成后续方法的参数。\n\n```js\nPromise.reject = function (reason) {\n  return new Promise((resolve, reject) => {\n    reject(reason);\n  });\n};\n```\n\n### Promise.prototype.catch\n\nPromise.prototype.catch 用于指定出错时的回调，是特殊的 then 方法，catch 之后，可以继续 .then\n\n```js\nPromise.prototype.catch = function (onRejected) {\n  return this.then(null, onRejected);\n};\n```\n\n### Promise.prototype.finally\n\n不管成功还是失败，都会走到 finally 中,并且 finally 之后，还可以继续 then。并且会将值原封不动的传递给后面的 then.\n\n```js\nPromise.prototype.finally = function (callback) {\n  return this.then(\n    (value) => {\n      return Promise.resolve(callback()).then(() => {\n        return value;\n      });\n    },\n    (err) => {\n      return Promise.resolve(callback()).then(() => {\n        throw err;\n      });\n    }\n  );\n};\n```\n\n### Promise.all\n\nPromise.all(promises) 返回一个 promise 对象\n\n1. 如果传入的参数是一个空的可迭代对象，那么此 promise 对象回调完成(resolve),只有此情况，是同步执行的，其它都是异步返回的。\n2. 如果传入的参数不包含任何 promise，则返回一个异步完成.\n3. promises 中所有的 promise 都 promise 都“完成”时或参数中不包含 promise 时回调完成。\n4. 如果参数中有一个 promise 失败，那么 Promise.all 返回的 promise 对象失败\n5. 在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组\n\n```js\nPromise.all = function (promises) {\n  return new Promise((resolve, reject) => {\n    let index = 0;\n    let result = [];\n    if (promises.length === 0) {\n      resolve(result);\n    } else {\n      function processValue(i, data) {\n        result[i] = data;\n        if (++index === promises.length) {\n          resolve(result);\n        }\n      }\n      for (let i = 0; i < promises.length; i++) {\n        //promises[i] 可能是普通值\n        Promise.resolve(promises[i]).then(\n          (data) => {\n            processValue(i, data);\n          },\n          (err) => {\n            reject(err);\n            return;\n          }\n        );\n      }\n    }\n  });\n};\n```\n\n### Promise.race\n\nPromise.race 函数返回一个 Promise，它将与第一个传递的 promise 相同的完成方式被完成。它可以是完成（ resolves），也可以是失败（rejects），这要取决于第一个完成的方式是两个中的哪个。\n\n如果传的参数数组是空，则返回的 promise 将永远等待。\n\n如果迭代包含一个或多个非承诺值和/或已解决/拒绝的承诺，则 Promise.race 将解析为迭代中找到的第一个值。\n\n```js\nPromise.race = function (promises) {\n  return new Promise((resolve, reject) => {\n    if (promises.length === 0) {\n      return;\n    } else {\n      for (let i = 0; i < promises.length; i++) {\n        Promise.resolve(promises[i]).then(\n          (data) => {\n            resolve(data);\n            return;\n          },\n          (err) => {\n            reject(err);\n            return;\n          }\n        );\n      }\n    }\n  });\n};\n```\n\n参考:[https://github.com/YvetteLau/Blog/issues/2](https://github.com/YvetteLau/Blog/issues/2)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 99,
        "like_count": 60
    },
    {
        "id": 23,
        "tag_id": 4,
        "tag_type": 3,
        "title": "27.HTTP2.0有哪些改动",
        "content": "1. 多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。\n2. 二进制分帧：应用层（HTTP/2）和传输层（TCP or UDP）之间增加一个二进制分帧层。\n3. 首部压缩（Header Compression）\n4. 服务端推送（Server Push）",
        "publish_time": "2022-09-29 23:37",
        "view_count": 17,
        "like_count": 23
    },
    {
        "id": 162,
        "tag_id": 1,
        "tag_type": 1,
        "title": "27.HashMap和ConcurrentHashmap",
        "content": "# HashMap 和 ConcurrentHashMap\n\n- `HashMap` 是非线程安全的，`ConcurrentHashMap` 是线程安全的\n- `HashMap` 和 `ConcurrentHashMap` 在 1.7 都是数组+链表，1.8 都是数组+链表 or 红黑树\n- `ConcurrentHashMap` 在 1.7 是分段锁，1.8 是去掉分段锁改成 `cas+synchronized`\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 196,
        "like_count": 45
    },
    {
        "id": 216,
        "tag_id": 6,
        "tag_type": 1,
        "title": "27.RocketMQ事务消息原理",
        "content": "# RocketMQ 事务消息原理\n\n![mq事务消息-KmU2U6](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/mq事务消息-KmU2U6.png)\n\n想了想，mq 也可以\n\n1. 先给 Brock 发送一条消息：我要下单了，注意哈\n2. Brock 给本地事务回馈消息：ack，好的，我知道了（半投递状态，消费端看不到）\n3. 本地事务开始执行业务逻辑，这里首先（校验场次 id 的座位是否重复，如果没有，直接执行下单：这两个业务非原子，上个锁，要不然可能会出现同样的座位）。下单成功，则返回 commit 给 Brock。消费者此时就可以看到这条消息了。\n4. 如果下单不成功，则返回 rollback，Brock 一般三天自动删除该无效的消息，消费者也看不到。\n5. 消费者看到了这条消息，调用绑定座位服务，如果失败了，则重试。（消费端不能失败，要不然不能保持一致，如果还是一直失败，则人工处理。） 注意：幂等性\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 372,
        "like_count": 42
    },
    {
        "id": 32,
        "tag_id": 4,
        "tag_type": 3,
        "title": "28.HTTPS是什么",
        "content": "## HTTPS是什么\n\nHTTPS 并不是新协议，而是让 **HTTP 先和 SSL（Secure Sockets Layer）通信，再由 SSL 和 TCP 通信，也就是说 HTTPS 使用了隧道进行通信**。通过使用 SSL，HTTPS 具有了加密（防窃听）、认证（防伪装）和完整性保护（防篡改）。\n\n## HTTP的缺点\n\n- 使用明文进行通信，内容可能会被窃听；\n- 不验证通信方的身份，通信方的身份有可能遭遇伪装；\n- 无法证明报文的完整性，报文有可能遭篡改。",
        "publish_time": "2022-09-29 23:37",
        "view_count": 6,
        "like_count": 10
    },
    {
        "id": 126,
        "tag_id": 1,
        "tag_type": 1,
        "title": "28.ArrayList有哪些并发问题",
        "content": "# ArrayList 有哪些并发问题\n\n> 其实就是**size++** 这一步的问题。 越界就是两个线程临界值去**扩容**都满足，于是一个线程 size++导致的，另外一个线程就溢出了，**null 就是 element[size] = e**,第一个线程还没来得及 size++，第二个线程就在原先的索引上把值给覆盖了，并且在下一个索引为 null。\n\n1. **越界**\n\n- 列表大小为 9，即 size=9\n- 线程 A 开始进入 add 方法，这时它获取到 size 的值为 9，调用 ensureCapacityInternal 方法进行容量判断。\n- 线程 B 此时也进入 add 方法，它和获取的 size 的值也为 9，也开始调用 ensureCapacityInternal 方法。\n- 线程 A 发现需求大小为 10，而 elementData 的大小就为 10，可以容纳。于是它不再扩容，返回。\n- 线程 B 也发现需要大小为 10，也可以容纳，返回。\n- 好了，**问题来了哈**\n- 线程 A 开始进行设置值操作，elementData[size++] = e 操作。此时 size 变为 10。\n- 线程 B 也开始进行设置值操作，它尝试设置 elementData[10] = e, 而 elementData 没有进行过扩容，它的下标最大为 9\n- 于是此时会报出一个数组越界的异常`ArrayIndexOutOfBoundsException`。\n\n2. **null**\n\n- 列表大小为 10，即 size=0\n- 线程 A 开始添加元素，值为 A。此时它执行第一条操作，将 A 放在了 elementData 下标为 0 的位置上。也就是说，线程挂在了`element[0] = e`上。\n- 接着线程 B 刚好也要开始添加一个值为 B 的元素，且走到了第一条的操作。此时线程 B 获取的 size 的值依然为 0，于是它将 B 也放在了 elementData 下标为 0 的位置上。\n- **问题来了**，其实上面也是问题，覆盖了。。。\n- 线程 A 将 size 的值增加为 1\n- 线程 B 开始将 size 的值增加为 2\n- 当你获取 1 索引的时候，那不就是 null 了？\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 154,
        "like_count": 18
    },
    {
        "id": 223,
        "tag_id": 6,
        "tag_type": 1,
        "title": "28.谈谈死信队列",
        "content": "# 谈谈死信队列\n\n**死信队列用于处理无法被正常消费的消息，即死信消息**。\n\n当一条消息初次消费失败，**消息队列 RocketMQ 会自动进行消息重试**；达到最大重试次数后，若消费依然失败，则表明消费者在正常情况下无法正确地消费该消息，此时，消息队列 RocketMQ 不会立刻将消息丢弃，而是将其发送到该**消费者对应的特殊队列中**，该特殊队列称为**死信队列**。\n\n**死信消息的特点**：\n\n- 不会再被消费者正常消费。\n- 有效期与正常消息相同，均为 3 天，3 天后会被自动删除。因此，请在死信消息产生后的 3 天内及时处理。\n\n**死信队列的特点**：\n\n- 一个死信队列对应一个 Group ID， 而不是对应单个消费者实例。\n- 如果一个 Group ID 未产生死信消息，消息队列 RocketMQ 不会为其创建相应的死信队列。\n- 一个死信队列包含了对应 Group ID 产生的所有死信消息，不论该消息属于哪个 Topic。\n\n消息队列 RocketMQ 控制台提供对死信消息的查询、导出和重发的功能。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 233,
        "like_count": 21
    },
    {
        "id": 31,
        "tag_id": 4,
        "tag_type": 3,
        "title": "29.HTTPS采用的加密方式",
        "content": "## 对称密钥加密\n\n对称密钥加密（Symmetric-Key Encryption），加密和解密使用同一密钥。\n\n- 优点：运算速度快\n- 缺点：无法安全地将密钥传输给通信方\n\n## 非对称密钥加密\n\n非对称密钥加密，又称公开密钥加密（Public-Key Encryption），加密和解密使用不同的密钥。\n\n公开密钥所有人都可以获得，**通信发送方获得接收方的公开密钥之后，就可以使用公开密钥进行加密**，**接收方收到通信内容后使用私有密钥解密**。\n\n非对称密钥除了用来加密，还可以用来进行签名。因为私有密钥无法被其他人获取，因此通信发送方使用其私有密钥进行签名，通信接收方使用发送方的公开密钥对签名进行解密，就能判断这个签名是否正确。\n\n- 优点：可以更安全地将公开密钥传输给通信发送方；\n- 缺点：运算速度慢。\n\n## HTTPS 采用的加密方式\n\nHTTPS 采用混合的加密机制，使用**非对称密钥加密用于传输对称密钥来保证传输过程的安全性**，之后使用**对称密钥加密进行通信来保证通信过程的效率**。DES+RSA\n\n![rsa原理-oe35BS](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/rsa原理-oe35BS.png)\n\n确保传输安全过程（其实就是 rsa 原理）：\n\n1. Client 给出**协议版本号**、一个客户端生成的**随机数**（Client random），以及客户端支持的**加密方法**。\n2. Server 确认双方使用的**加密方法**，并给出**数字证书**、以及一个服务器生成的**随机数**（Server random）。\n3. Client 确认**数字证书有效**，然后生成一个新的**随机数**（Premaster secret），并使用**数字证书中的公钥，加密这个随机数**，发给 Server。\n4. Server 使用自己的**私钥，获取 Client 发来的随机数**（Premaster secret）。\n5. Client 和 Server 根据约定的加密方法，使用前面的**三个随机数，生成”对话密钥”**（session key），用来加密接下来的整个对话过程。\n\n## 认证\n\n通过使用 **证书** 来对通信方进行认证。\n\n数字证书认证机构（CA，Certificate Authority）是客户端与服务器双方都可信赖的第三方机构。\n\n服务器的运营人员向 CA 提出公开密钥的申请，CA 在判明提出申请者的身份之后，会对已申请的公开密钥做数字签名，然后分配这个已签名的公开密钥，并将该公开密钥放入公开密钥证书后绑定在一起。\n\n进行 HTTPS 通信时，服务器会把证书发送给客户端。客户端取得其中的公开密钥之后，先使用数字签名进行验证，如果验证通过，就可以开始通信了。\n\n[加密全套流程](https://www.cnblogs.com/handsomeBoys/p/6556336.html)\n\n[https://www.cnblogs.com/xdyixia/p/11610102.html](https://www.cnblogs.com/xdyixia/p/11610102.html)\n\n## HTTPS 的缺点\n\n- 因为需要进行加密解密等过程，因此速度会更慢；\n- 需要支付证书授权的高额费用。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 308,
        "like_count": 55
    },
    {
        "id": 98,
        "tag_id": 1,
        "tag_type": 1,
        "title": "29.HashMap的参数",
        "content": "# HashMap 的参数\n\n- 为什么容量要是 2 的整数次幂？\n\n因为获取 key 在数组中对应的下标是通过 key 的哈希值与数组长度 -1 进行与运算，如：tab[i = (n - 1) & hash]\n\n1. n 为 2 的整数次幂，这样 n-1 后之前为 1 的位后面全是 1，这样就能保证 (n-1) & hash 后相应的位数既可能是 0 又可能是 1，这取决于 hash 的值，这样能保证**散列的均匀**，同时**与运算效率高**\n\n2. 如果 n 不是 2 的整数次幂，会造成更多的 hash 冲突\n\n> 举个例子：如 16：10000, 16-1=15：1111, 1111 再与 hash 做 & 运算的时候，各个位置的取值取决于 hash，如果不是 2 的整数次幂，必然会有的 0 的位，这样再进行 & 操作的时候就为 0 了，会造成哈希冲突。注意：HashMap 的 tableSizeFor 方法做了处理，**能保证 n 永远都是 2 次幂**\n\n- 为什么负载因子是 0.75？\n\n> 负载因子过低，频繁扩容，扩容会重新哈希，性能下降;负载因子过高，容易浪费容量.（经验+概率）\n\n- 为什么红黑树的阈值是 8？\n\n> 在 hash 函数设计合理的情况下，发生 hash 碰撞 8 次的几率为百万分之 6，概率说话。(**泊松分布**)\n\n- 为什么退化链表的阈值 6？\n\n> 6 是因为如果 hash 碰撞次数在 8 附近徘徊，会一直发生链表和红黑树的转化，为了预防这种情况的发生。\n\n- hash\n\n```java\nstatic final int hash(Object key) {\n    int h;\n    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);\n}\n```\n\nhash 函数是先拿到通过 key 的 hashcode，**是 32 位的 int 值**，然后让 **hashcode 的高 16 位和低 16 位进行异或操作**。这个也叫扰动函数，这么设计有二点原因：\n\n- **一定要尽可能降低 hash 碰撞，越分散越好**；\n- 算法一定要尽可能高效，因为这是高频操作, 因此采用位运算；\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 293,
        "like_count": 3
    },
    {
        "id": 218,
        "tag_id": 6,
        "tag_type": 1,
        "title": "29.异步消息如何保证数据一致性",
        "content": "# 异步消息如何保证数据一致性\n\n> 这里指：业务行为的成功与否与消息保持一致\n\n1. MySQL 落库\n2. Redis 缓存\n3. RocketMQ 事务消息\n4. 事务，二阶段提交\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 33,
        "like_count": 86
    },
    {
        "id": 139,
        "tag_id": 1,
        "tag_type": 1,
        "title": "30.HashMap的put、get和扩容",
        "content": "# HashMap 的 put、get 和扩容\n\n## put\n\n![hashmap-put-1.8-sZ557C](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/hashmap-put-1.8-sZ557C.png)\n\n- 判断数组是否为空，为空进行初始化;（初始化）\n- 不为空，计算 k 的 hash 值，通过(n - 1) & hash 计算应当存放在数组中的下标 index;（通过 hash 计算 index）\n- 查看 table[index] 是否存在数据，没有数据就构造一个 Node 节点存放在 table[index] 中；（查看数组中是否哈希冲突）\n- 存在数据，说明发生了 hash 冲突(存在二个节点 key 的 hash 值一样), 继续判断 key 是否相等，相等，用新的 value 替换原数据(onlyIfAbsent 为 false)；（冲突，判断 key 是否相等，相等则替换）\n- 如果不相等，判断当前节点类型是不是树型节点，如果是树型节点，创造树型节点插入红黑树中；（判断是否红黑树）\n- 如果不是树型节点，创建普通 Node 加入链表中；判断链表长度是否大于 8， 大于的话链表转换为红黑树；（判断是否转成红黑树）\n- 插入完成之后判断当前节点数是否大于阈值，如果大于开始扩容为原数组的二倍。（扩容）\n\n## get\n\n1. 判断：是否为空，为空，返回 null\n2. 不为空，判断第一个位置是否为查询 key，是，返回 value\n3. 不是，下一个节点继续判断是否为红黑树，是，按树查找\n4. 不是，按链表查找\n\n## 扩容\n\n> 先说 1.7 吧\n\n```java\nfor (HashMapEntry<K, V> e : table) {\n    // 如果这个数组位置上有元素且存在哈希冲突的链表结构则继续遍历链表\n    while (null != e) {\n        //取当前数组索引位上单向链表的下一个元素\n        HashMapEntry<K, V> next = e.next;\n        //重新依据hash值计算元素在扩容后数组中的索引位置\n        int i = indexFor(e.hash, newCapacity);\n        e.next = newTable[i]; // 这一步和下一步就是头插法了，并且这两步出现线程不安全死循环问题\n        newTable[i] = e;\n        e = next; // 遍历链表\n    }\n}\n```\n\n> 1.8\n> HashMap 的扩容使用的是 2 次幂的扩展(指长度扩为原来 2 倍)，所以，元素的位置要么是在原位置，要么是在原位置再移动 2 次幂的位置。也就是说省略了重新计算 hash 值的时间，而且新增的 1 位是 0 还是 1 机会是随机的，因此 resize 的过程，均匀的把之前的冲突的节点分散到新的 bucket 了。如果在新表的数组索引位置相同，则链表元素不会倒置。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 290,
        "like_count": 22
    },
    {
        "id": 206,
        "tag_id": 6,
        "tag_type": 1,
        "title": "30.RocketMQ实现延迟队列",
        "content": "# RocketMQ 实现延迟队列\n\nRocketmq 发送延时消息时先把消息按照延迟时间段发送到指定的队列中(rocketmq 把每种延迟时间段的消息都存放到同一个队列中)；\n\n接着通过一个定时器进行轮训这些队列，查看消息是否到期，如果到期就把这个消息发送到指定 topic 的队列中，\n\n这样的好处是同一队列中的消息延时时间是一致的，还有一个好处是这个队列中的消息时按照消息到期时间进行递增排序的，说的简单直白就是队列中消息越靠前的到期时间越早。\n\n缺点：定时器采用了 timer，timer 是单线程运行，如果延迟消息数量很大的情况下，可能单线程处理不过来，造成消息到期后也没有发送出去的情况。\n\n改进点：可以在每个延迟队列上各采用一个 timer，或者使用 timer 进行扫描，加一个线程池对消息进行处理，这样可以提供效率。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 480,
        "like_count": 30
    },
    {
        "id": 81,
        "tag_id": 1,
        "tag_type": 1,
        "title": "31.HashMap的并发问题",
        "content": "# 并发问题\n\n- HashMap 扩容的时候会调用 resize()方法，就是这里的并发操作容易在一个桶上形成环形链表\n- 这样当获取一个不存在的 key 时，计算出的 index 正好是环形链表的下标就会出现死循环。\n- **但是 1.7 的头插法造成的问题，1.8 改变了插入顺序，就解决了这个问题，但是为了内存可见性等安全性，还是需要 ConCurrentHashMap**\n- HashTable 是直接在操作方法上加 synchronized 关键字，锁住整个数组，粒度比较大\n- Collections.synchronizedMap 是使用 Collections 集合工具的内部类，通过传入 Map 封装出一个 SynchronizedMap 对象，内部定义了一个对象锁，方法内通过对象锁实现\n- ConcurrentHashMap 使用分段锁，降低了锁粒度，让并发度大大提高。(jdk1.8 CAS+ synchronized)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 194,
        "like_count": 1
    },
    {
        "id": 233,
        "tag_id": 6,
        "tag_type": 1,
        "title": "31.消息队列如何保证顺序消费",
        "content": "# 消息队列如何保证顺序消费\n\n生产者中把 orderId 进行取模，把相同模的数据放到 messagequeue 里面，消费者消费同一个 messagequeue，只要消费者这边有序消费，那么可以保证数据被顺序消费。\n\nRocketMQ：顺序消息一般使用集群模式，是指对消息消费者内的线程池中的线程对消息消费队列只能串行消费。并并发消息消费最本质的区别是消息消费时必须成功锁定消息消费队列，在 Broker 端会存储消息消费队列的锁占用情况。\n\n在 RocketMQ 中：\n\n顺序消息分为分区顺序消息和全局顺序消息，全局顺序消息比较容易理解，也就是哪条消息先进入，哪条消息就会先被消费，符合我们的 FIFO，很多时候全局消息的实现代价很大，所以就出现了分区顺序消息。\n\n淡然，我们通过对消息的 key，进行 hash，相同 hash 的消息会被分配到同一个分区里面，如果要做全局顺序消息，我们的分区只需要一个即可，所以全局顺序消息的代价是比较大的。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 224,
        "like_count": 95
    },
    {
        "id": 76,
        "tag_id": 1,
        "tag_type": 1,
        "title": "32.ConcurrentHashMap的原理",
        "content": "# ConcurrentHashMap\n\n## 1.7\n\n### segment\n\n- 唯一的区别（和 HashMap）就是其中的核心数据如 value ，以及链表都是 volatile 修饰的，保证了获取时的可见性。\n- ConcurrentHashMap 采用了分段锁技术（相对 hashTable 降低锁的粒度），其中 Segment 继承于 `ReentrantLock`（可能还会扯 AQS）。\n- 不会像 HashTable 那样不管是 put 还是 get 操作都需要做同步处理，理论上 ConcurrentHashMap 支持 CurrencyLevel (Segment 数组数量)的线程并发。\n- **每当一个线程占用锁访问一个 Segment 时，不会影响到其他的 Segment。**\n\n### put\n\n- 虽然 HashEntry 中的 value 是用 volatile 关键字修饰的，但是并不能保证并发的原子性，所以 put 操作仍然需要加锁处理。\n- 首先第一步的时候会尝试获取锁，如果获取失败肯定就是其他线程存在竞争，则利用 `scanAndLockForPut()` **自旋获取锁**。\n  - 尝试获取自旋锁\n  - 如果**重试的次数**达到了`MAX_SCAN_RETRIES` 则改为阻塞锁获取，保证能获取成功。\n\n总的来说：\n\n- 将当前的 Segment 中的 table 通过 key 的 hashcode 定位到 HashEntry\n- 遍历该 HashEntry，如果不为空则判断传入的 key 和当前遍历的 key 是否相等，相等则覆盖旧的 value\n- 不为空则需要新建一个 HashEntry 并加入到 Segment 中，同时会先判断是否需要扩容\n- 最后会解除在 1 中所获取当前 Segment 的锁。\n\n### get\n\n- 只需要将 Key 通过 Hash 之后定位到具体的 Segment ，再通过一次 Hash 定位到具体的元素上。\n- 由于 HashEntry 中的 value 属性是用 volatile 关键词修饰的，保证了内存可见性，所以每次获取时都是最新值。\n- ConcurrentHashMap 的 get 方法是非常高效的，**因为整个过程都不需要加锁。**\n\n### size\n\n在 JDK1.7 中，第一种方案他会**使用不加锁的模式**去尝试多次计算 ConcurrentHashMap 的 size，最多**三次**，比较前后两次计算的结果，结果一致就认为当前没有元素加入，计算的结果是准确的。 第二种方案是如果第一种方案不符合，他就会给**每个 Segment 加上锁**，然后计算 ConcurrentHashMap 的 size 返回\n\n## 1.8\n\n1.7 查询遍历链表效率太低（种种原因）。其中抛弃了原有的 Segment 分段锁，而采用了 `CAS + synchronized` 来保证并发安全性（会扯 1.6 对 synchronized 的优化）\n\n### put\n\n- 根据 key 计算出 hashcode\n- 判断是否需要进行初始化\n- 如果 f 为 null，说明 table 中这个位置第一次插入元素，利用 Unsafe.compareAndSwapObject 方法插入 Node 节点。\n  - 如果 CAS 成功，说明 Node 节点已经插入，随后 addCount(1L, binCount)方法会检查当前容量是否需要进行扩容。\n  - 如果 CAS 失败，说明有其它线程提前插入了节点，自旋重新尝试在这个位置插入节点。\n- 如果 f 的 hash 值为-1，说明当前 f 是 ForwardingNode 节点，意味有其它线程正在扩容，则一起进行扩容操作。\n- 如果都不满足，则利用`synchronized`锁写入数据\n- 如果数量大于 TREEIFY_THRESHOLD 则要转换为红黑树。\n\n### get\n\n- 根据计算出来的 hashcode 寻址，如果就在桶上那么直接返回值。\n- 如果是红黑树那就按照树的方式获取值。\n- 就不满足那就按照链表的方式遍历获取值。\n\n### size\n\nConcurrentHashMap 提供了 baseCount、counterCells 两个辅助变量和一个 CounterCell 辅助内部类。sumCount() 就是迭代 counterCells 来统计 sum 的过程。 put 操作时，肯定会影响 size()，在 put() 方法最后会调用 **addCount()** 方法。\n\n在 addCount()方法中：\n\n- 如果 counterCells == null, 则对 baseCount 做 CAS 自增操作。\n- 如果并发导致 baseCount CAS 失败了使用 counterCells。\n- 如果 counterCells CAS 失败了，在 fullAddCount 方法中，会继续死循环操作，直到成功。\n- CounterCell 使用了 @sun.misc.Contended 标记的类\n\n> 缓存系统中是以缓存行（cache line）为单位存储的。缓存行是 2 的整数幂个连续字节，一般为 32-256 个字节。最常见的缓存行大小是 64 个字节。当多线程修改互相独立的变量时，**如果这些变量共享同一个缓存行，就会无意中影响彼此的性能，这就是伪共享**。\n\n实际上：\n\n- JDK1.8 size 是通过对 baseCount 和 counterCell 进行 CAS 计算，最终通过 baseCount 和 遍历 CounterCell 数组得出 size。\n- JDK 8 推荐使用 mappingCount 方法，因为这个方法的返回值是 long 类型，不会因为 size 方法是 int 类型限制最大值。\n\n[https://zhuanlan.zhihu.com/p/40627259](https://zhuanlan.zhihu.com/p/40627259)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 359,
        "like_count": 71
    },
    {
        "id": 202,
        "tag_id": 6,
        "tag_type": 1,
        "title": "32.RocketMQ推拉模式",
        "content": "# RocketMQ 推拉模式\n\n消费者客户端有两种方式从消息中间件获取消息并消费。严格意义上来讲，RocketMQ 并没有实现 PUSH 模式，而是对拉模式进行一层包装，名字虽然是 Push 开头，实际在实现时，使用 Pull 方式实现。通过 Pull 不断轮询 Broker 获取消息。当不存在新消息时，Broker 会挂起请求，直到有新消息产生，取消挂起，返回新消息。\n\nPush 模式可以说基于订阅与发布模式，而 Pull 模式可以说是基于消息队列模式。\n\nPull:\n\n- 消费者向 broker 拉取消息时，如果消息未到达消费队列，并且未启用长轮询机制，则会在服务端等待 shortPollingTimeMills(默认 1 秒) 时间后再去判断消息是否已经到达消息队列，如果消息未到达，则提示消息拉取客户端 PULL_NOT_FOUND。\n- 如果开启长轮询模式，rocketMQ 会每 5s 轮询检查一次消息是否可达，同时一有新消息到达后立马通知挂起线程再次验证新消息是否是自己感兴趣的消息，如果是则从 commitlog 文件提取消息返回给消息拉取客户端，否则直到挂起超时，超时时间由消息拉取方在消息拉取时封装在请求参数中，PUSH 模式默认 15s。\n\nPush:\n\n- 后台独立线程 RebalanceServic 根据 Topic 中消息队列个数和当前消费组内消费者个数进行负载均衡，给当前消费者分配对应的 MessageQueue，将其封装为 PullRequest 实例放入队列 pullRequestQueue 中。\n- Consumer 端开启后台独立的线程 PullMessageService 不断地从队列 pullRequestQueue 中获取 PullRequest 并通过网络通信模块异步发送 Pull 消息的 RPC 请求给 Broker 端。这里算是比较典型的生产者-消费者模型，实现了准实时的自动消息拉取。\n- PullMessageService 异步拉取到消息后，通过 PullCallback 进行回调处理，如果拉取成功，则更新消费进度，putPullRequest 到阻塞队列 pullRequestQueue 中，接着立即进行拉取。\n- 监听器 ConsumeMessageConcurrentlyService 会一直监听回调方法 PullCallback，把拉取到的消息交给 Consumerrequest 进行处理，Consumerrequest 会调用消费者业务方实现的 consumeMessage()接口处理具体业务，消费者业务方处理完成后返回 ACK 给 Consumerrequest，如果消费者 ACK 返回的失败，则在集群模式下把消息发回 Broker 进行重试(广播模型重试的成本太高)，最后更新消费进度 offsetTable。\n- 在 Broker 端，PullMessageProcessor 业务处理器收到 Pull 消息的 RPC 请求后，通过 MessageStore 实例从 commitLog 获取消息。如果第一次尝试 Pull 消息失败(比如 Broker 端没有可以消费的消息)，则通过长轮询机制先 hold 住并且挂起该请求，然后通过 Broker 端的后台线程 PullRequestHoldService 重新尝试和后台线程 ReputMessageService 进行二次处理。\n\n![](https://imgs.heiye.site/byte/1644301684522.png)\n\n简单介绍一下长轮询和短轮询：\n短轮询：定时发起请求，服务端收到请求后不论数据有没有更新都立即返回\n优点：实现简单，容易理解\n缺点：服务端是被动的，服务端要不断的处理客户端连接，并且服务端无法控制客户端 pull 的频率以及客户端数量。\n\n长轮询：对普通轮询的优化，依然由客户端发起请求，服务端收到后并不立即响应而是 hold 住客户端连接，等待数据产生变更后(或者超过指定时间还未产生变更)才回复客户端。\n\n## 参考\n\n- [https://developer.51cto.com/article/671613.html](https://developer.51cto.com/article/671613.html)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 82,
        "like_count": 69
    },
    {
        "id": 80,
        "tag_id": 1,
        "tag_type": 1,
        "title": "33.HashSet底层原理",
        "content": "# HashSet 底层\n\nHashSet 中不允许有重复元素，这是因为 HashSet 是基于 HashMap 实现的，HashSet 中的元素都存放在 HashMap 的 key 上面，而 value 中的值都是统一的一个`private static final Object PRESENT = new Object();`。 HashSet 跟 HashMap 一样，都是一个存放链表的数组。这样遇到重复元素就可以返回 object 了(意味着不是 null)，如果 value 是 null 的话，发现重复，那么就返回上一个 value 值 null，那么不符合源码：\n\n```java\nprivate static final Object PRESENT = new Object();\npublic boolean add(E e) {\n    return map.put(e, PRESENT)==null;\n}\nSystem.out.println(map.put(1, o)); // null\nSystem.out.println(map.put(1, o));// java.lang.Object@610455d6\n// 所以重复就false\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 74,
        "like_count": 0
    },
    {
        "id": 210,
        "tag_id": 6,
        "tag_type": 1,
        "title": "33.如何防止消息丢失",
        "content": "# 如何防止消息丢失\n\n- 生产者可以采用重试机制。因为消费者会不停的消费消息，可以重试将消息放入队列。\n- 死信队列，可以理解为备胎(推荐)\n  - 即在消息过期，队列满了，消息被拒绝的时候，都可以扔给死信队列。\n  - 如果出现死信队列和普通队列都满的情况，此时间接需要考虑消费者消费能力不足，可以对消费者开多线程进行处理。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 116,
        "like_count": 3
    },
    {
        "id": 143,
        "tag_id": 1,
        "tag_type": 1,
        "title": "34.TreeSet底层原理",
        "content": "# TreeSet 底层\n\nTreeSet 底层则采用 NavigableMap 这个接口来保存 TreeSet 集合，而实际上 NavigableMap 只是一个接口，实际上 TreeSet 还是用 TreeMap 来保存 set 元素。\n\n```java\nTreeSet(NavigableMap<E,Object> m) {\n        this.m = m;\n}\n\n public TreeSet() {\n        this(new TreeMap<E,Object>());\n\n }\n```\n\nTreeMap 采用一种被称为“红黑树”的排序二叉树来保存 Map 中的的每个 Entry——每个 Entry 都被当做红黑树的一个节点来对待；TreeMap 实现 SortedMap 接口，能够把它保存的记录根据键排序，默认是按键值的升序排序，也可以指定排序的比较器，当用 Iterator 遍历 TreeMap 时，得到的记录是排过序的。如果使用排序的映射，建议使用 TreeMap。在使用 TreeMap 时，key 必须实现 Comparable 接口或者在构造 TreeMap 传入自定义的 Comparator，否则会在运行时抛出 java.lang.ClassCastException 类型的异常。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 239,
        "like_count": 61
    },
    {
        "id": 229,
        "tag_id": 6,
        "tag_type": 1,
        "title": "34.RocketMQ消息存储",
        "content": "# RocketMQ 消息存储\n\n## 存储结构\n\nRocketMQ 消息的存储是由 ConsumeQueue 和 CommitLog 配合完成的，消息真正的物理存储文件是 CommitLog，ConsumeQueue 是消息的逻辑队列，类似数据库的索引文件，存储的是指向物理存储的地址。每个 Topic 下的每个 Message Queue 都有一个对应的 ConsumeQueue 文件。\n\n- CommitLog：存储消息的元数据\n- ConsumerQueue：存储消息在 CommitLog 的索引\n- IndexFile：为了消息查询提供了一种通过 key 或时间区间来查询消息的方法，这种通过 IndexFile 来查找消息的方法不影响发送与消费消息的主流程\n\n## 存储过程\n\n1. 消息生产者发送消息\n2. MQ 收到消息，将消息进行持久化，在存储中新增一条记录\n3. 返回 ACK 给生产者\n4. MQ push 消息给对应的消费者，然后等待消费者返回 ACK\n5. 如果消息消费者在指定时间内成功返回 ack，那么 MQ 认为消息消费成功，在存储中删除消息，即执行第 6 步；如果 MQ 在指定时间内没有收到 ACK，则认为消息消费失败，会尝试重新 push 消息,重复执行 4、5、6 步骤\n6. MQ 删除消息\n\n想说一点，activeMQ 的存储介质 DB，这就影响了存储效率，其他几位 MQ 采用的文件系统，并且依照顺序写，极大跟随了 SSD 的步伐。\n\n## 刷盘机制\n\n**同步机制**：在返回写成功状态时，消息已经被写入磁盘。具体流程是，消息写入内存的 PAGECACHE 后，立刻通知刷盘线程刷盘， 然后等待刷盘完成，刷盘线程执行完成后唤醒等待的线程，返回消息写成功的状态。\n\n1. 封装刷盘请求\n2. 提交刷盘请求\n3. 线程阻塞 5 秒，等待刷盘结束\n\n服务那边：\n\n1. 加锁\n2. 遍历 requestsRead\n3. 刷盘\n4. 唤醒发送消息客户端\n5. 更新刷盘监测点\n\n**异步机制**：在返回写成功状态时，消息**可能**只是被写入了内存的 PAGECACHE，写操作的返回快，吞吐量大；当内存里的消息量积累到一定程度时，统一触发写磁盘动作，快速写入。\n\n在消息追加到内存后，立即返回给消息发送端。如果开启 transientStorePoolEnable，RocketMQ 会单独申请一个与目标物理文件（commitLog）同样大小的堆外内存，该堆外内存将使用内存锁定，确保不会被置换到虚拟内存中去，消息首先追加到堆外内存，然后提交到物理文件的内存映射中，然后刷写到磁盘。如果未开启 transientStorePoolEnable，消息直接追加到物理文件直接映射文件中，然后刷写到磁盘中。\n\n开启 transientStorePoolEnable 后异步刷盘步骤:\n\n1. 将消息直接追加到 ByteBuffer（堆外内存）\n2. CommitRealTimeService 线程每隔 200ms 将 ByteBuffer 新追加内容提交到 MappedByteBuffer 中\n3. MappedByteBuffer 在内存中追加提交的内容，wrotePosition 指针向后移动\n4. commit 操作成功返回，将 committedPosition 位置恢复\n5. FlushRealTimeService 线程默认每 500ms 将 MappedByteBuffer 中新追加的内存刷写到磁盘\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 324,
        "like_count": 95
    },
    {
        "id": 89,
        "tag_id": 1,
        "tag_type": 1,
        "title": "35.LinkedHashMap底层原理",
        "content": "> 众所周知 HashMap 是一个无序的 Map，因为每次根据 key 的 hashcode 映射到 Entry 数组上，所以遍历出来的顺序并不是写入的顺序。\n\n底层是继承于 `HashMap` 实现的，由一个双向链表所构成。\n\n`LinkedHashMap` 的排序方式有两种：\n\n- 根据写入顺序排序。\n- 根据访问顺序排序。\n\n其中根据访问顺序排序时，每次 `get` 都会将访问的值移动到链表末尾，这样重复操作就能的到一个按照访问顺序排序的链表。\n\n详细的原理可以参考：https://crossoverjie.top/2018/02/06/LinkedHashMap/\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 404,
        "like_count": 39
    },
    {
        "id": 221,
        "tag_id": 6,
        "tag_type": 1,
        "title": "35.RocketMQ路由管理",
        "content": "# RocketMQ 路由管理\n\n## 心跳机制\n\n- RocketMQ 路由注册是通过 Broker 与 NameServer 的心跳功能实现的。\n- Broker 启动时向集群中所有的 NameServer 发送心跳信息，每隔 30s 向集群中所有 NameServer 发送心跳包，NameServer 收到心跳包时会更新 brokerLiveTable 缓存中 BrokerLiveInfo 的 lastUpdataTimeStamp 信息，然后 NameServer 每隔 10s 扫描 brokerLiveTable，如果连续 120S 没有收到心跳包，NameServer 将移除 Broker 的路由信息同时关闭 Socket 连接。\n\n## 删除路由\n\n- `Broker`每隔 30s 向`NameServer`发送一个心跳包，心跳包包含`BrokerId`，`Broker`地址，`Broker`名称，`Broker`所属集群名称、`Broker`关联的`FilterServer`列表。但是如果`Broker`宕机，`NameServer`无法收到心跳包，此时`NameServer`如何来剔除这些失效的`Broker`呢？\n- `NameServer`会每隔 10s 扫描`brokerLiveTable`状态表，如果`BrokerLive`的**lastUpdateTimestamp**的时间戳距当前时间超过 120s，则认为`Broker`失效，移除该`Broker`，关闭与`Broker`连接，同时更新`topicQueueTable`、`brokerAddrTable`、`brokerLiveTable`、`filterServerTable`。\n\n## 路由发现\n\nRocketMQ 路由发现是非实时的，当 Topic 路由出现变化后，NameServer 不会主动推送给客户端，而是由客户端定时拉取主题最新的路由。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 0,
        "like_count": 35
    },
    {
        "id": 84,
        "tag_id": 1,
        "tag_type": 1,
        "title": "36.手撸LRU",
        "content": "```java\n// 双向链表+HashMap，Java中的LinkedHashMap就实现了该算法。\n// get\npublic int get(int key) {\n    if (map.containsKey(key)) {\n        Node n = map.get(key); // 获取内存中存在的值，比如A\n        remove(n); //使用链表的方法，移除该节点\n        setHead(n); //依然使用链表的方法，将该节点放入头部\n        return n.value;\n    } \n    return -1;\n}\n// put\npublic void set(int key, int value) {\n    if (map.containsKey(key)) {\n        Node old = map.get(key);\n        old.value = value;\n        remove(old); // 移除旧节点\n        setHead(old); // 放到队头\n    } else {\n        Node created = new Node(key, value);\n        if (map.size() >= capacity) {\n            map.remove(end.key); // clear该key\n            remove(end); //链表也是依次\n            setHead(created); // 将created放入队头\n        } else {\n            setHead(created); // 如果没满，直接放入队头\n        }\n        map.put(key,created);\n    }\n}\n```\n\n```java\n//lc: 146. LRU缓存机制\nclass LRUCache {\n    private int cap;\n    private Map<Integer, Integer> map = new LinkedHashMap<>();\n    public LRUCache(int capacity) {\n        this.cap = capacity;\n    }\n    \n    public int get(int key) {\n        if (map.containsKey(key)) {\n            int value = map.get(key);\n            // 查一次，就将查到到仍在队尾\n            map.remove(key);\n            map.put(key,value);\n            return value;\n        }\n        return -1;\n    }\n    \n    public void put(int key, int value) {\n        if (map.containsKey(key)) {\n            map.remove(key);\n        } else if (map.size() == cap) {\n            // 满了\n            Iterator<Map.Entry<Integer, Integer>> iterator = map.entrySet().iterator();\n            iterator.next();\n            iterator.remove();\n        }\n        map.put(key, value);\n    }\n}\n```",
        "publish_time": "2022-09-29 23:37",
        "view_count": 91,
        "like_count": 29
    },
    {
        "id": 207,
        "tag_id": 6,
        "tag_type": 1,
        "title": "36.Zookeeper是什么",
        "content": "# Zookeeper 是什么\n\n## 什么是 Zookeeper？\n\nZooKeeper 是一个开源的分布式协调服务\n\n## Zookeeper 使用场景？\n\n1. 数据发布/订阅、\n2. 负载均衡、\n3. 命名服务、\n4. 分布式协调/通知、\n5. 集群管理、\n6. Master 选举、\n7. 分布式锁和分布式队列等功能。\n\n## Zookeeper 的特点\n\n- 顺序一致性： 从同一客户端发起的事务请求，最终将会严格地按照顺序被应用到 ZooKeeper 中去。\n- 原子性： 所有事务请求的处理结果在整个集群中所有机器上的应用情况是一致的，也就是说，要么整个集群中所有的机器都成功应用了某一个事务，要么都没有应用。\n- 单一系统映像 ： 无论客户端连到哪一个 ZooKeeper 服务器上，其看到的服务端数据模型都是一致的。\n- 可靠性： 一旦一次更改请求被应用，更改的结果就会被持久化，直到被下一次更改覆盖。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 135,
        "like_count": 36
    },
    {
        "id": 111,
        "tag_id": 1,
        "tag_type": 1,
        "title": "37.什么是线程安全",
        "content": "# 什么是线程安全？\n\n> 我的理解是：多个线程交替执行，本身是没有问题的，但是如果访问共享资源，结果可能会出现问题，于是就出现了线程不安全的问题。\n\n1. 访问共享变量或资源\n2. 依赖时序的操作\n3. 不同数据之间存在绑定关系\n4. 对方没有声明自己是线程安全的\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 456,
        "like_count": 73
    },
    {
        "id": 222,
        "tag_id": 6,
        "tag_type": 1,
        "title": "37.Zookeeper原理和选举算法",
        "content": "# Zookeeper 原理和选举算法\n\n## Zookeeper 的原理？\n\nZAB 协议&Paxos 算法\nZAB 协议包括两种基本的模式：**崩溃恢复**和**消息广播**。当整个 Zookeeper 集群刚刚启动或**者 Leader 服务器宕机**、**重启**或者网络故障导致**少于过半的服务器与 Leader 服务器保持正常通信**时，所有服务器进入崩溃恢复模式，首先选举产生新的 Leader 服务器，然后集群中 Follower 服务器开始与新的 Leader 服务器进行数据同步。当集群中超过**半数机器与该 Leader 服务器完成数据同步**之后，退出恢复模式进入消息广播模式，Leader 服务器开始接收客户端的事务请求生成事物提案来进行事务请求处理。\n\n## 选择算法和流程\n\n先说：\n\n> 每次投票会包含所推举的服务器的 myid 和 ZXID、epoch，使用(myid, ZXID,epoch)来表示\n> zxid，也就是事务 id，为了保证事务的顺序一致性，zookeeper 采用了递增的事务 id 号（zxid）来标识事务。\n> PK 1. 优先检查 ZXID。ZXID 比较大的服务器优先作为 Leader 2. 如果 ZXID 相同，那么就比较 myid。myid 较大的服务器作为 Leader 服务器。\n\n目前有 5 台服务器，每台服务器均没有数据，它们的编号分别是 1,2,3,4,5,按编号依次启动，它们的选择举过程如下：\n\n1. 服务器 1 启动，给自己投票，然后发投票信息，由于其它机器还没有启动所以它收不到反馈信息，服务器 1 的状态一直属于 Looking。\n2. 服务器 2 启动，给自己投票，同时与之前启动的服务器 1 交换结果，由于服务器 2 的编号大所以服务器 2 胜出，但此时投票数没有大于半数，所以两个服务器的状态依然是 LOOKING。\n3. 服务器 3 启动，给自己投票，同时与之前启动的服务器 1,2 交换信息，由于服务器 3 的编号最大所以服务器 3 胜出，此时投票数正好大于半数，所以服务器 3 成为 leader，服务器 1,2 成为 follower。\n4. 服务器 4 启动，给自己投票，同时与之前启动的服务器 1,2,3 交换信息，尽管服务器 4 的编号大，但之前服务器 3 已经胜出，所以服务器 4 只能成为 follower。\n5. 服务器 5 启动，后面的逻辑同服务器 4 成为 follower。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 494,
        "like_count": 94
    },
    {
        "id": 75,
        "tag_id": 1,
        "tag_type": 1,
        "title": "38.什么是上下文切换",
        "content": "# 上下文切换\n\n多线程编程中一般**线程的个数都大于 CPU 核心的个数**，而一个 CPU 核心在任意时刻只能被一个线程使用，为了让这些线程都能得到有效执行，CPU 采取的策略是为每个线程分配**时间片并轮转**的形式。当一个线程的时间片用完的时候就会重新处于就绪状态让给其他线程使用，这个过程就属于一次上下文切换。\n\n实际上就是**任务从保存到再加载的过程就是一次上下文切换**。\n\n## 并行与并发\n\n- 并行：**单位时间内**，多个任务同时执行。\n- 并发：**同一时间段**，多个任务都在执行 (单位时间内不一定同时执行)；\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 226,
        "like_count": 60
    },
    {
        "id": 205,
        "tag_id": 6,
        "tag_type": 1,
        "title": "38.Sentinel相关面试题",
        "content": "\n## 为什么选择Sentinel？\nSentinel是一个面向分布式架构的轻量级服务保护框架，主要以流量控制、熔断降级、系统负载保护等多个维度。\n\n隔离策略：信号量隔离（并发线程数限流）\n\n熔断策略：\n1. 基于响应时间\n2. 异常比率\n3. 异常数\n\n限流：基于QPS限流\n\n控制台：查看秒级监控、机器发现等。\n\n## 服务限流\n当**系统资源不够，不足以应对大量请求**，对系统按照预设的规则进行流量限制或功能限制\n\n## 服务熔断\n当**调用目标服务的请求和调用大量超时或失败，服务调用方为避免造成长时间的阻塞造成影响其他服务**，后续对该服务接口的调用不再经过进行请求，直接执行本地的默认方法\n\n## 服务降级\n**为了保证核心业务在大量请求下能正常运行，根据实际业务情况及流量，对部分服务降低优先级**，有策略的不处理或用简单的方式处理\n\n## 为什么熔断降级\n系统承载的访问量是有限的，如果不做流量控制，会导致系统资源占满，服务超时，从而所有用户无法使用，通过服务限流控制请求的量，服务降级省掉非核心业务对系统资源的占用，最大化利用系统资源，尽可能服务更多用户\n\n## 和Hystrix对比\n![sentinel和hystrix-hTAUp9](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/sentinel和hystrix-hTAUp9.png)\n\n**值得补充的是**：相比 Hystrix 基于线程池隔离进行限流，这种方案**虽然隔离性比较好，但是代价就是线程数目太多，线程上下文切换的 overhead 比较大，特别是对低延时的调用有比较大的影响**。\n\nSentinel 并发线程数限流不负责创建和管理线程池，而是**简单统计当前请求上下文的线程数目，如果超出阈值，新的请求会被立即拒绝，效果类似于信号量隔离**。\n\n[官网补充](http://dubbo.apache.org/zh-cn/blog/sentinel-introduction-for-dubbo.html)",
        "publish_time": "2022-09-29 23:37",
        "view_count": 290,
        "like_count": 29
    },
    {
        "id": 151,
        "tag_id": 1,
        "tag_type": 1,
        "title": "39.进程和线程的区别",
        "content": "# 进程与线程\n\n> 面试官挺喜欢问这个问题的，他能引出来他想要问你的知识点。\n\n面试官：说一下线程与进程的区别\n\n我：好的，如下：\n\n- **进程是程序的一次执行过程，是系统运行程序的基本单位**\n\n- **线程是一个比进程更小的执行单位**\n\n- 一个进程在其执行的过程中可以产生**多个线程**\n\n- 与进程不同的是同类的多个线程共享进程的**堆**和**方法区**资源，但每个线程有自己的**程序计数器**、**虚拟机栈**和**本地方法栈**，所以系统在产生一个线程，或是在各个线程之间作切换工作时，负担要比进程小得多，也正因为如此，线程也被称为轻量级进程\n\n举例子：比如，main 函数启动了 JVM 进程，同时 main 就是其中的线程，并且启动了 JVM 进程，那么还有垃圾回收等线程。\n\n或者这样的例子：做个简单的比喻：进程=火车，线程=车厢\n\n- 线程在进程下行进（单纯的车厢无法运行）\n- 一个进程可以包含多个线程（一辆火车可以有多个车厢）\n- 不同进程间数据很难共享（一辆火车上的乘客很难换到另外一辆火车，比如站点换乘）\n- 同一进程下不同线程间数据很易共享（A 车厢换到 B 车厢很容易）\n- 进程要比线程消耗更多的计算机资源（采用多列火车相比多个车厢更耗资源）\n- 进程间不会相互影响，一个线程挂掉将导致整个进程挂掉（一列火车不会影响到另外一列火车，但是如果一列火车上中间的一节车厢着火了，将影响到所有车厢）\n- 进程可以拓展到多机，进程最多适合多核（不同火车可以开在多个轨道上，同一火车的车厢不能在行进的不同的轨道上）\n- 进程使用的内存地址可以上锁，即一个线程使用某些共享内存时，其他线程必须等它结束，才能使用这一块内存。（比如火车上的洗手间）－\\\"互斥锁\\\"\n- 进程使用的内存地址可以限定使用量（比如火车上的餐厅，最多只允许多少人进入，如果满了需要在门口等，等有人出来了才能进去）－“信号量”\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 351,
        "like_count": 2
    },
    {
        "id": 209,
        "tag_id": 6,
        "tag_type": 1,
        "title": "39.RocketMQ的架构初探",
        "content": "# RocketMQ 的架构初探\n\n> 多少次迎着冷眼与嘲笑\n> 从没有放弃过心中的理想\n> 一刹那恍惚若有所失的感觉\n\n## 背景\n\n> 在目前的互联网公司中，MQ 还是被广泛的投入与使用，但是，我们为什么要使用消息队列呢？虽然我上一篇文章已经讲过，但是，我们还是需要深入了解一下消息队列的架构，以及它的优缺点。\n\n再次提一下消息队列的特点和场景：\n\n> 消息队列主要解决了应用**耦合**、**异步处理**、**流量削锋**等问题。\n\n## 一个小故事\n\n我们知道，消息队列最简单的架构模型无非是**生产者-消费者模型**，那么我们请看一下此时的架构模型：\n\n![](https://imgs.heiye.site/byte/1644906067851.png)\n\n从图中可以看到几个角色：\n\n- producer：生产者，你可以理解为负责生产任务；\n- queue：队列，没有它，就失去了解耦的灵魂，消息队列就没有意义了；\n- consumer：既然队列有任务，那么很明显需要被消费，所以消费者的价值体现。\n\n## 分区队列\n\n在我们单体应用程序中，使用此模型，非常简单，且容易理解，但是，有一个问题，如果任务量越来越多，此时一个队列很可能达到上限，那么，我们该如何解决这个问题呢？\n\n很容易想到：**分区队列**，我们可以将任务分配到不同的队列中，每个队列可以设置不同的队列长度，这样，当队列满了，就会将任务放到下一个队列中，这样，就可以解决这个问题了。\n\n![](https://imgs.heiye.site/byte/1644907070350.png)\n\n## 顺序消息\n\n但此时，还会存在一个问题，producer 普通发送消息，暂时没有问题，无非是两种机制：**轮询机制**和**故障规避机制**，在 rocketmq 中默认使用轮询机制，轮询选择其中一个队列。\n\n> 轮询机制的原理是路由信息 TopicPublishInfo 中维护了一个计数器 sendWhichQueue，每发送一次消息需要查询一次路由，计算器就进行“+1”，通过计数器的值 index 与队列的数量取模计算来实现轮询算法。\n\n轮询算法简单好用，但是有个弊端，如果轮询选择的队列是在宕机的 Broker 上，会导致消息发送失败，即使消息发送重试的时候重新选择队列，也可能还是在宕机的 Broker 上，无法规避发送失败的情况，因此就有了故障规避机制。\n\n回到刚才的问题，如果此时有一个场景，保证顺序的应用场景非常多，比如交易场景中的订单创建、支付、退款等流程，先创建订单才能支付，支付完成的订单才能退款，这需要保证先进先出。又例如数据库的 BinLog 消息，数据库执行新增语句、修改语句，BinLog 消息得到顺序也必须保证是新增消息、修改消息。\n\n遇到这样的场景，有什么样的解决方案保证顺序消息呢？\n\n你可能会说：我们将同一个订单的处理流程放到一个队列中，那不就解决了吗？\n\n那怎么才能让同一个订单放到同一个队列中呢？\n\n> RocketMQ 的顺序消息分为 2 种情况：局部有序和全局有序。前面的例子是局部有序场景。\n>\n> - 局部有序：指发送同一个队列的消息有序，可以在发送消息时指定队列，在消费消息时也按顺序消费。例如同一个订单 ID 的消息要保证有序，不同订单的消息没有约束，相互不影响，不同订单 ID 之间的消息时并行的。\n> - 全局有序：设置 Topic 只有一个队列可以实现全局有序，创建 Topic 时手动设置。此类场景极少，性能差，通常不推荐使用。\n\n顺序消息发送的原理比较简单，同一类消息发送到相同的队列即可。为了保证先发送的消息先存储到消息队列，必须使用同步发送的方式，否则可能出现先发送的消息后到消息队列中，此时消息就乱序了。\n\n我们可以思考一下一个数据结构：哈希表，那么哈希表是如何定位对应的 index 呢？\n\n所以 RocketMQ 的也采用了这样的思想：选择队列的过程由 messageQueueSelector 和 hashKey 在实现类 SelectMessageQueueByHash 中完成\n\n```java\npublic class SelectMessageQueueByHash implements MessageQueueSelector {\n    public SelectMessageQueueByHash() {\n    }\n\n    public MessageQueue select(List<MessageQueue> mqs, Message msg, Object arg) {\n        int value = arg.hashCode();\n        if (value < 0) {\n            value = Math.abs(value);\n        }\n\n        value %= mqs.size();\n        return (MessageQueue)mqs.get(value);\n    }\n}\n```\n\n- 根据 hashKey 计算 hash 值，hashKey 是我们前面例子中订单 ID，因此相同订单 ID 的 hash 值相同。\n- 用 hash 值和队列数 mqs.size()取模，得到一个索引值，结果小于队列数。\n- 根据索引值从队列列表中取出一个队列 mqs.get(value)，hash 值相同则队列相同。\n\n注意：在队列列表的获取过程中，由 Producer 从 NameServer 根据 Topic 查询 Broker 列表，缓存在本地内存中，以便下次从缓存中读取。（**缓存的应用，不仅在 RocketMQ 中有体现，在众多的分布式中间件当中都会存在这样的使用。**）\n\n顺序发送原理已经初步了解，那么顺序消费呢？\n\n> RocketMQ 支持两种消费模式：集群消费（点对点）和广播消费。两者的区别是，在广播消费模式下每条消息会被 ConsumerGroup 的每个 Consumer 消费，在集群消费模式下每条消息只会被 ConsumerGroup 的一个 Consumer 消费。\n\n> 多数场景都使用集群消费，消息每次消费代表一次业务处理，集群消费表示每条消息由业务应用集群中任意一个服务实例来处理。少数场景使用广播消费，例如数据发生变化，更新业务应用集群中每个服务的本地缓存，这就需要一条消息被整个集群都消费一次，默认是集群消费。\n\n顺序消费也叫做有序消费，**原理是同一个消息队列只允许 Consumer 中的一个消费线程拉取消费，Consumer 中有个消费线程池，多个线程会同时消费消息**。在顺序消费的场景下消费线程请求到 Broker 时会先申请独占锁，获得锁的请求则允许消费。\n\n消息消费成功后，会向 Broker 提交消费进度，更新消费位点信息，避免下次拉取到已消费的消息，顺序消费中如果消费线程在监听器中进行业务处理时抛出异常，则不会提交消费进度，消费进度会阻塞在当前这条消息，并不会继续消费该队列中的后续消息，从而保证顺序消费。\n\n![](https://imgs.heiye.site/byte/1644908178305.png)\n\n## 消息幂等\n\n以上也有可能，存在某种情况同一个消费被重复消费，那么如何保证消息幂等呢？\n\n> 任意多次执行所产生的影响均与一次执行的影响相同就可以称为幂等\n\n> 当出现消费者对某条消息重复消费的情况时，重复消费的结果与消费一次的结果是相同的，并且多次消费并未对业务系统产生任何负面影响\n\n消息队列无法保证幂等，此情况得基于**业务场景**进行考量。\n\n此处简单提供一些幂等方案：\n\n1. 利用数据库的唯一约束实现幂等。\n\n> 比如将订单表中的订单编号设置为唯一索引，创建订单时，根据订单编号就可以博阿正幂等\n\n2. 去重表\n\n> 这个方案本质也是根据数据库的唯一性约束来实现。其实现大体思路是：首先在去重表上建唯一索引，其次操作时把业务表和去重表放在同个本地事务中，如果出现重现重复消费，数据库会抛唯一约束异常，操作就会回滚\n\n3. 利用 Redis 的原子性\n\n> 每次操作都直接 set 到 redis 里面，然后将 redis 数据定时同步到数据库中\n\n4. 多版本（乐观锁）控制\n\n> 此方案多用于更新的场景下。其实现的大体思路是：给业务数据增加一个版本号属性，每次更新数据前，比较当前数据的版本号是否和消息中的版本一致，如果不一致则拒绝更新数据，更新数据的同时将版本号+1\n\n5. 状态机机制\n\n> 此方案多用于更新且业务场景存在多种状态流转的场景\n\n6. token 机制\n\n> 生产者发送每条数据的时候，增加一个全局唯一的 id，这个 id 通常是业务的唯一标识，比如订单编号。在消费端消费时，则验证该 id 是否被消费过，如果还没消费过，则进行业务处理。处理结束后，在把该 id 存入 redis，同时设置状态为已消费。如果已经消费过了，则不进行处理。\n\n## RocketMQ 架构\n\n好了，如果此时体量越来越大，你需要存储到不同的机器上做分布式，那么想做成分布式，就需要考虑几个问题了。\n\n- producer 是否可集群可管理\n- consumer 是否可集群可管理\n- queue 是否可集群可管理\n\n此时，你可能想到需要一个分布式治理服务的中间件，类似于 zk 或者 etcd，这样就可以把消息队列和消费者管理分布式了。\n\n![](https://imgs.heiye.site/byte/1644909225111.png)\n\n### 角色介绍\n\n简单介绍一下角色：\n\n- Producer：消息发布的角色，支持分布式集群方式部署。Producer 通过 MQ 的负载均衡模块选择相应的 Broker 集群队列进行消息投递，投递的过程支持快速失败并且低延迟。\n- Consumer：消息消费的角色，支持分布式集群方式部署。支持以 push 推，pull 拉两种模式对消息进行消费。同时也支持集群方式和广播方式的消费，它提供实时消息订阅机制，可以满足大多数用户的需求。\n- NameServer：NameServer 是一个非常简单的 Topic 路由注册中心，其角色类似 Dubbo 中的 zookeeper，支持 Broker 的动态注册与发现。主要包括两个功能：Broker 管理，NameServer 接受 Broker 集群的注册信息并且保存下来作为路由信息的基本数据。然后提供**心跳检测机制**，检查 Broker 是否还存活;**路由信息管理**，每个 NameServer 将保存关于 Broker 集群的整个路由信息和用于客户端查询的队列信息。然后 Producer 和 Conumser 通过 NameServer 就可以知道整个 Broker 集群的路由信息，从而进行消息的投递和消费。**NameServer 通常也是集群的方式部署，各实例间相互不进行信息通讯**。Broker 是向每一台 NameServer 注册自己的路由信息，所以每一个 NameServer 实例上面都保存一份完整的路由信息。当某个 NameServer 因某种原因下线了，Broker 仍然可以向其它 NameServer 同步其路由信息，Producer,Consumer 仍然可以动态感知 Broker 的路由的信息。**但是 NameServer 并不会像 ZK 一样提供选举功能。**\n- BrokerServer：Broker 主要负责消息的存储、投递和查询以及服务高可用保证，为了实现这些功能，Broker 包含了以下几个重要子模块。\n  - Remoting Module：整个 Broker 的实体，负责处理来自 clients 端的请求。\n  - Client Manager：负责管理客户端(Producer/Consumer)和维护 Consumer 的 Topic 订阅信息\n  - Store Service：提供方便简单的 API 接口处理消息存储到物理硬盘和查询功能。\n  - HA Service：高可用服务，提供 Master Broker 和 Slave Broker 之间的数据同步功能。\n  - Index Service：根据特定的 Message key 对投递到 Broker 的消息进行索引服务，以提供消息的快速查询。\n\n> Producer 与 NameServer 集群中的其中一个节点(随机选择)建立长连接，定期从 NameServer 获取 Topic 路由信息，并向提供 Topic 服务的 Master 建立长连接，且定时向 Master 发送心跳。Producer 完全无状态，可集群部署。\n\n> Consumer 与 NameServer 集群中的其中一个节点(随机选择)建立长连接，定期从 NameServer 获取 Topic 路由信息，并向提供 Topic 服务的 Master、Slave 建立长连接，且定时向 Master、Slave 发送心跳。Consumer 既可以从 Master 订阅消息，也可以从 Slave 订阅消息，消费者在向 Master 拉取消息时，Master 服务器会根据拉取偏移量与最大偏移量的距离(判断是否读老消息，产生读 I/O)，以及从服务器是否可读等因素建议下一次是从 Master 还是 Slave 拉取。\n\n### 启动流程\n\nRocketMQ 架构启动流程：\n\n- 启动 NameServer，NameServer 起来后监听端口，等待 Broker、Producer、Consumer 连上来，相当于一个路由控制中心。\n- Broker 启动，跟所有的 NameServer 保持长连接，定时发送心跳包。心跳包中包含当前 Broker 信息(IP+端口等)以及存储所有 Topic 信息。注册成功后，NameServer 集群中就有 Topic 跟 Broker 的映射关系。\n- 收发消息前，先创建 Topic，创建 Topic 时需要指定该 Topic 要存储在哪些 Broker 上，也可以在发送消息时自动创建 Topic。\n- Producer 发送消息，启动时先跟 NameServer 集群中的其中一台建立长连接，并从 NameServer 中获取当前发送的 Topic 存在哪些 Broker 上，轮询从队列列表中选择一个队列，然后与队列所在的 Broker 建立长连接从而向 Broker 发消息。\n- Consumer 跟 Producer 类似，跟其中一台 NameServer 建立长连接，获取当前订阅 Topic 存在哪些 Broker 上，然后直接跟 Broker 建立连接通道，开始消费消息。\n\n### 完整的模型\n\n![](https://imgs.heiye.site/byte/1644913605554.png)\n\n我们在图中发现消费者获取消息有两种方式：推和拉\n\n### 推拉模式\n\n消费者客户端有两种方式从消息中间件获取消息并消费。严格意义上来讲，RocketMQ 并没有实现 Push 模式，而是对**拉模式进行一层包装**，名字虽然是 Push 开头，实际在实现时，使用 Pull 方式实现。**通过 Pull 不断轮询 Broker 获取消息**。当不存在新消息时，Broker 会挂起请求，直到有新消息产生，取消挂起，返回新消息。\n\nPush 模式可以说基于订阅与发布模式，而 Pull 模式可以说是基于消息队列模式。\n\nPull：\n\n- 消费者向 broker 拉取消息时，如果消息未到达消费队列，并且**未启用长轮询机制**，则会在服务端等待 shortPollingTimeMills(默认 1 秒) 时间后再去判断消息是否已经到达消息队列，如果消息未到达，则提示消息拉取客户端 PULL_NOT_FOUND。\n- 如果开启**长轮询模式**，rocketMQ 会每 5s 轮询检查一次消息是否可达，同时一有新消息到达后立马通知挂起线程再次验证新消息是否是自己感兴趣的消息，如果是则从 commitlog 文件提取消息返回给消息拉取客户端，否则直到挂起超时，超时时间由消息拉取方在消息拉取时封装在请求参数中，PUSH 模式默认 15s。\n\nPush：\n\n- 后台独立线程 RebalanceServic 根据 Topic 中消息队列个数和当前消费组内消费者个数进行负载均衡，给当前消费者分配对应的 MessageQueue，将其封装为 PullRequest 实例放入队列 pullRequestQueue 中。\n- Consumer 端开启后台独立的线程 PullMessageService 不断地从队列 pullRequestQueue 中获取 PullRequest 并通过网络通信模块异步发送 Pull 消息的 RPC 请求给 Broker 端。这里算是比较典型的生产者-消费者模型，实现了准实时的自动消息拉取。\n- PullMessageService 异步拉取到消息后，通过 PullCallback 进行回调处理，如果拉取成功，则更新消费进度，putPullRequest 到阻塞队列 pullRequestQueue 中，接着立即进行拉取。\n- 监听器 ConsumeMessageConcurrentlyService 会一直监听回调方法 PullCallback，把拉取到的消息交给 Consumerrequest 进行处理，Consumerrequest 会调用消费者业务方实现的 consumeMessage()接口处理具体业务，消费者业务方处理完成后返回 ACK 给 Consumerrequest，如果消费者 ACK 返回的失败，则在集群模式下把消息发回 Broker 进行重试(广播模型重试的成本太高)，最后更新消费进度 offsetTable。\n- 在 Broker 端，PullMessageProcessor 业务处理器收到 Pull 消息的 RPC 请求后，通过 MessageStore 实例从 commitLog 获取消息。如果第一次尝试 Pull 消息失败(比如 Broker 端没有可以消费的消息)，则通过长轮询机制先 hold 住并且挂起该请求，然后通过 Broker 端的后台线程 PullRequestHoldService 重新尝试和后台线程 ReputMessageService 进行二次处理。\n\n![](https://imgs.heiye.site/byte/1644915102148.png)\n\n简单介绍一下长轮询和短轮询：\n\n短轮询：定时发起请求，服务端收到请求后不论数据有没有更新都立即返回\n优点：实现简单，容易理解\n缺点：服务端是被动的，服务端要不断的处理客户端连接，并且服务端无法控制客户端 pull 的频率以及客户端数量。\n\n长轮询：对普通轮询的优化，依然由客户端发起请求，服务端收到后并不立即响应而是 hold 住客户端连接，等待数据产生变更后(或者超过指定时间还未产生变更)才回复客户端。\n\n关于 Broker 对消息的存储，RocketMQ 做了一定的优化。\n\n### 存储设计\n\n存储结构：\n\n![](https://imgs.heiye.site/byte/1644916024225.png)\n\n- Commitlog 文件\n\n当生产者将消息发送到 RocketMQ 的 Broker 之后，需要将消息进行持久化存储，防止消息数据丢失。RocketMQ 将消息数据写入存储文件 CommitLog 中，按照消息的发送顺序写入文件当中，每个文件的大小约为 1G，当达到文件大小限制后，就会创建新的 CommitLog 文件。（物理地址）\n\n- ConsumerQueue 文件\n\nCommitLog 文件中的消息数据是一条一条顺序写的，最笨的方法就是遍历文件，作为一款高性能的消息中间件，显然这不是一个好的解决方案。\n\n那么我们可不可以借助数据库提升数据查询的方式，使用索引来加快消息数据的查询呢？答案是肯定的。就像 Mysql 中的索引本身需要文件保存一样，在 RocketMQ 中页有单独保存索引的文件，就是 ConsumerQueue 文件。（逻辑队列）\n\n- Index 文件\n\nRocketMQ 的特性功能就是可以实现按照消息的属性进行消息搜索，即建立了索引 Key 的 hashcode 与物理偏移量的映射关系，根据 key 先快速定义到 commitlog 文件。\n\n存储运作流程：\n\n![](https://imgs.heiye.site/byte/1644915899303.png)\n\n1. 生产者生产消息，写入 CommitLog 文件，异步将消息写入到 ConsumerQueue 文件中；\n2. 消费者首先通过 ConsumerQueue 文件获取消息的物理地址，最后通过 ComitLog 文件获取消息的数据。\n\n关于其他存储结构的一些优化，后期另出文章讲解。\n\n## 小结\n\n重要的是 RocketMQ 怎么围绕这三点来设计的：\n\n1. 高并发\n2. 高可用\n3. 高性能\n\n## 参考\n\n- [https://developer.51cto.com/article/671208.html](https://developer.51cto.com/article/671208.html)\n- [https://xie.infoq.cn/article/9aade37d8e85207a9ec8083d8](https://xie.infoq.cn/article/9aade37d8e85207a9ec8083d8)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 381,
        "like_count": 17
    },
    {
        "id": 150,
        "tag_id": 1,
        "tag_type": 1,
        "title": "40.直接调用Thread的run方法不行吗",
        "content": "面试官：直接调用 Thread 的 run 方法不行吗？\n\n我：肯定不行的，通过 run 方法启动线程其实就是调用一个类中的方法，**当作普通的方法的方式调用**。并没有创建一个线程，**程序中依旧只有一个主线程**，必须等到 run()方法里面的代码执行完毕，才会继续执行下面的代码，这样就没有达到写线程的目的。如果是 start 方法，效果就不一样了。\n\n## start 源码\n\n首先看一下 start 源码：\n\n```java\npublic synchronized void start() {\n    // 等于0意味着可以是线程的新建状态\n    if (threadStatus != 0)\n        throw new IllegalThreadStateException();\n\t// 将该线程加入线程组\n    group.add(this);\n    boolean started = false;\n    try {\n        start0(); // 核心， 本地方法，新建线程被。\n        started = true;\n    } finally {\n        try {\n            if (!started) {\n                group.threadStartFailed(this);\n            }\n        } catch (Throwable ignore) {\n        }\n    }\n}\n```\n\n当得到 CPU 的时间片后就会执行其中的**run()方法**。这个 run()方法包含了要执行的这个线程的内容，run()方法运行结束，此线程也就终止了。\n\n```java\n@Override\npublic void run() {\n    if (target != null) {\n        target.run(); // target是：private Runnable target; Runnable接口\n    }\n}\n// Runnable:\npublic abstract void run();//抽象方法\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 14,
        "like_count": 21
    },
    {
        "id": 230,
        "tag_id": 6,
        "tag_type": 1,
        "title": "40.为什么用负载均衡呢",
        "content": "# 总是要了解负载均衡\n\n> 生命中真正重要的不是你遭遇了什么，而是你记住了哪些事，又是如何铭记的。\n\n> 有没有想过，分布式三高其中一个：高可用，是如何保证高可用的？\n\n## 背景\n\n在众多优秀的中间件中，比如 Dubbo、RocketMQ、Nginx 等，基本上都包含有负载均衡的功能，为了保证中间件的高可用的稳定性能。\n\n不妨，我们先思考一个演变过程，比如，现在有一个单机版的服务：提供下订单服务。\n\n![](https://imgs.heiye.site/byte/1645511535097.png)\n\n随着用户增多，如下图：\n\n![](https://imgs.heiye.site/byte/1645511684832.png)\n\n订单服务迟早有一天扛不住众多用户的下单，因此，你可能会想着，多来几个订单服务，如下图：\n\n![](https://imgs.heiye.site/byte/1645511883211.png)\n\n这时候你可能就要思考了，众多的订单服务，如何管理，如何分配呢？你可能需要加一个中间 proxy，当然你可以设计一个类似于路由表的实现，比如：\n\n![](https://imgs.heiye.site/byte/1645512005188.png)\n\n好的，你已经想到了 proxy 了，那么其实这个中间者可以理解为本文的负载均衡组件了。\n\n## 解释性定义\n\n> 负载均衡（Load Balance，简称 LB）是高并发、高可用系统必不可少的关键组件，目标是 尽力将网络流量平均分发到多个服务器上，以提高系统整体的响应速度和可用性。\n\n## 作用\n\n在这里先解释一下其作用：\n\n1. 高并发：负载均衡通过算法调整负载，尽力均匀的分配应用集群中各节点的工作量，以此提高应用集群的并发处理能力（吞吐量）。\n2. 伸缩性：添加或减少服务器数量，然后由负载均衡进行分发控制。这使得应用集群具备伸缩性。\n3. 高可用：负载均衡器可以监控候选服务器，当服务器不可用时，自动跳过，将请求分发给可用的服务器。这使得应用集群具备高可用的特性。\n4. 安全防护：有些负载均衡软件或硬件提供了安全性功能，如：黑白名单处理、防火墙，防 DDos 攻击等。\n\n## 算法\n\n一般负载均衡的实现分为两个部分：\n\n1. 根据负载均衡算法在候选服务器列表选出一个服务器；\n2. 将请求数据发送到该服务器上。\n\n负载均衡算法有很多种，分别适用于不同的应用场景，本文仅介绍最为常见的负载均衡算法的特性及原理：**轮询、随机、最小活跃数、源地址哈希、一致性哈希。**\n\n### 随机算法\n\n> 随机（Random） 算法将请求随机分发到候选服务器。\n\n随机算法 适合服务器硬件相同的场景。学习过概率论的都知道，调用量较小的时候，可能负载并不均匀，调用量越大，负载越均衡。如图所示：\n\n![](https://imgs.heiye.site/byte/1645512460197.png)\n\n实现随机算法的代码如下：\n\n```java\n// 由于简单，这里不做实现\n\n// 思路：从列表中随机选出一个节点即可\n```\n\n### 加权随机算法\n\n> 无非是在随机算法基础上加了一些权重从而影响随机算法的结果。\n\n假设我们有一组服务器 servers = [A, B, C]，他们对应的权重为 weights = [5, 3, 2]，权重总和为 10。\n\n现在把这些权重值平铺在一维坐标值上，[0, 5) 区间属于服务器 A，[5, 8) 区间属于服务器 B，[8, 10) 区间属于服务器 C。\n\n接下来通过随机数生成器生成一个范围在 [0, 10) 之间的随机数，然后计算这个随机数会落到哪个区间上。\n\n比如数字 3 会落到服务器 A 对应的区间上，此时返回服务器 A 即可。权重越大的机器，在坐标轴上对应的区间范围就越大，因此随机数生成器生成的数字就会有更大的概率落到此区间内。\n\n只要随机数生成器产生的随机数分布性很好，在经过多次选择后，每个服务器被选中的次数比例接近其权重比例。比如，经过一万次选择后，服务器 A 被选中的次数大约为 5000 次，服务器 B 被选中的次数约为 3000 次，服务器 C 被选中的次数约为 2000 次。\n\n看一个简单示例：\n\n```java\npublic class WeightRandomLoadBalance<N extends Node> extends BaseLoadBalance<N> implements LoadBalance<N> {\n​\n    private final Random random = ThreadLocalRandom.current();\n​\n    @Override\n    protected N doSelect(List<N> nodes, String ip) {\n​\n        // 获取节点的数量\n        int length = nodes.size();\n        AtomicInteger totalWeight = new AtomicInteger(0);\n        for (N node : nodes) {\n            Integer weight = node.getWeight();\n            // 将所有节点的权重相加\n            totalWeight.getAndAdd(weight);\n        }\n​        // 如果有权重，干扰概率\n        if (totalWeight.get() > 0) {\n            // 按照权重的比例随机选取一个offset\n            int offset = random.nextInt(totalWeight.get());\n            for (N node : nodes) {\n                // 让随机值 offset 减去权重值\n                offset -= node.getWeight();\n                if (offset < 0) {\n                    // 返回相应的 Node\n                    return node;\n                }\n            }\n        }\n​\n        // 如果无，直接随机返回一个\n        return nodes.get(random.nextInt(length));\n    }\n​\n}\n```\n\n### 轮询算法\n\n> 轮询（Round Robin）算法的策略是：将请求依次分发到候选服务器。\n\n![](https://imgs.heiye.site/byte/1645513246352.png)\n\n如上图，负载均衡器收到来自己客户端的 4 个请求，（1、3）的请求呗发送到服务器 A，（2、4）的请求会被发送到服务器 B。\n\n该算法适合场景：**各服务器处理能力相近，且每个事务工作量差异不大。如果存在较大差异，那么处理较慢的服务器就可能会积压请求，最终无法承担过大的负载。**\n\n轮询算法实现示例：\n\n```java\n    @Override\n    protected N doSelect(List<N> nodes, String ip) {\n        int length = nodes.size();\n        // 如果位置值已经等于节点数，重置为 0\n        position.compareAndSet(length, 0);\n        N node = nodes.get(position.get());\n        position.getAndIncrement(); // + 1\n        return node;\n    }\n```\n\n### 加权轮询算法\n\n> 加权轮询（Weighted Round Robbin）算法在轮询算法的基础上，增加了权重属性来调节转发服务器的请求数目。性能高、处理速度快的节点应该设置更高的权重，使得分发时优先将请求分发到权重较高的节点上。\n\n![](https://imgs.heiye.site/byte/1645513511741.png)\n\n如上图所示，订单 A 的权重为 3，订单 B 的权重为 1，负载均衡求收到来自客户端的 4 请求，那么（1、2、3）请求会被发送到订单 A，（4）请求会被发送到订单 B。\n\n加权轮询算法实现，基于 Dubbo 的实现：\n\n```java\npublic class WeightRoundRobinLoadBalance<N extends Node> extends BaseLoadBalance<N> implements LoadBalance<N> {\n​\n    /**\n     * 60秒\n     */\n    private static final int RECYCLE_PERIOD = 60000;\n​\n    /**\n     * Node hashcode 到 WeightedRoundRobin 的映射关系\n     */\n    private ConcurrentMap<Integer, WeightedRoundRobin> weightMap = new ConcurrentHashMap<>();\n​\n    /**\n     * 原子更新锁\n     */\n    private AtomicBoolean updateLock = new AtomicBoolean();\n​\n    @Override\n    protected N doSelect(List<N> nodes, String ip) {\n​\n        int totalWeight = 0;\n        long maxCurrent = Long.MIN_VALUE;\n​\n        // 获取当前时间\n        long now = System.currentTimeMillis();\n        N selectedNode = null;\n        WeightedRoundRobin selectedWRR = null;\n​\n        // 下面这个循环主要做了这样几件事情：\n        //   1. 遍历 Node 列表，检测当前 Node 是否有相应的 WeightedRoundRobin，没有则创建\n        //   2. 检测 Node 权重是否发生了变化，若变化了，则更新 WeightedRoundRobin 的 weight 字段\n        //   3. 让 current 字段加上自身权重，等价于 current += weight\n        //   4. 设置 lastUpdate 字段，即 lastUpdate = now\n        //   5. 寻找具有最大 current 的 Node，以及 Node 对应的 WeightedRoundRobin，\n        //      暂存起来，留作后用\n        //   6. 计算权重总和\n        for (N node : nodes) {\n            int hashCode = node.hashCode();\n            WeightedRoundRobin weightedRoundRobin = weightMap.get(hashCode);\n            int weight = node.getWeight();\n            if (weight < 0) {\n                weight = 0;\n            }\n​\n            // 检测当前 Node 是否有对应的 WeightedRoundRobin，没有则创建\n            if (weightedRoundRobin == null) {\n                weightedRoundRobin = new WeightedRoundRobin();\n                // 设置 Node 权重\n                weightedRoundRobin.setWeight(weight);\n                // 存储 url 唯一标识 identifyString 到 weightedRoundRobin 的映射关系\n                weightMap.putIfAbsent(hashCode, weightedRoundRobin);\n                weightedRoundRobin = weightMap.get(hashCode);\n            }\n            // Node 权重不等于 WeightedRoundRobin 中保存的权重，说明权重变化了，此时进行更新\n            if (weight != weightedRoundRobin.getWeight()) {\n                weightedRoundRobin.setWeight(weight);\n            }\n​\n            // 让 current 加上自身权重，等价于 current += weight\n            long current = weightedRoundRobin.increaseCurrent();\n            // 设置 lastUpdate，表示近期更新过\n            weightedRoundRobin.setLastUpdate(now);\n            // 找出最大的 current\n            if (current > maxCurrent) {\n                maxCurrent = current;\n                // 将具有最大 current 权重的 Node 赋值给 selectedNode\n                selectedNode = node;\n                // 将 Node 对应的 weightedRoundRobin 赋值给 selectedWRR，留作后用\n                selectedWRR = weightedRoundRobin;\n            }\n​\n            // 计算权重总和\n            totalWeight += weight;\n        }\n​\n        // 对 weightMap 进行检查，过滤掉长时间未被更新的节点。\n        // 该节点可能挂了，nodes 中不包含该节点，所以该节点的 lastUpdate 长时间无法被更新。\n        // 若未更新时长超过阈值后，就会被移除掉，默认阈值为60秒。\n        if (!updateLock.get() && nodes.size() != weightMap.size()) {\n            if (updateLock.compareAndSet(false, true)) {\n                try {\n                    // 遍历修改，即移除过期记录\n                    weightMap.entrySet().removeIf(item -> now - item.getValue().getLastUpdate() > RECYCLE_PERIOD);\n                } finally {\n                    updateLock.set(false);\n                }\n            }\n        }\n​\n        if (selectedNode != null) {\n            // 让 current 减去权重总和，等价于 current -= totalWeight\n            selectedWRR.decreaseCurrent(totalWeight);\n            // 返回具有最大 current 的 Node\n            return selectedNode;\n        }\n​\n        // should not happen here\n        return nodes.get(0);\n    }\n​\n    protected static class WeightedRoundRobin {\n​\n        // 服务提供者权重\n        private int weight;\n        // 当前权重\n        private AtomicLong current = new AtomicLong(0);\n        // 最后一次更新时间\n        private long lastUpdate;\n​\n        public long increaseCurrent() {\n            // current = current + weight；\n            return current.addAndGet(weight);\n        }\n​\n        public long decreaseCurrent(int total) {\n            // current = current - total;\n            return current.addAndGet(-1 * total);\n        }\n​\n        public int getWeight() {\n            return weight;\n        }\n​\n        public void setWeight(int weight) {\n            this.weight = weight;\n            // 初始情况下，current = 0\n            current.set(0);\n        }\n​\n        public AtomicLong getCurrent() {\n            return current;\n        }\n​\n        public void setCurrent(AtomicLong current) {\n            this.current = current;\n        }\n​\n        public long getLastUpdate() {\n            return lastUpdate;\n        }\n​\n        public void setLastUpdate(long lastUpdate) {\n            this.lastUpdate = lastUpdate;\n        }\n​\n    }\n​\n}\n```\n\n### 最小活跃数\n\n> 最小活跃数（Least Active）算法 将请求分发到连接数/请求数最少的候选服务器（目前处理请求最少的服务器）。\n\n- 特点：根据候选服务器当前的请求连接数，动态分配。\n- 场景：适用于对系统负载较为敏感或请求连接时长相差较大的场景。\n\n由于每个请求的**连接时长不一样**，如果采用简单的轮循或随机算法，都可能出现某些服务器当前连接数过大，而另一些服务器的连接过小的情况，这就造成了负载并非真正均衡。虽然，轮询或算法都可以通过加权重属性的方式进行负载调整，但加权方式难以应对动态变化。\n\n最小活跃数算法会记录**当前时刻，每个候选节点正在处理的连接数，然后选择连接数最小的节点**。该策略能够动态、实时地反应服务器的当前状况，较为合理地将负责分配均匀，适用于对当前系统负载较为敏感的场景。\n\n### 加权最小活跃数\n\n> 加权最小活跃数（Weighted Least Connection）在最小活跃数的基础上，根据服务器的性能为每台服务器分配权重，再根据权重计算出每台服务器能处理的连接数。\n\n最小活跃数算法实现要点：活**跃调用数越小，表明该服务节点处理能力越高，单位时间内可处理更多的请求，应优先将请求分发给该服务**。\n\n在具体实现中，每个服务节点对应一个活跃数 active。初始情况下，所有服务提供者活跃数均为 0。每收到一个请求，活跃数加 1，完成请求后则将活跃数减 1。在服务运行一段时间后，性能好的服务提供者处理请求的速度更快，因此活跃数下降的也越快，此时这样的服务提供者能够优先获取到新的服务请求、这就是最小活跃数负载均衡算法的基本思想。\n\n基于 Dubbo 最小活跃数负载均衡算法的实现：\n\n```java\npublic class LeastActiveLoadBalance<N extends Node> extends BaseLoadBalance<N> implements LoadBalance<N> {\n​\n    private final Random random = new Random();\n​\n    @Override\n    protected N doSelect(List<N> nodes, String ip) {\n        int length = nodes.size();\n        // 最小的活跃数\n        int leastActive = -1;\n        // 具有相同“最小活跃数”的服务者提供者（以下用 Node 代称）数量\n        int leastCount = 0;\n        // leastIndexs 用于记录具有相同“最小活跃数”的 Node 在 nodes 列表中的下标信息\n        int[] leastIndexs = new int[length];\n        int totalWeight = 0;\n        // 第一个最小活跃数的 Node 权重值，用于与其他具有相同最小活跃数的 Node 的权重进行对比，\n        // 以检测是否“所有具有相同最小活跃数的 Node 的权重”均相等\n        int firstWeight = 0;\n        boolean sameWeight = true;\n​\n        // 遍历 nodes 列表\n        for (int i = 0; i < length; i++) {\n            N node = nodes.get(i);\n            // 发现更小的活跃数，重新开始\n            if (leastActive == -1 || node.getActive() < leastActive) {\n                // 使用当前活跃数更新最小活跃数 leastActive\n                leastActive = node.getActive();\n                // 更新 leastCount 为 1\n                leastCount = 1;\n                // 记录当前下标值到 leastIndexs 中\n                leastIndexs[0] = i;\n                totalWeight = node.getWeight();\n                firstWeight = node.getWeight();\n                sameWeight = true;\n​\n                // 当前 Node 的活跃数 node.getActive() 与最小活跃数 leastActive 相同\n            } else if (node.getActive() == leastActive) {\n                // 在 leastIndexs 中记录下当前 Node 在 nodes 集合中的下标\n                leastIndexs[leastCount++] = i;\n                // 累加权重\n                totalWeight += node.getWeight();\n                // 检测当前 Node 的权重与 firstWeight 是否相等，\n                // 不相等则将 sameWeight 置为 false\n                if (sameWeight && i > 0\n                    && node.getWeight() != firstWeight) {\n                    sameWeight = false;\n                }\n            }\n        }\n​\n        // 当只有一个 Node 具有最小活跃数，此时直接返回该 Node 即可\n        if (leastCount == 1) {\n            return nodes.get(leastIndexs[0]);\n        }\n​\n        // 有多个 Node 具有相同的最小活跃数，但它们之间的权重不同\n        if (!sameWeight && totalWeight > 0) {\n            // 随机生成一个 [0, totalWeight) 之间的数字\n            int offsetWeight = random.nextInt(totalWeight);\n            // 循环让随机数减去具有最小活跃数的 Node 的权重值，\n            // 当 offset 小于等于0时，返回相应的 Node\n            for (int i = 0; i < leastCount; i++) {\n                int leastIndex = leastIndexs[i];\n                // 获取权重值，并让随机数减去权重值\n                offsetWeight -= nodes.get(leastIndex).getWeight();\n                if (offsetWeight <= 0) {\n                    return nodes.get(leastIndex);\n                }\n            }\n        }\n        // 如果权重相同或权重为0时，随机返回一个 Node\n        return nodes.get(leastIndexs[random.nextInt(leastCount)]);\n    }\n​\n}\n```\n\n### 源地址哈希\n\n> 源地址哈希（IP Hash）算法根据请求源 IP，通过哈希计算得到一个数值，用该数值在候选服务器列表的进行取模运算，得到的结果便是选中的服务器。\n\n可以保证同一 IP 的客户端的请求会转发到**同一台服务器上**，用来实现**会话粘滞**（Sticky Session）。\n\n但注意：保证特定用户总是请求到相同的服务器，若服务器宕机，会话会丢失。\n\n实现示例：\n\n```java\npublic class IpHashLoadBalance<N extends Node> extends BaseLoadBalance<N> implements LoadBalance<N> {\n​\n    @Override\n    protected N doSelect(List<N> nodes, String ip) {\n        if (StrUtil.isBlank(ip)) {\n            ip = \\\"127.0.0.1\\\";\n        }\n​\n        int length = nodes.size();\n        // 哈希ip取模\n        int index = hash(ip) % length;\n        return nodes.get(index);\n    }\n​\n    public int hash(String text) {\n        return HashUtil.fnvHash(text);\n    }\n​\n}\n```\n\n### 一致性哈希\n\n> 一致性哈希（Consistent Hash）算法的目标是：相同的请求尽可能落到同一个服务器上。\n\n尽可能：服务器可能发生上下线，少数服务器的变化不应该影响大多数的请求，当某台候选服务器宕机时，原本发往该服务器的请求，会基于虚拟节点，平摊到其它候选服务器，不会引起剧烈变动。\n\n一致性哈希可以很好的解决**稳定性问题**，可以将所有的**存储节点**排列在**首尾相接**的 Hash 环上，每个 key 在计算 Hash 后会**顺时针**找到**临接**的**存储节点**存放。而当有节点**加入**或**退出**时，仅影响该节点在 Hash 环上顺时针相邻的后续节点。\n\n一致性哈希算法是在哈希算法基础上提出的，在动态变化的分布式环境中，哈希算法应该满足的几个条件：平衡性、单调性和分散性。\n\n- 平衡性：是指 hash 的结果应该平均分配到各个节点，这样从算法上解决了负载均衡问题。\n- 单调性：是指在新增或者删减节点时，不影响系统正常运行。\n- 分散性：是指数据应该分散地存放在分布式集群中的各个节点（节点自己可以有备份），不必每个节点都存储所有的数据。\n\n代码示例：\n\n- hash 选择器的初始化\n- 从 hash 选择器中根据参数查找节点\n\n在分析 select 方法之前，我们先来看一下一致性 hash 选择器 ConsistentHashSelector 的初始化过程，如下：\n\n```java\nprivate static final class ConsistentHashSelector<T> {\n\n    // 使用 TreeMap 存储 Invoker 虚拟节点\n    private final TreeMap<Long, Invoker<T>> virtualInvokers;\n\n    private final int replicaNumber;\n\n    private final int identityHashCode;\n\n    private final int[] argumentIndex;\n\n    ConsistentHashSelector(List<Invoker<T>> invokers, String methodName, int identityHashCode) {\n        this.virtualInvokers = new TreeMap<Long, Invoker<T>>();\n        this.identityHashCode = identityHashCode;\n        URL url = invokers.get(0).getUrl();\n        // 获取虚拟节点数，默认为160\n        this.replicaNumber = url.getMethodParameter(methodName, \\\"hash.nodes\\\", 160);\n        // 获取参与 hash 计算的参数下标值，默认对第一个参数进行 hash 运算\n        String[] index = Constants.COMMA_SPLIT_PATTERN.split(url.getMethodParameter(methodName, \\\"hash.arguments\\\", \\\"0\\\"));\n        argumentIndex = new int[index.length];\n        for (int i = 0; i < index.length; i++) {\n            argumentIndex[i] = Integer.parseInt(index[i]);\n        }\n        for (Invoker<T> invoker : invokers) {\n            String address = invoker.getUrl().getAddress();\n            for (int i = 0; i < replicaNumber / 4; i++) {\n                // 对 address + i 进行 md5 运算，得到一个长度为16的字节数组\n                byte[] digest = md5(address + i);\n                // 对 digest 部分字节进行4次 hash 运算，得到四个不同的 long 型正整数\n                for (int h = 0; h < 4; h++) {\n                    // h = 0 时，取 digest 中下标为 0 ~ 3 的4个字节进行位运算\n                    // h = 1 时，取 digest 中下标为 4 ~ 7 的4个字节进行位运算\n                    // h = 2, h = 3 时过程同上\n                    long m = hash(digest, h);\n                    // 将 hash 到 invoker 的映射关系存储到 virtualInvokers 中，\n                    // virtualInvokers 需要提供高效的查询操作，因此选用 TreeMap 作为存储结构\n                    virtualInvokers.put(m, invoker);\n                }\n            }\n        }\n    }\n}\n```\n\nConsistentHashSelector 的构造方法执行了一系列的初始化逻辑，比如从配置中获取虚拟节点数以及参与 hash 计算的参数下标，默认情况下只使用第一个参数进行 hash。\n\n在获取虚拟节点数和参数下标配置后，接下来要做的事情是计算虚拟节点 hash 值，并将虚拟节点存储到 TreeMap 中。\n\n到此，ConsistentHashSelector 初始化工作就完成了。接下来，我们来看看 select 方法的逻辑。\n\n```java\npublic Invoker<T> select(Invocation invocation) {\n    // 将参数转为 key\n    String key = toKey(invocation.getArguments());\n    // 对参数 key 进行 md5 运算\n    byte[] digest = md5(key);\n    // 取 digest 数组的前四个字节进行 hash 运算，再将 hash 值传给 selectForKey 方法，\n    // 寻找合适的 Invoker\n    return selectForKey(hash(digest, 0));\n}\n\nprivate Invoker<T> selectForKey(long hash) {\n    // 到 TreeMap 中查找第一个节点值大于或等于当前 hash 的 Invoker\n    Map.Entry<Long, Invoker<T>> entry = virtualInvokers.tailMap(hash, true).firstEntry();\n    // 如果 hash 大于 Invoker 在圆环上最大的位置，此时 entry = null，\n    // 需要将 TreeMap 的头节点赋值给 entry\n    if (entry == null) {\n        entry = virtualInvokers.firstEntry();\n    }\n\n    // 返回 Invoker\n    return entry.getValue();\n}\n```\n\n首先是对参数进行 md5 以及 hash 运算，得到一个 hash 值。然后再拿这个值到 TreeMap 中查找目标 Invoker 即可。\n\n## 参考\n\n- [https://segmentfault.com/a/1190000021199728](https://segmentfault.com/a/1190000021199728)\n- [https://dubbo.apache.org/zh/docs/v2.7/dev/source/loadbalance/](https://dubbo.apache.org/zh/docs/v2.7/dev/source/loadbalance/)\n- [http://blog.itpub.net/69912579/viewspace-2775774/](http://blog.itpub.net/69912579/viewspace-2775774/)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 369,
        "like_count": 13
    },
    {
        "id": 138,
        "tag_id": 1,
        "tag_type": 1,
        "title": "41.线程的生命周期",
        "content": "面试官：线程的生命周期，讲一下。\n\n我：ok，看图说话\n\n![线程的生命周期-KbDQiX](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/线程的生命周期-KbDQiX.png)\n\n- 线程创建之后它将处于 `New`（新建）状态，调用 `start()` 方法后开始运行，线程这时候处于 `READY`（可运行，也叫做就绪） 状态。可运行状态的线程获得了 CPU 时间片（timeslice）后就处于 `RUNNING`（运行） 状态。\n- 当线程执行 `wait()`方法之后，线程进入 `WAITING`（等待）状态。进入等待状态的线程需要依靠其他线程的通知才能够返回到运行状态，而 `TIME_WAITING`(超时等待) 状态相当于在等待状态的基础上增加了超时限制，比如通过 `sleep（long millis）`方法或 `wait（long millis）`方法可以将 Java 线程置于 `TIMED WAITING` 状态。当超时时间到达后 Java 线程将会返回到 `RUNNABLE` 状态。\n- 当线程调用同步方法时，在没有获取到锁的情况下，线程将会进入到 `BLOCKED`（阻塞）状态。\n- 线程在执行 Runnable 的`run()`方法结束之后将会进入到 `TERMINATED`（终止） 状态。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 220,
        "like_count": 52
    },
    {
        "id": 82,
        "tag_id": 1,
        "tag_type": 1,
        "title": "42.wait、notify和sleep的区别",
        "content": "# wait/notify 和 sleep\n\n面试官：wait/notify 和 sleep 方法的异同？\n\n我：ok\n\n相同点：\n\n1. 它们都可以让**线程阻塞**。\n2. 它们都可以响应  **interrupt**  中断：在等待的过程中如果收到中断信号，都可以进行响应，并抛出 InterruptedException 异常。\n\n不同点：\n\n1. wait 方法必须在 **synchronized**  保护的代码中使用，而 sleep  方法并没有这个要求。\n2. 在同步代码中**执行 sleep 方法时，并不会释放 monitor 锁，但执行 wait 方法时会主动释放 monitor 锁**。\n3. sleep 方法中会要求必须定义一个时间，时间到期后会主动恢复，而对于没有参数的  wait 方法而言，意味着永久等待，直到被中断或被唤醒才能恢复，它并不会主动恢复。\n4. **wait/notify 是 Object 类的方法，而 sleep 是 Thread 类的方法**。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 409,
        "like_count": 58
    },
    {
        "id": 77,
        "tag_id": 1,
        "tag_type": 1,
        "title": "43.死锁",
        "content": "# 死锁\n\n面试官：知道死锁嘛？\n\n我：知道，那我就谈一下 Java 的死锁吧，其实原理都一样。\n\n先看个例子：\n\n```java\npublic class Test {\n    private static Object res1 = new Object();\n    private static Object res2 = new Object();\n    public static void main(String[] args) {\n        new Thread(() -> {\n            synchronized (res1) {\n                System.out.println(Thread.currentThread().getName() + \\\" res1\\\");\n                // 延迟一下, 确保B拿到了res2\n                try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }\n                synchronized (res2) {\n                    System.out.println(Thread.currentThread().getName() + \\\" res2\\\");\n                }\n            }\n        }, \\\"ThreadA\\\").start();\n        new Thread(() -> {\n            synchronized (res2) {\n                System.out.println(Thread.currentThread().getName() + \\\" res2\\\");\n                // 延迟一下，确保A拿到了res1\n                synchronized (res1) {\n                    System.out.println(Thread.currentThread().getName() + \\\" res1\\\");\n                }\n            }\n        }, \\\"ThreadB\\\").start();\n    }\n}\n```\n\n## 死锁的条件\n\n所以：死锁的条件？\n\n- **互斥条件**：该资源任意一个时刻只由一个线程占用。(同一时刻，这个碗是我的，你不能碰)\n- **请求与保持条件**：一个进程因请求资源而阻塞时，对已获得的资源保持不放。（我拿着这个碗一直不放）\n- **不剥夺条件**:线程已获得的资源在末使用完之前不能被其他线程强行剥夺，只有自己使用完毕后才释放资源。（我碗中的饭没吃完，你不能抢，释放权是我自己的，我想什么时候放就什么时候放）\n- **循环等待条件**:若干进程之间形成一种头尾相接的循环等待资源关系。（我拿了 A 碗，你拿了 B 碗，但是我还想要你的 B 碗，你还想我的 A 碗）比喻成棒棒糖也阔以。\n\n面试官：所以解决死锁的办法是？\n\n我：好的，没毛病\n\n- 预防死锁：\n  - **资源一次性分配**：破坏请求和保持条件。\n  - **可剥夺资源**：当进程新申请的资源不满足时，释放已经分配的资源。破坏不可剥夺条件\n  - **资源有序分配**：系统给进程编号，按某一顺序申请资源，释放资源则反序释放。破坏循环等待条件。\n- 避免死锁：银行家算法：分配资源前先评估风险，会不会在分配后导致死锁。　即分配给一个进程资源的时候，该进程能否全部返还占用的资源。\n- 检测死锁：建立资源分配表和进程等待表。\n- 解除死锁：可以直接撤销死锁进程，或撤销代价最小的进程。\n\n## 找死锁的步骤\n\n所以：找死锁的步骤：\n\n1. 我们通过 `jps` 确定当前执行任务的进程号\n\n2. 然后执行 `jstack` 命令查看当前进程堆栈信息\n\n3. 然后将会看到`Found a total of 1 deadlock`\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 435,
        "like_count": 86
    },
    {
        "id": 168,
        "tag_id": 1,
        "tag_type": 1,
        "title": "44.线程的创建方式",
        "content": "# 线程的创建方式\n\n面试官：线程的创建方式有哪些？\n\n我：我目前知道 4 种：分别如下：\n\n- `Thread`\n\n```java\npublic class Test extents Thread {\n    public void run() {\n      // 重写Thread的run方法\n      System.out.println(\\\"dream\\\");\n    }\n\n    public static void main(String[] args) {\n        new Test().start();\n    }\n}\n```\n\n- `Runnable`\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        new Thread(() -> {\n            System.out.println(\\\"dream\\\");\n        }).start();\n    }\n}\n```\n\n- `Callable`\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        // FutureTask 构造方法包装了Callable和Runnable。\n        FutureTask<Integer> task = new FutureTask<>(() -> {\n            System.out.println(\\\"dream\\\");\n            return 0;\n        });\n        new Thread(task).start();\n    }\n}\n\n```\n\n- 线程池\n\n```java\n\npublic class Test {\n    public static void main(String[] args) {\n        ExecutorService threadPool = Executors.newFixedThreadPool(1);\n        threadPool.submit(() -> {\n            System.out.println(\\\"dream\\\");\n        });\n        threadPool.shutdown();\n    }\n}\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 223,
        "like_count": 71
    },
    {
        "id": 97,
        "tag_id": 1,
        "tag_type": 1,
        "title": "45.Runnable和Callable的区别",
        "content": "面试官：Runnable 和 Callable 有啥区别？\n\n我：那得先看源码咯\n\n```java\n@FunctionalInterface\npublic interface Runnable {\n   /**\n    * 被线程执行，没有返回值也无法抛出异常\n    */\n    public abstract void run();\n}\n\n@FunctionalInterface\npublic interface Callable<V> {\n    /**\n     * 计算结果，或在无法这样做时抛出异常。\n     * @return 计算得出的结果\n     * @throws 如果无法计算结果，则抛出异常\n     */\n    V call() throws Exception;\n}\n```\n\n1. Runnable 没有返回值并且无法抛出异常\n2. 不巧，我 Callable 可以做到你不能做到的\n\n线程池的源码后边讲，讲东西，要结合源码和例子讲！！！\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 55,
        "like_count": 29
    },
    {
        "id": 110,
        "tag_id": 1,
        "tag_type": 1,
        "title": "46.主线程等待子线程的方式",
        "content": "> 补充一下主线程等待子线程的两种方式\n\n# 主线程等待子线程的两种方式\n\n## sleep\n\n> 这个不常用，但是简单一些\n\n```java\npublic class Test {\n    void m() {\n        System.out.println(Thread.currentThread().getName());\n    }\n\n    public static void main(String[] args) {\n        Test t1 = new Test();\n        for (int i = 0; i < 5; i++) {\n            new Thread(t1::m, \\\"Thread \\\" + i).start();\n        }\n        try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }\n        System.out.println(\\\"main thread\\\");\n    }\n}\n```\n\n## join\n\n```java\npublic class Test {\n    void m() {\n        System.out.println(Thread.currentThread().getName());\n    }\n\n    public static void main(String[] args) {\n        Test t1 = new Test();\n        ArrayList<Thread> threads = new ArrayList<>();\n        for (int i = 0; i < 5; i++) {\n            threads.add(new Thread(t1::m, \\\"Thread \\\" + i));\n        }\n        threads.forEach(o -> o.start());\n        threads.forEach(o -> {\n            try {\n                o.join();\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        });\n        System.out.println(\\\"main thread\\\");\n    }\n}\n```\n\n## CountDownLatch\n\n```java\npublic class Test {\n    private CountDownLatch latch;\n\n    public Test(CountDownLatch latch) {\n        this.latch = latch;\n    }\n\n    void m() {\n        System.out.println(Thread.currentThread().getName());\n        latch.countDown();\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        CountDownLatch countDownLatch = new CountDownLatch(5);\n        Test t1 = new Test(countDownLatch);\n        for (int i = 0; i < 5; i++) {\n            new Thread(t1::m, \\\"Thread \\\" + i).start();\n        }\n        countDownLatch.await();\n        System.out.println(\\\"main thread\\\");\n    }\n}\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 226,
        "like_count": 15
    },
    {
        "id": 109,
        "tag_id": 1,
        "tag_type": 1,
        "title": "47.Java锁的介绍",
        "content": "# 各种锁\n\n## 公平锁/非公平锁\n\n公平锁指多个线程按照申请锁的**顺序**来获取锁。非公平锁指多个线程获取锁的顺序并**不是按照申请锁的顺序**，有可能后申请的线程比先申请的线程优先获取锁。有可能，会造成优先级反转或者**饥饿现象**（很长时间都没获取到锁-非洲人...），`ReentrantLock` 了解一下。\n\n## 可重入锁\n\n可重入锁又名递归锁，是指在同一个线程在**外层方法**获取锁的时候，在进入**内层方法**会自动获取锁，典型的 `synchronized` 了解一下\n\n```java\nsynchronized void setA() throws Exception {\n  \tThread.sleep(1000);\n  \tsetB(); // 因为获取了setA()的锁，此时调用setB()将会自动获取setB()的锁，如果不自动获取的话方法B将不会执行\n}\nsynchronized void setB() throws Exception {\n  \tThread.sleep(1000);\n}\n```\n\n## 独享锁/共享锁\n\n- 独享锁：是指该锁**一次只能被一个线程所持有**。\n- 共享锁：是该锁可**被多个线程所持有**。\n\n## 互斥锁/读写锁\n\n上面讲的独享锁/共享锁就是一种广义的说法，互斥锁/读写锁就是其具体的实现\n\n## 乐观锁/悲观锁\n\n1. 乐观锁与悲观锁不是指具体的什么类型的锁，而是指看待兵法同步的角度。\n2. 悲观锁认为对于同一个人数据的并发操作，**一定**是会发生修改的，哪怕没有修改，也会认为修改。因此对于同一个数据的并发操作，悲观锁采取加锁的形式。悲观的认为，不加锁的并发操作一定会出现问题。\n3. 乐观锁则认为对于同一个数据的并发操作，是**不会发生修改的**。在更新数据的时候，会采用尝试更新，不断重新的方式更新数据。乐观的认为，不加锁的并发操作时没有事情的。\n4. 悲观锁适合**写操作非常多的场景**，乐观锁适合**读操作非常多的场景**，不加锁带来大量的性能提升。\n5. 悲观锁在 `Java` 中的使用，就是利用各种锁。乐观锁在 `Java` 中的使用，是无锁编程，常常采用的是 `CAS` 算法，典型的例子就是原子类，通过 `CAS` 自旋实现原子类操作的更新。重量级锁是悲观锁的一种，自旋锁、轻量级锁与偏向锁属于乐观锁。\n\n## 分段锁\n\n1. 分段锁其实是一种锁的设计，并不是具体的一种锁，对于 ConcurrentHashMap 而言，其并发的实现就是通过**分段锁**的形式来哦实现高效的并发操作。\n2. 以 ConcurrentHashMap 来说一下分段锁的含义以及设计思想，ConcurrentHashMap 中的分段锁称为 Segment，它即类似于 HashMap（JDK7 与 JDK8 中 HashMap 的实现）的结构，即内部拥有一个 Entry 数组，数组中的每个元素又是一个链表；同时又是 ReentrantLock（Segment 继承了 ReentrantLock）\n3. 当需要 put 元素的时候，并不是对**整个 hashmap 进行加锁**，而是先通过 hashcode 来知道他要放在那**一个分段**中，然后对这个分段进行加锁，所以当多线程 put 的时候，**只要不是放在一个分段中**，就实现了真正的**并行的插入**。但是，在统计 size 的时候，可就是获取 hashmap 全局信息的时候，就需要获取所有的分段锁才能统计。\n4. 分段锁的设计目的是**细化锁的粒度**，当操作不需要更新整个数组的时候，就仅仅针对数组中的一项进行加锁操作。\n\n## 偏向锁/轻量级锁/重量级锁\n\n1. 这三种锁是锁的状态，并且是针对 Synchronized。在 Java5 通过引入锁升级的机制来实现高效 Synchronized。这三种锁的状态是通过对象**监视器在对象头中的字段来表明的**。偏向锁是指一段同步代码一直被一个线程所访问，那么该线程会自动获取锁。降低获取锁的代价。\n2. 偏向锁的适用场景：**始终只有一个线程在执行代码块**，在它没有执行完释放锁之前，没有其它线程去执行同步快，在锁无竞争的情况下使用，一旦有了竞争就升级为轻量级锁，升级为轻量级锁的时候需要撤销偏向锁，撤销偏向锁的时候会导致 `stop the word` 操作；在有锁竞争时，偏向锁会多做很多额外操作，尤其是撤销偏向锁的时候会导致进入安全点，安全点会导致 stw，**导致性能下降**，这种情况下应当禁用。\n3. 轻量级锁是指当锁是偏向锁的时候，被另一个线程锁访问，偏向锁就会升级为轻量级锁，其他线程会通过**自选的形式尝试获取锁**，不会阻塞，提高性能。\n4. 重量级锁是指当锁为轻量级锁的时候，另一个线程虽然是自旋，但自旋不会一直持续下去，当自旋一定次数的时候，还没有获取到锁，就会进入阻塞，该锁膨胀为重量级锁。重量级锁会让其他申请的线程进入阻塞，**性能降低**。\n\n## 自旋锁\n\n1. 在 Java 中，自旋锁是指尝试获取锁的线程不会立即阻塞，而是采用循环的方式去尝试获取锁，这样的好处是**减少线程上下文切换的消耗，缺点是循环会消耗 CPU**。\n2. 自旋锁原理非常简单，如果持有锁的线程能在很短时间内释放锁资源，那么那些等待竞争锁的线程就不需要做内核态和用户态之间的切换进入阻塞挂起状态，它们只需要等一等（自旋），等持有锁的线程释放锁后即可立即获取锁，这样就避免用户线程和内核的切换的消耗。\n3. 自旋锁尽可能的减少线程的阻塞，适用于锁的竞争不激烈，且占用锁时间非常短的代码来说性能能大幅度的提升，因为自旋的消耗会小于线程阻塞挂起再唤醒的操作的消耗。\n4. 但是如果锁的竞争激烈，或者持有锁的线程需要长时间占用锁执行同步块，这时候就不适用使用自旋锁了，因为自旋锁在获取锁前一直都是占用 cpu 做无用功，同时有大量线程在竞争一个锁，会导致获取锁的时间很长，线程自旋的消耗大于线程阻塞挂起操作的消耗，其它需要 cpu 的线程又不能获取到 cpu，造成 cpu 的浪费。\n\n### 手写自旋锁的例子\n\n```java\npublic class SpinLock {\n    // 原子引用线程\n    AtomicReference<Thread> atomicReference =  new AtomicReference<>();\n    public void mylock() {\n        Thread thread = Thread.currentThread();\n        System.out.println(Thread.currentThread().getName() + \\\" como in...\\\");\n        while (!atomicReference.compareAndSet(null, thread)) {\n//            System.out.println(\\\"不爽，重新获取一次值瞧瞧...\\\");\n        }\n    }\n    public void  myUnlock() {\n        Thread thread = Thread.currentThread();\n        atomicReference.compareAndSet(thread, null);\n        System.out.println(Thread.currentThread().getName() + \\\" invoke myUnLock...\\\");\n    }\n    public static void main(String[] args) {\n        SpinLock spinLock = new SpinLock();\n        new Thread(() -> {\n            spinLock.mylock();\n            try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }\n            spinLock.myUnlock();\n        }, \\\"t1\\\").start();\n        try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }\n        new Thread(() -> {\n            spinLock.mylock();\n            spinLock.myUnlock();\n        }, \\\"t2\\\").start();\n    }\n\n}\n```\n\n## Java 锁总结\n\nJava 锁机制可归为 Sychornized 锁和 Lock 锁两类。Synchronized 是基于 `JVM` 来保证数据同步的，而 Lock 则是**硬件层面**，依赖特殊的 CPU 指令来实现数据同步的。\n\n- Synchronized 是一个非公平、悲观、独享、互斥、可重入的重量级锁。\n- ReentrantLock 是一个默认非公平但可实现公平的、悲观、独享、互斥、可重入、重量级锁。\n- ReentrantReadWriteLock 是一个默认非公平但可实现公平的、悲观、写独享、读共享、读写、可重入、重量级锁。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 476,
        "like_count": 25
    },
    {
        "id": 79,
        "tag_id": 1,
        "tag_type": 1,
        "title": "48.谈谈volatile",
        "content": "# volatile 的特性\n\n面试官：了解 volatile 嘛？有啥子特性\n\n我：了解，两个特性：**内存可见性、禁止重排序**\n\n禁止重排序：**不管是编译器还是 JVM 还是 CPU，都会对一些指令进行重排序，目的是为了提高程序运行的速度，提高程序的性能，毫无疑问，在单线程下没毛病，多线程就似乎生病了。**\n\n给你稍微举举例子：禁止重排->单例模式\n\n```java\n// 来一波双重校验\npublic class Test {\n    private volatile static Test instance = null;\n    private Test(){}\n    private static Test getInstance() {\n        if (instance == null) {\n            synchronized (Test.class) {\n                if (instance == null) {\n                    instance = new Test();\n                }\n            }\n        }\n        return instance;\n    }\n}\n// instance类变量前面修饰的volatile？是吧？\n```\n\n问题在于：上面的代码是一个很常见的单例模式实现方式，但是上述代码在多线程环境下是有问题的。为什么呢，问题出在 instance 对象的初始化上，因为`instance = new Singleton();`这个初始化操作并不是原子的，在 JVM 上会对应下面的几条指令：\n\n```c\nmemory =allocate();    //1. 分配对象的内存空间\nctorInstance(memory);  //2. 初始化对象\ninstance = memory;     //3. 设置instance指向刚分配的内存地址\n```\n\n上面三个指令中，步骤 2 依赖步骤 1，但是步骤 3 不依赖步骤 2，所以 JVM 可能针对他们进行指令重拍序优化，重排后的指令如下：\n\n```c\nmemory =allocate();    //1. 分配对象的内存空间\ninstance = memory;     //3. 设置instance指向刚分配的内存地址\nctorInstance(memory);  //2. 初始化对象\n```\n\n这样优化之后，内存的初始化被放到了 instance 分配内存地址的后面，这样的话当线程 1 执行步骤 3 这段赋值指令后，刚好有另外一个线程 2 进入 getInstance 方法判断 instance 不为 null，这个时候线程 2 拿到的 instance 对应的内存其实还未初始化，这个时候拿去使用就会导致出错。\n\n这里多说多说一点：为什么在 synchronized 上面多加了一次判断\n\n**还不是因为 synchronized 比较笨重，锁了代码块嘛，多线程不能每次都要进来块中，岂不是都要发生阻塞等这 class 的锁呀，直接给他上面判断一下不为空就直接跳出去了。提高了性能哇。**\n\n其实这里也能体现出 volatile 的内存可见性，让其他线程对这个实例可见。\n\n我们继续说 volatile 的内存可见性\n\n扯一波 JMM 内存模型\n\n![volatile保证内存可见性和避免重排-LZPZA3](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/volatile保证内存可见性和避免重排-LZPZA3.png)\n\n根据这个图如何回答总结 JMM 内存模型，看各位的造化了，理解讲出来即可。结合例子讲也可以\n\n1. 先说结构\n2. 再说为什么是这样的结构，原因是什么？\n3. 然后扯流程\n4. 撒花结束\n\n## 底层结构\n\n面试官：知道底层结构嘛？\n\n我：禁止重排是利用内存屏障来解决的，其实最根本的还是 cpu 的一个**lock**指令：**它的作用是使得本 CPU 的 Cache 写入了内存，该写入动作也会引起别的 CPU invalidate 其 Cache。所以通过这样一个空操作，可让前面 volatile 变量的修改对其他 CPU 立即可见。**\n\n- 锁住内存\n- 任何读必须在写完成之后再执行\n- 使其它线程这个值的栈缓存失效\n\n## 不能保证原子性\n\n![volatile不能保证数据一致性-rjZ7Fn](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/volatile不能保证数据一致性-rjZ7Fn.png)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 302,
        "like_count": 13
    },
    {
        "id": 160,
        "tag_id": 1,
        "tag_type": 1,
        "title": "49.JMM内存模型",
        "content": "# 上图\n\n![volatile保证内存可见性和避免重排-LZPZA3](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/volatile保证内存可见性和避免重排-LZPZA3.png)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 171,
        "like_count": 0
    },
    {
        "id": 87,
        "tag_id": 1,
        "tag_type": 1,
        "title": "50.谈谈synchronized的一切",
        "content": "# synchronized 和 lock 的区别\n\n> 很多面试官爱问 synchronized 和 lock 的区别\n\n面试官：区别？哈哈哈\n\n我：面有表情，好的。\n\n- **两者都是可重入锁**:两者都是可重入锁。“可重入锁”概念是：**自己可以再次获取自己的内部锁**。比如一个线程获得了某个对象的锁，此时这个对象锁还没有释放，当其再次想要获取这个对象的锁的时候还是可以获取的，如果不可锁重入的话，就会造成死锁。同一个线程每次获取锁，锁的计数器都自增 1，所以要等到锁的计数器下降为 0 时才能释放锁。\n- **synchronized 依赖于 JVM 而 ReenTrantLock 依赖于 API**:synchronized 是依赖于 JVM 实现的，前面我们也讲到了 虚拟机团队在 JDK1.6 为 synchronized 关键字进行了很多优化，但是这些优化都是在虚拟机层面实现的，并没有直接暴露给我们。ReenTrantLock 是 JDK 层面实现的（也就是 API 层面，需要 lock() 和 unlock 方法配合 try/finally 语句块来完成），所以我们可以通过查看它的源代码，来看它是如何实现的。\n- **ReenTrantLock 比 synchronized 增加了一些高级功能**\n  1. **等待可中断**：过 lock.lockInterruptibly() 来实现这个机制。也就是说正在等待的线程可以选择放弃等待，改为处理其他事情。\n  2. **可实现公平锁**\n  3. **可实现选择性通知（锁可以绑定多个条件）**：线程对象可以注册在指定的 Condition 中，从而可以有选择性的进行线程通知，在调度线程上更加灵活。 在使用 notify/notifyAll()方法进行通知时，被通知的线程是由 JVM 选择的，用 ReentrantLock 类结合 Condition 实例可以实现“选择性通知”\n  4. **性能已不是选择标准**：在 jdk1.6 之前 synchronized 关键字吞吐量随线程数的增加，下降得非常严重。1.6 之后，**synchronized 和 ReenTrantLock 的性能基本是持平了。**\n\n## synchronized 修饰范围\n\n面试官：先扯 synchronized 吧，修饰范围？可否了解？\n\n我：当然了解。\n\n- 实例方法：作用于当前对象实例加锁，进入同步代码前要获得当前对象实例的锁\n- 静态方法：作用于当前类对象加锁，进入同步代码前要获得当前类对象的锁\n- 修饰代码块：指定加锁对象，对给定对象加锁，进入同步代码库前要获得给定对象的锁\n\n这里可能让谈对象头里面都有什么哦，简单的说：**Hotspot 虚拟机的对象头包括两部分信息**，**第一部分用于存储对象自身的自身运行时数据**（哈希码、GC 分代年龄、锁状态标志等等），**另一部分是类型指针**，即对象指向它的类元数据的指针，虚拟机通过这个指针来确定这个对象是那个类的实例。\n\n## 底层原理\n\n面试官：聊聊底层原理\n\n我：好的，代码块和方法有些区别。\n\n- 代码块\n\n**synchronized 同步语句块的实现使用的是 monitorenter 和 monitorexit 指令，其中 monitorenter 指令指向同步代码块的开始位置，monitorexit 指令则指明同步代码块的结束位置。**\n\n- 方法\n\n**synchronized 修饰的方法并没有 monitorenter 指令和 monitorexit 指令，取得代之的确实是 ACC_SYNCHRONIZED 标识，该标识指明了该方法是一个同步方法，JVM 通过该 ACC_SYNCHRONIZED 访问标志来辨别一个方法是否声明为同步方法，从而执行相应的同步调用。**\n\n面试官：1.6 对 synchronized 的一些优化都有哪些？\n\n我：JDK1.6 对锁的实现引入了大量的优化，如**自旋锁、适应性自旋锁、锁消除、锁粗化、偏向锁、轻量级锁等**技术来减少锁操作的开销。\n\n面试官：简单的说一下偏向锁、轻量级锁等。\n\n- 偏向锁\n\n引入偏向锁的目的和引入轻量级锁的目的很像，**他们都是为了没有多线程竞争的前提下，减少传统的重量级锁使用操作系统互斥量产生的性能消耗**。但是不同是：轻量级锁在无竞争的情况下**使用 CAS 操作去代替使用互斥量**。而偏向锁在**无竞争的情况下会把整个同步都消除掉**。\n\n- 轻量级锁\n\n轻量级锁不是为了代替重量级锁，**它的本意是在没有多线程竞争的前提下，减少传统的重量级锁使用操作系统互斥量产生的性能消耗，因为使用轻量级锁时，不需要申请互斥量**。另外，轻量级锁的加锁和解锁都用到了**CAS**操作。\n\n- 锁消除\n\n锁消除理解起来很简单，它指的就是虚拟机即使编译器在运行时，**如果检测到那些共享数据不可能存在竞争，那么就执行锁消除**。锁消除可以节省毫无意义的请求锁的时间。\n\n- 自旋锁和自适应锁\n\n**一般线程持有锁的时间都不是太长，所以仅仅为了这一点时间去挂起线程/恢复线程是得不偿失的。** 所以，虚拟机的开发团队就这样去考虑：“我们能不能让后面来的请求获取锁的线程等待一会而不被挂起呢？看看持有锁的线程是否很快就会释放锁”。**为了让一个线程等待，我们只需要让线程执行一个忙循环（自旋），这项技术就叫做自旋**。\n\n**在 JDK1.6 中引入了自适应的自旋锁。自适应的自旋锁带来的改进就是：自旋的时间不在固定了，而是和前一次同一个锁上的自旋时间以及锁的拥有者的状态来决定**。\n\n面试官：简要说一下偏向锁->轻量级锁->重量级锁的升级过程\n\n我：好的\n\n- 检测 Mark Word 里面是不是当前线程的 ID，如果是，表示当前线程处于偏向锁\n- 如果不是，则使用 CAS 将当前线程的 ID 替换 Mard Word，如果成功则表示当前线程获得偏向锁，置偏向标志位 1\n- 如果失败，则说明发生竞争，撤销偏向锁，进而升级为轻量级锁。\n- 当前线程使用 CAS 将对象头的 Mark Word 替换为锁记录指针，如果成功，当前线程获得锁\n- 如果失败，表示其他线程竞争锁，当前线程便尝试使用自旋来获取锁。\n- 如果自旋成功则依然处于轻量级状态。\n- 如果自旋失败，则升级为重量级锁。\n\n> 个人觉得够了...能一口气扯完这些，足以了。AQS 就够受了。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 26,
        "like_count": 50
    },
    {
        "id": 149,
        "tag_id": 1,
        "tag_type": 1,
        "title": "51.谈谈CAS的一切",
        "content": "# CAS\n\n面试官：了解 CAS 嘛？\n\n我：了解，**我们在读 Concurrent 包下的类的源码时，发现无论是**ReenterLock 内部的 AQS，还是各种 Atomic 开头的原子类，内部都应用到了`CAS`，并且在调用 getAndAddInt 方法中，会有 compareAndSwapInt 方法。其实都是调用 unsafe.compareAndSwap()方法。\n\n## compareAndSwapInt\n\n细说 compareAndSwapInt 方法，那岂不是要看源码：\n\n```cpp\nUNSAFE_ENTRY(jboolean, Unsafe_CompareAndSwapInt(JNIEnv *env, jobject unsafe, jobject obj, jlong offset, jint e, jint x))\n  UnsafeWrapper(\\\"Unsafe_CompareAndSwapInt\\\");\n  oop p = JNIHandles::resolve(obj); // oop 安全点 引用\n  jint* addr = (jint *) index_oop_from_field_offset_long(p, offset); // 计算偏移地址\n  return (jint)(Atomic::cmpxchg(x, addr, e)) == e; // 原子操作，比较和更新\nUNSAFE_END\n```\n\nJava 中的`compareAndSwapInt（obj, offset, expect, update）`比较清楚，**意思就是如果`obj`内的`value`和`expect`相等，就证明没有其他线程改变过这个变量，那么就更新它为`update`，如果这一步的`CAS`没有成功，那就采用自旋的方式继续进行`CAS`操作**，取出乍一看这也是两个步骤了啊，其实在`JNI`里是借助于一个`CPU`指令完成的。所以还是原子操作。\n\n原子操作：可理解为要么这些行为都执行，不被打扰，要不都不执行。实在不行，就理解为串行操作，\n\n再细说这个 cpu 指令，那就要看该源码了：\n\n```cpp\ninline jint     Atomic::cmpxchg    (jint     exchange_value, volatile jint*     dest, jint     compare_value) {\n  int mp = os::is_MP(); // 返回处理器（判断是多核还是单核，单核省略lock前缀）\n  __asm__ volatile (LOCK_IF_MP(%4) \\\"cmpxchgl %1,(%3)\\\" // 比较\n                    : \\\"=a\\\" (exchange_value)\n                    : \\\"r\\\" (exchange_value), \\\"a\\\" (compare_value), \\\"r\\\" (dest), \\\"r\\\" (mp)\n                    : \\\"cc\\\", \\\"memory\\\");\n  return exchange_value;\n}\n```\n\n调用了`Atomic::cmpxchg(x, addr, e)`, 其中参数**x 是即将更新的值**，参数**e 是原内存的值**。代码中能看到 cmpxchg 有基于各个平台的实现。\n\n## ABA\n\n面试官：知道 ABA 问题嘛？\n\n我：知道，描述: 第一个线程取到了变量 x 的值 A，然后巴拉巴拉干别的事，总之就是只拿到了变量 x 的值 A。这段时间内第二个线程**也取到了变量 x 的值 A，然后把变量 x 的值改为 B，然后巴拉巴拉干别的事，最后又把变量 x 的值变为 A** （相当于还原了）。在这之后第一个线程终于进行了变量 x 的操作，但是此时**变量 x 的值还是 A**，所以 compareAndSet 操作是成功。\n\n解决方法：**目前在 JDK 的 atomic 包里提供了一个类`AtomicStampedReference`来解决 ABA 问题。**说白了，就是版本号\n\n举一个例子：\n\n```java\npublic class ABADemo {\n    static AtomicInteger atomicInteger = new AtomicInteger(100);\n    static AtomicStampedReference<Integer> atomicStampedReference = new AtomicStampedReference<>(100, 1);\n\n    public static void main(String[] args) {\n        System.out.println(\\\"=====ABA的问题产生=====\\\");\n        new Thread(() -> {\n            atomicInteger.compareAndSet(100, 101);\n            atomicInteger.compareAndSet(101, 100);\n        }, \\\"t1\\\").start();\n\n        new Thread(() -> {\n            // 保证线程1完成一次ABA问题\n            try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }\n            System.out.println(atomicInteger.compareAndSet(100, 2020) + \\\" \\\" + atomicInteger.get());\n        }, \\\"t2\\\").start();\n        try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }\n\n        System.out.println(\\\"=====解决ABA的问题=====\\\");\n        new Thread(() -> {\n            int stamp = atomicStampedReference.getStamp(); // 第一次获取版本号\n            System.out.println(Thread.currentThread().getName() + \\\" 第1次版本号\\\" + stamp);\n            try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }\n            atomicStampedReference.compareAndSet(100, 101, atomicStampedReference.getStamp(), atomicStampedReference.getStamp() + 1);\n            System.out.println(Thread.currentThread().getName() + \\\"\\\\t第2次版本号\\\" + atomicStampedReference.getStamp());\n            atomicStampedReference.compareAndSet(101, 100, atomicStampedReference.getStamp(), atomicStampedReference.getStamp() + 1);\n            System.out.println(Thread.currentThread().getName() + \\\"\\\\t第3次版本号\\\" + atomicStampedReference.getStamp());\n        }, \\\"t3\\\").start();\n\n        new Thread(() -> {\n            int stamp = atomicStampedReference.getStamp();\n            System.out.println(Thread.currentThread().getName() + \\\"\\\\t第1次版本号\\\" + stamp);\n            try { TimeUnit.SECONDS.sleep(4); } catch (InterruptedException e) { e.printStackTrace(); }\n            boolean result = atomicStampedReference.compareAndSet(100, 2020, stamp, stamp + 1);\n            System.out.println(Thread.currentThread().getName() + \\\"\\\\t修改是否成功\\\" + result + \\\"\\\\t当前最新实际版本号：\\\" + atomicStampedReference.getStamp());\n            System.out.println(Thread.currentThread().getName() + \\\"\\\\t当前最新实际值：\\\" + atomicStampedReference.getReference());\n        }, \\\"t4\\\").start();\n\n    }\n}\n```\n\n## CAS 设计思想\n\n面试官：了解 CAS 的设计思想吗？\n\n我：思想？我理解的是乐观思想，你听我娓娓道来，何为乐观，乐观就是在我角度上认为\\\"哈士奇\\\"不会去偷吃我的菜，那么我就不用同步加个房间锁住门防止\\\"哈士奇\\\"吃。那设计的时候，cpu 咋知道\\\"哈士奇\\\"吃过没，那就看这道菜是不是少了点，或者量少了一半等。那么主人回来吃的时候肯定不会开吃了，是吧？所以主人吃就跟 CAS 的更新值一样，这道菜没被\\\"哈士奇\\\"吃过是 CAS 的期望值。 那么 cpu 的这个 cmpxchg 就是干这个事的。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 196,
        "like_count": 85
    },
    {
        "id": 112,
        "tag_id": 1,
        "tag_type": 1,
        "title": "52.谈谈ThreadLocal",
        "content": "# ThreadLocal\n\n面试官：了解 ThreadLocal 嘛？用过 ThreadLocal 嘛？\n\n我：了解过：它是这样的，假如想实现每一个线程都有自己的专属本地变量该如何解决呢？ JDK 中提供的`ThreadLocal`类正是为了解决这样的问题。 **`ThreadLocal`类主要解决的就是让每个线程绑定自己的值，可以将`ThreadLocal`类形象的比喻成存放数据的盒子，盒子中可以存储每个线程的私有数据。**如果你创建了一个`ThreadLocal`变量，那么访问这个变量的每个线程都会有这个变量的本地副本，这也是`ThreadLocal`变量名的由来。他们可以使用 `get（）` 和 `set（）` 方法来获取默认值或将其值更改为当前线程所存的副本的值，从而避免了线程安全问题。\n\n## 底层原理\n\n面试官：你知道底层原理嘛？\n\n我：知道\n\n首先看：结构\n\n```java\npublic class Thread implements Runnable {\n ......\n//与此线程有关的ThreadLocal值。由ThreadLocal类维护\nThreadLocal.ThreadLocalMap threadLocals = null;\n ......\n}\n// 由源码可见，ThreadLocal存储的变量存在Thread的ThreadLocalMap中\n// 可理解为ThreadLocalMap是专门定制的一种Map\n```\n\n其次看 set 和 get 方法\n\n```java\n// set\npublic void set(T value) {\n    // 获取当前线程\n    Thread t = Thread.currentThread();\n    // 拿到定制的ThreadLocalMap的map\n    ThreadLocalMap map = getMap(t);\n    if (map != null)\n        //不为空，则绑定\n        map.set(this, value);\n    else\n        // 否则创建\n        createMap(t, value);\n}\n// getMap 返回的就是threadLocals\nThreadLocalMap getMap(Thread t) {\n    return t.threadLocals;\n}\n\n// get\npublic T get() {\n    // 依然获取当前线程\n    Thread t = Thread.currentThread();\n    ThreadLocalMap map = getMap(t);\n    if (map != null) {\n        // 获取当前Entry\n        ThreadLocalMap.Entry e = map.getEntry(this);\n        if (e != null) {\n            @SuppressWarnings(\\\"unchecked\\\")\n            // 如果不为空，则返回\n            T result = (T)e.value;\n            return result;\n        }\n    }\n    return setInitialValue();\n}\n```\n\n最终的变量是放在了当前线程的 `ThreadLocalMap` 中，并不是存在 `ThreadLocal` 上，ThreadLocal 可以理解为只是 ThreadLocalMap 的封装，传递了变量值。\n\n**每个 Thread 中都具备一个 ThreadLocalMap，而 ThreadLocalMap 可以存储以 ThreadLocal 为 key 的键值对。** 比如我们在同一个线程中声明了两个 `ThreadLocal` 对象的话，会使用 `Thread`内部都是使用仅有那个`ThreadLocalMap` 存放数据的，`ThreadLocalMap`的 key 就是 `ThreadLocal`对象，value 就是 `ThreadLocal` 对象调用`set`方法设置的值。`ThreadLocal` 是 map 结构是为了让每个线程可以关联多个 `ThreadLocal`变量。这也就解释了 ThreadLocal 声明的变量为什么在每一个线程都有自己的专属本地变量。\n\n## 内存泄漏\n\n面试官：知道内存泄露嘛？\n\n我：知道，`ThreadLocalMap` 中使用的 key 为 `ThreadLocal` 的弱引用,而 value 是强引用。所以，如果 `ThreadLocal` 没有被外部强引用的情况下，在垃圾回收的时候会 key 会被清理掉，而 value 不会被清理掉。这样一来，`ThreadLocalMap` 中就会出现 key 为 null 的 Entry。假如我们不做任何措施的话，value 永远无法被 GC 回收，这个时候就可能会产生内存泄露。ThreadLocalMap 实现中已经考虑了这种情况，在调用 `set()`、`get()`、`remove()` 方法的时候，会清理掉 key 为 null 的记录。使用完 `ThreadLocal`方法后 最好手动调用`remove()`方法。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 454,
        "like_count": 56
    },
    {
        "id": 145,
        "tag_id": 1,
        "tag_type": 1,
        "title": "53.聊聊AQS",
        "content": "# AQS\n\n> 这个先留着，这个内容有点多，待我这周结束之后来写。\n\n面试官：AQS 是什么？\n\n## 原理\n\n我：AbstractQueuedSynchronizer 抽象同步队列。说白了，就是个 FIFO 双向队列。其内部通过节点 head 和 tail 记录对首和队尾元素。\n\n**state**：在 AQS 中维持了一个单一的状态信息 state，可以通过**getState**、**setState**、**compareAndSetState**函数修改其值。\n\n- **ReentrantLock**：state 可以用来表示当前线程获取锁的可重入次数。\n- **ReentrantReadWriteLock**：state 的高 16 位表示读状态，也就是获取该读锁的次数，低 16 位表示获取到写锁的线程的可重入次数。\n- **semaphore**：state 用来表示当前可用信号的个数。\n- **CountDownlatch**：state 用来表示计数器当前的值。\n\n对于 AQS 来讲，线程同步的关键是对状态值**state**进行操作。\n\n## 方法\n\n在独占方式下获取和释放资源使用的方法：\n\n```java\nvoid acquire(int arg);\nvoid acquireInterruptibly(int arg);\nboolean release(int arg);\n```\n\n在共享方式获取和释放资源使用的方法：\n\n```java\nvoid acquireShared(int arg);\nvoid acquireSharedInterruptibly(int arg);\nboolean releaseShared(int arg);\n```\n\n使用独占方式获取的资源是与**具体线程绑定**的，就是说如果一个线程获取到了资源，就会标记是这个线程获取到了，其他线程再尝试操作 state 获取资源时会**发现当前该资源不是自己持有的**，就会在**获取失败后被阻塞**。（比如 ReentrantLock）\n\n对应的共享方式的资源与具体线程是不相关的，当多个线程去请求资源时通过 CAS 方式竞争获取资源，当一个线程获取到了资源后，另外一个线程再次去获取时如果当前资源还能满足它的资源，则当前线程只需要使用 CAS 方式进行获取即可。（比如 semaphore）\n\n看一下**acquire**方法：\n\n```java\n// tryAcquire 具体的子类去实现，并维护state的状态\npublic final void acquire(int arg) {\n    if (!tryAcquire(arg) &&\n        acquireQueued(addWaiter(Node.EXCLUSIVE), arg)) // 如果失败标记状态，入队\n        selfInterrupt();\n}\n```\n\n看一下**release**方法：\n\n```java\n// tryRelease 具体的子类是实现，并设置state的状态\npublic final boolean release(int arg) {\n    if (tryRelease(arg)) {\n        Node h = head;\n        if (h != null && h.waitStatus != 0)\n            unparkSuccessor(h); // 调用unpark唤醒队列的线程，并调用tryAcquire尝试，看是否需要，如果不需要，继续挂起\n        return true;\n    }\n    return false;\n}\n```\n\n**acquireShared 和 releaseShared**和上面的方法的思想差不多\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 41,
        "like_count": 39
    },
    {
        "id": 148,
        "tag_id": 1,
        "tag_type": 1,
        "title": "54.聊一聊ReentrantLock",
        "content": "# ReentrantLock\n\n> 经常拿 synchronized 和 ReentrantLock 做比较，那就来看看这个锁的一些重点吧\n\n面试官：了解 ReentrantLock 嘛？\n\n## 原理\n\n我：当然，它实现了 Lock 接口，同时调用内部类 sync 继承的 AQS，先说一下**state**：它代表获取该锁的**可重入次数**，在默认下，state 的值为 0 表示**当前锁没有被任何线程持有**。当一个线程第一次获取该锁时会尝试使用 CAS 设置 state 的值为 1，并且记录该锁的持有者为当前线程。若该线程第二次获取该锁后，状态值被设置 2。\n\n## 方法\n\n我们来看一下 lock 方法：\n\n```java\npublic void lock() {\n    sync.lock(); // 委托给sync了\n}\n```\n\n而且它具有非公平锁还是公平锁的特性。比如，我们可以看构造方法\n\n```java\n// 这不，由fair来决定是公平的还是非公平的\npublic ReentrantLock(boolean fair) {\n    sync = fair ? new FairSync() : new NonfairSync();\n}\n```\n\n- 非公平锁：\n\n```java\nfinal void lock() {\n    if (compareAndSetState(0, 1)) // cas设置state的状态，0->1\n        setExclusiveOwnerThread(Thread.currentThread()); // 设置独占\n    else\n        acquire(1); // 否则尝试，如果还是当前线程，就state累加，若不是，则挂起\n}\n// 看看 acquire\npublic final void acquire(int arg) {\n    if (!tryAcquire(arg) &&\n        acquireQueued(addWaiter(Node.EXCLUSIVE), arg))\n        selfInterrupt();\n}\n// 看看重写的tryAcquire\nprotected final boolean tryAcquire(int acquires) {\n    return nonfairTryAcquire(acquires);\n}\n// 重点来了\nfinal boolean nonfairTryAcquire(int acquires) {\n    final Thread current = Thread.currentThread();\n    int c = getState();\n    if (c == 0) { // 0->acquires\n        if (compareAndSetState(0, acquires)) {\n            setExclusiveOwnerThread(current);\n            return true;\n        }\n    }\n    else if (current == getExclusiveOwnerThread()) { // 否则判断该资源是否被该线程持有\n        int nextc = c + acquires; // 持有，则+acquires\n        if (nextc < 0) // overflow\n            throw new Error(\\\"Maximum lock count exceeded\\\");\n        setState(nextc);\n        return true;\n    }\n    return false;\n}\n```\n\n- 公平锁和上面的差不多，就多了一个这样的判断：\n\n```java\nif (c == 0) {\n    if (!hasQueuedPredecessors() && // 队列中是否轮到该线程了\n        compareAndSetState(0, acquires)) {\n        setExclusiveOwnerThread(current);\n        return true;\n    }\n}\n```\n\n我们来看一下 unlock()方法：\n\n```java\npublic void unlock() {\n    sync.release(1);\n}\n// release看看\npublic final boolean release(int arg) {\n    if (tryRelease(arg)) { // 依然调\n        Node h = head;\n        if (h != null && h.waitStatus != 0)\n            unparkSuccessor(h);\n        return true;\n    }\n    return false;\n}\n// 看看sync重写的\nprotected final boolean tryRelease(int releases) {\n    int c = getState() - releases;// 并不会设置为0，而是减releases\n    if (Thread.currentThread() != getExclusiveOwnerThread())\n        throw new IllegalMonitorStateException();\n    boolean free = false;\n    if (c == 0) { // 如果状态为0了，则free为true\n        free = true;\n        setExclusiveOwnerThread(null); // 并且将持有该资源的线程设置为null\n    }\n    setState(c); // cas操作\n    return free;\n}\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 262,
        "like_count": 42
    },
    {
        "id": 155,
        "tag_id": 1,
        "tag_type": 1,
        "title": "55.聊一聊ReentrantReadWriteLock",
        "content": "# ReentrantReadWriteLock\n\n> 聊一聊读写锁\n\n面试官：了解 AQS 的读写锁嘛，知道其原理嘛？\n\n我：刚好了解，我们知道，在一些读多写少的场景中，若是用 ReentrantLock 效率显然不高，于是 ReentrantReadWriteLock 问世。\n\n## 原理\n\n老规矩：\n\n```java\n// 维护了readlock和writelock\nprivate final ReentrantReadWriteLock.ReadLock readerLock;\n/** Inner class providing writelock */\nprivate final ReentrantReadWriteLock.WriteLock writerLock;\n/** Performs all synchronization mechanics */\nfinal Sync sync; // 同样的是sync 继承aqs\n\n// 可惜的是state依然是一个， 但是不慌\n// 高16位表示读状态，低16位表示获取到写锁的线程的可重入锁\nstatic final int SHARED_SHIFT   = 16;\n// 共享锁的读锁的状态单位值65536\nstatic final int SHARED_UNIT    = (1 << SHARED_SHIFT);\n// 共享锁线程最大个数65536\nstatic final int MAX_COUNT      = (1 << SHARED_SHIFT) - 1;\n// 排它锁写锁掩码，二进制 15个1\nstatic final int EXCLUSIVE_MASK = (1 << SHARED_SHIFT) - 1;\n// 返回读锁线程数\nstatic int sharedCount(int c)    { return c >>> SHARED_SHIFT; }\n// 返回写锁可重入个数\nstatic int exclusiveCount(int c) { return c & EXCLUSIVE_MASK; }\n```\n\n## 方法\n\n直奔主题：写锁的获取与释放\n\n**lock：**\n\n```java\n// lock\npublic void lock() {\n    sync.acquire(1);\n}\n// acquire\npublic final void acquire(int arg) {\n    if (!tryAcquire(arg) && // 老规矩了\n        acquireQueued(addWaiter(Node.EXCLUSIVE), arg))\n        selfInterrupt();\n}\n// tryAcquire\nprotected final boolean tryAcquire(int acquires) {\n    Thread current = Thread.currentThread();\n    int c = getState();\n    int w = exclusiveCount(c); // 得到低16位的值\n    // 如果c！=0， 说明资源已经被其他读锁或者写锁的线程所获取\n    if (c != 0) {\n        // w==0 代表低16位位0，那么高16位不为0，那么获取了读锁\n        if (w == 0 || current != getExclusiveOwnerThread())\n            return false;\n        // 到这一步，已经是写锁了，那么判断可重入次数\n        if (w + exclusiveCount(acquires) > MAX_COUNT)\n            throw new Error(\\\"Maximum lock count exceeded\\\");\n        // Reentrant acquire\n        // 更新state\n        setState(c + acquires);\n        return true;\n    }\n    // 是否第一个写锁获取线程\n    if (writerShouldBlock() ||\n        !compareAndSetState(c, c + acquires))\n        return false;\n    setExclusiveOwnerThread(current);\n    return true;\n}\n```\n\n**unlock：**\n\n```java\n// unlock\npublic void unlock() {\n    sync.release(1);\n}\n// 不提了\npublic final boolean release(int arg) {\n    if (tryRelease(arg)) {\n        Node h = head;\n        if (h != null && h.waitStatus != 0)\n            unparkSuccessor(h);\n        return true;\n    }\n    return false;\n}\n// 重点\nprotected final boolean tryRelease(int releases) {\n    if (!isHeldExclusively())\n        throw new IllegalMonitorStateException();\n    int nextc = getState() - releases; // 依然是减\n    boolean free = exclusiveCount(nextc) == 0; // 判断是否为0\n    if (free) // 移除该写锁持有的线程\n        setExclusiveOwnerThread(null);\n    setState(nextc); // 更新\n    return free;\n}\n```\n\n读锁的获取和释放：\n\n**lock：**\n\n```java\nprotected final int tryAcquireShared(int unused) {\n    Thread current = Thread.currentThread();\n    int c = getState();\n    // 判断是否被写锁占用\n    if (exclusiveCount(c) != 0 &&\n        getExclusiveOwnerThread() != current)\n        return -1;\n    // 获取读锁的数量\n    int r = sharedCount(c);\n    // 尝试获取锁，多个读线程只有一个会成功，不成功的进入fullTryAcqureShared进行重试\n    if (!readerShouldBlock() &&\n        r < MAX_COUNT &&\n        compareAndSetState(c, c + SHARED_UNIT)) {\n        // 第一个线程获取读锁\n        if (r == 0) {\n            firstReader = current;\n            firstReaderHoldCount = 1;\n        // 如果当前线程是第一个获取读锁的线程\n        } else if (firstReader == current) {\n            firstReaderHoldCount++;\n        } else {\n            // 记录最后一个获取读锁的线程的线程或记录其他线程读锁的可重入数\n            HoldCounter rh = cachedHoldCounter;\n            if (rh == null || rh.tid != getThreadId(current))\n                cachedHoldCounter = rh = readHolds.get();\n            else if (rh.count == 0)\n                readHolds.set(rh);\n            rh.count++;\n        }\n        return 1;\n    }\n    // 自旋获取\n    return fullTryAcquireShared(current);\n}\n```\n\n**unlock:**\n\n```java\npublic final boolean releaseShared(int arg) {\n    if (tryReleaseShared(arg)) {\n        doReleaseShared(); // 释放所有\n        return true;\n    }\n    return false;\n}\nprotected final boolean tryReleaseShared(int unused) {\n    Thread current = Thread.currentThread();\n    if (firstReader == current) {\n        // assert firstReaderHoldCount > 0;\n        if (firstReaderHoldCount == 1)\n            firstReader = null;\n        else\n            firstReaderHoldCount--;\n    } else {\n        HoldCounter rh = cachedHoldCounter;\n        if (rh == null || rh.tid != getThreadId(current))\n            rh = readHolds.get();\n        int count = rh.count;\n        if (count <= 1) {\n            readHolds.remove();\n            if (count <= 0)\n                throw unmatchedUnlockException();\n        }\n        --rh.count;\n    }\n    // 循环直到自己的读计数-1.CAS更新成功\n    for (;;) {\n        int c = getState();\n        int nextc = c - SHARED_UNIT;\n        if (compareAndSetState(c, nextc))\n            return nextc == 0;\n    }\n}\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 20,
        "like_count": 23
    },
    {
        "id": 120,
        "tag_id": 1,
        "tag_type": 1,
        "title": "56.聊一聊CountDownLatch",
        "content": "# CountDownLatch\n\n> 我们经常在主线程中开启多个线程去并行任务，并且主线程需要等待所有子线程执行完毕后再进行汇总的场景。知道你们要说 join，但是 join 不够灵活。\n\n面试官：讲讲 CountDownLatch 原理\n\n我：我试试\n\n## 原理\n\n首先状态变量 state：**state 用来表示计数器当前的值**，当线程调用 CountDownLatch 对象的 await 方法后， 当前线程会被阻塞，直到下面的情况之一发生才返回：当所有线程都调用了 CountDownLatch 对象的 countDown 方法后，也就是**计数器的值为 0**时：其他线程调用了**当前线程的 interrupt()方法中断了当前线程**，当前线程就会抛出 InterruptedException 异常。\n\n## 方法\n\n所以，我们看一下 await 方法：\n\n```java\npublic final void acquireSharedInterruptibly(int arg)\n    throws InterruptedException {\n    if (Thread.interrupted()) // 线程可中断\n        throw new InterruptedException();\n    if (tryAcquireShared(arg) < 0) // 如果等于-1， 说明还在挂起\n        doAcquireSharedInterruptibly(arg);\n}\nprotected int tryAcquireShared(int acquires) {\n    return (getState() == 0) ? 1 : -1; // 如果为0，则返回1，不为0，则返回-1\n}\n```\n\n看一下 countDown 方法：\n\n```java\npublic final boolean releaseShared(int arg) {\n    if (tryReleaseShared(arg)) {\n        doReleaseShared(); // 激活被阻塞的线程\n        return true;\n    }\n    return false;\n}\nprotected boolean tryReleaseShared(int releases) { // 尝试释放锁\n    // Decrement count; signal when transition to zero\n    for (;;) {\n        int c = getState();\n        if (c == 0)\n            return false; // 如果等于0， 返回false，不用释放\n        int nextc = c-1;\n        if (compareAndSetState(c, nextc)) // 更新state\n            return nextc == 0; // nextc如果等于0了，说明资源释放成功，但是不管成功与否，都会退出循环\n        // 并且去激活被await阻塞的线程\n    }\n}\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 89,
        "like_count": 84
    },
    {
        "id": 95,
        "tag_id": 1,
        "tag_type": 1,
        "title": "57.线程池的优点",
        "content": "面试官：为啥子采用线程池？有什么优点？\n\n我：我大概分为 3 点\n\n- **降低资源消耗**：通过重复利用已创建的线程降低线程创建和销毁造成的消耗。\n- **提高响应速度**：当任务到达时，任务可以不需要要等到线程创建就能立即执行。\n- **提高线程的可管理性**：线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 150,
        "like_count": 60
    },
    {
        "id": 72,
        "tag_id": 1,
        "tag_type": 1,
        "title": "58.都了解哪些线程池",
        "content": "面试官：都了解哪些线程池？\n\n我：我暂时知道的一些的如：**newFixedThreadPool**（固定线程池）、**newSingleThreadExecutor**（单个线程的线程池）、**newCachedThreadPool**（缓存线程的线程池）、**newScheduledThreadPool**（带定时器的线程池），还有几个就不说了。\n\n我就举点源码吧\n\n**newFixedThreadPool**:\n\n```java\n// core和max是一样的\n// blockQueue是无界阻塞队列\n// 嗯， 不好不好！！！\npublic static ExecutorService newFixedThreadPool(int nThreads) {\n    return new ThreadPoolExecutor(nThreads, nThreads,\n                                  0L, TimeUnit.MILLISECONDS,\n                                  new LinkedBlockingQueue<Runnable>());\n}\n```\n\n**newSingleThreadExecutor**\n\n```java\n// core和max无非都是1而已\n// blockQueue是无界阻塞队列\n// 嗯， 不好不好！！！\npublic static ExecutorService newSingleThreadExecutor() {\n    return new FinalizableDelegatedExecutorService\n        (new ThreadPoolExecutor(1, 1,\n                                0L, TimeUnit.MILLISECONDS,\n                                new LinkedBlockingQueue<Runnable>()));\n}\n```\n\n**newCachedThreadPool**:\n\n```java\n// core 0\n// max有点狠，不怕暴栈？\n// 队列还是SynchronousQueue，还真怕\npublic static ExecutorService newCachedThreadPool() {\n    return new ThreadPoolExecutor(0, Integer.MAX_VALUE,\n                                  60L, TimeUnit.SECONDS,\n                                  new SynchronousQueue<Runnable>());\n}\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 393,
        "like_count": 96
    },
    {
        "id": 165,
        "tag_id": 1,
        "tag_type": 1,
        "title": "59.聊一聊ThreadPoolExecutor",
        "content": "# 线程池参数\n\n面试官：讲一下线程池的参数？\n\n我：没问题，`ThreadPoolExecutor` 源码走起：\n\n```java\npublic ThreadPoolExecutor(int corePoolSize,\n                          int maximumPoolSize,\n                          long keepAliveTime,\n                          TimeUnit unit,\n                          BlockingQueue<Runnable> workQueue,\n                          ThreadFactory threadFactory,\n                          RejectedExecutionHandler handler)\n```\n\n- corePoolSize：核心线程数线程数定义了最小可以同时运行的线程数量\n- maximumPoolSize：当队列中存放的任务达到队列容量的时候，当前可以同时运行的线程数量变为最大线程数\n- keepAliveTime：当线程数大于核心线程数时，多余的空闲线程存活的最长时间\n- TimeUnit：时间单位\n- BlockingQueue<Runnable>：当新任务来的时候会先判断当前运行的线程数量是否达到核心线程数，如果达到的话，信任就会被存放在队列中\n- ThreadFactory：线程工厂，用来创建线程，一般默认即可\n- RejectedExecutionHandler：拒绝策略\n\n![线程池参数关系-echEyV](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/线程池参数关系-echEyV.png)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 279,
        "like_count": 63
    },
    {
        "id": 146,
        "tag_id": 1,
        "tag_type": 1,
        "title": "60.线程池的拒绝策略",
        "content": "面试官：讲一下都有哪些线程池中的一些拒绝策略\n\n我：还好我提前准备\n\n- AbortPolicy：抛出 `RejectedExecutionException`来拒绝新任务的处理。\n- CallerRunsPolicy：调用执行自己的线程运行任务。您不会任务请求。但是这种策略会降低对于新任务提交速度，影响程序的整体性能。另外，这个策略喜欢增加队列容量。如果您的应用程序可以承受此延迟并且你不能任务丢弃任何一个任务请求的话，你可以选择这个策略。（说白了，谁管理任务的，谁就负责帮忙）\n- DiscardPolicy：不处理新任务，直接丢弃掉。\n- DiscardOldestPolicy：此策略将丢弃最早的未处理的任务请求。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 110,
        "like_count": 30
    },
    {
        "id": 163,
        "tag_id": 1,
        "tag_type": 1,
        "title": "61.线程池的线程数量怎么确定",
        "content": "面试官：线程池的线程数量怎么确定\n\n我：分情况，一般来说...\n\n1. 一般来说，如果是 CPU 密集型应用，则线程池大小设置为 N+1。\n2. 一般来说，如果是 IO 密集型应用，则线程池大小设置为 2N+1。\n3. 在 IO 优化中，线程等待时间所占比例越高，需要越多线程，线程 CPU 时间所占比例越高，需要越少线程。这样的估算公式可能更适合：最佳线程数目 = （（线程等待时间+线程 CPU 时间）/线程 CPU 时间 ）\\\\* CPU 数目\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 297,
        "like_count": 55
    },
    {
        "id": 167,
        "tag_id": 1,
        "tag_type": 1,
        "title": "62.shutdown和shutdownNow",
        "content": "# shutdown 和 shutdownNow\n\n面试官：shutdown 和 shutdownNow 的区别\n\n我：上源码：\n\n```java\n// 等待所有线程执行任务完毕之后退出\npublic void shutdown() {\n    final ReentrantLock mainLock = this.mainLock;\n    // 获取锁\n    mainLock.lock();\n    try {\n        // 检查\n        checkShutdownAccess();\n        // 设置状态\n        advanceRunState(SHUTDOWN);\n        interruptIdleWorkers();\n        onShutdown(); // hook for ScheduledThreadPoolExecutor\n    } finally {\n        mainLock.unlock();\n    }\n    // 主要在于这里，根据状态来是否立马停止还是等线程执行完毕过后停止\n    tryTerminate(); // 这里就不贴了\n}\n// 和上面的差不多，立马中断所有线程，关闭线程池\npublic List<Runnable> shutdownNow() {\n    List<Runnable> tasks;\n    final ReentrantLock mainLock = this.mainLock;\n    mainLock.lock();\n    try {\n        checkShutdownAccess();\n        // 设置状态\n        advanceRunState(STOP);\n        interruptWorkers();\n        tasks = drainQueue();\n    } finally {\n        mainLock.unlock();\n    }\n    tryTerminate();\n    return tasks;\n}\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 182,
        "like_count": 28
    },
    {
        "id": 105,
        "tag_id": 1,
        "tag_type": 1,
        "title": "63.execute和submit的区别",
        "content": "面试官：execute 和 submit 的区别\n\n我：心累\n\n```java\n// execute\npublic void execute(Runnable command) {\n    if (command == null)\n        throw new NullPointerException();\n    // 1.如果正在运行的线程少于corePoolSize线程，请尝试使用给定命令作为其第一个任务来启动新线程。\n\t// 对addWorker的调用从原子上检查runState和workerCount，从而通过返回false来防止在不应该添加线程的情况下发出虚假警报。\n    // 2.如果一个任务可以成功排队，那么我们仍然需要仔细检查是否应该添加一个线程（因为现有线程自上次检查后就死掉了）或该池自进入该方法后就关闭了。\n    // 因此，我们重新检查状态，并在必要时回滚排队（如果已停止），或者在没有线程时启动一个新线程。\n    // 3.如果我们无法将任务排队，则尝试添加一个新线程。\n\t// 如果失败，我们知道我们已关闭或已饱和，因此拒绝该任务。\n    // 总结：说白了，就是上面的流程图\n    int c = ctl.get();\n    if (workerCountOf(c) < corePoolSize) {\n        if (addWorker(command, true))\n            return;\n        c = ctl.get();\n    }\n    if (isRunning(c) && workQueue.offer(command)) {\n        int recheck = ctl.get();\n        if (! isRunning(recheck) && remove(command))\n            reject(command);\n        else if (workerCountOf(recheck) == 0)\n            addWorker(null, false);\n    }\n    else if (!addWorker(command, false))\n        reject(command);\n}\n\n//不过传递的参数，Runnable，那么就意味着没有返回值\n// 简单看一下submit吧。\n// 不必多说了\n<T> Future<T> submit(Callable<T> task);\nFuture<?> submit(Runnable task);\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 67,
        "like_count": 51
    },
    {
        "id": 169,
        "tag_id": 1,
        "tag_type": 1,
        "title": "64.实现生产者和消费者",
        "content": "# synchronized\n\n```java\npublic class Test {\n    private final LinkedList<String> lists = new LinkedList<>();\n    public synchronized void put(String s) {\n        while (lists.size() != 0) { // 用while怕有存在虚拟唤醒线程\n            // 满了， 不生产了\n            try {\n                this.wait();\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n        lists.add(s);\n        System.out.println(Thread.currentThread().getName() + \\\" \\\" + lists.peekFirst());\n        this.notifyAll(); // 这里可是通知所有被挂起的线程，包括其他的生产者线程\n    }\n    public synchronized void get() {\n        while (lists.size() == 0) {\n            try {\n                this.wait();\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n        System.out.println(Thread.currentThread().getName() + \\\" \\\" + lists.removeFirst());\n        this.notifyAll(); // 通知所有被wait挂起的线程  用notify可能就死锁了。\n    }\n    public static void main(String[] args) {\n        Test test = new Test();\n        // 启动消费者线程\n        for (int i = 0; i < 5; i++) {\n            new Thread(test::get, \\\"ConsA\\\" + i).start();\n        }\n        // 启动生产者线程\n        for (int i = 0; i < 5; i++) {\n            int tempI = i;\n            new Thread(() -> {\n                test.put(\\\"\\\" + tempI);\n            }, \\\"ProdA\\\" + i).start();\n        }\n    }\n}\n```\n\n这里讲一下为什么用 while，不用 if？\n\n假如，此时队列元素为空，那么消费者肯定都挂起来了哈。在挂起前通知了生产者线程去生产，那么，生产者产了一个之后唤醒消费者，所有消费者醒了以后，就一个消费者抢到锁，开始消费，当消费过后释放锁，其他消费者线程的某一个抢到锁之后，从唤醒处走代码，如果是 if，往下走取元素发现队列空的，直接抛异常。如果是 while 的话，还会继续判断队列是否为空，空就挂起。不会抛异常。\n\n# ReentrantLock\n\n```java\npublic class Test {\n    private LinkedList<String> lists = new LinkedList<>();\n    private Lock lock = new ReentrantLock();\n    private Condition prod = lock.newCondition();\n    private Condition cons = lock.newCondition();\n    public void put(String s) {\n        lock.lock();\n        try {\n            // 1. 判断\n            while (lists.size() != 0) {\n                // 只要队列有元素，就不生产了，就停会儿\n                prod.await();\n            }\n            // 2.干活\n            lists.add(s);\n            System.out.println(Thread.currentThread().getName() + \\\" \\\" + lists.peekFirst());\n            // 3. 通知\n            cons.signalAll();\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            lock.unlock();\n        }\n    }\n    public void get() {\n        lock.lock();\n        try {\n            // 1. 判断\n            while (lists.size() == 0) {\n                // 队列为空，消费者肯定等待呀\n                cons.await();\n            }\n            // 2.干活\n            System.out.println(Thread.currentThread().getName() + \\\" \\\" + lists.removeFirst());\n            // 3. 通知\n            prod.signalAll();\n        } catch (Exception e) {\n            e.printStackTrace();\n        } finally {\n            lock.unlock();\n        }\n    }\n    public static void main(String[] args) {\n        Test test = new Test();\n        for (int i = 0; i < 5; i++) {\n            int tempI = i;\n            new Thread(() -> {\n                test.put(tempI + \\\"\\\");\n            }, \\\"ProdA\\\" + i).start();\n        }\n        for (int i = 0; i < 5; i++) {\n            new Thread(test::get, \\\"ConsA\\\" + i).start();\n        }\n    }\n}\n```\n\n# BlockingQueue\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        ArrayBlockingQueue<Object> queue = new ArrayBlockingQueue<>(10);\n        // 生产者\n        Runnable product = () -> {\n            while (true) {\n                try {\n                    String s = \\\"生产者：\\\" + Thread.currentThread().getName() + \\\" \\\"+ new Object();\n                    System.out.println(s);\n                    queue.put(s);\n                    TimeUnit.SECONDS.sleep(1);\n                } catch (InterruptedException e) {\n                    e.printStackTrace();\n                }\n            }\n        };\n        new Thread(product, \\\"p1\\\").start();\n        new Thread(product, \\\"p2\\\").start();\n        // 消费者\n        Runnable consume = () -> {\n            while (true) {\n                try {\n                    Object o = queue.take();\n                    System.out.println(\\\"消费者：\\\" + Thread.currentThread().getName() + \\\" \\\" + o);\n                    TimeUnit.SECONDS.sleep(1);\n                } catch (InterruptedException e) {\n                    e.printStackTrace();\n                }\n            }\n        };\n        new Thread(consume, \\\"c1\\\").start();\n        new Thread(consume, \\\"c2\\\").start();\n    }\n}\n```\n\n利用 BlockingQueue 实现生产者消费者模式的代码。虽然代码非常简单，但实际上 ArrayBlockingQueue 已经在背后完成了很多工作，比如队列满了就去阻塞生产者线程，队列有空就去唤醒生产者线程等。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 102,
        "like_count": 80
    },
    {
        "id": 125,
        "tag_id": 1,
        "tag_type": 1,
        "title": "65.BlockingQueue的一些问题",
        "content": "# BlockingQueue\n\n看一下官方 1.8 的官方文档 ps: 图过期了...\n官方文档告诉我们它们有这些特点:\n\n- BlockingQueue 实现被设计为主要用于生产者 - 消费者队列\n- BlockingQueue 实现是线程安全的。 所有排队方法使用内部锁或其他形式的并发控制在原子上实现其效果。\n- BlockingQueue 方法有四种形式，具有不同的操作方式，不能立即满足，但可能在将来的某个时间点满足：\n  - 一个抛出异常\n  - 返回一个特殊值（ null 或 false ，具体取决于操作）\n  - 第三个程序将无限期地阻止当前线程，直到操作成功为止\n  - 在放弃之前只有给定的最大时限。\n\n## 看源码之旅\n\n### ArrayBlockingQueue\n\n> 看一下官方文档的解释->一个有限的 blocking queue 由数组支持。 这个队列排列元素 FIFO（先进先出）。 队列的头部是队列中最长的元素。 队列的尾部是队列中最短时间的元素。 新元素插入队列的尾部，队列检索操作获取队列头部的元素。这是一个经典的“有界缓冲区”，其中固定大小的数组保存由生产者插入的元素并由消费者提取。 创建后，容量无法更改。 尝试 put 成满的队列的元件将导致在操作阻挡; 尝试 take 从空队列的元件将类似地阻塞。此类支持可选的公平策略，用于订购等待的生产者和消费者线程。 默认情况下，此订单不能保证。 然而，以公平设置为 true 的队列以 FIFO 顺序授予线程访问权限。 公平性通常会降低吞吐量，但会降低变异性并避免饥饿。\n\n#### 常见变量\n\n```java\nint count;  // 队列元素数量\nfinal ReentrantLock lock; // 内部线程安全性用了ReentrantLock\nprivate final Condition notEmpty; // takes方法的等待条件\nprivate final Condition notFull;  // puts方法的等待条件\n```\n\n#### 构造方法\n\n```java\npublic ArrayBlockingQueue(int capacity, boolean fair) {\n    if (capacity <= 0)\n        throw new IllegalArgumentException(); // 这里就不说了\n    this.items = new Object[capacity]; // 初始容量\n    lock = new ReentrantLock(fair); // fair参数决定是否公平锁\n    notEmpty = lock.newCondition(); // 上面已提到\n    notFull =  lock.newCondition(); // 上面已提到\n}\n```\n\n#### add\n\n```java\npublic boolean add(E e) {\n    return super.add(e); // 该方法添加失败抛出异常\n}\n// AbstractQueue\npublic boolean add(E e) {\n    if (offer(e))\n        return true;\n    else\n        throw new IllegalStateException(\\\"Queue full\\\"); // 在这\n}\n```\n\n**remove 就不分析了**\n\n#### offer\n\n```java\npublic boolean offer(E e) {\n    checkNotNull(e);\n    final ReentrantLock lock = this.lock; // 上面的add其实内部也调用了offer，当时我还觉得奇怪，add没上锁？。 原来offer上了锁的\n    lock.lock();\n    try {\n        if (count == items.length)\n            return false; // 满了，就false\n        else {\n            enqueue(e); // 否则，添加即可\n            return true; // 返回true，并不会抛出异常\n        }\n    } finally {\n        lock.unlock();\n    }\n}\n```\n\n**poll 不分析了**\n\n#### put\n\n```java\npublic void put(E e) throws InterruptedException {\n    checkNotNull(e); // 检查是否为空，为空就抛出空异常\n    final ReentrantLock lock = this.lock; // 上锁哦\n    lock.lockInterruptibly(); // 锁中断\n    try {\n        while (count == items.length) // 满了，挂起阻塞\n            notFull.await();\n        enqueue(e); // 否则添加\n    } finally {\n        lock.unlock();\n    }\n}\n```\n\n#### take\n\n```java\npublic E take() throws InterruptedException {\n    final ReentrantLock lock = this.lock; // 上锁\n    lock.lockInterruptibly(); // 锁中断\n    try {\n        while (count == 0)\n            notEmpty.await(); // 没有元素，挂起\n        return dequeue();\n    } finally {\n        lock.unlock();\n    }\n}\n```\n\n#### 带时间的 offer 和 poll\n\n> 其实就是用了`long nanos = unit.toNanos(timeout);`\n\n### LinkedBlockingQueue\n\n> 四个方法和 ArrayBlockingQueue 的差不多，就不多分析了。它的特点之一在于，如果不指定容量，那么默认是等于 Integer.MAX_VALUE。可以看一下源码\n\n#### 常见的参数\n\n```java\n/** The capacity bound, or Integer.MAX_VALUE if none */\nprivate final int capacity; // 一看注释，就晓得了\n// 还有一些常见的和上面的差不多\n```\n\n#### 构造方法\n\n```java\npublic LinkedBlockingQueue() {\n    this(Integer.MAX_VALUE); // 在这里， 嘿嘿嘿。\n}\n```\n\n### LinkedTransferQueue\n\n> 基于链接节点的无界 TransferQueue 。 这个队列相对于任何给定的生产者订购元素 FIFO（先进先出）。 队列的头部是那些已经排队的元素是一些生产者的最长时间。 队列的尾部是那些已经在队列上的元素是一些生产者的最短时间。\n\n**四个方法就暂时不提了，大部分操作用了 cas 并且要关注 transfer 方法**\n\n先介绍几个标志参数：\n\n```java\nprivate static final int NOW   = 0; // for untimed poll, tryTransfer\nprivate static final int ASYNC = 1; // for offer, put, add\nprivate static final int SYNC  = 2; // for transfer, take\nprivate static final int TIMED = 3; // for timed poll, tryTransfer\n```\n\n```java\n// 如果可能，立即将元素转移到等待的消费者。\npublic boolean tryTransfer(E e) {\n    return xfer(e, true, NOW, 0) == null; // xfer的now参数\n}\n// 还有一个重载参数的，带时间的。\n```\n\n```java\n// 将元素传输到消费者，必要时等待。\npublic void transfer(E e) throws InterruptedException {\n    if (xfer(e, true, SYNC, 0) != null) { // SYNC\n        Thread.interrupted(); // failure possible only due to interrupt\n        throw new InterruptedException();\n    }\n}\n```\n\n### PriorityBlockingQueue\n\n> 一看名字就是优先级阻塞队列，它的优先级是由堆实现的，所以该类中有很多堆的方法。源码暂时就不看了，很多都是差不多的。\n\n### SynchronousQueue\n\n> 官方文档：每个插入操作必须等待另一个线程相应的删除操作，反之亦然。 同步队列没有任何内部容量，甚至没有一个容量。 个人感觉是生产者生产一个元素，消费者必须消费，生产者才能继续生产。内部也维护了一个 TransferQueue，其中部分操作是利用 cas。源码就不贴了。有兴趣的可以进去看看哦。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 234,
        "like_count": 83
    },
    {
        "id": 108,
        "tag_id": 1,
        "tag_type": 1,
        "title": "66.开启10个线程，每个线程对同一个变量进行1000次加1操作",
        "content": "# 举个多线程的小例子\n\n> 开启 10 个线程，每个线程对同一个变量进行 1000 次加 1 操作。\n\n## V1\n\n```java\npublic class Test {\n    int count;\n    void m() {\n        for(int i = 0; i < 1000; i++) {\n            count++;\n        }\n    }\n    public static void main(String[] args) {\n        Test t1 = new Test();\n        for (int i = 0; i < 10; i++){\n            new Thread(t1::m, \\\"Thread \\\" + i).start();\n        }\n        // 等待完成，这里有多种方式...\n        try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }\n        System.out.println(t1.count);\n    }\n}\n// 运行结果\n// 9378\n// 想知道原因，得需要知道Java内存模型...\n```\n\n## V2(volatile)\n\n```java\npublic class Test {\n    volatile int count;\n    void m() {\n        for(int i = 0; i < 1000; i++) {\n            count++;\n        }\n    }\n    public static void main(String[] args) {\n        Test t1 = new Test();\n        for (int i = 0; i < 10; i++){\n            new Thread(t1::m, \\\"Thread \\\" + i).start();\n        }\n        // 等待完成，这里有多种方式...\n        try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }\n        System.out.println(t1.count);\n    }\n}\n```\n\ncount++是非原子性操作，即使使用 volatile 保证内存可见性，但是无法保证原子性，因此，还是凉凉\n\n## V3(synchronized)\n\n```java\npublic class Test {\n    int count;\n    synchronized void m() {\n        for(int i = 0; i < 1000; i++) {\n            count++;\n        }\n    }\n    public static void main(String[] args) {\n        Test t1 = new Test();\n        for (int i = 0; i < 10; i++){\n            new Thread(t1::m, \\\"Thread \\\" + i).start();\n        }\n        // 等待完成，这里有多种方式...\n        try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }\n        System.out.println(t1.count);\n    }\n}\n```\n\n这里可以得到线程安全同步，但是效率似乎有点慢，毕竟这个操作是自增。\n\n## V4(CAS)\n\n```java\npublic class Test {\n    AtomicInteger count = new AtomicInteger(0);\n    void m() {\n        count.incrementAndGet();\n    }\n    public static void main(String[] args) {\n    Test t1 = new Test();\n    for (int i = 0; i < 10; i++){\n        new Thread(t1::m, \\\"Thread \\\" + i).start();\n    }\n    // 等待完成，这里有多种方式...\n    try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }\n    System.out.println(t1.count);\n  }\n}\n```\n\n像 Volatile、synchronized、CAS 稍后再说...\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 310,
        "like_count": 67
    },
    {
        "id": 74,
        "tag_id": 1,
        "tag_type": 1,
        "title": "67.类文件结构",
        "content": "> 不经常考，但得了解\n\n## 类文件结构\n\n```java\nClassFile {\n    u4             magic; //Class 文件的标志\n    u2             minor_version;//Class 的小版本号\n    u2             major_version;//Class 的大版本号\n    u2             constant_pool_count;//常量池的数量\n    cp_info        constant_pool[constant_pool_count-1];//常量池\n    u2             access_flags;//Class 的访问标记\n    u2             this_class;//当前类\n    u2             super_class;//父类\n    u2             interfaces_count;//接口\n    u2             interfaces[interfaces_count];//一个类可以实现多个接口\n    u2             fields_count;//Class 文件的字段属性\n    field_info     fields[fields_count];//一个类会可以有个字段\n    u2             methods_count;//Class 文件的方法数量\n    method_info    methods[methods_count];//一个类可以有个多个方法\n    u2             attributes_count;//此类的属性表中的属性数\n    attribute_info attributes[attributes_count];//属性表集合\n}\n```\n\n## 静态常量池\n\n- 字面量\n- 符号引用\n  - 类和接口的全限定名\n  - 字段的名称和描述符\n  - 方法的名称和描述符\n- 好处：**常量池是为了避免频繁的创建和销毁对象而影响系统性能，其实现了对象的共享**。\n\n## 运行时常量池\n\n当 Class 文件被加载完成后，java 虚拟机会将静态常量池里的内容转移到运行时常量池里，在静态常量池的**符号引用有一部分是会被转变为直接引用**的，比如说类的**静态方法或私有方法，实例构造方法，父类方法**，这是因为这些方法不能被重写其他版本，所以能在加载的时候就可以将符号引用转变为直接引用，而其他的**一些方法是在这个方法被第一次调用的时候才会将符号引用转变为直接引用的**。\n\n## 字符串常量池\n\n**字符串常量池的存在使 JVM 提高了性能和减少了内存开销**。\n\n- 每当我们使用字面量（String s=“1”;）创建字符串常量时，JVM 会首先检查字符串常量池，如果该字符串已经存在常量池中，那么就将此字符串对象的地址赋值给引用 s（引用 s 在 Java 栈。如果字符串不存在常量池中，就会实例化该字符串并且将其放到常量池中，并将此字符串对象的地址赋值给引用 s（引用 s 在 Java 栈中）。\n- 每当我们使用关键字 new（String s=new String(”1”);）创建字符串常量时，JVM 会首先检查字符串常量池，如果该字符串已经存在常量池中，那么不再在字符串常量池创建该字符串对象，而直接堆中创建该对象的副本，然后将堆中对象的地址赋值给引用 s，如果字符串不存在常量池中，就会实例化该字符串并且将其放到常量池中，然后在堆中创建该对象的副本，然后将堆中对象的地址赋值给引用 s。\n\n## 版本变化\n\n### 1.6\n\n- 静态常量池在 Class 文件中。\n- 运行时常量池在 Perm Gen 区(也就是方法区)中。\n- 字符串常量池在运行时常量池中。\n\n### 1.7\n\n- 静态常量池在 Class 文件中。\n- 运行时常量池依然在 Perm Gen 区(也就是方法区)中。在 JDK7 版本中，永久代的转移工作就已经开始了，将譬如符号引用转移到了 native heap；字面量转移到了 java heap；类的静态变量转移到了 java heap。但是运行时常量池依然还存在，只是很多内容被转移，其只存着这些被转移的引用。\n- 字符串常量池被分配到了 Java 堆的主要部分。也就是字符串常量池从运行时常量池分离出来了。\n\n### 1.8\n\n- 静态常量池在 Class 文件中。\n- JVM 已经将运行时常量池从方法区中移了出来，在 Java 堆（Heap）中开辟了一块区域存放运行时常量池。同时永久代被移除，以元空间代替。元空间并不在虚拟机中，而是使用本地内存。因此，默认情况下，元空间的大小仅受本地内存限制。其主要用于存放一些元数据。\n- 字符串常量池存在于 Java 堆中。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 390,
        "like_count": 16
    },
    {
        "id": 142,
        "tag_id": 1,
        "tag_type": 1,
        "title": "68.类加载过程",
        "content": "# 类加载过程\n\n面试官：谈一谈类加载过程\n\n我：加载->验证->准备->解析->初始化\n\n![类加载过程-mAkEY8](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/类加载过程-mAkEY8.png)\n\n## 加载\n\n类加载过程的第一步，主要完成下面 3 件事情：\n\n- 通过**全类名**获取定义此类的**二进制字节流**\n- 将字节流所代表的**静态存储结构**转换为方法区的**运行时数据结构**\n- 在内存中生成一个代表该类的 **Class 对象**,作为**方法区这些数据的访问入口**\n\n## 验证\n\n- 文件格式验证：主要验证 Class 文件**是否规范**等。\n- 元数据验证：对字节码描述的信息**语义分析**等。\n- 字节码验证：确保语义是 ok 的。\n- 符号引用验证：确保解析动作能执行。\n\n## 准备\n\n**准备阶段是正式为类变量分配内存并设置类变量初始值的阶段**，这些内存都将在方法区中分配。对于该阶段有以下几点需要注意：\n\n- 这时候进行内存分配的仅包括**类变量**（static），而不包括实例变量，实例变量会在对象实例化时随着对象一块分配在 Java 堆中。\n- 这里所设置的初始值\\\"通常情况\\\"下是数据类型默认的**零值**（如 0、0L、null、false 等），比如我们定义了`public static int value=111` ，那么 value 变量在准备阶段的初始值就是 0 而不是 111（初始化阶段才会复制）。特殊情况：比如给 value 变量加上了 **fianl 关键字**`public static final int value=111` ，那么准备阶段 value 的值就被复制为 111。\n\n## 解析\n\n解析阶段是虚拟机将常量池内的**符号引用替换为直接引用**的过程，也就是得到**类或者字段、方法在内存中的指针或者偏移量。**\n\n## 初始化\n\n初始化是类加载的最后一步，也是真正执行类中定义的 **Java 程序代码**(字节码)，初始化阶段是执行**类构造器** `<clinit> ()`方法的过程。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 414,
        "like_count": 12
    },
    {
        "id": 131,
        "tag_id": 1,
        "tag_type": 1,
        "title": "69.聊一聊类加载器",
        "content": "## 类加载器\n\n面试官：谈谈类加载器吧\n\n我：行，那还不得介绍三个类加载器？\n\n- BootstrapClassLoader(启动类加载器)：最顶层的加载类，由 C++实现，负责加载 `%JAVA_HOME%/lib`目录下的 jar 包和类或者或被 `-Xbootclasspath`参数指定的路径中的所有类。\n- ExtensionClassLoader(扩展类加载器)：主要负责加载目录 `%JRE_HOME%/lib/ext` 目录下的 jar 包和类，或被 `java.ext.dirs` 系统变量所指定的路径下的 jar 包。\n- AppClassLoader(应用程序类加载器)\n\n## 双亲委派\n\n我可能直接扯双亲委派了\n\n每一个类都有一个对应它的类加载器。系统中的 ClassLoder 在协同工作的时候会默认使用 **双亲委派模型** 。即在类加载的时候，**系统会首先判断当前类是否被加载过**。已经被加载的类会直接返回，否则才会尝试加载。加载的时候，首先会把该请求**委派该父类加载器**的 `loadClass()` 处理，因此所有的请求最终都应该传送到顶层的启动类加载器 `BootstrapClassLoader` 中。当父类加载器无法处理时，才由自己来处理。当父类加载器为 null 时，会使用启动类加载器 `BootstrapClassLoader` 作为父类加载器。\n\n![类加载器-suJzjH](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/类加载器-suJzjH.png)\n\n可以按图说话\n\n我可能主动的扯好处了\n\n双亲委派模型保证了**Java 程序的稳定运行，可以避免类的重复加载**，也保证了 **Java 的核心 API 不被篡改**。如果没有使用双亲委派模型，而是每个类加载器加载自己的话就会出现一些问题，比如我们编写一个称为 `java.lang.Object` 类的话，那么程序运行的时候，系统就会出现多个不同的 `Object` 类。\n\n面试官：什么情况下需要开始类加载过程的第一个阶段加载\n\n我：\n\n1. 遇到**new**、**getstatic**、**putstatic**或**invokestatic**这 4 条字节码指令时，如果类没有进行过初始化，则需要先触发其初始化。生成这 4 条指令的最常见的 Java 代码场景是：\n2. 使用 new 关键字实例化对象的时候、读取或设置一个类的静态字段（被 final 修饰、已在编译期把结果放入常量池的静态字段除外）的时候，以及调用一个类的静态方法的时候。\n3. 使用 java.lang.reflect 包的方法对类进行反射调用的时候，如果类没有进行过初始化，则需要先触发其初始化。\n4. 当初始化一个类的时候，如果发现其父类还没有进行过初始化，则需要先触发其父类的初始化。\n5. 当虚拟机启动时，用户需要指定一个要执行的主类（包含 main（）方法的那个类），虚拟机会先初始化这个主类。\n\n面试官：如何打破双亲委派模型\n\n我：需要重写 ClassLoader 类的 loadClass()方法：\n\n```java\n// 其实重写该方法就行，但是打破可能会报错，系统找不到路径\n// 父类的加载（Object）也会交由我们自自定义的类加载器加载。而很明显在我们自定义的加载目录下是不会有Object.class这个文件的。\nprotected Class<?> loadClass(String name, boolean resolve)\n        throws ClassNotFoundException\n    {\n        synchronized (getClassLoadingLock(name)) {\n            // First, check if the class has already been loaded\n            Class<?> c = findLoadedClass(name);\n            if (c == null) {\n                long t0 = System.nanoTime();\n                try {\n                    if (parent != null) {\n                        c = parent.loadClass(name, false); // 调用父类的加载器 递归\n                    } else {\n                        c = findBootstrapClassOrNull(name);\n                    }\n                } catch (ClassNotFoundException e) {\n                    // ClassNotFoundException thrown if class not found\n                    // from the non-null parent class loader\n                }\n\n                if (c == null) {\n                    // If still not found, then invoke findClass in order\n                    // to find the class.\n                    long t1 = System.nanoTime();\n                    c = findClass(name);\n\n                    // this is the defining class loader; record the stats\n                    sun.misc.PerfCounter.getParentDelegationTime().addTime(t1 - t0);\n                    sun.misc.PerfCounter.getFindClassTime().addElapsedTimeFrom(t1);\n                    sun.misc.PerfCounter.getFindClasses().increment();\n                }\n            }\n            if (resolve) {\n                resolveClass(c);\n            }\n            return c;\n        }\n    }\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 270,
        "like_count": 5
    },
    {
        "id": 127,
        "tag_id": 1,
        "tag_type": 1,
        "title": "70.讲一讲JVM内存区域",
        "content": "# JVM 内存区域\n\n> JVM 这一块，经常还是经常被问到的\n\n面试官：讲一讲 JVM 内存区域\n\n我：行，先放两张图\n\n![JVM内存模型-1.8之前-NFvh0E](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/JVM内存模型-1.8之前-NFvh0E.png)\n\n![JVM内存模型-1.8-JjjMHV](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/JVM内存模型-1.8-JjjMHV.png)\n\n总体来说，粗略的分为**堆和栈**，那么**栈是线程私有的**，而**堆是线程共享的**。那么**栈**又问分为**程序计数器**，**虚拟机栈**，**本地方法栈**。堆稍后再说，当然还有**方法区**，稍后单独说。\n\n## 程序计数器\n\n- **字节码解释器通过改变程序计数器来依次读取指令，从而实现代码的流程控制**，如：顺序执行、选择、循环、异常处理。\n- 在多线程的情况下，**程序计数器用于记录当前线程执行的位置**，**从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了**。\n- **程序计数器是唯一一个不会出现 OutOfMemoryError 的内存区域**，它的生命周期随着线程的创建而创建，随着线程的结束而死亡\n\n## 虚拟机栈\n\n- 说白了，通俗的讲，主要是**对象中的方法产生的各种\\\"材料\\\"**。\n- 因此，虚拟机栈存放的是**局部变量表**、**操作数栈**、**动态链接**、**方法出口**。\n- 局部变量表存 8**大基本数据类型以及引用类型**。\n- 当然，栈也会非常 error：\n  - StackOverFlowError： 若 **Java 虚拟机栈的内存大小不允许动态扩展**，**那么当线程请求栈的深度超过当前 Java 虚拟机栈的最大深度的时候**，就抛出 StackOverFlowError 异常。\n  - OutOfMemoryError：若 **Java 虚拟机栈的内存大小允许动态扩展**，**且当线程请求栈时内存用完了**，**无法再动态扩展了**，此时抛出 OutOfMemoryError 异常。\n\n## 本地方法栈\n\n虚拟机栈为虚拟机执行 Java 方法 （也就是字节码）服务，而**本地方法栈则为虚拟机使用到的 Native 方法服务**，JDK 源码中很多本地方法哦。\n\n## 方法区\n\n这里单独说一下**方法区**：\n\n**方法区与 Java 堆一样，是各个线程共享的内存区域**，它用于存储已被虚拟机加载的**类信息**、**常量**、**静态变量**、即时编译器编译后的代码等数据。不过随着版本的变化，会发生变化。\n\n- 1.6:运行时常量池在 Perm Gen 区(也就是方法区)中；字符串常量池在**运行时常量池**中。\n- 1.7:运行时常量池依然在 Perm Gen 区(也就是方法区)中在 JDK7 版本中，永久代的转移工作就已经开始了，将譬如**符号引用转移到了 native heap**；**字面量转移到了 java heap**；**类的静态变量转移到了 java heap**。但是运行时常量池依然还存在，只是很多内容被转移，其只存着这些被转移的引用；字符串常量池被分配到了**Java 堆的主要部分**。也就是字符串常量池从运行时常量池分离出来了。\n- 1.8:JVM 已经将**运行时常量池从方法区中移了出来**，在**Java 堆（Heap）中开辟了一块区域存放运行时常量池**。同时永久代被移除，**以元空间代替**。**元空间并不在虚拟机中，而是使用本地内存**；**字符串常量池存在于 Java 堆中**。\n\n方法区，依然会发生 error，因为在之前的版本中，**当一个类启动的时候，也会加载很多 class 文件**，那么也会充满整个方法区，当满的时候，也会 error 的，当然，在以前的版本中，字符串常量池在方法区中，而**使用 String.intern()方法，依然会占满空间并 error**。\n\n## 直接内存\n\n**直接内存**并不是虚拟机运行时数据区的一部分，也不是虚拟机规范中定义的内存区域，但是这部分内存也被频繁地使用。而且也可能导致 OutOfMemoryError 异常出现（如**DirectByteBuffer**）。本机直接内存的分配不会受到 Java 堆的限制，但是，既然是内存就会受到本机总内存大小以及处理器寻址空间的限制。\n\n## 堆\n\n**堆**：此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例以及数组都在这里分配内存。\n\n- 分为四区，分别为 eden 区、s0(\\\"From)区、s1(\\\"To\\\")和 tentired\n- 在初始阶段，新创建的对象被分配到 Eden 区，survivor 的两块空间都为空。\n- 当 Eden 区满了的时候，minor GC 触发\n- 经过扫描与标记，存活的对象被复制到 S0，不存活的对象被回收\n- 在下一次的 Minor GC 中，Eden 区的情况和上面一致，没有引用的对象被回收，存活的对象被复制到 survivor 区。然而在 survivor 区，S0 的所有的数据都被复制到 S1，需要注意的是，在上次 minor GC 过程中移动到 S0 中的相同存活的对象在复制到 S1 后其年龄要加 1。此时 Eden 区 S0 区被清空，所有存活的数据都复制到了 S1 区，并且 S1 区存在着年龄不一样的对象（重点）\n- 再下一次 MinorGC 则重复这个过程，这一次 survivor 的两个区对换，存活的对象被复制到 S0，存活的对象年龄加 1，Eden 区和另一个 survivor 区被清空。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 212,
        "like_count": 27
    },
    {
        "id": 104,
        "tag_id": 1,
        "tag_type": 1,
        "title": "71.MinorGC和FullGC",
        "content": "# Minor GC 和 Full GC\n\n**Minor GC 和 Full GC 触发条件**：\n\n- Minor GC 触发条件：当 Eden 区满时，触发 Minor GC。\n- Full GC 触发条件：\n  1. 调用 System.gc 时，系统建议执行 Full GC，但是不必然执行\n  2. 老年代空间不足\n  3. **方法区**空间不足\n  4. 通过 Minor GC 后进入老年代的平均大小大于老年代的可用内存\n  5. 由 Eden 区、From Space 区向 To Space 区复制时，对象大小大于 To Space 可用内存，则把该对象转存到老年代，且老年代的可用内存小于该对象大小\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 247,
        "like_count": 65
    },
    {
        "id": 113,
        "tag_id": 1,
        "tag_type": 1,
        "title": "72.栈溢出",
        "content": "面试官：讲一下什么是栈溢出？\n\n- StackOverFlowError：**如果线程请求的栈深度大于虚拟机所允许的深度**，将抛出此异常。比如，**无限递归方法**，其实面试官按捺不住的问\n- OutOfMemoryError：**如果虚拟机在扩展栈时无法深浅到足够的内存空间**，将抛出异常。\n\n面试官：为什么无限递归方法就可以抛出该异常？\n\n我：因为我们知道，**每次调用方法所产生资源都存放在了虚拟机栈中**，如果无限递归下去，那岂不是？\n\n面试官：虚拟机栈存了什么资源？\n\n我：我真的是！虚拟机栈存了**局部变量表、操作数栈、动态链接和方法出口**。\n\n面试官：局部变量表中存了什么？\n\n我：啊？还好我会，存放了编译期可知的各种**基本数据类型(8 大基本类型)**，**对象引用类型**，它不等同于对象本身，可能是一个指向对象**起始地址的引用指针**，也可能是指向一个**代表对象的句柄或其他与此对象相关的位置**。\n\n## 栈溢出的小例子\n\n> 启动参数： `-Xms20m -Xmx20m -XX:+HeapDumpOnOutOfMemoryError`\n\n```java\npublic class Test {\n    public void m() {\n        System.out.println(\\\"stack test overflow...\\\");\n        m();\n    }\n    public static void main(String[] args) {\n        new T1().m();\n    }\n}\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 228,
        "like_count": 63
    },
    {
        "id": 71,
        "tag_id": 1,
        "tag_type": 1,
        "title": "73.堆溢出",
        "content": "面试官：好，开始讲堆溢出\n\n我：害能给我绕回来...如果**虚拟机可动态扩展，如果扩展时无法申请到足够的内存**，就会抛出 OutOfMemoryError 异常，当然，**如果在堆中没有内存完成实例分配，并且堆也无法再扩展时**，也会抛出该异常。比如，我又挖坑，举例子：无限创建线程。这次我主动说原因：操作系统分配给每个进程内存是有限的，比如 32 位的 windows 限制为 2G。虚拟机提供了参数来控制堆和方法区的内存的最大值，而剩下的内存，忽略其他因素，就由虚拟机栈和本地方法栈“瓜分天下了”。**每个线程分配到栈容越大，可以建立的线程数量自然就越少，建立线程时就越容易把剩下的内存耗尽。**\n\n---\n\n## 堆溢出例子\n\n> 启动参数：` -Xms20m -Xmx20m -XX:+HeapDumpOnOutOfMemoryError`\n\n```java\npublic class Test {\n    public static void main(String[] args) {\n        List<byte[]> list = new ArrayList<>();\n        int i = 0;\n        while (true) {\n            list.add(new byte[5*1024*1024]);\n            System.out.println(\\\"分配次数：\\\" + (++i));\n        }\n    }\n}\n```\n\n结果：\n\n```\n分配次数：1\n分配次数：2\n分配次数：3\njava.lang.OutOfMemoryError: Java heap space\nDumping heap to java_pid39413.hprof ...\nHeap dump file created [16921133 bytes in 0.013 secs]\nException in thread \\\"main\\\" java.lang.OutOfMemoryError: Java heap space\n\tat Test.Test.main(Test.java:18)\n```\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 246,
        "like_count": 63
    },
    {
        "id": 152,
        "tag_id": 1,
        "tag_type": 1,
        "title": "74.方法区会溢出",
        "content": "面试官：**嘿嘿，方法区会溢出吗？**\n\n我：嘿嘿，会。比如方法区中有一个**运行时常量池**，其中 String.intern()方法是一个 native 方法，它(1.6)的作用是：如果字符串常量池中已经包含了此 String 对象的字符串，则返回代表池中这个字符串 String 对象；**否则，将此 String 对象所包含的字符串添加到常量池中，并且返回此 String 对象的引用**。在 1.7 版本就不一样了，**而是从堆中实例 String 对象的引用复制到常量池并返回**。当然，还有很多带有**反射**机制的框架，大量使用反射创建类来填满方法区。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 343,
        "like_count": 100
    },
    {
        "id": 123,
        "tag_id": 1,
        "tag_type": 1,
        "title": "75.对象的创建过程",
        "content": "# 对象的创建过程\n\n面试官：类加载过程，你之前给我讲过，那么创建对象的过程你知道吗？\n\n我：我似乎知道。\n\n![Java创建对象的过程-pvlfKm](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/Java创建对象的过程-pvlfKm.png)\n\n## 类加载检查\n\n虚拟机遇到一条 **new** 指令时，首先将去检查这个指令的参数**是否能在常量池中定位到这个类的符号引用**，并且检查这个符号引用代表的**类是否已被加载过**、**解析和初始化过**。如果没有，那必须先执行相应的类加载过程。\n\n## 分配内存\n\n在**类加载检查**通过后，接下来虚拟机将为新生对象**分配内存**。对象所需的内存大小在类加载完成后便可确定，为对象分配空间的任务等同于把一块确定大小的内存从 Java 堆中划分出来。**分配方式**有 **“指针碰撞”** 和 **“空闲列表”** 两种，**选择那种分配方式由 Java 堆是否规整决定，而 Java 堆是否规整又由所采用的垃圾收集器是否带有压缩整理功能决定**。\n\n- 指针碰撞\n\n  - 堆规整（没有内存碎片）\n  - 复制算法\n  - GC：Serial、ParNew\n\n- 空闲列表\n\n  - 堆内存不规整的情况下\n  - 虚拟机会维护一个**列表**，该列表会**记录哪些内存块是可用的**，在分配的时候，找一块儿足够大的内存块来划分给对象实例，最后更新列表激励\n  - GC：CMS\n\n- 并发问题\n\n  - CAS+失败重试：** CAS 是乐观锁的一种实现方式。所谓乐观锁就是，每次不加锁而是假设没有冲突而去完成某项操作，如果因为冲突失败就重试，直到成功为止。**虚拟机采用 CAS 配上失败重试的方式保证更新操作的原子性。\n  - TLAB： 为**每一个线程预先在 Eden 区分配一块儿内存**，JVM 在给线程中的对象分配内存时，**首先在 TLAB 分配，当对象大于 TLAB 中的剩余内存或 TLAB 的内存已用尽时，再采用上述的 CAS 进行内存分配**\n\n## 初始化零值\n\n内存分配完成后，虚拟机需要将分配到的内存空间都**初始化为零值（不包括对象头）**，这一步操作保证了对象的实例字段在 Java 代码中**可以不赋初始值就直接使用**，程序能访问到这些字段的数据类型所对应的零值。\n\n## 设置对象头\n\n初始化零值完成之后，**虚拟机要对对象进行必要的设置**，例如这个对象是那个类的实例、如何才能找到类的元数据信息、对象的哈希码、对象的 GC 分代年龄等信息。 **这些信息存放在对象头中。** 另外，根据虚拟机当前运行状态的不同，如是否启用偏向锁等，对象头会有不同的设置方式。\n\n## 指向 init 方法\n\n在上面工作都完成之后，从虚拟机的视角来看，一个新的对象已经产生了，但从 Java 程序的视角来看，对象创建才刚开始，**方法还没有执行，所有的字段都还为零。所以一般来说，执行 new 指令之后会接着执行**方法，把对象按照程序员的意愿进行初始化，这样一个真正可用的对象才算完全产生出来。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 420,
        "like_count": 54
    },
    {
        "id": 100,
        "tag_id": 1,
        "tag_type": 1,
        "title": "76.内存布局",
        "content": "# 内存布局\n\n面试官：刚才说了内存布局，给我讲一下\n\n我：好的，内存布局分别为**对象头，实例数据，对其填充**\n\n1. **对象头**\n\n**Hotspot 虚拟机的对象头包括两部分信息**，**第一部分用于存储对象自身的自身运行时数据**（哈**希码、GC 分代年龄、锁状态标志**等等），**另一部分是类型指针**，即对象指向它的类元数据的指针，虚拟机通过这个指针来确定这个对象是那个类的实例。\n\n2. **实例数据**\n\n**实例数据部分是对象真正存储的有效信息**，也是在程序中所定义的各种类型的字段内容。\n\n3. **对齐填充**\n\n**对齐填充部分不是必然存在的，也没有什么特别的含义，仅仅起占位作用。** 因为 Hotspot 虚拟机的自动内存管理系统要求对象起始地址必须是 8 字节的整数倍，换句话说就是对象的大小必须是 8 字节的整数倍。而对象头部分正好是 8 字节的倍数（1 倍或 2 倍），因此，当对象实例数据部分没有对齐时，就需要通过对齐填充来补全。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 344,
        "like_count": 87
    },
    {
        "id": 107,
        "tag_id": 1,
        "tag_type": 1,
        "title": "77.句柄的访问方式",
        "content": "# 句柄的访问方式\n\n面试官：给我讲讲对象的访问方式\n\n我：明白，两种：使用句柄和使用直接指针\n\n1. **句柄**：\n\n![使用句柄-eeXA0j](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/使用句柄-eeXA0j.png)\n\n如果使用句柄的话，那么 Java 堆中将会划分出一块内存来作为句柄池，reference 中存储的就是对象的句柄地址，而句柄中包含了**对象实例数据**与**类型数据**各自的具体地址信息；\n\n2. **直接指针**：\n\n![直接指针-BP50tf](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/直接指针-BP50tf.png)\n\n如果使用直接指针访问，那么 Java 堆对象的布局中就必须考虑如何放置访问类型数据的相关信息，而 reference 中存储的直接就是对象的地址。\n\n话说：这两种对象访问方式各有优势。使用句柄来访问的最大好处是 reference 中存储的是**稳定**的句柄地址，在对象被移动时只会改变句柄中的实例数据指针，而 **reference 本身不需要修改**。使用直接指针访问方式最大的好处就是**速度快**，它节省了一次指针定位的时间开销。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 366,
        "like_count": 10
    },
    {
        "id": 102,
        "tag_id": 1,
        "tag_type": 1,
        "title": "78.如何判断对象死亡",
        "content": "# 如何判断死亡\n\n面试官：如何判断对象死亡？\n\n我：有两种策略，其一为**引用计数法**，其二为**可达性分析**。\n\n1. **引用计数法**\n\n给对象中添加一个引用计数器，每当有一个地方**引用它**，**计数器就加 1**；**当引用失效**，**计数器就减 1**；任何时候**计数器为 0 的对象就是不可能再被使用的**。\n\n**这个方法实现简单，效率高，但是目前主流的虚拟机中并没有选择这个算法来管理内存，其最主要的原因是它很难解决对象之间相互循环引用的问题。**\n\n2. **可达性分析**\n\n这个算法的基本思想就是通过一系列的称为 **“GC Roots”** 的对象作为起点，**从这些节点开始向下搜索，节点所走过的路径称为引用链，当一个对象到 GC Roots 没有任何引用链相连的话，则证明此对象是不可用的**。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 83,
        "like_count": 90
    },
    {
        "id": 78,
        "tag_id": 1,
        "tag_type": 1,
        "title": "79.哪些可以作为GCRoots的根",
        "content": "哪些可以作为 GC Roots 的根：\n\n- 虚拟机栈（栈帧中的局部变量区，也叫局部变量表）中应用的对象。\n- 本地方法栈中 JNI（native 方法）引用的对象\n- 方法区中的类静态属性引用的对象\n- 方法区中常量引用的对象\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 468,
        "like_count": 39
    },
    {
        "id": 114,
        "tag_id": 1,
        "tag_type": 1,
        "title": "80.如何枚举根节点",
        "content": "面试官：如何枚举根节点？\n\n我：以上引用作用 GC Roots 的根，如果**方法区和大，要逐个检查这里面的引用，那么必然会消耗很多时间**，而且枚举根节点需要停顿的。在 HotSpot 的实现中，是使用一组称为**OopMap 的数据结构**来达到这个目的的，在类加载完成的时候，**HotSpot 就把对象内什么偏移量是什么类型的数据计算出来**，在 JIT 编译过程中，**也会在特定的位置记录下栈和寄存器中哪些位置是引用**。这样，GC 在扫描时就可以直接得这心信息了。\n\n但一个很现实的问题：**可能导致引用关系变化，或者说 OopMap 内容变化的指令非常多，如果为每一条指令都生成对应的 OopMap，那么会需要大量的额外空间，这样 GC 成本很高，安全点由此而来**。\n\n实际上，在 JIT 编译过程中，在**特定的位置记录下栈和寄存器哪些位置是引用**，实际上这些位置就是**安全点**，意思就是说，**程序执行时并非在所有地方都能停顿下来开始 GC，只有在达到安全点时才能暂停**。\n\nSafepoint 机制保证了程序执行时，在**不太长的时间内就会遇到可进入 GC 的 Safepoint**，但**如果线程处于 Sleep 或者 Blocked 状态**，这时候线程**无法响应 JVM 的中断请求**，JVM 也显然不太可能等待线程重新被分配 CPU 时间，这种情况就需要**安全域**来解决。**安全域是指在一段代码片段中，引用关系不会发生变化。在这个区域中的任意地方开始 GC 都是安全的。这时候安全点就被扩展到了 Safe Region**。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 233,
        "like_count": 10
    },
    {
        "id": 117,
        "tag_id": 1,
        "tag_type": 1,
        "title": "81.垃圾回收算法",
        "content": "# 垃圾回收算法\n\n垃圾回收算法：\n\n1. **标记-清除**\n\n该算法分为“标记”和“清除”阶段：首先**标记出所有需要回收的对象**，在标记完成后**统一回收所有被标记的对象**。它是最基础的收集算法，后续的算法都是对其不足进行改进得到。这种垃圾收集算法会带来两个明显的问题：\n\n- **效率问题**\n- **空间问题（标记清除后会产生大量不连续的碎片）**\n\n2. **标记-整理**\n\n根据**老年代的特点**提出的一种标记算法，标记过程仍然与“标记-清除”算法一样，但后续步骤不是直接对可回收对象回收，而是**让所有存活的对象向一端移动**，然后直接清理掉端边界以外的内存。（老年代一般存入的是大对象，时间比较久的对象）\n\n3. **复制**\n\n为了**解决效率**问题，“复制”收集算法出现了。它可以将**内存分为大小相同的两块**，每次使用其中的一块。当这一块的内存使用完后，就将还存活的对象复制到另一块去，然后再把使用的空间一次清理掉。**这样就使每次的内存回收都是对内存区间的一半进行回收**。（堆的年轻代又分为 Eden、s0 和 s1）\n\n4. **分代**\n\n**比如在新生代中，每次收集都会有大量对象死去，所以可以选择复制算法，只需要付出少量对象的复制成本就可以完成每次垃圾收集。而老年代的对象存活几率是比较高的，而且没有额外的空间对它进行分配担保，所以我们必须选择“标记-清除”或“标记-整理”算法进行垃圾收集。**\n\n一般情况：\n\n- 大多数情况下，**对象在新生代中 eden 区分配**。当 eden 区没有足够空间进行分配时，虚拟机将发起一次 Minor GC.\n- **大对象直接进入老年代**，大对象就是需要**大量连续内存空间的对象**（比如：字符串、数组）。频繁复制降低性能。\n- 如果对象在 Eden 出生并经过第一次 Minor GC 后仍然能够存活，并且能被 Survivor 容纳的话，将被移动到 Survivor 空间中，并将对象年龄设为 1. 对象在 Survivor 中每熬过一次 MinorGC,年龄就增加 1 岁，当它的年龄增加到一定程度（默认为 15 岁），就会被**晋升到老年代**中。对象晋升到老年代的年龄阈值，可以通过参数 `-XX:MaxTenuringThreshold` 来设置。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 48,
        "like_count": 8
    },
    {
        "id": 129,
        "tag_id": 1,
        "tag_type": 1,
        "title": "82.垃圾回收器",
        "content": "# 垃圾回收器\n\n面试官：给我讲讲垃圾收集器吧\n\n我：当然没问题，有一张有趣的图\n\n![垃圾回收器-AXT6Jn](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/垃圾回收器-AXT6Jn.png)\n\n小插曲：咱们知道，堆分为新生代和老年代，那么从这张图可以看出，新生代有 Serial、ParNew 和 Parallel Scavenge 而老年代自然也有 Serial Old 和 Parallel Old，新生代和老年代都有串并行收集器，能互相搭配，但看 CMS 就很特殊，它是老年代的收集器，能从图中可以看出来，它不稳定呀，居然用 Serial Old 当备胎，而且为了能搭配 CMS 的并行垃圾收集器，就给它造了一个 ParNew，哈哈哈（开个玩笑）。G1 暂且不说，横跨新生和老年。在它这一块不分家，一把抓。\n\n我就简单说一下串并行垃圾收集器，太古老了，面试官也不想听。\n\n你像 Serial 和 ParNew 呀，其实在 STW 的时候，一个是**单线程**，一个是**多线程**回收垃圾。而 ParNew 和 Parallel Scavenge 的区别仅仅是**吞吐量**，后者重在吞吐量上（高效率利用 CPU）。所以，**Serial 收集器对于运行在 Client 模式下的虚拟机来说是个不错的选择。而 ParNew 是在 Server 模式下的虚拟机的首要选择之一。以上垃圾收集器新生代采用复制，而老年代采用标记-整理。**\n\n**CMS 垃圾收集器**：\n\n**CMS（Concurrent Mark Sweep）收集器是一种以获取最短回收停顿时间为目标的收集器。它非常符合在注重用户体验的应用上使用。**\n\n**CMS（Concurrent Mark Sweep）收集器是 HotSpot 虚拟机第一款真正意义上的并发收集器，它第一次实现了让垃圾收集线程与用户线程（基本上）同时工作。**\n\n从名字中的**Mark Sweep**这两个词可以看出，CMS 收集器是一种 **“标记-清除”算法**实现的，它的运作过程相比于前面几种垃圾收集器来说更加复杂一些。整个过程分为四个步骤：\n\n- 初始标记：暂停所有的其他线程，并记录下直接与 root 相连的对象，速度很快 ；\n- 并发标记：同时开启 GC 和用户线程，用一个闭包结构去记录可达对象。但在这个阶段结束，这个闭包结构并不能保证包含当前所有的可达对象。因为用户线程可能会不断的更新引用域，所以 GC 线程无法保证可达性分析的实时性。所以这个算法里会跟踪记录这些发生引用更新的地方。\n- 重新标记：重新标记阶段就是为了修正并发标记期间因为用户程序继续运行而导致标记产生变动的那一部分对象的标记记录，这个阶段的停顿时间一般会比初始标记阶段的时间稍长，远远比并发标记阶段时间短\n- 并发清除：开启用户线程，同时 GC 线程开始对为标记的区域做清扫。\n\n从它的名字就可以看出它是一款优秀的垃圾收集器，主要优点：**并发收集、低停顿**。但是它有下面三个明显的缺点：\n\n- **对 CPU 资源敏感；**\n- **无法处理浮动垃圾；**\n- **它使用的回收算法-“标记-清除”算法会导致收集结束时会有大量空间碎片产生。**\n\n因此，为了解决以上缺点，**G1**就出现了：\n\n- **将整个 Java 堆划分为多个大小相等的独立区域（Region）**，虽然还保留新生代和老年代的概念，但**新生代和老年代不再是物理隔离的了，而都是一部分 Region（不需要连续）的集合**\n\n- 并行与并发： G1 能充分利用 **CPU、多核**环境下的硬件优势，使用多个 CPU 来缩短 Stop-The-World 停顿时间。\n- 分代收集：虽然 G1 可以不需要其他收集器配合就能独立管理整个 GC 堆，但是还是保留了分代的概念。\n- 空间整合：G1 从整体来看是基于**“标记整理”**算法实现的收集器；从局部上来看是基于**“复制”算法**实现的。\n- 可预测停顿：这是 G1 相对于 CMS 的另一个大优势，降低停顿时间是 G1 和 CMS 共同的关注点，但 G1 除了追求低停顿外，还能建立可预测的停顿时间模型。G1 跟踪**各个 Region 里面的垃圾堆积的价值大小**（回收所获得的空间大小以及回收所需要时间的经验值），在后台维护一个**优先列表**，每次根据允许的收集时间，**优先回收价值最大的 Region**。\n\n**G1 的跨代引用**：\n\n在 G1 收集器中，**Region 之间的对象引用以及其他收集器中的新生代与老年代之间的对象引用**，虚拟机都是使用**Remembered Set（RS）**来避免全堆扫描的。**G1 中每个 Region 都有一个与之对应的 RS**，虚拟机发现程序**对 Reference 类型的数据进行写操作**时，会产生**一个 Write Barrier 暂时中断操作**，**检查 Reference 引用的对象是否处于不同的 Region 之间**（在分代的例子中就是检查是否老年代中的对象引用了新生代中方的对象）如果是，便**通过 CardTable（每个 Region 块又细分了 2000 多个卡表，记录一波我引用了哪个对象）把相关引用信息记录到被引用对象所属的 Region 的 RS 之中**。当进行内存回收时，**在 GC 根节点的枚举范围中加入 RS 即可保证不对全堆扫描，也不会又遗漏**。\n\n当然 G1 有也大致的四个过程：\n\n- 初始标记：仅仅只是标记一下 GC Roots 能直接关联到的对象，并且修改**TAMS（Nest Top Mark Start）**的值，让下一阶段用户程序并发运行时，能在正确可以的 Region 中创建对象，此阶段需要**停顿线程**，但耗时很短。\n- 并发标记：从 GC Root 开始对堆中对象进行**可达性分析**，找到存活对象，此阶段耗时较长，但**可与用户程序并发执行**。\n- 最终标记：为了修正在并发标记期间因用户程序继续运作而导致标记产生变动的那一部分标记记录，虚拟机将这段时间对象变化记录在**线程的 Remembered Set Logs**里面，最终标记阶段需要**把 Remembered Set Logs 的数据合并到 Remembered Set 中**，这阶段需要**停顿线程**，但是**可并行执行**。\n- 筛选回收：首先对各个 Region 中的回收价值和成本进行排序，根据用户所期望的 GC 停顿是时间来制定回收计划。此阶段其实也可以做到与用户程序一起并发执行，但是因为只回收一部分 Region，时间是用户可控制的，而且停顿用户线程将大幅度提高收集效率。\n\n在这里，简单做一个 CMS 和 G1 的比较：\n\n1. CMS 收集器是**获取最短回收停顿时间**为目标的收集器，因为 CMS 工作时，GC 工作线程与用户线程可以并发执行，以此来达到降低收集停顿时间的目的（只有初始标记和重新标记会 STW）。但**是 CMS 收集器对 CPU 资源非常敏感。在并发阶段，虽然不会导致用户线程停顿，但是会占用 CPU 资源而导致引用程序变慢，总吞吐量下降**。\n2. CMS 仅作用于老年代，是基于**标记清除算法**，所以清理的过程中**会有大量的空间碎片**。\n3. CMS 收集器**无法处理浮动垃圾**，**由于 CMS 并发清理阶段用户线程还在运行**，伴随程序的运行自然会有新的垃圾不断产生，这一部分垃圾出现在标记过程之后，CMS 无法在本次收集中处理它们，只好留在下一次 GC 时将其清理掉。\n4. G1 是一款面向服务端应用的垃圾收集器，**适用于多核处理器、大内存容量的服务端系统**。G1 能充分利用 CPU、多核环境下的硬件优势，使用多个 CPU 或核心来缩短 STW 的停顿时间，它满足短时间停顿的同时达到一个高的吞吐量。\n5. **从 JDK 9 开始，G1 成为默认的垃圾回收器**。当应用有以下任何一种特性时非常适合用 G1：Full GC 持续时间太长或者太频繁；对象的创建速率和存活率变动很大；应用不希望停顿时间长(长于 0.5s 甚至 1s)。\n6. G1 将空间划分成很多块（Region），然后他们各自进行回收。堆比较大的时候可以采用，采用复制算法，碎片化问题不严重。整体上看属于标记整理算法,局部(region 之间)属于复制算法。\n7. G1 需要记忆集 (具体来说是卡表)来记录新生代和老年代之间的引用关系，这种数据结构在 G1 中需要占用大量的内存，可能达到整个堆内存容量的 20% 甚至更多。而且 **G1 中维护记忆集的成本较高**，带来了更高的执行负载，影响效率。**所以 CMS 在小内存应用上的表现要优于 G1，而大内存应用上 G1 更有优势，大小内存的界限是 6GB 到 8GB**。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 376,
        "like_count": 51
    },
    {
        "id": 115,
        "tag_id": 1,
        "tag_type": 1,
        "title": "83.什么是逃逸分析",
        "content": "# 逃逸分析\n\n> 这一块知识还是要知道的呀，它是 Java 虚拟机中比较前沿优化的技术。\n\n面试官：你了解逃逸分析吗?\n\n我：算是了解。逃逸分析的基本行为就是分析**对象动态作用域**：当一个对**象在方法中被定义后，它可能被外部方法引用，例如作为调用参数传递到其他方法中，称为方法逃逸**。甚至还有可能**被外部线程访问到，譬如赋值给类变量或可以在其他线程中访问的实例变量，称为线程逃逸**。如果能证明**一个对象不会逃逸到方法或线程之外**，也就是**别的方法或线程无法通过任何途径访问到这个对象**，则可能为这个变量进行一些高效的优化：\n\n1. 栈上分配\n\nJava 虚拟机中，**如果确定一个对象不会逃逸出方法之外，那让这个对象在栈上分配内存**将会是一个很不错的主意，**对象所占用的内存空间就可以随栈帧出栈而销毁**。在一般应用中，不会逃逸的局部对象所占的比例很大，如果能使用栈上分配，那**大量的对象就会随着方法的结束而自动销毁了**，垃圾收集系统的压力将会小很多。\n\n2. 同步消除\n\n**线程同步本身是一个相对耗时的过程**，**如果逃逸分析能够确定一个变量不会逃逸出线程，无法被其他线程访问**，那这个变量的**读写肯定就不会有竞争**，对这个变量实施的同步措施也就可以消除。\n\n3. 标量替换\n\n标量是指一**个数据已经无法再分解成更小的数据来表示了**，Java 虚拟机的原始数据类型都不能再进一步分解，它们就可以称为标量。如果逃逸分析证明**一个对象不会被外部访问**，并且**这个对象可以被拆散的话**，那程序真正执行的时候将**可能不创建这个对象**，而改**为直接创建它的若干个被这个方法使用的成员变量来代替**。除了可以让对象的成员变量在栈上（栈上存储的数据，有很大的概率会被虚拟机分配到物理机器高速寄存器中存储）分配和读写之外，还可以为后续进一步的优化手段创建条件。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 242,
        "like_count": 29
    },
    {
        "id": 83,
        "tag_id": 1,
        "tag_type": 1,
        "title": "84.如何查看反编译源码",
        "content": "# 查看反编译源码\n\n## 例子\n\nJavaBean.java\n\n```java\npublic class JavaBean {\n    int value = 3;\n    final int value2 = 5;\n    static int value3 = 8;\n    static int value4 = -1;\n    String s = \\\"买\\\";\n    void getValue() {\n        int temp = 4;\n    }\n}\n```\n\n- 终端输入`javac JavaBean.java`得到 JavaBean.class 文件\n- 终端继续输入`javap -c JavaBean > JavaBean.txt`\n\n```bash\nCompiled from \\\"JavaBean.java\\\"\npublic class JavaBean {\n  int value;\n\n  final int value2;\n\n  static int value3;\n\n  static int value4;\n\n  java.lang.String s;\n\n  public JavaBean();\n    Code:\n       0: aload_0\n       1: invokespecial #1                  // Method java/lang/Object.\\\"<init>\\\":()V\n       4: aload_0\n       5: iconst_3\n       6: putfield      #2                  // Field value:I\n       9: aload_0\n      10: iconst_5\n      11: putfield      #3                  // Field value2:I\n      14: aload_0\n      15: ldc           #4                  // String 买\n      17: putfield      #5                  // Field s:Ljava/lang/String;\n      20: return\n\n  void getValue();\n    Code:\n       0: iconst_4\n       1: istore_1\n       2: return\n\n  static {};\n    Code:\n       0: bipush        8\n       2: putstatic     #6                  // Field value3:I\n       5: iconst_m1\n       6: putstatic     #7                  // Field value4:I\n       9: return\n}\n```\n\n暂时就不详细解释了。\n\n当然如果查看更信息反编译文件，终端可以输入`javap -p JavaBean > JavaBean.txt`\n内容我就不放了，它可以查看更多的字面量等，内容比较多。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 426,
        "like_count": 77
    },
    {
        "id": 144,
        "tag_id": 1,
        "tag_type": 1,
        "title": "85.Ioc是什么",
        "content": "# IoC\n\nIoC（Inverse of Control:控制反转）是一种**设计思想**，就是 **将原本在程序中手动创建对象的控制权，交由 Spring 框架来管理。IoC 容器是 Spring 用来实现 IoC 的载体， IoC 容器实际上就是个 Map（key，value）,Map 中存放的是各种对象。**\n\n将对象之间的相互依赖关系交给 IoC 容器来管理，并由 IoC 容器完成对象的注入。这样可以很大程度上简化应用的开发，把应用从复杂的依赖关系中解放出来。 **IoC 容器就像是一个工厂一样，当我们需要创建一个对象的时候，只需要配置好配置文件/注解即可，完全不用考虑对象是如何被创建出来的。**\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 57,
        "like_count": 93
    },
    {
        "id": 135,
        "tag_id": 1,
        "tag_type": 1,
        "title": "86.Ioc初始化流程",
        "content": "# 初始化流程\n\n- Resource 资源定位：这个 Resouce 指的是 BeanDefinition 的资源定位。这个过程就是容器找数据的过程，就像水桶装水需要先找到水一样。\n- BeanDefinition 的载入和解析：这个载入过程是把用户定义好的 Bean 表示成 Ioc 容器内部的数据结构，而这个容器内部的数据结构就是 BeanDefition。\n- BeanDefinition 注册\n- prepareRefresh()：预备一下， 标记启动时间，上下文环境，我要的材料（beanDefinition）准备好了嘛？\n- obtainFreshBeanFactory()：\n  - 如果已经有了 BeanFactory 就销毁它里面的单例 Bean 并关闭这个 BeanFactory。\n  - 创建一个新的 BeanFactory。\n  - 对这个 BeanFactory 进行定制（customize),如 allowBeanDefinitionOverriding 等参数\n  - 转载 BeanDefinitions(读取配置文件，将 xml 转换成对应得 BeanDefinition)\n  - 检查是否同时启动了两个 BeanFactory。\n- prepareBeanFactory(beanFactory)：设置 beanFactory 的类加载器，材料（BeanDefinition）解析器等\n- postProcessBeanFactory(beanFactory)：\n  - 设置 beanFactory 的后置处理器\n  - 具体的子类可以在这步的时候添加一些特殊的 BeanFactoryPostProcessor 的实现类或做点什么事\n- invokeBeanFactoryPostProcessors(beanFactory)：\n  - 调用 beanFactory 的后置处理器（BeanDefinitionRegisterPostProcessor 和 BeanFactoryPostProcessor）\n  - 调用 BeanFactoryPostProcessor 各个实现类的 postProcessBeanFactory(factory) 方法\n- registerBeanPostProcessors(beanFactory)：\n  - 注册 BeanPostProcessor 的实现类（bean 的后置处理器）\n  - 此接口两个方法: postProcessBeforeInitialization 和 postProcessAfterInitialization 两个方法分别在 Bean 初始化之前和初始化之后得到执行。注意，到这里 Bean 还没初始化\n- initMessageSource()：对上下文中的消息源进行初始化\n- initApplicationEventMulticaster()：初始化上下文的事件广播器\n- onRefresh()：- 模版方法，具体的子类可以在这里初始化一些特殊的 Bean（在初始化 singleton beans 之前）\n- registerListeners()：注册事件监听器\n- finishBeanFactoryInitialization(beanFactory)：初始化所有的 singleton beans\n- finishRefresh()：最后，广播事件，ApplicationContext 初始化完成\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 308,
        "like_count": 25
    },
    {
        "id": 132,
        "tag_id": 1,
        "tag_type": 1,
        "title": "87.AOP是什么",
        "content": "# AOP\n\nAOP(Aspect-Oriented Programming:面向切面编程)能够将那些与业务无关，**却为业务模块所共同调用的逻辑或责任（例如事务处理、日志管理、权限控制等）封装起来**，便于**减少系统的重复代码**，**降低模块间的耦合度**，并**有利于未来的可拓展性和可维护性**。\n\n- **Spring AOP 就是基于动态代理的**\n- 如果要代理的对象，实现了某个接口，那么 Spring AOP 会使用**JDK Proxy**，\n- 而对于没有实现接口的对象，这时候 Spring AOP 会使用 **Cglib** 生成一个被代理对象的子类来作为代理。\n\n![AOP是什么-H3EcMy](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/AOP是什么-H3EcMy.png)\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 255,
        "like_count": 32
    },
    {
        "id": 73,
        "tag_id": 1,
        "tag_type": 1,
        "title": "88.AOP初始化流程",
        "content": "# 初始化流程\n\nregisterAspectJAnnotationAutoProxyCreatorIfNecessary\n\n- 第一句，注册一个 AnnotationAwareAspectJAutoProxyCreator（称它为自动代理器），这个 Creator 是 AOP 的操作核心，也是扫描 Bean，代理 Bean 的操作所在。\n- 第二句，解析配置元素，决定代理的模式。其中有 JDK 动态代理，还有 CGLIB 代理，这部分后续会再细讲。\n- 第三句，作为系统组件，把 Creator 这个 Bean，放到 Spring 容器中。让 Spring 实例化，启动这个 Creator。\n\n总结：\n\n- Spring 加载自动代理器 AnnotationAwareAspectJAutoProxyCreator，当作一个系统组件。\n- 当一个 bean 加载到 Spring 中时，会触发自动代理器中的 bean 后置处理，然后会先扫描 bean 中所有的 Advisor\n- 然后用这些 Adviosr 和其他参数构建 ProxyFactory\n- ProxyFactory 会根据配置和目标对象的类型寻找代理的方式（JDK 动态代理或 CGLIG 代理）\n- 然后代理出来的对象放回 context 中，完成 Spring AOP 代理\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 450,
        "like_count": 5
    },
    {
        "id": 130,
        "tag_id": 1,
        "tag_type": 1,
        "title": "89.Bean的作用域",
        "content": "# bean 的作用域\n\n- singleton 作用域：表示在 Spring 容器中只有一个 Bean 实例，以单例的形式存在，是默认的 Bean 作用域。\n- prototype 作用域：原型作用域，每次调用 Bean 时都会创建一个新实例，也就是说每次调用 getBean() 方法时，相当于执行了 new Bean()。\n- request 作用域：每次 Http 请求时都会创建一个新的 Bean，该作用域仅适应于 WebApplicationContext 环境。\n- session 作用域：同一个 Http Session 共享一个 Bean 对象，不同的 Session 拥有不同的 Bean 对象，仅适用于 WebApplicationContext 环境。\n- application 作用域：全局的 Web 作用域，类似于 Servlet 中的 Application。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 446,
        "like_count": 5
    },
    {
        "id": 106,
        "tag_id": 1,
        "tag_type": 1,
        "title": "90.Spring的单例有线程安全问题吗",
        "content": "# Spring 的单例有线程安全问题吗\n\n大部分时候我们并没有在系统中使用多线程，所以很少有人会关注这个问题。单例 bean 存在线程问题，主要是因为当多个线程操作同一个对象的时候，对这个对象的非静态成员变量的写操作会存在线程安全问题。\n\n常见的有两种解决办法：\n\n- 在 Bean 对象中尽量避免定义可变的成员变量（不太现实）。\n- 在类中定义一个 ThreadLocal 成员变量，将需要的可变成员变量保存在 ThreadLocal 中（推荐的一种方式）。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 147,
        "like_count": 24
    },
    {
        "id": 159,
        "tag_id": 1,
        "tag_type": 1,
        "title": "91.什么是三级缓存",
        "content": "# 什么是三级缓存\n\n1. 第一级缓存：单例缓存池 singletonObjects。\n2. 第二级缓存：早期提前暴露的对象缓存 earlySingletonObjects。（属性还没有值对象也没有被初始化）\n3. 第三级缓存：singletonFactories 单例对象工厂缓存。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 308,
        "like_count": 35
    },
    {
        "id": 133,
        "tag_id": 1,
        "tag_type": 1,
        "title": "92.创建Bean的整个过程",
        "content": "# 创建 Bean 的整个过程\n\n1. 首先 finishBeanFactoryInitialization->preInstantiateSingletons->getBean->doGetBean;\n2. 在 doGetBean 中，transformedBeanName:主要负责判断一下有木有别名；getSingleton：从一级缓存 singletonObjects 拿 bean，在 getSingleton 方法中，有一个判断条件就是 isSingletonCurrentlyInCreation，判断为 false，因为他是第一次进来，并且还没有正在创建该 bean；dependsOn：依赖，暂时先不说他。\n3. 再来一次 getSingleton：再一次的从 singketonObjects 缓存拿，依然没有的。接着有个重点 beforeSingletonCreation：它把 bean 添加到临时的 singletonsCurrentlyInCreation，这就意味着，下次再碰见它，那可就是 true 了。接着 singletonFactory.getObject()，这里 getObject 调用的是传递的接口 createBean 方法。\n4. 在 createBean 方法中：有个 doCreateBean->createBeanInstance 方法：它就是直接实例化，实际上构造器有反应了（区分 JVM 创建对象和 Spring 创建对象），但是没有赋值（初始化）；earlySingletonExposure：提前暴漏该 bean。但要知道三个变量，为什么他是 true：isSingleton()，是否单例，那肯定是哦；（这里解释了这里是单例才能提前曝漏，意味着才能存三级缓存）allowCircularReferences，默认变量为 true，写死了；isSingletonCurrentlyInCreation，这里可就为 true 了，因为步骤 3，已经将它设置为 true 了。那么会进来这个方法：addSingletonFactory\n5. addSingletonFactory 在这个方法中：将该 bean 放入到三级缓存 singletonFactories 中。（解决循环依赖）\n6. 接下来，就是它了，populateBean：实际上就是属性赋值。（如果这里要有 A 依赖 B，又发现三级缓存中没有 B，那么它就会再次执行一次（递归开始）getBean->doGetBean->createBeanInstance(把 B 给实例化一下)，同样的道理，这里会将 B 也会放入三级缓存中，B 开始 populateBean，那么它发现 B 依赖 A，此时三级缓存中有 A(精髓，牛逼)，然后把 A 放到二级缓存中，同时从三级缓存中移除，接着得到 A 之后直接赋值，最后完成了初始化，然后来到 addSingleton，将 B 仍到了一级缓存，同时将 B 从三级缓存仍出去）返回 B，递归结束，得到 B 之后将 B 的赋值给 A 了。\n7. 最后将二级缓存的 A 删除，仍到一级缓存中。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 11,
        "like_count": 72
    },
    {
        "id": 153,
        "tag_id": 1,
        "tag_type": 1,
        "title": "93.Bean的生命周期",
        "content": "# bean 的生命周期\n\n![bean的生命周期-8tO34R](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/bean的生命周期-8tO34R.png)\n\n- Bean 容器找到配置文件中 Spring Bean 的定义。\n- Bean 容器利用 Java Reflection API 创建一个 Bean 的实例。\n- 如果涉及到一些属性值 利用 `set()`方法设置一些属性值。\n- 如果 Bean 实现了 `BeanNameAware` 接口，调用 `setBeanName()`方法，传入 Bean 的名字。\n- 如果 Bean 实现了 `BeanClassLoaderAware` 接口，调用 `setBeanClassLoader()`方法，传入 `ClassLoader`对象的实例。\n- 与上面的类似，如果实现了其他 `*.Aware`接口，就调用相应的方法。\n- 如果有和加载这个 Bean 的 Spring 容器相关的 `BeanPostProcessor` 对象，执行`postProcessBeforeInitialization()` 方法\n- 如果 Bean 实现了`InitializingBean`接口，执行`afterPropertiesSet()`方法。\n- 如果 Bean 在配置文件中的定义包含 init-method 属性，执行指定的方法。\n- 如果有和加载这个 Bean 的 Spring 容器相关的 `BeanPostProcessor` 对象，执行`postProcessAfterInitialization()` 方法\n- 当要销毁 Bean 的时候，如果 Bean 实现了 `DisposableBean` 接口，执行 `destroy()` 方法。\n- 当要销毁 Bean 的时候，如果 Bean 在配置文件中的定义包含 destroy-method 属性，执行指定的方法。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 26,
        "like_count": 97
    },
    {
        "id": 128,
        "tag_id": 1,
        "tag_type": 1,
        "title": "94.Spring事务隔离级别",
        "content": "# 隔离级别\n\n- **TransactionDefinition.ISOLATION_DEFAULT:** 使用后端数据库默认的隔离级别，Mysql 默认采用的 REPEATABLE_READ 隔离级别 Oracle 默认采用的 READ_COMMITTED 隔离级别.\n- **TransactionDefinition.ISOLATION_READ_UNCOMMITTED:** 最低的隔离级别，允许读取尚未提交的数据变更，**可能会导致脏读、幻读或不可重复读**\n- **TransactionDefinition.ISOLATION_READ_COMMITTED:** 允许读取并发事务已经提交的数据，**可以阻止脏读，但是幻读或不可重复读仍有可能发生**\n- **TransactionDefinition.ISOLATION_REPEATABLE_READ:** 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，**可以阻止脏读和不可重复读，但幻读仍有可能发生。**\n- **TransactionDefinition.ISOLATION_SERIALIZABLE:** 最高的隔离级别，完全服从 ACID 的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，**该级别可以防止脏读、不可重复读以及幻读**。但是这将严重影响程序的性能。通常情况下也不会用到该级别。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 282,
        "like_count": 20
    },
    {
        "id": 119,
        "tag_id": 1,
        "tag_type": 1,
        "title": "95.Spring事务失效原因",
        "content": "# @Transactional(rollbackFor = Exception.class)注解了解吗\n\n1. @Transactional 注解只能应用到 public 修饰符上，其它修饰符不起作用，但不报错。\n2. 默认情况下此注解会对 unchecked 异常进行回滚，对 checked 异常不回滚。\n\n> checked 异常：表示无效，不是程序中可以预测的。比如无效的用户输入，文件不存在，网络或者数据库链接错误。这些都是外在的原因，都不是程序内部可以控制的。unchecked 异常：表示错误，程序的逻辑错误。是 RuntimeException 的子类，比如 IllegalArgumentException, NullPointerException 和 IllegalStateException。\n\n不回滚解决方案：\n\n1. 检查方法是不是 public\n2. 检查异常是不是 unchecked 异常\n3. 如果是 checked 异常也想回滚的话，注解上写明异常类型即可@Transactional(rollbackFor=Exception.class)\n\n事务失效的 8 大原因：\n\n1. 数据库引擎不支持事务\n2. 没有被 Spring 管理\n3. 方法不是 public 的\n4. 自身调用问题\n5. 数据源没有配置事务管理器\n6. 不支持事务（传播机制）\n7. 异常被吃了（捕获异常）\n8. 异常类型错误（checked 异常失效）\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 200,
        "like_count": 96
    },
    {
        "id": 137,
        "tag_id": 1,
        "tag_type": 1,
        "title": "96.Spring的事务传播机制",
        "content": "# Spring 的的事务传播机制\n\n1. required（默认）：支持使用当前事务，如果当前事务不存在，创建一个新事务。\n2. requires_new：创建一个新事务，如果当前事务存在，把当前事务挂起。\n3. supports：支持使用当前事务，如果当前事务不存在，则不使用事务。\n4. not_supported：无事务执行，如果当前事务存在，把当前事务挂起。\n5. mandatory：强制，支持使用当前事务，如果当前事务不存在，则抛出 Exception。\n6. never：无事务执行，如果当前有事务则抛出 Exception。\n7. nested：嵌套事务，如果当前事务存在，那么在嵌套的事务中执行。如果当前事务不存在，则表现跟 REQUIRED 一样。\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 146,
        "like_count": 61
    },
    {
        "id": 124,
        "tag_id": 1,
        "tag_type": 1,
        "title": "97.Spring事务源码",
        "content": "# 事务源码\n\n- 开启@EnableTransactionManagement\n- 利用 TransactionManagementConfigurationSelector 给容器中会导入组件\n  - AutoProxyRegistrar\n    - 给容器中注册一个 InfrastructureAdvisorAutoProxyCreator 组件\n    - 利用后置处理器机制在对象创建以后，包装对象，返回一个代理对象（增强器），代理对象执行方法利用拦截器链进行调用；\n  - ProxyTransactionManagementConfiguration（给容器中注册事务增强器）\n    - 事务增强器要用事务注解的信息，AnnotationTransactionAttributeSource 解析事务注解\n    - 事务拦截器\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 187,
        "like_count": 89
    },
    {
        "id": 164,
        "tag_id": 1,
        "tag_type": 1,
        "title": "98.SpringMVC的工作原理",
        "content": "# SpringMVC\n\n![SpringMVC的工作原理-jRqc2Q](https://cdn.jsdelivr.net/gh/DreamCats/imgs@main/uPic/SpringMVC的工作原理-jRqc2Q.png)\n\n1. 客户端（浏览器）发送请求，直接请求到 `DispatcherServlet`。\n2. `DispatcherServlet` 根据请求信息调用 `HandlerMapping`，解析请求对应的 `Handler`。\n3. 解析到对应的 `Handler`（也就是我们平常说的 `Controller` 控制器）后，开始由 `HandlerAdapter` 适配器处理。\n4. `HandlerAdapter` 会根据 `Handler`来调用真正的处理器开处理请求，并处理相应的业务逻辑。\n5. 处理器处理完业务后，会返回一个 `ModelAndView` 对象，`Model` 是返回的数据对象，`View` 是个逻辑上的 `View`。\n6. `ViewResolver` 会根据逻辑 `View` 查找实际的 `View`。\n7. `DispaterServlet` 把返回的 `Model` 传给 `View`（视图渲染）。\n8. 把 `View` 返回给请求者（浏览器）\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 427,
        "like_count": 35
    },
    {
        "id": 96,
        "tag_id": 1,
        "tag_type": 1,
        "title": "99.Springboot自动装配原理",
        "content": "# Springboot 自动装配原理\n\nSpringBootApplication 的注解\n[https://www.jianshu.com/p/943650ab7dfd](https://www.jianshu.com/p/943650ab7dfd)\n\n- @SpringBootConfiguration:允许在上下文中注册额外的 bean 或导入其他配置类\n- @EnableAutoConfiguration:启用 SpringBoot 的自动配置机制\n- @ComponentScan: 扫描常用的注解\n\n其中 @EnableAutoConfiguration 是实现自动配置的入口，该注解又通过 @Import 注解导入了 AutoConfigurationImportSelector，在该类中加载 META-INF/spring.factories 的配置信息。然后筛选出以 EnableAutoConfiguration 为 key 的数据，加载到 IOC 容器中，实现自动配置功能！\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 336,
        "like_count": 35
    },
    {
        "id": 157,
        "tag_id": 1,
        "tag_type": 1,
        "title": "100.@Resource和@Autowired区别",
        "content": "# @Resource 和@Autowired 区别\n\n## 共同点\n\n两者都可以写在字段和 setter 方法上。两者如果都写在字段上，那么就不需要再写 setter 方法。\n\n```java\npublic class TestServiceImpl {\n    // 下面两种@Autowired只要使用一种即可\n    @Autowired\n    private UserDao userDao; // 用于字段上\n\n    @Autowired\n    public void setUserDao(UserDao userDao) { // 用于属性的方法上\n        this.userDao = userDao;\n    }\n}\n```\n\n## 不同点\n\n1. @Autowired\n\n@Autowired 注解是**按照类型**（byType）装配依赖对象，默认情况下它要求依赖对象必须存在，如果允许 null 值，可以设置它的 required 属性为 false。如果我们想使用**按照名称**（byName）来装配，可以结合**@Qualifier 注解**一起使用。(通过类型匹配找到多个 candidate,在没有@Qualifier、@Primary 注解的情况下，会使用对象名作为最后的 fallback 匹配)如下：\n\n```java\npublic class TestServiceImpl {\n    @Autowired\n    @Qualifier(\\\"userDao\\\")\n    private UserDao userDao;\n}\n```\n\n2. @Resource\n\n@Resource 默认按照 ByName 自动注入。@Resource 有两个重要的属性：**name 和 type**，而 Spring 将@Resource 注解的 name 属性解析为 bean 的名字，而 type 属性则解析为 bean 的类型。**所以，如果使用 name 属性，则使用 byName 的自动注入策略，而使用 type 属性时则使用 byType 自动注入策略。如果既不制定 name 也不制定 type 属性，这时将通过反射机制使用 byName 自动注入策略**\n",
        "publish_time": "2022-09-29 23:37",
        "view_count": 443,
        "like_count": 2
    }
]
}