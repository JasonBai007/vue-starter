<template>
  <div class="wrap">
    <!-- 条件筛选区 -->
    <el-card class="filter-bar">asdfa</el-card>
    <!-- 表格区 -->
    <el-card>
      <el-table :data="tableData" stripe>
        <el-table-column prop="id" label="#" width="50" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="hero" label="英雄" width="120"></el-table-column>
        <el-table-column prop="date" label="日期" width="200"></el-table-column>
        <el-table-column prop="province" label="省份" width="200"></el-table-column>
        <el-table-column prop="address" label="住址"></el-table-column>
        <el-table-column prop="type" label="类型" width="120"></el-table-column>
        <el-table-column prop="type" label="操作">
          <template slot-scope="scope">
            <i class="btn el-icon-edit" @click="handleEdit(scope.row)"></i>
            <i class="btn el-icon-delete" @click="handleDelete(scope.row)"></i>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pagination-wrap">
        <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="1000"></el-pagination>
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
      tableData: []
    };
  },
  computed: {},
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let _data = await this.$http.get("getTableData");
      this.tableData = _data;
    }
  }
};
</script>

<style lang="scss" scoped>
.filter-bar {
  margin-bottom: 20px;
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


