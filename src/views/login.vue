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
        <el-form ref="form" :model="form" :rules="rules" label-position="top">
          <el-form-item label="Username" prop="username">
            <el-input placeholder="Jason" v-model="form.username" clearable></el-input>
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
export default {
  name: "login",
  data() {
    // var checkPhone = (rule, value, callback) => {
    //   let regphone = /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
    //   if (value === "") {
    //     callback(new Error("The Username field is required"));
    //   } else if (!regphone.test(Number(value))) {
    //     callback(new Error("The Username field must be a valid phone number"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      form: {
        username: localStorage.userInfo || "admin",
        password: localStorage.passwordInfo || "654321",
      },
      isMemery: false,
      rules: {
        username: [
          {
            required: true,
            message: "The Username field is required",
            trigger: "blur",
            // validator: checkPhone
          },
        ],
        password: [
          {
            required: true,
            message: "The Password field is required",
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
          this.$http.post("login", this.form).then((res) => {
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
};
</script>
<style scoped lang="scss">
.login-wrap {
  display: flex;
  align-items: center;
  .left {
    width: 67%;
    height: 100vh;
    background: #f8f8f8 url("../assets/img/login.svg") no-repeat center
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
::v-deep .el-form--label-top .el-form-item__label {
  padding: 0;
}
::v-deep .el-checkbox__label {
  font-weight: normal;
}
</style>
