const state = {

    navActive: sessionStorage.getItem("nav"),

    //软件详情面包屑
    crumbs: sessionStorage.getItem("crumbs"),

    //软件类别数据
    softwareType:{
        typeData: sessionStorage.getItem("typeData")
    },

    //跳转到software
    parameter:{
        type: sessionStorage.getItem("type"),
        parent_id: sessionStorage.getItem("parent_id"),
        chirdren_id: sessionStorage.getItem("chirdren_id"),
        typeId: sessionStorage.getItem("typeId"),
    },

    
}

 // getters
 const getters = {
    
}

// actions
const actions = {
 
}

const mutations = {

    //导航栏选中
    getNavActive(state, n){
        state.navActive = n

        sessionStorage.setItem("nav", n)
    },

    //软件详情面包屑
    getCrumbs(state, array){
        
        state.crumbs = array

        sessionStorage.setItem("crumbs", array)

    },

    //软件类别数据
    getSoftwareType(state, obj){

        state.softwareType = obj

        sessionStorage.setItem("typeData", obj)
    },

    //跳转到software
    getParameter(state, par){
        //console.log(par)
        state.parameter.type = par.type
        state.parameter.parent_id = par.parent_id
        state.parameter.chirdren_id = par.chirdren_id
        state.parameter.typeId = par.typeId

        sessionStorage.setItem("type", par.type)
        sessionStorage.setItem("parent_id", par.parent_id)
        sessionStorage.setItem("chirdren_id", par.chirdren_id)
        sessionStorage.setItem("typeId", par.typeId)
    },

    
    getChirdrenId(state, n){
        
        state.parameter.chirdren_id = n

        sessionStorage.setItem("chirdren_id", n)

    },

}

export default{
    state,
    getters,
    actions,
    mutations
}