<template>
  <li>
    <div>
      <i @click='toggle' v-if='isPlus' class="fa fa-lg" :class="[open?'fa-minus-circle':'fa-plus-circle']"></i><i v-if='!isPlus' class="fa fa-leaf fa-lg"></i><span>{{model.name}}</span>
      <em>
        <i class="fa fa-plus" @click="handlePlus(model)"></i>
        <i class="fa fa-pencil" @click="handleEdit(model)"></i>
        <i class="fa fa-trash" @click="handleDelete(model)"></i>
      </em>
    </div>
    <!-- <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft"> -->
    <transition name="fade">
      <ul v-show="open" v-if='isPlus'>
      <tree-list v-for='cel in model.children' :model='cel' :key="cel.id" @handle-plus="handlePlus" @handle-edit="handleEdit" @handle-delete="handleDelete"></tree-list>
    </ul>
    </transition>
  </li>
</template>
<script>
export default {
  name: 'tree-list',
  props: ['model'],
  components: {},
  data() {
    return {
      open: false
    }
  },
  computed: {
    isPlus: function() {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toggle: function() {
      if (this.isPlus) {
        this.open = !this.open
      }
    },
    handlePlus(model) {
      this.$emit('handle-plus', model)
    },
    handleEdit(model) {
      this.$emit('handle-edit', model)
    },
    handleDelete(model) {
      this.$emit('handle-delete', model)
    }
  }
}
</script>
<style scoped>
ul {
  margin-left: 10px;
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
