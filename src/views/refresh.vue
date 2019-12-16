<!-- 中转路由 -->
<template>
  <span>
    &nbsp;
  </span>
</template>
<script>
export default {
  name: "Refresh",
  beforeMount() {
    window.history.back();
  }
};
</script>
