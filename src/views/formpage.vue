<template>
  <div class="page-wrap">
    <dynamic-form :formData="formData" :formConfig="formConfig"></dynamic-form>
    <el-collapse v-model="activeNames" style="margin-top:20px">
      <el-collapse-item title="Features" name="1">
        <div>
          <ul>
            <li>可自定义表格标题</li>
            <li>可自定义名称字段底色</li>
            <li>可自定义名称字段宽度</li>
            <li>默认展示4列，可展示多列</li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Form Data" name="2">
        <div>
          <el-row>
            <el-col :span="12">
              <pre>
                formData: {
                  title: "Form Title",
                  rows: [
                    [
                      {
                        name: "字段1",
                        value: "value1",
                        link: "",
                        isFile: false,
                      },
                      {
                        name: "字段2",
                        value: "value2",
                        link: "",
                        isFile: false,
                      },
                    ],
                    [
                      {
                        name: "字段3",
                        value: "1971年6月28日，埃隆·马斯克出生于南非的比勒陀利亚，其父亲是一个英荷混血儿，在南非担任机电工程师， [14]  母亲出生于加拿大，是一名模特，同时还兼任着作家和营养师的工作。1980年，埃隆·马斯克在父母离婚后跟随父亲生活，在父亲的启发下，埃隆·马斯克在小时候对科学技术十分痴迷。",
                        link: "",
                        isFile: false,
                      },
                    ],
                    [
                      {
                        name: "字段4",
                        value: "产品文档".pdf",
                        link: "https://www.zd-automotive.cn/pdf/FlyerZDBoxCN.pdf",
                        isFile: true,
                      },
                    ],
                  ],
                }
              </pre>
            </el-col>
            <el-col :span="12">
              <pre>
                formConfig: {
                  colNum: 4,
                  labelColor: "#ecf5ff",
                  labelWidth: "15%",
                },
              </pre>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import DynamicForm from "@/components/DynamicForm";
export default {
  name: "formpage",
  components: { DynamicForm },
  data() {
    return {
      activeNames: "",
      formData: {
        title: "Form Title",
        rows: [
          [
            {
              name: "字段1",
              value: "value1",
              link: "",
              isFile: false,
            },
            {
              name: "字段2",
              value: "value2",
              link: "",
              isFile: false,
            },
          ],
          [
            {
              name: "字段3",
              value:
                "1971年6月28日，埃隆·马斯克出生于南非的比勒陀利亚，其父亲是一个英荷混血儿，在南非担任机电工程师， [14]  母亲出生于加拿大，是一名模特，同时还兼任着作家和营养师的工作。1980年，埃隆·马斯克在父母离婚后跟随父亲生活，在父亲的启发下，埃隆·马斯克在小时候对科学技术十分痴迷。",
              link: "",
              isFile: false,
            },
          ],
          [
            {
              name: "字段4",
              value: "产品文档.pdf",
              link: "https://www.zd-automotive.cn/pdf/FlyerZDBoxCN.pdf",
              isFile: true,
            },
          ],
        ],
      },
      formConfig: {
        colNum: 4,
        labelColor: "#ecf5ff",
        labelWidth: "15%",
      },
    };
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.page-wrap {
  width: 80%;
  margin: 0 auto;
}
.el-collapse::v-deep .el-collapse-item__header {
  padding-left: 15px;
}
</style>


