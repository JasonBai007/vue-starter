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

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn serve

# build for production with minification
yarn build

# analysis your dist files
yarn analysis

# deploy your application
yarn deploy

```

## Tech stack

- Vue @ 2.6.10
- Vue-Router
- Vuex
- @Vue/cli
- ES6
- Axios
- Element-UI @ 2.13.1
- Sass
- MockJS
- Yarn

## Notes

1. 借助 deploy.sh 实现一键部署。
2. 使用前，请先仔细阅读 Readme 文档并完善上面的必要信息。
3. 路由使用的是 hash 模式。
4. 如需修改 webpack 配置，请修改 vue.config.js 文件。
5. 为方便定制化组件库样式，选择 Sass 作为 CSS 预处理器。
6. assets/css/element-variables.scss 全局覆盖饿了么的样式变量。
7. 个别页面设计风格抄袭了[Vuexy](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/landing/)。
8. 部署前，先修改 vue.config.js 里面的配置项 publicPath。
