// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import App from './App'
import router from './router'
import 'babel-polyfill'
import store from '@/store//index'
import api from '../src/api/index'
import axios from 'axios'
import '../src/assets/css/common.css'

Vue.use(vuex)
Vue.config.productionTip = false
export const bus = new Vue()
//引入 element
import { Dropdown, DropdownMenu, DropdownItem, Button, Pagination, Carousel, CarouselItem, Table, TableColumn,Loading,MessageBox,Dialog,Message,Upload,
  Breadcrumb,BreadcrumbItem } from 'element-ui'
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Pagination)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Loading)
Vue.use(Dialog)
Vue.use(Upload)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.prototype.bus = 
Vue.prototype.$Message = Message
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm

Vue.prototype.api = api
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
