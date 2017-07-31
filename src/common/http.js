import axios from 'axios'
import querystring from 'querystring'
import { Message } from 'element-ui'
axios.defaults.baseURL = ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
axios.defaults.transformRequest = [
  function(data) {
    return querystring.stringify(data)
  }
]
//  添加一个请求拦截器
axios.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})
//  添加一个响应拦截器
axios.interceptors.response.use(res => {
  if (res.status === 200) {
    Message({
      message: '请求成功！',
      type: 'success'
    })
  }
  return res
}, err => {
  return Promise.reject(err)
})

const base = ''

const http = {
  get: function(url, params) {
    if (params === void 0) {
      params = {}
    }
    return new Promise((resolve, reject) => {
      axios.get(`${base}` + url, { params: params }).then(res => {
        resolve(res.data)
        // if (res.data.code === 200) {
        //   resolve(res.data)
        // } else if (res.data.code === 500) {
        //   reject(res.data)
        // }
      })
    })
  },
  post: function(url, params) {
    if (params === void 0) {
      params = {}
    }
    return new Promise((resolve, reject) => {
      axios.post(`${base}` + url, params).then(res => {
        if (res.data.code === 200) {
          resolve(res.data)
        } else if (res.data.code === 500) {
          reject(res.data)
          Message({
            message: res.data.message,
            type: 'error'
          })
        }
      })
    })
  }
}

export default http
