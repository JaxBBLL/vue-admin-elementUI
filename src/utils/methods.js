import dictionary from '../common/dictionary.json'

export function searchDictionary(value, name) {
  if (arguments.length === 1) return dictionary[value].options || []; //  如果参数只有一个，获取对应的arr
  const arr = dictionary[name].options || [];
  let result = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value === value) {
      result = arr[i].label
      break
    }
  }
  return result;
}
export function seeLabel(value, arr) {
  if (!arr) return '';
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value === value) {
      result = arr[i].label;
      break;
    }
  }
  return result;
}

export function dateFmt(d, format) {
  if (!d) return '';
  const date = new Date(d);
  const paddNum = function (num) {
    num += ''
    return num.replace(/^(\d)$/, '0$1')
  }
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

export function currencyFmt(value, n) {
  if (typeof value !== 'string' && typeof value !== 'number') return '';
  if (isNaN(Number(value))) return '';
  n = n > 0 && n <= 20 ? n : 2;
  value = parseFloat((value + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
  const l = value.split('.')[0];
  const r = value.split('.')[1];
  return '\u00a5' + ' ' + l + '.' + r;
}

export function toJSON(val) {
  return val == null ? '' : typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val)
}

export function dateRange(start, end, time) { //  时间范围判断 true:在规定范围内
  start = new Date(start).getTime() / 1000;
  end = new Date(end).getTime() / 1000;
  const range = parseInt(end - start); //  秒数
  if (range >= time) {
    return false;
  } else {
    return true;
  }
}

export function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
}

// deepCopy
export function deepCopy(data) {
  const t = typeOf(data);
  let o;
  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }
  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

//  http发送之前对数据处理，去除两边空字符串，默认过滤空字符串字段的发送，type为true则不过滤
export function objReduce(data, type) {
  var o = deepCopy(data);
  for (var k in o) {
    if (typeOf(o[k]) === 'string') {
      o[k] = o[k].trim()
      if (o[k] === '' && type === undefined) {
        delete o[k];
      }
    } else if (typeOf(o[k]) === 'object') {
      objReduce(o[k])
    }
  }
  return o
}

export function selector(sel) {
  const ele = document.querySelectorAll(sel);
  return ele.length > 1 ? ele : (ele.length === 1 ? ele[0] : null)
}
