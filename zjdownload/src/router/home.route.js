export default [{
  path: '/home',
  name: 'home',
  meta: {
    breadcrumb: [{
        name: '首页',
        path: '/home'
      },
      {
        name: '软件列表',
        path: '/software'
      }
    ]
  },
  component: resolve => require(['@/view/home'], resolve),
}]
