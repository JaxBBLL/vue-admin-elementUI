<template>
  <div class="tinymce-container">
    <editor id="tinymce" v-model="editorValue" :init="editorSetting"></editor>
  </div>
</template>

<script>
import tinymce from 'tinymce';
import Editor from '@tinymce/tinymce-vue';

import 'tinymce/icons/default/index';
import 'tinymce/models/dom/index';

import 'tinymce/themes/silver/theme';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/image';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/table';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/code';
import 'tinymce/plugins/searchreplace';

const insertImage = (file, editor) => {
  var reader = new FileReader();
  reader.onload = function (e) {
    const base64 = e.target.result;
    const img = new Image();
    img.src = base64;
    img.onload = () => {
      editor.execCommand(
        'mceInsertContent',
        false,
        `<img  src="${base64}" width="${img.width}" height="${img.height}"/>`
      );
    };
  };
  reader.readAsDataURL(file);
};

export default {
  name: 'Tinymce',
  props: {
    value: {
      type: String,
      default: ''
    },
    setting: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Editor
  },
  data() {
    return {
      editorValue: '',
      defaultSetting: {
        language_url: '/tinymce/langs/zh-Hans.js',
        language: 'zh-Hans',
        skin_url: '/tinymce/skins/ui/oxide',
        content_css: '/tinymce/skins/content/default/content.min.css',
        min_height: 250,
        max_height: 600,
        selector: '#tinymce',
        content_style: 'img {max-width:100%;height:auto}',
        plugins:
          'autolink autoresize fullscreen image insertdatetime link lists media preview table wordcount code searchreplace',
        toolbar:
          'undo redo | blocks | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor removeformat | link image image2 media table insertdatetime searchreplace | preview code fullscreen',
        branding: false,
        menubar: false,
        toolbar_mode: 'sliding',
        insertdatetime_formats: [
          '%Y年%m月%d日',
          '%H点%M分%S秒',
          '%Y-%m-%d',
          '%H:%M:%S'
        ],
        setup: (editor) => {
          editor.ui.registry.addButton('image2', {
            icon: 'image',
            tooltip: '上传图片',
            enabled: true,
            onAction: () => {
              const input = document.createElement('input');
              input.type = 'file';
              input.accept = 'image/png, image/jpeg, image/webp, image/gif';
              input.click();
              input.addEventListener('change', (e) => {
                const files = e.target.files;
                if (!files.length) {
                  return;
                }
                insertImage(files[0], editor);
              });
            },
            onSetup: (buttonApi) => {}
          });
          editor.on('dragenter', (e) => {
            e.preventDefault();
          });
          editor.on('dragover', (e) => {
            e.preventDefault();
          });
          editor.on('drop', (e) => {
            e.preventDefault();
            const file = e.dataTransfer && e.dataTransfer.files[0];
            if (file && file.type.indexOf('image') > -1) {
              insertImage(file, editor);
            }
          });
        }
      }
    };
  },
  watch: {
    editorValue(newV, oldV) {
      this.$emit('input', newV);
    },
    value: {
      handler(newV, oldV) {
        this.editorValue = newV;
      },
      immediate: true
    }
  },
  computed: {
    editorSetting() {
      return Object.assign({}, this.defaultSetting, this.setting);
    }
  },
  created() {},
  mounted() {
    tinymce.init({});
  },
  methods: {}
};
</script>
<style scoped></style>
