import Vue from 'vue';
import echarts from 'echarts/lib/echarts'; // 引入 ECharts 主模块
import ECharts from 'vue-echarts';
// 引入 ECharts 其他模块
// 引入柱状图、折线图和饼图
import('echarts/lib/chart/bar');
import('echarts/lib/chart/line');
import('echarts/lib/chart/pie');
// 引入提示框和标题组件
import('echarts/lib/component/tooltip');
import('echarts/lib/component/title');
import('echarts/lib/component/legend');

Vue.prototype.$echarts = echarts;
Vue.component('v-chart', ECharts);
