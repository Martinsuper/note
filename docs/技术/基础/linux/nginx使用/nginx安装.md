# nginx 安装

## 编译安装

下载 nginx，进入路径

```bash
./configure --prefix=/usr/local/nginx
```

可能会出现下面情况

```bash
./configure: error: the HTTP rewrite module requires the PCRE library.
You can either disable the module by using --without-http_rewrite_module
option, or install the PCRE library into the system, or build the PCRE library
statically from the source with nginx by using --with-pcre=<path> option.
```

```bash
sudo apt-get -y install libpcre3 libpcre3-dev
# sudo apt-get -y install openssl libssl-dev
```

可能会出现下面问题：

```
./configure: error: the HTTP gzip module requires the zlib library.
You can either disable the module by using --without-http_gzip_module
option, or install the zlib library into the system, or build the zlib library
statically from the source with nginx by using --with-zlib=<path> option.
```

安装

```bash
sudo apt-get install zlib1g-dev
```

最后执行

```bash
make && make install
```
