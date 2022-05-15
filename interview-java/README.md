# 在线面试助手-java后端

### 文档说明

该文档是在线面试助手小程序的java后端文档，项目代码为初代版，项目代码风格有点混乱，后续会随着迭代逐渐规范化。欢迎大家与我一起交流学习，一起完善这个项目代码。

[![O2V0iD.jpg](https://s1.ax1x.com/2022/05/15/O2V0iD.jpg)](https://imgtu.com/i/O2V0iD)

以上是我的个人微信，添加好友交流请添加备注信息。

### Java技术选型

所使用的技术不多，写的比较简单，后期看需求迭代项目技术架构。

|     技术     |       说明       |                             官网                             |
| :----------: | :--------------: | :----------------------------------------------------------: |
|  SpringBoot  |   容器+MVC框架   |           <https://spring.io/projects/spring-boot>           |
| MyBatis-plus |     ORM框架      |                    https://baomidou.com/                     |
|    Lombok    | 简化对象封装工具 | [https://github.com/rzwitserloot/lombok](https://github.com/rzwitserloot/lombok) |
|    MySQL     |   关系型数据库   |                    https://www.mysql.com/                    |

### 环境配置

#### 开发工具

|  工具   |       说明       |                             官网                             |
| :-----: | :--------------: | :----------------------------------------------------------: |
|  IDEA   |   代码开发IDE    | [<https://www.jetbrains.com/idea/download](https://www.jetbrains.com/idea/download) |
| Navicat |  数据库连接工具  |            <http://www.formysql.com/xiazai.html>             |
| Postman | 后端接口调试工具 |                   https://www.postman.com/                   |
| Typora  |  Markdown编辑器  |                     <https://typora.io/>                     |

#### 开发环境

| 工具  | 版本号 |
| ----- | ------ |
| JDK   | 1.8    |
| MySQL | 8.025  |

#### 运行环境

使用者使用`git clone`命令将项目克隆到本地后使用IDEA打开后根据`pom.xml`文件下载完项目依赖的`jar`包后后即可运行。

官方Maven仓库地：[https://mvnrepository.com](https://mvnrepository.com/)

项目主要依赖的`jar`包如下：

|         依赖的包名          |    版本号     |
| :-------------------------: | :-----------: |
|  mybatis-plus-boot-starter  |     3.2.0     |
| mybatis-spring-boot-starter |     2.2.2     |
|    mysql-connector-java     |    runtime    |
|           lombok            |               |
|  druid-spring-boot-starter  |    1.1.21     |
| swagger-spring-boot-starter | 1.8.0.RELEASE |

### 项目目录结构

[![O2uVHI.png](https://s1.ax1x.com/2022/05/15/O2uVHI.png)](https://imgtu.com/i/O2uVHI)

| 目录名  |                说明                |
| :-----: | :--------------------------------: |
| common  |      统一响应类及包装类文件夹      |
| config  |            配置类文件夹            |
|   dao   | mybatis的Mapper文件及xml映射文件夹 |
|   DO    |        数据库表POJO类文件夹        |
|   DTO   |           数据库传输对象           |
| modular |        各个页面的Controller        |
|  utils  |               工具类               |
|   Vo    |             显示层对象             |

**数据库账号密码+V私聊**