import Mock from 'mockjs';

var tableData = Mock.mock({
  'array|6-12': [{
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
    'date|+1': [
      Mock.mock('@datetime'),
      Mock.mock('@datetime'),
      Mock.mock('@datetime')
    ]
  }]
});

Mock.mock(/\/user\/list/, 'get', tableData.array);

export default Mock;
