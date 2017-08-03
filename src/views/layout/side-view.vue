<template>
  <div class="sidebar-wrapper">
    <div class="logo">
      <span>{{title}}</span>
    </div>
    <div class="menu-wrapper">
      <!-- <el-menu v-if="!collapse" unique-opened>
        <el-submenu :index="index+''" v-for="(item,index) in menus" :key="index">
          <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
          <el-menu-item :key="child.id" :index="child.id+''" v-for="child in item.children">
            <router-link :to="{path:child.path}">{{child.name}}</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu> -->
      <!--      <ul class="el-menu" v-if="collapse">
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
      </ul> -->
      <ul class="el-menu" v-if="collapse">
        <li class="el-submenu parent-menu" v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
          <template v-if="!item.leaf">
            <div class="el-submenu__title"><i :class="item.icon"></i></div>
            <ul class="son-menu">
              <li class="son-menu-item" v-for="child in item.children">
                <router-link :to="{path:child.path}">{{child.name}}</router-link>
              </li>
            </ul>
          </template>
          <template v-else>
            <router-link tag="div" :to="{path:item.children[0].path}" class="el-submenu__title"><i :class="item.icon"></i></router-link>
          </template>
        </li>
      </ul>
      <el-menu unique-opened router v-if="!collapse">
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
          <el-submenu :index="index+''" v-if="!item.leaf">
            <template slot="title"><i :class="item.icon"></i>{{item.name}}</template>
            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
          </el-submenu>
          <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.icon"></i>{{item.children[0].name}}</el-menu-item>
        </template>
      </el-menu>
      <i class="collapse-arrow fa fa-2x" :class="{'fa-arrow-circle-right':collapse,'fa-arrow-circle-left':!collapse}" @click="toggleCollapse"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '管理后台'
    }
  },
  computed: {
    collapse() {
      return this.$store.state.collapsed
    }
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
