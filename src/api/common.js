import { httpForm as http } from '@common/http.js';
const base = '/api/v1/admin';

export const loginApi = params => http('POST', `${base}/login`, params); // 用户登录
export const getUserInfoApi = params =>
  http('GET', `/api/v1/stat/user/current`, params); // 获取用户信息
