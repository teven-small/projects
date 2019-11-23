<template>
    <div id="dc_softwareHome">

         <!-- 页面头部 -->
        <Header :nowIndex="1"></Header>

        <div class="main clear">

            <div class="lt lt_side">
                <!-- 设备类型 -->
               <div v-for="(item, index) in deviceType" :key="index" :class="{active:index == deviceIndex}" 
                @click="serveClick(index)">{{item.name}}</div>
            </div>

            <div class="lt center_box">

                <!-- 设备类别 -->
                <div v-if="isShow">
                    <div class="center_list box_shadow margin_top_20" v-for="(item1, index1) in deviceData.slice(0,lastNum)" :key="index1">
                        <div class="center_title"><span>{{item1.parentname}}</span></div>
                        <div class="center_item">
                            <span :title="item2.name" v-for="(item2, index2) in item1.chirdList" :key="index2" 
                            @click="jumpSoftware(index1, index2)">{{item2.name}}</span>
                        </div>
                    </div>

                    <div class="showMore" v-show="isShowMore"><span @click="showMore">展示更多 ↓↓↓</span></div>
                </div>

                <div v-else class="no_data margin_top_20">暂无数据</div>

            </div>
            <div class="rt rt_side">
                <!-- 下载周排行 -->
                <div class="side_item box_shadow">
                    <div class="side_title">下载总排行</div>
                    <div>
                        <p :title="item.name" v-for="(item, index) in weekRanking" :key="index">
                            <em :class="[{r1:item.id==1}, {r2:item.id==2}, {r3:item.id==3}]">{{item.id}}</em>
                            {{item.name}}
                        </p>
                    </div>
                </div>

                <!-- 下载周排行 -->
                <div class="side_item box_shadow">
                    <div class="side_title">下载周排行</div>
                    <div>
                        <p v-for="(item, index) in rankingTotal" :key="index" :title="item.name">
                             <em :class="[{r1:item.id==1}, {r2:item.id==2}, {r3:item.id==3}]">{{item.id}}</em>
                            {{item.name}}
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <!-- 页面底部 -->
        <Footer></Footer>
    </div>
</template>


<script>

import Header from '../../components/head'
import Footer from '../../components/foot'

export default {
    components:{
        Header,
        Footer
    },
    data(){
        return{

            lastNum: 10,      //展示前十个

            isShowMore: false,      //显示更多按钮
            
            isShow: false,  //显示数据

            //默认设备类型
            deviceIndex: 0,

            //设备类型
            deviceType:[
                {id: 0, name: 'Windows'},
                {id: 1, name: 'Mac'},
                {id: 2, name: 'Android'},
                {id: 3, name: 'IOS'},
            ],

            //设备类别数据
            deviceData:[],

            //请求参数
            params: {
                device: 'Windows'   
            },

            // 下载周排行
            weekRanking:[
                {id: 1, name:'沙城无双手机版v1.0'},
                {id: 2, name:'我的世界iPhone版v1.0.4'},
                {id: 3, name:'爱思助手iPhone版V2.1.3'},
                {id: 4, name:'海马苹果助手iPhone版V5.2.3'},
                {id: 5, name:'微信2018v6.7.1'},
                {id: 6, name:'多玩我的世界盒子appV2.5.9'},
                {id: 7, name:'手机QQ2018v7.6.3'},
                {id: 8, name:'王者荣耀iOS版v1.33.1.11'},
                {id: 9, name:'全民k歌Appv5.0.6'},
                {id: 10, name:'王者荣耀iPad版v1.32.1.17'},
                {id: 11, name:'网易阴阳师手游v1.0.28'},
                {id: 12, name:'贪吃蛇大作战手机版v4.1.2'},
            ],

            //下载总排行
            rankingTotal:[
                {id: 1, name:'谷歌浏览器(Google '},
                {id: 2, name:'绝地求生刺激战场pc版v0.9.5.5636官方电'},
                {id: 3, name:'抖音短视频电脑版v1.7.4 '},
                {id: 4, name:'Chrome(谷歌浏览器)64位v68.0.3440.106'},
                {id: 5, name:'海马苹果助手iPhone版V5.2.3'},
                {id: 6, name:'青云诀ios版v1.5.4'},
                {id: 7, name:'2345阅读王官方版v4.8'},
                {id: 8, name:'永恒纪元iOS版v3.44.1'},
                {id: 9, name:'仙剑奇侠传3D回合iPad版v3.7.0'},
                {id: 10, name:'熹妃传iPad版v2.0.1'},
                {id: 11, name:'youtube tv版v1.3.8'},
                {id: 12, name:'咪咕直播TV版v2.0.03'},
            ]

        }
    },
    methods:{

         //获取类别数据
        getSoftwareType(params){
           
            //传参获取windo数据
            this.$api.home(params).then((res) => {
            
                if(res.data.status == 200 ){
                    
                    this.isShow = true

                    //存贮数据到store中
                    this.$store.commit('getSoftwareType',res.data.data)

                    this.deviceData = res.data.data

                    //超过10个, 显示展示更多按钮
                    if(res.data.data.length >= 10)
                        this.isShowMore = true
                    else
                        this.isShowMore = false
                }else{
                    this.isShow = false
                    //提示
                    this.$notify.warning({
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
        },

        //跳转
        jumpSoftware(index1,index2){

            var obj = this.deviceData[index1].chirdList[index2]
               
            let params = {
                    type: obj.device,
                    parent_id: index1,
                    chirdren_id: index2,
                    typeId: obj.id
                }
            
            if(obj){

                this.$store.commit('getParameter',params)

                this.$store.commit('getCrumbs', this.$route.meta.breadcrumb)    //软件详情面包屑

                 this.$store.commit('getNavActive', 1)                               //导航栏选中

                //跳转软件下载并传参
                this.$router.push({
                    name: 'software',
                })
            }
            
        },

        //设获不同类型的取备数据
        serveClick(index){
            
            //选中的样式
            this.deviceIndex = index

            //传参
            this.params.device = this.deviceType[index].name
        
            //刷新数据
            this.getSoftwareType(this.params);
        },

        //展示更多
        showMore(){

            this.lastNum = this.deviceData.length       

            this.isShowMore = false                     //隐藏展示更多按钮
        }
    },
    created(){
       
        //获取类别数据
        this.getSoftwareType(this.params);

    }
}
</script>



<style scoped>

@import '../../assets/css/default.css';
@import '../../assets/css/common.css';

</style>

