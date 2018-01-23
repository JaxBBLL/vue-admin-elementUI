<template>
  <el-row>
    <test></test>
    <el-row>
      <el-button type="primary">按钮...</el-button>
    </el-row>
  </el-row>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  render(createElement) {
    return createElement(
      'h' + this.level, // tag name 标签名称
      this.$slots.default // 子组件中的阵列
    )
  }
}
</script>
<style scoped>
</style>
