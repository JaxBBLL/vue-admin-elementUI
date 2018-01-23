/**
 * 组件的名称使用大驼峰命名法
 * name: 'UserIndex'
 */
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
    name: 'Home',
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
  name: 'Login',
  title: '首页',
  hidden: true
}, {
  path: '/user',
  name: 'User',
  title: '用户',
  page: '/layout/index',
  bread: true,
  icon: 'fa fa-user fa-lg',
  children: [{
    path: '/index',
    page: '/user/index',
    name: 'UserIndex',
    title: '用户列表',
    bread: true
  }]
}, {
  path: '/ui',
  title: '分类',
  name: 'Menu',
  page: '/layout/index',
  bread: true,
  icon: 'fa fa-table fa-lg',
  children: [{
    path: '/echarts',
    page: '/ui/echarts',
    name: 'UiEchart',
    title: '图表',
    bread: true
  }, {
    path: '/form',
    page: '/ui/form',
    bread: true,
    title: '表单',
    name: 'UiForm'
  }, {
    path: '/ueditor',
    page: '/ui/ueditor',
    name: 'UiEditor',
    title: '文本编辑',
    bread: true
  }, {
    path: '/tree',
    page: '/ui/tree',
    name: 'UiTree',
    title: '树形',
    bread: true
  }]
}]
export default routes

