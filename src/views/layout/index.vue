<template>
  <div class="app-wrapper" :class="{'hide-sidebar':collapse}">
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
<style>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
}

.app-wrapper .sidebar-wrapper {
    width: 200px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    transition: all .28s ease-out;
}

.app-wrapper.hide-sidebar .sidebar-wrapper {
    width: 60px;
}

.app-wrapper .main-container {
    min-height: 100%;
    transition: all .28s ease-out;
    margin-left: 200px;
}

.app-wrapper.hide-sidebar .main-container {
    margin-left: 60px;
}

.app-wrapper .logo {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #1f2d3d;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
}

.app-wrapper .menu-wrapper {
    height: 100%;
}

.app-wrapper .el-menu {
    height: 100%;
}

.app-wrapper .main-container .main-header {
    position: fixed;
    height: 50px;
    background-color: #324157;
    width: 100%;
}

.app-wrapper .main-header .main-header-user {
    position: fixed;
    height: 50px;
    line-height: 50px;
    right: 20px;
}

.app-wrapper .main-header-user .el-dropdown-link {
    color: #fff;
    cursor: pointer;
}

.app-wrapper .main-body {
    top: 50px;
    position: relative;
    padding: 15px;
}

.app-wrapper i.collapse-arrow {
    margin-left: -10px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    color: #bfcbd9;
}

.app-wrapper i.collapse-arrow:hover {
    color: #fff;
    cursor: pointer;
}

.app-wrapper .parent-menu {
    position: relative;
}

.app-wrapper .son-menu {
    position: absolute;
    top: 0px;
    left: 60px;
    background-color: #1f2d3d;
    width: 200px;
    display: none;
}

.app-wrapper .son-menu:hover {
    display: block;
}

.app-wrapper.hide-sidebar .el-submenu__title:hover+.son-menu {
    display: block;
}

.app-wrapper .son-menu-item a {
    display: block;
    height: 40px;
    line-height: 40px;
    color: #bfcbd9;
    padding-left: 15px;
    font-size: 14px;
}

.app-wrapper .son-menu-item a:hover {
    background-color: #48576a;
}

.app-wrapper .el-menu-item a,
.app-wrapper .el-menu-item a:link,
.app-wrapper .el-menu-item a:focus,
.app-wrapper .el-menu-item a:active,
.app-wrapper .el-menu-item a:visited {
    color: #bfcbd9;
    display: block;
    width: 100%;
    height: 100%;
    margin-left: -40px;
    padding-left: 40px;
    padding-right: 45px;
}

.app-wrapper .el-menu-item a.router-link-active,
.app-wrapper .son-menu-item a.router-link-active {
    color: #bfcbd9;
}

.app-wrapper .el-menu-item a.router-link-exact-active.router-link-active,
.app-wrapper .son-menu-item a.router-link-exact-active.router-link-active {
    color: #20a0ff;
}

.app-wrapper .bread {
    margin-bottom: 10px;
    border: 1px solid #e3e3e3;
    padding: 10px;
}
</style>
