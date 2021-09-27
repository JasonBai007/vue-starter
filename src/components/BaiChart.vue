<template>
  <div class="chartWrap">
    <!-- 这里是要渲染的图表容器 -->
    <div :id="chartId"></div>
  </div>
</template>
<script>
// 完整引入echarts
import * as echarts from "echarts";
export default {
  name: "baiChart",
  myChart: null,
  data() {
    return {
      // 基础配置
      basicOptions: {
        color: [
          "#2ec7c9",
          "#b6a2de",
          "#5ab1ef",
          "#ffb980",
          "#d87a80",
          "#8d98b3",
          "#e5cf0d",
          "#97b552",
          "#95706d",
          "#dc69aa",
          "#07a2a4",
          "#9a7fd1",
          "#588dd5",
          "#f5994e",
          "#c05050",
          "#59678c",
          "#c9ab00",
          "#7eb00a",
          "#6f5553",
          "#c14089",
        ],
        // title: {
        //   text: "Live Signals",
        //   left: "center",
        //   top: 10,
        // },
      },
    };
  },
  computed: {
    // 生成随机字符，保证每个图表实例的ID都是唯一的
    chartId() {
      return Math.random().toString(36).substr(2);
    },
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    // 销毁前取消监听
    window.removeEventListener("resize", null);
  },
  methods: {
    init() {
      this.myChart = echarts.init(document.getElementById(this.chartId));
      this.setContainerHeight();
      window.addEventListener("resize", this.setContainerHeight);
    },
    // 设置容器高度并重新绘制图表
    setContainerHeight() {
      this.myChart.resize({
        height: document.querySelector(".chartWrap").clientHeight + "px",
      });
    },
    // 绘制图表
    renderChart(chartData) {
      const _options = Object.assign({}, this.basicOptions, chartData);
      this.myChart.setOption(_options);
    },
  },
};
</script>
<style lang="scss">
// 父级高度100%，跟随窗口变化
.chartWrap {
  width: 100%;
  height: 100%;
}
</style>
