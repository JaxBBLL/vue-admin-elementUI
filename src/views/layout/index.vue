<template>
  <div class="app-wrap" :class="{'hide-sidebar':collapse}">
    <side-view></side-view>
    <main-view></main-view>
  </div>
</template>
<script>
import sideView from './side-view.vue'
import mainView from './main-view.vue'
export default {
  components: {
    sideView,
    mainView
  },
  data() {
    return {}
  },
  computed: {
    collapse() {
      return this.$store.state.collapsed
    }
  }
}
</script>
<style lang="less">
.app-wrap {
    position: relative;
    height: 100%;
    width: 100%;
}

.app-wrap .sidebar-wrapper {
    width: 200px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    transition: all .28s ease-out;
}

.app-wrap.hide-sidebar .sidebar-wrapper {
    width: 60px;
}

.app-wrap .main-container {
    min-height: 100%;
    transition: all .28s ease-out;
    margin-left: 200px;
}

.app-wrap.hide-sidebar .main-container {
    margin-left: 60px;
}

.app-wrap .logo {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #1f2d3d;
    color: #fff;
    font-weight: bold;
}
.app-wrap .logo span{
    font-size: 20px;
}
.app-wrap .menu-wrapper {
    height: 100%;
}

.app-wrap .el-menu {
    height: 100%;
}

.app-wrap .main-container .main-header {
    position: fixed;
    height: 50px;
    background-color: #324157;
    width: 100%;
    top: 0;
    z-index: 100;
}

.app-wrap .main-header .main-header-user {
    position: fixed;
    height: 50px;
    line-height: 50px;
    right: 20px;
}

.app-wrap .main-header-user .el-dropdown-link {
    color: #fff;
    cursor: pointer;
}

.app-wrap .main-body {
    margin-top: 50px;
    padding: 10px;
    overflow: auto;
}

.app-wrap i.collapse-arrow {
    margin-left: -10px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    color: #bfcbd9;
}

.app-wrap i.collapse-arrow:hover {
    color: #fff;
    cursor: pointer;
}

.app-wrap .parent-menu {
    position: relative;
}

.app-wrap .son-menu {
    position: absolute;
    top: 0px;
    left: 60px;
    background-color: #1f2d3d;
    width: 200px;
    display: none;
}

.app-wrap .son-menu:hover {
    display: block;
}

.app-wrap.hide-sidebar .el-submenu__title:hover+.son-menu {
    display: block;
}

.app-wrap .son-menu-item a {
    display: block;
    height: 40px;
    line-height: 40px;
    color: #bfcbd9;
    padding-left: 15px;
    font-size: 14px;
}

.app-wrap .son-menu-item a:hover {
    background-color: #48576a;
}

.app-wrap .el-menu-item a,
.app-wrap .el-menu-item a:link,
.app-wrap .el-menu-item a:focus,
.app-wrap .el-menu-item a:active,
.app-wrap .el-menu-item a:visited {
    color: #bfcbd9;
    display: block;
    width: 100%;
    height: 100%;
    margin-left: -40px;
    padding-left: 40px;
    padding-right: 45px;
}

.app-wrap .el-menu-item a.router-link-active,
.app-wrap .son-menu-item a.router-link-active {
    color: #bfcbd9;
}

.app-wrap .el-menu-item a.router-link-exact-active.router-link-active,
.app-wrap .son-menu-item a.router-link-exact-active.router-link-active {
    color: #20a0ff;
}

.app-wrap .bread {
    margin-bottom: 10px;
    border: 1px solid #e3e3e3;
    padding: 10px;
}
</style>
