<template>
    <div>
        <!-- 页面头部 -->
        <Header :nowIndex="6"></Header>

        <div class="content-bg">
            <div class="content main">
                <!-- 左半部分区域 -->
                <LeftNav :hotSoftware="hotSoftware" :updateSoftware="updateSoftware" :leftImg="leftImg"></LeftNav>

                <!-- 右半部分区域 -->
                <div class="content-right">
                    <div class="content-box bottom-box">
                        <div class="content-list">
                            <div class="content-list-title">中金计划</div>
                            <div class="logo-list">
                                <div v-for="(item, index) in officialRecommend" :key="index">
                                    <div class="logo-img">
                                        <img :src="item.img" width="100%">
                                    </div>
                                    <div class="logo-name">{{item.name}}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ranking bottom-box">
                        <div v-for="(item1, index1) in ranking" :key="index1">
                            <div class="ranking-title">
                                <div class="wy-title">
                                    <h2><span>{{item1.titleType}}</span>排行榜</h2>
                                </div>
                                <div class="ranking-date">
                                    <span class="weeks">周</span>
                                    <span class="month">月</span>
                                </div>
                            </div>
                            <div class="table-box">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>排名</th>
                                            <th>游戏</th>
                                            <th>类型</th>
                                            <th>升降</th>
                                        </tr>
                                        <tr v-for="(item2, index2) in item1.list" :key="index2">
                                            <td>{{item2.rank}}</td>
                                            <td>{{item2.name}}</td>
                                            <td>{{item2.type}}</td>
                                            <td v-if="item2.isAdd">↓</td>
                                            <td v-else>↑</td>
                                        </tr>
                                    </tbody>
                                </table>
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

            //官方推荐
            officialRecommend: [
                { img:require('../assets/images/955logo.png'), name:'955娱乐' },
                { img:require('../assets/images/955logo.png'), name:'955娱乐' },
                { img:require('../assets/images/955logo.png'), name:'955娱乐' },
                { img:require('../assets/images/955logo.png'), name:'955娱乐' },
                { img:require('../assets/images/955logo.png'), name:'955娱乐' },
                { img:require('../assets/images/955logo.png'), name:'955娱乐' },
            ],

            //排行榜
            ranking: [
                { titleType: '网游', 
                    list:[
                        { rank: 1, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 2, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 3, name:'传奇私服', type:'魔幻', isAdd: true },
                        { rank: 4, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 5, name:'传奇私服', type:'魔幻', isAdd: true },
                        { rank: 6, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 7, name:'传奇私服', type:'魔幻', isAdd: true },
                        { rank: 8, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 9, name:'传奇私服', type:'魔幻', isAdd: true },
                        { rank: 10, name:'传奇私服', type:'魔幻', isAdd: false },
                    ]
                },
                { titleType: '单机', 
                    list:[
                        { rank: 1, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 2, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 3, name:'传奇私服', type:'魔幻', isAdd: true },
                        { rank: 4, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 5, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 6, name:'传奇私服', type:'魔幻', isAdd: true },
                        { rank: 7, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 8, name:'传奇私服', type:'魔幻', isAdd: true },
                        { rank: 9, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 10, name:'传奇私服', type:'魔幻', isAdd: false },
                    ]
                },
                { titleType: '软件', 
                     list:[
                        { rank: 1, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 2, name:'传奇私服', type:'魔幻', isAdd: true },
                        { rank: 3, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 4, name:'传奇私服', type:'魔幻', isAdd: true },
                        { rank: 5, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 6, name:'传奇私服', type:'魔幻', isAdd: true },
                        { rank: 7, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 8, name:'传奇私服', type:'魔幻', isAdd: true },
                        { rank: 9, name:'传奇私服', type:'魔幻', isAdd: false },
                        { rank: 10, name:'传奇私服', type:'魔幻', isAdd: true },
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