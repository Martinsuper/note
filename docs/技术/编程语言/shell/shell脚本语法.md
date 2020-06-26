## shell 脚本语法

### 获取当前目录

```bash
$(pwd)
```

获取正在执行的脚本的路径

```bash
basepath=$(cd `dirname $0`; pwd)
```

## curl 下载 ftp

```bash
curl -O -u username:passwd ftp://martind.cn/test/t.txt
```

## curl 执行脚本

```bash
# 执行脚本
curl -u 用户名 链接 | bash
# curl 执行脚本传参
curl http://dt.martind.cn/shell/linux/killpid.sh | bash -s 参数
```

## curl 下载

```bash
curl -L -O 链接
```

## wget 下载

```bash
# 普通下载
wget 链接
# 对于有用户名和密码的
weget --http-user=用户名 --http-passwd=密码 链接
```
