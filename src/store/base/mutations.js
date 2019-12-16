import * as types from './mutations-types'

export default {
  [types.UPDATE_USER](state, user) {
    state.user = user;
    sessionStorage.setItem('user', JSON.stringify(state.user));
  },
  [types.UPDATE_LOADING](state, status) {
    state.loading = status
  },
  [types.UPDATE_ORDER_TYPE](state, orderType) {
    state.orderType = orderType
    // window.sessionStorage.setItem('orderType', orderType)
  }
};
