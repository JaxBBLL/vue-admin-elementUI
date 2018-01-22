<template>
  <el-pagination class="fr mt10" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="table.send.pageNo" :page-sizes="table.pageSelect" :page-size="table.send.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="table.totalCount">
  </el-pagination>
</template>
<script>
export default {
  props: {
    table: Object
  },
  data() {
    return {}
  },
  methods: {
    handleSizeChange(val) {
      this.table.send.pageSize = val;
      this.$emit('size-change', val);
    },
    handleCurrentChange(val) {
      this.table.send.pageNo = val;
      this.$emit('current-change', val);
    }
  }
}
</script>
