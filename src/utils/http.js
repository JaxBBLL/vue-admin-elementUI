import axios from 'axios'
import store from '@/store'
import querystring from 'querystring'
import { Message } from 'element-ui'
import appconfig from '@/appconfig.js'
import { objReduce } from '@/utils/methods.js'

const commit = store.commit || store.dispatch
const base = appconfig.apiBase

axios.defaults.baseURL = appconfig.apiServer
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true
axios.defaults.transformRequest = [
    function (data) {
      return querystring.stringify(data)
    }
  ]
  //  添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    commit('updateLoading', true)
    return config
  }, function (error) {
    return Promise.reject(error)
  })
  //  添加一个响应拦截器
axios.interceptors.response.use(res => {
  if (res.status === 200) {
    // Message({
    //   message: '请求成功！',
    //   type: 'success'
    // })
  }
  // 不显示loading
  commit('updateLoading', false)
  return res
}, err => {
  commit('updateLoading', false)
  Message({
    message: '服务端错误',
    type: 'error'
  })
  return Promise.reject(err)
})

const http = {
  get: function (url, params, type) { //  type为true不过滤空字符串的发送
    if (params === undefined) {
      params = {}
    } else {
      params = objReduce(params, type)
    }
    return new Promise((resolve, reject) => {
      axios.get(base + url + '?' + querystring.stringify(params)).then(res => {
        resolve(res.data)
          // if (res.data.code === 200) {
          //   resolve(res.data)
          // } else if (res.data.code === 500) {
          //   reject(res.data)
          // }
      })
    })
  },
  post: function (url, params, type) { //  type为true不过滤空字符串的发送
    if (params === undefined) {
      params = {}
    } else {
      params = objReduce(params, type)
    }
    return new Promise((resolve, reject) => {
      axios.post(base + url, params).then(res => {
        if (res.data.code === 200) {
          resolve(res.data)
        } else if (res.data.code === 500) {
          Message({
            message: res.data.message,
            type: 'error'
          })
          reject(res.data)
        }
      })
    })
  }
}

export default http
export const get = (url, params, type) => http.get(url, params).then(res => res)
export const post = (url, params, type) => http.post(url, params).then(res => res)

