<template>
  <div :class="pannelWrapClass">
    <div class="pannel-title" v-drag="'.pannel'">
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
  resize: none;
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