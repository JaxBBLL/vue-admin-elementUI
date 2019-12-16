import Vue from 'vue';
import router from './router';
import App from './App';
import store from './store';
import './plugins';

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
