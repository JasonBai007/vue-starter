<template>
  <div class="bread-wrap">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(obj,i) in $route.matched.slice(1)" :key="i">{{obj.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "bread",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.bread-wrap {
  background: #fff;
  padding: 20px 15px;
}
</style>


