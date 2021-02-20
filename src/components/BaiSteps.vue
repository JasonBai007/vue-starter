<template>
  <div :class="`step-wrap ${direction}`" :style="{'--themeColor':themeColor}">
    <div :class="[curStep===i? 'active' : '', 'item']" v-for="(step,i) in steps" :key="i">
      <div class="inner">
        <div class="index">{{i+1}}</div>
        <div class="title">{{step}}</div>
      </div>
      <div class="line" v-if="i<steps.length-1"></div>
    </div>
  </div>
</template>

<script>
// How to USE
// import BaiSteps from "@/components/BaiSteps"
// components: { BaiSteps }
// <bai-steps :curStep="status" :steps="steps" themeColor="#254324" direction="horizontal" @change="stepChange"></bai-steps>

// APIs
// 当前第n步：curStep
// 步骤数组：steps
// 主题色：themeColor
// 方向：direction (horizontal/vertical)
// change事件：参数为当前第n步
export default {
  name: "bai-steps",
  props: {
    curStep: {
      type: Number,
      default: 0,
    },
    steps: {
      type: Array,
      required: true,
      default: function () {
        return [];
      },
    },
    themeColor: {
      type: String,
      default: "#1890ff",
    },
    direction: {
      type: String,
      default: "horizontal",
    },
  },
  methods: {
    handleStepChange() {
      this.$emit("change", this.curStep);
    },
  },
  watch: {
    curStep: "handleStepChange",
  },
};
</script>

<style scoped>
.step-wrap {
  display: flex;
}
.item {
  display: flex;
  align-items: center;
  /* 前几个元素需要伸展开，平分空白空间 */
  flex-grow: 1;
}
/* 最后一个元素不能伸展开 */
.item:last-child {
  flex-grow: 0;
}
/* 水平布局 */
.horizontal .inner {
  display: flex;
  align-items: center;
}
/* 垂直布局 */
.vertical .inner .index {
  margin: 0 auto 7px;
}
.vertical .inner + .line {
  margin-top: -24px;
}
/* 分割线 */
.line {
  height: 0;
  border-top: 1px solid #ccc;
  flex-grow: 1;
  margin: 0 20px;
}
.title {
  color: #999;
}
.index {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #eee;
  border-radius: 50%;
  margin-right: 10px;
}
.item.active .index {
  color: #fff;
  background: var(--themeColor);
}
.item.active .title {
  color: #000;
}
</style>