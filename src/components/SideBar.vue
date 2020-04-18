<!-- 左侧导航组件 -->
<!-- 使用说明：<side-bar></side-bar> -->
<template>
  <div id="sidebar-wrap" :class="{ collapsed: isFold }">
    <!-- 顶部图标 -->
    <h3 class="logo">
      <span>{{isFold || langType === 'en' ? 'VS': 'Vue Starter'}}</span>
    </h3>

    <!-- 侧栏菜单 -->
    <el-menu :default-active="$route.path" :unique-opened="true" :router="true" :collapse="isFold">
      <el-menu-item index="/dashboard">
        <i class="el-icon-menu"></i>
        <span slot="title">Dashboard</span>
      </el-menu-item>
      <el-menu-item index="/account">
        <i class="el-icon-s-tools"></i>
        <span slot="title">人员管理</span>
      </el-menu-item>
      <el-menu-item index="/weather">
        <i class="el-icon-picture"></i>
        <span slot="title">气象信息</span>
      </el-menu-item>
      <el-submenu index>
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>其它页面</span>
        </template>
        <el-menu-item index="/others/blank">Blank</el-menu-item>
        <el-menu-item index="/401">401</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    return {
      isMusicOn: false,
      menu: localStorage.menu ? JSON.parse(localStorage.menu) : []
    };
  },
  computed: {
    isFold() {
      return this.$store.state.common.isCollapse;
    },
    langType() {
      return this.$i18n.locale;
    }
  },
  created() {},
  methods: {}
};
</script>
<style scoped lang="scss">
#sidebar-wrap {
  width: 180px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  transition: all 0.3s;
  background: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  &.collapsed {
    width: 64px;
    transition: all 0.3s;
  }
  .logo {
    color: #333;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    padding: 18px 0;
    margin: 0;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #efefef;
  }
}

.el-menu {
  height: 100%;
}

// 美化左侧导航的留白
.el-submenu .el-menu-item {
  padding: 0 20px;
  min-width: 160px;
  padding-left: 50px !important;
}
</style>
