// 切换全屏功能
// 示例：<i class="el-icon-full-screen" v-fullscreen="'.wrap'"></i>
export default {
  inserted(el, bind) {
    let targetDom = document.querySelector(bind.value);
    el.onclick = (e) => {
      let isFullscreen = targetDom.offsetHeight === window.screen.height;
      if (isFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (targetDom.requestFullscreen) {
          targetDom.requestFullscreen();
        } else if (targetDom.webkitRequestFullScreen) {
          targetDom.webkitRequestFullScreen();
        } else if (targetDom.mozRequestFullScreen) {
          targetDom.mozRequestFullScreen();
        } else if (targetDom.msRequestFullscreen) {
          targetDom.msRequestFullscreen();
        }
      }
    };
  },
}
