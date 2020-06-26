# 树莓派安装 OMV

> OMV 最新版本不需要写入硬盘镜像才能安装了，现在可以像是普通软件就能安装，只要安装 OMV 官网给的脚本即可执行

## OMV 安装

- 刷入树莓派官方镜像（这里用的是树莓派官方 buster 版本镜像）

* [OMV 树莓派安装文档](https://github.com/OpenMediaVault-Plugin-Developers/docs/blob/master/Adden-B-Installing_OMV5_on_an%20R-PI.pdf)

执行：

```bash
wget -O - https://github.com/OpenMediaVault-Plugin-Developers/installScript/raw/master/install | sudo bash
```

如果失败多试几次就行了
