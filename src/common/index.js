import {
  searchDictionary,
  seeLabel,
  dateFmt,
  toJSON,
  dateRange,
  currencyFmt,
  deepCopy
} from './util.js'
var output = {};
output.install = function (Vue) {
  Vue.prototype.$getWord = searchDictionary;
  Vue.prototype.$dateFilter = dateFmt;
  Vue.prototype.$toJSON = toJSON;
  Vue.prototype.$dateRange = dateRange;
  Vue.prototype.$deepCopy = deepCopy;
  Vue.filter('getLabel', searchDictionary);
  Vue.filter('seeLabel', seeLabel);
  Vue.filter('currency', currencyFmt);
  Vue.filter('dateFilter', dateFmt);
}

export default output;

