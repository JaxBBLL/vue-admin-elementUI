<template>
  <el-row>
    <div class="clearfix">
      <el-table :data="table.data">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
        <el-table-column prop="address" label="性别">
          <template slot-scope="scope">
            <span>{{scope.row.gender | getLabel('gender')}}</span>
          </template>
        </el-table-column>
      </el-table>
      <pagination :table="table"></pagination>
    </div>
  </el-row>
</template>
<script>
import {
  getUserList
} from '../../api/api.js'
export default {
  data() {
      return {
        table: {
          data: [],
          send: {
            pageNo: 1,
            pageSize: this.$CONSTANT.PAGE_SIZE,
            userId: ''
          },
          totalCount: 0,
          totalPages: 0,
          pageSelect: this.$CONSTANT.PAGE_SELECT
        }
      }
    },
    mounted() {
      this.getList();
    },
    methods: {
      getList() {
        getUserList().then(res => {
          console.log('res', res);
          this.table.data = res;
        })
      }
    }
}
</script>
