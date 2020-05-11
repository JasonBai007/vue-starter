<template>
  <div class="bg">
    <div class="login-wrap animated fadeIn">
      <img src="../assets/img/login.png" class="left" />
      <div class="right">
        <h3>Vue Starter</h3>
        <p>{{$t('m.login.introduction')}}</p>
        <el-form ref="form" :model="form" :rules="rules" label-width="0px" size="small">
          <el-form-item prop="name">
            <el-input :placeholder="$t('m.login.name_holder')" v-model="form.name" clearable></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :placeholder="$t('m.login.password_holder')"
              v-model="form.password"
              type="password"
              clearable
            ></el-input>
          </el-form-item>
          <!-- <el-form-item>
          <el-row type="flex" justify="space-between">
            <el-checkbox v-model="isMemery" style="color:#eee">{{$t('m.login.remember')}}</el-checkbox>
            <a href @click.prevent="openMsg" style="color:#eee">{{$t('m.login.forget')}}</a>
          </el-row>
          </el-form-item>-->
          <el-form-item>
            <el-button type="primary" size="small" @click="Login('form')">{{$t('m.login.button')}}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import router from "../router/index";
import generateRoutes from "../router/parser";
export default {
  name: "signin",
  data() {
    // var checkone = (rule, value, callback) => {
    //   let regphone = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
    //   let regmail = /^[_\.0-9a-z-]+@([0-9a-z][0-9a-z-]+\.){1,4}[a-z]{2,3}$/;
    //   if (value === "") {
    //     callback(new Error("请输入手机号/邮箱"));
    //   } else {
    //     if (!isNaN(value)) {dfa
    //       if (!regphone.test(value)) {
    //         callback(new Error("请输入正确手机号"));
    //         return false;
    //       }
    //       callback();
    //     }
    //     if (value.indexOf("@") != -1) {
    //       if (!regmail.test(value)) {
    //         callback(new Error("请输入正确邮箱"));
    //         return false;
    //       }
    //       callback();
    //     }
    //     callback(new Error("请输入正确手机/邮箱"));
    //   }
    // };
    return {
      form: {
        name: localStorage.userInfo || "admin",
        password: localStorage.passwordInfo || "654321"
      },
      isMemery: false,
      rules: {
        name: [
          {
            required: true,
            message: this.$t("m.login.name_tip"),
            trigger: "blur"
            // validator: checkone
          }
        ],
        password: [
          {
            required: true,
            message: this.$t("m.login.password_tip"),
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    Login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http
            .post("login", {
              username: this.form.name,
              password: this.form.password
            })
            .then(res => {
              console.log(res)
              localStorage.userName = res.data.data.userName;
              localStorage.userId = res.data.data.userId;
              localStorage.token = res.data.data.token;
              this.$router.push('/dashboard')
            });
        } else {
          return false;
        }
      });
    },    
    openMsg() {
      // 注意这里使用了国际化
      this.$message.warning(this.$t("m.login.info"));
    }
  },
  watch: {
    // isMemery(n, o) {
    //   if (n) {
    //     localStorage.userInfo = this.form.name;
    //     localStorage.passwordInfo = this.form.password;
    //   } else {
    //     localStorage.removeItem("userInfo");
    //     localStorage.removeItem("passwordInfo");
    //   }
    // }
  }
};
</script>
<style scoped lang="scss">
.bg {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/img/bg.jpg");
  background-size: cover;
}
.login-wrap {
  margin-top: -3vh;
  padding: 0px;
  display: flex;
  background: #eff2f7;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  .left {
    width: 24vw;
    padding: 3vw;
  }
  .right {
    background: #fff;
    padding: 2vw;
    padding-top: 3vw;
    width: 16vw;
    .el-form-item {
      margin-bottom: 25px !important;
    }
    h3 {
      text-align: center;
      margin-top: 0px;
      margin-bottom: 5px;
      font-size: 22px;
      color: #2c2c2c;
      font-weight: 600;
    }
    p {
      text-align: center;
      margin: 0;
      letter-spacing: 1px;
    }
    form {
      margin-top: 25px;
      .el-form-item {
        margin-bottom: 15px;
      }
    }
    a {
      text-decoration: none;
      color: #1f2d3d;
    }
    button {
      width: 100%;
      font-weight: 600;
      border: none;
      margin-top: 20px;
      background-color: #7367f0;
      transition: all .2s ease;      
    }
  }
}
</style>
