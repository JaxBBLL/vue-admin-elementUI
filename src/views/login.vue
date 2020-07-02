<template>
  <div @keyup.enter="submitForm('loginForm')" class="login-wrap">
    <el-form
      :model="form"
      :rules="rules"
      ref="loginForm"
      label-position="left"
      label-width="0px"
      class="login-container"
    >
      <h2 class="title">系 统 登 录</h2>
      <el-form-item prop="userName">
        <i class="el-icon-user-solid icon"></i>
        <el-input
          v-model="form.userName"
          placeholder="账号"
          size="large"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <i class="el-icon-unlock icon"></i>
        <el-input
          type="password"
          v-model="form.password"
          placeholder="密码"
          size="large"
          auto-complete="new-password"
        ></el-input>
      </el-form-item>
      <el-form-item required>
        <el-col :span="11">
          <el-form-item prop="captcha">
            <i class="el-icon-key icon"></i>
            <el-input
              v-model="form.captcha"
              placeholder="验证码"
              size="large"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <img
            class="code-img"
            @click="captchaImgRefresh"
            :src="captchaImg"
            height="50"
          />
        </el-col>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button
          type="primary"
          style="width:100%;"
          @click="submitForm('loginForm')"
          :loading="logining"
          size="large"
          >立即登录</el-button
        >
      </el-form-item>
      <!-- <el-form-item>
        <el-checkbox v-model="form.rememberMe">保持登录</el-checkbox>
      </el-form-item> -->
    </el-form>
  </div>
</template>
<script>
import { adornUrl } from '@common/util';
import { loginApi } from '@api/common';
const captchaImg = adornUrl('/api/v1/admin/captcha');

export default {
  name: 'login',
  data() {
    return {
      logining: false,
      captchaImg: captchaImg,
      form: {
        userName: 'zjadmin',
        password: '123456',
        captcha: '12345',
        rememberMe: false
      },
      rules: {
        userName: [
          {
            required: true,
            message: '请输入登录名',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 50,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 50,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
          }
        ],
        captcha: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          },
          {
            min: 4,
            max: 5,
            message: '长度四个字符',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  mounted() {
    window.sessionStorage.clear();
    this.$store.dispatch('clearVisitedViews');
  },
  methods: {
    async submitForm(formName) {
      let valid = false;
      this.$refs[formName].validate(v => {
        valid = v;
      });
      if (!valid) {
        return false;
      }
      this.logining = true;
      window.sessionStorage.clear();
      const userAccount = {
        userName: this.form.userName,
        password: this.form.password
      };
      if (this.form.rememberMe) {
        window.localStorage.setItem('userAccount', JSON.stringify(userAccount));
      }
      let [res] = await loginApi(this.form);
      if (res) {
        if (res.success) {
          this.$store.commit('setUser', res.data);
          this.$router.push('/');
        } else {
          this.$message.error(res.message);
          this.captchaImgRefresh();
        }
      }
      this.logining = false;
      this.$store.commit('setUser', { name: 'peter' });
      this.$router.push('/');
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    captchaImgRefresh() {
      this.captchaImg = captchaImg + '?t=' + +new Date();
    }
  }
};
</script>
<style scoped lang="less">
.login-wrap {
  background: #2d3a4b;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.login-container {
  width: 400px;
  height: 360px;
  margin-bottom: 150px;
  padding: 20px;
  /deep/ .el-form-item__content {
    position: relative;
    .icon {
      position: absolute;
      color: #889aa4;
      font-size: 18px;
      z-index: 10;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
    }
  }
  /deep/ .el-input__inner {
    background: rgb(40, 52, 67);
    color: #fff;
    border-color: transparent;
    height: 50px;
    padding-left: 45px;
  }
  /deep/ .el-checkbox__inner {
    background: transparent;
    border-color: #889aa4;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #fff;
    font-size: 24px;
    font-weight: normal;
  }
  .code-img {
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>
