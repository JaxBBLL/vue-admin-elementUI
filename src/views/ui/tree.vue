<template>
  <el-row>
    <el-col :span="4">
      <ul style="margin-top:-10px;">
      <tree-list :model="model" v-for='model in data' :key="model.id" @handle-plus="handlePlus" @handle-edit="handleEdit" @handle-delete="handleDelete"></tree-list>
    </ul>
    </el-col>
  </el-row>
</template>
<script>
import treeList from './tree-component.vue'
export default {
  components: {
    treeList
  },
  data() {
    return {
      data: [{
        id: 1,
        name: '项目管理',
        children: [{
          id: 101,
          name: '项目1',
          children: [{
            id: 1001,
            name: '项目1-1',
            children: []
          }, {
            id: 1002,
            name: '项目1-2',
            children: []
          }]
        }]
      }, {
        id: 2,
        name: '人事管理',
        children: [{
          id: 20,
          name: '人事1',
          children: []
        }, {
          id: 21,
          name: '人事2'
        }]
      }]
    }
  },
  methods: {
    handlePlus(model) {
      console.log(model);
    },
    handleEdit(model) {
      console.log(model);
    },
    handleDelete(model) {
      console.log(model);
    }
  }
}
</script>
