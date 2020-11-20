<template>
  <div class="player-wrap">
    <div class="player" v-drag="['3.5vw','80vh']">
      <i class="el-icon-caret-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "player",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.player {
  z-index: 6;
  background: #fff;
  padding: 15px;
  border-radius: 50%;
  box-shadow: 2px 2px 6px #666;
  // transition: all 0.5s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 2px #666;
  }
  i {
    font-size: 30px;
  }
}
</style>