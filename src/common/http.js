import Axios from 'axios';
import querystring from 'querystring';
import { adornUrl, jsonTrim } from '@/common/util';
import { Message, MessageBox, Loading } from 'element-ui';
import { HOST } from './constant';

let hasAlert = false;

function createAxios(contentType = 'json') {
  const baseOptions = {
    baseURL: adornUrl(''),
    timeout: 1000 * 30,
    withCredentials: true
  };
  const options =
    contentType === 'json'
      ? {
          ...baseOptions,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          transformRequest: [
            function(data) {
              return JSON.stringify(data);
            }
          ]
        }
      : {
          ...baseOptions,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest: [
            function(data) {
              return querystring.stringify(data);
            }
          ]
        };
  const axios = Axios.create(options);
  addInterceptorsReq(axios);
  addInterceptorsRes(axios);
  /**
   * [http 封装]
   * @param  {[string]} method [请求的类型:get/post/delete/put]
   * @param  {[string]} url    [url]
   * @param  {Object} params [发送的query数据]
   * @param  {[Object|Array]} data   [发送的body数据]
   * @param  {[Boolean]} isFilterEmptyString   [是否过滤发送的空字符， 默认过滤]
   * @return {[Promise]}        [返回Promise]
   */

  return function(method, url, params = {}, data, isFilterEmptyString = true) {
    const config = {
      url,
      method
    };
    if (method.toUpperCase() !== 'GET') {
      if (data === undefined) {
        data = params;
        params = {};
      }
      config.params = params;
      config.data = data;
    } else {
      config.params = params;
    }
    if (isFilterEmptyString) {
      config.params = jsonTrim(config.params);
      config.data = jsonTrim(config.data);
    }
    return new Promise((resolve, reject) => {
      let loadingInstance = Loading.service({
        target: '.content-wrapper',
        fullscreen: false
      });
      axios(config)
        .then(({ data }) => {
          if (data.code === 200) {
            console.log(url, data);
            resolve(data);
          } else {
            reject(data);
          }
          loadingInstance.close();
        })
        .catch(err => {
          reject(err);
          loadingInstance.close();
        });
    });
  };
}

//  添加一个请求拦截器
function addInterceptorsReq(axios) {
  axios.interceptors.request.use(
    function(config) {
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
}

//  添加一个响应拦截器
function addInterceptorsRes(axios) {
  axios.interceptors.response.use(
    res => {
      if (res.status === 200) {
        if (res.data.code === 500) {
          Message({
            message: res.data.message,
            type: 'error'
          });
        } else if (res.data.code === 401) {
          Message({
            message: res.data.message,
            type: 'error'
          });
        }
      }
      return res;
    },
    err => {
      const { status } = err.response;
      if (status === 401) {
        if (hasAlert) {
          MessageBox({
            title: '提示',
            message:
              '<p class="alert-content"><i class="el-icon-warning"></i>您还未登录或已退出登录，请先去登录</p>',
            confirmButtonText: '去登录',
            customClass: 'm-nologin',
            dangerouslyUseHTMLString: true,
            closeOnClickModal: false,
            closeOnPressEscape: false,
            lockScroll: true,
            showClose: false,
            closeOnHashChange: false,
            callback: action => {
              location.href = HOST + '/admin/login';
            }
          });
          hasAlert = true;
        }
      } else {
        Message({
          message: '服务端错误',
          type: 'error'
        });
      }
      return Promise.reject(err);
    }
  );
}

export const http = createAxios('json');
export const httpForm = createAxios('form');
