import Layout from '@/components/layout/index.vue';
import Home from '@/views/home';
import NotFound from '@/views/notfound';
import Refresh from '@/views/refresh';
import Login from '@/views/login';

/**
 * type: 0目录；1菜单；2内部菜单（菜单默认使用keep-alive缓存，内部菜单不缓存）
 */
export default [
  {
    path: '/',
    name: '',
    title: '首页',
    component: Layout,
    noBread: true,
    leaf: true,
    icon: 'fa fa-home',
    type: 2,
    redirect: {
      path: '/home'
    },
    children: [
      {
        path: '/home',
        component: Home,
        icon: 'fa fa-home',
        type: 1,
        noBread: true,
        title: '首页'
      },
      {
        path: '/refresh',
        component: Refresh,
        name: 'Refresh',
        type: 2
      }
    ]
  },
  {
    path: '/notfound',
    component: NotFound,
    name: 'NotFound',
    type: 2
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
    title: '登录',
    type: 2
  }
];
