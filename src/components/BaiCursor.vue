<template>
  <!-- 假光标是一个圆盘DIV，跟随着鼠标移动 -->
  <div id="bai-cursor" :style="cursorStyle"></div>
</template>

<script>
/* 
Name：反差光标
Usage:

在 APP.vue 文件中引入并使用：
简单使用：
<bai-cursor />
复杂使用：
<bai-cursor :size="20" effect="screen" bgColor="red"/>

在 router 的全局守卫里：
router.afterEach((to, from) => {  

  // 子页面真实DOM渲染后  
  Vue.nextTick(() => {
    const cursor = document.querySelector("#bai-cursor");
    // 每次切换路由，先缩小光标大小到正常
    cursor.classList.remove("large-cursor");
    // 在这些类型的标签上放大假光标
    document.querySelectorAll("a,h1,button,i").forEach((node) => {
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
      required: false,
      default: 15,
    },
    // 假光标透视效果
    // mix-blend-mode 可选值：
    // https://www.jianshu.com/p/7a6fe5d29252?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation
    effect: {
      type: String,
      required: false,
      default: "difference",
    },
    /* 背景色 */
    bgColor: {
      type: String,
      required: false,
      default: "#fff",
    },
  },
  computed: {
    cursorStyle() {
      return {
        width: this.size * 2 + "px",
        height: this.size * 2 + "px",
        mixBlendMode: this.effect,
        background: this.bgColor,
      };
    },
  },
  mounted() {
    const cursor = document.querySelector("#bai-cursor");
    /* 假光标圆盘跟踪真实光标位置 */
    document.addEventListener("mousemove", (e) => {
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    });
  },
};
</script>

<style>
body * {
  /* 隐藏真实光标 */
  cursor: none !important;
}

#bai-cursor {
  position: fixed;
  top: -100;
  left: -100;
  z-index: 9999;
  box-sizing: border-box;
  border-radius: 50%;
  /* 让假光标圆盘不可点击 */
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.3s;
}
#bai-cursor.large-cursor {
  transform: translate(-50%, -50%) scale(2);
}
</style>