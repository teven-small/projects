
<template>
    <div>
        <div class="back_item">
            <!-- 标题 -->
            <div class="table_top">
                <span>{{title}}</span>
            </div>

            <!-- 表单 -->
            <Form :myForm="myForm"></Form>

        </div>

        <div class="back_item">
            <!-- 标题 -->
            <div class="table_top">
                <span>活动细则</span>
            </div>
            <div style="padding:20px 40px">
                <p>1、提交账号系统回收必须先添加微信专员QQ：<span class="text_red">821376666</span> 
                    或是专员微信：<span class="text_red">tycjyjb888</span></p>
                <p>2、注册ID账号后必须实名才可以出售账号和购买账号！</p>
                <p>3、实名必须上传真实有效身份证正面、身份证反面、银行卡照片才可以通过审核！</p>
                <p>4、提交账号系统回收必须是娱乐平台的会员账号！</p>
                <p>5、提交账号系统回收必须填写真实VIP等级、电子等级、电子晋级礼金、电子周俸禄、电子月俸禄、真人等级、真人月俸禄，等相关信息！</p>
                <p>6、发现乱提交不属实会员账号、VIP等级、电子等级、电子晋级礼金、电子周俸禄、电子月俸禄、真人等级、
                    真人月俸禄的将<span class="text_red">永久冻结ID账号</span>，无法再次参与账号交易！</p>
                <p>7、提交账号系统回收，审核通过者系统将登记记录，系统要回收将于卖方联系交易。</p>

            </div>
        </div>
    </div>
</template>

<script>

import Form from '../components/form'
export default {
    props: ["title"],
    components:{
        Form
    },
    data(){
        return{
              //表单信息
            myForm:[
                { name: "会员账号", placeholder:"请填写英文、数字" },
                { name: "等级", placeholder:"请填写英数字" },
                { name: "等级礼金", placeholder:"请填写数字" },
                { name: "周俸禄", placeholder:"请填写数字" },
                { name: "月俸禄", placeholder:"请填写数字" },
                { name: "出售金额", placeholder:"请填写数字" }
                
            ]
        }
    }
}
</script>

<style>

</style>
