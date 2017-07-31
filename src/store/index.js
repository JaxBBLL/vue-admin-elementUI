import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    collapsed: false,
    user: {}
  },
  mutations: {
    toggleCollapse(state) {
      state.collapsed = !state.collapsed
    },
    getUser(state) {
      const user = window.sessionStorage.getItem('user') || '{}'
      state.user = JSON.parse(user)
    }
  }
});

export default store
