# hexo 安装使用

## 安装

```shell
npm install -g -cli
 init
npm install
```

## 安装主题

```shell
git clone https://github.com/theme-next/-theme-next themes/next
# 如果想要提交到远程仓库就需要使用git的子模块功能了
git submodule add https://github.com/iissnan/h
exo-theme-next themes/next
```
rm -rf themes/next/

## 启用next主题

在 `_config.yml`中修改默认主题

```yml
theme: next
```

## 使用

###  启动

```
 -p 80 server
```



### 添加分类页

```shell
 new page categories
```

编辑新生成的`index.md`添加`type`字段

```yaml
---
title: 分类
date: 2019-02-14 13:28:21
type: "categories"
---
```

### 添加标签页

```shell
 new page tags
```

编辑新生成的 `index.md` 添加 `type` 字段

```yaml
type: "tags"
```

### 设置阅读全文

在 `_config.yml` 中修改

```yml
auto_excerpt:
  enable: ture
  length: 150
```



## 主题使用

```
npm install -renderer-pug --save
npm install -renderer-sass --save
```

