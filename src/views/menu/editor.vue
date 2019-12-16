<template>
  <div>
    <!-- quill-editor -->
    <quill-editor
      ref="myTextEditor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    ></quill-editor>
  </div>
</template>
<script>
export default {
  name: 'MenuEditor',
  data() {
    return {
      content: `<h2 class="ql-align-center"><span class="ql-font-serif">Text content loading..</span></h2>`,
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [
              {
                header: 1
              },
              {
                header: 2
              }
            ],
            [
              {
                list: 'ordered'
              },
              {
                list: 'bullet'
              }
            ],
            [
              {
                script: 'sub'
              },
              {
                script: 'super'
              }
            ],
            [
              {
                indent: '-1'
              },
              {
                indent: '+1'
              }
            ],
            [
              {
                direction: 'rtl'
              }
            ],
            [
              {
                size: ['small', false, 'large', 'huge']
              }
            ],
            [
              {
                header: [1, 2, 3, 4, 5, 6, false]
              }
            ],
            [
              {
                font: []
              }
            ],
            [
              {
                color: []
              },
              {
                background: []
              }
            ],
            [
              {
                align: []
              }
            ],
            ['clean'],
            ['link', 'image', 'video']
          ]
        }
      }
    };
  },
  methods: {
    onEditorBlur(editor) {
      // console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      // console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      // console.log('editor ready!', editor)
    }
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill;
    }
  },
  mounted() {
    this.editor.container.style.height = `${300}px`;
    // console.log('this is my editor', this.editor)
    this.content = `
        <h1><span style="background-color: rgb(240, 102, 102); color: rgb(255, 255, 255);"> I am Example 1! </span></h1>
        <p>text</p>
        <h3>
          <span style="background-color: #38f; color: rgb(255, 255, 255);">this is a demo</span>
        </h3>
        `;
  }
};
</script>
<style lang="less" scoped></style>
