<template>
  <div>
    <span :class="classStr"></span>
  </div>
</template>

<script>
// How to use:
// in main.js file:
// import Type from '@/components/Type'
// Vue.use(Type)
// then you can use it globally like this:
// <type str="You can start from here."></type>

// 引入打字效果插件
import Typed from "typed.js";
export default {
  name: "type",
  data() {
    return {
      classStr: `random-${Math.random()
        .toString(36)
        .slice(-7)}`
    };
  },
  mounted() {
    new Typed(`.${this.classStr}`, {
      strings: [this.$attrs.str],
      typeSpeed: 100,
      shuffle: true
    });
  }
};
</script>

<style lang="scss" scoped>
</style>