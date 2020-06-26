# ubuntu 使用

## ubuntu 安装后需要做的

### 中文输入法
搜狗输入法更新不够及时，现在ubuntu20.04不可用，所以这里使用的是谷歌输入法
```bash
sudo apt-get install fcitx-googlepinyin
```
### 下载工具uget
```bash
sudo apt-get install uget
```

## ubuntu 双系统修改默认启动项
```bash
sudo vim /etc/default/grub
# 修改GRUB_DEFAULT=0 改成启动项列表中的数字
# 修改完成后执行
sudo update-grub
```


## win10 和 ubuntu 时间不一致问题

1. 将硬件时间UTC改为CST
   ```bash
   sudo timedatectl set-local-rtc 1
   ```
2. 更新时间
   ```bash
   sudo apt-get install ntpdate
   sudo ntpdate time.windows.com
   ```


3. 更新时间到硬件
   ```bash
   sudo hwclock --localtime --systohc
   ```
   
 