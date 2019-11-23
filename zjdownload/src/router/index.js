import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routeList = [];

function importAll(r) {
  r.keys().forEach(
    key => {
      if (r(key).default.length > 0) {
        r(key).default.forEach(item => {
          routeList.push(item)
        });
      }
    }
  )
}
importAll(require.context('.', true, /route\.js$/))

console.log(...routeList)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '',
      redirect: 'home'
    },
    {
      path: '',
      component: resolve => require(['@/view/home'], resolve),
    },
    ...routeList
  ]
})
// const router = new Router({
//   mode: 'history',
//   routes: [{
//       path: '',
//       redirect: 'home'
//     },
//     {
//       path: '',
//       component: resolve => require(['@/view/home'], resolve),
//     },
//     ...routeList,
//     //  {
//     //    path: '/home',
//     //    name: 'home',
//     //    meta: {
//     //      breadcrumb: [{
//     //          name: '首页',
//     //          path: '/home'
//     //        },
//     //        {
//     //          name: '软件列表',
//     //          path: '/software'
//     //        }
//     //      ]
//     //    },
//     //    component: resolve => require(['@/view/home'], resolve),
//     //  },
//     {
//       path: '/software',
//       name: 'software',
//       meta: {
//         title: '软件列表'
//       },
//       component: resolve => require(['@/view/software/software'], resolve),
//     },
//     {
//       path: '/softwareHome',
//       name: 'softwareHome',
//       meta: {
//         breadcrumb: [{
//             name: '首页',
//             path: '/home'
//           },
//           {
//             name: '软件下载',
//             path: '/softwareHome'
//           },
//           {
//             name: '软件列表',
//             path: '/software'
//           }
//         ]
//       },
//       component: resolve => require(['@/view/software/softwareHome'], resolve),
//     },
//     {
//       path: '/softwareDetails',
//       name: 'softwareDetails',
//       meta: {
//         title: '软件详情'
//       },
//       component: resolve => require(['@/view/software/softwareDetails'], resolve),
//     },
//   ]
// })


// router.beforeEach((to, form, next) => {

//   // 置顶
//   window.scrollTo(0, 0);

//   if (to.matched.length === 0) { //如果未匹配到路由
//     from.name ? next({
//       name: from.name
//     }) : next('/'); //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
//   } else {
//     next(); //如果匹配到正确跳转
//   }

// })
export default router
