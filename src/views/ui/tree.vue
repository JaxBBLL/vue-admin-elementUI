<template>
  <el-row>
    <el-col :span="24">
      <ul style="margin-top:-10px;">
      <tree-list :model="model" :data="data" v-for='model in data' :key="model.id" @handle-plus="handlePlus" @handle-edit="handleEdit" @handle-delete="handleDelete"></tree-list>
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
        pid: 0,
        name: '根节点',
        isPlus: true,
        children: [],
        path: '0',
        isRoot: true
      }]
    }
  },
  methods: {
    handlePlus(model) {
      console.log(this.data)
    },
    handleEdit(model) {
      console.log(model);
    },
    handleDelete(model) {
      // console.log(model);
    }
  }
}
</script>
