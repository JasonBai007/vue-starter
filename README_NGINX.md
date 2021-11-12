## Nginx 常用配置

### 1、反向代理&&支持前端路由 history 模式

```bash
# 先匹配ajax请求，带api的先被拦截
location /api {
    # 代理到同一个服务器的9000端口
    proxy_pass http://localhost:9000;
    # 或者代理到另外一个服务器的9000端口
    # proxy_pass http://xxx.xxx.xxx.xxx:9000;
}
# 其余的就不走反向代理了
location / {
    # 支持前端路由history模式
    try_files $uri $uri/ /index.html;
}
```

### 2、启用 GZIP 压缩

可以放在 http、server、location 里

```bash
# 开启gzip
gzip on;
# 使用前端构建出来的gz文件
gzip_static on;
# 超过10kb的压缩
gzip_min_length 10k;
# 对特定的MIME类型生效
gzip_types text/javascript application/javascript text/css application/json;
# Nginx作为反向代理的时候启用
gzip_proxied any;
gzip_vary on;
# 压缩级别5级，范围1-9,越大压缩的越多，越费时间
gzip_comp_level 5;
gzip_buffers 16 8k;
gzip_http_version 1.1;
```

### 3、重定向

```bash
# 301永久重定向
rewrite ^/(.*) http://xxx.xxx.xxx.xxx permanent;
# 302临时重定向
rewrite ^/(.*) http://xxx.xxx.xxx.xxx redirect;
```

### 4、添加虚拟主机

```bash
server {
    # 设置端口号
    listen 8090;
    listen [::]:8090;
    server_name localhost;
    # 项目目录
    root /home/my-website;
    index index.html;
    # 设置反向代理，解决跨域问题
    location /api {
        proxy_pass http://localhost:9000;
    }
    # 支持前端路由history模式
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 5、资源缓存

```bash
server {
  # index.html不缓存，每次都来服务器检查是否最新。
  location = /index.html {
     add_header Cache-Control no-cache;
  }
  # 静态资源缓存时间30天
  location ~* \.(jpg|png|jpeg|gif|js|css)$ {      
      expires 30d;
      add_header Cache-Control public;
   }
}
```

### 6、负载均衡（前端很少用到）

有很多策略，参考这篇文章：https://juejin.im/post/5cae9de95188251ae2324ec3#heading-7

```bash
http {
    # 轮询（默认），请求过来后，Nginx 随机分配流量到任一服务器
    upstream backend {
        server 127.0.0.1:3000;
        server 127.0.0.1:3001;
    }
}
```

### 7、Websocket 超过1分钟中断问题

有很多策略，参考这篇文章：https://juejin.im/post/5cae9de95188251ae2324ec3#heading-7

```bash
server {
    # 匹配 ws 链接
    location /ws {
        proxy_connect_timeout 75s; # 最长75秒
        proxy_read_timeout 600s; # 如果后端数据超过10分钟，再中断，默认60s
        proxy_send_timeout 600s; # 前端超过10分钟才发送数据，就会中断，默认60s
    }
}
```

### 8、允许跨域访问某类请求

```bash
server {
    # 匹配 api 开头的请求
    location /api {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
        add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
    }
}
```
