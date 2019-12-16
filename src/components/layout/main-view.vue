<template>
  <div class="container-wrapper">
    <HeaderView />
    <Tabs v-show="isShowTabs && !$route.meta.noTabs"></Tabs>
    <div class="content-wrapper">
      <div class="content">
        <transition name="fade">
          <keep-alive :include="cacheNames">
            <router-view
              :key="$route.path"
              v-if="!$route.meta.noCache"
            ></router-view>
          </keep-alive>
        </transition>
        <transition name="fade">
          <router-view v-if="$route.meta.noCache"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import Tabs from './tabs.vue';
import HeaderView from './header-view';

export default {
  data() {
    return {};
  },
  components: {
    Tabs,
    HeaderView
  },
  mounted() {
    this.$store.commit('getUser');
  },
  computed: {
    collapse() {
      return this.$store.state.collapsed;
    },
    isShowTabs() {
      return !!this.$store.state.visitedViews.length;
    },
    cacheNames() {
      return this.$store.getters.cacheNames;
    }
  },
  methods: {}
};
</script>
<style scoped lang="less">
.content-wrapper {
  box-sizing: border-box;
  position: relative;
  padding: 10px;
  flex: 1;
  z-index: 1;
  overflow: auto;
  background: #eff0f3;
  .content {
    min-width: 1100px;
  }
}
</style>
