<template>
  <div id="area">
    <p>请输入内容...</p>
  </div>
</template>
<script>
import E from 'wangeditor'
export default {
  data() {
    return {
    }
  },
  mounted() {
		var el = document.getElementById('area');
		var editor = new E(el);
		editor.create();
  }
}
</script>
