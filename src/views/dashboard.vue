<template>
  <div>
    <key-index :data="keyIndexArr"></key-index>
    <section class="wrap">
      <div class="item1">You</div>
      <div class="item2">Can</div>
      <div class="item3">Start</div>
      <div class="item4">From</div>
      <div class="item5">Here</div>
    </section>
  </div>
</template>

<script>
import KeyIndex from "@/components/KeyIndex";
export default {
  name: "dashboard",
  components: {
    KeyIndex,
  },
  data() {
    return {
      keyIndexArr: [],
    };
  },
  mounted() {
    this.getKeyIndexData();
  },
  methods: {
    async getKeyIndexData() {
      // let res = await this.$http.get("getKeyIndexData");
      // this.keyIndexArr = res.data;
      this.keyIndexArr = Array.from({ length: 6 }, () => {
        return this.$mock.mock({
          num: "@integer(1000,10000)",
          title: "@cname",
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 20px;
  display: grid;
  grid-gap: 20px 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 230px);
  & > div {
    border-radius: 7px;
    background: #fff;
    text-align: center;
    line-height: 230px;
  }
  .item4 {
    grid-column: 1/3;
  }
}
</style>


