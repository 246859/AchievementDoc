::: danger

十分建议仔细阅读文档后，再使用插件！

:::

## 准备工作



在使用此插件之前，你**至少需要具备**以下知识:

- 熟悉BDS服务端
- 熟悉LLBDS服务端
- 熟悉JSON语法
- 熟悉正则的基本使用
- 熟悉布尔表达式使用
- 基本看懂控制台报错信息
- 会使用截图工具
- 懂得怎么提问题
- 以及一个耐心的心态



## 版本

V2版本的插件仅支持`BDS v1.19.30` `LL v2.7.0`及以上的版本，低于此版本的请使用V1版本的插件，

V1版本的插件的部分功能可能会因为LL API的变动导致部分事件监听已经失效。

::: tip

V3版本未来将会使用`c++`原生插件重写

:::



## 下载

**如果想使用稳定版本：**

Minebbs：[LLSE - 成就系统 | MineBBS 我的世界中文论坛](https://www.minebbs.com/resources/3434/)

**如果想使用最新版本**：

Github：[Releases · 246859/Achievement (github.com)](https://github.com/246859/Achievement/releases)

::: tip

Minebbs版本经过了JS压缩，没有任何注释，没有格式化，基本没有可读性可言。

如果有阅读源代码的需求，可以下载GitHub版本。

:::



## 使用

将安装得到的`Zip`文件解压至`./plugins`目录下，点击`bedrock_server_mod.exe`启动LLBDS服务端，在控制台中看到如下提示内容即代表插件成功加载。

```powershell
17:38:33 INFO [Achievement-Core] 成就核心插件成功导出接口17个
17:38:33 INFO [Achievement-Core]
              _     _                                     _          ___    ___   ___
    /\       | |   (_)                                   | |        |__ \  / _ \ / _ \
   /  \   ___| |__  _  _____   _____ _ __ ___   ___ _ __ | |_  __   __ ) || | | | | | |
  / /\ \ / __| '_ \| |/ _ \ \ / / _ \ '_ ` _ \ / _ \ '_ \| __| \ \ / // / | | | | | | |
 / ____ \ (__| | | | |  __/\ V /  __/ | | | | |  __/ | | | |_   \ V // /_ | |_| | |_| |
/_/    \_\___|_| |_|_|\___| \_/ \___|_| |_| |_|\___|_| |_|\__|   \_/|____(_)___(_)___/

17:38:33 INFO [Achievement-Core] v2.0.0
17:38:33 INFO [Achievement-Core] MineBBS: https://www.minebbs.com/resources/3434/
17:38:33 INFO [Achievement-Core] Github: https://github.com/246859/Achievement
17:38:33 INFO [Achievement-Core] 当前语言为: zh_CN
17:38:33 INFO [Achievement-Core] 成就插件成功加载,总计13种成就类型,164个成就词条,23个事件监听
```



**表单指令：**

查看自己的成就完成情况

```
/view gui
```



查看其他人的成就完成情况(op)

```
/view op
```





## 教程

大多数情况下，很多人都能成功走到这一步，使用插件自带的默认配置足以满足日常的基本使用，不过插件远远不止这一点点功能。倘若想要进行更加自定义化的使用，可以浏览后续的教程。

教程的内容说少不少，说多也不多，建议按需阅读。

|                             功能                             | 没有编程基础 | 有一定编程基础 |
| :----------------------------------------------------------: | :----------: | :------------: |
|          [插件基础配置](./view/config/1.config.md)           |      ✔️       |       ✔️        |
|         [增删改成就词条](./view/diy/0.diyString.md)          |      ✔️       |       ✔️        |
|          [自定义其他语言](./view/diy/4.diyLang.md)           |      ✔️       |       ✔️        |
| [正则表达式实现自定义匹配](./view/diy/0.diyString.html#正则匹配) |      ✔️       |       ✔️        |
|    [布尔表达式实现自定义匹配](./view/diy/1.diyNumber.md)     |      ✔️       |       ✔️        |
|      [自定义计分板成就类型](./view/diy/1.diyNumber.md)       |      ✔️       |       ✔️        |
| [自定义成就展示配置](./view/config/1.config.html#展示配置项) |      ✔️       |       ✔️        |
| [自定义成就奖励配置](./view/config/1.config.html#奖励配置项) |      ✔️       |       ✔️        |
|        [自定义字符串成就逻辑](./view/api/3.logic.md)         |     :x:      |       ✔️        |
|         [自定义数字成就逻辑](./view/api/3.logic.md)          |     :x:      |       ✔️        |
|         [自定义特殊成就逻辑](./view/api/3.logic.md)          |     :x:      |       ✔️        |
|              [自定义表单](./view/api/README.md)              |     :x:      |       ✔️        |



## 贡献者



![@246859](https://avatars.githubusercontent.com/u/42080442?s=64&v=4) [**246859** 寒江蓑笠翁](https://github.com/246859)

![@iQiaFUN](https://avatars.githubusercontent.com/u/101959120?s=64&v=4)[**iQiaFUN**](https://github.com/iQiaFUN)
