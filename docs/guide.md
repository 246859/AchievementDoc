::: danger

十分建议仔细阅读文档后，再使用插件！

:::

## 准备工作



在使用此插件之前，你**至少需要具备**以下知识:

- 熟悉BDS服务端
- 熟悉LLBDS服务端
- 熟悉JSON语法
- 基本看懂控制台报错信息
- 会使用截图工具
- 懂得怎么提问题
- 以及一个耐心的心态



## 版本

V2版本的插件仅支持`BDS v1.19.30` `LL v2.7.0`及以上的版本，低于此版本的请使用V1版本的插件，

V1版本的插件的部分功能可能会因为LL API的变动导致部分事件监听已经失效。



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
              _     _                                     _          ___    ___   ___
    /\       | |   (_)                                   | |        |__ \  / _ \ / _ \
   /  \   ___| |__  _  _____   _____ _ __ ___   ___ _ __ | |_  __   __ ) || | | | | | |
  / /\ \ / __| '_ \| |/ _ \ \ / / _ \ '_ ` _ \ / _ \ '_ \| __| \ \ / // / | | | | | | |
 / ____ \ (__| | | | |  __/\ V /  __/ | | | | |  __/ | | | |_   \ V // /_ | |_| | |_| |
/_/    \_\___|_| |_|_|\___| \_/ \___|_| |_| |_|\___|_| |_|\__|   \_/|____(_)___(_)___/    By Stranger

19:01:47 INFO [Achievement] v2.0.0
19:01:47 INFO [Achievement] MineBBS: https://www.minebbs.com/resources/3434/
19:01:47 INFO [Achievement] Github: https://github.com/246859/Achievement
19:01:47 INFO [LiteLoader] Js 插件 <Achievement> 已加载。
19:01:47 INFO [Achievement] 当前语言为: zh_CN
19:01:47 INFO [Achievement] 成就插件成功加载,总计12种成就类型,145个成就词条,19个事件监听
```

