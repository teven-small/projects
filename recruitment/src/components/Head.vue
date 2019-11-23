<template>
    
    <div class="top_nav clear">
        <div class="logo lt"></div>
        <div :class="['lt nav_item', {active:index==active}]" v-for="(item, index) in navData" :key="index" @click="changeRouter(index)">
            <p class="vietnam">{{item.translation}}</p>
        </div>
    </div>
    
</template>

<script>
export default {
    props:["active"],
    data(){
        return{
            navData:[
                { translation: 'Trang chủ'},
                { translation: 'Vị trí tuyển dụng'},
                { translation: 'Giới thiệu về công ty'},
                { translation: 'Tôi đang ở CMG'},
            ]
        }
    },
    methods:{
        changeRouter(index){
            switch(index){
                case 0: 
                    this.$router.push({ path: '/home' })
                    break;
                case 1: 
                    this.$router.push({ path: '/position' })
                    break;
                case 2: 
                    this.$router.push({ path: '/introduce' })
                    break;
                case 3: 
                    this.$router.push({ path: '/company' })
                    break;
                default: 
                    break;
            }
        }
    }
}
</script>

