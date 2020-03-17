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
    <vue-neditor-wrap
      style="margin-top: 20px"
      v-model="neditorContent"
      :config="myConfig"
      :destroy="false"
      @ready="ready"
    ></vue-neditor-wrap>
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
      },
      myConfig: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        serverUrl: '/api/web/upload/ueditor',
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: '/NEditor/',
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 240,
        // 初始容器宽度
        initialFrameWidth: '100%',
        // 关闭自动保存
        enableAutoSave: false
      },
      neditorContent: '<h1>neditor</h1>'
    };
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
    },
    ready() {}
  }
};
</script>
<style lang="less" scoped></style>
