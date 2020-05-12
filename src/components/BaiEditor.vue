<template>
  <div class="bai-editor" :id="id"></div>
</template>

<script>
// wangEditor官方文档地址：
// https://www.kancloud.cn/wangfupeng/wangeditor3/335769

// 使用说明：
// <bai-editor v-model="editorVal"></bai-editor>
// 提交表单的时候，需要将逻辑包裹在setTimeout里，保证数据变化后，再提交
// submit() {
//   setTimeout(()=>{
//     // 将最新数据发送给后端
//   },0)
// }
import Editor from "wangeditor";
export default {
  name: "baiEditor",
  props: ["value"],
  data() {
    return {
      editor: null,
      id: `id${Math.random()
        .toString(36)
        .slice(-7)}`
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.editor = new Editor(`#${this.id}`);
      this.editor.customConfig.zIndex = 100;
      // 默认粘贴过来的不带样式（true），设置为false后，就带样式粘贴了
      // editor.customConfig.pasteFilterStyle = true
      this.editor.customConfig.uploadImgShowBase64 = true;
      // 失去焦点的时候，向父组件释放input事件，改变父组件中的值
      this.editor.customConfig.onblur = html => {
        this.$emit("input", html);
      };
      // 自定义菜单配置
      this.editor.customConfig.menus = [
        "head", // 标题
        "bold", // 粗体
        "fontSize", // 字号
        "fontName", // 字体
        "italic", // 斜体
        "underline", // 下划线
        "strikeThrough", // 删除线
        "foreColor", // 文字颜色
        "backColor", // 背景颜色
        "link", // 插入链接
        "list", // 列表
        "justify", // 对齐方式
        "quote", // 引用
        "image", // 插入图片
        "table", // 表格
        // 'video',  // 插入视频
        "code", // 插入代码
        "undo", // 撤销
        "redo" // 重复
      ];
      this.editor.customConfig.fontNames = [
        "宋体",
        "微软雅黑",
        "Arial",
        "Verdana"
      ];
      this.editor.create();
    }
  },
  watch: {
    value(n, o) {
      this.editor.txt.html(n);
    }
  }
};
</script>

<style scoped>
.bai-editor {
  background: #fff;
}
</style>