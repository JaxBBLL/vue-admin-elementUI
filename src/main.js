import Vue from 'vue'
import router from './router'
import './assets/style/reset.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/el-ui.less'
import './assets/style/common.less'
import 'font-awesome/css/font-awesome.min.css'  //  字体
import './mock/index.js'
import App from './App'
import store from './store'
import utils from './common'
import http from './common/http.js'
import PublicComponents from './components/public'
import appconfig from './appconfig.js'
import CONSTANT from './common/constant.js'

// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入 ECharts 其他模块

require('./echarts')
Vue.use(ElementUI, { size: 'small' });
Vue.use(utils)
Vue.use(PublicComponents)
Vue.prototype.$http = http
Vue.prototype.$echarts = echarts
Vue.prototype.$appconfig = appconfig
Vue.prototype.$CONSTANT = CONSTANT
Vue.config.productionTip = true
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
