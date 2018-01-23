<template>
  <el-row>
    <el-row>
      <address-input :initial="address" v-model="address"></address-input>
      <el-button type="primary" @click="addressShow">获取地址</el-button>
    </el-row>
    <el-table :data="table.data">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
        <template slot-scope="scope">
          <span>{{scope.row.address}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="性别">
        <template slot-scope="scope">
          <span>{{scope.row.gender | getLabel('gender')}}</span>
        </template>
      </el-table-column>
    </el-table>
    <pagination :table="table" @size-change="getList" @current-change="getList"></pagination>
  </el-row>
</template>
<script>
import {
  getUserList
} from 'api/api.js'
export default {
  name: 'UserIndex',
  componentName: 'UserIndex',
  data() {
    return {
      // 如果是分页表格，要用这样的数据格式，pagination组件已经写好了默认的参数
      table: {
        data: [],
        send: {
          userId: ''
        }
      },
      address: ['13000000', '13020000']
    }
  },
  mounted() {
    this.getList();
    console.log('table', this.table)
  },
  methods: {
    getList() {
      getUserList().then(res => {
        console.log('res', this.table);
        this.table.data = res;
      })
    },
    addressShow() {
      console.log(this.address)
    }
  }
}
</script>
