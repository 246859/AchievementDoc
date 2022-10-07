# 插件配置教程

插件自带的默认配置已经足够使用了，倘若需要更加细粒度的修改配置，可以阅读此教程来进行对应的修改。



## 文件结构

文件结构如下

```
plugins
|
|---Achievement.js 插件主体
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
        |   |
        |   |---Menu.json 菜单文件
        |
        |---en_us 英文
            |
            |---Entry.json
            |
            |---Menu.json

```



::: danger

`config.json`与`Menu.json`请谨慎修改，`Data.json`**绝对不允许修改**，若要修改`Entry.json`，请移步[自定义教程](../diy/README.md)

:::

