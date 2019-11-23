export default [{
    path: '/ranking',
    name: 'ranking',
    component: resolve => require(['@/view/ranking'], resolve)
  },
  {
    path: '/appleDown',
    name: 'appleDown',
    meta: {
      title: '苹果下载'
    },
    component: resolve => require(['@/view/appleDown'], resolve),
  },
  {
    path: '/androidDown',
    name: 'androidDown',
    meta: {
      title: '安卓下载'
    },
    component: resolve => require(['@/view/androidDown'], resolve),
  },
  {
    path: '/game',
    name: 'game',
    component: resolve => require(['@/view/game'], resolve),
  },
  {
    path: '/necessary',
    name: 'necessary',
    component: resolve => require(['@/view/necessary'], resolve)
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: resolve => require(['@/view/ranking'], resolve)
  },
  {
    path: '*',
    name: 'error404',
    component: resolve => require(['@/components/error'], resolve)
  },
  {
    path: '/leftNav',
    name: 'leftNav',
    component: resolve => require(['@/components/leftNav'], resolve),
  },
  {
    path: '/head',
    name: 'head',
    component: resolve => require(['@/components/head'], resolve),
  },
  {
    path: '/foot',
    name: 'foot',
    component: resolve => require(['@/components/foot'], resolve),
  }
]
