import { get } from '../utils/http.js'

export const getUserList = params => get('/user/list').then(res => res)
export const getTreeList = params => get('/tree/list').then(res => res)

