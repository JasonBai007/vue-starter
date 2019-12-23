<template>
  <div>
    <!-- 侧导航 -->
    <side-bar></side-bar>
    <div class="con-wrap" :class="{conCollapse: isCollapse}">
      <!-- 顶部导航 -->
      <top-bar></top-bar>
      <!-- 面包屑 -->
      <bread v-if="$route.path !== '/dashboard'"></bread>
      <!-- 右侧主体页面部分 -->
      <transition name="slide-fade">
        <router-view class="page-component-wrap"></router-view>
      </transition>
      <!-- 页脚 -->
      <v-footer />
    </div>
  </div>
</template>
<script>
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import Bread from "@/components/Bread";
import Footer from "@/components/Footer";
export default {
  name: "layout",
  computed: {
    isCollapse() {
      return this.$store.state.common.isCollapse;
    }
  },
  components: {
    Bread,
    "top-bar": TopBar,
    "side-bar": SideBar,
    "v-footer": Footer
  }
};
</script>
<style lang="scss" scoped>
.con-wrap {
  position: relative;
  background: #f3f3f3;
  min-height: 100vh;
  padding-left: 180px;
  transition: all 0.3s;
  h3 {
    margin-top: 0;
    color: #324157;
  }
  .page-component-wrap {
    padding: 15px 15px 60px 15px; 
  }
}
.con-wrap.conCollapse {
  padding-left: 64px;
  transition: all 0.3s;
}
/* 可以设置不同的进入和离开动画 */
.slide-fade-enter-active {
  transition: all 0.6s;
}
.slide-fade-leave-active {
  // transition: all .3s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-5px);
  opacity: 0;
}
</style>

