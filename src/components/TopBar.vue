<!-- 顶部导航组件 -->
<!-- 使用说明：<top-bar></top-bar> -->
<template>
  <div id="topbar-wrap" :class="{ topCollapsed: isCollapse }">
    <el-row type="flex" justify="space-between">
      <el-col :span="12">
        <i class="el-icon-s-fold toggle-btn" :style="iconStyle" @click="toggleSiderBar"></i>
        <campaign-select></campaign-select>
      </el-col>
      <el-col :span="12">
        <el-row type="flex" class="row-right" justify="end" style="margin-right:-15px" align="middle">
          <el-col :span="16" class="hi">
            <a class="animated fadeIn">Hi，{{userName}}</a>
          </el-col>
          <el-col :span="2">
            <i class="el-icon-full-screen" v-fullscreen="'body'"></i>
          </el-col>
          <el-col :span="2">
            <lang-switcher></lang-switcher>
          </el-col>
          <el-col :span="2">
            <colors-picker style="margin-top:3px"></colors-picker>
          </el-col>
          <el-col :span="2">
            <i class="fa fa-power-off logout" title="退出" @click.prevent="logout"></i>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import CampaignSelect from "./CampaignSelect";
import ColorsPicker from "./ColorsPicker";
import LangSwitcher from "./LangSwitcher";
export default {
  name: "topbar",
  data() {
    return {
      userName: localStorage.userName || "",
    };
  },
  components: {
    ColorsPicker,
    LangSwitcher,
    CampaignSelect,
  },
  computed: {
    isCollapse() {
      return this.$store.state.common.isCollapse;
    },
    iconStyle() {
      return {
        transform: this.isCollapse ? "rotate(180deg)" : "rotate(0deg)",
      };
    },
  },
  mounted() {},
  methods: {
    toggleSiderBar() {
      this.$store.commit("toggleSiderBar");
    },
    logout() {
      let _temp = localStorage.curColor;
      localStorage.clear();
      localStorage.curColor = _temp;
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped lang="scss">
#topbar-wrap {
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #efefef;
  background: #fff;
  color: #353d47;
  padding: 0 15px;
  z-index: 4;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  a {
    line-height: 60px;
  }
  i {
    font-size: 20px;
    line-height: 60px;
    transition: all 0.5s;
    &:hover {
      color: #7367f0;
      cursor: pointer;
    }
  }
  .toggle-btn {
    vertical-align: middle;
    display: inline-block;
    margin-right: 20px;
  }

  .logout {
    text-decoration: none;
  }
}
.row-right > div {
  text-align: center;
}
.row-right > div.hi {
  text-align: right;
  a {
    padding-right: 2%;
  }
}
</style>
