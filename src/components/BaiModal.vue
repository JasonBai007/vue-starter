<template>
  <div class="modal-wrap">
    <el-dialog title="Your Title" :visible.sync="dialogVisible" :width="width" :top="top" :custom-class="customeClass" @opened="afterOpened">
      <span>Your custom DOM</span>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false">Cancel</el-button>
        <el-button size="small" type="primary" @click="submit">OK</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// How to USE:
// 0、这个文件只是当做模板，使用的时候复制到对应路径，然后修改副本
// 1、复制本文件到要使用的页面文件夹下，可以更改文件名，定制修改
// 2、在用的的页面里引入，比如：import popup from "./popup";
// 3、注册：components: { popup }
// 4、使用：<popup ref="myModal"></popup>
// 5、弹出新建弹框：this.$refs.myModal.show();
// 6、弹出编辑弹框：this.$refs.myModal.show(yourEditData);
export default {
  name: "bai-modal",
  data() {
    return {
      dialogVisible: false,
      width: "40%",
      top: "15vh",
      customeClass: "",
    };
  },
  methods: {
    show(editData) {
      if (editData) {
        // 如果存在编辑数据，就把数据赋值给内部变量
      } else {
        // 否则，就是单纯的新建弹框
      }
      this.dialogVisible = true;
    },
    hide() {
      this.dialogVisible = false;
    },
    submit() {
      this.$http.post("submit", {}).then((res) => {});
    },
    afterOpened() {
      // 弹框打开后，这里请求需要用到的列表数据
    },
  },
};
</script>

<style lang="scss" scoped>
</style>