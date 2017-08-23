const routes = [{
  path: '/',
  name: '首页',
  page: '/layout/index',
  bread: false,
  leaf: true,
  icon: 'fa fa-home fa-lg',
  children: [{
    path: '/home',
    page: '/home',
    name: '首页',
    bread: false
  }]
}, {
  path: '/login',
  page: '/login/login',
  name: '登录',
  hidden: true
}, {
  path: '/user',
  name: '用户',
  page: '/layout/index',
  bread: true,
  icon: 'fa fa-user fa-lg',
  children: [{
    path: '/user/index',
    page: '/user/index',
    bread: true,
    name: '用户列表'
  }]
}, {
  path: '/ui',
  name: 'UI',
  page: '/layout/index',
  bread: true,
  icon: 'fa fa-table fa-lg',
  children: [{
    path: '/ui/table',
    page: '/ui/table',
    bread: true,
    name: '表格'
  }, {
    path: '/ui/echarts',
    page: '/ui/echarts',
    bread: true,
    name: '图表'
  }, {
    path: '/ui/form',
    page: '/ui/form',
    bread: true,
    name: '表单'
  }, {
    path: '/ui/tree',
    page: '/ui/tree',
    bread: true,
    name: '树形'
  }, {
    path: '/ui/ueditor',
    page: '/ui/ueditor',
    bread: true,
    name: 'ueditor'
  }]
}]
export default routes
