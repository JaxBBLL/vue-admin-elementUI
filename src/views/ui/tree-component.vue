<template>
  <li>
    <div @click='toggle'>
      <i v-if='isFolder' class="fa" :class="[open?'fa-folder-open':'fa-folder']"></i>
      <i v-if='!isFolder' class="fa fa-file-text"></i> {{model.name}}
    </div>
    <ul v-show="open" v-if='isFolder' style="margin-left:20px;">
      <tree-list v-for='cel in model.children' :model='cel' :key="cel.id"></tree-list>
    </ul>
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
    isFolder: function() {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  }
}
</script>
<style scoped>
	li {
		padding:10px 0;
	}
	i {
		cursor: pointer;
	}
</style>
