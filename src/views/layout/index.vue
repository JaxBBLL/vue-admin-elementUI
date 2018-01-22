<template>
  <div class="app-wrap" :class="{'hide-sidebar':collapse}">
    <side-view></side-view>
    <main-view></main-view>
  </div>
</template>
<script>
import sideView from './side-view.vue'
import mainView from './main-view.vue'
export default {
  components: {
    sideView,
    mainView
  },
  data() {
    return {}
  },
  computed: {
    collapse() {
      return this.$store.state.collapsed
    }
  }
}
</script>
<style lang="less">
@import "~style/layout.less";
</style>
