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
        <h3>Forgot Password? 🔒</h3>
        <p class="subtitle">Enter your email and we'll send you instructions to reset your password</p>
        <el-form ref="form" :model="form" :rules="rules" label-position="top">
          <el-form-item label="Email" prop="email">
            <el-input placeholder="Jason@example.com" v-model="form.email" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="sendEmail('form')">Send reset link</el-button>
          </el-form-item>
          <el-form-item>
            <p class="new">
              <router-link to="/login">
                <i class="el-icon-arrow-left"></i> Back to login
              </router-link>
            </p>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "forgot-password",
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
      form: {
        email: "",
      },
      rules: {
        email: [
          {
            required: true,
            trigger: "blur",
            validator: checkEmail,
          },
        ],
      },
    };
  },
  methods: {
    sendEmail(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post("forgot-password", this.form).then((res) => {
            // this.$router.push("/dashboard");
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
    background: #fafafa url("../assets/img/forgot-password.svg") no-repeat
      center center / 63%;
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
      line-height: 22px;
      color: #6e6b7b;
    }
    form {
      margin-top: 25px;
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
      margin: 0;
      font-size: 14px;
      line-height: 22px;
      color: #6e6b7b;
      text-align: center;
    }
  }
}
</style>
