<template>
  <div class="bai-cursor" :style="cursorStyle"></div>
</template>

<script>
/* 
Name：反差光标
Usage:

在 APP.vue 文件中引入并使用
<bai-cursor :size="15" effect="screen"/>

在 router 的全局守卫里：
router.afterEach((to, from) => {  

  // 子页面真实DOM渲染后  
  Vue.nextTick(() => {
    const cursor = document.querySelector(".bai-cursor");
    // 在这些类型的标签上放大假光标
    document.querySelectorAll("a,h1,.goup,button").forEach((node) => {
      node.addEventListener("mouseenter", (e) => {
        cursor.classList.add("large-cursor");
      });
      node.addEventListener("mouseleave", (e) => {
        cursor.classList.remove("large-cursor");
      });
    });
  })
  
}) */

export default {
  name: "baiCursor",
  props: {
    // 假光标半径大小
    size: {
      type: Number,
      default: 15,
    },
    // 假光标透视效果
    // mix-blend-mode 可选值：
    // normal
    // multiply
    // screen
    // overlay
    // darken
    // lighten
    // color-dodge
    // color-burn
    // hard-light
    // soft-light
    // difference
    // exclusion
    // hue
    // saturation
    // color
    // luminosity
    effect: {
      type: String,
      default: "difference",
    },
  },
  computed: {
    cursorStyle() {
      return {
        width: this.size * 2 + "px",
        height: this.size * 2 + "px",
        mixBlendMode: this.effect,
      };
    },
  },
  mounted() {
    const cursor = document.querySelector(".bai-cursor");
    /* 假光标圆盘跟踪真实光标位置 */
    document.addEventListener("mousemove", (e) => {
      cursor.style.top = e.clientY - this.size + "px";
      cursor.style.left = e.clientX - this.size + "px";
    });
  },
};
</script>

<style>
body * {
  /* 隐藏光标 */
  cursor: none !important;
}

.bai-cursor {
  border-radius: 50%;
  background: #fff;
  position: fixed;
  top: -100;
  left: -100;
  z-index: 9999;
  /* 让假光标圆盘不可点击 */
  pointer-events: none;
  transition: transform 0.3s;
}
.large-cursor {
  transform: scale(2);
}
</style>