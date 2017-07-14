import Vue from 'vue'
import Router from 'vue-router'

import routes from '@/router/routes.js'

Vue.use(Router)

const registerRoute = (navConfig) => {
  const route = []
  route.push({
    path: '*',
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
      component: require(`../views${nav.page}`),
      meta: {
        title: nav.name,
        bread: nav.bread
      }
    }
  }

  return route
}

const route = registerRoute(routes)

export default new Router({
  routes: route
})
