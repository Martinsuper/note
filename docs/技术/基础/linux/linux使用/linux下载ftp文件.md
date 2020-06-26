# linux 命令行下下载 ftp 文件

```bash
curl -O -u username:passwd ftp://martind.cn/test/t.txt
```

## curl 执行脚本

```bash
curl -u 用户名 链接 | bash
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
