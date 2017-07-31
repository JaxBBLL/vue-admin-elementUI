<template>
  <div @keyup.enter="submitForm('loginForm')">
    <el-form :model="form" :rules="rules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h2 class="title">系统登录</h2>
      <el-form-item prop="userName">
        <el-input v-model="form.userName" placeholder="账号" size="large"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="form.password" placeholder="密码" size="large"></el-input>
      </el-form-item>
      <el-form-item required>
        <el-col :span="11">
          <el-form-item prop="captcha">
            <el-input v-model="form.captcha" placeholder="验证码" size="large"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">&nbsp;</el-col>
        <el-col :span="11">
          <img class="weui-vcode-img" :src="verifyImage" height="42"/>
        </el-col>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="submitForm('loginForm')" :loading="logining" size="large">立即登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-col :span="8">
          <el-checkbox v-model="form.rememberMe" class="remember">保持登录</el-checkbox>
        </el-col>
        <!--  <el-col :span="16" style="text-align:right;">
          <el-button type="text" @click="$router.push('/register')">注册新用户</el-button>
          <el-button type="text" @click="$router.push('/findpwd/')">忘记密码？</el-button>
        </el-col> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      logining: false,
      verifyImage: this.$appconfig.captcha,
      form: {
        userName: 'zjadmin', //  zjadmin
        password: '123456', //  123456
        captcha: '12345',
        rememberMe: false
      },
      rules: {
        userName: [{
          required: true,
          message: '请输入登录名',
          trigger: 'blur'
        }, {
          min: 3,
          max: 50,
          message: '长度在 3 到 5 个字符',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }, {
          min: 3,
          max: 50,
          message: '长度在 3 到 5 个字符',
          trigger: 'blur'
        }],
        captcha: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }, {
          min: 4,
          max: 5,
          message: '长度四个字符',
          trigger: 'blur'
        }]
      }

    }
  },
  mounted() {
    window.sessionStorage.clear();
  },
  methods: {
    submitForm(formName) {
      let valid = false;
      this.$refs[formName].validate((v) => {
        valid = v
      });
      if (!valid) {
        return false;
      }
      this.logining = true;
      window.sessionStorage.clear();
      const user = {
        name: 'Peter'
      }
      window.sessionStorage.setItem('user', JSON.stringify(user));
      this.$router.push('/')
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style>
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 120px auto;
  width: 420px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login-container .title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.login-container .remember {
  margin: 0px 0px 35px 0px;
}
.login-container .weui-vcode-img {
  cursor: pointer;
}
textarea {
  width: 400px;
  height: 300px;
  font-size: 12px;
}

</style>
