<template>
  <div>
    <div :id="randomId" style="width: 600px;height:400px;"></div>  
  </div>
</template>

<script>
// 引入 ECharts 主模块
const echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "x-chart",
  props: {
    options: Object
  },
  data() {
    return {};
  },
  computed: {
    randomId() {
      return `ID${new Date().getTime()}`;
    }
  },
  mounted() {
    // 初始第一次渲染图表
    this.renderChart(this.options);
  },
  methods: {
    renderChart(opts) {
      const myChart = echarts.init(document.getElementById(this.randomId));
      if (opts) {
        myChart.setOption(opts);
      }
    }
  },
  watch: {
    options: {
      handler: function(n, o) {
        // 每次传过来的数值变化，都重新渲染图表
        this.renderChart(n);
      },
      deep: true
    }
  }
};
</script>
