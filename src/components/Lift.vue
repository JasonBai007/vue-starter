<template>
  <div class="lift">
    <div class="left" :style="{ top: 421 - options.left.height + 'px' }">
      <!-- 后门 -->
      <img src="../assets/img/components/lift/leftBack.png" :class="{ leftBack: true, openLeftDoor: options.left.backStatus, closeLeftDoor: !options.left.backStatus }" />
      <!-- 笼子 -->
      <img src="../assets/img/components/lift/leftCage.png" class="leftCage" />
      <!-- 前门 -->
      <img src="../assets/img/components/lift/leftFront.png" :class="{ leftFront: true, openLeftDoor: options.left.frontStatus, closeLeftDoor: !options.left.frontStatus }" />
    </div>
  </div>
</template>

<script>
export default {
  name: "lift",
  props: ["options"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.lift {
  position: relative;
  width: 500px;
  height: 540px;
  background: url(../assets/img/components/lift/bg.png);
  background-repeat: no-repeat;
  background-position: center bottom;
}
.left {
  position: absolute;
  left: 133px;
  width: 97px;
  height: 106px;
}
.left img {
  position: absolute;
}
.leftBack,
.leftFront {
  width: 97px;
  height: 106px;
}
.leftCage {
  top: -31px;
}

.openLeftDoor {
  animation: openDoor 1s ease-out forwards;
}
.closeLeftDoor {
  animation: closeDoor 1s ease-out forwards;
}

@keyframes openDoor {
  0% {
    top: 0;
    opacity: 1;
  }
  100% {
    top: -137px;
    opacity: 0;
  }
}

@keyframes closeDoor {
  0% {
    top: -137px;
    opacity: 0;
  }
  100% {
    top: 0;
    opacity: 1;
  }
}
</style>
