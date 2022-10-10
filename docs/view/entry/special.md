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


## 自食其果

- 触发值：`counterattack`
- 词条：`自食其果`
- 条件：`将恶魂的火球反弹击杀恶魂`
- 默认开启：`true`
- json：

```json
{
	"counterattack": {
		"enable": true,
		"msg": "自食其果",
		"condition": "将恶魂的火球反弹击杀恶魂"
	}
}
```


## 有一点点疼

- 触发值：`littleHurt`
- 词条：`有一点点疼`
- 条件：`单次攻击造成15点伤害`
- 默认开启：`true`
- json：

```json
{
	"littleHurt": {
		"enable": true,
		"msg": "有一点点疼",
		"condition": "单次攻击造成15点伤害"
	}
}
```


## 是兄弟就来砍我，血战攻沙，一刀999

- 触发值：`yidao999`
- 词条：`是兄弟就来砍我，血战攻沙，一刀999`
- 条件：`单次攻击造成999点伤害`
- 默认开启：`true`
- json：

```json
{
	"yidao999": {
		"enable": true,
		"msg": "是兄弟就来砍我，血战攻沙，一刀999",
		"condition": "单次攻击造成999点伤害"
	}
}
```


## 大难不死，必有后福

- 触发值：`useTotem`
- 词条：`大难不死，必有后福`
- 条件：`在濒临死亡时使用图腾`
- 默认开启：`true`
- json：

```json
{
	"useTotem": {
		"enable": true,
		"msg": "大难不死，必有后福",
		"condition": "在濒临死亡时使用图腾"
	}
}
```


## 喝点暖暖身子

- 触发值：`lava`
- 词条：`喝点暖暖身子`
- 条件：`舀一桶岩浆`
- 默认开启：`true`
- json：

```json
{
	"lava": {
		"enable": true,
		"msg": "喝点暖暖身子",
		"condition": "舀一桶岩浆"
	}
}
```

