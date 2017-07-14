const routes = [{
  path: '/',
  name: '首页',
  page: '/layout/index',
  bread: false
}, {
  path: '/login',
  page: '/login/login',
  name: '登录'
}, {
  path: '/user',
  name: '用户管理',
  page: '/layout/index',
  bread: true,
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
  children: [{
    path: '/ui/table',
    page: '/ui/table',
    bread: true,
    name: '表格'
  }, {
    path: '/ui/button',
    page: '/ui/button',
    bread: true,
    name: '按钮'
  }, {
    path: '/ui/chart',
    page: '/ui/chart',
    bread: true,
    name: '图表'
  }]
}]
export default routes
