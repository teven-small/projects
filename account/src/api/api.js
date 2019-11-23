import qs from 'qs'
import axios from 'axios'
import { Loading } from 'element-ui'



let loading

const port = axios.create({

    //baseURL: 'http://192.168.103.124:8999/',            //后台ip地址

    baseURL: 'http://47.75.134.184:8999/',                      //测试地址

    //headers: { 'Accept': 'application/json' },

    timeout: 60000

})

port.interceptors.request.use((config) => {
    loading = Loading.service({
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgb(255, 255, 255)'
    })
    return config
}, error => {
    loading.close();
    return Promise.reject(error)
})
port.interceptors.response.use((config) => {
    setTimeout(() => {
        loading.close();
    }, 200)
    return config
}, error => {
    loading.close();
    return Promise.reject(error)
})

//注册
export const registerFn = params => { return port.get('api/trade/register?' + qs.stringify(params)) }

//登录
export const loginFn = params => { return port.get('api/trade/login?' + qs.stringify(params)) }

//修改密码 
export const updatePwdFn = params => { return port.get('api/trade/changePassword?' + qs.stringify(params)) }

//买卖记录
export const recordFn = params => { return port.get('api/trade/myRecord?' + qs.stringify(params)) }

//表格信息
export const tableDataFn = params => { return port.get('api/trade/searchSalesHall?' + qs.stringify(params)) }

//最新出售账号 
export const recentSaleFn = params => { return port.get('api/trade/recentSale?' + qs.stringify(params)) }

//用户认证
export const userApproveFn = params => { return port.post('api/trade/authentication?' + qs.stringify(params)) }

//用户认证返回状态
export const userApproveStateFn = params => { return port.get('api/trade/getAuthentication?' + qs.stringify(params)) }

//认证获取信息
export const userApproveNewsFn = params => { return port.get('api/trade/getNews?' + qs.stringify(params)) }

//获取认证信息内容
export const approveNewsContentFn = params => { return port.get('api/trade/updateRead?' + qs.stringify(params)) }