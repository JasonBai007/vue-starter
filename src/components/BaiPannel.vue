<template>
  <div :class="pannelWrapClass">
    <div class="pannel-title" @mousedown="move">
      <span class="title">
        <!-- title slot -->
        <slot name="title">Your Title</slot>
      </span>
      <!-- 右侧按钮区 -->
      <div class="btns">
        <span @click="toggle">{{isFold? '+' : '—'}}</span>
      </div>
    </div>
    <div class="pannel-body">
      <!-- body slot -->
      <slot name="body">Your body</slot>
    </div>
  </div>
</template>

<script>
// How to USE:
// import BaiPannel from "@/components/BaiPannel.vue";

// components: {
//   BaiPannel,
// }

// <bai-pannel v-for="(p,i) in pannelData" :key="i" :title="p.title">
//   <template v-slot:title>
//     <span>{{p.title}}</span>
//   </template>
//   <template v-slot:body>
//     <p>body from father.</p>
//   </template>
// </bai-pannel>
export default {
  name: "baiPannel",
  data() {
    return {
      isFold: false, // 默认不折叠
    };
  },
  computed: {
    pannelWrapClass({ isFold }) {
      return { pannel: true, fold: isFold };
    },
  },
  mounted() {
    this.setPosition();
  },
  methods: {
    // 初始化时设置悬浮框位置，错开展示
    setPosition() {
      document.querySelectorAll(".pannel").forEach((node, i) => {
        let n = i + 1;
        node.style.left = 20 * n + "px";
        node.style.top = 20 * n + "px";
      });
    },
    // 展开收起悬浮框
    toggle() {
      this.isFold = !this.isFold;
    },
    // 悬浮框拖动事件
    move(e) {
      let isDown = true;
      let parent = e.target.parentNode;
      // 刚按下时，悬浮框距离顶部和左边缘的距离
      let left = parent.offsetLeft;
      let top = parent.offsetTop;
      let cX = e.clientX;
      let cY = e.clientY;
      // 拍平所有pannel的层级
      document.querySelectorAll(".pannel").forEach((node) => {
        node.style.zIndex = 0;
      });
      // 单独设置自己的层级更高
      parent.style.zIndex = 1;
      // 必须为document绑定事件，否则容易中断
      document.addEventListener("mousemove", (e) => {
        if (isDown) {
          // 实现灵魂拖拽
          parent.style.opacity = 0.5;
          if (e.clientX - cX + left > 0) {
            // 新位置距离左边缘的距离 = 实际移动距离（e.clientX - cX）+ 初始距离
            parent.style.left = e.clientX - cX + left + "px";
          } else {
            parent.style.left = "0px";
          }
          if (e.clientY - cY + top > 0) {
            // 同上
            parent.style.top = e.clientY - cY + top + "px";
          } else {
            parent.style.top = "0px";
          }
        }
      });
      document.addEventListener("mouseup", (e) => {
        isDown = false;
        parent.style.opacity = 1;
        document.removeEventListener("mousemove", null);
      });
    },
  },
};
</script>

<style scoped>
.pannel {
  width: 200px;
  min-width: 200px;
  min-height: 38px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  resize: both;
}
.pannel.fold {
  height: 38px !important;
}
.pannel-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: hsl(220, 4%, 58%);
  color: #fff;
}
.pannel-title:hover {
  cursor: move;
}
.pannel-title .title:hover {
  cursor: text;
}

.pannel-title .btns:hover {
  font-weight: bold;
  cursor: pointer;
}

.pannel-body {
  word-wrap: break-word;
  padding: 10px;
  background: #fff;
  height: calc(100% - 38px);
  box-sizing: border-box;
  overflow: hidden;
}
.control {
  box-sizing: border-box;
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-left: 6px solid transparent;
  border-right: 6px solid #aaa;
  border-bottom: 6px solid #aaa;
}
.control:hover {
  cursor: nwse-resize;
}
</style>