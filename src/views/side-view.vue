<template>
	<div class="sidebar-wrapper">
      <div class="logo">
        <span>{{title}}</span>
      </div>
      <div class="menu-wrapper">
        <el-menu v-if="!collapse" unique-opened>
          <el-submenu :index="index+''" v-for="(item,index) in menus" :key="index">
            <template slot="title"><i class="fa fa-home fa-lg"></i>{{item.name}}</template>
            <el-menu-item :key="child.id" :index="child.id+''" v-for="child in item.children">
              <router-link :to="{path:child.path}">{{child.name}}</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <ul class="el-menu" v-if="collapse">
          <li class="el-submenu parent-menu" v-for="(item,index) in menus">
            <template>
              <div class="el-submenu__title"><i class="fa fa-home fa-lg"></i></div>
              <ul class="son-menu">
                <li class="son-menu-item" v-for="child in item.children">
                  <router-link :to="{path:child.path}">{{child.name}}</router-link>
                </li>
              </ul>
            </template>
          </li>
        </ul>
        <i class="collapse-arrow fa fa-2x" :class="{'fa-arrow-circle-right':collapse,'fa-arrow-circle-left':!collapse}" @click="toggleCollapse"></i>
      </div>
    </div>
</template>
<script>
	export default {
  data() {
    return {
      title: '管理后台',
      menus: [{
        id: 1,
        name: '菜单1',
        children: [{
          id: 10,
          name: '表格',
          path: '/table',
          children: []
        }, {
          id: 11,
          name: '按钮',
          path: '/button',
          children: []
        }]
      }, {
        id: 2,
        name: '菜单2',
        children: [{
          id: 20,
          name: '表单',
          path: '/form',
          children: []
        }, {
          id: 21,
          name: '图标',
          path: '/chart',
          children: []
        }, {
          id: 21,
          name: 'font',
          path: '/font',
          children: []
        }]
      }]
    }
  },
  computed: {
    collapse() {
      return this.$store.state.collapsed
    }
  },
  mounted() {
    console.log('store...', this.$store)
  },
  methods: {
    toggleCollapse() {
      this.$store.commit('toggleCollapse')
      if (!this.collapse) {
        this.title = '管理后台'
      } else {
        this.title = '管'
      }
    }
  }
}
</script>
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
