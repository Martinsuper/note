# git 用法

## git 开启代理下载
> 有时候遇到git仓库下载慢的问题，我们可以通过两种方法解决，一是通过gitee仓库克隆下来git仓库然后下载，二是可以利用git的代理下载（首先要开启代理，然后这个配置才生效）
修改配置文件  `~/.gitconfig` 
```bash
[http]
	proxy = socks5://127.0.0.1:1080
[https]
	proxy = socks5://127.0.0.1:1080
```

## git子模块
> 当我们项目中有用到别人的git项目（如引用别人的主题，但是还想要随时更新）的时候，这个时候提交的时候就会提示不能提交带另外一个仓库的项目，这个时候 git 子模块就产生用处了

``` bash
# 添加子模块
git submodule add https://gitee.com/martind/hexo-theme-next.git themes/next
# 初始化子模块
git submodule init
# 更新子模块，重新拉下来代码是空的，这里是把子模块代码拉下来
git submodule update
# 删除子模块
git rm -r --cached themes/next
# 删除文件夹
rm -rf themes/next
```