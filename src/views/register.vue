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
        <h3>Adventure starts here 🚀</h3>
        <p class="subtitle">Make your app management easy and fun!</p>
        <el-form ref="form" :model="form" :rules="rules" label-position="top">
          <el-form-item label="Username" prop="username">
            <el-input placeholder="Jason" v-model="form.username" clearable></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="email">
            <el-input placeholder="Jason@example.com" v-model="form.email" clearable></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input placeholder="Password" v-model="form.password" :type="isVisible? 'text': 'password'">
              <i slot="suffix" class="el-input__icon el-icon-view" @mousedown="isVisible=true" @mouseup="isVisible=false"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-row type="flex" justify="space-between">
              <el-checkbox v-model="isAgree">I agree to privacy policy & terms</el-checkbox>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="Register('form')">Sign up</el-button>
          </el-form-item>
          <el-form-item>
            <p class="new">
              Already have an account?
              <router-link to="/login">Sign in instead</router-link>
            </p>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    // 验证邮箱格式
    var checkEmail = (rule, value, callback) => {
      let reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;
      if (value === "") {
        callback(new Error("The Email field is required"));
      } else if (!reg.test(value)) {
        callback(new Error("The Email field must be a valid email"));
      } else {
        callback();
      }
    };
    return {
      isAgree: false,
      isVisible: false,
      form: {
        username: "",
        email: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "The Username field is required",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            trigger: "blur",
            validator: checkEmail,
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
    Register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post("login", this.form).then((res) => {
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
    background: #f8f8f8 url("../assets/img/register.svg") no-repeat center
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
        .el-icon-view:hover {
          cursor: pointer;
          color: #666;
        }
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
