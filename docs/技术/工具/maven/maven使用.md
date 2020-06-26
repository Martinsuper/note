# maven 使用

## 修改仓库地址
> 由于maven默认仓库国内下载依赖比较慢，这里使用阿里的仓库
在maven配置的 `setting.xml` 中的 `<mirrors></mirrors>` 标签中加入如下地址即可
``` xml
    <mirror>
         <id>alimaven</id>
         <mirrorOf>*</mirrorOf>
         <name>aliyun maven</name>
         <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
    </mirror>
```