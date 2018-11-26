<template>
  <div>
    <div v-if="isEmpty">暂无数据</div>  
    <div v-else :id="randomId" style="width: 600px;height:400px;"></div>
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
    return {
      isEmpty: false //默认数据不为空
    };
  },
  computed: {
    myChart() {
      return echarts.init(document.getElementById(this.randomId));
    },
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
      if (opts && opts.series.length > 0) {
        this.isEmpty = false;
        this.myChart.setOption(opts);
      } else {
        this.isEmpty = true;
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
