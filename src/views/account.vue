<template>
  <div class="account-wrap">
    <!-- 条件筛选区 -->
    <el-card class="filter-bar">
      <el-row type="flex" align="bottom" :gutter="20">
        <el-col :span="18">
          <el-form label-position="top" label-width="80px" :model="formData">
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="姓名">
                  <el-input v-model="formData.name" placeholder="请输入姓名" clearable></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="类型">
                  <el-select
                    v-model="formData.type"
                    placeholder="请选择类型"
                    style="width:100%"
                    clearable
                  >
                    <el-option label="射手" value="射手"></el-option>
                    <el-option label="法师" value="法师"></el-option>
                    <el-option label="辅助" value="辅助"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="住址">
                  <el-input v-model="formData.address" placeholder="请输入住址" clearable></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-button @click="resetForm">重置</el-button>
          <el-button type="primary" icon="el-icon-search" @click="getData">搜索</el-button>
          <el-button type="primary" icon="el-icon-plus" style="float:right">新建</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!-- 表格区 -->
    <el-card>
      <el-table :data="tableData" stripe>
        <el-table-column prop="id" label="#" width="50" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="hero" label="英雄" width="120"></el-table-column>
        <el-table-column prop="type" label="类型" width="120"></el-table-column>
        <el-table-column prop="date" label="日期" width="150"></el-table-column>
        <el-table-column prop="province" label="省份" width="200"></el-table-column>
        <el-table-column prop="city" label="城市" width="200"></el-table-column>
        <el-table-column prop="address" label="住址"></el-table-column>
        <el-table-column prop="type" label="操作" width="120">
          <template slot-scope="scope">
            <i class="btn el-icon-edit"></i>
            <i class="btn el-icon-delete"></i>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pagination-wrap">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="total, sizes, prev, pager, next, jumper"
          :total="paginationData.total"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "account",
  components: {},
  data() {
    return {
      paginationData: {
        total: 0,
        currentPage: 1,
        pageSize: 10
      },
      formData: {
        name: "",
        type: "",
        address: ""
      },
      tableData: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let _data = await this.$http.get("getTableData", {
        currentPage: this.paginationData.currentPage,
        pageSize: this.paginationData.pageSize
      });
      this.tableData = _data.data;
      this.paginationData.total = _data.total;
    },
    resetForm() {
      this.formData = {
        name: "",
        type: "",
        address: ""
      };
    },
    handleCurrentChange(num) {
      this.paginationData.currentPage = num;
      this.getData();
    },
    handleSizeChange(num) {
      this.paginationData.pageSize = num;
      this.getData();
    }
  }
};
</script>

<style lang="scss" scoped>
.filter-bar::v-deep {
  margin-bottom: 20px;
  .el-card__body {
    padding: 10px 20px 20px 20px;
  }
}
.el-form-item {
  margin-bottom: 0;
}
.btn {
  display: inline-block;
  margin-right: 15px;
  font-size: 18px;
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
}
.btn:nth-child(1) {
  color: #409eff;
}
.btn:nth-child(2) {
  color: #f56c6c;
}

.pagination-wrap {
  padding: 20px 0 0 0;
  text-align: right;
}
</style>


