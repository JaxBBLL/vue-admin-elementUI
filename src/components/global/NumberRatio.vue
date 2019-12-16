<script>
export default {
  name: 'NumberRatio',
  props: {
    value: {
      type: Number
    }
  },
  data() {
    return {};
  },
  render() {
    let value = Number(this.value) || 0;
    let color = 'green';
    let icon = 'el-icon-caret-top';
    if (value === 0) {
      color = 'blue';
      icon = 'el-icon-minus';
    } else if (value < 0) {
      color = 'red';
      icon = 'el-icon-caret-bottom';
    }
    return (
      <span class={color}>
        <i class={icon}></i>
        {Math.abs(value).toFixed(2) + '%'}
      </span>
    );
  }
};
</script>

<style scoped lang="less">
@import '~@style/var.less';
i {
  margin-right: 3px;
}
</style>
