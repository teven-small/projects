<template>
    <div class="position" style="">
        <Head :active="1"></Head>
        <div class="content">


            <div class="title  clear" >

                <div class="pointer title-hover pdding-50-60 hover" @click="addPath(item)" v-for="(item,i) in title" :key="i"  :class="active(item)" > 
                    <div class="center">
                        <div :class="['img-div',img_active(item,i),hover(item)]" > </div>
                        <div class="inline-blcok" > 
                            <p >{{item.chinese}}</p>
                            <p class="fyzt">{{item.translation}}</p>
                        </div>
                    </div>
                </div>

               
            </div>

            <div class="new-content"> 
                
                <router-view/>
                
            </div>
            <div style="height:1px"></div>
        </div>
        
        <rtAside></rtAside>
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
        return {
            postList:true,
            title:[
                {show:true, chinese:'职位列表',translation:'Danh sách công việc',path:'/positionlist',img:require('../../assets/imgs/zw.png'),img_active:require('../../assets/imgs/zw-active.png')},
                {show:false, chinese:'招聘流程',translation:'Quy trình tuyển dụng',path:'/process',img:require('../../assets/imgs/zp.png'),img_active:require('../../assets/imgs/zp-active.png')},
                {show:false, chinese:'常见问题',translation:'Vấn đề thường gặp',path:'/problem',img:require('../../assets/imgs/wt.png'),img_active:require('../../assets/imgs/wt-active.png')},
            ],
            
           
           
        }
    },
    methods:{
        addPath(item){
            this.$router.push({path:'/position'+item.path});
            // console.log(this.$route.path.split('/')[2])
        },
        active(i){
            let a = this.$route.path.split('/')[2];
            if(('/'+a) == i.path){
                return 'active';
            }else{
                return '';
            }
        },
        img_active(item,i){
            i=i+1;
            let a = this.$route.path.split('/')[2];
            
            if(('/'+a) == item.path){
                return 'img-active'+i;
            }else{
                return 'img'+i;
            }
        },
        hover(item){
            return item.path.split('/')[1]
        }
       
    },
    created(){
        this.$router.push({path:'/position/positionlist'});
    }
}
</script>

<style scoped>
    .position{
        background-size: 100% auto;
        background-position:  top center;
        background-repeat:  no-repeat;
        background-image: url('../../assets/imgs/top.png');
        /* background:rgb(239,239,239) url('../../assets/imgs/top.png') no-repeat top left; */
        /* padding */
    }
    .content{
        width: 1200px;
        /* border: 1px solid blue; */
        margin: auto;
        padding-top:290px
        /* background:yellow */
    }
    .title{
        width: 100%;
        /* border:1px solid red; */
        display: flex;
        justify-content: space-between
    }
    .title>div{
        width: 33%;
        height: 120px;
        /* border : 1px solid saddlebrown */
    }
    .width{
        display: inline-block;
        width: 500px;
    }
    /* p{
        max-width: 900px;
    } */
    .jiantou{
        display: inline-block;
        height: 15px;
        width: 15px;
        border-top:3px solid #666;
        border-left:3px solid #666;
        border-radius: 2px;
        transform: rotate(135deg)
    }
    .w-25{
        width: 25%
    }
    .inline-blcok{
        display: inline-block;
        padding-left: 20px;
        font-size: 18px;
        font-family: 'MicroSoftYaHei';
        color:#999
        
    }
    .pdding-50-60{
        text-align: center;
        /* line-height: 0px; */
        background: #fff;
        padding:  40px;
    }
    .center{
        display: inline-block;
        margin: auto;
        /* border:1px solid red */
    }
    .active p{
        color:red;
        
    }
    .active{
        /* height: 140px !important; */
        transform: scaleY(1.1)
    }
    .new-content{
        background: #fff;
        margin-top:55px;
        margin-bottom: 80px;
        box-shadow: 0 0 20px 0px #e1e1e1;
        -o-box-shadow: 0 0 20px 0px #e1e1e1;
        -moz-box-shadow: 0 0 20px 0px #e1e1e1;
        -ms-box-shadow: 0 0 20px 0px #e1e1e1;
        -webkit-box-shadow: 0 0 20px 0px #e1e1e1;
        
    }
    div{
        font-size: 16px;
        color:#333
    }
    .title-hover:hover{
        transform: scaleY(1.1)
    }
    .title-hover:hover p{
        color:red;
    }
    .title-hover:hover .positionlist{
         background: url('../../assets/imgs/zw-active.png');
    }
    .title-hover:hover .process{
         background: url('../../assets/imgs/zp-active.png');
    }
    .title-hover:hover .problem{
         background: url('../../assets/imgs/wt-active.png');
    }
    .img-div{
        display: inline-block;
        width: 40px;
        height: 40px;
    }
    .img-active1{
        background: url('../../assets/imgs/zw-active.png')
    }
    .img-active2{
        background: url('../../assets/imgs/zp-active.png')
    }
    .img-active3{
        background: url('../../assets/imgs/wt-active.png')
    }
    .img1{
        background: url('../../assets/imgs/zw.png')
    }
    .img2{
        background: url('../../assets/imgs/zp.png')
    }
    .img3{
        background: url('../../assets/imgs/wt.png')
    }
</style>
