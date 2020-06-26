# nginx 反向代理

## 主文件配置

在 `nginx.conf` 配置 http 配置最后加入

```conf
include /home/ubuntu/world/nginx/nginx/conf/vhost/*.conf;
```

如下是配置

```conf

#user  nobody;
worker_processes  1;
error_log  logs/error.log  info;
events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;
    server {
        listen       80;
        server_name  localhost;
        location / {
            root   html;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    }
    include vhost/*.conf;
}

```

然后在 `nginx.conf` 同级目录下创建 `vhost` 文件夹，然后可以在这里创建后缀为 `.conf` 的配置文件，然后在里面配置

```conf
server {
    listen       80;
    server_name  do.martind.cn;
    charset utf-8;
    location / {
        # 转发给内网端口
        proxy_pass http://localhost:5888;
        proxy_connect_timeout 600;
        proxy_read_timeout 600;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```
