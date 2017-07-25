import Vue from 'vue'
import router from './router'
import './assets/style/reset.css'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import './assets/theme/theme/index.css'
import './assets/style/el-ui.css'
import './mock/index.js';
import App from './App';
import store from './store';
import ajax from './common/ajax.js'
import filters from './filters'
import appconfig from './appconfig.js'

Vue.use(ElementUI)
Vue.use(filters)
Vue.prototype.$ajax = ajax;
Vue.prototype.$appconfig = appconfig;

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
