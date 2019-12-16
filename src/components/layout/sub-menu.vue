<template>
  <div>
    <template v-if="!menu.leaf">
      <el-submenu
        v-if="menu.children && menu.children.length >= 1"
        :index="menu.id + ''"
      >
        <template slot="title">
          <i :class="menu.icon"></i>
          <span>{{ menu.title }}</span>
        </template>
        <sub-menu
          v-for="item in menu.children"
          :key="item.id"
          :menu="item"
          :routes="routes"
        >
        </sub-menu>
      </el-submenu>
      <!-- <el-menu-item
        v-else
        :index="menu.id + ''"
        @click="
          $router.push({
            path: menu.path
          })
        "
      >
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.title }}</span>
      </el-menu-item> -->
      <router-link
        v-else-if="!menu.hidden"
        :index="menu.id + ''"
        tag="li"
        class="el-menu-item link"
        :to="menu.path"
        >{{ menu.title }}</router-link
      >
    </template>
    <!-- <el-menu-item
      v-if="menu.leaf && menu.children.length > 0"
      :index="menu.children[0].path"
      :key="menu.children[0].path"
      class="link"
    >
      <i :class="menu.icon"></i>
      <span slot="title">{{ menu.children[0].title }}</span>
    </el-menu-item> -->
    <router-link
      v-if="menu.leaf && menu.children.length > 0"
      :index="menu.id + ''"
      tag="li"
      class="el-menu-item link"
      :to="menu.children[0].path"
      ><i :class="menu.icon"></i><span>{{ menu.children[0].title }}</span></router-link
    >
  </div>
</template>

<script>
import SubMenu from './sub-menu';
export default {
  name: 'SubMenu',
  props: {
    menu: {
      type: Object,
      required: true
    },
    routes: {
      type: Array,
      required: true
    }
  },
  components: {
    SubMenu
  },
  computed: {},
  methods: {}
};
</script>

<style lang="less" scoped>
@import '~@style/var.less';
.el-submenu__title i,
.el-menu-item i {
  width: 22px;
  color: #fff !important;
}
.link {
  color: #fff !important;
  background-color: @bg-menu !important;
  &.router-link-exact-active {
    background-color: @bg-router-active !important;
  }
}
</style>
