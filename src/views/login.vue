<template>
  <div class="login-wrap">
    <div class="left">
      <div class="logo-wrap">
        <img src="../assets/img/logo.png" alt />
        <span>Vue Starter</span>
      </div>
    </div>
    <div class="right">
      <div class="inner-wrap">
        <h3>Welcome to Vue Starter 👋</h3>
        <p class="subtitle">Please sign-in to your account and start the adventure</p>
        <el-form ref="form" :model="form" :rules="rules" :label-position="top">
          <el-form-item label="User Name" prop="name">
            <el-input placeholder="Jason@example.com" v-model="form.name" clearable></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input placeholder="Password" v-model="form.password" type="password" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-row type="flex" justify="space-between">
              <el-checkbox v-model="isMemery">Remember Me</el-checkbox>
              <router-link to="/forgot-password">Forgot Password?</router-link>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="Login('form')">Sign in</el-button>
          </el-form-item>
          <el-form-item>
            <p class="new">
              New on our platform?
              <router-link to="/register">Create an account</router-link>
            </p>
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
    // var checkPhone = (rule, value, callback) => {
    //   let regphone = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
    //   if (value === "") {
    //     callback(new Error("请输入"));
    //   } else if (!regphone.test(Number(value))) {
    //     callback(new Error("请输入正确格式的手机号"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      form: {
        name: localStorage.userInfo || "admin",
        password: localStorage.passwordInfo || "654321",
      },
      isMemery: false,
      rules: {
        name: [
          {
            required: true,
            message: this.$t("login.name_tip"),
            trigger: "blur",
            // validator: checkPhone
          },
        ],
        password: [
          {
            required: true,
            message: this.$t("login.password_tip"),
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    Login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http
            .post("login", {
              username: this.form.name,
              password: this.form.password,
            })
            .then((res) => {
              localStorage.userName = res.data.userName;
              localStorage.userId = res.data.userId;
              localStorage.token = res.data.token;
              this.$router.push("/dashboard");
            });
        } else {
          return false;
        }
      });
    },
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
  },
};
</script>
<style scoped lang="scss">
.login-wrap {
  display: flex;
  align-items: center;
  .left {
    width: 67%;
    height: 100vh;
    background: #fafafa url("../assets/img/login-bg.svg") no-repeat center
      center / 72%;
    .logo-wrap {
      position: absolute;
      top: 4vh;
      left: 2vw;
      img {
        width: 40px;
        vertical-align: bottom;
        padding-right: 15px;
      }
      span {
        color: #7367f0;
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .right {
    width: 33%;
    height: 100vh;
    background: #fff;
    display: flex;
    .inner-wrap {
      margin: auto;
      width: 70%;
    }
    .el-form-item {
      // margin-bottom: 25px !important;
    }
    h3 {
      margin-top: 0px;
      margin-bottom: 15px;
      font-size: 22px;
      color: #5e5873;
      font-weight: 500;
    }
    .subtitle {
      margin: 0;
      font-size: 14px;
      letter-spacing: 1px;
      line-height: 22px;
      color: #6e6b7b;
    }
    form {
      margin-top: 25px;
      .el-form-item {
        margin-bottom: 12px;
      }
    }
    a {
      text-decoration: none;
      color: #7367f0;
    }
    button {
      width: 100%;
      border: none;
      background-color: #7367f0;
      transition: all 0.2s ease;
    }
    .new {
      margin-bottom: 0;
      font-size: 14px;
      line-height: 22px;
      color: #6e6b7b;
      text-align: center;
    }
  }
}
</style>
