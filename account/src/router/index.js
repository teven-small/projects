import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'product'
    },
    {
      path: '/product',
      component: resolve => require(['@/view/product'], resolve),
      children:[
        {
          path: '/',
          redirect: 'index'
        },
        {
          path: 'index',
          name: 'index',
          component: resolve => require(['@/view/product/index'], resolve)
        },
        {
          path: 'sell',
          name: 'sell',
          component: resolve => require(['@/view/product/sell'], resolve)
        },
        {
          path: 'selled',
          name: 'selled',
          component: resolve => require(['@/view/product/selled'], resolve)
        },
        {
          path: 'mySell',
          name: 'mySell',
          component: resolve => require(['@/view/product/mySell'], resolve)
        },
        {
          path: 'hotSell',
          name: 'hotSell',
          component: resolve => require(['@/view/product/hotSell'], resolve)
        },
        {
          path: 'assess',
          name: 'assess',
          component: resolve => require(['@/view/product/assess'], resolve)
        },
        {
          path: 'recycle',
          name: 'recycle',
          component: resolve => require(['@/view/product/recycle'], resolve)
        },
        {
          path: 'details',
          name: 'details',
          component: resolve => require(['@/view/product/details'], resolve)
        },
        {
          path: 'message',
          name: 'message',
          component: resolve => require(['@/view/product/message'], resolve)
        },
      ]
    },
    {
      path: '*',
      name: 'notFound',
      component: resolve => require(['@/view/notFound'], resolve)
    },
  ]
})

router.beforeEach((to, from, next)=>{

  window.scroll(0,0)

  next();
  
})

export default router