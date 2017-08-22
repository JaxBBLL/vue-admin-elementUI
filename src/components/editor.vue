<template>
  <div id="editor" @input="result">
  </div>
</template>
<script>
import WangEditor from 'wangeditor'
export default {
  props: ['content', 'path'],
  data() {
    return {
      editor: ''
    }
  },
  watch: {
    content(newV, oldV) {
      console.log(newV, oldV)
      this.content = newV;
      this.editor.txt.html(newV);
      this.result();
    }
  },
  mounted() {
    const el = document.getElementById('editor')
    const editor = new WangEditor(el)
    console.log('editor', editor)
    editor.customConfig.menus = [
      'head', // 标题
      'bold', // 粗体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      // 'emoticon',  // 表情
      'image', // 插入图片
      'table', // 表格
      'video', // 插入视频
      'code', // 插入代码
      'undo', // 撤销
      'redo' // 重复
    ]
    editor.customConfig.uploadImgServer = this.path // 上传图片到服务器
    editor.create()
    editor.txt.html(this.content)
    editor.customConfig.onchange = (html) => {
      this.content = html;
      this.result();
    }
    this.editor = editor;
    this.result();
  },
  methods: {
    result() {
      this.$emit('input', this.editor.txt.html())
    }
  }
}
</script>
<style scoped>
#editor {
  height: 440px;
}

.wangEditor-container {
  border-radius: 2px;
  overflow: hidden;
  border: 1px solid #CCC;
}
</style>
