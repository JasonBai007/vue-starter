import type from './type.vue'
export default {
    // 全局注册打字效果组件，并起名字：type
    install: Vue => Vue.component('type', type)
}
