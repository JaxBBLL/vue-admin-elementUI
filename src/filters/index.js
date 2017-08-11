import dictionary from './dictionary.json';

function searchWord(name, keyword, type) {
  let result;
  const arr = dictionary[name].options || [];
  if (arguments.length === 1) { //  如果参数只有一个，获取对应的arr
    return arr;
  }
  const types = ['label', 'value'];
  if (type === 'getLabel') {
    types.reverse();
  }
  for (let i = 0; i < arr.length; i++) {
    if (keyword === arr[i][types[0]]) {
      result = arr[i][types[1]];
      break;
    }
  }
  return result;
}

const obj = {
  getValue: function (name, label) {
    return searchWord(name, label, 'getValue');
  },
  getLabel: function (name, value) {
    return searchWord(name, value, 'getLabel');
  },
  getWord: function (name) {
    return searchWord(name);
  }
}

function toJSON(val) {
  return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val)
}

function dateFmt(date, format) {
  if (!date) return '';
  date = new Date(date);
  const paddNum = function (num) {
    num += ''
    return num.replace(/^(\d)$/, '0$1')
  }
    // 指定格式字符
  const cfg = {
    yyyy: date.getFullYear(),
    yy: date.getFullYear().toString().substring(2),
    M: date.getMonth() + 1,
    MM: paddNum(date.getMonth() + 1),
    d: date.getDate(),
    dd: paddNum(date.getDate()),
    hh: paddNum(date.getHours()),
    mm: paddNum(date.getMinutes()),
    ss: paddNum(date.getSeconds())
  }
  format || (format = 'yyyy-MM-dd hh:mm:ss')
  return format.replace(/([a-z])(\1)*/ig, function (m) {
    return cfg[m]
  })
}
function getValue(value, name) {
  const tmp = dictionary[name]
  if (tmp === undefined) {
    return ''
  }
  const map = tmp['options']
  let result = ''
  if (map !== undefined) {
    for (let i = 0; i < map.length; i++) {
      const tmp = map[i]
      if (tmp.label === value) {
        result = tmp.value
        break
      }
    }
    return result;
  } else {}
}
function currencyFmt(s, n) {
  n = n > 0 && n <= 20 ? n : 2;
  if (!s && s !== 0) {
    return '';
  }
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
  var l = s.split('.')[0];
  var r = s.split('.')[1];
  return '\u00a5' + ' ' + l + '.' + r;
}

var output = {};
output.install = function (Vue) {
  Vue.prototype.$getValue = obj.getValue;
  Vue.prototype.$getLabel = obj.getLabel;
  Vue.prototype.$getWord = obj.getWord;
  Vue.prototype.$dateFilter = dateFmt;
  Vue.prototype.$toJSON = toJSON;

  Vue.filter('getValue', getValue);
  Vue.filter('currency', currencyFmt);
  Vue.filter('dateFilter', dateFmt);
}

export default output;

