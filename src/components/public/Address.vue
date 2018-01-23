<template>
  <el-cascader @change="handleChangeRegion" v-model="region" clearable :options="address" change-on-select></el-cascader>
</template>
<script>
import address from 'common/address';
export default {
  name: 'AddressInput',
  props: ['initial'],
  data() {
    return {
      region: [],
      address: address
    }
  },
  created() {
    if (this.initial) {
      this.region = Array.isArray(this.initial) ? this.initial : [this.initial]
    } else {
      this.region = []
    }
  },
  methods: {
    handleChangeRegion(val) {
      this.$emit('input', val)
    }
  }
}
</script>
