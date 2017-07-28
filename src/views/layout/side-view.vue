<template>
  <div class="sidebar-wrapper">
    <div class="logo">
      <span>{{title}}</span>
    </div>
    <div class="menu-wrapper">
      <el-menu v-if="!collapse" unique-opened>
        <el-submenu :index="index+''" v-for="(item,index) in menus" :key="index">
          <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
          <el-menu-item :key="child.id" :index="child.id+''" v-for="child in item.children">
            <router-link :to="{path:child.path}">{{child.name}}</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
      <ul class="el-menu" v-if="collapse">
        <li class="el-submenu parent-menu" v-for="(item,index) in menus">
          <template>
            <div class="el-submenu__title"><i :class="item.icon"></i></div>
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
        name: 'UI',
        icon: 'fa fa-home fa-lg',
        children: [{
          id: 10,
          name: '表格',
          path: '/ui/table',
          children: []
        }, {
          id: 11,
          name: '按钮',
          path: '/ui/button',
          children: []
        }, {
          id: 11,
          name: '图表',
          path: '/ui/chart',
          children: []
        }, {
          id: 11,
          name: '树形',
          path: '/ui/tree',
          children: []
        }]
      }, {
        id: 2,
        name: '用户',
        icon: 'fa fa-table fa-lg',
        children: [{
          id: 20,
          name: '用户列表',
          path: '/user/index'
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
