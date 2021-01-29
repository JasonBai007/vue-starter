<template>
  <div class="chartWrap">
    <!-- 这里是要渲染的图表 -->
    <div :id="chartId" style="height:380px;"></div>
  </div>
</template>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入折线图组件
require("echarts/lib/chart/line");
require("echarts/lib/chart/bar");
// 引入提示框和图例组件
require("echarts/lib/component/title");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/toolbox");
require("echarts/lib/component/legend");

export default {
  name: "bai-chart",
  myChart: null,
  data() {
    return {};
  },
  computed: {
    // 生成随机字符，保证每个图表实例的ID都是唯一的
    chartId() {
      return Math.random().toString(36).substr(2);
    },
    // 图表主题色
    colorArr() {
      return this.$store.state.common.chartTheme;
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
      this.myChart = echarts.init(document.getElementById(this.chartId));
      // 监听窗口变化，一旦变化，立刻调用echarts的API，进行重新渲染
      window.onresize = () => {
        this.myChart.resize();
      };
    },
    renderChart(chartData) {
      let _options = Object.assign(
        {
          color: this.colorArr,
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
#myChartWrap {
  width: 100%;
}
</style>
