<template>
    <div>
        <!-- 注册 -->
        <el-dialog :title="dialogObj.title" :visible.sync="dialogObj.show" @closed="closedFn" class="register" v-if="dialogObj.type=='register'">
            <div class="registor_box">
                <div class="item">
                    <label><sup style="color:red">*</sup>账号</label>
                    <input type="text" v-model.trim="r_account"/>
                </div>
                <div class="item">
                    <label><sup style="color:red">*</sup>密码</label>
                    <input type="password" v-model.trim="r_pwd"/>
                </div>
                <div class="item">
                    <label><sup style="color:red">*</sup>确认密码</label>
                    <input type="password" v-model.trim="r_repeatPwd"/>
                </div>
                <div class="item code_div">
                    <label><sup style="color:red">*</sup>验证码</label>
                    <div>
                        <input type="text" v-model.trim="r_code" @focus="codeFn2"/>
                        <p v-if="showCode2" @click="codeClickFn">{{ccode}}</p>
                    </div>
                </div>
            </div>
            <div class="zc_p">
                <input type="checkbox" v-model="checked">
                我已届满合法博彩年龄，且同意各项开户条约。
            </div>
            <div class="dialog_footer">
                <span slot="footer" >
                    <el-button type="primary" size="small" :disabled="disabled" @click="confirmFn">确 定</el-button>
                </span>
            </div>
        </el-dialog>
         <!-- 用户登录 -->
        <el-dialog :title="dialogObj.title" :visible.sync="dialogObj.show" @closed="closedFn" class="login" v-else-if="dialogObj.type=='login'">
            <div class="login_dialog_box">
                <div class="login_item">
                    <img src="../assets/imgs/user.jpg" class="lt"/>
                    <input type="text" placeholder="账号" v-model.trim="d_account" >
                </div>
                <div class="login_item">
                    <img src="../assets/imgs/password.jpg" class="lt"/>
                    <input type="password" placeholder="密码" v-model.trim="d_pwd">
                </div>
                <div class="login_item code_div">
                    <img src="../assets/imgs/login_cap.png"/>
                    <div class="clear">
                        <input type="text" placeholder="验证码" v-model.trim="d_code"  @focus="codeFn3()"/>
                        <p v-if="showCode3" @click="codeClickFn">{{ccode}}</p>
                    </div>
                </div>
                <div class="login_btn" @click="userLogin(d_account,d_pwd,d_code)">会员登录</div>
                <div class="login_zz clear">
                    <span class="regist" @click="jumpRegister">免费注册</span>
                    <span class="back_pwd" @click="jumpKefu"><i></i>找回密码</span>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import {bus} from '../main'
