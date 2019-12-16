<template>
  <div class="header-wrapper">
    <!-- <el-breadcrumb v-if="!$route.meta.noBread" class="breadcrumb" separator="/">
      <el-breadcrumb-item
        :key="key + ''"
        v-for="(item, key) in $route.matched"
        >{{ item.meta.title }}</el-breadcrumb-item
      >
    </el-breadcrumb> -->
    <router-link to="/home" class="home"
      ><i class="fa fa-home"></i
    ></router-link>
    <div class="header-content"></div>
    <div class="header-user">
      <a class="link" :href="$CONSTANT.HOST + '/admin/logout'"><i class="el-icon-switch-button"></i> 注销</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$confirm('确认退出吗?', '提示', {
        type: 'warning'
      })
        .then(() => {
          this.$router.push('/login');
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped lang="less">
@import '~@style/var.less';
.header-wrapper {
  position: relative;
  height: 40px;
  background-color: @bg-header;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;

  .home {
    font-size: 26px;
    color: #fff;
  }

  .header-content {
    flex: 1;
    color: #fff;
  }
  .header-user {
    float: left;
    margin-right: 30px;
    .link,
    .el-button--text {
      color: #fff;
      margin-left: 20px;
      font-size: 14px;
    }
    .el-dropdown-link {
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
