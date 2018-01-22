<template>
  <span :class="'level-' + level"></span>
</template>
<script>
export default {
  props: ['level'],
  data() {
    return {}
  },
  methods: {

  }
}

</script>
<style scoped>
  span{
    display: inline-block;
    width: 88px;
    height: 34px;
  }
</style>
