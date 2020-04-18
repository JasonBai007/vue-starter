// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入垫片兼容IE
import "babel-polyfill";
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import http from "./http";
import i18n from "./lang";
// 引入全局工具函数
import * as utils from "./utils";
// 引入全局过滤器
// import '@/filters'
// 在入口处引入模拟的假数据
import "@/mock";
import animated from "animate.css";
// 引入完整的饿了么组件库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/scss/element-variables.scss";
import "font-awesome/scss/font-awesome.scss";
import "@/assets/css/fonts.css";
Vue.use(ElementUI);
Vue.use(animated);
// 将http绑定到vue原型上
Vue.prototype.$http = http;
// 将公共汽车绑定到vue原型上
Vue.prototype.$bus = new Vue();
// Vue 的全局配置
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
