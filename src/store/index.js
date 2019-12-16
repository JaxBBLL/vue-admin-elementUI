import Vue from 'vue';
import Vuex from 'vuex';
// import base from './base';

Vue.use(Vuex);

const TAB_MAX = 10;
const store = new Vuex.Store({
  state: {
    collapsed: false,
    user: {},
    routes: [],
    visitedViews: JSON.parse(
      window.sessionStorage.getItem('visitedViews') || '[]'
    )
  },
  mutations: {
    toggleCollapse(state) {
      state.collapsed = !state.collapsed;
    },
    getUser(state) {
      const user = window.sessionStorage.getItem('user') || '{}';
      state.user = JSON.parse(user);
    },
    updateRoutes(state, routes) {
      state.routes = routes;
    },
    addVisitedViews(state, view) {
      if (view.path === '/refresh') {
        return;
      }
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          if (view.meta.noCache) {
            //  如果是详情页且在visitedViews中,替换它
            state.visitedViews.splice(i, 1, view);
            return;
          } else {
            return;
          }
        }
      }
      state.visitedViews.push(view);
      if (state.visitedViews.length > TAB_MAX) {
        state.visitedViews.shift();
      }
      window.sessionStorage.setItem(
        'visitedViews',
        JSON.stringify(state.visitedViews)
      );
    },
    delVisitedViews(state, views) {
      let paths = (Array.isArray(views) ? views : [views]).map(
        item => item.path
      );
      state.visitedViews = state.visitedViews.filter(
        item => paths.indexOf(item.path) === -1
      );
      window.sessionStorage.setItem(
        'visitedViews',
        JSON.stringify(state.visitedViews)
      );
    },
    clearVisitedViews(state) {
      state.visitedViews = [];
      window.sessionStorage.removeItem('visitedViews');
    }
  },
  actions: {
    addVisitedViews({ commit }, view) {
      commit('addVisitedViews', view);
    },
    delVisitedViews({ commit, state }, views) {
      return new Promise(resolve => {
        commit('delVisitedViews', views);
        resolve([...state.visitedViews]);
      });
    },
    clearVisitedViews({ commit }) {
      commit('clearVisitedViews');
    }
  },
  getters: {
    cacheNames: state => {
      return state.visitedViews.map(item => item.name);
    }
  },
  modules: {
    // base
  }
});

export default store;
