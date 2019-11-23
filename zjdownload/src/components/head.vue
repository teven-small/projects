<template>
    <!-- 顶部部分 -->
    <div id="dc_head">
        <!-- 顶部提示 -->
        <div class="top_div">
            <div class="main clear">
                <div class="rt">
                    <a href="">设为首页</a>
                    <a href="">加入收藏</a>
                    <a href="">APP下载</a>
                </div>
                <div class="lt official_notice">
                    <b class="lt">官网公告：</b>
                    <i class="lt"><marquee onmouseover=this.stop() onmouseout=this.start()>查询查询查询查询查询查询查询</marquee></i>
                </div>
            </div>
        </div>

    <!-- logo、搜索框 -->
    <div class="dc_head_search">
        <div class="main clear">
            <div class="rt">
                <div>
                    <input type="text" placeholder="金中计划">
                    <span class="search_btn">搜索</span>
                </div>
                <div class="link_box">
                    <a href="">955计划</a>
                    <a href="">QQ</a>
                    <a href="">微信</a>
                    <a href="">955娱乐</a>
                    <a href="">万能浏览器</a>
                    <a href="">绝地求生</a>
                    <a href="">多换西游</a>
                </div>
            </div>
            <div class="lt">
                <div class="logo_img"></div>
                <div class="logo_title">
                    <div>中金下载</div>
                    <div class="logo_a">
                        <span>安全便捷</span><span>极速下载</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 导航栏 -->
    <div class="nav_box">
        <div class="main">
            <ul id="sub_nav">
                <li :class="{active:index==nowIndex}" v-for="(item,index) in navData" :key="index" @click="jump(index)">{{item}}
                    <div class="triangle_top"></div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props:['nowIndex'],

    data(){
        return{

            navData:[ '首页',  '软件下载',  '安卓下载',  '苹果下载',  '游戏专区',  '装机必备',  '排行榜' ]
        }
    },
    methods:{
        jump(index){
            
            switch(index){
                case 0:
                    this.$router.push({path:'home'})
                    break;
                case 1:
                    this.$router.push({path:'softwareHome'})
                    break;
                case 2:
                    this.$router.push({path:'androidDown'})
                    break;
                case 3:
                    this.$router.push({path:'appleDown'})
                    break;
                case 4:
                    this.$router.push({path:'game'})
                    break;
                case 5:
                    this.$router.push({path:'necessary'})
                    break;
                case 6:
                     this.$router.push({path:'ranking'})
                default:
                    break;
            }
            
        }
    },
    created(){
        
        
    },
}
</script>

<style scoped>

@import '../assets/css/default.css';
@import '../assets/css/common.css';

</style>

