<template>
  <div class="chartWrap">
    <!-- 这里是要渲染的图表 -->
    <div :id="chartId"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "baiChart",
  myChart: null,
  data() {
    return {};
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
    window.onresize = null;
  },
  methods: {
    init() {
      this.setDomHeight();
      this.myChart = echarts.init(document.getElementById(this.chartId));
      // 监听窗口变化，一旦变化，立刻调用echarts的API，进行重新渲染
      window.onresize = () => {
        this.setDomHeight();
        this.myChart.resize();
      };
    },
    // 动态设置容器高度
    setDomHeight() {
      document.getElementById(this.chartId).style.height =
        document.querySelector(".chartWrap").clientHeight + "px";
    },
    renderChart(chartData) {
      const _options = Object.assign(
        {
          // title: {
          //   text: "your title",
          // },
        },
        chartData // 直接使用props中的chartData渲染图表
      );
      this.myChart.setOption(_options);
    },
  },
  watch: {},
};
</script>
<style lang="scss">
.chartWrap {
  width: 100%;
  height: 100%;
}
</style>
