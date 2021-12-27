<template>
  <el-select v-model="value" placeholder="Campaign" clearable filterable size="small">
    <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>

<script>
export default {
  name: "campaignselect",
  data() {
    return {
      options: [],
      value: ""
    };
  },
  mounted() {
    // this.getCampaignList();
  },
  methods: {
    // async getCampaignList() {
    //   const res = await this.$http.get("campaign");
    //   this.options = res.data;
    // }
  }
};
</script>

<style lang="scss" scoped>
</style>


