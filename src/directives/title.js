// 定制每个页面的标题
export default {
  inserted(el, binding) {
    document.title = binding.value;
  },
}
