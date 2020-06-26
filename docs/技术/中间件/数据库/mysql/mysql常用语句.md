# mysql 常用语句

## 统计数据库信息相关

### 查询数据库中所有表

```sql
-- 查询数据库所有表
show tables;
-- 查询所有数据库
show databases;
```

### 统计数据库某个表的所有数据

```sql
SELECT
  column_name AS '字段名称',
  column_comment AS '字段描述',
  UPPER(column_type) AS '字段类型',
  IF(column_key = 'PRI', 'YES', 'NO') AS '主键',
  IF(IS_NULLABLE = 'NO', 'YES', 'NO') AS '非空'
FROM
  information_schema.COLUMNS
WHERE
  TABLE_SCHEMA = '数据库名'
  AND table_name = '表名';
```
