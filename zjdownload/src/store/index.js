import Vue from 'vue'
import Vuex from 'vuex'
import allData from './modules/allData'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        allData         //页面数据
    }
})