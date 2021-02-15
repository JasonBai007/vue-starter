<template>
  <section>
    <div class="item" v-for="(item,index) in $attrs.data" :key="index">
      <countTo class="num" :startVal="0" :endVal="item.num" :duration="3000"></countTo>
    </div>
  </section>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "keyindex",
  components: { countTo },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: space-between;
  .item {
    text-align: center;
    padding: 25px 0;
    background: #fff;
    flex-basis: 15.5%;
    border-radius: 7px;
    &:hover {
      box-shadow: 0px 0px 10px #ddd;
    }
    .num {
      font-size: 30px;
      color: #7367f0;
    }
  }
}
</style>


