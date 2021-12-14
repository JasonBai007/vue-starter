<template>
  <div class="offset-wrap">
    <!-- 图表组件，默认关闭防抖效果，可设置开启 -->
    <bai-chart ref="myChart"></bai-chart>
  </div>
</template>

<script>
// 引入自己写的通用图表组件
import BaiChart from "@/components/BaiChart";
import Mock from "mockjs";
export default {
  name: "offset",
  components: { BaiChart },
  data() {
    return {
      arr: [],
      colors: {
        origin: ["rgba(192, 196, 204, 0.2)", "#909399"],
        normal: ["rgba(225, 243, 216, 0.2)", "#67C23A"],
        abnormal: ["rgba(253, 226, 226, 0.2)", "#F56C6C"],
      },
    };
  },
  computed: {},
  mounted() {
    this.mockData();
    this.renderChart();
  },
  methods: {
    mockData() {
      for (let i = 0; i <= 616; i++) {
        // 正常范围：[-150,150]
        // 边界值：[-200,100] [-100,200]
        // 超出边界值算偏移
        let low = Mock.mock("@integer(-220,-80)");
        let high = low + 300;
        let isAbnormal = low <= -200 || high >= 200;
        let isOrigin = low == -150 && high == 150;
        let _color = (() => {
          if (isOrigin) {
            return this.colors.origin[0];
          }
          if (isAbnormal) {
            return this.colors.abnormal[0];
          } else {
            return this.colors.normal[0];
          }
        })();
        let _borderColor = (() => {
          if (isOrigin) {
            return this.colors.origin[1];
          }
          if (isAbnormal) {
            return this.colors.abnormal[1];
          } else {
            return this.colors.normal[1];
          }
        })();
        this.arr.push({
          value: [low, high, low, high],
          itemStyle: {
            color: _color,
            borderColor: _borderColor,
            borderWidth: 2,
          },
        });
      }
      console.log(this.arr);
    },
    renderChart() {
      let option = {
        xAxis: {
          data: Object.keys(this.arr).map((num) => Number(num) + 1),
        },
        yAxis: {
          min: -250,
          max: 250,
          axisLine: {
            show: true,
          },
        },
        tooltip: {
          formatter: (params) => {
            console.log(params);
            return (
              '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' +
              params.borderColor +
              ';"></span>' +
              (Number(params.dataIndex) + 1) +
              "环" +
              "<br>" +
              "偏差量：" +
              (params.value[2] - 150)
            );
          },
        },
        dataZoom: [
          {
            type: "inside",
            start: 95,
            end: 100,
            zoomLock: true,
          },
          {
            show: true,
            type: "slider",
            top: "92%",
            start: 95,
            end: 100,
            zoomLock: true,
            brushSelect: false,
          },
        ],
        series: [
          {
            type: "candlestick",
            barWidth: "100%",
            data: this.arr,
            // data: [
            //   {
            //     value: [-20, 34, -20, 34],
            //     itemStyle: {
            //       color: "rgb(225, 243, 216)",
            //       borderColor: "#67C23A",
            //     },
            //   },
            //   {
            //     value: [-15, 35, -15, 35],
            //     itemStyle: {
            //       color: "rgb(250, 236, 216)",
            //       borderColor: "#E6A23C",
            //     },
            //   },
            //   {
            //     value: [-21, 38, -21, 38],
            //     itemStyle: {
            //       color: "rgb(253, 226, 226)",
            //       borderColor: "#F56C6C",
            //     },
            //   },
            // ],
          },
        ],
      };
      this.$refs.myChart.renderChart(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.offset-wrap {
  height: 80vh;
}
</style>


