# 食物成就

玩家吃完食物时会触发此成就。由于LL并没有提供此种类型的事件监听，只能监听到玩家尝试吃食物，于是作者自己实现了类似的效果，并将判定时间设置为了4秒，如果因为网络问题之类的4秒都还没有吃完，将无法触发该成就，且此成就用到了不止一个事件监听。

- **名称**：`食物成就`
- **类型名**：`eat`
- **默认开启**：`true`
- **传入值**：`食物的标准类型名`
- **词条数量**：`6`
- **json**：

```json
{
	"eat": {
		"enable": true,
		"name": "食物成就",
		"details": {}
	}
}
```




## 酸爽!

- 触发值：`minecraft:pufferfish`
- 词条：`酸爽!`
- 条件：`吃掉一个河豚`
- 默认开启：`true`
- json：

```json
{
	"minecraft:pufferfish": {
		"enable": true,
		"msg": "酸爽!",
		"condition": "吃掉一个河豚"
	}
}
```


## 是否接受该网站所有cookie设置

- 触发值：`minecraft:cookie`
- 词条：`是否接受该网站所有cookie设置`
- 条件：`吃掉一个饼干`
- 默认开启：`true`
- json：

```json
{
	"minecraft:cookie": {
		"enable": true,
		"msg": "是否接受该网站所有cookie设置",
		"condition": "吃掉一个饼干"
	}
}
```


## 海的味道，我知道

- 触发值：`minecraft:dried_kelp`
- 词条：`海的味道，我知道`
- 条件：`吃掉一个波力海苔`
- 默认开启：`true`
- json：

```json
{
	"minecraft:dried_kelp": {
		"enable": true,
		"msg": "海的味道，我知道",
		"condition": "吃掉一个波力海苔"
	}
}
```


## 勉强充饥

- 触发值：`minecraft:rotten_flesh`
- 词条：`勉强充饥`
- 条件：`吃掉一个僵尸腐肉`
- 默认开启：`true`
- json：

```json
{
	"minecraft:rotten_flesh": {
		"enable": true,
		"msg": "勉强充饥",
		"condition": "吃掉一个僵尸腐肉"
	}
}
```


## 每天一苹果，医生远离我

- 触发值：`minecraft:apple`
- 词条：`每天一苹果，医生远离我`
- 条件：`吃掉一个苹果`
- 默认开启：`true`
- json：

```json
{
	"minecraft:apple": {
		"enable": true,
		"msg": "每天一苹果，医生远离我",
		"condition": "吃掉一个苹果"
	}
}
```


## 数一数二的烧鸡!

- 触发值：`minecraft:cooked_chicken`
- 词条：`数一数二的烧鸡!`
- 条件：`吃掉一个烧鸡`
- 默认开启：`true`
- json：

```json
{
	"minecraft:cooked_chicken": {
		"enable": true,
		"msg": "数一数二的烧鸡!",
		"condition": "吃掉一个烧鸡"
	}
}
```

