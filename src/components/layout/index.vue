<template>
  <div class="app-wrap">
    <side-view></side-view>
    <main-view></main-view>
  </div>
</template>
<script>
import sideView from './side-view.vue';
import mainView from './main-view.vue';
export default {
  components: {
    sideView,
    mainView
  },
  data() {
    return {};
  },
  computed: {
    collapse() {
      return this.$store.state.collapsed;
    }
  }
};
</script>
<style lang="less">
.app-wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  .sidebar-wrapper {
    height: 100%;
    position: relative;
  }
  .container-wrapper {
    position: relative;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
