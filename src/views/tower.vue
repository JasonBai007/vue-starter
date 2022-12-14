<template>
  <div>
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
    <div class="tower-wrap">
      <el-card>
        <Lift :options="optionsLift"></Lift>
      </el-card>
      <el-card class="controls">
        <h3>Left</h3>
        <h3>Height</h3>
        <el-slider v-model="optionsLift.left.height" :min="0" :max="421"></el-slider>
        <h3>Front Door</h3>
        <el-switch v-model="optionsLift.left.frontStatus" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        <h3>Back Door</h3>
        <el-switch v-model="optionsLift.left.backStatus" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
      </el-card>
    </div>
  </div>
</template>

<script>
import TowerCrane from "@/components/TowerCrane";
import Lift from "@/components/Lift";
export default {
  name: "tower",
  components: {
    TowerCrane,
    Lift,
  },
  data() {
    return {
      options: {
        left: 200, // 150-430
        height: 200, // 0-300
      },
      optionsLift: {
        left: {
          height: 200, // 0-400,
          frontStatus: true,
          backStatus: true,
        },
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
  margin-bottom: 10px;
  .controls {
    width: auto;
    flex-grow: 1;
  }
}
</style>
