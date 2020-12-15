<template>
  <div class="coming-wrap">
    <div class="inner">
      <img src="@/assets/img/time.gif" />
      <span>Coming soon ...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "soon",
};
</script>

<style lang="scss" scoped>
.coming-wrap {
  display: flex;
  height: 72vh;
  .inner {
    margin: auto;
    width: 200px;
    text-align: center;
    color: #999;
    font-size: 18px;
    img {
      display: block;
      width: 100px;
      margin: 0 auto;
      opacity: 0.6;
    }
  }
}
</style>