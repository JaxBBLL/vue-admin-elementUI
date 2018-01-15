const routes = [{
  path: '/',
  name: '',
  title: '首页',
  page: '/layout/index',
  bread: false,
  leaf: true,
  icon: 'fa fa-home fa-lg',
  children: [{
    path: '/home',
    page: '/home',
    name: 'home',
    title: '首页',
    bread: false
  }, {
    "path": "/404",
    "page": "/404/404",
    "name": "404"
  }]
}, {
  path: '/login',
  page: '/login/login',
  name: 'login',
  title: '首页',
  hidden: true
}, {
  path: '/user',
  name: 'user',
  title: '用户',
  page: '/layout/index',
  bread: true,
  icon: 'fa fa-user fa-lg',
  children: [{
    path: '/index',
    page: '/user/index',
    name: 'user-index',
    title: '用户列表',
    bread: true
  }]
}, {
  path: '/ui',
  title: '分类',
  name: 'menu',
  page: '/layout/index',
  bread: true,
  icon: 'fa fa-table fa-lg',
  children: [{
    path: '/echarts',
    page: '/ui/echarts',
    name: 'ui-echart',
    title: '图表',
    bread: true
  }, {
    path: '/form',
    page: '/ui/form',
    bread: true,
    title: '表单',
    name: 'ui-form'
  }, {
    path: '/tree',
    page: '/ui/tree',
    name: 'ui-tree',
    title: '树形',
    bread: true
  }, {
    path: '/ueditor',
    page: '/ui/ueditor',
    name: 'ui-ueditor',
    title: '文本编辑',
    bread: true
  }]
}]
export default routes

