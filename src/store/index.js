import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    collapsed: false
  },
  mutations: {
    toggleCollapse: state => {
      state.collapsed = !state.collapsed
    }
  }
});

export default store
