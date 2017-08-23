<template>
  <el-row>
    <h1>home page test</h1>
    <div class="">
      <v-editor :content="content" :path="path" v-model="result"></v-editor>
      <input type="button" name="name" value="submit" @click="submit">
      <input type="button" name="name" value="change" @click="change">
    </div>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      // input content to editor
      content: '<h1 style="color:red">base on wangeditor</h1>',
      // output content from editor
      result: '',
      // set image upload api url
      path: '/api/v1/help/upload/wangEditorH5File'
    }
  },
  methods: {
    submit() {
      console.log(this.result)
    },
    change() {
      this.content = 'hello result' + Math.random();
    }
  }
}
</script>
<style scoped>
h1 {
  font-size: 30px;
}
</style>
