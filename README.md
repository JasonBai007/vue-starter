# project-starter

## Profile
a fast starter-kit for vue projects.

## Team members
PM: 黄忠  
FE：鲁班七号、蔡文姬  
BE：甄姬、亚瑟

## Useful links
vue/cli：[https://cli.vuejs.org/zh/guide/webpack.html](https://cli.vuejs.org/zh/guide/webpack.html)  
产品文档：  
接口文档：  
仓库地址：

## How to use

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# preview your dist files
cd dist
http-server

# stop your local http server
Ctrl + C

# analysis your dist files
yarn run analysis

```

## Tech stack
* Vue @ 2.5.17
* Vue-Router
* @Vue/cli
* Vuex
* ES6
* Axios
* Element-UI @ 2.4.8
* Sass
* MockJS
* Yarn

## Notes
1. 使用前，确保已安装了最新版的第三方组件库。
2. 使用前，请先仔细阅读Readme文档并完善上面的必要信息。
3. 如需修改webpack配置，请修改vue.config.js文件。
4. 查看并输出webpack配置，在项目根目录执行：vue inspect > output.js
5. 本项目，兼容IE9及以上。
6. 为了后期可能会全局改变饿了么的样式，所以CSS预处理器换成了Sass。
7. assets/css/element-variables.scss 全局覆盖饿了么的样式。