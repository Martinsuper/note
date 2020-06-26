# mongodb 安装和使用


## mongodb 安装

### 创建用户密码
```bash
# 这里readWrite就是读写权限，dbName是指自己要使用数据库名称
db.createUser({
    user: 'userName',
    pwd: 'password',
    roles: [{ role: 'readWrite', db:'dbName'}]
```

## mongodb 使用





