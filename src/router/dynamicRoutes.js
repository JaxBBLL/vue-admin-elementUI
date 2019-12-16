// 模拟动态路由
export default [
  {
    path: '/',
    title: '目录',
    icon: 'fa fa-table',
    pid: 0,
    type: 0,
    id: 1,
    children: [
      {
        path: '/menu/echarts',
        name: 'MenuEcharts',
        title: '图表',
        pid: 1,
        id: 10,
        type: 1
      },
      {
        path: '/menu/form',
        title: '表单',
        name: 'MenuForm',
        pid: 1,
        id: 10,
        type: 1
      },
      {
        path: '',
        name: 'MenuAdmin',
        title: '菜单管理',
        icon: 'fa fa-list',
        pid: 1,
        id: 10,
        type: 0,
        children: [
          {
            path: '/menu/admin/manage',
            name: 'MenuAdminManage',
            title: '管理',
            pid: 10,
            id: 100,
            type: 1
          }
        ]
      },
      {
        path: '/menu/editor',
        title: '富文本',
        name: 'MenuEditor',
        pid: 1,
        id: 10,
        type: 1
      }
    ]
  }
];
