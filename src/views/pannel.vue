<template>
  <div class="exe-wrap">
    <div class="pannels-wrap">
      <bai-pannel v-for="(p,i) in pannelData" :key="i" :title="p.title">
        <template v-slot:title>
          <span>{{p.title}}</span>
        </template>
        <template v-slot:body>
          <p>body from father.</p>
        </template>
      </bai-pannel>
    </div>
  </div>
</template>

<script>
import BaiPannel from "@/components/BaiPannel.vue";
export default {
  name: "exe",
  components: {
    BaiPannel,
  },
  data() {
    return {
      pannelData: [
        {
          title: "Title1",
        },
        {
          title: "Title2",
        },
        {
          title: "Title3",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.pannels-wrap {
  height: calc(100vh - 200px);
  overflow: hidden;
  background: linear-gradient(#fff 50%, #d9ecff 50%);
  background-size: 50px 50px;
  position: relative;
  border-radius: 5px;
}
</style>