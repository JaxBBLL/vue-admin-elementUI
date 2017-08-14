<template>
  <li>
    <div>
      <i @click='toggle(model)' v-if='isPlus' class="fa fa-lg" :class="[open?'fa-minus-circle':'fa-plus-circle']"></i><i v-if='!isPlus' class="fa fa-leaf fa-lg"></i><span>{{model.name}}</span>
      <em v-if="!model.isRoot">
        <i class="fa fa-plus" @click="handlePlus(model)"></i>
        <i class="fa fa-pencil" @click="handleEdit(model)"></i>
        <i class="fa fa-trash" @click="handleDelete(model)"></i>
      </em>
    </div>
    <!-- <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft"> -->
    <transition name="fade">
      <ul v-show="open" v-if='isPlus'>
        <tree-list v-for='cel in model.children' :data="data" :model='cel' :key="cel.id" @handle-plus="handlePlus" @handle-edit="handleEdit" @handle-delete="handleDelete"></tree-list>
      </ul>
    </transition>
  </li>
</template>
<script>
import {
  getTreeList
} from '../../api/api.js'
export default {
  name: 'tree-list',
  props: ['model', 'data'],
  components: {},
  data() {
    return {
      open: false
    }
  },
  computed: {
    isPlus() {
      return this.model.isPlus
    }
  },
  methods: {
    toggle(model) {
      if (!this.open) {
        getTreeList().then(res => {
          // model.children = res
          model.children = this.randomData(model.id, model.path);
          this.open = !this.open
          console.log(this.$toJSON(this.data))
        })
      } else {
        model.children = [];
        this.open = !this.open
      }
    },
    randomData(pid, path) {
      let arr = [];
      let n = parseInt((Math.random() * 3) + 2);
      for (let i = 0; i < n; i++) {
        const data = {
          id: Date.now() + i,
          pid: pid,
          name: '节点' + parseInt(Math.random() * 1000),
          children: [],
          isPlus: Math.random() > 0.3,
          path: path + '.' + i
        };
        arr.push(data)
      }
      return arr;
    },
    handlePlus(model) {
      this.$emit('handle-plus', model)
    },
    handleEdit(model) {
      this.$emit('handle-edit', model)
    },
    handleDelete(model) {
      const path = model.path.split('.')
      var target = this.data;
      var result;
      while (path.length) {
        var p = path.shift() - 0;
        result = target[p];
        target = result.children;
        if (path.length === 1) {  //  length===1 为父数据
          target.splice(path[0], 1);
          break;
        }
      }
    },
    walk(node, cb) {
      if (node === null) return;
      var stack = JSON.parse(JSON.stringify(node))
      var target
      while (stack.length) {
        target = stack.shift()
        cb(target)
      }
      [].push.apply(stack, target.children)
    }
  }
}
</script>
<style scoped>
ul {
  margin-left: 15px;
}

li {
  padding-top: 20px;
}

i {
  cursor: pointer;
}

i.fa-leaf {
  cursor: pointer;
}

span {
  padding: 5px;
  margin-left: 8px;
  border: 1px dotted #ccc;
  border-radius: 5px;
}

span:hover {
  background-color: #EFF2F7;
}

em i:hover {
  color: #e33;
}
</style>
