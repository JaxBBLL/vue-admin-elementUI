<template>
  <el-date-picker type="daterange" v-model="date" style="width: 100%;" @change="handleDateChange"></el-date-picker>
</template>
<script>
export default {
  name: 'RangeDate',
  props: {
    range: {
      type: Number
    }
  },
  data() {
    return {
      date: []
    }
  },
  methods: {
    handleDateChange(val) {
      var d = val && val.split(' - ');
      if (val && (this.range !== undefined)) {
        if (isNaN(this.range)) {
          console.error('range is not a number!');
          return;
        }
        const result = this.$dateRange(d[0], d[1], this.range * 24 * 60 * 60)
        if (!result) {
          this.date = [];
          this.$message.warning('日期范围不能超过' + this.range + '天');
        }
      }
      this.$emit('input', d || ['', '']);
    }
  }
}
</script>
