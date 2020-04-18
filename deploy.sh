#!/bin/bash

# 首先，实现免密登录远程主机（要不然每次都需要输入用户名和密码）：

# 在项目根路径，bash环境下，一路回车，生成秘钥
# ssh-keygen
# 拷贝公钥到远端，期间输入一次用户名和密码
# ssh-copy-id root@xxx.xxx.xxx.xxx
# 验证是否可以免密登录
# ssh root@xxx.xxx.xxx.xxx

# 编译静态文件
yarn build
# 登录远端，并在远端执行删除旧文件的命令
ssh root@xxx.xxx.xxx.xxx "rm -rf /home/webpath/*"
# 拷贝本地文件到远端
scp -r ./dist/* root@xxx.xxx.xxx.xxx:/home/webpath