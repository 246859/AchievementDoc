# 睡眠成就

由于插件是用简单的脚本语言写的，只能使用提供的API，无法访问BDS底层。在作者编写插件的那会，也就是LL版本为`2.7.0`那时候，提供的事件监听API只有`onBedEnter`，这个事件只能判断玩家是否上床，而且判定条件极为宽松，例如在白天玩家是无法睡觉的，玩家点击床时，即便距离不够，游戏内会提示无法睡觉或者床太远了，但是玩家依旧可以进入到这个事件中，也就是说被判定为上床，如果仅仅只是这样就实现了睡眠成就显然非常的不合理，经过了一番捣鼓，通过模拟线程睡眠和时间监测也还是实现了玩家睡醒后判定的效果，即便JS只是一门单线程的语言，算是曲线救国。



::: warning

**此种成就类型不支持自定义**。

:::



- **名称**：`睡眠成就`
- **类型名**：`sleep`
- **默认开启**：`true`
- **传入值**：`无`
- **词条数量**：`5`
- **json**：

```json
{
	"sleep": {
		"enable": true,
		"name": "睡眠成就",
		"details": {},
		"regx": {}
	}
}
```



## 云端之梦

- 触发值：`cloudDream`
- 词条：`云端之梦`
- 条件：`在云层之上睡一晚上`
- 默认开启：`true`
- json：

```json
{
	"cloudDream": {
		"enable": true,
		"msg": "云端之梦",
		"condition": "在云层之上睡一晚上"
	}
}
```


## 深渊之息

- 触发值：`undergroundDream`
- 词条：`深渊之息`
- 条件：`在洞穴层睡一晚上`
- 默认开启：`true`
- json：

```json
{
	"undergroundDream": {
		"enable": true,
		"msg": "深渊之息",
		"condition": "在洞穴层睡一晚上"
	}
}
```


## 精神饱满

- 触发值：`normalDream`
- 词条：`精神饱满`
- 条件：`安全的睡一晚上`
- 默认开启：`true`
- json：

```json
{
	"normalDream": {
		"enable": true,
		"msg": "精神饱满",
		"condition": "安全的睡一晚上"
	}
}
```


## 屋漏偏逢连夜雨

- 触发值：`rainDream`
- 词条：`屋漏偏逢连夜雨`
- 条件：`在雨中睡一晚上`
- 默认开启：`true`
- json：

```json
{
	"rainDream": {
		"enable": true,
		"msg": "屋漏偏逢连夜雨",
		"condition": "在雨中睡一晚上"
	}
}
```


## 冰雪之梦

- 触发值：`snowDream`
- 词条：`冰雪之梦`
- 条件：`在雪中睡一晚上`
- 默认开启：`true`
- json：

```json
{
	"snowDream": {
		"enable": true,
		"msg": "冰雪之梦",
		"condition": "在雪中睡一晚上"
	}
}
```



