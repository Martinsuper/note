# nginx 使用

- 让文件所有目录下文件都以 txt 格式文本打开，nginx 设置如下

```nginx
default_type text/plain;
```

## nginx 反向代理

```nginx
server {
    listen       80;
    server_name  dt.martind.cn;

    charset utf-8;
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html/dist;
        index  index.html index.htm;
    }
    location /shell {
        alias   /usr/share/nginx/html/shell;
        default_type text/plain;
        index  index.html index.htm;
            autoindex on;
    }
    location /image {
        alias   /usr/share/nginx/html/image;
        default_type text/plain;
        index  index.html index.htm;
            autoindex on;
    }
    location /file {
        alias   /usr/share/nginx/html/file;
        default_type text/plain;
        index  index.html index.htm;
            autoindex on;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

}
```

```nginx
server {
    listen       80;
    server_name  pi.martind.cn;

    charset utf-8;

    location / {
        proxy_pass http://pi.martind.cn:7001;
        proxy_connect_timeout 600;
        proxy_read_timeout 600;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

## 网页上传文件报错 413

```
# 添加如下内容在location中或者server中
client_max_body_size 20m;
```

## nginx 配置账号密码

```bash
sudo apt-get install apache2-utils
sudo htpasswd -c .htpasswd duan

```

然后在 http 中设置如下：

```conf
auth_basic "Username and Password are required";
auth_basic_user_file .htpasswd文件路径;
```

即如下内容即可

```conf
location / {
    # 转发给内网端口
    proxy_pass http://localhost:8080;
    proxy_connect_timeout 600;
    proxy_read_timeout 600;
    auth_basic "Username and Password are required";
    auth_basic_user_file /home/ubuntu/world/nginx/conf/vhost/.htpasswd;
}
```
