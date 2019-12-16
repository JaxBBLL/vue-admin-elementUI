<template>
  <div class="sidebar-wrapper">
    <el-scrollbar>
      <div :class="['siderbar-menu-wrapper', isCollapsed ? 'collapsed' : '']">
        <el-menu
          router
          class="el-menu-vertical"
          :collapse="isCollapsed"
          background-color="#324157"
          text-color="#fff"
          :collapse-transition="true"
          :default-openeds="openeds"
          :default-active="$route.path"
        >
          <div class="logo">
            {{ !isCollapsed ? '管理后台' : '管' }}
          </div>
          <template v-for="(item, index) in routes">
            <template v-if="!item.hidden">
              <el-submenu :index="index + ''" v-if="!item.leaf" :key="index">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span>{{ item.title }}</span>
                </template>
                <el-menu-item
                  v-for="child in item.children"
                  :index="child.path"
                  :key="child.path"
                >
                  <template v-if="!child.hidden">
                    <span>{{ child.title }}</span>
                  </template>
                </el-menu-item>
              </el-submenu>
              <el-menu-item
                v-if="item.leaf && item.children.length > 0"
                :index="item.children[0].path"
                :key="item.children[0].path"
              >
                <i :class="item.icon"></i>
                <span slot="title">{{ item.children[0].title }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </div>
    </el-scrollbar>
    <span class="menu-icon" @click="toggleCollapse">
      <i :class="[!isCollapsed ? 'el-icon-s-fold' : 'el-icon-s-unfold']"></i>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      openeds: []
    };
  },
  created() {},
  computed: {
    isCollapsed() {
      return this.$store.state.collapsed;
    },
    routes() {
      return this.$store.state.routes;
    }
  },
  methods: {
    toggleCollapse() {
      this.$store.commit('toggleCollapse');
    },
    setAllMenusOpen() {
      const openeds = [];
      this.$router.options.routes.forEach((item, index) => {
        if (!item.leaf && !item.hidden) {
          openeds.push(index.toString());
        }
      });
      this.openeds = openeds;
    }
  }
};
</script>
<style scoped lang="less">
@import '~@style/var.less';
.logo {
  height: 50px;
  font-size: 24px;
  color: #fff;
  background-color: #253041;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.2s;
  opacity: 1;
}
.siderbar-menu-wrapper {
  height: 100vh;
}

.el-menu-vertical {
  position: relative;
  &.v-leave-active {
    .logo {
      font-size: 0;
      opacity: 0;
    }
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 220px;
  height: 100%;
}

.el-menu-vertical.el-menu--collapse {
  height: 100%;
}

.el-submenu__title i,
.el-menu-item i {
  width: 22px;
  color: #fff;
}
.router-link-exact-active {
  color: @primary-color !important;
}
.menu-icon {
  position: absolute;
  top: 6px;
  right: -35px;
  font-size: 26px;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
  z-index: 1000;
}
</style>
