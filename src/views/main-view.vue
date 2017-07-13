<template>
	 <div class="main-container">
      <div class="main-header">
        <div class="main-header-user">
          <el-dropdown>
            <span class="el-dropdown-link">
				    Peter<i class="el-icon-caret-bottom el-icon--right"></i>
				  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="main-body">
        <el-row v-if="$route.path !== '/home'" class="bread">
          <el-breadcrumb class="breadcrumb" separator="/">
            <el-breadcrumb-item :key="key+''" v-for="(item,key) in $route.matched">{{ item.name }}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-row>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
</template>
<style scoped>
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

.parent-menu {
  position: relative;
}

.son-menu {
  position: absolute;
  top: 0px;
  left: 60px;
  background-color: #1f2d3d;
  width: 200px;
  display: none;
}

.son-menu:hover {
  display: block;
}

.app-wrapper.hide-sidebar .el-submenu__title:hover+.son-menu {
  display: block;
}

.son-menu-item a {
  display: block;
  height: 40px;
  line-height: 40px;
  color: #bfcbd9;
  padding-left: 15px;
  font-size: 14px;
}

.son-menu-item a:hover {
  background-color: #48576a;
}

.el-menu-item a,
.el-menu-item a:link,
.el-menu-item a:focus,
.el-menu-item a:active,
.el-menu-item a:visited {
  color: #bfcbd9;
  display: block;
  width: 100%;
  height: 100%;
  margin-left: -40px;
  padding-left: 40px;
  padding-right: 45px;
}

.el-menu-item a.router-link-active,
.son-menu-item a.router-link-active {
  color: #bfcbd9;
}

.el-menu-item a.router-link-exact-active.router-link-active,
.son-menu-item a.router-link-exact-active.router-link-active {
  color: #20a0ff;
}
.bread {
  margin-bottom: 10px;
  border: 1px solid #e3e3e3;
  padding:10px;
  border-radius: 3px;
}
</style>
