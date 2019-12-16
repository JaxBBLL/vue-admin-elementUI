<template>
  <div class="notfound-wrap">
    <section class="notfound">
      <img src="~@images/404.jpg" />
      <p>您访问的页面不存在！</p>
      <router-link
        :to="fullPath"
        class="el-button el-button--primary el-button--small"
        >后退</router-link
      >
      <router-link
        to="/home"
        class="el-button el-button--default el-button--small"
        >返回首页</router-link
      >
    </section>
  </div>
</template>
<script>
export default {
  name: 'Notfound',
  data() {
    return {
      fullPath: ''
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      vm.fullPath = from.fullPath;
    });
  },
  methods: {}
};
</script>

<style scoped lang="less">
.notfound-wrap {
  height: 100vh;
  box-sizing: border-box;
  padding-top: 150px;
  background: linear-gradient(
    0deg,
    rgba(232, 215, 190, 1) 0%,
    rgba(255, 255, 255, 1) 50%
  );
}
.notfound {
  text-align: center;
  p {
    font-size: 24px;
    padding: 30px 0;
    color: #d79d09;
  }
}
</style>
