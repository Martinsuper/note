# ubuntu 自动获取ip地址
> 安装虚拟机后设置第一个网卡为桥接网卡，第二个网卡为host-only模式，但是这个时候ubuntu无法重新获取ip地址

一次生效
```bash
sudo dhclient -r
sudo dhclient
```
重启依旧有效
编辑 `/etc/netplan、50-cloud-init.yaml` 文件
```bash
network:
    ethernets:
        enp0s3:
            dhcp4: true
        enp0s8:
            dhcp4: true
    version: 2
```