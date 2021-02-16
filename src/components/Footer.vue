<template>
  <footer>
    <span>
      COPYRIGHT ©
      <a href="https://github.com/JasonBai007/vue-starter" target="_blank">JasonBai</a>
    </span>
    <span>
      <span>Hand-crafted &amp; Made with</span>
      <i class="fa fa-heart"></i>
    </span>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  width: calc(100% - 200px);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 14px;
  i {
    padding-left: 4px;
  }
  a,
  i {
    text-decoration: none;
    color: #7367f0;
  }
  a:hover {
    text-shadow: 3px 3px 20px #7367f0;
  }
}
</style>