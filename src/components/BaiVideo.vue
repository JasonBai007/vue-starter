<template>
  <div class="video-wrap">
    <!-- 最开始的网络示例视频 -->
    <!-- <video src="https://video.699pic.com/videos/10/21/24/a_7dmvN5ARNbbM1561102124_10s.mp4" autoplay muted loop></video> -->
    <!-- <video src="http://video.699pic.com/videos/63/89/25/a_np0fDE3497Tx1555638925_10s.mp4" autoplay muted loop></video> -->

    <!-- 可以直播的视频标签 -->
    <!-- <video id="myVideo" class="video-js vjs-big-play-centered vjs-fluid" controls preload="auto" width="100%">
      <source type="application/x-mpegURL" src="http://cctvalih5ca.v.myalicdn.com/live/cctv1_2/index.m3u8" />
    </video>-->

    <!-- 摄像头对应的视频 -->
    <video src id="v" poster="../assets/img/poster.jpg"></video>
    <!-- 摄像头选择栏 -->
    <div class="func-bar">
      <el-select v-model="options.video.deviceId" placeholder="Choose a Device" @change="play" size="small">
        <el-option v-for="item in deviceList" :key="item.deviceId" :label="item.label" :value="item.deviceId"></el-option>
      </el-select>
    </div>
    <!-- 视频录制和打开栏 -->
    <div class="record-bar">
      <div v-if="isRecord">
        <el-button type="danger" size="mini" @click="toggle"></el-button>
        <span class="tip">Stop</span>
      </div>
      <div v-else>
        <el-button type="success" circle size="mini" @click="toggle"></el-button>
        <span class="tip">Record</span>
      </div>
      <div class="folder">
        <i class="el-icon-folder-opened" @click="openFolder" title="open video folder"></i>
      </div>
    </div>
  </div>
</template>

<script>
// 必须加window前缀
const path = window.require("path");
const fs = window.require("fs");
const remote = window.require("electron").remote;
import dayjs from 'dayjs'
import { Common } from "../../../lib/efta-sdk";
const com = new Common();
// 借助video.js插件实现播放实时视频流
export default {
  name: "fe-video",
  data() {
    return {
      isRecord: false,
      tracks: null, //视频轨道
      deviceList: [], //摄像头列表
      //视频设备对象
      options: {
        audio: true,
        video: {
          deviceId: "", //摄像头ID
        },
      },
      recorder: null, //视频记录者
    };
  },
  mounted() {
    this.getDevice();
  },
  methods: {
    // 获取设备列表，并过滤出摄像头
    getDevice() {
      navigator.mediaDevices.enumerateDevices().then((device) => {
        // 过滤摄像头设备
        this.deviceList = device.filter((obj) => obj.kind === "videoinput");
      });
    },
    // 废弃
    initVideo() {
      let myPlayer = this.$video(document.getElementById("myVideo"), {
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: false,
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
    // toggle() {
    //   if (this.isRecord) {
    //     // stop逻辑
    //     com
    //       .stopRecord()
    //       .then((res) => {
    //         if (res.code === 0) {
    //           this.$message.success("record success");
    //         }
    //       })
    //       .catch((err) => {
    //         this.$message.warning("record failed");
    //       });
    //   } else {
    //     // start逻辑
    //     com.startRecord().then((res) => {});
    //   }
    //   this.isRecord = !this.isRecord;
    // },
    toggle() {
      if (this.isRecord) {
        // stop逻辑
        this.recorder.stop();
      } else {
        // start逻辑
        this.recorder.start();
        this.recorder.ondataavailable = (event) => {
          let blob = new Blob([event.data], {
            type: "video/mp4",
          });
          this.saveMedia(blob);
        };
        this.recorder.onerror = (err) => {
          console.error(err);
        };
      }
      this.isRecord = !this.isRecord;
      if (!this.isRecord) {
        this.$message.success("record success");
      }
    },
    // 创建一个记录者
    createRecorder(stream) {
      this.recorder = new MediaRecorder(stream);
    },
    // 保存视频流到本地文件
    saveMedia(blob) {
      let fileName = dayjs().format("YYYY-MM-DD_HH-mm-ss");
      let reader = new FileReader();
      reader.onload = () => {
        let buffer = new Buffer(reader.result);
        fs.writeFile(`app/videos/${fileName}.mp4`, buffer, {}, (err, res) => {
          if (err) return console.error(err);
        });
      };
      reader.onerror = (err) => console.error(err);
      reader.readAsArrayBuffer(blob);
    },
    // 打开指定文件夹
    openFolder() {
      let videoPath = remote.getGlobal("vars").videoPath;
      const { shell } = window.require("electron");
      shell.openExternal(videoPath);
    },
    // 关闭所有摄像头
    closeAllDevices() {
      if (this.tracks) {
        this.track.forEach((track) => {
          track.stop();
        });
      }
    },
    play() {
      // 关闭所有摄像头有问题，先注释
      // this.closeAllDevices();
      navigator.mediaDevices
        .getUserMedia(this.options)
        .then((mediaStream) => {
          let vDom = document.querySelector("#v");
          vDom.srcObject = mediaStream;
          vDom.onloadedmetadata = (e) => vDom.play();
          this.createRecorder(mediaStream);
          // this.tracks = mediaStream.getTracks();
        })
        .catch(function (err) {
          console.log(err.name + ": " + err.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.video-wrap {
  video {
    width: 100%;
  }
  .record-bar {
    background: #fff;
    margin: 3px 0 8px 0;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
      .el-button--danger {
        padding: 6px;
        animation: twinkle 1s infinite;
      }
      .tip {
        padding-left: 5px;
        font-size: 12px;
        color: #999;
      }
    }
    .el-icon-folder-opened {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
@keyframes twinkle {
  0% {
    filter: brightness(1);
  }
  100% {
    filter: brightness(1.4);
  }
}

#v {
  width: 100%;
  transform: rotateY(180deg);
}
.el-select {
  width: 100%;
  margin-top: 3px;
  margin-bottom: 3px;
}
</style>