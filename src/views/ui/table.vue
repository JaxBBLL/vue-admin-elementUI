<template>
  <el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </el-row>
</template>
<script>
import {
  getUserList
} from '../../api/table-api.js';
export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      getUserList().then(res => {
        console.log('res', res);
        this.tableData = res;
      })
    }
  }
}
</script>
