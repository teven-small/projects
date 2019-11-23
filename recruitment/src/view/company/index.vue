<template>
 <div class="main"> 
   <div class="company_module">
       <!-- 头部 -->
       <Head active="3"></Head>

        <div class="wrap company">

            <div class="content_box clear">
                <div class="lt lt_nav">
                    <div class="blank"></div>
                        <div :class="['sub_title', {active:item.path==path}]" v-for="(item, index) in leftNav" :key="index" 
                        @click="changeContent(item, index)">
                            <p>{{item.vietnam}}</p>
                        </div>
                </div>

                <!-- 路由嵌套 -->
                <router-view @sendData="changeBig"/>

            </div>
        </div>
        
        <rtAside></rtAside>

        <!-- 遮罩层 -->
        <div class="mark" v-show="show" @click="hideBox"></div>
        <div class="big" @click="hideBox" :style="style">
            <img :src="bigImg" alt="">
        </div>
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
            
            path: null, 
            
            //遮罩层显示
            show: false,

            leftNav:[
                { vietnam: 'Lời khuyên du lịch', path: 'travelKnow' },
                { vietnam: 'Phong cách CMG', path: 'features' },
                { vietnam: 'Vùng video', path: 'video' },
            ],

            //定时器
            timer: null,

            //放大图片
            bigImg: '',

            //大图div样式
            style:{
                // zIndex: 11,
                width:  '',
                height: '',
                top: '',
                left: '',
                transform: '',
                zIndex: '',
                marginLeft: '',
                marginTop: ''
            },
        }
    },
    methods: {

        //路由切换
        changeContent(item, index){

            this.path = item.path

            switch(index){
                case 0:
                    this.$router.push({ path: '/company/travelKnow' })
                    break;
                case 1:
                    this.$router.push({ path: '/company/features' })
                    break;
                case 2:
                    this.$router.push({ path: '/company/video' })
                    break;
            }
        },

        //隐藏遮罩层
        hideBox(){
            this.style={
                width:  '400px',
                height: '200px',
                top: '50%',
                left: '50%',
                opacity: 0,
                transform: 'rotate(0deg)',
                zIndex: 0,
                marginLeft: '-100px',
                marginTop: '200px'
            }
            this.show = false
        },

        //显示大图div动画
        changeBig(data){

            this.bigImg = data.img

            this.show = true
            console.log(this.show)
            var that = this,s = 0, w = 400, h = 200, t = 0, l = 0, tr = 0, o = 10, z = 0
            //结束  w = 1000, h = 600, t = 150, l = 450, tr = 360, o = 0
            //      w => width  h => height  t => top  l => left  tr => transform
            clearInterval(this.timer)
            that.timer = setInterval(()=>{
                s++
                w += 60
                h += 40
                t += 5
                l += 5
                tr += 36 
                o += 1
                z ++
                if(s>10){
                    s = 0
                    clearInterval(that.timer)

                }else{
                    that.style.width = w + 'px'
                    that.style.height = h + 'px'
                    that.style.marginTop = -h/2 + 'px'
                    that.style.marginLeft = -w/2 + 'px'
                    that.style.top = t + '%'
                    that.style.left = l + '%'
                    that.style.opacity = o/10
                    that.style.zIndex = z
                    that.style.transform = 'rotate('+ tr +'deg)'
                }
            }, 10)
        }
    },
    created(){
        this.path = this.$router.currentRoute.name
        //console.log(document.documentElement.clientWidth)
    },

    destroyed(){
        clearInterval(this.timer)
    }
}
</script>

<style>
</style>
