<template>
    <div id="dc_apple_down">

        <!-- 页面头部 -->
        <Header :nowIndex="3"></Header>

        <div class="main clear ">

            <div class="lt lt_box box_shadow margin_top_20">

                <div class="game_top">
                    <!-- 游戏类别 -->
                    <div class="game_type">
                        <div :class="{active:index==gameType.isActive}" v-for="(item, index) in gameType.list" :key="index"
                            @click="changeGameType(index)">
                            <span class="game_btn">{{item.name}}</span>
                        </div>
                    </div>

                    <!-- 游戏类别子类 -->
                    <div class="game_type_child">
                        <div :class="['game_btn', {active:index == gameChildrenType[gameIndex].isActive}]" @click="changeChildren(index)"
                        v-for="(item, index) in gameChildrenType[gameIndex].list" :key="index">{{item.name}}</div>
                    </div>
                </div>

                <!-- 游戏列表 -->
                <div class="game_list">
                    <div class="padding_left_14 margin_top_40" v-for="(item, index) in gameList" :key="index">
                        <div class="apple_icon"><img :src="item.img" alt=""></div>
                        <div class="apple_content">
                            <div class="apple_title">
                                <b>{{item.name}}</b>
                                <i></i>
                                <span class="color_B2">更新时间： {{item.time}}</span>
                            </div>
                            <div class="apple_describe color_B2">{{item.describe}}</div>
                            <div class="version">
                                <span>版本：</span>
                                <p>
                                    <i class="version_pc"></i><b>PC版</b>
                                    <i class="version_az"></i><b>PC版</b>
                                    <i class="version_apple"></i><b>PC版</b>
                                    <i class="version_mac"></i><b>PC版</b>
                                    <i class="version_ipad"></i><b>PC版</b>
                                </p>
                            </div>
                        </div>
                        <div class="apple_down down_btn">立即下载</div>
                    </div>

                    <!-- 分页 -->
                    <div class="padding_20 margin_top_40">
                        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                    </div>

                </div>
            </div>

           
            <div class="rt rt_box">

                <!-- 热门推荐 -->
                <div class="apple_recommend box_shadow margin_top_20">
                    <p class="side_title">热门推荐</p>
                    <div class="top_icon_model">
                        <div v-for="(item, index) in appleRecommend" :key="index">
                            <img :src="item.img" :alt="item.name">
                            <p>{{item.name}}</p>
                        </div>
                    </div>
                </div>

                <!-- 下载排行 -->
                <div class="apple_ranking box_shadow margin_top_20">
                    <p class="side_title">下载排行</p>
                    <div class="apple_ranking_list">
                        <div class="apple_ranking_item" v-for="(item, index) in appleRanking" :key="index">
                            <span>{{item.id}}</span>
                            <img :src="item.img" :alt="item.name">
                            <div>
                                <p class="name" :title="item.name">{{item.name}}</p>
                                <p class="color_B2">{{item.version}}</p>
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

export default {
    components:{
        Header,
        Footer
    },
    data(){
        return{

            //游戏类型
            gameType:{
                isActive: 0, list: [
                    {id: 0, name: 'IOS游戏'},
                    {id: 1, name: 'IPAD游戏'},
                    {id: 2, name: 'MAC游戏'},
                ]
            },

            //下标
            gameIndex: 0,

            //游戏子类类型
            gameChildrenType: [
                {isActive: 0, list: [
                    {id: 0, name: 'IOS游戏'},
                    {id: 1, name: 'IOS游戏'},
                    {id: 2, name: 'IOS游戏'},
                ]},
                {isActive: 0, list: [
                    {id: 0, name: 'IPAD游戏'},
                    {id: 1, name: 'IPAD游戏'},
                    {id: 2, name: 'IPAD游戏'},
                ]},
                {isActive: 0, list: [
                    {id: 0, name: 'MAC游戏'},
                    {id: 1, name: 'MAC游戏'},
                    {id: 2, name: 'MAC游戏'},
                    {id: 0, name: 'MAC游戏'},
                    {id: 1, name: 'MAC游戏'},
                    {id: 2, name: 'MAC游戏'},
                    {id: 0, name: 'MAC游戏'},
                    {id: 1, name: 'MAC游戏'},
                    {id: 2, name: 'MAC游戏'},
                    {id: 0, name: 'MAC游戏'},
                    {id: 1, name: 'MAC游戏'},
                    {id: 2, name: 'MAC游戏'},
                    {id: 0, name: 'MAC游戏'},
                    {id: 1, name: 'MAC游戏'},
                    {id: 2, name: 'MAC游戏'},
                    {id: 0, name: 'MAC游戏'},
                    {id: 1, name: 'MAC游戏'},
                    {id: 2, name: 'MAC游戏'},
                ]},
            ],

            //推荐
            appleRecommend:[
                {id: 0, img: require('../assets/images/攻略.png'), name: '支护APP'},
                {id: 0, img: require('../assets/images/攻略.png'), name: '支护APP'},
                {id: 0, img: require('../assets/images/攻略.png'), name: '支护APP'},
                {id: 0, img: require('../assets/images/攻略.png'), name: '支护APP'}
            ],

            //下载排行
            appleRanking:[
                {id: 1, img: require('../assets/images/攻略.png'), name: '支护APP', version: 'V.50.30'},
                {id: 2, img: require('../assets/images/攻略.png'), name: '海马苹果助手iphone版', version: 'V.50.30'},
                {id: 3, img: require('../assets/images/攻略.png'), name: '支护APP', version: 'V.50.30'},
                {id: 4, img: require('../assets/images/攻略.png'), name: '支护APP', version: 'V.50.30'},
            ],

            //列表数据
            gameList: [
                {id: 1, img: require('../assets/images/攻略.png'), name: '芒果TV极速版', time: '2019-03-24', describe: '芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间'},
                {id: 2, img: require('../assets/images/攻略.png'), name: '芒果TV极速版', time: '2019-03-24', describe: '芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间'},
                {id: 3, img: require('../assets/images/攻略.png'), name: '芒果TV极速版', time: '2019-03-24', describe: '芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间'},
                {id: 4, img: require('../assets/images/攻略.png'), name: '芒果TV极速版', time: '2019-03-24', describe: '芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间'},
                {id: 5, img: require('../assets/images/攻略.png'), name: '芒果TV极速版', time: '2019-03-24', describe: '芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间芒果TV技术版更新时间'},
            ]
        }
    },
    methods:{
        //游戏类别点击
        changeGameType(index){

            this.gameType.isActive = index
            this.gameIndex = index
        },

        //游戏子列表点击
        changeChildren(index){
            this.gameChildrenType[this.gameIndex].isActive = index
        }
    }
}
</script>



<style scoped>

@import '../assets/css/default.css';
@import '../assets/css/common.css';

</style>
