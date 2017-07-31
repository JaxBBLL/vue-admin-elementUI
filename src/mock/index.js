import Mock from 'mockjs';

var tableData = Mock.mock({
  'user|6-12': [{
    'name|+1': [
      'Peter',
      'Tom',
      'Jack'
    ],
    'address|+1': [
      Mock.mock('@city(true)'),
      Mock.mock('@city(true)'),
      Mock.mock('@city(true)')
    ],
    'status|+1': [
      0, 1
    ],
    'date|+1': [
      Mock.mock('@datetime'),
      Mock.mock('@datetime'),
      Mock.mock('@datetime')
    ]
  }],
  'tree|1-3': [{
    'id|1-3': Mock.mock('@natural(10000)'),
    'name|+1': ['节点' + Mock.mock('@natural(30, 100)'), '节点' + Mock.mock('@natural(30, 100)')],
    'isPlus': true
  }]
});

Mock.mock(/\/user\/list/, 'get', tableData.user);
Mock.mock(/\/tree\/list/, 'get', tableData.tree);

export default Mock;
