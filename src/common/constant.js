// 接口服务前缀，同域一般为""
export const BASE_URL = process.env.VUE_APP_BASE_URL;
// 环境域名
export const HOST = process.env.VUE_APP_HOST;
export const PAGE_SIZE = 15;
export const PAGE_SELECT = [15, 20, 30];
export const URL_PREFIX = '';

export const REG_MOBILE = /^1[3-9]\d{9}$/;
export const REG_QQ = /^\d{5,13}$/;
