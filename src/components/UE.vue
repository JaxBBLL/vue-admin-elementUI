<template>
  <div>
    <script :id="randomId" type="text/plain"></script>
  </div>
</template>
<script>
/* eslint-disable */
import '../../static/ueditor/ueditor.config.js'
import '../../static/ueditor/ueditor.all.min.js'
import '../../static/ueditor/lang/zh-cn/zh-cn.js'
export default {
  data() {
      return {
        editor: null,
        randomId: 'editor_' + (Math.random() * 100000000000000000)
      }
    },
    props: {
      defaultMsg: {
        type: String
      },
      config: {
        type: Object
      }
    },
    mounted() {
      const _this = this;
      this.editor = UE.getEditor(this.randomId, this.config); // 初始化UE
      this.editor.addListener("ready", function() {
        _this.editor.setContent(_this.defaultMsg); // 确保UE加载完成后，放入内容。
      });
    },
    methods: {
      getUEContent() { // 获取内容方法
        return this.editor.getContent()
      }
    },
    destroyed() {
      this.editor.destroy();
    }
}
</script>
