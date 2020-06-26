# git编译安装
> git在centos中并不是最新版本的，如果想要体验最新版本的功能需要自己编译安装git

## 下载git

``` bash
wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.25.1.tar.gz
```

## 编译安装
 
``` bash
# 安装编译所需的依赖
sudo yum install curl-devel expat-devel gettext-devel \
    openssl-devel zlib-devel
# 解压
tar -xvf git-2.25.1.tar.gz
cd git-2.25.1
./configure --prefix=/root/world/git
make && make install
# 写入环境变量
export PATH=$PATH:/root/world/git/bin
```