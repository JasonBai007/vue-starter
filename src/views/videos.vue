<template>
  <div class="videos-wrap">
    <el-card class="box-card">
      <el-row :gutter="10">
        <el-col :span="12">
          <h3>CCTV-1</h3>
          <el-alert title="Mock.js会导致直播请求的responseType乱码，所以暂时注释了mock.js" type="warning"></el-alert>
          <br />
          <bai-live :liveConfig="liveConfig"></bai-live>
        </el-col>
        <el-col :span="12">
          <h3>Camera</h3>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import BaiLive from "@/components/BaiLive";
export default {
  name: "videos",
  components: { BaiLive },
  data() {
    return {
      liveConfig: {
        type: "application/x-mpegURL",
        origin: "http://cctvalih5ca.v.myalicdn.com/live/cctv1_2/index.m3u8",
        autoPlay: false,
      },
    };
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 0;
}
</style>


