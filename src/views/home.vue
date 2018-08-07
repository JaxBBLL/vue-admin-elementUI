<template>
  <el-row>
    <test></test>
    <el-row>
      <el-tag type="primary" closable color="#ab5" hit @close="closeHandle" v-if="isShow">tag</el-tag>
    </el-row>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    closeHandle() {
      this.isShow = false;
    }
  }
}
</script>
<style scoped>
</style>
