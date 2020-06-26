# 安装nextcloud

## 添加扫描路径

``` bash
docker exec cloud su www-data -s /bin/bash -c "php /var/www/html/occ files:scan --all"
```