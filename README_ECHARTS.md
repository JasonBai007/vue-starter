## ECharts 5 常用配置

### 1、动态改变容器高度

```javascript
// 动态改变容器高度
this.myChart.getDom().style.height = `${120 + this.categories.length * 40}px`;
// 渲染图表
this.myChart.setOption(this.options);
// 伸缩图表
this.myChart.resize();
```

### 2、代码操控图表刷子

```javascript
// 绘制刷子区域
this.myChart.dispatchAction({
    type: "brush",
    areas: [
        {
        xAxisIndex: 0,
        brushType: "lineX",
        coordRange: [X轴起止点坐标],
        },
    ],
});
```

### 3、监听图表里面的事件

```javascript
// 监听刷子事件
this.myChart.on("brushSelected", (params) => {    
    // 将起止时间戳数组赋值给父组件
    this.$parent.timeRange = params.batch[0].areas[0]?.coordRange ?? [];
});
````