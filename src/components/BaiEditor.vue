<template>
  <div class="bai-editor" :id="id"></div>
</template>

<script>
// wangEditor官方文档地址：
// https://www.kancloud.cn/wangfupeng/wangeditor3/335769
// 使用说明：
// <bai-editor value="editorVal"></bai-editor>
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
      this.editor.customConfig.onchangeTimeout = 2000;
      this.editor.customConfig.uploadImgShowBase64 = true;
      this.editor.customConfig.onchange = html => {
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
      //   this.editor.customConfig.lang = {
      //     设置标题: "Title",
      //     正文: "Paragraph",
      //     字号: "Font Size",
      //     字体: "Font Family",
      //     文字颜色: "Font Colors",
      //     背景色: "Background Colors",
      //     插入表格: "Insert Table",
      //     插入代码: "Insert Code",
      //     插入: "Insert",
      //     链接文字: "Link Text",
      //     图片链接: "Link Image",
      //     链接: "Link",
      //     设置列表: "List",
      //     有序列表: "Ordered List",
      //     无序列表: "Unordered List",
      //     上传图片: "Upload Image",
      //     网络图片: "Internet Image",
      //     上传: "Upload",
      //     对齐方式: "Alignment",
      //     靠左: "Left",
      //     居中: "Center",
      //     靠右: "Right",
      //     创建: "",
      //     行: "rows",
      //     列的表格: "columns"
      //   };
      this.editor.create();
    }
  },
  watch: {
    value(n, o) {
      // 针对编辑页打开的时候，旧值是空字符，新值是编辑页内容，才设置内容，平时输入的时候，旧值不是空字符，就不用再设置内容了
      if (o === "") this.editor.txt.html(n);
    }
  }
};
</script>

<style scoped>
.bai-editor {
  background: #fff;
}
</style>