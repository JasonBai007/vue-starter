// 移动版drag指令
// 使用示例：
// <div class="pannel">
//     <header v-drag-m>我是移动脑袋</header>
// </div>
export default {
  inserted(el) {
    el.ontouchstart = (e) => {
      e.preventDefault();
      let innerX = e.targetTouches[0].clientX - el.parentNode.offsetLeft;
      let innerY = e.targetTouches[0].clientY - el.parentNode.offsetTop;
      document.ontouchmove = (e) => {
        // 计算出右边界
        let rightLine =
          e.targetTouches[0].clientX - innerX + el.parentNode.offsetWidth;
        if (rightLine <= el.parentNode.offsetWidth) {
          // 右边界 <= 浮动框的宽度
          el.parentNode.style.left = "0px";
        } else if (
          rightLine > el.parentNode.offsetWidth &&
          rightLine < document.documentElement.clientWidth
        ) {
          // 浮动框的宽度 <= 右边界 <= 页面宽度
          el.parentNode.style.left = e.targetTouches[0].clientX - innerX + "px";
        } else {
          // 右边界 > 页面宽度
          el.parentNode.style.left =
            document.documentElement.clientWidth -
            el.parentNode.offsetWidth +
            "px";
        }
        // 距离顶部距离 > 0
        if (e.targetTouches[0].clientY - innerY > 0) {
          el.parentNode.style.top = e.targetTouches[0].clientY - innerY + "px";
        } else {
          el.parentNode.style.top = "0px";
        }
      };
      document.ontouchend = () => {
        document.ontouchmove = null;
        document.ontouchend = null;
      };
    };
  },
}
