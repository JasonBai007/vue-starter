<template>
  <img src="../assets/img/translate.png" class="langImg" width="22" style="vertical-align:sub" @click="toggleLanguage" />
</template>

<script>
export default {
  name: "langSwitcher",
  data() {
    return {};
  },
  methods: {
    toggleLanguage() {
      let locale = this.$i18n.locale;
      locale === "zh" ? (this.$i18n.locale = "en") : (this.$i18n.locale = "zh");
      let info = locale === "en" ? "切换成功" : "change language successfully";
      this.$message.success(info);
    }
  }
};
</script>

<style lang="scss" scoped>
.langImg {
  width: 22px;
  &:hover {
    cursor: pointer;
  }
}
</style>


