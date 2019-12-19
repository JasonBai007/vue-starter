import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入AXIOS
import axios from 'axios'
// 完整引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入饿了么全局样式覆盖文件
import './assets/css/element-variables.scss'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
