/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"




# macbook 重装后要做的事情

首先，要设置网络，国内安装homebrew经常失败
这里我都ss代理端口是1087，可以看一下自己的http代课端口是什么

```
export http_proxy=http://127.0.0.1:1087
export https_proxy=http://127.0.0.1:1087
```
export http_proxy=http://127.0.0.1:1080
export https_proxy=http://127.0.0.1:1080
首先安装终端工具 iTerm2



## 安装zsh

brew install zsh

切换zsh
chsh -s /bin/zsh

sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"


## 字体

git clone https://github.com/powerline/fonts.git --depth=1
cd fonts/install

## vscode 乱码
设置字体即可
```
"terminal.integrated.shell.osx": "/bin/zsh",
"terminal.integrated.fontFamily": "Meslo LG M for Powerline"
```
## mac 环境变量问题
重装系统后发现 `~/.bash_profile` 文件不存在，这个时候可以重新创建一个文件，用于配置用户环境变量