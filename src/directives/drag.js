import Vue from "vue";

// 拖拽功能（PC端）
// 使用示例：
// <div class="pannel">
//     <header v-drag>我是脑袋</header>
// </div>
Vue.directive("drag", {
  inserted(el) {
    el.onmousedown = (e) => {
      // 拖拽开始的时候，将当前浮动框层级提升到最高
      // document.querySelectorAll('.pannel').forEach(node => node.style.zIndex = 2);
      // e.target.parentNode.style.zIndex = 3;
      let innerX = e.clientX - el.parentNode.offsetLeft;
      let innerY = e.clientY - el.parentNode.offsetTop;
      document.onmousemove = (e) => {
        el.parentNode.style.left = e.clientX - innerX + "px";
        el.parentNode.style.top = e.clientY - innerY + "px";
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
      // 防止黏连
      return false;
    };
  },
});
