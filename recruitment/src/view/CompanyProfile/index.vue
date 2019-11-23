<template>
 <div class="main"> 
   <div class="introduce_module">
       <!-- 头部 -->
        <Head :active="2"></Head>

       <div class="introduce wrap">
            <div class="sub_nav">
                <div :class="['sub_nav_item', {active:item.path==path}, {lt:index==0}, {rt:index==1}, {business:index==2}]" 
                    v-for="(item, index) in subNav" :key="index" @click="changView(item, index)">
                    <div :class="['item_box', {introduce:index==0}, {compensation:index==1}, {business:index==2}]">
                        <div class="icon"></div>
                        <p>{{item.vietnam}}</p>
                    </div>
                </div>
            </div>
        
            <!-- 路由嵌套 -->
            <router-view />
        
        </div>

        <rtAside></rtAside>
    </div>
</div>
</template>

<script>

import Head from '@/components/Head'
import rtAside from '@/components/rtAside'

export default {
    components:{
        Head,
        rtAside
    },
    data(){
        return{
            path: '',
            subNav:[
                { vietnam: 'CMG Giới thiệu', path: 'jHIndroduce'},
                { vietnam: 'Bồi thường và lợi ích', path: 'compensation'},
                { vietnam: 'Hệ thống kinh doanh', path: 'businessSystem' }
            ]
        }
    },
    methods: {
        changView(item, index){

            this.path = item.path
            
            switch(index){
                case 0:
                    this.$router.push({ path: '/introduce/jHIndroduce' })
                    break;
                case 1:
                    this.$router.push({ path: '/introduce/compensation' })
                    break;
                case 2:
                    this.$router.push({ path: '/introduce/businessSystem' })
                    break;
            }
        }
    },
    created(){
        this.path = this.$router.currentRoute.name
    }
}
</script>
