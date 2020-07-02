import * as types from './mutations-types'

export default {
  [types.UPDATE_USER](state, user) {
    state.user = user;
    sessionStorage.setItem('user', JSON.stringify(user));
  }
};
