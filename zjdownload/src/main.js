// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Qs from 'qs'


import store from '../src/store/index'

Vue.use(Vuex)

// 引入接口配置文件
import * as api from './api/api'
Vue.prototype.$qs = Qs
Vue.prototype.$api = api
Vue.prototype.$axios = axios

Vue.config.productionTip = false

//引入部分组件
import { Carousel, CarouselItem, Tabs, TabPane, Loading, Pagination, Row, Col, breadcrumb, breadcrumbItem, Notification } from 'element-ui';
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Loading)
Vue.use(Pagination)
Vue.use(Row)
Vue.use(Col)
Vue.use(breadcrumb)
Vue.use(breadcrumbItem)

//给vue原型对象添加 属性
Vue.prototype.$notify = Notification

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
