<template>
  <el-row>
    <h1>home page test</h1>
    <div class="">
      <input type="button" name="name" value="submit" @click="submit">
      <input type="button" name="name" value="change" @click="change">
    </div>
  </el-row>
</template>
<script>
export default {
  data() {
      return {}
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
