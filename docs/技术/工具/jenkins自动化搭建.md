# jenkins 自动化工具

## 搭建

### docker安装

``` bash
# 创建文件夹 data 用于存储jenkins数据
mkdir data
# touch: cannot touch '/var/jenkins_home/copy_reference_file.log': Permission denied
# Can not write to /var/jenkins_home/copy_reference_file.log. Wrong volume permissions?
# 如果不对文件夹设置权限会报错
sudo chown 1000 data/
docker run -p 8000:8080 -p 8001:50000 -v $PWD/data:/var/jenkins_home jenkins
```
访问：http://www.localhost:8000

jenkins 插件更新下载慢，设置清华大学镜像
```
https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json

# 修改工作目录下 `updates`
sed -i 's/http:\/\/updates.jenkins-ci.org\/download/https:\/\/mirrors.tuna.tsinghua.edu.cn\/jenkins/g' default.json && sed -i 's/http:\/\/www.google.com/https:\/\/www.baidu.com/g' default.json
```

```
java -jar jenkins.war --httpPort=8080
```

## 参数化构建

# 插件
```
# 类似选择框，可以选择参数
Extended Choice Parameter 
Git Parameter

```