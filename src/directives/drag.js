// 拖拽功能（PC端）
// v-drag="父级节点的class"
// 使用示例：
// <div class="pannel">
//     <header v-drag="'.pannel'">我是脑袋</header>
// </div>
export default {
  inserted(el, binding, vnode) {
    // 设置光标形态
    el.style.cursor = 'move'
    el.onmousedown = (e) => {
      // 拿到当前光标位置距离父节点左上角的距离差值
      let innerX = e.clientX - el.parentNode.offsetLeft;
      let innerY = e.clientY - el.parentNode.offsetTop;
      document.onmousemove = (e) => {
        // 设置父节点半透明
        el.parentNode.style.opacity = 0.5
        // 凸出显示当前父节点
        document.querySelectorAll(binding.value).forEach(node => node.style.zIndex = 2);
        e.target.parentNode.style.zIndex = 3;
        // 距离容器顶部的距离必须>=0
        let _top = e.clientY - innerY <= 0 ? 0 : e.clientY - innerY
        // 距离容器左侧的距离必须>=0
        let _left = e.clientX - innerX <= 0 ? 0 : e.clientX - innerX
        el.parentNode.style.top = _top + "px";
        el.parentNode.style.left = _left + "px";
      };
      document.onmouseup = () => {
        el.parentNode.style.opacity = 1
        document.onmousemove = null;
        document.onmouseup = null;
      };
      // 防止黏连
      return false;
    };
  },
}
