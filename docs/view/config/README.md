# 插件配置教程

这一章节主要设计一些插件的基础配置与使用，并不太需要什么技术要求。



## 文件结构

文件结构如下

```
plugins
|
|---Achievement.Core.js 核心数据处理插件
|
|---Achievement.Gui.js 表单插件
|
|---Achievement.Cmd.js 指令插件
|
|---Achievement 插件目录
    |
    |---Config.json 插件配置文件 
    |
    |---Cache.json 插件缓存文件
    |
    |---Data.json 插件数据文件
    |
    |---Lang 插件语言目录
        |
        |---zh_CN 中文
        |   |
        |   |---Entry.json 词条文件
        |   
        |
        |---en_us 英文
            |
            |---Entry.json

```



**简单说明**

- `Achievement.Core.js`：核心插件，所有成就相关的数据处理与核心功能都由此插件进行。
- `Achievement.Gui.js`：表单插件，方便玩家在游戏内插件实时查看成就的插件，提供了可视化界面。
- `Achievement.Cmd.js`：指令插件，提供了一系列方便操作成就的指令。
- `Config.json`：主要的配置文件，设计到插件的基本使用。
- `Cache.json`：缓存文件，没有什么特殊的需求不建议修改，除非你知道自己在做什么。
- `Data.json`：数据文件，存储玩家成就数据，**禁止做任何改动**。
- `Entry.json`：词条文件，存储成就词条，可以根据需求自行改动。



::: tip

只有一个核心插件照样能正常运行，只不过其他的一些操作不那么方便。

:::
