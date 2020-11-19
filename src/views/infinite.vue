<template>
  <div class="infinite-wrap">
    <div class="btn-wrap">
      <el-button type="primary" @click="toggleLock" size="small" :icon="isLock?'el-icon-lock': 'el-icon-unlock'">{{isLock? 'Lock' : 'Free'}}</el-button>
    </div>
    <el-card class="box-card">
      <RecycleScroller class="scroller" :items="list" :item-size="itemHeight" key-field="id" v-slot="{ item }">
        <div>{{ item.msg }}</div>
      </RecycleScroller>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "infinite",
  data() {
    return {
      isLock: true,
      itemHeight: 30, // 相当于行高
      list: [],
      intervalId: "",
    };
  },
  mounted() {
    this.generateData();
  },
  beforeDestroy() {
    // 切换页面时，销毁定时器
    clearInterval(this.intervalId);
  },
  methods: {
    generateData() {
      const scroller = document.querySelector(".scroller");
      this.intervalId = setInterval(() => {
        this.list.push({
          id: Date.now(), // 获取时间戳作为唯一的ID
          msg: `All work and no play makes Jack a dull boy - ${Date.now()}`,
        });
        // 如果锁定滚动条，就每次设置滚动条的y值
        if (this.isLock) {
          scroller.scrollTo(0, this.list.length * this.itemHeight);
        }
      }, 300);
    },
    toggleLock() {
      this.isLock = this.isLock ? false : true;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-wrap {
  text-align: right;
  margin-bottom: 10px;
}
.scroller {
  height: 60vh;
}
</style>