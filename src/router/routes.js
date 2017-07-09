export default [{
  path: '/home',
  name: '首页',
  page: '/index',
  children: [{
    path: '/home',
    page: '/home',
    name: '首页'
  }, {
    path: '/table',
    page: '/table/table',
    name: '表格'
  }, {
    path: '/button',
    page: '/button/button',
    name: '按钮'
  }, {
    path: '/chart',
    page: '/chart/chart',
    name: '图表'
  }, {
    path: '/form',
    page: '/form/form',
    name: '表单'
  }, {
    'path': '/404',
    'page': '/404',
    'name': ''
  }]
}, {
  path: '/login',
  page: '/login/login',
  name: '登录'
}]
