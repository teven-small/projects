import axios from 'axios'
import Qs from 'qs'

var instant = axios.create({

    baseURL: 'http://192.168.10.79:10000/',                //测试环境
    timeout: 6000,                                        //请求超时
    headers: {'Content-Type': 'application/json'}

})

export const home = params =>{ return instant.get('api/type/getTypeByDevice?'+Qs.stringify(params) )}
