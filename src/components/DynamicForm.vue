<template>
  <div class="dynamic-form-wrap">
    <h2 v-if="formData.title">{{formData.title}}</h2>
    <table class="d-table">
      <template v-for="row in formData.rows">
        <tr>
          <template v-for="item in row">
            <td class="name" :style="nameStyle">{{item.name}}</td>
            <td class="val" :colspan="formConfig.colNum/row.length-1" v-if="item.isFile">
              <span>
                <i class="el-icon-download"></i>
                <a :href="item.link" class="links" target="_blank">{{item.value}}</a>
              </span>
            </td>
            <td class="val" :colspan="formConfig.colNum/row.length-1" v-else>{{item.value}}</td>
          </template>
        </tr>
      </template>
    </table>
  </div>
</template>

<script>
// 使用示例：
// <dynamic-form :formData="formData" :formConfig="formConfig"></dynamic-form>
// 其中：
// formData: {
//   title:'',
//   rows:[
//     [{一行一条数据}],
//     [{一条数据},{另外一条数据}]
//   ]
// }
export default {
  name: "dynamic-form",
  props: {
    formData: {
      type: Object,
      default: () => {
        return {
          title: "", // 默认不展示标题
          rows: [
            // [
            //   {
            //     name: "字段4",
            //     value: "精神焦虑症的自救.pdf",
            //     link: "https://gitee.com/lubanseven/nerves/raw/master/pdf/HopeandHelpforYourNerves.pdf",
            //     isFile: true,
            //   },
            // ],
          ],
        };
      },
    },
    formConfig: {
      type: Object,
      default: () => {
        return {
          colNum: 4, // 默认4列，可以是6列、8列 ...
          labelColor: "#ecf5ff",
          labelWidth: "10%",
        };
      },
    },
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    nameStyle() {
      return {
        background: this.formConfig.labelColor,
        width: this.formConfig.labelWidth,
      };
    },
  },
  methods: {},
};
</script>

<style scoped>
.dynamic-form-wrap {
}

h2 {
  text-align: center;
  font-size: 18px;
  font-weight: normal;
}
.d-table {
  border-collapse: collapse;
  border-spacing: 0px;
  width: 100%;
  font-size: 14px;
  background-color: #fff;
}
.d-table td {
  padding: 10px;
  border: 1px solid #ddd;
}

.name {
  text-align: center;
}
.links {
  color: #000;
}
.links:hover {
  color: #409eff;
}

.el-icon-download {
  padding-right: 5px;
  font-size: 16px;
}
</style>