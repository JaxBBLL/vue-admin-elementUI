import http from '../common/http.js'

export const getUserList = params => http.get('/user/list').then(res => res)
export const getTreeList = params => http.get('/tree/list').then(res => res)

