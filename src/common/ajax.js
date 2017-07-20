import axios from 'axios'
import { Message } from 'element-ui'
axios.defaults.baseURL = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//  添加一个请求拦截器
axios.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.reject(err);
});
//  添加一个响应拦截器
axios.interceptors.response.use(res => {
  if (res.status === 200) {
    //  do something
    Message({
      message: '请求成功！',
      type: 'success'
    });
  }
  return res;
}, err => {
  return Promise.reject(err);
})

const base = '';

var ajax = {
  get: function(url, params) {
    if (params === void 0) {
      params = {};
    }
    return axios.get(`${base}` + url, { params: params }).then(res => res.data);
  },
  post: function(url, params) {
    if (params === void 0) {
      params = {};
    }
    return axios.post(`${base}` + url, params).then(res => res.data);
  }
}

export default ajax;
