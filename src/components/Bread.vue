<template>
  <div class="bread-wrap">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in list" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "bread",
  data() {
    return {
      list: []
    };
  },
  methods: {
    generateList(str) {
      this.list = str.split("&");
    }
  },
  watch: {
    $route: {
      handler: function(n, o) {
        this.generateList(n.meta.bread);
      },
      immediate: true // 这样就不用在mounted钩子函数里调用generateList方法了
    }
  }
};
</script>

<style lang="scss" scoped>
.bread-wrap {
  background: #fff;
  padding: 20px 15px;
}
</style>


