# zookeeper 使用

## 创建

```bash
# -s 顺序节点 -e 临时节点，不添加默认是持久节点，acl是指权限控制，缺省不做任何权限控制
create [-s] [-e] path data acl
```

## 读取

```bash
# 列出该路径下所有子节点，只能查看第一级子节点
ls path [watch]
# 查看目录下所有节点
ls -R path
# 获取指定节点的数据内容和属性信息
get path [watch]
```

## 更新

```bash
# 更新路径内容值，version是指哪个版本
set path data [version]
```

## 删除

```bash
# 删除指定节点
delete path [version]
```

## 分布式锁
当锁的持有者宕机了，锁就可以被释放，zokeeper的ephemeral节点有这个特性
```bash
# 终端一 执行
zkCli.sh
create -e /lock
# 终端二 执行
zkCli.sh
create -e /lock
stat -w /lock
# 终端一
quit
# 终端二
create -e /lock

```
