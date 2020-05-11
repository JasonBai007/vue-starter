// 全局工具函数
// 使用方法：
// this.utils.formatNum(12345.12)
export default {
  install(Vue, options) {
    Vue.prototype.utils = {
      // 数字加千分符
      formatNum(num) {
        return Number(num).toLocaleString()
      },
      // method2 (val) {
      //  ...
      // },
    }
  }
}
