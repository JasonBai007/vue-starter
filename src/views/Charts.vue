<template>
  <div>
    <button @click="fresh">刷新</button>
    <x-chart :options="options"></x-chart>
    <x-chart :options="options"></x-chart>
  </div>
</template>

<script>
import XChart from "@/components/XChart.vue";

export default {
  name: "chart",
  components: {
    XChart
  },
  data() {
    return {
      options: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      }
    };
  },
  methods: {
    fresh() {
      let arr = [];
      for (let i = 0; i < 7; i++) {
        arr.push(Math.random() * 100);
      }
      this.options.series[0].data = arr;
    }
  }
};
</script>
