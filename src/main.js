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
import echarts from 'echarts'
import appconfig from './appconfig.js'

Vue.use(ElementUI)
Vue.use(utils)
Vue.prototype.$http = http
Vue.prototype.$echarts = echarts
Vue.prototype.$appconfig = appconfig
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
