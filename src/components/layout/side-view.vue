<template>
  <div class="sidebar-wrapper">
    <el-scrollbar>
      <div :class="['siderbar-menu-wrapper', isCollapsed ? 'collapsed' : '']">
        <el-menu
          router
          class="el-menu-vertical"
          :collapse="isCollapsed"
          text-color="#fff"
          :collapse-transition="true"
          :default-openeds="openeds"
          :default-active="$route.path"
        >
          <router-link class="logo" to="/home">
            {{ !isCollapsed ? '管理后台' : '管' }}
          </router-link>
          <template v-for="menu in routes">
            <sub-menu
              :key="menu.id"
              v-if="!menu.hidden"
              :menu="menu"
              :routes="routes"
            ></sub-menu>
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
import SubMenu from './sub-menu';
export default {
  data() {
    return {};
  },
  components: {
    SubMenu
  },
  created() {},
  computed: {
    isCollapsed() {
      return this.$store.state.collapsed;
    },
    routes() {
      return this.$store.state.routes;
    },
    openeds() {
      const openeds = [];
      this.$store.state.routes.forEach((item, index) => {
        if (!item.leaf) {
          openeds.push(item.id.toString());
        }
      });
      return openeds;
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
  height: 40px;
  font-size: 24px;
  color: #fff;
  background-color: @bg-logo;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.2s;
  opacity: 1;
}

.siderbar-menu-wrapper {
  height: 100vh;
  &.collapsed {
    /deep/ .fa ~ * {
      display: none;
    }
  }
  .el-menu-vertical.el-menu {
    background-color: @bg-menu;
  }
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
  width: 230px;
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

.menu-icon {
  position: absolute;
  top: 0;
  right: -35px;
  font-size: 26px;
  color: #fff;
  cursor: pointer;
  border-radius: 50%;
  padding: 5px;
  z-index: 1000;
}
</style>
