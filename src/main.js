// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入IE兼容垫片
import "babel-polyfill";
import Vue from "vue";
import mockjs from 'mockjs'
import App from "./App";
import router from "./router";
import i18n from "./lang";
import store from "./store";
import '@/directives';

// 引入封装的请求模块并绑定
import http from "./http";
Vue.prototype.$http = http;

// 引入全局过滤器
import '@/filters'

// 引入动画样式库
import animate from "animate.css";
Vue.use(animate);

// 引入完整版饿了么组件库
import ElementUI from "element-ui";
// 引入组件库样式文件
import "element-ui/lib/theme-chalk/index.css";
// 引入组件库自定义的样式变量文件
import "./assets/scss/element-variables.scss";
// 注册组件库
Vue.use(ElementUI);

// 引入打字效果全局组件
import Type from '@/components/Type'
Vue.use(Type)

// 引入font-awsome图标库
import "font-awesome/scss/font-awesome.scss";
// 引入谷歌字体文件
import "@/assets/css/fonts.css";

// 引入并注册ComingSoon全局组件
import ComingSoon from "@/components/ComingSoon/index.js";
Vue.use(ComingSoon);

// 引入虚拟滚动插件（最多展示50万行数据）
// https://github.com/Akryum/vue-virtual-scroller
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
Vue.use(VueVirtualScroller)

// 绑定中央事件总线
Vue.prototype.$bus = new Vue();

// 绑定mockjs
Vue.prototype.$mock = mockjs

// 阻止启动生产消息，否则会在控制台显示生产模式的消息
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
