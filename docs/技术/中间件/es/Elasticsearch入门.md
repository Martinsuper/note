# ElasticSearch 入门
> `ElasticSearch` 是一个基于 `Lucene` 构建的开源、分布式、RESTful接口全文搜索引擎。可以在很短的时间内存储、搜索和分析大量数据。特点是高可用和可扩展。
> ElasticSearch 优点
> * 横向可扩展
> * 分片机制提供更好的分布性
> * 高可用
> * 使用简单

## Lucene
> Lucene 是一个开放源码的全文搜索引擎工具包，提供了完整的搜索查询引擎和索引引擎，部分文本分析引擎。Lucene使用倒排索引根据属性值查找记录。Lucene是基于关键词索引和查询的，建立索引即是根据关键字然后找到关键字所在文章号，关键字出现的位置然后进行索引记录下来，然后通过二分查找快速定位关键字。

Lucene将文档分为词典文件、频率文件、位置文件。每个词典文件保存了每个关键字，还保存了指向频率文件和位置文件的指针，通过指针可以找到该关键字的频率信息和位置信息。

## ElasticSearch 基础

### 创建索引

``` bash
PUT learn
```
指定分片数和副本数量（默认是5个分片，副本1个）

``` bash
PUT secisland
{
  "settings": {
    "index":{
      "number_of_shards": 2,
      "number_of_replicas": 2
    }
  }
}
```
### 修改
> 如果索引是处于开启状态则无法修改分片和副本数

``` bash
PUT secisland/_settings
{
    "number_of_replicas": 2
}
```
返回结果如下：
``` bash
{
  "acknowledged" : true,
  "shards_acknowledged" : true,
  "index" : "secislan_settings"
}
```

### 插入数据

``` bash
POST learn/test
{
	"name": "martin",
	"country": "China",
	"age": 25
}
```

### 查询
``` bash
GET _search
{
  "query":{
    "match": {
      "name": "martin"
    }
  }
}

```

#### 打开/关闭/删除索引

需要关闭索引 
打开/关闭索引
``` bash
# 关闭索引
POST secisland/_close
# 打开索引
POST secisland/_open
# 删除索引
DELETE secislan
```
返回结果：
``` bash
{
  "acknowledged" : true,
  "shards_acknowledged" : false,
  "indices" : { }
}
```