export default {
    props:['dialogObj'],
    data(){
        return{
            d_account: '',             //弹出框用户账号
            d_pwd: '',                 //弹出框用户密码
            d_code: '',                //弹出框验证码
            r_account: '',              //注册用户账号
            r_pwd: '',                  //注册用户密码
            r_code: '',                 //注册验证码
            r_repeatPwd: '',            //注册验证码
            ccode: '',                  //随机验证码 
            showCode2: false,            //显示验证码
            showCode3: false,            //显示验证码
            repeatPwd: '',            //确认密码
            
            imageUrl: '',
            oldPwd: '',
            newPwd: '',
            checked: true,              //注册同意
            disabled: false,            //提交按钮禁止
            // 表格
            buyRecord:{
                isCall: false,
                // 表格类型
                type: 3,
                typeId: 0,
                //显示分页
                show: false,
                showBtn: false,
                tablehead: [
                    {label: '账号', prop: ''},
                    {label: '等级', prop: ''},
                    {label: '等级礼金', prop: ''},
                    {label: '周俸禄', prop: ''},
                    {label: '月俸禄', prop: ''},
                    {label: '标价', prop: ''},
                    {label: '出价', prop: ''},
                    {label: '成交价格', prop: ''},
                    {label: '状态', prop: ''},
                    {label: '操作', prop: ''},
                ],
                //表格body
                tableBody:[],
            },
            buyObj:{
                title: null,
                type: null,
                show: false
            },
            buyData:null,
            h_price: '',
            other: '',
            myAccount: '',
            c_price: null,

            blankCard: '',
            idCardOne: '',
            idCardTwo: '',
            approveName: ''
        }
    },
    methods:{
        codeFn2(){
            this.showCode2 = true
        },
        codeFn3(){
            this.showCode3 = true
        },
         //提交注册信息
        confirmFn(){
            if(this.r_account == ''){
                this.$alert('账号不能为空', '温馨提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        
                    }
                });
                 return
            }
            if(this.r_pwd == ''){
                this.$alert('密码不能为空', '温馨提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        
                    }
                });
                 return
            }
            if(this.r_pwd != this.r_repeatPwd){
                this.$alert('两次输入的密码必须一致', '温馨提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.generatedCode()
                    }
                });
                return
            }
            if(this.r_code== ''){
                this.$alert('请输入验证码', '温馨提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.generatedCode()
                    }
                });
                return
            }
            if(this.r_code.toUpperCase() != this.ccode){
                this.$alert('验证码不正确', '温馨提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.generatedCode()
                    }
                });
                return
            }

            var params = {
                userName: this.r_account,
                password: this.r_pwd
            }
           
            this.api.registerFn(params).then((res)=>{
                // console.log(res.data)
                if(res.data.data ==-1){
                    this.$alert('该账户已存在', '温馨提示', {
                        confirmButtonText: '确定',
                        callback: () => {}
                    });
                    return
                } 
                else{
                    var loginObj = {
                        userName: this.r_account,
                        password: this.r_pwd
                    }
                    this.closedFn()
                    this.$alert('注册成功', '温馨提示', {
                        confirmButtonText: '确定',
                        callback: () => {
                            this.userLoginFn(loginObj)
                        }
                    });
                   return
                }
            })
        },
        
        //用户登录
        userLogin(arg1,arg2,arg3){
             if(arg1 == ''){
                this.$alert('账号不能为空', '温馨提示', {
                    confirmButtonText: '确定',
                    callback: () => {
                       
                    }
                });
                return
            }
            if(arg2 == ''){
                this.$alert('密码不能为空', '温馨提示', {
                    confirmButtonText: '确定',
                    callback: () => {
                    }
                });
                return
            }
            if(arg3.toUpperCase() != this.ccode){
                this.$alert('验证码不正确', '温馨提示', {
                    confirmButtonText: '确定',
                    callback: action => {
                        this.generatedCode()
                    }
                });
                return
            }

            var params ={
                userName: arg1,
                password: arg2
            }
           
           this.userLoginFn(params)
        },

        //登录提交数据
        userLoginFn(arg){
            this.api.loginFn(arg).then((res)=>{
                //console.log(res.data)
                if(res.data.data==0){
                    this.$alert('登录失败，账号/密码不对', '温馨提示', {
                        confirmButtonText: '确定',
                        callback: () => {
                            
                        }
                    });
                }
                else{
                    var userInfo={
                        uid: res.data.data,
                        uName: arg.userName
                    }
                    this.$store.commit("uidFn", userInfo)
                    this.closedFn()
                    if(this.$route.name=='index')
                        location.reload()
                    else{
                        this.$router.push({
                            path: '/product/index'
                        })
                    }
                        
                }
            })
        },

        closedFn(){
            this.d_pwd = ''
            this.d_code = ''                 //验证码 
            this.d_account = ''
            this.d_code = ''
            this.r_account = ''
            this.r_pwd = ''                  //密码
            this.r_repeatPwd = ''            //确认密码
            this.r_code = ''
            this.oldPwd = ''
            this.newPwd = ''
            this.showLogin = false
            this.repeatPwd = ''
            this.dialogObj.title = ''
            this.dialogObj.type = ''
            this.dialogObj.show = false
        },
      
        //免费注册
        jumpRegister(){
            this.dialogObj.title="用户注册"
            this.dialogObj.type ='register'
            this.dialogObj.show=true
        },
        //刷新验证码
        codeClickFn(){
            this.generatedCode()
        },

        
        //随机生成四尾数验证码
        generatedCode () {
            const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            let code = ''
            for (let i = 0; i < 4; i++) {
                let index = Math.floor(Math.random() * 10)
                code += random[index]
            }
            this.ccode = code
        },
         //跳转客服
        jumpKefu(){
            window.open('http://mab.xinkefu.net/Web/im.aspx?_=t&accountid=108573', "_blank");
        }
    },
    created(){
        this.generatedCode()
        this.myAccount = this.$store.state.uName
        var that = this

        bus.$on('goLogin', function(arg){
            that.dialogObj.show = arg.show
            that.dialogObj.type = arg.type
            that.dialogObj.title = arg.title
        })
        
    },
    watch:{
        //提交按钮的禁止
        checked(val){
            val? this.disabled = false: this.disabled = true
        },
    }
}
</script>