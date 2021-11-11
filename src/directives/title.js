import Vue from "vue";

// 定制每个页面的标题
Vue.directive("title", {
  inserted(el, binding) {
    document.title = binding.value;
  },
})
