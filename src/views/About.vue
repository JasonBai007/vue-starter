<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "the Douban TOP250 movies info is loading ..."
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.$axios({
        url: "v2/movie/top250",
        method: "GET"
      }).then(res => {
        this.content = JSON.stringify(res.data.subjects);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
p {
  word-break: break-all;
  color: #999;
}
</style>


