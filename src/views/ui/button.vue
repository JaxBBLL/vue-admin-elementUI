<template>
  <el-row>
    <el-button>{{msg}}</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="search">搜索</el-button>
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
