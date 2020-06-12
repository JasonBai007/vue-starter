// 全局工具函数

// 数字加千分符
// Example:
// import {formatNum} from "@/utils"
// formatNum(1234567)
export const formatNum = (num) => {
  return Number(num).toLocaleString()
}

// 节流
// Example:
// import {throttle} from "@/utils"
// methods: {
//   search: throttle(function() {
//     // do something
//   }, 1000),
// }
export const throttle = (fn, t) => {
  let prev = Date.now();
  return function () {
    let now = Date.now();
    if (now - prev >= t) {
      fn.apply(this, arguments);
      prev = now;
    }
  }
}

// 防抖
// Example:
// import {debounce} from "@/utils"
// methods: {
//   search: debounce(function() {
//     // do something
//   }, 1000),
// }
export const debounce = (fn, t) => {
  let timeout = null;
  return function () {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, t);
  }
}

