<template>
  <el-row>
    <el-button>{{msg}}</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      msg: 'button'
    }
  }
}
</script>
