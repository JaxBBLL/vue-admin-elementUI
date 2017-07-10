import ajax from '../common/ajax.js';

export const getUserList = params => ajax.get('/user/list').then(res => res);
