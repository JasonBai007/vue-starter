import Mock from 'mockjs'
Mock.mock(/getKeyIndexData/, {
  code: 0,
  msg: "Success",
  'data|6': [{
    num: '@integer(1000,10000)',
    title: '@cname'
  }]
})

