import Vue from 'vue'
import Router from 'vue-router'

import routes from '@/router/routes.js'

Vue.use(Router)

const registerRoute = (navConfig) => {
  const route = []
  route.push({
    path: '*',
    hidden: true,
    redirect: {
      path: '/404'
    }
  })
  navConfig.forEach((nav) => {
    var node = buildRoute(nav)
    if (nav.children) {
      node.children = []
      nav.children.forEach(nav => {
        node.children.push(buildRoute(nav))
      })
    }
    route.push(node)
  })

  function buildRoute(nav) {
    return {
      path: nav.path || '',
      name: nav.name,
      hidden: nav.hidden || false,
      leaf: nav.leaf || false,
      icon: nav.icon || '',
      component: require(`../views${nav.page}`),
      meta: {
        bread: nav.bread
      }
    }
  }

  return route
}

const route = registerRoute(routes)

var r = new Router({
  routes: route
})

const loginUrl = '/login';
r.beforeEach((to, from, next) => {
  if (!window.sessionStorage.getItem('user') && to.path !== loginUrl) {
    next(loginUrl);
  } else {
    next()
  }
})
export default r
