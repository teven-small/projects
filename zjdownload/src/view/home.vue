<template>
    <div>

        <!-- 页面头部 -->
        <Header :nowIndex="0"></Header>

        <div class="main">
            <!-- 软件区域 -->
            <div class="software clear box_shadow margin_top_20">
                <div :class="['software_list','lt',item.type]" v-for="(item,index) in softwareData" :key="index">
                    <div class="software_item top_icon_model">
                        <div v-for="(item1, index1) in item.arr" :key="index1">
                            <img :src="item1.url" alt="">
                            <p>{{item1.title}}</p>
                        </div>
                    </div>
                </div>
                <!-- <div class="software_list two lt">
                    <div class="software_item top_icon_model">
                       
                        <div class="">
                            <img src="../assets/images/尝鲜.png" alt="">
                            <p>QQ音乐</p>
                        </div>
                    </div>
                </div>
                <div class="software_list three lt">
                    <div class="software_item top_icon_model">
                        <div class="">
                            <img src="../assets/images/尝鲜.png" alt="">
                            <p>QQ音乐</p>
                        </div>
                    </div>
                </div> -->
            </div>
    
            <!-- 广告轮播图 -->
            <div class="content">
                <div class="lt lt_box">
                    <div class="slideshow">
                        <!-- <ul class="banner_box">
                            <li v-for="(item,index) in bannerList" :key=index><img :src="item.src" alt=""></li>
                        </ul> -->
                        <elCarousel :interval="5000" arrow="hover" height="350px" indicator-position="right">
                            <elCarousel-item v-for="(item,index) in bannerList" :key="index">
                                <img :src="item.src" alt="" class="banner_img">
                            </elCarousel-item>
                        </elCarousel>
                        <!-- <div class="slide prev">  </div>
                        <div class="slide next">  </div>
                        <div class="notice">逆水寒：所有江湖偶遇，都是宿命的缘分</div>
                        <div class="dots">
                            <ul>
                                <li class="active"></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div> -->
                    </div>
    
                <div class="margin_top_20 clear">
                   
                   <div class="aside_soft lt">
                        <!-- 软件分类 -->
                        <div class="software_classify box_shadow">
                            <div class="sub_title">
                                <div class="lt">软件分类：</div>
                                <div class="rt more_btn" @click="moreClick">更多</div>
                            </div>
                            <div class="software_classify_item" v-for="(item,index) in softwareType.slice(0,10)" :key="index">
                                <!-- 判断 遍历 -->
                                <div v-if="index==0" class="s_item">
                                    <p><i></i>{{item.parentname}}</p>
                                    <div>
                                        <span v-for="(item1,index1) in item.chirdList.slice(0,5)" :key="index1" @click="jumpSoftware(index,index1)">{{item1.name.slice(0,4)}}</span>
                                        <span class="more_btn" @click="moreClick">更多</span>
                                    </div>
                                </div>
                                <div v-else-if="index==1" class="s_item">
                                    <p><i></i>{{item.parentname}}</p>
                                    <div>
                                        <span v-for="(item1,index1) in item.chirdList.slice(0,4)" :key="index1" @click="jumpSoftware(index,index1)">{{item1.name.slice(0,4)}}</span>
                                        <span class="more_btn" @click="moreClick">更多</span>
                                    </div>
                                </div>
                                <div v-else-if="index==8" class="s_item">
                                    <p><i></i>{{item.parentname}}</p>
                                    <div>
                                        <span v-for="(item1,index1) in item.chirdList.slice(0,4)" :key="index1" @click="jumpSoftware(index,index1)">{{item1.name.slice(0,4)}}</span>
                                        <span class="more_btn" @click="moreClick">更多</span>
                                    </div>
                                </div>
                                <div v-else-if="index==9" class="s_item">
                                    <p><i></i>{{item.parentname}}</p>
                                    <div>
                                        <span v-for="(item1,index1) in item.chirdList.slice(0,5)" :key="index1" @click="jumpSoftware(index,index1)">{{item1.name.slice(0,4)}}</span>
                                        <span class="more_btn" @click="moreClick">更多</span>
                                    </div>
                                </div>

                                <div v-else class="s_item">
                                    <p><i></i>{{item.parentname}}</p>
                                    <div>
                                        <span v-for="(item1,index1) in item.chirdList.slice(0,8)" :key="index1" @click="jumpSoftware(index,index1)">{{item1.name.slice(0,4)}}</span>
                                        <span class="more_btn" @click="moreClick">更多</span>
                                    </div>
                                </div>
                            </div>

                            <div v-show="softwareType.length>10" class="moreThan" @click="moreClick">更多软件分类</div>
                        </div>
                   </div>

    
                    <div class="center_content rt">
    
                        <!-- 热门头条 -->
                        <div class="hot_notice box_shadow">
                            <div class="software_notice top_icon_model">
                                <div v-for="(item,index) in hotData" :key="index" @click="handleClick(index)">
                                    <img :src="item.url" alt="">
                                    <p :class="{active:item.isActive==true}">{{item.title}}</p>
                                </div>
                            </div>
        
                            <!-- 头条 -->
                            <div class="headlines">
                                <div class="headlines_title">
                                    <img src="../assets/images/hot.jpg" alt="">
                                    <div>
                                        <span>夺宝头条官方正版</span>
                                        <i></i>
                                    </div>
                                </div>
        
                                <div class="headlines_content">
                                    <div v-for="(item,index) in headlines[headIndex].list" :key="index">
                                        <span class="discribe">{{item.way}}</span>
                                        <span class="software_name text_hide">{{item.name}}</span>
                                        <span class="software_time rt">{{item.time}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <!-- 热门游戏 -->
                        <div class="hot_game top_icon_model box_shadow padding_20 margin_top_20">
                            <p class="recommended_title" style="margin-bottom:36px">热门手游</p>
                            <div>
                                <div class="game_item" v-for="(item, index) in hotGame" :key="index">
                                    <img :src="item.url" alt="">
                                    <p>{{item.name}}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                   </div>
                </div>
    
                <div class="rt rt_box">
                    <!-- 今日推荐 -->
                    <div class="toDay_news box_shadow padding_20">
                        <div class="recommended_title">今日推荐</div>
                        <div class="left_img_model" v-for="(item, index) in todayRecommendation" :key="index">
                            <img class="" :src="item.img" alt="">
                            <div class=" explain_box">
                                <p>{{item.name}}</p>
                                <p class="explain ">{{item.explain}}</p>
                            </div>
                            <div class="downLoad ">立即下载</div>
                        </div>
                    </div>
    
                    <!-- 最近更新 -->
                    <div class="recent_updates box_shadow margin_top_20" style="margin-top: 26px;">
                        <p class="recommended_title">最近更新</p>

                        <div :class="['recent_updates_item',{active:item.isActive==true}]" v-for="(item,index) in recentUpdates" :key="index" 
                        @mouseenter="recentUpdatesShow(index)" @mouseleave="recentUpdatesShowHide(index)"> 
                            <img :src="item.url" alt="">
                           
                                <div class="software_down" v-show="item.isActive">
                                    <p class="software_detail softwareName text_hide" title="QQ浏览器2019官方最新版">{{item.name}}</p>
                                    <div class="details_box clear">
                                        <div class="lt">
                                            <p class="software_size">大小： {{item.size}}</p>
                                            <p>类型： {{item.type}}</p>
                                        </div>
                                        <div class="rt now_down">立即下载</div>
                                    </div>
                                </div>
                            <!-- <transition name="slide-fade"> -->
                           
                            <div class="software_evaluate" v-show="!item.isActive">
                                <p :title="item.name" class="softwareName text_hide">{{item.name}}</p>
                                <p>
                                    <i class="start start_one"></i>
                                    <i class="start start_one"></i>
                                    <i class="start start_one"></i>
                                    <i class="start start_half"></i>
                                </p>
                            </div>
                             <!-- </transition> -->
                        </div>

                    </div>
    
                    <!-- 本周下载排行榜 -->
                    <div class="download_ranking box_shadow padding_20 margin_top_20">
                        <div class="sub_title">
                            <div class="lt">本周下载排行</div>
                            <div class="rt more_btn">更多</div>
                        </div>
                        <div :class="['download_item', {active:item.isActive==true}]" v-for="(item, index) in weekDownLoad" :key="index" 
                        @mouseenter="downloadMouseEnter(index)" @mouseleave="downloadMouseLeave(index)">
                            <img :src="item.rankingIcon" alt="" class="ranking">
                            <img :src="item.nameIcon" alt="" class="soft_icon">
                            <span :title="item.name" class="text_hide">{{item.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        
            <!-- 推荐下载 -->
            <div class="margin_top_20 box_shadow margin_bottom_20">
                
                <div class="recommend_down padding_20">
                    <div class="lt">
                        <el-tabs v-model="activeName">
                            <el-tab-pane :label="item1.title" :name="item1.subName" v-for="(item1, index1) in recommendDown" 
                            :key="index1">
                                <div class="recommend_down_icon margin_top_20">
                                    <ul>
                                        <li v-for="(item2,index2) in item1.list" :key="index2">
                                            <img :src="item2.url" alt="">
                                            <p>{{item2.name}}</p>
                                        </li>
                                    </ul>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                    <span class="rt more_btn">更多</span>
                </div>
                
        
                <div class="software_box">
                    <ul>
                        <li v-for="(item1, index1) in softwareList" :key="index1">
                            <div class="category_name">{{item1.type}}</div>
                            <dl>
                                <dd v-for="(item2, index2) in item1.arr" :key="index2">
                                    <img :src="item2.img" alt="">
                                    <span>{{item2.softwareName}}</span>
                                </dd>
                            </dl>
                        </li>
                    </ul>
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
            
            headIndex: 0,              //头条选中下标

            activeName: 'first',     //页面底部软件推荐默认选中第一个

            //轮播图
            bannerList: [
                { src: require('../assets/images/banner1.jpg'), href: "" },
                { src: require('../assets/images/banner2.jpg'), href: "" },
                { src: require('../assets/images/banner3.jpg'), href: "" },
            ],

            //页面顶部软件推荐
            softwareData:[
                { type: 'one', arr:[
                    {url: require('../assets/images/尝鲜.png'), title:'QQ音乐'},
                    {url: require('../assets/images/尝鲜.png'), title:'QQ音乐'},
                    {url: require('../assets/images/尝鲜.png'), title:'QQ音乐'},
                    {url: require('../assets/images/尝鲜.png'), title:'QQ音乐'},
                    {url: require('../assets/images/尝鲜.png'), title:'QQ音乐'},
                    {url: require('../assets/images/尝鲜.png'), title:'QQ音乐'},
                    {url: require('../assets/images/尝鲜.png'), title:'QQ音乐'},
                    {url: require('../assets/images/尝鲜.png'), title:'QQ音乐'}
                ]},
                { type: 'two', arr:[
                    {url: require('../assets/images/攻略.png'), title:'手机游戏'},
                    {url: require('../assets/images/攻略.png'), title:'手机游戏'},
                    {url: require('../assets/images/攻略.png'), title:'手机游戏'},
                    {url: require('../assets/images/攻略.png'), title:'手机游戏'},
                    {url: require('../assets/images/攻略.png'), title:'手机游戏'},
                    {url: require('../assets/images/攻略.png'), title:'手机游戏'},
                    {url: require('../assets/images/攻略.png'), title:'手机游戏'},
                    {url: require('../assets/images/攻略.png'), title:'手机游戏'}
                ]},
                { type: 'three', arr:[
                    {url: require('../assets/images/精品.png'), title:'PC游戏'},
                    {url: require('../assets/images/精品.png'), title:'PC游戏'},
                    {url: require('../assets/images/精品.png'), title:'PC游戏'},
                    {url: require('../assets/images/精品.png'), title:'PC游戏'},
                    {url: require('../assets/images/精品.png'), title:'PC游戏'},
                    {url: require('../assets/images/精品.png'), title:'PC游戏'},
                    {url: require('../assets/images/精品.png'), title:'PC游戏'},
                    {url: require('../assets/images/精品.png'), title:'PC游戏'},
                ]},
            ],

            // 软件分类
            softwareType:[ ],

            // 热门数据
            hotData:[
                {title:'精品', url: require('../assets/images/精品.png'), isActive:true},
                {title:'精品', url: require('../assets/images/精品.png'), isActive:false},
                {title:'精品', url: require('../assets/images/精品.png'), isActive:false},
                {title:'精品', url: require('../assets/images/精品.png'), isActive:false},
            ],

            // 头条数据
            headlines:[
                {list: [
                    {name:'360极速浏览器绿色版', way:'网路浏览', time:'2019-05'},
                    {name:'360极速浏览器绿色版', way:'网路浏览', time:'2019-05'},
                    {name:'360极速浏览器绿色版', way:'网路浏览', time:'2019-05'},
                    {name:'360极速浏览器绿色版', way:'网路浏览', time:'2019-05'},
                    {name:'360极速浏览器绿色版', way:'网路浏览', time:'2019-05'},
                    {name:'360极速浏览器绿色版', way:'网路浏览', time:'2019-05'},
                    {name:'360极速浏览器绿色版', way:'网路浏览', time:'2019-05'},
                    {name:'360极速浏览器绿色版', way:'网路浏览', time:'2019-05'},
                    {name:'360极速浏览器绿色版', way:'网路浏览', time:'2019-05'},
                    {name:'360极速浏览器绿色版', way:'网路浏览', time:'2019-05'},
                ]},
                {list: [
                    {name:'腾讯视频2019官方最新版', way:'腾讯视频', time:'2018-05'},
                    {name:'腾讯视频2019官方最新版', way:'腾讯视频', time:'2018-05'},
                    {name:'腾讯视频2019官方最新版', way:'腾讯视频', time:'2018-05'},
                    {name:'腾讯视频2019官方最新版', way:'腾讯视频', time:'2018-05'},
                    {name:'腾讯视频2019官方最新版', way:'腾讯视频', time:'2018-05'},
                    {name:'腾讯视频2019官方最新版', way:'腾讯视频', time:'2018-05'},
                    {name:'腾讯视频2019官方最新版', way:'腾讯视频', time:'2018-05'},
                    {name:'腾讯视频2019官方最新版', way:'腾讯视频', time:'2018-05'},
                    {name:'腾讯视频2019官方最新版', way:'腾讯视频', time:'2018-05'},
                    {name:'腾讯视频2019官方最新版', way:'腾讯视频', time:'2018-05'},
                ]},
                {list: [
                    {name:'爱奇艺视频2019官方最新版', way:'爱奇艺视频', time:'2019-05'},
                    {name:'爱奇艺视频2019官方最新版', way:'爱奇艺视频', time:'2019-05'},
                    {name:'爱奇艺视频2019官方最新版', way:'爱奇艺视频', time:'2019-05'},
                    {name:'爱奇艺视频2019官方最新版', way:'爱奇艺视频', time:'2019-05'},
                    {name:'爱奇艺视频2019官方最新版', way:'爱奇艺视频', time:'2019-05'},
                    {name:'爱奇艺视频2019官方最新版', way:'爱奇艺视频', time:'2019-05'},
                    {name:'爱奇艺视频2019官方最新版', way:'爱奇艺视频', time:'2019-05'},
                    {name:'爱奇艺视频2019官方最新版', way:'爱奇艺视频', time:'2019-05'},
                    {name:'爱奇艺视频2019官方最新版', way:'爱奇艺视频', time:'2019-05'},
                    {name:'爱奇艺视频2019官方最新版', way:'爱奇艺视频', time:'2019-05'},
                ]},
                {list: [
                    {name:'QQ浏览器2019官方最新版', way:'QQ浏览器', time:'2018-05'},
                    {name:'QQ浏览器2019官方最新版', way:'QQ浏览器', time:'2018-05'},
                    {name:'QQ浏览器2019官方最新版', way:'QQ浏览器', time:'2018-05'},
                    {name:'QQ浏览器2019官方最新版', way:'QQ浏览器', time:'2018-05'},
                    {name:'QQ浏览器2019官方最新版', way:'QQ浏览器', time:'2018-05'},
                    {name:'QQ浏览器2019官方最新版', way:'QQ浏览器', time:'2018-05'},
                    {name:'QQ浏览器2019官方最新版', way:'QQ浏览器', time:'2018-05'},
                    {name:'QQ浏览器2019官方最新版', way:'QQ浏览器', time:'2018-05'},
                    {name:'QQ浏览器2019官方最新版', way:'QQ浏览器', time:'2018-05'},
                    {name:'QQ浏览器2019官方最新版', way:'QQ浏览器', time:'2018-05'},
                ]}
            ],

            //热门游戏数据
            hotGame:[
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')},
                {name:'消愁者联盟', url: require('../assets/images/手游.png')}
            ],

            //今日推荐
            todayRecommendation:[
                {name:'支付宝', explain:'支付就用支付宝', img: require('../assets/images/zfb.jpg')},
                {name:'支付宝', explain:'支付就用支付宝', img: require('../assets/images/zfb.jpg')},
                {name:'支付宝', explain:'支付就用支付宝', img: require('../assets/images/zfb.jpg')},
            ],

            //最近更新
            recentUpdates:[
                {url:require('../assets/images/攻略.png'), isActive:true, name:'QQ浏览器2019官方最新版', appraise:'1星', size:'300M',type:'杀毒软件'},
                {url:require('../assets/images/攻略.png'), isActive:false, name:'爱奇艺视频2019官方最新版', appraise:'2星',size:'250M',type:'杀毒软件'},
                {url:require('../assets/images/攻略.png'), isActive:false, name:'腾讯视频2019官方最新版', appraise:'3星', size:'6230M',type:'杀毒软件'},
                {url:require('../assets/images/攻略.png'), isActive:false, name:'腾讯视频2019官方最新版', appraise:'3星', size:'350M',type:'杀毒软件'},
                {url:require('../assets/images/攻略.png'), isActive:false, name:'腾讯视频2019官方最新版', appraise:'3星', size:'1560M',type:'杀毒软件'},
            ],

            //本周下载
            weekDownLoad: [
                
                {id: 0, rankingIcon: require('../assets/images/1.png'), isActive:false, nameIcon: require('../assets/images/攻略.png'), name: '王者荣耀2019最新版'},
                {id: 1, rankingIcon: require('../assets/images/2.png'), isActive:false, nameIcon: require('../assets/images/攻略.png'), name: '王者荣耀2019最新版'},
                {id: 2, rankingIcon: require('../assets/images/3.png'), isActive:false, nameIcon: require('../assets/images/攻略.png'), name: '王者荣耀2019最新版'},
                {id: 3, rankingIcon: require('../assets/images/4.png'), isActive:false, nameIcon: require('../assets/images/攻略.png'), name: '王者荣耀2019最新版'},
                {id: 4, rankingIcon: require('../assets/images/5.png'), isActive:false, nameIcon: require('../assets/images/攻略.png'), name: '王者荣耀2019最新版'},
                {id: 5, rankingIcon: require('../assets/images/6.png'), isActive:false, nameIcon: require('../assets/images/攻略.png'), name: '王者荣耀2019最新版'},
                {id: 6, rankingIcon: require('../assets/images/7.png'), isActive:false, nameIcon: require('../assets/images/攻略.png'), name: '王者荣耀2019最新版'},
                {id: 7, rankingIcon: require('../assets/images/8.png'), isActive:false, nameIcon: require('../assets/images/攻略.png'), name: '王者荣耀2019最新版'},
                {id: 8, rankingIcon: require('../assets/images/9.png'), isActive:false, nameIcon: require('../assets/images/攻略.png'), name: '王者荣耀2019最新版'},
                {id: 9, rankingIcon: require('../assets/images/10.png'), isActive:false, nameIcon: require('../assets/images/攻略.png'), name: '王者荣耀2019最新版'},
            ],
            

            // 推荐下载
            recommendDown:[
                {title:'电脑下载', subName: 'first', list:[
                    { name:'精品', url:require('../assets/images/精品.png')},
                    { name:'精品', url:require('../assets/images/精品.png')},
                    { name:'精品', url:require('../assets/images/精品.png')},
                    { name:'精品', url:require('../assets/images/精品.png')},
                    { name:'精品', url:require('../assets/images/精品.png')},
                    { name:'精品', url:require('../assets/images/精品.png')},
                    { name:'精品', url:require('../assets/images/精品.png')},
                    { name:'精品', url:require('../assets/images/精品.png')},
                    { name:'精品', url:require('../assets/images/精品.png')},
                ]},
                {title:'手机下载', subName: 'second', list:[
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                ]},
                {title:'手机下载', subName: 'three', list:[
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                    { name:'精品', url:require('../assets/images/攻略.png')},
                ]}
            ],
            softwareList: [
                { type: '安全软件', arr:[
                    {img: require('../assets/images/360.png'), softwareName:'360安全卫士'},
                    {img: require('../assets/images/baidu.png'), softwareName:'百度卫士'},
                    {img: require('../assets/images/diannao.png'), softwareName:'腾讯电脑管家'},
                    {img: require('../assets/images/jinshan.png'), softwareName:'金山毒霸'},
                    {img: require('../assets/images/360.png'), softwareName:'卡巴斯基免费版'},
                    {img: require('../assets/images/360.png'), softwareName:'瑞星杀毒软件'}
                    ]
                },
                { type: '系统工具', arr:[
                    {img: require('../assets/images/360.png'), softwareName:'360安全卫士'},
                    {img: require('../assets/images/baidu.png'), softwareName:'百度卫士'},
                    {img: require('../assets/images/diannao.png'), softwareName:'腾讯电脑管家'},
                    {img: require('../assets/images/jinshan.png'), softwareName:'金山毒霸'},
                    {img: require('../assets/images/360.png'), softwareName:'卡巴斯基免费版'},
                    {img: require('../assets/images/360.png'), softwareName:'瑞星杀毒软件'}
                    ]
                },
                { type: '网页浏览', arr:[
                    {img: require('../assets/images/360.png'), softwareName:'360安全卫士'},
                    {img: require('../assets/images/baidu.png'), softwareName:'百度卫士'},
                    {img: require('../assets/images/diannao.png'), softwareName:'腾讯电脑管家'},
                    {img: require('../assets/images/jinshan.png'), softwareName:'金山毒霸'},
                    {img: require('../assets/images/360.png'), softwareName:'卡巴斯基免费版'},
                    {img: require('../assets/images/360.png'), softwareName:'瑞星杀毒软件'}
                    ]
                },
                { type: '聊天社交', arr:[
                    {img: require('../assets/images/360.png'), softwareName:'360安全卫士'},
                    {img: require('../assets/images/baidu.png'), softwareName:'百度卫士'},
                    {img: require('../assets/images/diannao.png'), softwareName:'腾讯电脑管家'},
                    {img: require('../assets/images/jinshan.png'), softwareName:'金山毒霸'},
                    {img: require('../assets/images/360.png'), softwareName:'卡巴斯基免费版'},
                    {img: require('../assets/images/360.png'), softwareName:'瑞星杀毒软件'}
                    ]
                },
                { type: '图文处理', arr:[
                    {img: require('../assets/images/360.png'), softwareName:'360安全卫士'},
                    {img: require('../assets/images/baidu.png'), softwareName:'百度卫士'},
                    {img: require('../assets/images/diannao.png'), softwareName:'腾讯电脑管家'},
                    {img: require('../assets/images/jinshan.png'), softwareName:'金山毒霸'},
                    {img: require('../assets/images/360.png'), softwareName:'卡巴斯基免费版'},
                    {img: require('../assets/images/360.png'), softwareName:'瑞星杀毒软件'}
                    ]
                },
                { type: '文字处理', arr:[
                    {img: require('../assets/images/360.png'), softwareName:'360安全卫士'},
                    {img: require('../assets/images/baidu.png'), softwareName:'百度卫士'},
                    {img: require('../assets/images/diannao.png'), softwareName:'腾讯电脑管家'},
                    {img: require('../assets/images/jinshan.png'), softwareName:'金山毒霸'},
                    {img: require('../assets/images/360.png'), softwareName:'卡巴斯基免费版'},
                    {img: require('../assets/images/360.png'), softwareName:'瑞星杀毒软件'}
                    ]
                }
            ]
        }
    },
    methods:{
        //最近更新鼠标进入
        recentUpdatesShow(index){
            this.recentUpdates.forEach(item => {
                item.isActive = false
                item.isShow = true
            })
            this.recentUpdates[index].isActive = true;
            this.recentUpdates[index].isShow = false;
        },

        //最近更新鼠标离开
        recentUpdatesShowHide(index){
            this.recentUpdates[index].isActive = false;
            this.recentUpdates[index].isShow = true;
        },

        // changeDown(index){
        //     this.recommend_down_title.forEach(item => {
        //         item.isActive = false;
        //     })
        //     this.recommend_down_title[index].isActive=true
        //     this.recommend_down = [
        //         { name:'精品', url:require('../assets/images/攻略.png')},
        //         { name:'精品', url:require('../assets/images/攻略.png')}
        //     ]
        // },

        //下载排行榜鼠标进入
        downloadMouseEnter(index){
            this.weekDownLoad[index].isActive =  true
        },

         //下载排行榜鼠标离开
        downloadMouseLeave(index){
            this.weekDownLoad[index].isActive =  false
        },

        //跳转
        moreClick(){
            this.$router.replace({name:'softwareHome'})
        },

        //头条切换
        handleClick(index){

            this.hotData.forEach( item => {
                item.isActive = false
            })
            this.hotData[index].isActive = true
            this.headIndex = index
        },

        //跳转到软件列表
        jumpSoftware(index,index1){

            var obj = this.softwareType[index].chirdList[index1],
                
                par={
                    type: obj.device,
                    parent_id: index,
                    chirdren_id: index1,
                    typeId: obj.id
                }
            if(obj){

                this.$store.commit('getCrumbs', this.$route.meta.breadcrumb)        //软件详情面包屑

                this.$store.commit('getParameter', par)                             //软件列表 传参

                this.$store.commit('getNavActive', 0)                               //导航栏选中

                //跳转软件下载并传参
                this.$router.push({ name: 'software' })
            }
            
        },

        //获取类别数据
        getSoftwareType(){
            var params = {
                device: 'windows'   
            }

            //传参获取windo数据
            this.$api.home(params).then((res) => {
            
                console.log(res.data)

                if(res.data.status == 200){

                    if(res.data.data.length <= 0){
                        this.$notify.warning({
                            title: '温馨提示：',
                            message: '页面加载异常，请刷新页面！！！',
                            offset: 300
                        });
                    }else{

                        //存贮数据到store中
                        this.$store.commit('getSoftwareType',res.data.data)
                        
                        this.softwareType = res.data.data
                    }
                
                }else{
                    this.$notify.error({
                        title: '温馨提示：',
                        message: '数据获取异常！！！',
                        offset: 300
                    });
                }
                
            }).catch((error) => {

                console.log('获取失败！', error);

                 this.$notify.error({
                    title: '温馨提示：',
                    message: '数据获取失败！！！',
                    offset: 300
                });
            });
        }
    },
    created(){
        //获取类别数据
        this.getSoftwareType();
    }

    
}
</script>


<style scoped>

@import '../assets/css/default.css';
@import '../assets/css/common.css';
.banner_img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.moreThan{
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
}
</style>
