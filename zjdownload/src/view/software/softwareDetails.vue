<template>
   <div id="dc_details">

        <!-- 页面头部 -->
        <Header :nowIndex="curIndex"></Header>

        <div class="main">
             <!-- <div class="position_title margin_top_20">您的位置：首页 > 软件下载 > 视频软件</div> -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: item.path }" v-for="(item, index) in crumbs" :key="index">{{item.name}}</el-breadcrumb-item>
                <el-breadcrumb-item >{{softwareObj.name}}</el-breadcrumb-item>
            </el-breadcrumb>

            <div class="content_details">
                <div class="lt lt_box">
                    <!-- 软件介绍-->
                    <div class="box_shadow padding_20 margin_top_20">
                        <div class="details_box">
                            <div class="details_box_lt" v-bind="softwareObj">
                                <h1>{{softwareObj.name+ ' ' +softwareObj.version}}</h1>
                                <div class="details_item">
                                    <p><span>软件大小：</span><span>{{softwareObj.size}}</span></p>
                                    <p><span>更新时间：</span><span>{{softwareObj.newTime==undefined?'':softwareObj.newTime.slice(0,7)}}</span></p>
                                </div>
                                <div class="details_item">
                                    <p><span>软件授权：</span><span>{{softwareObj.shouquan}}</span></p>
                                    <p><span>运行环境：</span><span>{{softwareObj.stage}}</span></p>
                                </div>
                                <div class="details_item">
                                    <p><span>软件等级：</span>
                                        <span>
                                            <i class="start start_one" v-for="(i, index) in star" :key="index"></i>
                                            <i class="start start_half" v-show="isShowHalfStart"></i>
                                        </span>
                                    </p>
                                    <p><span>官网主页：</span><span>{{softwareObj.gw}}</span></p>
                                </div>
                                <div class="details_item">
                                    <p class="salfty"><span>安全检测：</span>
                                        <span class="baidu_salety"><i class="icon_baidu"></i>百多安全卫士</span>
                                        <span class="baidu_salety"><i class="icon_360"></i>360通过</span>
                                        <span class="baidu_salety"><i class="icon_tencent"></i>腾讯通过</span>
                                        <span class="baidu_salety"><i class="icon_jinshan"></i>金山通过</span>
                                    </p>
                                </div>
                                <div class="details_item share">
                                    <p><span>分享到：</span>
                                        <i class="qq"></i>
                                        <i class="xinlang"></i>
                                        <i class="c1"></i>
                                        <i class="c2"></i>
                                        <i class="weixin"></i>
                                        <i class="c3"></i>
                                    </p>
                                </div>
                            </div>
                            <div class="details_box_rt">
                                <div class="down_local_btn"><a href="#downlowd"></a></div>
                                <!-- <div class="down_fast_btn"></div> -->
                            </div>
                        </div>
                    </div>

                    <!-- 相关推荐 -->
                    <div class="software_introduction_box margin_top_20 box_shadow padding_20">
                        <p class="_title_"><span>软件介绍</span></p>
                        <div class="software_introduction">
                            <p v-html="softwareObj.jieshao"></p>
                        </div>
                        <!-- 发展历史-->
                        <div class="software_history">
                            <p class="software_history_title">发展历史</p>
                            <div class="software_history_discribe">
                                <p>在PC段，PPS影音是大部分喜欢看爱奇艺的朋友必备软件，不了在家啊祭祀的家属就嗲谁记得我可敬的</p>
                                <div>
                                    <img src="" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 软件下载区域-->
                    <div class="box_shadow margin_top_20">
                        <p class="_title">爱奇艺影音官方PC版下载地址</p>
                        <div class="down_area padding_20">
                            <div class="down_area_lt">
                                <!-- <div class="down_box">
                                    <p>高速下载地址</p>
                                    <div class="fast_down_item inline_box">
                                        <div><span>电信远程下载1</span></div>
                                        <div><span>电信远程下载2</span></div>
                                        <div><span>电信远程下载3</span></div>
                                        <div><span>电信远程下载4</span></div>
                                    </div>
                                </div> -->
                                <div class="down_box margin_top_20">
                                    <p><a name="downlowd">普通下载地址</a></p>
                                    <div class="ordinary_down_item inline_box">
                                        <div v-for="(item,index) in addressArr" :key="index" @click="downLoadSoftware(index)">{{item.address}}</div>
                                        <!-- <div>上海电信下载</div>
                                        <div>上海电信下载</div>s
                                        <div>上海电信下载</div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="down_area_rt">
                                <div>广告</div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- 相关推荐 -->
                <div class="rt rt_box">
                    <div class="box_shadow inline_box about_recommend margin_top_20 padding_10">
                        <p class="_title">相关推荐</p>
                        <div>
                            <div class="about_recommend_item" v-for="(item, index) in aboutRecommend" :key="index">
                                <img :src="item.img" alt="">
                                <span class="text_hide">{{item.name}}</span>
                            </div>
                        </div>
                    </div>

                    <!-- 分类导航 -->
                    <div class="box_shadow margin_top_20 padding_10">
                        <p class="_title">分类导航</p>
                        <div class="guide inline_box padding_10">
                            <div v-for="(item, index) in guide" :key="index">{{item.typeName}}</div>
                        </div>
                    </div>
                    
                    <!-- 热门下载排行榜-->
                    <div class="download_ranking box_shadow padding_20 margin_top_20">
                        <p class="_title">热门下载排行榜</p>
                        <div class="download_item" v-for="(item, index) in hotDownRanking" :key="index">
                            <img :src="item.rankIcon" class="ranking">
                            <img :src="item.rankSoftware" class="soft_icon">
                            <span>{{item.name}}</span>
                        </div>
                    </div>

                    <!-- 手游推荐 -->  
                    <div class="mobile_game_recommend box_shadow padding_20 margin_top_20">
                        <p class="_title">手游推荐</p>
                        <div class="top_icon_model hot_software">
                            <div v-for="(item, index) in mobileGame" :key="index">
                                <img :src="item.softwareImg" alt="">
                                <p>{{item.name}}</p>
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
//软件下载地址
import AddressList from '../../assets/js/SoftLinkType.js'

