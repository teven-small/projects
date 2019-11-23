import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: 'home',
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/view/home'], resolve )
    },
    {
      path: '/position',
      component: resolve => require(['@/view/position/position'], resolve ),
      children:[
        {
          path:'',
          redirect:'positionlist',
        },
        {
          path:'positionlist',
          name:'positionlist',
          component: resolve => require(['@/view/position/positionList'], resolve )
        },
        {
          path:'process',
          name:'process',
          component: resolve => require(['@/view/position/recruitmentProcess'], resolve )
        },
        {
          path:'problem',
          name:'problem',
          component: resolve => require(['@/view/position/commonProblem'], resolve )
        }
      ]
    },
    {
      path: '/introduce',
      component: resolve => require(['@/view/CompanyProfile/index'], resolve ),
      children:[
        {
          path: '',
          redirect: 'jHIndroduce'
        },
        {
          path: 'jHIndroduce',
          name: 'jHIndroduce',
          component: resolve => require(['@/view/CompanyProfile/jHIndroduce'], resolve),
          meta:{
            index: 0
          }
        },
        {
          path: 'businessSystem',
          name: 'businessSystem',
          component: resolve => require(['@/view/CompanyProfile/businessSystem'], resolve),
          meta:{
            index: 1
          }
        },
        {
          path: 'compensation',
          name: 'compensation',
          component: resolve => require(['@/view/CompanyProfile/compensation'], resolve),
          meta:{
            index: 2
          }
        }
      ]
    },
    {
      path: '/company',
      component: resolve => require(['@/view/company/index'], resolve ),
      children:[
        {
          path: '',
          redirect: 'travelKnow'
        },
        {
          path: 'travelKnow',
          name: 'travelKnow',
          component: resolve => require(['@/view/company/travelKnow'], resolve)
        },
        {
          path: 'features',
          name: 'features',
          component: resolve => require(['@/view/company/features'], resolve)
        },
        {
          path: 'video',
          name: 'video',
          component: resolve => require(['@/view/company/video'], resolve)
        }
      ]
    },
    {
      path: '*',
      name: 'notFound',
      component: resolve => require(['@/components/notFound'], resolve)
    }
  ]
})


router.beforeEach((to, from, next)=>{

  window.scroll(0,0)

  next();
  
})

export default router