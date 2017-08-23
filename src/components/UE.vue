<template>
  <div ref="editor"></div>
</template>
<script>
/* eslint-disable */
import '@/assets/UE/ueditor.config';
/* eslint-disable */
import '@/assets/UE/ueditor.all';
/* eslint-disable */
// import '@/assets/UE/lang/zh-cn/zh-cn';

export default {
  data() {
    return {
      id: Date.now() + 'ueditorId',
    };
  },
  props: {
    value: {
      type: String,
      default: null,
    },
    config: {
      type: Object,
      default: {},
    }
  },
  watch: {
    value: function value(val, oldVal) {
      this.editor = UE.getEditor(this.id, this.config);
      if (val !== null) {
        this.editor.setContent(val);
      }
    }
  },
  mounted() {
    this.$nextTick(function f1() {
      // 保证 this.$el 已经插入文档

      this.$refs.editor.id = this.id;
      this.editor = UE.getEditor(this.id, this.config);

      this.editor.ready(function f2() {
        this.editor.setContent(this.value);

        this.editor.addListener("contentChange", function() {
          const wordCount = this.editor.getContentLength(true);
          const content = this.editor.getContent();
          const plainTxt = this.editor.getPlainTxt();
          this.$emit('input', {
            wordCount: wordCount,
            content: content,
            plainTxt: plainTxt
          });
        }.bind(this));

        this.$emit('ready', this.editor);
      }.bind(this));
    });
  }
};
</script>
