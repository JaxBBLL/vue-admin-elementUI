import Vue from 'vue'
import router from './router'
import './assets/style/reset.css'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import './assets/theme/theme/index.css'  //  小号主题
import './assets/style/el-ui.less'
import './assets/style/common.less'
import 'font-awesome/css/font-awesome.min.css'  //  字体
import './mock/index.js'
import App from './App'
import store from './store'
import utils from './utils'
import http from './utils/http.js'
import PublicComponents from './components/public'
import appconfig from './appconfig.js'
import CONSTANT from './common/constant.js'

// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入 ECharts 其他模块

require('./echarts')
Vue.use(ElementUI)
Vue.use(utils)
Vue.use(PublicComponents)
Vue.prototype.$http = http
Vue.prototype.$echarts = echarts
Vue.prototype.$appconfig = appconfig
Vue.prototype.$CONSTANT = CONSTANT
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
