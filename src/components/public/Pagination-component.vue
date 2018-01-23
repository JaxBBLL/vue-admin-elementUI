<template>
  <div class="clearfix">
    <el-pagination class="fr mt10" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="table.send.pageNo" :page-sizes="table.pageSelect" :page-size="table.send.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="table.totalCount">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    table: {
      type: Object
    }
  },
  data() {
    return {}
  },
  created() {
    this.table.pageSelect = this.table.pageSelect || this.$CONSTANT.PAGE_SELECT;
    this.table.totalCount = this.table.totalCount || 0;
    this.table.totalPages = this.table.totalPages || 0;
    this.table.send.pageNo = this.table.send.pageNo || 1;
    this.table.send.pageSize = this.table.send.pageSize || this.$CONSTANT.PAGE_SIZE;
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
