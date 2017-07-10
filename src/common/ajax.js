import Axios from 'axios'

Axios.defaults.baseURL = '';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const base = '';

var ajax = {
  get: function(url, params) {
    if (params === void 0) {
      params = {};
    }
    return Axios.get(`${base}` + url, { params: params }).then(res => res.data);
  },
  post: function(url, params) {
    if (params === void 0) {
      params = {};
    }
    return Axios.post(`${base}` + url, params).then(res => res.data);
  }
}

export default ajax;
