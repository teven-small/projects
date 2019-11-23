<template>
    <div class="error_box">
        <div class="content">
            <img src="../assets/images/404.jpg" alt="">
            <p>很抱歉，页面它一不小心迷路了  ~ ~</p>
            <div @click="backHome">返回主页</div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        backHome(){
            this.$router.replace({ name: "home" })
        }
    }
}
</script>


<style scoped>
.error_box{
    padding-top: 300px;
    height: 969px;
    text-align: center;
    background: #007BC1;
    box-sizing: border-box;
}
.error_box .content{
    width: 555px;
    margin: 0 auto;
}
.error_box .content p{
    color: #A2F4FF;
    text-align: right;
}
.content div{
    margin: 50px auto 0;
    width: 200px;
    height: 40px;
    line-height: 40px;
    color: #A2F4FF;
    border: 1px solid #A2F4FF;
    font-size: 14px;
    letter-spacing: 2px;
    cursor: pointer;
}
</style>
