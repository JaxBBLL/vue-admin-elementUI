import dictionary from './dictionary.json';
import { BASE_URL } from './constant';

export function searchDictionary(value, name) {
  if (arguments.length === 1) return dictionary[value].options || []; //  如果参数只有一个，获取对应的arr
  const arr = dictionary[name].options || [];
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value === value) {
      result = arr[i].label;
      break;
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

export const dateFmt = function(date, fmt = 'YYYY-MM-DD HH:mm:ss') {
  if (!date) {
    return '';
  }
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g, '/'));
  }
  if (typeof date === 'number') {
    date = new Date(date);
  }
  var o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  var week = {
    '0': '\u65e5',
    '1': '\u4e00',
    '2': '\u4e8c',
    '3': '\u4e09',
    '4': '\u56db',
    '5': '\u4e94',
    '6': '\u516d'
  };
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1
        ? RegExp.$1.length > 2
          ? '\u661f\u671f'
          : '\u5468'
        : '') + week[date.getDay() + '']
    );
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }
  return fmt;
};

export function currencyFmt(value, n) {
  if (typeof value !== 'string' && typeof value !== 'number') return '';
  if (isNaN(Number(value))) return '';
  n = n > 0 && n <= 20 ? n : 2;
  value = parseFloat((value + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
  const l = value.split('.')[0];
  const r = value.split('.')[1];
  return '\u00a5' + l + '.' + r;
}

/**
 * 获取最近天数的日期
 * @param {number} day
 * @return {Array} [start, end]
 */
export function getRecentDate(day) {
  var num = parseInt(day);
  var date = [];
  date = [
    new Date(new Date() - 3600 * 1000 * 24 * num),
    new Date() - 3600 * 1000 * 24
  ];
  return date;
}

export function toJSON(val) {
  return val == null
    ? ''
    : typeof val === 'object'
    ? JSON.stringify(val, null, 2)
    : String(val);
}

export function dateRange(start, end, time) {
  //  时间范围判断 true:在规定范围内
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
export function jsonTrim(data, type) {
  var o = deepCopy(data);
  for (var k in o) {
    if (typeOf(o[k]) === 'string') {
      o[k] = o[k].trim();
      if (o[k] === '' && type === undefined) {
        delete o[k];
      }
    } else if (typeOf(o[k]) === 'object') {
      jsonTrim(o[k]);
    }
  }
  return o;
}

export function adornUrl(actionName) {
  const baseUrl = BASE_URL;
  return process.env.NODE_ENV === 'development'
    ? '/proxyApi' + actionName
    : baseUrl + actionName;
}

/**
 * [isAuth 是否有权限]
 * @param  {...[String]} keys [一个或多个参数，权限码名称] isAuth('sys:user:save','sys:role:select')
 * @return {Boolean}        [true/false]
 */
export function isAuth(...keys) {
  const list = JSON.parse(sessionStorage.getItem('permissions') || '[]');
  const res = keys.every(key => list.indexOf(key) !== -1);
  return res;
}

export function valideForm(formName) {
  return new Promise((resolve, reject) => {
    this.$refs[formName].validate(valid => {
      if (valid) {
        resolve(true);
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(false);
      }
    });
  });
}

export function localNumber(num) {
  let c = 0;
  if (num) {
    c =
      num.toString().indexOf('.') !== -1
        ? num.toLocaleString()
        : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  }
  return c;
}
