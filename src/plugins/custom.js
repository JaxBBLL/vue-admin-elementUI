import Vue from 'vue';
import * as constant from '@common/constant';
import {
  searchDictionary,
  seeLabel,
  dateFmt,
  getRecentDate,
  toJSON,
  dateRange,
  currencyFmt,
  deepCopy,
  isAuth,
  valideForm,
  localNumber
} from '@common/util.js';

Vue.prototype.$dict = searchDictionary;
Vue.prototype.$dateFilter = dateFmt;
Vue.prototype.$toJSON = toJSON;
Vue.prototype.$dateRange = dateRange;
Vue.prototype.$getRecentDate = getRecentDate;
Vue.prototype.$isAuth = isAuth;
Vue.prototype.$deepCopy = deepCopy;
Vue.prototype.$valideForm = valideForm;
Vue.prototype.$CONSTANT = constant;

Vue.filter('getLabel', searchDictionary);
Vue.filter('seeLabel', seeLabel);
Vue.filter('currency', currencyFmt);
Vue.filter('dateFilter', dateFmt);
Vue.filter('localNumber', localNumber);
