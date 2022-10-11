# 装备成就

::: warning

**此种成就类型不支持自定义**。

:::

玩家装备盔甲时会触发此成就。

- **名称**：`装备成就`
- **类型名**：`armor`
- **默认开启**：`true`
- **传入值**：`无`
- **词条数量**：`3`
- **json**：

```json
{
	"armor": {
		"enable": true,
		"name": "装备成就",
		"details": {}
	}
}
```




## 全副武装

- 触发值：`setAll`
- 词条：`全副武装`
- 条件：`装备一套任意盔甲`
- 默认开启：`true`
- json：

```json
{
	"setAll": {
		"enable": true,
		"msg": "全副武装",
		"condition": "装备一套任意盔甲"
	}
}
```


## 芜湖起飞!

- 触发值：`preFly`
- 词条：`芜湖起飞!`
- 条件：`装备鞘翅`
- 默认开启：`true`
- json：

```json
{
	"preFly": {
		"enable": true,
		"msg": "芜湖起飞!",
		"condition": "装备鞘翅"
	}
}
```


## 武装到牙齿

- 触发值：`netheriteAll`
- 词条：`武装到牙齿`
- 条件：`装备一套合金盔甲`
- 默认开启：`true`
- json：

```json
{
	"netheriteAll": {
		"enable": true,
		"msg": "武装到牙齿",
		"condition": "装备一套合金盔甲"
	}
}
```

