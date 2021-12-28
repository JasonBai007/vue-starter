<template>
  <div class="video-wrap">
    <!-- 摄像头选择栏 -->
    <div class="func-bar">
      <el-select v-model="options.video.deviceId" placeholder="Select a Device" @change="play" size="small">
        <el-option v-for="item in deviceList" :key="item.deviceId" :label="item.label" :value="item.deviceId"></el-option>
      </el-select>
      <el-button type="primary" @click="shot" size="small" icon="el-icon-camera-solid">Snap Shot</el-button>
    </div>
    <!-- 摄像头对应的视频 -->
    <video src id="camera" poster="../assets/img/poster.jpg"></video>
    <!-- 视频录制和打开栏 -->
    <!-- <div class="record-bar">
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
    </div>-->
  </div>
</template>

<script>
// 针对electron必须加window前缀
// const path = window.require("path");
// const fs = window.require("fs");
// const remote = window.require("electron").remote;
// import dayjs from "dayjs";
export default {
  name: "bai-camera",
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
          // width: 627,
          // height: 353,
          // facingMode: "user", //强制使用前置摄像头
          // facingMode: "environment", //强制使用后置摄像头
        },
      },
      recorder: null, //视频记录者
      startRecordTime: "", //开始录制的时间
    };
  },
  mounted() {
    this.getDevice();
  },
  methods: {
    // 获取设备列表，并过滤出摄像头
    getDevice() {
      // 需要先询问浏览器，允许使用摄像头，然后才能拿到设备ID
      // getUserMedia()的使用前提条件是：https协议，或localhost地址才可以
      // 参考文章：
      // https://www.freesion.com/article/7962844114/
      // MDN说明文档：
      // https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia
      navigator.mediaDevices
        .getUserMedia({ audio: true, video: true })
        .then(() => {
          navigator.mediaDevices.enumerateDevices().then((device) => {
            // 过滤出摄像头设备
            this.deviceList = device.filter((obj) => obj.kind === "videoinput");
          });
        });
    },
    toggle() {
      this.isRecord ? this.stopRecord() : this.startRecord();
    },
    startRecord() {
      if (!this.recorder) {
        this.$message.warning("Please choose a camera first.");
        return false;
      }
      this.isRecord = true;
      this.recorder.start();
      this.startRecordTime = dayjs().format("YYYY-MM-DD_HH-mm-ss");
      this.recorder.ondataavailable = (event) => {
        let blob = new Blob([event.data], {
          type: "video/mp4",
        });
        this.saveMedia(blob);
      };
      this.recorder.onerror = (err) => console.error(err);
    },
    stopRecord() {
      this.isRecord = false;
      this.recorder.stop();
    },
    // 创建一个记录者
    createRecorder(stream) {
      this.recorder = new MediaRecorder(stream);
    },
    // 保存视频流到本地文件
    // saveMedia(blob) {
    //   let reader = new FileReader();
    //   reader.onload = () => {
    //     let buffer = new Buffer(reader.result);
    //     fs.writeFile(
    //       `app/videos/${this.startRecordTime}.mp4`,
    //       buffer,
    //       (err, res) => {
    //         this.$message.success("record success");
    //         if (err) return console.error(err);
    //       }
    //     );
    //   };
    //   reader.onerror = (err) => console.error(err);
    //   reader.readAsArrayBuffer(blob);
    // },
    // 打开指定文件夹
    openFolder() {
      //   let videoPath = remote.getGlobal("vars").videoPath;
      //   const { shell } = window.require("electron");
      //   shell.openExternal(videoPath);
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
          let vDom = document.querySelector("#camera");
          vDom.srcObject = mediaStream;
          vDom.onloadedmetadata = (e) => vDom.play();
          this.createRecorder(mediaStream);
          // this.tracks = mediaStream.getTracks();
        })
        .catch((err) => console.log(err.name + ": " + err.message));
    },
    shot() {
      let vDom = document.querySelector("#camera");
      let w = parseInt(getComputedStyle(vDom).width);
      let h = parseInt(getComputedStyle(vDom).height);
      // 手动创建一个canvas元素
      let canvas = document.createElement("canvas");
      // 这么设置宽高才生效
      canvas.width = w;
      canvas.height = h;
      // 拿到画布
      let ctx = canvas.getContext("2d");
      // 先水平翻转画布
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      // 然后再画布上绘制视频
      ctx.drawImage(vDom, 0, 0, w, h);
      // 把当前视频帧变成data url
      let imgUrl = canvas.toDataURL("image/jpg");
      this.download(imgUrl);
    },
    download(url) {
      const a = document.createElement("a");
      a.href = url;
      a.download = "snap.jpg"; // 这里填保存成的文件名
      a.click();
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

#camera {
  width: 100%;
  transform: rotateY(180deg);
  // aspect-ratio: 1.784;
  background: #000;
}
.func-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}
.el-select {
  width: 30%;
}
</style>