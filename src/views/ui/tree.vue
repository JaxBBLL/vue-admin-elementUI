<template>
  <div>
    <ul>
      <tree-list :model="model" v-for='model in data' :key="model.id"></tree-list>
    </ul>
  </div>
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
        children: []
      }]
    }
  }
}
</script>