import Header from '../../components/head'
import Footer from '../../components/foot'

export default {
    components:{
        Header,
        Footer
    },
    data(){
        return{
            softwareObj:{},                     //详情对象

            star: null,                         //显示评价一颗星

            isShowHalfStart: null,              //显示评价半颗星

            addressArr:[],                      //下载地址数组

            downUrl:'',                         //下载地址

            crumbs:[],                          //面包屑

            curIndex:null,                      //导航栏选中
            //相关推荐
            aboutRecommend:[
                {name:'皮皮影视播放器', img: require('../../assets/images/zfb.jpg')},
                {name:'皮皮影视播放器', img: require('../../assets/images/zfb.jpg')},
                {name:'皮皮影视播放器', img: require('../../assets/images/zfb.jpg')},
                {name:'皮皮影视播放器', img: require('../../assets/images/zfb.jpg')},
                {name:'皮皮影视播放器', img: require('../../assets/images/zfb.jpg')},
                {name:'皮皮影视播放器', img: require('../../assets/images/zfb.jpg')},
                {name:'皮皮影视播放器', img: require('../../assets/images/zfb.jpg')},
                {name:'皮皮影视播放器', img: require('../../assets/images/zfb.jpg')},
                {name:'皮皮影视播放器', img: require('../../assets/images/zfb.jpg')},
                {name:'皮皮影视播放器', img: require('../../assets/images/zfb.jpg')}
            ],

            //分类导航
            guide: [
                { id: 0, typeName: '影视软件' },
                { id: 1, typeName: '影视软件' },
                { id: 2, typeName: '影视软件' },
                { id: 3, typeName: '影视软件' },
                { id: 4, typeName: '影视软件' },
                { id: 5, typeName: '影视软件' },
                { id: 6, typeName: '影视软件' },
                { id: 7, typeName: '影视软件' },
                { id: 8, typeName: '影视软件' },
                { id: 9, typeName: '影视软件' },
            ],

            //热门下载排行
            hotDownRanking: [
                { name:'王者荣耀2019最新版', rankIcon: require('../../assets/images/1.png'), rankSoftware: require('../../assets/images/攻略.png') },
                { name:'王者荣耀2019最新版', rankIcon: require('../../assets/images/2.png'), rankSoftware: require('../../assets/images/攻略.png') },
                { name:'王者荣耀2019最新版', rankIcon: require('../../assets/images/3.png'), rankSoftware: require('../../assets/images/攻略.png') },
                { name:'王者荣耀2019最新版', rankIcon: require('../../assets/images/4.png'), rankSoftware: require('../../assets/images/攻略.png') },
                { name:'王者荣耀2019最新版', rankIcon: require('../../assets/images/5.png'), rankSoftware: require('../../assets/images/攻略.png') },
                { name:'王者荣耀2019最新版', rankIcon: require('../../assets/images/6.png'), rankSoftware: require('../../assets/images/攻略.png') },
                { name:'王者荣耀2019最新版', rankIcon: require('../../assets/images/7.png'), rankSoftware: require('../../assets/images/攻略.png') },
                { name:'王者荣耀2019最新版', rankIcon: require('../../assets/images/8.png'), rankSoftware: require('../../assets/images/攻略.png') },
                { name:'王者荣耀2019最新版', rankIcon: require('../../assets/images/9.png'), rankSoftware: require('../../assets/images/攻略.png') },
                { name:'王者荣耀2019最新版', rankIcon: require('../../assets/images/10.png'), rankSoftware: require('../../assets/images/攻略.png') },
            ],
            
            //手游推荐 
            mobileGame: [
                { name: '刺激战场', softwareImg: require('../../assets/images/攻略.png') },
                { name: 'QQ飞车', softwareImg: require('../../assets/images/攻略.png') },
                { name: '问道', softwareImg: require('../../assets/images/攻略.png') },
                { name: '刺激战场', softwareImg: require('../../assets/images/攻略.png') },
                { name: 'QQ飞车', softwareImg: require('../../assets/images/攻略.png') },
                { name: '问道', softwareImg: require('../../assets/images/攻略.png') },
                { name: '刺激战场', softwareImg: require('../../assets/images/攻略.png') },
                { name: 'QQ飞车', softwareImg: require('../../assets/images/攻略.png') },
                { name: '问道', softwareImg: require('../../assets/images/攻略.png') },
                { name: '刺激战场', softwareImg: require('../../assets/images/攻略.png') },
                { name: 'QQ飞车', softwareImg: require('../../assets/images/攻略.png') },
                { name: '问道', softwareImg: require('../../assets/images/攻略.png') }
            ]
        }
    },
    methods:{
        //返回一个新的数组
        newArray(arr1, arr2){
            var newArr=[];
            if(arr1.length>0){
                for(var i=0,len=arr1.length;i<len;i++){
                    newArr.push({
                        address: arr1[i],
                        url: arr2[i]
                    })
                }
            }
            return newArr
        },
        //获取详情数据
        getDetails(){

            let that = this

            var id = this.$route.params.typeId
            var server = this.$route.params.type

            var url='http://192.168.10.79:10000/api/'+ server + '/' + id + '?'
            
            this.$axios.get(url).then((res)=>{

                console.log(res.data.data)

                //请求成功
                if(res.data.status == 200){

                    this.softwareObj = res.data.data;

                    this.downUrl = res.data.data.url

                    var addressId = res.data.data.addressId
                   
                   //遍历地址下载对象
                    Object.keys(AddressList).forEach(function(key){

                        //console.log(key,AddressList[key]);
                        //判断当前的软件下载地址是否存在
                        if(key.indexOf(addressId)!=-1){
                            var item = AddressList[key].split("||")
                            
                            var address = item[0], addressUrl = item[1]

                            if(address.length>0){

                                var list1 = address.split(","), list2 = addressUrl.split(",")
                                //console.log(that.newArr)
                                that.addressArr = that.newArray(list1, list2)

                            }
                            
                        }

                    });
                    
                    //判断评价是否有半颗星
                    if(Number.isInteger(res.data.data.star)){
                        this.star = res.data.data.star;
                    }
                    else{
                        this.star = Math.floor(res.data.data.star);
                        this.isShowHalfStart = true
                    }
                }else{
                     //提示
                    this.$notify.warning({
                        title: '温馨提示：',
                        message: '数据获取异常！！！',
                        offset: 300
                    });
                }
                

            }).catch((error) =>{
                console.log('获取失败！', error)

                //提示
                that.$notify.warning({
                    title: '温馨提示：',
                    message: '数据获取失败，请返回首页或软件下载！！！',
                    offset: 300
                });
            })

        },

        //点击下载软件
        downLoadSoftware(index){

            var downUrl = this.addressArr[index].url + this.downUrl
            
            location.href = downUrl
        }
    },
    created(){
        //导航栏选中
        this.curIndex = this.$store.state.allData.navActive

        this.crumbs = this.$store.state.allData.crumbs
        //获取详情数据
        this.getDetails()

    },
    mounted(){
        
    }
}
</script>



<style scoped>

@import '../../assets/css/default.css';
@import '../../assets/css/common.css';

.el-breadcrumb{
    margin-top: 20px;
    padding-left: 10px;
}

</style>