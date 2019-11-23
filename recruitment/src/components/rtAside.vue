<template>
    <div class="rt_aside" v-if="show">
        <img src="../assets/imgs/erweima.jpg" alt="">
        <p class="vietnam">Quét mã hai chiều, thêm vi tin tuyển dụng</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            sTop: 0,
            show: false
        }
    },
    methods:{
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            //console.log(scrollTop)
            if(scrollTop >= 80)
                this.show = true
            else
                this.show = false
        }
    },
    mounted () {
        //监听滚动事件
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style>

</style>
