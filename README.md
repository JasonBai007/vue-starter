# vue-starter
Vue-starter is a powerful admin template built especially for front-end developers, it is user-friendly and straightforward, making it fast and simple to get started.

## Team members
产品：武则天  
设计：妲己  
前端：鲁班七号、后裔  
后端：东皇太一、亚瑟  
测试：蔡文姬

## Useful links
Vue-CLI Docs：[https://cli.vuejs.org/zh/config/](https://cli.vuejs.org/zh/config/)  
Product Docs：  
BackAPI Docs：  

## How to use

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn serve

# build for production with minification
yarn build

# preview your dist files
cd dist
http-server

# stop your local http server
Ctrl + C

# analysis your dist files
yarn analysis

```

## Tech stack
* Vue @ 2.6.10
* Vue-Router
* Vuex
* @Vue/cli
* ES6
* Axios
* Element-UI @ 2.13.0
* Sass
* MockJS
* Yarn

## Notes
1. 使用前，请先仔细阅读Readme文档并完善上面的必要信息。
2. 路由使用的是hash模式。
3. 如需修改webpack配置，请修改vue.config.js文件。
4. 使用了动态路由生成技术，路由和菜单是根据mock数据生成的。
5. 动态路由的技术思路，请参照我的[vue-seed](https://github.com/JasonBai007/vue-seed)项目的readme。
6. 为方便定制化组件库样式，选择Sass作为CSS预处理器。
7. assets/css/element-variables.scss 全局覆盖饿了么的样式。
8. 个别页面设计风格抄袭了[Vuexy](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/landing/)。
9. 部署前，先修改 vue.config.js 里面的配置项 publicPath。
