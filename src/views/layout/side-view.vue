<template>
  <div class="sidebar-wrapper">
    <div class="logo">
      <span>{{title}}</span>
    </div>
    <div class="menu-wrapper">
      <el-menu router class="el-menu-vertical" :collapse="collapse" background-color="#324157" text-color="#fff">
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
          <el-submenu :index="index+''" v-if="!item.leaf">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.title}}</span>
            </template>
            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
              <!-- <router-link :to="{path:child.path}">{{child.title}}</router-link> -->
              <span>{{child.title}}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
            <i :class="item.icon"></i>
            <span slot="title">{{item.children[0].title}}</span>
          </el-menu-item>
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
<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}

.el-menu-vertical.el-menu--collapse {
  height: 100%;
}
</style>
