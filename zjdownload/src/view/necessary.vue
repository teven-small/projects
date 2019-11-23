<template>
    <div>

        <!-- 页面头部 -->
        <Header :nowIndex="5"></Header>

        <div class="content-bg">
            <div class="content main">
                <!-- 左半部分区域 -->
                <LeftNav :hotSoftware="hotSoftware" :updateSoftware="updateSoftware" :leftImg="leftImg"></LeftNav>

                <!-- 右半部分区域 -->
                <div class="content-right">
                    <div class="content-box bottom-box" v-for="(item1, index1) in installedNecessary" :key="index1">
                        <div class="content-list">
                            <div class="content-list-title">{{item1.title}}</div>
                            <div class="logo-list">
                                <div v-for="(item2, index2) in item1.list" :key="index2">
                                    <div class="logo-img">
                                        <img :src="item2.img" width="100%">
                                    </div>
                                    <div class="logo-name">{{item2.name}} </div>
                                </div>
                            </div>
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
            //左边导航栏图片
            leftImg: require('../assets/images/necessary.png'),

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

            //装机必备
            installedNecessary:[
                { title: '安全杀毒', 
                    list:[
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                    ]
                },
                { title: '聊天社交', 
                    list:[
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                    ]
                },
                { title: '网页浏览', 
                    list:[
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                    ]
                },
                { title: '输入法', 
                    list:[
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                    ]
                },
                { title: '图片处理', 
                    list:[
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                    ]
                },
                { title: '文字处理', 
                    list:[
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                        { img: require('../assets/images/955logo.png'), name:'360安全卫士' },
                    ]
                }
            ]
        }
    }
}
</script>


<style scoped>

@import '../assets/css/base.css';
@import '../assets/css/main.css';
@import '../assets/css/pager.css';

</style>
