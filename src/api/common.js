import { httpForm as http } from '@common/http.js';
import { errorCaptured } from '@common/util.js';
const base = '/api/v1/admin';

// 用户登录
export const loginApi = async params =>
  await errorCaptured(() => http('POST', `${base}/login`, params));
  
// 获取用户信息
export const getUserInfoApi = async params =>
  await errorCaptured(() => http('GET', `/api/v1/stat/user/current`, params));
