<template>
  <div v-if="data">
    <span class="se-icon se-icon-bd" title="百度" v-if="data.indexOf('1') > -1"></span>
    <span class="se-icon se-icon-sg" title="搜狗" v-if="data.indexOf('4') > -1"></span>
    <span class="se-icon se-icon-360" title="360搜索" v-if="data.indexOf('3') > -1"></span>
    <span class="se-icon se-icon-gg" title="谷歌" v-if="data.indexOf('2') > -1"></span>
    <span class="se-icon se-icon-sjbd" title="手机百度" v-if="data.indexOf('5') > -1"></span>
    <span class="se-icon se-icon-sm" title="神马搜索" v-if="data.indexOf('6') > -1"></span>
    <span class="se-icon se-icon-sjsg" title="手机搜狗" v-if="data.indexOf('7') > -1"></span>
  </div>
</template>
<script>
export default {
  name: 'SeIcon',
  props: ["data"],
  data() {
    return {}
  }
}
</script>
<style scoped lang="less">
.se-icon {
  width: 20px;
  height: 20px;
  font-size: 0px;
  padding: 12.5px;
  vertical-align: middle;
  background: url('~image/se_icon.png') no-repeat;
  background-size: auto 20px;
  &.se-icon-bd {
    background-position: 0 0;
  }
  &.se-icon-sg {
    background-position: -25px 0;
  }
  &.se-icon-360 {
    background-position: -51px 0;
  }
  &.se-icon-gg {
    background-position: -77px 0;
  }
  &.se-icon-sjbd {
    background-position: -102px 0;
  }
  &.se-icon-sm {
    background-position: -128px 0;
  }
  &.se-icon-sjsg {
    background-position: -154px 0;
  }
}
</style>
