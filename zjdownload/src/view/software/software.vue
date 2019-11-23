<template>
    <!-- 软件下载区域 -->
    <div id="dc_software">

         <!-- 页面头部 -->
        <Header :nowIndex="curIndex"></Header>

        <div class="main">
            <div class="down_box_ top_icon_model box_shadow padding_20 margin_top_20">
                <div class="hot_icon"></div>
                <div v-for="(item,index) in software_list" :key="index">
                    <img :src="item.url" alt="">
                    <p>{{item.name}}</p>
                </div>
            </div>
    
            <div class="content1 margin_top_20">
                <div class="lt">
                    <div class="box_shadow">
                        <p class="_title">热门手游</p>
                        <div class="list_soft padding_bottom_20">
                            <div><span>视频媒体</span><span>(1234456)</span></div>
                            <div><span>视频媒体</span><span>(1234456)</span></div>
                            <div><span>视频媒体</span><span>(1234456)</span></div>
                        </div>
                    </div>
                    <div class="margin_top_20 box_shadow padding_bottom_20">
                        <p class="_title">热门手游</p>
                        <div class="top_icon_model hot_software">
                            <div>
                                <img src="../../assets/images/精品.png" alt="">
                                <p>精品</p>
                            </div>
                            <div>
                                <img src="../../assets/images/精品.png" alt="">
                                <p>精品</p>
                            </div>
                            <div>
                                <img src="../../assets/images/精品.png" alt="">
                                <p>精品</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rt rt_box padding_20 box_shadow" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.5)"
                    element-loading-spinner="el-icon-loading" element-loading-text="拼命加载中...">
                    <div class="section_title">
                        <div v-for="(item,index) in category" :key="index" :class="isActive==index?'active':''"
                        @click="clickSoftware(index)">{{item.name}}</div>
                    </div>
                    <div class="section_list margin_top_20">
                        
                        <div v-if="show" >
                            <div class="lt_img_model" v-for="(item,index) in softwareList" :key="index">
                                <div class="model_icon inline_div">
                                    <img :onerror="errorImg" :src="item.img" alt="">
                                </div>
                                <div class="inline_div details">
                                    <div style="margin-bottom: 6px;">
                                        <b @click="jumpDown(index)">{{item.name}}</b>
                                        <span class="color_D4">更新时间：{{item.newTime.slice(0,7)}}</span>
                                    </div>
                                    <div class="detail color_B2">万能数据恢复大师软件具备文件恢复、支持多种设备、常见文件预览、分区格式化后恢复功能。该软件支持从</div>
                                </div>
                                <div class="down_btn inline_div" @click="jumpDown(index)">立即下载</div>
                            </div>

                            <!-- 分页 -->
                            <div class="pageNumber padding_20">
                                <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize" :current-page="pageIndex"
                                @current-change="changeNumber"></el-pagination>
                            </div>
                        </div>

                        <div v-else class="no_data">暂无数据</div>

                    </div>
                </div>
            </div>
        </div>

        <!-- 页面底部 -->
        <Footer></Footer>
    </div>
</template>


<script>

import errorPhoto from '../../assets/images/errorImg.png'
import Header from '../../components/head'
import Footer from '../../components/foot'

export default {
    components:{
        Header,
        Footer
    },
    data(){
        return{

            errorImg:'this.src="' + errorPhoto + '"',

            loading: false,       //加载 

            isActive: null,      //类别按钮选中
            show: false,         //列表显示

            curIndex: null,      //导航栏显示

            software_list:[
                {name:'QQ音乐', url:require('../../assets/images/尝鲜.png')},
                {name:'QQ音乐', url:require('../../assets/images/尝鲜.png')},
                {name:'QQ音乐', url:require('../../assets/images/尝鲜.png')},
                {name:'QQ音乐', url:require('../../assets/images/尝鲜.png')},
                {name:'QQ音乐', url:require('../../assets/images/尝鲜.png')},
            ],

            //软件类别
            category:[],

            //软件列表
            softwareList: [],

            //软件列表参数
            typeId: null,
            server: null,

            //分页参数
            pageIndex: 1,
            pageSize: 10,
            total:null

        }
    },
    methods:{
        jumpDown(index){
            //this.$router.replace({name:'details'})
            //获取列表id
            var id = this.softwareList[index].id
            if(id){
                
                //跳转软件下载详情并传参
                this.$router.push({
                    name: 'softwareDetails',
                    params: {
                        type: this.$store.state.allData.parameter.type,//this.$route.params.type,
                        typeId: id,
                    }
                })
            }
            
            
        },

        //获取软件数据
        getSoftware(size, index){
            
            //软件下载列表接口
            if(this.server){
                
                //接口地址
                var url= 'http://192.168.10.79:10000/api/list/'+ this.server +'?typeId=' + this.typeId + '&page='+ index +'&size='+ size
                
                //获取软件下载列表
                this.$axios.get(url).then((res)=>{
                    
                    //请求相应成功
                    if(res.data.status==200){
                        console.log(res.data.data)
                        
                        this.loading = false

                        this.show = true                            //显示内容

                        this.softwareList = res.data.data           //响应返回的数据

                        this.pageIndex = res.data.page.pageNo       //分页当前页

                        this.pageSize = res.data.page.pageSize      //分页每页大小

                        this.total = res.data.page.total            //分页总条数
                        
                    }else{
                        //提示
                        this.$notify.warning({
                            title: '温馨提示：',
                            message: '数据获取异常！！！',
                            offset: 300
                        });
                    }
                }).catch((error) => {

                    console.log('获取失败！', error);
                     //提示
                    this.$notify.error({
                        title: '温馨提示：',
                        message: '数据获取失败！！！',
                        offset: 300
                    });

                });
            }else
                this.show = false

        },

        //分页
        changeNumber(val){
            //console.log("当前页已经发生变化")
            this.pageIndex = val

            this.loading = true

            //获取软件数据
            this.getSoftware(this.pageSize, val)

        },

        //切换分类
        clickSoftware(index){
             
            //给点击的标签添加选中样式
            this.isActive = index

            //点击标签的id
            this.typeId = this.category[index].id

            //保存当前点击按钮的active
            this.$store.commit("getChirdrenId", index)

            this.loading = true

            //获取软件数据
            this.getSoftware(this.pageSize, this.pageIndex=1)
        },
    },
    created(){
        
        //导航栏选中
        this.curIndex = this.$store.state.allData.navActive

        //获取首页点击类别传的参数
        this.typeId = this.$store.state.allData.parameter.typeId
        this.server = this.$store.state.allData.parameter.type

        //当前选中的类别index值
        this.isActive = this.$store.state.allData.parameter.chirdren_id    

        //类别的index
        var p_id = this.$store.state.allData.parameter.parent_id
        
        //类别数据
        var softwareTypeList = this.$store.state.allData.softwareType;
        
        if(softwareTypeList[p_id] != undefined){
            
            //类别的子类数据
            this.category = softwareTypeList[p_id].chirdList

             //获取软件数据
            this.getSoftware(this.pageSize, this.pageIndex)
        }else{
            //提示
            this.$notify.warning({
                title: '温馨提示：',
                message: '页面加载异常，请返回首页或软件下载！！！',
                offset: 300
            });
        }
    },

    //组件销毁
    beforeDestroy(){
        
    }
}
</script>




<style scoped>

@import '../../assets/css/default.css';
@import '../../assets/css/common.css';

</style>