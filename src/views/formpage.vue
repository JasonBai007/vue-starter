<template>
  <div class="page-wrap">
    <dynamic-form :formData="formData" :formConfig="formConfig"></dynamic-form>
    <el-collapse v-model="activeNames" style="margin-top:20px">
      <el-collapse-item title="Form Data" name="1">
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
                        value: "value3",
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
              value: "value3",
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
</style>


