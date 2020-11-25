<template>
  <div class="player-wrap">
    <div :class="[isPlaying? 'rotate' : '','player']" v-drag="['3.5vw','80vh']" @click="toggleStatus"></div>
    <audio
      id="player"
      src="https://ws.stream.qqmusic.qq.com/C400002WOzo11jSZoG.m4a?guid=HiFiNi&vkey=3424454DEBC302911C561AC95A4D45C6E1FCB70A4DBE29CDDFA9D51E3A8D38BCA3D1F58F0CB888A7C2AB6E194439622A5812C364D0448AC0&uin=2558&fromtag=0098"
    ></audio>
  </div>
</template>

<script>
export default {
  name: "player",
  data() {
    return {
      isPlaying: false,
      player: null,
    };
  },
  mounted() {
    this.player = document.querySelector("#player");
    this.player.onended = () => {
      this.isPlaying = false;
    };
  },
  methods: {
    toggleStatus() {
      if (this.isPlaying) {
        this.player.pause();
      } else {
        this.player.play();
      }
      this.isPlaying = !this.isPlaying;
    },
  },
};
</script>

<style lang="scss" scoped>
.player {
  z-index: 6;
  background: url(https://y.gtimg.cn/music/photo_new/T002R300x300M000003SbmSY3LZIr9_1.jpg?max_age=2592000);
  background-size: cover;
  padding: 30px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #333;
  transition: box-shadow 0.5s;
  &.rotate {
    animation: rotate 3s linear infinite;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px #333;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>