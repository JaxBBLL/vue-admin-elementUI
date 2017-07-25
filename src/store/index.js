import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    collapsed: false,
    user: window.sessionStorage.getItem('user') || ''
  },
  mutations: {
    toggleCollapse(state) {
      state.collapsed = !state.collapsed
    },
    UPDATE_USER(state, user) {
      state.user = user;
      if (user) {
        window.sessionStorage.setItem('user', user);
      } else {
        window.sessionStorage.removeItem('user');
      }
    }
  }
});

export default store
