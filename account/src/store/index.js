import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        uid: sessionStorage.getItem("uid"),
        uName: sessionStorage.getItem("uName"),
        detail: sessionStorage.getItem("detail"),
    },
    getters:{

    },
    actions:{

    },
    mutations:{
        uidFn(state, obj){
            state.uid = obj.uid
            state.uName = obj.uName
            
            sessionStorage.setItem("uid", obj.uid)
            sessionStorage.setItem("uName", obj.uName)
        },
        detailDate(state, obj){
            state.detail = obj
            
            sessionStorage.setItem("detail", obj)
        },
    },
    modules:{

    }
})