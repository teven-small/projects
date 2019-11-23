<template>
    <div>

        <!-- 页面头部 -->
        <Header :nowIndex="4"></Header>

        <div class="content-bg">
            <div class="content main">
                <!-- 左半部分区域 -->
                <LeftNav :hotSoftware="hotSoftware" :updateSoftware="updateSoftware" :leftImg="leftImg"></LeftNav>

                <!-- 右半部分区域 -->
                <div class="content-right">
                    <div class="banner bottom-box">
                        
                        <el-carousel :interval="5000" arrow="hover" height="300px" indicator-position="right">
                            <el-carousel-item v-for="(item,index) in bannerList" :key="index">
                                <img :src="item.src" alt="" class="banner_img">
                            </el-carousel-item>
                        </el-carousel>

                    </div>
                    <div class="game bottom-box">
                        <div class="logo-list" style="margin-top: 10px;">
                            <div v-for="(item, index) in softwareList" :key="index">
                                <div class="logo-img">
                                    <img :src="item.img" width="100%">
                                </div>
                                <div class="logo-name">{{item.name}}</div>
                            </div>
                        </div>

                        <div id="pager">
                            <el-pagination background layout="prev, pager, next" :total="1002" :page-size="22" 
                            :current-page="2"></el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 页面底部 -->
        <Footer></Footer>
        
    </div>
</template>

<script>

import Header from '../components/head'
import Footer from '../components/foot'
import LeftNav from '../components/leftNav'

export default {
    components:{
        Header,
        Footer,
        LeftNav
    },
    data(){
        return{
             //轮播图
            bannerList: [
                { src: "https://thumb2.jfcdns.com/n2316n2a9v16fh19/16f5cd2b05baf618.jpeg", href: "" },
                { src: "http://thumb11.jfcdns.com/2018-09/27/bce5bac370022ac1.png", href: "" },
                { src: "http://thumb12.jfcdns.com/2018-09/26/bce5bab3330e336b.jpeg", href: "" },
            ],

            //左边导航栏图片
            leftImg: require('../assets/images/game.png'),

            //热门软件
            hotSoftware:[
                { title: '中金下载不得了很牛逼....', rank: 1},
                { title: '中金下载不得了很牛逼....', rank: 2},
                { title: '中金下载不得了很牛逼....', rank: 3},
                { title: '中金下载不得了很牛逼....', rank: 4},
                { title: '中金下载不得了很牛逼....', rank: 5},
                { title: '中金下载不得了很牛逼....', rank: 6},
                { title: '中金下载不得了很牛逼....', rank: 7},
                { title: '中金下载不得了很牛逼....', rank: 8},
                { title: '中金下载不得了很牛逼....', rank: 9},
                { title: '中金下载不得了很牛逼....', rank: 10}
            ],

            //最近更新
            updateSoftware: [
                { img: require('../assets/images/955logo.png'), name: '955娱乐' },
                { img: require('../assets/images/955logo.png'), name: '955娱乐' },
                { img: require('../assets/images/955logo.png'), name: '955娱乐' },
                { img: require('../assets/images/955logo.png'), name: '955娱乐' },
                { img: require('../assets/images/955logo.png'), name: '955娱乐' },
                { img: require('../assets/images/955logo.png'), name: '955娱乐' },
                { img: require('../assets/images/955logo.png'), name: '955娱乐' },
                { img: require('../assets/images/955logo.png'), name: '955娱乐' },
                { img: require('../assets/images/955logo.png'), name: '955娱乐' },
            ],

            //软件列表
            softwareList: [
                { img: require('../assets/images/game-title.png'), name:'955娱乐955娱乐955娱乐....' },
                { img: require('../assets/images/game-title.png'), name:'955娱乐955娱乐955娱乐....' },
                { img: require('../assets/images/game-title.png'), name:'955娱乐955娱乐955娱乐....' },
                { img: require('../assets/images/game-title.png'), name:'955娱乐955娱乐955娱乐....' },
                { img: require('../assets/images/game-title.png'), name:'955娱乐955娱乐955娱乐....' },
                { img: require('../assets/images/game-title.png'), name:'955娱乐955娱乐955娱乐....' },
                { img: require('../assets/images/game-title.png'), name:'955娱乐955娱乐955娱乐....' },
                { img: require('../assets/images/game-title.png'), name:'955娱乐955娱乐955娱乐....' },
                { img: require('../assets/images/game-title.png'), name:'955娱乐955娱乐955娱乐....' },
                { img: require('../assets/images/game-title.png'), name:'955娱乐955娱乐955娱乐....' },
                { img: require('../assets/images/game-title.png'), name:'955娱乐955娱乐955娱乐....' },
                { img: require('../assets/images/game-title.png'), name:'955娱乐955娱乐955娱乐....' },
            ]
        }
    }
}
</script>



<style scoped>

@import '../assets/css/base.css';
@import '../assets/css/main.css';
@import '../assets/css/pager.css';

.banner{
    padding: 0;
}
.banner img{
    width: 100%;
    height: 100%;
}
</style>