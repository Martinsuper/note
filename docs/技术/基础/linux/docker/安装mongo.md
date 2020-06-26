# 安装mongodb

```shell
docker run -d -p 27017:27017 --name mymongo \
    -e MONGO_INITDB_ROOT_USERNAME=duan \
    -e MONGO_INITDB_ROOT_PASSWORD=dly3230 \
    mongo
```

```
db.createUser({
    user: 'duan',
    pwd: 'dly3230',
    roles: [{ role: 'readWrite', db:'admin'}]
    db.createUser({user:"duan",pwd:"dly3230",roles:["dbAdmin"]})
```