<template>
  <div class="tower-crane">
    <img src="../assets/img/components/tower/top.gif" class="top" />
    <div class="arm" :style="{ left: options.left + 'px' }">
      <img src="../assets/img/components/tower/hua.png" />
      <div class="strings" :style="{ height: options.height + 'px' }">
        <svg>
          <path :d="`M0 0 L13 ${options.height}`" stroke="#979797"></path>
          <path :d="`M26 0 L13 ${options.height}`" stroke="#979797"></path>
        </svg>
      </div>
      <div class="box">
        <img src="../assets/img/components/tower/hook.png" />
        <img src="../assets/img/components/tower/weight.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "towerCrane",
  props: ["options"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tower-crane {
  position: relative;
  width: 500px;
  height: 540px;
  background: url(../assets/img/components/tower/img-tower-body.png);
  background-repeat: no-repeat;
  background-position: center bottom;
}
.top {
  position: absolute;
  top: 20px;
  left: 116px;
}
.arm {
  position: absolute;
  z-index: 2;
  left: 244px;
  top: 118px;
  height: 500px;
  width: 60px;
  text-align: center;
}
.strings {
  width: 26px;
  margin: 0 auto;
}
svg {
  display: block;
  width: 100%;
  height: 100%;
}
img {
  display: block;
  margin: 0 auto;
}
</style>
