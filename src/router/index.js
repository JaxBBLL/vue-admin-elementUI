import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';
import dynamicRoutes from './dynamicRoutes';
import staticRoutes from '@/router/routes/index';
import { compilerRoutes } from './utils';
import { getUserInfoApi } from '@api/common';

Vue.use(Router);

const routes = compilerRoutes(staticRoutes);

var router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '';
  next();
});

// 可以在router.beforeEach里面动态加载路由
// 例如登录成功后获取用户的路由列表
router.onReady(function() {
  store.dispatch('clearVisitedViews');
  getUserInfoApi()
    .then(res => {
      let menus = JSON.parse(res.data.menus || '[]');
      const routes = compilerRoutes(menus, true);
      router.addRoutes([
        ...routes,
        {
          path: '*',
          redirect: {
            path: '/notfound'
          }
        }
      ]);
      router.options.routes = router.options.routes.concat(routes);
      store.commit('updateRoutes', router.options.routes);
    })
    .catch(() => {
      const routes = compilerRoutes(dynamicRoutes, true);
      router.addRoutes([
        ...routes,
        {
          path: '*',
          redirect: {
            path: '/notfound'
          }
        }
      ]);
      router.options.routes = router.options.routes.concat(routes);
      store.commit('updateRoutes', router.options.routes);
    });
});

export default router;
