<template>
  <div class="video-wrap">
    <!-- 可以直播的视频标签 -->
    <video id="liveVideo" class="video-js vjs-big-play-centered vjs-fluid" controls preload="auto">
      <source :type="liveConfig.type" :src="liveConfig.origin" />
    </video>
  </div>
</template>

<script>
// 借助video.js插件实现播放实时视频流
import Videojs from "video.js";
import "video.js/dist/video-js.css";
export default {
  name: "bai-live",
  props: {
    liveConfig: {
      type: Object,
      default: function () {
        return {
          type: "application/x-mpegURL",
          origin: "http://cctvalih5ca.v.myalicdn.com/live/cctv1_2/index.m3u8",
          autoPlay: false,
        };
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      let myPlayer = Videojs(document.getElementById("liveVideo"), {
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: this.liveConfig.autoPlay,
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        // width: "800px",
        //设置视频播放器的显示高度（以像素为单位）
        // height: "400px",
        controlBar: {
          playToggle: true,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.video-wrap {
  #liveVideo {
    width: 100%;
  }
}
</style>