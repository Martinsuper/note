# zookeeper 集群搭建

> zookeeper 安装很简单，需要安装 java 环境,这里就不再多说了

## zk 集群问题

- 集群搭建时要求至少有 3 台服务器，要求数量必须为 2n+1,如果集群出现问题，其中存活的机器必须大于 n+1 台，否则 leader 无法获取多数 server 的支持，系统自动挂掉。
  > 比如集群中有 3 台服务器，如果一台挂掉，集群重新选主，继续对外方提供服务；这个时候如果再挂掉 1 台服务器，则集群就停止对外提供服务。

```bash
function getSoftware()
{
    wget -P $1 $2
}

currentPath=$(cd `dirname $0`;pwd)
softwareLink="https://mirrors.tuna.tsinghua.edu.cn/apache/zookeeper/zookeeper-3.5.6/apache-zookeeper-3.5.6-bin.tar.gz"
server1="106.54.176.77"
server2="150.109.73.253"
server3="106.13.186.161"
getSoftware ${currentPath} ${softwareLink}
softwareName=${softwareLink##*/}
tar -xvf ${softwareName}
rm -rf ${softwareName}
foldName=${softwareName//".tar.gz"}

mkdir -p ${currentPath}/${foldName}/data ${currentPath}/${foldName}/logs
echo 1 > ${currentPath}/${foldName}/data/myid
cp ${currentPath}/${foldName}/conf/zoo_sample.cfg ${currentPath}/${foldName}/conf/zoo.cfg
sed -i "s:/tmp/zookeeper:${currentPath}/${foldName}/data:g" ${currentPath}/${foldName}/conf/zoo.cfg
sed -i "\$a dataLogDir=${currentPath}/${foldName}/logs" ${currentPath}/${foldName}/conf/zoo.cfg
sed -i "\$a quorumListenOnAllIPs=true" ${currentPath}/${foldName}/conf/zoo.cfg
echo -e "server.1=$server1:
```

主要需要注意的是，如果使用阿里云，百度云，或者腾讯云之类的，安装分布式集群的时候要注意，必须开启下面这个参数，不然很可能开启失败：

```
quorumListenOnAllIPs=true
```

主要原因是云提供商提供的 ip，其实并不是主机的网卡而是通过虚拟化技术分配的 ip 地址，不开启这个参数，zk 监听这个 ip 的话就会报错，必须开启监听所有的网卡。

<<<<<<< HEAD
使用集群的时候遇到的另外一个问题是最好使用 ip 地址，而不是域名，有时候使用域名就会报错，启动不了。
=======
## docker 启动

```bash
docker-compose -f ./docker-compose.yml up -d --build
```
>>>>>>> f3fd6212321af4ae1b49e6cdaa3153c3add82b5c
