<template>
  <div class="tower-wrap">
    <el-card>
      <TowerCrane :options="options"></TowerCrane>
    </el-card>
    <el-card class="controls">
      <h3>Left</h3>
      <el-slider v-model="options.left" :min="150" :max="430"></el-slider>
      <h3>Height</h3>
      <el-slider v-model="options.height" :min="0" :max="300"></el-slider>
    </el-card>
  </div>
</template>

<script>
import TowerCrane from "@/components/TowerCrane";
export default {
  name: "tower",
  components: {
    TowerCrane,
  },
  data() {
    return {
      options: {
        left: 200, // 150-430
        height: 200, // 0-300
      },
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.tower-wrap {
  display: flex;
  gap: 10px;
  .controls {
    width: auto;
    flex-grow: 1;
  }
}
</style>
