#!/bin/bash
# 编译静态文件
yarn build
# 登录远端，并在远端执行删除旧文件的命令
ssh root@xxx.xxx.xxx.xxx "rm -rf /home/webpath/*"
# 本地拷贝文件到远端
scp -r ./dist/* root@xxx.xxx.xxx.xxx:/home/webpath