import Axios from 'axios'
import store from '@/store'
import querystring from 'querystring'
import { Message } from 'element-ui'
import appconfig from '@/appconfig.js'

const commit = store.commit || store.dispatch

const options = {
  baseURL: appconfig.apiBase,
  timeout: 5000,
  withCredentials: true
}

const axios = Axios.create({ ...options })

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.transformRequest = [function (data) {
  return querystring.stringify(data)
}]
axios.defaults.paramsSerializer = function (params) {
  return querystring.stringify(params, { arrayFormat: 'brackets' })
}

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

function get(path, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(path + '?' + querystring.stringify(params)).then(res => {
      resolve(res.data)
        // if (res.data.code === 200) {
        //   resolve(res.data)
        // } else if (res.data.code === 500) {
        //   reject(res.data)
        // }
    })
  })
}

function post(path, params = {}) {
  return new Promise((resolve, reject) => {
    axios.post(path, params).then(res => {
      resolve(res.data)
        // if (res.data.code === 200) {
        //   console.log(res.data)
        //   resolve(res.data)
        // } else if (res.data.code === 500) {
        //   reject(res.data)
        // }
    })
  })
}
const http = {
  get,
  post
}
export default http;
