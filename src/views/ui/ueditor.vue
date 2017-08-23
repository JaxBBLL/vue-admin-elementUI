<template>
  <div class="edit-area">
    <ueditor v-bind:value=defaultMsg v-bind:config=config v-on:input="input" v-on:ready="ready"></ueditor>
  </div>
</template>
<script>
import ueditor from '@/components/UE.vue';

export default {
  components: {
    ueditor
  },
  data() {
    return {
      defaultMsg: '初始文本1',
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 320
      },
      input: ''
    };
  },
  methods: {
    ready() {
      console.log(this.input)
    }
  }
};
</script>
