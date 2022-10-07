# 特殊成就

此页面收录了一些特殊的成就，这些成就通常实现起来比较复杂，并不像大多数的那么有规律，可能一个成就就是一套单独的逻辑，且没有那么明显的属于某一类，所以都归属到特殊成就这一类型中。



::: warning

**此种成就类型不支持自定义**。

:::



- **名称**：`特殊成就`
- **类型名**：`special`
- **默认开启**：`true`
- **传入值**：`无`
- **json**：

```json
{
	"special": {
		"enable": true,
		"name": "特殊成就",
		"details": {},
		"regx": {}
	}
}
```




## Hello World!

- 触发值：`join`
- 词条：`Hello World!`
- 条件：`首次进入服务器`
- 默认开启：`true`
- json：

```json
{
	"join": {
		"enable": true,
		"msg": "Hello World!",
		"condition": "首次进入服务器"
	}
}
```

